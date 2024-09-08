import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import {
  handleFulfilled,
  handleFulfilledAddContact,
  handleFulfilledAllContacts,
  handleFulfilledDeleteContact,
  handlePending,
  handleRejected,
} from './handlers';
import { STATUS } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledAllContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addMatcher(action => action.type.endsWith(STATUS.pending), handlePending)
      .addMatcher(
        action => action.type.endsWith(STATUS.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith(STATUS.rejected),
        handleRejected
      ),
});

export const contactsReducer = contactsSlice.reducer;
