import { useDispatch } from 'react-redux';

import css from './ContactElement.module.css';
import { apiDeleteContact } from 'redux-state/contacts/operations';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async () => {
    try {
      await dispatch(apiDeleteContact(id)).unwrap();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <li className={css.contactElement}>
      <p>
        &#8226; {name}: {phone}
      </p>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};
