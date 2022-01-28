import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';
import { forwardRef } from 'react';

// key={image.id} if need to change collection.
export const ImageGallery = forwardRef(({ images = [{}], ...props }, ref) => (
  <ul ref={ref} className={css.ImageGallery}>
    {images.map((image, id) => (
      <ImageGalleryItem key={id} image={image} {...props} />
    ))}
  </ul>
));

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onShowModal: PropTypes.func,
  showSkeleton: PropTypes.bool,
};
