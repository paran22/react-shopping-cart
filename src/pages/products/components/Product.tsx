import { ProductModel } from '@api';
import { Cart } from '@assets';

interface ProductProps {
	data: ProductModel;
}

export default function Product({
	data: { imageUrl, name, price },
}: ProductProps) {
	const displayedPrice = `${price.toLocaleString()}원`;
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
