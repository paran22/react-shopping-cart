import { Trash } from '@assets';
import { Button, CheckBox } from '@components/ui';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';
import { Cart } from '@types';

interface CartItemProps {
  data: Cart;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function CartItem({
  data: cart,
  onSelect,
  onDelete,
}: CartItemProps) {
  const handleSelect = () => {
    onSelect(cart.id);
  };
  const handleDelete = () => {
    onDelete(cart.id);
  };
  const { imageUrl, name } = cart.product;

  const [quantity, setQuantity] = useState(cart.quantity);
  const displayedPrice = (quantity * cart.product.price).toLocaleString();
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };
  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <CheckBox checked={cart.selected} onChange={handleSelect} />
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <span className="cart-name">{name}</span>
      </div>
      <div className="flex-col-center justify-end gap-10">
        <Button onClick={handleDelete} className="cart-trash-svg">
          <Trash width={20} />
        </Button>
        <QuantitySelector
          value={quantity}
          onPlus={handlePlus}
          onMinus={handleMinus}
          onChange={handleQuantityChange}
        />
        <span className="cart-price">{`${displayedPrice}원`}</span>
      </div>
    </div>
  );
}
