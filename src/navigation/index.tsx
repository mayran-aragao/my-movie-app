import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedRoutes from './authenticated';

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AuthenticatedRoutes />
    </NavigationContainer>
  );
};

export default Routes;
