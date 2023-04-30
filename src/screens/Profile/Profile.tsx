import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Container } from './styles';
import Button from '../../components/Button';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { signOut } from '../../store/user/thunks';

const Profile = ({}: NativeStackScreenProps<any, 'Profile'>): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Button
        title='Sair'
        color='danger'
        variant='outline'
        textColor='danger'
        onPress={() => dispatch(signOut())}
      />
    </Container>
  );
};

export default Profile;
