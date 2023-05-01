import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortByInitialState } from './initialState';
import { ISortByProp } from './interfaces';

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState: sortByInitialState,
  reducers: {
    changeSortBy: (_, actions: PayloadAction<ISortByProp>) => {
      return actions.payload;
    },
  },
});
