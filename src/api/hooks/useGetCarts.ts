import { useQuery } from '@tanstack/react-query';
import { getCarts } from '../axios/cartApi';

export const CARTS_QUERY_KEY = 'carts';

export default function useGetCarts() {
	return useQuery({
		queryKey: [CARTS_QUERY_KEY],
		queryFn: getCarts,
		select: (response) => response.data,
	});
}
