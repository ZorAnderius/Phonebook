const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
  notification: {
    message: '',
    toastType: '',
    toastId: '',
  },
};

export default initialState;
