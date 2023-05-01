import { createSlice } from '@reduxjs/toolkit';
import { languageInitialState } from './initialState';
import { changeLanguage, loadLanguage } from './thunks';

export const languageSlice = createSlice({
  name: 'language',
  initialState: languageInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadLanguage.fulfilled, (_, action) => {
        return action.payload;
      })
      .addCase(changeLanguage.fulfilled, (_, action) => {
        return action.payload;
      });
  },
});
