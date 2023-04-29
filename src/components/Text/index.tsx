import { ITextProps } from './interfaces';

import { Container } from './styles';

const Text = ({ color, children, ...rest }: ITextProps) => {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
};

export default Text;
