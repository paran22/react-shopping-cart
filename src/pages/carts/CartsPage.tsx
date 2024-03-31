import { PageTitle } from '@components/layout';
import Carts from './components/Carts';
import CartAllSelector from './components/CartsAllSelector';
import CartsSummary from './components/CartsSummary';
import useCarts from './hooks/useCarts';

export default function CartsPage() {
  const {
    carts,
    selectedAll,
    selectAll,
    handleSelect,
    totalPrice,
    totalCount,
    handleQuantityChange,
  } = useCarts();

  return (
    <section className="cart-section">
      <PageTitle title="장바구니" />
      {carts && (
        <div className="flex">
          <section className="cart-left-section">
            <CartAllSelector selectedAll={selectedAll} selectAll={selectAll} />
            <Carts
              data={carts}
              onSelect={handleSelect}
              onQuantityChange={handleQuantityChange}
            />
          </section>
          <section className="cart-right-section">
            <CartsSummary totalPrice={totalPrice} totalCount={totalCount} />
          </section>
        </div>
      )}
    </section>
  );
}
