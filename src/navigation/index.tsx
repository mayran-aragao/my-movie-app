import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthenticatedRoutes from './authenticated';
import GuestRoutes from './guest';

import { useAppSelector } from '../store/hooks/useAppSelector';
import { IUserSignInProps } from '../store/user/interfaces';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { loadUser } from '../store/user/thunks';

const Routes = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user: IUserSignInProps = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <NavigationContainer>
      {user.uid ? <AuthenticatedRoutes /> : <GuestRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
