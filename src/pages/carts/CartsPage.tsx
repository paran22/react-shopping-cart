import { ErrorView, LoadingView, PageTitle } from '@components/layout';
import { useGetCarts } from '@hooks';
import { P, match } from 'ts-pattern';
import CartView from './components/CartView';

export default function CartsPage() {
  const result = useGetCarts();
  return (
    <section className="cart-section">
      <PageTitle title="장바구니" />
      {match(result)
        .with({ status: 'pending' }, () => <LoadingView />)
        .with({ status: 'success', data: P.select() }, (data) => (
          <CartView data={data} />
        ))
        .with({ status: 'error' }, ({ error }) => <ErrorView error={error} />)
        .exhaustive()}
    </section>
  );
}
