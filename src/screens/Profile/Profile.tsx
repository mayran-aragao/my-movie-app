import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

const Profile = ({}: NativeStackScreenProps<any, 'Profile'>): JSX.Element => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
