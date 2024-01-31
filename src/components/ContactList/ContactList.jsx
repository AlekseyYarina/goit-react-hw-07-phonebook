import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactElement } from 'components';
import css from './ContactList.module.css';
import {
  selectContacts,
  // selectError,
  selectFilter,
  // selectStatus,
} from 'redux-state/contacts/selectors';
import { apiGetContacts } from 'redux-state/contacts/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const status = useSelector(selectStatus);
  // const error = useSelector(selectError);

  // console.log(contacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterValue = filter || '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
};
