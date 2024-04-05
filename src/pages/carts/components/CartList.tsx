import type { Cart } from '@types';
import CartItem from './CartItem';
import CartsHeader from './CartsHeader';
import { useDeleteCart } from '@hooks';

interface CartListProps {
  data: Cart[];
  onSelect: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

export default function CartList({
  data: carts,
  onSelect,
  onQuantityChange,
}: CartListProps) {
  const selectedItemQuantity = carts.filter((cart) => cart.selected).length;
  const { mutate: deleteCart } = useDeleteCart();

  const handleSelect = (id: number) => {
    onSelect(id);
  };

  const handleDelete = (id: number) => {
    deleteCart(id);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    onQuantityChange(id, quantity);
  };

  return (
    <>
      <CartsHeader selectedItemQuantity={selectedItemQuantity} />
      {carts.map((cart) => (
        <CartItem
          key={cart.id}
          data={cart}
          onSelect={handleSelect}
          onDelete={handleDelete}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </>
  );
}
