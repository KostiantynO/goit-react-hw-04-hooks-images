import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchForm } from 'components';
import { Status } from 'components/App';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit, status }) => {
  const [query, setQuery] = useState('');

  const inputQueryChange = e => setQuery(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();

    const normalizedInput = query.trim().toLowerCase();

    if (normalizedInput === '') {
      return toast.error('Пожалуйста, введите запрос');
    }

    onSubmit(normalizedInput);
    setQuery('');
  };

  const searchFormProps = {
    onSubmit: handleFormSubmit,
    onChange: inputQueryChange,
    disabled: status === Status.PENDING,
    query,
  };

  return (
    <header className={css.Searchbar}>
      <SearchForm {...searchFormProps} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  status: PropTypes.string,
};
