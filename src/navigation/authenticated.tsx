import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from '../components/Icon';

import AuthTabRoutes from './authenticated.tab';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

const AuthenticatedRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}
      initialRouteName='AuthTab'
    >
      <Stack.Screen
        name='AuthTab'
        component={AuthTabRoutes}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='MovieDetails'
        component={MovieDetails}
        options={{
          title: 'Detalhes',
          headerRight: () => <Icon name='share-variant' size={24} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedRoutes;
