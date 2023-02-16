import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {},
    deleteContact: (state, action) => {},
    editContact: (state, action) => {},
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
