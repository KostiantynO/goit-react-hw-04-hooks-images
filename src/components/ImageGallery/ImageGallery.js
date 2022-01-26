import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

// key={image.id} if need to change collection.
export const ImageGallery = ({ images = [{}], showSkeleton, onShowModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image, id) => (
        <ImageGalleryItem
          key={id}
          image={image}
          showSkeleton={showSkeleton}
          onShowModal={onShowModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onShowModal: PropTypes.func,
};
