import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/filtersSlice';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) =>
    contacts
      ?.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name))
);
