import React from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit, onChange, disabled, query }) => {
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <label className={css.Label}>
        <input
          name="query"
          value={query}
          onChange={onChange}
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </label>

      <button type="submit" className={css.Button} disabled={disabled}>
        <ImSearch className={css.SearchIcon} />
        <span className={css.ButtonLabel}>Search</span>
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  query: PropTypes.string.isRequired,
};
