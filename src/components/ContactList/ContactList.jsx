import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactElement, ErrorMessage, Loader } from 'components';
import css from './ContactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux-state/contacts/selectors';
import { apiGetContacts } from 'redux-state/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!error && (
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
      )}
    </div>
  );
};
