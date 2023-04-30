import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import Text from '../Text';

import { IButtonProps } from './interfaces';
import { Container } from './styles';

const Button = ({
  color,
  title,
  variant = 'primary',
  textColor,
  isLoading = false,
  onPress,
}: IButtonProps) => {
  const theme = useTheme();
  return (
    <Container
      color={color}
      variant={variant}
      onPress={!isLoading ? onPress : undefined}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors[textColor]} />
      ) : (
        <Text size='normal' color={textColor}>
          {title}
        </Text>
      )}
    </Container>
  );
};

export default Button;
