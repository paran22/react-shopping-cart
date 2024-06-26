import type { ProductResponse } from '@api';
import { Cart } from '@assets';
import { formatPrice } from '@utils';

interface ProductItemProps {
  data: ProductResponse;
}

export default function ProductItem({
  data: { imageUrl, name, price },
}: ProductItemProps) {
  const displayedPrice = formatPrice(price);
  return (
    <div className="product-item">
      <img src={imageUrl} alt={name} />
      <div className="product-description">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{displayedPrice}</span>
        </div>
        <Cart stroke="#000000" width="24px" color="#000000" />
      </div>
    </div>
  );
}
