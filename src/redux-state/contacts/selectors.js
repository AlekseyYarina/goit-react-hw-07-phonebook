export const selectFilter = store => store.contacts.filter;
export const selectContacts = store => store.contacts.contacts.items;
export const selectIsLoading = store => store.contacts.contacts.isLoading;
export const selectError = store => store.contacts.contacts.error;
