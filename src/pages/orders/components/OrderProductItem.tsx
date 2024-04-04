import type { OrderProductResponse } from '@api';
import { Button } from '@components/ui';

interface OrderProductItemProps {
  data: OrderProductResponse;
}

export default function OrderProductItem({
  data: orderProduct,
}: OrderProductItemProps) {
  const { name, price, imageUrl, quantity } = orderProduct;
  const displayedPrice = (price * quantity).toLocaleString();
  const handleClick = (id: number) => () => {
    //TODO: 장바구나 추가하기
  };
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className="order-name">{name}</span>
          <span className="order-info">
            {`${displayedPrice}원 / 수량: ${quantity}`}
          </span>
        </div>
      </div>
      <div className="flex-center self-start">
        <Button
          variant="primary"
          size="small"
          onClick={handleClick(orderProduct.id)}
        >
          장바구니
        </Button>
      </div>
    </div>
  );
}
