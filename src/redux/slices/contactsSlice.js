import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactsData: [] },
  reducers: {
    addContact: (state, action) => state,
    deleteContact: (state, action) => state,
    editContact: (state, action) => state,
  },
});

export const contactsRreducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
