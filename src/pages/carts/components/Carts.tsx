import { useState } from 'react';
import CartsHeader from './CartsHeader';
import { CartModel } from '@api';
import CartItem from './CartItem';

interface CartProps {
	data: CartModel[];
}

export default function Carts({ data: carts }: CartProps) {
	const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
	const selectedItemQuantity = selectedItemIds.length;

	const handleSelect = (id: number) => {
		setSelectedItemIds((prev) => {
			if (prev.includes(id)) {
				return prev.filter((itemId) => itemId !== id);
			}
			return [...prev, id];
		});
	};

	const handleDelete = (id: number) => {};

	return (
		<>
			<CartsHeader selectedItemQuantity={selectedItemQuantity} />
			{carts &&
				carts.map((cart) => (
					<CartItem
						key={cart.id}
						data={cart}
						selected={selectedItemIds.includes(cart.id)}
						onSelect={handleSelect}
						onDelete={handleDelete}
					/>
				))}
		</>
	);
}
