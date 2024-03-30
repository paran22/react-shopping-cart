import { ProductModel } from 'api/models';
import { ApiResponse } from 'api/models/ApiResponse';
import { instance } from './axios';

export const getProducts = async (): Promise<ApiResponse<ProductModel[]>> => {
	const response = await instance.get('/products');
	return response.data;
};
