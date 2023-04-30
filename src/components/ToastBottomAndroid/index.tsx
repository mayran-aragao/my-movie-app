import { ToastAndroid } from 'react-native';

export const ToastBottomAndroid = (message: string) =>
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    25,
    50,
  );
