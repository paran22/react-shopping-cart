import type { OrderResponse } from '@api';
import { useNavigate } from 'react-router-dom';
import OrderProductItem from './OrderProductItem';
import { Button } from '@components/ui';

interface OrderItemProps {
  data: OrderResponse;
}

export default function OrderItem({ data: order }: OrderItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/orders/${order.id}`);
  };
  return (
    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: {order.id}</span>
        <Button onClick={handleClick}>
          <span>{`상세보기 >`}</span>
        </Button>
      </div>
      {order.orderDetails.map((detail) => (
        <OrderProductItem key={detail.id} data={detail} />
      ))}
    </div>
  );
}
