import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterData: '' },
  reducers: {
    changeFilter: (state, action) => state,
  },
});

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

export const { changeFilter } = filterSlice.actions;
