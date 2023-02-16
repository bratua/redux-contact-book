import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { contactsRreducer, filterReducer } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsRreducer, // [] - array default from contactsSlice
    filter: filterReducer, // '' - string default from filterSlice
  },
});

export const persistor = persistStore(store);

//* State object
// {
//   contacts: {
//     contactsData: []
//   },
//   filter: {
//     filterData: ''
//   }
// }
