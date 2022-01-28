import { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import { AiOutlineClose } from 'react-icons/ai';
import { API } from 'apis';
import { Searchbar, ImageGallery, Loader, Button, Modal } from 'components';

import 'react-loading-skeleton/dist/skeleton.css';
import css from './App.module.css';
import { toast } from 'react-toastify';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const { IDLE, PENDING, RESOLVED, REJECTED } = Status;
const skeletonArray = Array(12).fill(<Skeleton />, 0);
const perPage = 12;

export const App = () => {
  const [status, setStatus] = useState(IDLE);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState({});
  const isFirstRender = useRef(true);
  const galleryRef = useRef(null);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
  };

  useEffect(() => {
    if (isFirstRender.current) return;

    const getImagesOnSearchSubmit = async () => {
      setStatus(PENDING);

      try {
        const { hits, totalHits } = await API.fetchImages(query, page);

        if (page === 1) {
          setImages(hits);
          setTotalHits(totalHits);
        } else {
          setImages(images => [...images, ...hits]);
        }

        await API.imagesComplete();

        setStatus(RESOLVED);
      } catch (error) {
        setError(error);
        toast.error(error.message);
        setStatus(REJECTED);
      }
    };

    getImagesOnSearchSubmit();
  }, [query, page]);

  useEffect(() => (isFirstRender.current = false), []);

  // derived data
  const hasImages = images?.length > 0;
  const showSkeleton = !hasImages;
  const isLoading = status === PENDING;
  const isError =
    error || status === REJECTED || (status === RESOLVED && !hasImages);
  const arrayToRender = hasImages ? images : isLoading ? skeletonArray : [];
  const hasNextPage = totalHits > page * perPage;
  const needToOpenModal = showModal && Object.keys(showModal).length > 0;

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSearchSubmit} status={status} />

      <ImageGallery
        ref={node => (galleryRef.current = node)}
        images={arrayToRender}
        showSkeleton={showSkeleton}
        onShowModal={setShowModal}
      />

      {isLoading && <Loader />}

      {isError && (
        <p className={css.ErrorMessage}>
          Found {totalHits} results for <b>"{query}"</b> Please try new search!
        </p>
      )}

      {hasImages && (
        <>
          {!isLoading && (
            <Button
              hasNextPage={hasNextPage}
              onLoadMoreImages={() => setPage(page => page + 1)}
            >
              Load More
            </Button>
          )}

          {needToOpenModal && (
            <Modal onClose={() => setShowModal({})}>
              <button
                type="button"
                className={css.CloseBtn}
                autoFocus
                onClick={() => setShowModal({})}
              >
                <AiOutlineClose className={css.CloseIcon} />
              </button>

              <img src={showModal.largeImageURL} alt={showModal.tags} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};
