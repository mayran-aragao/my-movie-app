import { createSlice } from '@reduxjs/toolkit';
import { favoriteInitialState } from './initialState';
import {
  addToMyfavorites,
  deleteFromMyfavorites,
  loadMyfavorites,
} from './thunks';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: favoriteInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMyfavorites.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addToMyfavorites.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteFromMyfavorites.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});
