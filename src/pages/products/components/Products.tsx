import type { ProductResponse } from '@api';
import Product from './Product';

interface ProductsProps {
  data: ProductResponse[];
}

export default function Products({ data: products }: ProductsProps) {
  return (
    <section className="product-container">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </section>
  );
}
