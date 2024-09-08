import React, { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/selectors';

const SearchBox = React.memo(() => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = e => {
    const search = e.target.value.trim();
    dispatch(changeFilter(search));
  };

  return (
    <form className={styles.filterContainer}>
      <label htmlFor={searchId} className={styles.filterLabel}>
        Find contacts by name
      </label>
      <input
        id={searchId}
        className={styles.filterInput}
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        value={filterValue}
        onChange={handleChange}
      />
    </form>
  );
});

export default SearchBox;
