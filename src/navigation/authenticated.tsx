import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthTabRoutes from './authenticated.tab';

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
    </Stack.Navigator>
  );
};

export default AuthenticatedRoutes;
