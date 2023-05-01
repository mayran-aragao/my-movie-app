import React from 'react';
import { Modal } from 'react-native';

import Text from '../../../../components/Text';
import Icon from '../../../../components/Icon';

import { displayOrder } from '../../../../shared/utils/displayOrder';

import { OutSideArea, Container, OptionsView, Button } from './styles';
import { useAppSelector } from '../../../../store/hooks/useAppSelector';
import { ModalProps } from '../LanguageModal/interfaces';

const SortByModal = ({
  visible,
  onClickOutside,
  onSelectLanguage,
}: ModalProps) => {
  const sortBy = useAppSelector((store) => store.sortBy.sortBy);
  return (
    <Modal
      animationType='fade'
      visible={visible}
      transparent
      onRequestClose={() => onClickOutside()}
      statusBarTranslucent
    >
      <OutSideArea onPress={() => onClickOutside()} />

      <Container>
        <OptionsView>
          {displayOrder.map((item) => (
            <Button
              onPress={() => onSelectLanguage(item.sortBy)}
              key={item.sortBy}
            >
              <Text
                size='normal'
                color='secondary'
                style={{ paddingLeft: 14, fontWeight: '400' }}
              >
                {item.text}
              </Text>
              {item.sortBy === sortBy && (
                <Icon size={24} name='check' color='primary' />
              )}
            </Button>
          ))}
        </OptionsView>
      </Container>
    </Modal>
  );
};

export default SortByModal;
