import { useDispatch } from 'react-redux';
import {
  apiDeleteContact,
  // removeContact,
} from 'redux-state/contacts/contactsSlice';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  // const handleDeleteContact = () => {
  //   const action = removeContact(id);
  //   dispatch(action);
  // };

  const handleDeleteContact = async () => {
    try {
      await dispatch(apiDeleteContact(id));
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
