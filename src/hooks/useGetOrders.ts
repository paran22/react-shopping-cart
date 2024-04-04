import { getOrders } from '@api';
import { useQuery } from '@tanstack/react-query';

const ORDERS_QUERY_KEY = 'orders';

export default function useGetOrders() {
  return useQuery({
    queryKey: [ORDERS_QUERY_KEY],
    queryFn: getOrders,
    select: (response) => response.data,
  });
}
