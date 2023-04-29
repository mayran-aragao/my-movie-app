import React from 'react';

import { IMovieProps } from '../../interfaces';

import { Container, Image } from './styles';

type IMovieCardProps = {
  item: IMovieProps;
  onPress: Function;
};

const MovieCard = ({ item, onPress }: IMovieCardProps) => {
  return (
    <Container onPress={() => onPress(item.id)}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
    </Container>
  );
};

export default MovieCard;
