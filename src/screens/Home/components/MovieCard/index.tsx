import React from 'react';

import { IMovieProps } from '../../interfaces';

import { Container, Image, ImageView } from './styles';
import Text from '../../../../components/Text';

type IMovieCardProps = {
  item: IMovieProps;
  onPress: Function;
};

const MovieCard = ({ item, onPress }: IMovieCardProps) => {
  return (
    <Container onPress={() => onPress(item.id)}>
      <ImageView>
        {item.poster_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
          />
        ) : (
          <Text size='normal' style={{ fontWeight: '500' }}>
            Sem foto
          </Text>
        )}
      </ImageView>
    </Container>
  );
};

export default MovieCard;
