interface CartsHeaderProps {
  selectedItemQuantity: number;
}

export default function CartsHeader({
  selectedItemQuantity,
}: CartsHeaderProps) {
  return (
    <>
      <h3 className="cart-title">{`든든배송 상품(${selectedItemQuantity}개)`}</h3>
      <hr className="divide-line-gray mt-10" />
    </>
  );
}
