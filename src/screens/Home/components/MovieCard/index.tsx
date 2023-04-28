import React from 'react';

import { IMovieProps } from '../../interfaces';

import { Container, Image } from './styles';

type IMovieCardProps = {
  item: IMovieProps;
};

const MovieCard = ({ item }: IMovieCardProps) => {
  return (
    <Container>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />
    </Container>
  );
};

export default MovieCard;
