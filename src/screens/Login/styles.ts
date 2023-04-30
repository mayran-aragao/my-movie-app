import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS == 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 48px 20px 20px 20px;
  justify-content: center;
`;
