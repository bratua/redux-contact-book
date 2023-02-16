import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'PhoneBook',
  storage,
  whitelist: ['contactsData'],
};
