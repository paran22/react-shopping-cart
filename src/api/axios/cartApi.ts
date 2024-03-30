import { ApiResponse } from 'api/models/ApiResponse';
import { instance } from './axios';
import { CartModel } from 'api/models';

export const getCarts = async (): Promise<ApiResponse<CartModel[]>> => {
	const response = await instance.get('/carts');
	return response.data;
};

export const deleteCart = async (
	cartId: number,
): Promise<ApiResponse<null>> => {
	const response = await instance.delete(`/carts/${cartId}`);
	return response.data;
};
