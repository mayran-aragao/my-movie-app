import { TextProps } from 'react-native';
import { theme } from '../../theme';

export interface ITextProps extends TextProps {
  size: 'small' | 'normal' | 'large';
  color?: keyof typeof theme.colors;
}
