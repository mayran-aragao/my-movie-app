import styled from 'styled-components/native';

interface StyledTextProps {
  size: 'small' | 'normal' | 'large';
  color?: string;
}

export const Container = styled.Text<StyledTextProps>`
  font-size: ${(props) => props.theme.text[props.size || 'normal'].fontSize}px;
  line-height: ${(props) =>
    props.theme.text[props.size || 'normal'].lineHeight}px;
  color: ${({ color, theme }) =>
    color
      ? (theme.colors as Record<string, keyof typeof theme>)[color]
      : theme.colors.secondary};
`;
