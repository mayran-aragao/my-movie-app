import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState } from './initialState';
import { IUserSignInProps } from './interfaces';
import { loadUser, signOut } from './thunks';

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    signIn: (_, action: PayloadAction<IUserSignInProps>) => {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadUser.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(signOut.fulfilled, (_, action) => {
        return action.payload;
      });
  },
});
