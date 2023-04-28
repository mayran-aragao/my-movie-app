import styled from 'styled-components/native';
import Icon from '../Icon';

type StyledIconProps = {
  direction: 'left' | 'right';
};

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
`;

export const StyledIcon = styled(Icon)<StyledIconProps>`
  margin-left: ${({ direction }) => (direction === 'left' ? 12 : 0)}px;
  margin-right: ${({ direction }) => (direction === 'right' ? 12 : 0)}px;
`;
