import React from 'react';
import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, StyledInput, StyledIcon } from './styles';

type InputProps = TextInputProps & {
  leftIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const Input = ({ leftIcon, rightIcon, ...rest }: InputProps) => (
  <Container>
    {leftIcon && <StyledIcon name={leftIcon} size={24} direction='left' />}

    <StyledInput autoCorrect={false} {...rest} />

    {rightIcon && <StyledIcon name={rightIcon} size={24} direction='right' />}
  </Container>
);
