interface CartsSummaryProps {
  totalPrice: number;
  totalCount: number;
}

export default function CartsSummary({
  totalPrice,
  totalCount,
}: CartsSummaryProps) {
  const displayedPrice = totalPrice.toLocaleString();
  return (
    <>
      <div className="cart-right-section__top">
        <h3 className="cart-title">결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">{`${displayedPrice}원`}</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center">
            주문하기({totalCount}개)
          </button>
        </div>
      </div>
    </>
  );
}
