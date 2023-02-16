import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterReducer } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer, // [] - array
    filter: filterReducer.reducer, // '' - string
  },
});
