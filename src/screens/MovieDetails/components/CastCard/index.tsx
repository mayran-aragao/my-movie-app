import React from 'react';

import Text from '../../../../components/Text';

import { ICastDetails } from '../../interfaces';
import { ActorInfo, Container, Image, ImageView } from './styles';

type ICardCardProps = {
  item: ICastDetails;
};

const CastCard = ({ item }: ICardCardProps) => {
  return (
    <Container>
      <ImageView>
        {item.profile_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
            }}
          />
        ) : (
          <Text size='normal' style={{ fontWeight: '500' }}>
            Sem foto
          </Text>
        )}
      </ImageView>

      <ActorInfo>
        <Text size='small' style={{ fontWeight: '500', textAlign: 'center' }}>
          {item.name}
        </Text>

        <Text size='small' style={{ marginTop: 4, textAlign: 'center' }}>
          {item.character}
        </Text>
      </ActorInfo>
    </Container>
  );
};

export default CastCard;
