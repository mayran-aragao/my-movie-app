import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const MyFavorites = ({}: NativeStackScreenProps<
  any,
  'MyFavorites'
>): JSX.Element => {
  return (
    <View>
      <Text>MyFavorites</Text>
    </View>
  );
};

export default MyFavorites;
