import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, StyledInput, StyledIcon } from './styles';

type InputProps = TextInputProps & {
  leftIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onPressLeft?: Function;
  onPressRight?: Function;
};

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      style,
      leftIcon,
      rightIcon,
      onPressLeft = () => {},
      onPressRight = () => {},
      ...rest
    },
    ref
  ) => (
    <Container style={style}>
      {leftIcon && (
        <StyledIcon
          name={leftIcon}
          size={24}
          direction='left'
          onPress={() => onPressLeft()}
        />
      )}

      <StyledInput autoCorrect={false} {...rest} ref={ref} />

      {rightIcon && (
        <StyledIcon
          name={rightIcon}
          size={24}
          direction='right'
          onPress={() => onPressRight()}
        />
      )}
    </Container>
  )
);
