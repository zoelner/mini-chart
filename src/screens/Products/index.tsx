import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { ProductType } from '../../types';

import Product from './Product';
import { Container } from './styles';

function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get<ProductType[]>(
        'https://gist.githubusercontent.com/zoelner/f5070bf6877949243260db83759689f9/raw/f9d983bb2b07ce343a8635a403cfdb0e8d956020/products.json'
      );

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <FlatList<ProductType>
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={products}
        keyExtractor={(product) => String(product.id)}
        numColumns={2}
        renderItem={({ item: product }) => <Product {...product} />}
      />
    </Container>
  );
}

export default Products;
