import { OrderModel } from '@api';
import { Link } from 'react-router-dom';
import OrderProductItem from './OrderProductItem';
import { Button } from '@components/ui';

interface OrderItemProps {
  data: OrderModel;
}

export default function OrderItem({ data: order }: OrderItemProps) {
  return (
    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: {order.id}</span>
        <Link to={`/orders/${order.id}`}>
          <Button>
            <span>{`상세보기 >`}</span>
          </Button>
        </Link>
      </div>
      {order.orderDetails.map((detail) => (
        <OrderProductItem key={detail.id} data={detail} />
      ))}
    </div>
  );
}
