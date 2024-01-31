import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux-state/contacts/contactsReducer';
import { selectContacts } from 'redux-state/contacts/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contact.`);
      return;
    }
    const finalContact = { id: nanoid(), ...formData };
    const action = addContact(finalContact);
    dispatch(action);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const formData = {
      name,
      number,
    };

    handleAddContact(formData);
    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Ivan Ivanov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <span>Phone number</span>
        <input
          type="tel"
          name="number"
          placeholder="+38(011)111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
