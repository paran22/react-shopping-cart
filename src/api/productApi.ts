import { instance } from './axios';

export const getProducts = async () => {
	return await instance.get('/products');
};
