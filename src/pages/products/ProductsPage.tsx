import { useGetProducts } from '@hooks';

import { P, match } from 'ts-pattern';
import ProductList from './components/ProductList';

export default function ProductsPage() {
  const result = useGetProducts();
  return (
    <>
      {match(result)
        .with({ status: 'pending' }, () => <div>loading...</div>)
        .with({ status: 'success', data: P.select() }, (data) => {
          return <ProductList data={data} />;
        })
        .with({ status: 'error' }, () => <div>error</div>)
        .exhaustive()}
    </>
  );
}
