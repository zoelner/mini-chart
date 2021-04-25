import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, VariantProps, Text } from './styles';

type ButtonProps = TouchableOpacityProps &
  VariantProps & {
    children: string;
  };

function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}

export default Button;
