import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const GuestRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GuestRoutes;
