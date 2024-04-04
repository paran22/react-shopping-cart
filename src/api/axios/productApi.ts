import type { ProductResponse } from 'api/types';
import type { ApiResponse } from 'api/types/ApiResponse';
import { instance } from './axios';

export const getProducts = async (): Promise<
  ApiResponse<ProductResponse[]>
> => {
  const response = await instance.get('/products');
  return response.data;
};
