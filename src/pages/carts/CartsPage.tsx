import { PageTitle } from '@components/layout';
import Carts from './components/Carts';
import CartAllSelector from './components/CartsAllSelector';
import CartsSummary from './components/CartsSummary';
import useCartsState from './hooks/useCartsState';

export default function CartsPage() {
  const [carts, setCarts] = useCartsState();

  const selectedAll = carts.every((cart) => cart.selected);
  const selectAll = () => {
    setCarts(
      carts.map((cart) => ({
        ...cart,
        selected: selectedAll ? false : true,
      })),
    );
  };
  const handleSelect = (id: number) => {
    setCarts(
      carts.map((cart) =>
        cart.id === id ? { ...cart, selected: !cart.selected } : cart,
      ),
    );
  };
  const totalPrice = carts.reduce((acc, cur) => {
    if (cur.selected) {
      acc += cur.product.price * cur.quantity;
    }
    return acc;
  }, 0);
  const totalCount = carts.reduce((acc, cur) => {
    if (cur.selected) {
      acc += cur.quantity;
    }
    return acc;
  }, 0);
  const handleQuantityChange = (id: number, quantity: number) => {
    setCarts(
      carts.map((cart) => (cart.id === id ? { ...cart, quantity } : cart)),
    );
  };

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
