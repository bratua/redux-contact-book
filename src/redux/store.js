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

import { contactsRreducer, filterSlice } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsRreducer, // [] - array default from contactsSlice
    filter: filterSlice.reducer, // '' - string default from filterSlice
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
