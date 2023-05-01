import React from 'react';

import Text from '../../../../components/Text';
import { IMovieDetails } from '../../../MovieDetails/interfaces';

import { Container, Description, Image, Header } from './styles';
import Icon from '../../../../components/Icon';

type IFavoriteCardProps = {
  item: IMovieDetails;
  onPress: Function;
  onPressStar: Function;
};

const FavoriteCard = ({ item, onPress, onPressStar }: IFavoriteCardProps) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Container onPress={() => onPress(item.id)}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        }}
      />

      <Description>
        <Header>
          <Text size='normal' style={{ fontWeight: 'bold', textAlign: 'left' }}>
            {item.title}
          </Text>

          <Icon
            name='star'
            color='warning'
            size={28}
            onPress={() => onPressStar(item)}
          />
        </Header>

        <Text size='small' style={{ textAlign: 'justify', fontWeight: '500' }}>
          Duração: {item.runtime} minutos
        </Text>

        <Text size='small' style={{ textAlign: 'justify', fontWeight: '500' }}>
          IMDB: {item.vote_average.toFixed(1)}
        </Text>

        <Text size='small' style={{ textAlign: 'justify', fontWeight: '500' }}>
          Orçamento: {formatter.format(item.budget)}
        </Text>

        <Text size='small' style={{ textAlign: 'justify', fontWeight: '500' }}>
          Bilheteria: {formatter.format(item.revenue)}
        </Text>
      </Description>
    </Container>
  );
};

export default FavoriteCard;
