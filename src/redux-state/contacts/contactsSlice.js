import { createSlice } from '@reduxjs/toolkit';
import { apiDeleteContact, apiGetContacts } from './operations';

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
    // addContact(state, action) {
    //   state.contacts.items = [...state.contacts.items, action.payload];
    // },
    // removeContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiGetContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state, action) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const contactId = action.payload;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== contactId
        );
        console.log('State after contact deletion:', state.contacts.items); //test
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
