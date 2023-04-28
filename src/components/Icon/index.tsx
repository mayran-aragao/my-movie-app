import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from './interfaces';
import { useTheme } from 'styled-components';

const Icon = ({ size, name, color = 'secondary', ...rest }: IconProps) => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={(theme.colors as Record<string, keyof typeof theme>)[color]}
      {...rest}
    />
  );
};
export default Icon;
