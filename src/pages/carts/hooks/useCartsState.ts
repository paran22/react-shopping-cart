import type { CartResponse } from '@api';
import type { Cart } from '@types';
import { useEffect, useState } from 'react';

export default function useCartsState(
  initialCarts: CartResponse[],
): [Cart[], React.Dispatch<React.SetStateAction<Cart[]>>] {
  const [carts, setCarts] = useState<Cart[]>([]);
  useEffect(() => {
    if (!initialCarts) return;
    if (carts.length === 0) {
      const carts = (initialCarts ?? []).map((cart) => ({
        ...cart,
        selected: true,
      }));
      setCarts(carts);
      return;
    }
    setCarts((prev) =>
      initialCarts.map((cart) => ({
        ...cart,
        selected: prev.find((prevCart) => prevCart.id === cart.id)
          ? prev.find((prevCart) => prevCart.id === cart.id)?.selected ?? true
          : false,
      })),
    );
  }, [initialCarts, carts.length]);
  return [carts, setCarts];
}
