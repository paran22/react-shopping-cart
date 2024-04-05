import { ErrorView, LoadingView, PageTitle } from '@components/layout';
import OrderItem from './components/OrderItem';
import { useGetOrders } from '@hooks';
import { P, match } from 'ts-pattern';

export default function OrdersPage() {
  const result = useGetOrders();
  return (
    <section className="order-section">
      <PageTitle title="주문목록" />

      {match(result)
        .with({ status: 'pending' }, () => <LoadingView />)
        .with({ status: 'success', data: P.select() }, (data) =>
          data.map((order) => <OrderItem key={order.id} data={order} />),
        )
        .with({ status: 'error' }, ({ error }) => <ErrorView error={error} />)
        .exhaustive()}
    </section>
  );
}
