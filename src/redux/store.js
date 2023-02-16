import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer, // [] - array default from contactsSlice
    filter: filterSlice.reducer, // '' - string default from filterSlice
  },
});

// state
// {
// 	contacts: [],
// 	filter: ''
// }
