import React from 'react';
import { Modal } from 'react-native';

import { IModalProps } from './interfaces';
import { OutSideArea, Container, GenresList, GenreOption } from './styles';
import Text from '../../../../components/Text';
import Icon from '../../../../components/Icon';

const GenresModal = ({
  genres,
  visible,
  onClickOutside,
  onSelect,
  selectedId,
}: IModalProps) => {
  return (
    <Modal
      animationType='slide'
      visible={visible}
      transparent
      onRequestClose={() => onClickOutside()}
      statusBarTranslucent
    >
      <OutSideArea onPress={() => onClickOutside()} />

      <Container>
        <GenresList>
          {genres.map((genre) => {
            const isSelected = genre.id === selectedId;

            return (
              <GenreOption key={genre.id} onPress={() => onSelect(genre.id)}>
                <Text size='normal' style={{ fontWeight: '500' }}>
                  {genre.name}
                </Text>

                {isSelected && <Icon name='check' size={24} color='success' />}
              </GenreOption>
            );
          })}
        </GenresList>
      </Container>
    </Modal>
  );
};

export default GenresModal;
