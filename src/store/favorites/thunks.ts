import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LocalStorageEnum } from '../../shared/enum/LocalStorage';
import { IMovieDetails } from '../../screens/MovieDetails/interfaces';
import { RootState } from '../types';

export const loadMyfavorites = createAsyncThunk('load/favorite', async () => {
  const result = await AsyncStorage.getItem(LocalStorageEnum.favorites);

  if (result !== null) {
    return JSON.parse(result);
  }

  return [];
});

export const addToMyfavorites = createAsyncThunk(
  'add/favorite',
  async (movie: IMovieDetails, thunkApi) => {
    let { favorites } = thunkApi.getState() as RootState;

    const updateFavorites = [...favorites, movie];

    await AsyncStorage.setItem(
      LocalStorageEnum.favorites,
      JSON.stringify(updateFavorites)
    );

    return updateFavorites;
  }
);
export const deleteFromMyfavorites = createAsyncThunk(
  'delete/favorite',
  async (id: number, thunkApi) => {
    let { favorites } = thunkApi.getState() as RootState;

    const updateFavorites = favorites.filter((item) => item.id !== id);

    await AsyncStorage.setItem(
      LocalStorageEnum.favorites,
      JSON.stringify(updateFavorites)
    );

    return updateFavorites;
  }
);
