import styled from 'styled-components/native';
import { IContainerStyledProps } from './interfaces';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})<IContainerStyledProps>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme, color, variant }) => {
    if (variant === 'outline') {
      return theme.colors.white;
    }

    return color ? theme.colors[color] : theme.colors.primary;
  }};
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border: 1px solid ${({ theme, color }) => color && theme.colors[color]};
`;
