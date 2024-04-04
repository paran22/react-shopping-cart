import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../api/axios/orderApi';

const ORDERS_QUERY_KEY = 'orders';

export default function useGetOrders() {
  return useQuery({
    queryKey: [ORDERS_QUERY_KEY],
    queryFn: getOrders,
    select: (response) => response.data,
  });
}
