import { ButtonProps } from 'react-native';
import { theme } from '../../theme';

export interface IButtonProps extends ButtonProps {
  color: keyof typeof theme.colors;
  title: string;
  variant?: 'primary' | 'outline';
  textColor: keyof typeof theme.colors;
  isLoading?: boolean;
}

export interface IContainerStyledProps {
  variant: 'primary' | 'outline';
  color?: keyof typeof theme.colors;
}
