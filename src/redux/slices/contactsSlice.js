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
      return;
    },

    editContact: (state, action) =>
      state.contactsData.map(contact => {
        if (contact.id !== action.payload.id) {
          return contact;
        }
        return {
          name: action.payload.name,
          number: action.payload.number,
          id: action.payload.id,
        };
      }),
  },
});

export const contactsRreducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
