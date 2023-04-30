import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favorites/slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});
