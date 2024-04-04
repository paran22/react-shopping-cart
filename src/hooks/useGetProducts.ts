import { getProducts } from '@api';
import { useQuery } from '@tanstack/react-query';

const PRODUCTS_QUERY_KEY = 'products';

export default function useGetProducts() {
  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
    select: (response) => response.data,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 4,
  });
}
