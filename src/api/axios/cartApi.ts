import type { ApiResponse } from 'api/types/ApiResponse';
import { instance } from './axios';
import type { CartResponse } from 'api/types';

export const getCarts = async (): Promise<ApiResponse<CartResponse[]>> => {
  const response = await instance.get('/carts');
  return response.data;
};

export const deleteCart = async (
  cartId: number,
): Promise<ApiResponse<null>> => {
  const response = await instance.delete(`/carts/${cartId}`);
  return response.data;
};
