import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Badge, Count } from './styles';

interface CartIconProps {
  onPress(): void;
}

function CartIcon({ onPress }: CartIconProps) {
  return (
    <Container onPress={onPress}>
      <Ionicons name='cart-outline' size={32} color='black' />
      <Badge>
        <Count>1</Count>
      </Badge>
    </Container>
  );
}

export default CartIcon;
