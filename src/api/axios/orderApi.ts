import { ApiResponse } from 'api/models/ApiResponse';
import { OrderModel } from 'api/models/OrderModel';
import { instance } from './axios';

export const getOrders = async (): Promise<ApiResponse<OrderModel[]>> => {
	const response = await instance.get('/orders');
	return response.data;
};
