import type { ProductResponse } from 'api/models';
import type { ApiResponse } from 'api/models/ApiResponse';
import { instance } from './axios';

export const getProducts = async (): Promise<
  ApiResponse<ProductResponse[]>
> => {
  const response = await instance.get('/products');
  return response.data;
};
