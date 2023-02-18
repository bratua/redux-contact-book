import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactsData: [] },
  reducers: {
    addContact: (state, action) => {
      state.contactsData.push(action.payload);
    },

    deleteContact: (state, action) => {
      console.log('DELETE action.payload', action.payload);
      const indexToDelete = state.contactsData.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsData.splice(indexToDelete, 1);
    },

    editContact: (state, action) => {
      const indexToUpdate = state.contactsData.findIndex(
        contact => contact.id === action.payload.id
      );
      console.log('indexToUpdate', indexToUpdate);
      console.log('editContact', action.payload);

      state.contactsData.splice(indexToUpdate, 1, action.payload);
    },
  },
});

export const contactsRreducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
