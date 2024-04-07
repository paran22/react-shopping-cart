import type { CartResponse } from '@api';
import useCarts from '../hooks/useCarts';
import {
  calculateTotalPrice,
  calculateTotalQuantity,
} from '../utils/cartsUtils';
import CartList from './CartList';
import CartAllSelector from './CartsAllSelector';
import CartsSummary from './CartsSummary';

interface CartViewProps {
  data: CartResponse[];
}

export default function CartView({ data }: CartViewProps) {
  const { carts, selectedAll, selectAll, handleSelect, handleQuantityChange } =
    useCarts(data);
  const totalPrice = calculateTotalPrice(carts);
  const totalQuantity = calculateTotalQuantity(carts);

  return (
    <div className="flex">
      <section className="cart-left-section">
        <CartAllSelector isSelectedAll={selectedAll} selectAll={selectAll} />
        <CartList
          data={carts}
          onSelect={handleSelect}
          onQuantityChange={handleQuantityChange}
        />
      </section>
      <section className="cart-right-section">
        <CartsSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
      </section>
    </div>
  );
}
