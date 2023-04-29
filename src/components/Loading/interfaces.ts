import { theme } from '../../theme';

export interface Props {
  text?: string;
  color?: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  size?: 'large' | 'small';
  isLoading: boolean;
}
