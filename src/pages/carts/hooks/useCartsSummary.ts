import { Cart } from '@types';
import { useMemo } from 'react';

export default function useCartsSummary(carts: Cart[]) {
  const totalPrice = useMemo(
    () =>
      carts.reduce((acc, cur) => {
        if (cur.selected) {
          acc += cur.product.price * cur.quantity;
        }
        return acc;
      }, 0),
    [carts],
  );
  const totalCount = useMemo(
    () =>
      carts.reduce((acc, cur) => {
        if (cur.selected) {
          acc += cur.quantity;
        }
        return acc;
      }, 0),
    [carts],
  );
  return { totalPrice, totalCount };
}
