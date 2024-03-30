import { useGetCarts } from '@api';
import { PageTitle } from '@components';

export default function CartsPage() {
	const { data: carts } = useGetCarts();
	return (
		<section className="cart-section">
			<PageTitle title="장바구니" />
		</section>
	);
}
