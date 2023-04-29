import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';

import { Loading } from '../../components/Loading';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import CastCard from './components/CastCard';

import ApiService from '../../shared/services/ApiService';

import { ICastDetails, ICastReponse, IMovieDetails } from './interfaces';
import * as C from './styled';

const MovieDetails = ({
  navigation,
  route,
}: NativeStackScreenProps<any, 'MovieDetails'>): JSX.Element => {
  const id = route?.params?.id;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [movieCast, setMovieCast] = useState<ICastDetails[]>([]);

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);

      const { data } = await ApiService.get(`/movie/${id}`, {
        params: { language: 'pt-BR' },
      });

      setMovieDetails(data);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    (async () => {
      await Promise.all([getMovieDetails(), getMovieCredits()]);
    })();
  }, []);

  const renderItem: ListRenderItem<ICastDetails> = ({ item }) => {
    return <CastCard item={item} />;
  };

  return (
    <C.Container>
      <Loading isLoading={isLoading} size='large' />

      <C.Header>
        <C.ImageView>
          <C.Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`,
            }}
          />

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
                textAlign: 'justify',
              }}
            >
              {movieDetails?.tagline}
            </Text>
          )}

          <Text
            size='normal'
            style={{
              fontWeight: '400',
              marginTop: 10,
              textAlign: 'justify',
            }}
          >
            {movieDetails?.overview}
          </Text>
        </C.TextView>
      </C.Header>

      {!!movieCast.length && (
        <C.Body>
          <C.CastList
            data={movieCast}
            renderItem={renderItem}
            keyExtractor={(item: ICastDetails, index) => `${item.id + index}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </C.Body>
      )}

      <C.Footer>
        <C.Favorite>
          <Text size='normal' color='white' style={{ textAlign: 'center' }}>
            Adicionar aos favoritos
          </Text>
        </C.Favorite>
      </C.Footer>
    </C.Container>
  );
};

export default MovieDetails;
