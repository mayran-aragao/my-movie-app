import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LocalStorageEnum } from '../../shared/enum/LocalStorage';

export const loadLanguage = createAsyncThunk('load/language', async () => {
  const result = await AsyncStorage.getItem(LocalStorageEnum.language);

  if (result !== null) {
    return JSON.parse(result);
  }

  return { language: 'pt-BR' };
});

export const changeLanguage = createAsyncThunk(
  'change/language',
  async (language: string) => {
    await AsyncStorage.setItem(
      LocalStorageEnum.language,
      JSON.stringify({ language: language })
    );

    return { language: language };
  }
);
