import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import Text from '../Text';
import { Props } from './interfaces';
import { Container } from './styles';

export const Loading = ({
  text,
  color,
  textColor = 'white',
  size = 'large',
  isLoading,
}: Props) => {
  if (!isLoading) {
    return null;
  }

  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator
        color={color ? theme.colors[color] : theme.colors.primary}
        size={size}
      />

      {text && (
        <Text
          size='normal'
          color={textColor}
          style={{ textAlign: 'center', marginTop: 16 }}
        >
          {text}
        </Text>
      )}
    </Container>
  );
};
