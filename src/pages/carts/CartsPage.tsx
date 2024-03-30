import { useGetCarts } from '@api';
import { PageTitle } from '@components';
import CartAllSelector from './components/CartsAllSelector';

export default function CartsPage() {
	const { data: carts } = useGetCarts();
	return (
		<section className="cart-section">
			<PageTitle title="장바구니" />
			<div className="flex">
				<section className="cart-left-section">
					<CartAllSelector />
				</section>
			</div>
		</section>
	);
}
