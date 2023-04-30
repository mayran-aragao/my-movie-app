import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LocalStorageEnum } from '../../shared/enum/LocalStorage';

export const loadUser = createAsyncThunk('load/user', async () => {
  const result = await AsyncStorage.getItem(LocalStorageEnum.user);

  if (result !== null) {
    return JSON.parse(result);
  }

  return [];
});

export const signOut = createAsyncThunk('signOut/user', async () => {
  await AsyncStorage.removeItem(LocalStorageEnum.user);

  return { email: '', uid: '' };
});
