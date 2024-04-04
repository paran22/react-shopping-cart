import type { ApiResponse } from 'api/models/ApiResponse';
import type { OrderResponse } from 'api/models/OrderResponse';
import { instance } from './axios';

export const getOrders = async (): Promise<ApiResponse<OrderResponse[]>> => {
  const response = await instance.get('/orders');
  return response.data;
};
