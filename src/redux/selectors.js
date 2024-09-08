import { createSelector } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.name;

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

export const selectNotify = state => state.notification;
