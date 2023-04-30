import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favorites/slice';
import { userSlice } from './user/slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
    user: userSlice.reducer,
  },
});
