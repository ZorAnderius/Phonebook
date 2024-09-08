import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOps';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectNotify } from '../redux/notification/notificationSlice';
import { selectError, selectLoading } from '../redux/contacts/selectors';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import SearchBox from './SearchBox/SearchBox';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';

import styles from './App.module.css';

function App() {
  const notification = useSelector(selectNotify);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const { message, toastId, toastType } = notification;
    if (toastType && message) {
      toast[toastType](<Notification>{message}</Notification>, {
        className: styles[`toast-${toastType}`],
        toastId,
      });
    }
  }, [notification]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      {error ? (
        <ErrorNotification />
      ) : (
        <>
          <ContactForm />
          <SearchBox />
          {loading ? <Loader /> : <ContactList />}
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
