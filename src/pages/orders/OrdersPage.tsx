import { PageTitle } from '@components/layout';
import OrderItem from './components/OrderItem';
import { useGetOrders } from '@hooks';

export default function OrdersPage() {
  const { data: orders } = useGetOrders();
  return (
    <section className="order-section">
      <PageTitle title="주문목록" />
      {orders &&
        orders.map((order) => <OrderItem key={order.id} data={order} />)}
    </section>
  );
}
