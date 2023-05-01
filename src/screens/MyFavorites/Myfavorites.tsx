import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ListRenderItem } from 'react-native';

import { IMovieDetails } from '../MovieDetails/interfaces';
import { useAppSelector } from '../../store/hooks/useAppSelector';

import FavoriteCard from './components/FavoriteCard';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';

import { deleteFromMyfavorites } from '../../store/favorites/thunks';
import { ToastBottomAndroid } from '../../components/ToastBottomAndroid';
import { Container, FavoriteList, Image } from './styles';

const MyFavorites = ({
  navigation,
}: NativeStackScreenProps<any, 'MyFavorites'>): JSX.Element => {
  const dispatch = useAppDispatch();
  const myFavorites = useAppSelector((store) => store.favorites);

  const handleRemoveFromFavoriteList = (item: IMovieDetails) => {
    dispatch(deleteFromMyfavorites(item.id));
    ToastBottomAndroid(`${item.title} removido com sucesso`);
  };

  const renderItem: ListRenderItem<IMovieDetails> = ({ item }) => {
    return (
      <FavoriteCard
        item={item}
        onPress={() => navigation.navigate('MovieDetails', { id: item.id })}
        onPressStar={handleRemoveFromFavoriteList}
      />
    );
  };

  return (
    <Container>
      {myFavorites.length ? (
        <FavoriteList
          data={myFavorites}
          keyExtractor={(item, index) => `${item.id + index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Image source={require('../../assets/no-favorites.jpg')} />
      )}
    </Container>
  );
};

export default MyFavorites;
