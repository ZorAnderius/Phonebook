export const handlePending = state => {
  state.loading = true;
};

export const handleFulfilled = state => {
  state.loading = false;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error;
};

export const handleFulfilledAllContacts = (state, action) => {
  state.items = action.payload;
};

export const handleFulfilledAddContact = (state, action) => {
  state.items.push(action.payload);
};

export const handleFulfilledDeleteContact = (state, action) => {
  const indx = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(indx, 1);
};
