import { useGetCarts } from '@api';
import { Cart } from '@types';
import { useEffect, useState } from 'react';

export default function useCartsState(): [
  Cart[],
  React.Dispatch<React.SetStateAction<Cart[]>>,
] {
  const { data } = useGetCarts();
  const [carts, setCarts] = useState<Cart[]>([]);
  useEffect(() => {
    if (!data) return;
    if (carts.length === 0) {
      const initialCarts = (data ?? []).map((cart) => ({
        ...cart,
        selected: true,
      }));
      setCarts(initialCarts);
      return;
    }
    setCarts((prev) =>
      data.map((cart) => ({
        ...cart,
        selected: prev.find((prevCart) => prevCart.id === cart.id)
          ? prev.find((prevCart) => prevCart.id === cart.id)?.selected ?? true
          : false,
      })),
    );
  }, [data]);
  return [carts, setCarts];
}
