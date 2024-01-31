import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      // state.contacts = [...state.contacts, action.payload];
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    removeContact(state, action) {
      // state.contacts = state.contacts.filter(
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
