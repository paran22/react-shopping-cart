import { useGetProducts } from '@hooks';

import { P, match } from 'ts-pattern';
import ProductList from './components/ProductList';
import { ErrorView, LoadingView } from '@components/layout';

export default function ProductsPage() {
  const result = useGetProducts();
  return (
    <>
      {match(result)
        .with({ status: 'pending' }, () => <LoadingView />)
        .with({ status: 'success', data: P.select() }, (data) => (
          <ProductList data={data} />
        ))
        .with({ status: 'error' }, ({ error }) => <ErrorView error={error} />)
        .exhaustive()}
    </>
  );
}
