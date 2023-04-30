import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import auth from '../../config/firebase';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { signIn } from '../../store/user/actions';

import { Input } from '../../components/Input';
import Text from '../../components/Text';
import { IUserProps } from './interfaces';
import Button from '../../components/Button';

import { Container } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageEnum } from '../../shared/enum/LocalStorage';

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState<IUserProps>({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      if (!user.email || !user.password) {
        Alert.alert('Verifique os campos', 'Preencha todos os campos!', [
          { style: 'cancel', text: 'Ok' },
        ]);

        return;
      }

      const credential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const userLogged = { email: user.email, uid: credential.user.uid };

      if (credential.user.uid) {
        await AsyncStorage.setItem(
          LocalStorageEnum.user,
          JSON.stringify(userLogged)
        );

        dispatch(signIn(userLogged));
      }
    } catch (error: any) {
      Alert.alert('Algo inesperado aconteceu', `${error.message}`, [
        { style: 'cancel', text: 'Ok' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    try {
      setIsLoading(true);

      if (!user.email || !user.password) {
        Alert.alert('Verifique os campos', 'Preencha todos os campos!', [
          { style: 'cancel', text: 'Ok' },
        ]);

        return;
      }

      const credential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      if (credential.user.uid) {
        Alert.alert('Sucesso', 'Você criou sua conta com sucesso!', [
          { style: 'cancel', text: 'Ok' },
        ]);
      }
    } catch (error: any) {
      Alert.alert('Algo inesperado aconteceu', `${error.message}`, [
        { style: 'cancel', text: 'Ok' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Text
        size='normal'
        style={{ fontWeight: '500', marginBottom: 8, marginLeft: 5 }}
      >
        E-mail
      </Text>

      <Input
        placeholder='Digite um email'
        autoCapitalize='none'
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        keyboardType='email-address'
      />

      <Text
        size='normal'
        style={{ fontWeight: '500', marginBottom: 8, marginLeft: 5 }}
      >
        Senha
      </Text>

      <Input
        placeholder='Digite uma senha'
        rightIcon={showPassword ? 'eye-outline' : 'eye-off-outline'}
        onPressRight={() => setShowPassword((prevState) => !prevState)}
        autoCapitalize='none'
        secureTextEntry={showPassword ? false : true}
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
      />

      <Button
        title='Logar'
        color='primary'
        textColor='white'
        onPress={handleSignIn}
        isLoading={isLoading}
      />

      <Button
        title='Registrar-se'
        color='primary'
        textColor='primary'
        variant='outline'
        onPress={handleSignUp}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Login;
