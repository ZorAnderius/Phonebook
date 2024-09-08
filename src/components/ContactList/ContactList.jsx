import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilteredContacts, selectNameFilter } from '../../redux/selectors';
import { message } from '../../helpers/searchMessage';
import NotFound from '../NotFound/NotFound';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = React.memo(() => {
  const contacts = useSelector(selectFilteredContacts);
  const filterValue = useSelector(selectNameFilter);

  return contacts?.length > 0 ? (
    <ul className={styles.contactsContainer}>
      {contacts.map(contact => {
        return (
          <li key={contact.number} className={styles.contactCard}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  ) : (
    <NotFound value={filterValue}>
      {filterValue ? message.notFound : message.empty}
    </NotFound>
  );
});

export default ContactList;
