import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${24 + (StatusBar.currentHeight || 24)}px 20px 0 20px;
`;
