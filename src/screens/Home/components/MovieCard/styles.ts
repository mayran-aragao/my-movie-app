import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('screen').width;
const shortcutItemWidth = (screenWidth - 68) / 2;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  width: ${shortcutItemWidth}px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border-color: white;
  border-width: 0.5px;
`;

export const ImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
