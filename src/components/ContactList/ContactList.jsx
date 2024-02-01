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
import { apiGetContacts } from 'redux-state/contacts/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  // к сожалению после удаления контакта, обновленный массив контактов содержит удаленный. Не могу найти причину =(
  useEffect(() => {
    console.log('Update contacts:', contacts);
  }, [contacts]);

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
      {!isLoading && !error && (
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

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { ContactElement } from 'components';
// import css from './ContactList.module.css';
// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   selectIsLoading,
// } from 'redux-state/contacts/selectors';
// import { apiGetContacts } from 'redux-state/contacts/contactsSlice';
// import { Loader } from 'components/Loader/Loader';

// export const ContactList = () => {
//   const dispatch = useDispatch();

//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   // console.log(contacts);

//   useEffect(() => {
//     dispatch(apiGetContacts());
//   }, [dispatch]);

//   const getFilteredContacts = () => {
//     const filterValue = filter || '';
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.trim().toLowerCase())
//     );
//   };

//   const filteredContacts = getFilteredContacts();

//   return (
//     <div>
//       {isLoading === true && <Loader />}
//       {isLoading === true && <Loader />}
//       {isLoading === false && (
//         <ul className={css.contacts}>
//           {filteredContacts.map(contact => (
//             <ContactElement
//               key={contact.id}
//               id={contact.id}
//               name={contact.name}
//               phone={contact.phone}
//             />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
