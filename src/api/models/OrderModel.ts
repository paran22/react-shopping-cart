export interface OrderProductModel {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface OrderModel {
  id: number;
  orderDetails: OrderProductModel[];
}
