import styled from 'styled-components/native';
import { theme } from '../../theme';

interface StyledTextProps {
  size: 'small' | 'normal' | 'large';
  color?: keyof typeof theme.colors;
}

export const Container = styled.Text<StyledTextProps>`
  font-size: ${(props) => props.theme.text[props.size || 'normal'].fontSize}px;
  line-height: ${(props) =>
    props.theme.text[props.size || 'normal'].lineHeight}px;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.secondary};
`;
