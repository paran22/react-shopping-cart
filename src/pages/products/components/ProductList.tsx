import type { ProductResponse } from '@api';
import ProductItem from './ProductItem';

interface ProductListProps {
  data: ProductResponse[];
}

export default function ProductList({ data: products }: ProductListProps) {
  return (
    <section className="product-container">
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </section>
  );
}
