import { Trash } from '@assets';
import { Button, CheckBox } from '@components/ui';
import type { Cart } from '@types';
import QuantitySelector from './QuantitySelector';
import { formatPrice } from '@utils';

interface CartItemProps {
  data: Cart;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

export default function CartItem({
  data: cart,
  onSelect,
  onDelete,
  onQuantityChange,
}: CartItemProps) {
  const handleSelect = () => {
    onSelect(cart.id);
  };
  const handleDelete = () => {
    onDelete(cart.id);
  };
  const { imageUrl, name } = cart.product;

  const displayedPrice = formatPrice(cart.quantity * cart.product.price);
  const handlePlus = () => {
    onQuantityChange(cart.id, cart.quantity + 1);
  };
  const handleMinus = () => {
    onQuantityChange(cart.id, cart.quantity - 1);
  };
  const handleQuantityChange = (value: number) => {
    onQuantityChange(cart.id, value);
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
          value={cart.quantity}
          onPlus={handlePlus}
          onMinus={handleMinus}
          onChange={handleQuantityChange}
          min={1}
          max={20}
        />
        <span className="cart-price">{displayedPrice}</span>
      </div>
    </div>
  );
}
