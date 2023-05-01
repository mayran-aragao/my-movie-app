import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import Icon from '../../components/Icon';
import LanguageModal from './components/LanguageModal';
import Text from '../../components/Text';

import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { signOut } from '../../store/user/thunks';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { changeLanguage } from '../../store/language/thunks';

import { Container, Option, OptionsView, Header } from './styles';
import SortByModal from './components/SortByModal';
import { changeSortBy } from '../../store/sortBy/actions';

const Profile = ({}: NativeStackScreenProps<any, 'Profile'>): JSX.Element => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((store) => store.user.email);

  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [showSortByModal, setShowSortByModal] = useState<boolean>(false);

  const handleChangeLanguage = (language: string) => {
    dispatch(changeLanguage(language));
    setShowLanguageModal(false);
  };

  const handleChangeSortBy = (sortBy: string) => {
    dispatch(changeSortBy({ sortBy: sortBy }));
    setShowSortByModal(false);
  };

  return (
    <Container>
      <LanguageModal
        visible={showLanguageModal}
        onClickOutside={() => setShowLanguageModal(false)}
        onSelectLanguage={handleChangeLanguage}
      />

      <SortByModal
        visible={showSortByModal}
        onClickOutside={() => setShowSortByModal(false)}
        onSelectLanguage={handleChangeSortBy}
      />

      <Header>
        <Text size='normal' style={{ fontWeight: '400' }}>
          {email}
        </Text>

        <Icon
          size={24}
          color='gray'
          name='logout-variant'
          onPress={() => dispatch(signOut())}
        />
      </Header>

      <OptionsView>
        <Option onPress={() => setShowLanguageModal(true)}>
          <Text size='normal'>Idioma de busca</Text>
        </Option>

        <Option onPress={() => setShowSortByModal(true)}>
          <Text size='normal'>Opçoes de ordenação</Text>
        </Option>
      </OptionsView>
    </Container>
  );
};

export default Profile;
