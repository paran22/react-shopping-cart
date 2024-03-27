import { instance } from './axios';

export const getCarts = async () => {
	return await instance.get('/carts');
};
