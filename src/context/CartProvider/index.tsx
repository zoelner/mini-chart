import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ProductType } from '../../types';

type CartProduct = ProductType;

interface CartContextProps {
  count: number;
  products: CartProduct[];
  remove(id: number): void;
  insert(data: CartProduct): void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: React.ReactNode;
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext deve ser utilizado com o CartContext.');
  }

  return context;
}

const initialData = [] as CartProduct[];

function CartProvider({ children }: CartProviderProps) {
  const [state, setState] = useState<CartProduct[]>(initialData);

  const count = state.length;

  const remove = useCallback(
    (id: number) => {
      setState((prevState) => prevState.filter((product) => product.id !== id));
    },
    [setState]
  );

  const insert = useCallback(
    (data: CartProduct) => {
      setState((prevState) => {
        const productIfExists =
          prevState.findIndex((product) => product.id === data.id) !== -1;

        if (productIfExists) return prevState;

        return [...prevState, data];
      });
    },
    [setState]
  );

  return (
    <CartContext.Provider
      value={{
        count,
        products: state,
        remove,
        insert,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
