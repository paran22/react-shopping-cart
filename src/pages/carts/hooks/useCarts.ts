import { useCallback, useMemo } from 'react';
import useCartsState from './useCartsState';

export default function useCarts() {
  const [carts, setCarts] = useCartsState();
  const selectedAll = useMemo(
    () => carts.every((cart) => cart.selected),
    [carts],
  );
  const selectAll = useCallback(() => {
    setCarts(
      carts.map((cart) => ({
        ...cart,
        selected: !selectedAll,
      })),
    );
  }, [carts, selectedAll, setCarts]);
  const handleSelect = useCallback(
    (id: number) => {
      setCarts(
        carts.map((cart) =>
          cart.id === id ? { ...cart, selected: !cart.selected } : cart,
        ),
      );
    },
    [carts, setCarts],
  );
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
  const handleQuantityChange = useCallback(
    (id: number, quantity: number) => {
      setCarts(
        carts.map((cart) => (cart.id === id ? { ...cart, quantity } : cart)),
      );
    },
    [carts, setCarts],
  );
  return {
    carts,
    selectedAll,
    selectAll,
    handleSelect,
    totalPrice,
    totalCount,
    handleQuantityChange,
  };
}
