import { useGetCarts } from '@api';
import { PageTitle } from '@components/layout';
import Carts from './components/Carts';
import CartAllSelector from './components/CartsAllSelector';
import { useEffect, useState } from 'react';
import { Cart } from '@types';

export default function CartsPage() {
	const { data } = useGetCarts();
	const [carts, setCarts] = useState<Cart[]>([]);
	useEffect(() => {
		if (!data) return;
		if (carts.length === 0) {
			const initialCarts = (data ?? []).map((cart) => ({
				...cart,
				selected: true,
			}));
			setCarts(initialCarts);
			return;
		}
		setCarts((prev) =>
			data.map((cart) => ({
				...cart,
				selected: prev.find((prevCart) => prevCart.id === cart.id)
					? prev.find((prevCart) => prevCart.id === cart.id)?.selected ?? true
					: false,
			})),
		);
	}, [data]);

	const selectedAll = carts.every((cart) => cart.selected);
	const selectAll = () => {
		setCarts(
			carts.map((cart) => ({
				...cart,
				selected: selectedAll ? false : true,
			})),
		);
	};
	const handleSelect = (id: number) => {
		setCarts(
			carts.map((cart) =>
				cart.id === id ? { ...cart, selected: !cart.selected } : cart,
			),
		);
	};

	return (
		<section className="cart-section">
			<PageTitle title="장바구니" />
			{carts && (
				<div className="flex">
					<section className="cart-left-section">
						<CartAllSelector selectedAll={selectedAll} selectAll={selectAll} />
						<Carts data={carts} onSelect={handleSelect} />
					</section>
				</div>
			)}
		</section>
	);
}
