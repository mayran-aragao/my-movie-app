import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface IconProps extends TouchableOpacityProps {
  size: number;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: keyof typeof theme.colors;
  style?: Record<string, any>;
}
