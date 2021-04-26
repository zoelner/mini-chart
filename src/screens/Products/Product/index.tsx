import React, { useMemo } from 'react';

import Button from '../../../components/Button';
import { useCartContext } from '../../../context/CartProvider';
import { ProductType } from '../../../types';

import { Container, Text, Image } from './styles';

type ProductProps = ProductType;

function Product(props: ProductProps) {
  const { id, title, image } = props;

  const { insert, remove, products } = useCartContext();

  function handleInsertProduct() {
    insert(props);
  }

  function handleRemoveProduct() {
    remove(id);
  }

  const productExistsInCart = useMemo(() => {
    return products.findIndex((product) => product.id === id) !== -1;
  }, [products]);

  const handleRemoveOrInsertProduct = productExistsInCart
    ? handleRemoveProduct
    : handleInsertProduct;

  return (
    <Container>
      <Image source={{ uri: image }} />
      <Text>{title}</Text>
      <Button
        onPress={handleRemoveOrInsertProduct}
        variant={productExistsInCart ? 'remove' : 'add'}
      >
        {productExistsInCart ? 'Remover' : 'Adicionar'}
      </Button>
    </Container>
  );
}

export default Product;
