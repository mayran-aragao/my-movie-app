import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ListRenderItem, Share } from 'react-native';
import { useTheme } from 'styled-components';

import { Loading } from '../../components/Loading';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import CastCard from './components/CastCard';
import { ToastBottomAndroid } from '../../components/ToastBottomAndroid';

import ApiService from '../../shared/services/ApiService';

import { useAppSelector } from '../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import {
  loadMyfavorites,
  addToMyfavorites,
  deleteFromMyfavorites,
} from '../../store/favorites/thunks';

import { ICastDetails, ICastReponse, IMovieDetails } from './interfaces';
import * as C from './styled';

const MovieDetails = ({
  navigation,
  route,
}: NativeStackScreenProps<any, 'MovieDetails'>): JSX.Element => {
  const id = route?.params?.id;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const myFavorites = useAppSelector((store) => store.favorites);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [movieCast, setMovieCast] = useState<ICastDetails[]>([]);
  const [isOnMyFavoriteList, setIsOnMyFavoriteList] = useState<boolean>(false);

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);

      const { data } = await ApiService.get(`/movie/${id}`, {
        params: { language: 'pt-BR' },
      });

      setMovieDetails(data);
    } catch (error) {
      ToastBottomAndroid(`Um erro aconteceu: ${error}`);

      navigation.goBack();
    } finally {
      setIsLoading(false);
    }
  };

  const getMovieCredits = async () => {
    try {
      const {
        data: { cast },
      } = await ApiService.get<ICastReponse>(`/movie/${id}/credits`, {
        params: { language: 'pt-BR' },
      });

      setMovieCast(cast);
    } catch (error) {
      console.log(error);
      navigation.goBack();
    }
  };

  const handleAddToFavorites = async () => {
    if (movieDetails) {
      dispatch(addToMyfavorites(movieDetails));
    }
  };

  const handleRemoveFavorite = async () => {
    dispatch(deleteFromMyfavorites(id));
  };

  const getMyFavoritesMovies = async () => {
    dispatch(loadMyfavorites());
  };

  const handleShare = () => {
    try {
      Share.share({
        message: `Se liga nesse filme com nota ${movieDetails?.vote_average.toFixed(
          1
        )}⭐️ 🍿🎬😯:
          ${movieDetails?.title}

          ${movieDetails?.overview}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const SetHeaderRight = () => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name='share-variant' size={24} onPress={handleShare} />
      ),
    });
  };

  useEffect(() => {
    (async () => {
      SetHeaderRight();
      await Promise.all([
        getMyFavoritesMovies(),
        getMovieDetails(),
        getMovieCredits(),
      ]);
    })();
  }, []);

  useEffect(() => {
    setIsOnMyFavoriteList(myFavorites.some((favorite) => favorite.id === id));
  }, [myFavorites]);

  const renderItem: ListRenderItem<ICastDetails> = ({ item }) => {
    return <CastCard item={item} />;
  };

  return (
    <C.Container>
      {isLoading ? (
        <C.LoadingView>
          <Loading isLoading={isLoading} size='large' />
        </C.LoadingView>
      ) : (
        <C.Content showsVerticalScrollIndicator={false}>
          <C.GenericRowView>
            <C.ImageView>
              <C.Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`,
                }}
              />
            </C.ImageView>

            <C.TextView>
              <Text
                size='normal'
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
                color='warning'
              >
                {movieDetails?.title}
              </Text>

              {movieDetails?.tagline && (
                <Text
                  size='normal'
                  style={{
                    fontWeight: '500',
                    marginTop: 10,
                    textAlign: 'center',
                  }}
                >
                  {movieDetails?.tagline}
                </Text>
              )}

              <C.Rating>
                <Text
                  size='normal'
                  color='white'
                  style={{ fontWeight: '500', marginRight: 4 }}
                >
                  {movieDetails?.vote_average.toFixed(1)}
                </Text>

                <Icon name='star' size={18} color='warning' />
              </C.Rating>

              <Text size='normal' style={{ fontWeight: '500', marginTop: 10 }}>
                Gêneros:
              </Text>

              <C.GenericRowView style={{ flexWrap: 'wrap', gap: 6 }}>
                {movieDetails?.genres.map((genre) => (
                  <Text
                    size='normal'
                    style={{
                      fontWeight: '400',
                      backgroundColor: theme.colors.warning,
                      borderRadius: 4,
                      padding: 6,
                    }}
                    key={genre.id}
                  >
                    {genre.name}
                  </Text>
                ))}
              </C.GenericRowView>
            </C.TextView>
          </C.GenericRowView>

          <C.Favorite
            onPress={
              isOnMyFavoriteList ? handleRemoveFavorite : handleAddToFavorites
            }
            isMyFavorite={isOnMyFavoriteList}
          >
            <Text size='normal' color='white' style={{ textAlign: 'center' }}>
              {isOnMyFavoriteList
                ? 'Remover favorito'
                : 'Adicionar aos favoritos'}
            </Text>
          </C.Favorite>

          {!!movieCast.length && (
            <C.Body>
              <Text size='normal' style={{ fontWeight: '500' }}>
                Sinopse:
              </Text>
              <Text
                size='normal'
                style={{
                  fontWeight: '400',
                  textAlign: 'justify',
                }}
              >
                {movieDetails?.overview}
              </Text>

              <C.CastList
                data={movieCast}
                renderItem={renderItem}
                keyExtractor={(item: ICastDetails, index) =>
                  `${item.id + index}`
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </C.Body>
          )}
        </C.Content>
      )}
    </C.Container>
  );
};

export default MovieDetails;
