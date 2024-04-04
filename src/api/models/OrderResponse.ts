export interface OrderProductResponse {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export interface OrderResponse {
  id: number;
  orderDetails: OrderProductResponse[];
}
