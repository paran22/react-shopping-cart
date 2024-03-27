import { instance } from './axios';

export const getOrders = async () => {
	return await instance.get('/orders');
};
