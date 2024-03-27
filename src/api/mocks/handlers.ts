import { HttpResponse, http } from 'msw';
import mockDb from '../../../db.json';

export const handlers = [
	http.get('/products', () => {
		return HttpResponse.json({
			data: mockDb.products,
		});
	}),
	http.get('/carts', () => {
		return HttpResponse.json({
			data: mockDb.carts,
		});
	}),
	http.get('/orders', () => {
		return HttpResponse.json({
			data: mockDb.orders,
		});
	}),
];
