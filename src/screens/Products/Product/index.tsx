import React from 'react';
import Button from '../../../components/Button';
import { Container, Text, Image } from './styles';

function Product() {
  return (
    <Container>
      <Image />
      <Text>Product 1</Text>
      <Button>Remove</Button>
    </Container>
  );
}

export default Product;
