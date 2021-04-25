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
import { useCartContext } from '../../context/CartProvider';

function Cart() {
  const { products, count, remove } = useCartContext();

  return (
    <Container>
      <Title>{count} Produtos adicionados</Title>

      <FlatList
        data={products}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item: product }) => (
          <CartItem>
            <CartItemImage source={{ uri: product.image }} />
            <CartItemText>{product.title}</CartItemText>
            <Ionicons
              name='close-circle-outline'
              size={24}
              color='#f44336'
              onPress={() => remove(product.id)}
            />
          </CartItem>
        )}
      />
    </Container>
  );
}

export default Cart;
