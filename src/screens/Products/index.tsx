import React from 'react';
import { FlatList } from 'react-native';
import Product from './Product';
import { Container } from './styles';

function Products() {
  const data = [...Array(8).keys()];

  return (
    <Container>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={data}
        keyExtractor={(product) => String(product)}
        numColumns={2}
        renderItem={({ item: product }) => <Product />}
      />
    </Container>
  );
}

export default Products;
