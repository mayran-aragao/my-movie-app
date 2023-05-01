import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favorites/slice';
import { userSlice } from './user/slice';
import { languageSlice } from './language/slice';
import { sortBySlice } from './sortBy/slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
    user: userSlice.reducer,
    language: languageSlice.reducer,
    sortBy: sortBySlice.reducer,
  },
});
