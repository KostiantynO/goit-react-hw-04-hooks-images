import { PropTypes } from 'prop-types';
import React from 'react';
import css from './Button.module.css';

export const Button = ({
  type = 'button',
  onLoadMoreImages,
  hasNextPage,
  ...props
}) => {
  if (hasNextPage) {
    return (
      <button
        className={css.Button}
        type={type}
        onClick={onLoadMoreImages}
        {...props}
      />
    );
  }

  return null;
};

Button.propTypes = {
  type: PropTypes.string,
  hasNextPage: PropTypes.bool,
  onLoadMoreImages: PropTypes.func.isRequired,
};
