import { type CartResponse, deleteCart, type ApiResponse } from '@api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CARTS_QUERY_KEY } from './useGetCarts';

export default function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteCart,
    onMutate: async (cartId: number) => {
      await queryClient.cancelQueries({ queryKey: [CARTS_QUERY_KEY] });
      const previousCarts = queryClient.getQueryData<
        ApiResponse<CartResponse[]>
      >([CARTS_QUERY_KEY]);
      const newCarts = previousCarts?.data?.filter(
        (cart) => cart.id !== cartId,
      );
      if (!newCarts) return;
      queryClient.setQueryData<ApiResponse<CartResponse[]>>([CARTS_QUERY_KEY], {
        data: newCarts,
      });
      return { previousCarts, newCarts };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData<CartResponse[]>(
        [CARTS_QUERY_KEY],
        context?.previousCarts?.data,
      );
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: [CARTS_QUERY_KEY] });
    },
  });

  return { mutate };
}
