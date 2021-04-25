import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Badge, Count } from './styles';
import { useCartContext } from '../../context/CartProvider';

interface CartIconProps {
  onPress(): void;
}

function CartIcon({ onPress }: CartIconProps) {
  const { count } = useCartContext();

  return (
    <Container onPress={onPress}>
      <Ionicons name='cart-outline' size={32} color='black' />
      {!!count ? (
        <Badge>
          <Count>{count}</Count>
        </Badge>
      ) : null}
    </Container>
  );
}

export default CartIcon;
