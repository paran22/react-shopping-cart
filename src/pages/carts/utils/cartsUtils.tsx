import type { Cart } from '@types';

export const calculateTotalPrice = (carts: Cart[]) => {
  return carts.reduce(
    (total, cart) => total + cart.product.price * cart.quantity,
    0,
  );
};

export const calculateTotalQuantity = (carts: Cart[]) => {
  return carts.reduce((total, cart) => total + cart.quantity, 0);
};
