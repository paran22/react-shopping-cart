import { Cart } from '@types';
import CartItem from './CartItem';
import CartsHeader from './CartsHeader';

interface CartProps {
	data: Cart[];
	onSelect: (id: number) => void;
}

export default function Carts({ data: carts, onSelect }: CartProps) {
	const selectedItemQuantity = carts.filter((cart) => cart.selected).length;

	const handleSelect = (id: number) => {
		onSelect(id);
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
						onSelect={handleSelect}
						onDelete={handleDelete}
					/>
				))}
		</>
	);
}
