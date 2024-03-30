import { ProductModel } from './ProductModel';

export interface CartModel {
  id: number;
  product: ProductModel;
  quantity: number;
}
