import React from 'react';
import { Modal } from 'react-native';

import Text from '../../../../components/Text';
import Icon from '../../../../components/Icon';

import { languages } from '../../../../shared/utils/languages';

import { ModalProps } from './interfaces';
import { OutSideArea, Container, OptionsView, Button } from './styles';
import { useAppSelector } from '../../../../store/hooks/useAppSelector';

const LanguageModal = ({
  visible,
  onClickOutside,
  onSelectLanguage,
}: ModalProps) => {
  const language = useAppSelector((store) => store.language.language);
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
          {languages.map((item) => (
            <Button
              onPress={() => onSelectLanguage(item.abbreviation)}
              key={item.abbreviation}
            >
              <Text
                size='normal'
                color='secondary'
                style={{ paddingLeft: 14, fontWeight: '400' }}
              >
                {item.language}
              </Text>
              {item.abbreviation === language && (
                <Icon size={24} name='check' color='primary' />
              )}
            </Button>
          ))}
        </OptionsView>
      </Container>
    </Modal>
  );
};

export default LanguageModal;
