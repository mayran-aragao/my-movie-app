import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Icon from '../components/Icon';

import Home from '../screens/Home';
import MyFavorites from '../screens/MyFavorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const iconList: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
  Home: 'home',
  MyFavorites: 'star',
  Profile: 'account',
};

const AuthTabRoutes = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIcon: ({ color, size }) => (
          <Icon
            name={iconList[route.name] ?? iconList.Home}
            size={size}
            color={color === '#4A00E0' ? 'primary' : 'gray'}
          />
        ),
      })}
    >
      <Tab.Screen name='Home' component={Home} />

      <Tab.Screen name='MyFavorites' component={MyFavorites} />

      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default AuthTabRoutes;
