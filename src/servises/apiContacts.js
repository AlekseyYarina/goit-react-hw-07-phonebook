import axios from 'axios';

const instance = axios.create({
  baseURL: `https://65ba4abcb4d53c06655280d8.mockapi.io/contacts`,
});

export const requestContacts = async () => {
  try {
    const { data } = await instance.get('/contacts');

    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const requestDeleteContact = async contactId => {
  try {
    await instance.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    console.error('Error delete contact:', error);
    throw error;
  }
};

export const requestAddContact = async formData => {
  try {
    const { data } = await instance.post('/contacts', formData);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};
