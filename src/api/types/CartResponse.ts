import type { ProductResponse } from './ProductResponse';

export interface CartResponse {
  id: number;
  product: ProductResponse;
  quantity: number;
}
