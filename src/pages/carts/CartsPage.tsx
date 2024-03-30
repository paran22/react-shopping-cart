import { useGetCarts } from '@api';
import { PageTitle } from '@components/layout';
import CartAllSelector from './components/CartsAllSelector';
import Carts from './components/Carts';

export default function CartsPage() {
	const { data: carts } = useGetCarts();
	return (
		<section className="cart-section">
			<PageTitle title="장바구니" />
			{carts && (
				<div className="flex">
					<section className="cart-left-section">
						<CartAllSelector />
						<Carts data={carts} />
					</section>
				</div>
			)}
		</section>
	);
}
