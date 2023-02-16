import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => state,
    deleteContact: (state, action) => state,
    editContact: (state, action) => state,
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
