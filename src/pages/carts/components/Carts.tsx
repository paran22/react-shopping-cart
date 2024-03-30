import { useState } from 'react';
import CartsHeader from './CartsHeader';
import { CartModel } from '@api';

interface CartProps {
	data: CartModel[];
}

export default function Carts({ data }: CartProps) {
	const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
	const selectedItemQuantity = selectedItemIds.length;
	return (
		<>
			<CartsHeader selectedItemQuantity={selectedItemQuantity} />
			<div className="cart-container"></div>
		</>
	);
}
