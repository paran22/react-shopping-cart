import { PageTitle } from '@components/layout';
import CartList from './components/CartList';
import CartAllSelector from './components/CartsAllSelector';
import CartsSummary from './components/CartsSummary';
import useCarts from './hooks/useCarts';
import {
  calculateTotalPrice,
  calculateTotalQuantity,
} from './utils/cartsUtils';

export default function CartsPage() {
  const { carts, selectedAll, selectAll, handleSelect, handleQuantityChange } =
    useCarts();
  const totalPrice = calculateTotalPrice(carts);
  const totalQuantity = calculateTotalQuantity(carts);

  return (
    <section className="cart-section">
      <PageTitle title="장바구니" />
      {carts && (
        <div className="flex">
          <section className="cart-left-section">
            <CartAllSelector
              isSelectedAll={selectedAll}
              selectAll={selectAll}
            />
            <CartList
              data={carts}
              onSelect={handleSelect}
              onQuantityChange={handleQuantityChange}
            />
          </section>
          <section className="cart-right-section">
            <CartsSummary
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />
          </section>
        </div>
      )}
    </section>
  );
}
