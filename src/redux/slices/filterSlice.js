import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: '',
  },
  reducers: {
    filterValue: (state, action) => {},
  },
});

export const { addContact, deleteContact, editContact } = filterSlice.actions;
