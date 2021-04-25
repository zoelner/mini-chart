import React from 'react';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  CartItem,
  CartItemImage,
  CartItemText,
  Container,
  Title,
} from './style';

function Cart() {
  const data = [...Array(2).keys()];

  return (
    <Container>
      <Title>X Produtos adicionados</Title>

      <FlatList
        data={data}
        keyExtractor={(product) => String(product)}
        renderItem={({ item: product }) => (
          <CartItem>
            <CartItemImage />
            <CartItemText>Product</CartItemText>
            <Ionicons name='close-circle-outline' size={24} color='#f44336' />
          </CartItem>
        )}
      />
    </Container>
  );
}

export default Cart;
