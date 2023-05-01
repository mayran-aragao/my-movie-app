import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${24 + (StatusBar.currentHeight || 24)}px 20px 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 20px;
`;

export const OptionsView = styled.View`
  flex: 1;
  gap: 10px;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  padding-vertical: 10px;
  border-bottom-width: 0.5px;
  border-color: ${({ theme }) => theme.colors.lightGray};
`;
