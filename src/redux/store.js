import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {
  contactsSlice,
  contactsRreducer,
  filterSlice,
  filterReducer,
} from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsRreducer, // [] - array default from contactsSlice
    filter: filterReducer, // '' - string default from filterSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
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
