import { useGetProducts } from '@hooks';
import Products from './components/Products';

export default function ProductsPage() {
  const { data: products } = useGetProducts();
  return <>{products && <Products data={products} />}</>;
}
