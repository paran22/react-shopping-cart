import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../axios/productApi';

const PRODUCTS_QUERY_KEY = 'products';

export default function useGetProducts() {
	return useQuery({
		queryKey: [PRODUCTS_QUERY_KEY],
		queryFn: getProducts,
		select: (response) => response.data,
	});
}
