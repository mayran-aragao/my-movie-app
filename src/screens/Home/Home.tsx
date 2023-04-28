import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Home = ({
  navigation,
}: NativeStackScreenProps<any, 'Home'>): JSX.Element => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
