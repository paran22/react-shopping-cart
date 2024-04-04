import type { ApiResponse } from 'api/types/ApiResponse';
import type { OrderResponse } from 'api/types/OrderResponse';
import { instance } from './axios';

export const getOrders = async (): Promise<ApiResponse<OrderResponse[]>> => {
  const response = await instance.get('/orders');
  return response.data;
};
