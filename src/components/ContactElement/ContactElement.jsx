import { useDispatch } from 'react-redux';
import { removeContact } from 'redux-state/contacts/contactsSlice';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    const action = removeContact(id);
    dispatch(action);
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
