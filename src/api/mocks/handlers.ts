import { HttpResponse, delay, http } from 'msw';
import mockDb from '../../../db.json';

export const handlers = [
  http.get('/products', async () => {
    await delay(1000);
    return HttpResponse.json({
      data: mockDb.products,
    });
  }),
  http.get('/carts', async () => {
    await delay(1000);
    return HttpResponse.json({
      data: mockDb.carts,
    });
  }),
  http.delete('/carts/:cartId', async (req) => {
    const cartId = req.params.cartId;
    await delay(1000);
    console.log('cartId', cartId);
    return HttpResponse.json({
      data: mockDb.carts.filter((cart) => cart.id !== Number(cartId)),
    });
  }),
  http.get('/orders', async () => {
    await delay(1000);
    return HttpResponse.json({
      data: mockDb.orders,
    });
  }),
];
