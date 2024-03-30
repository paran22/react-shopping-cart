import { Cart } from '@assets';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/products');
  };
  const handleCartClick = () => {
    navigate('/carts');
  };
  const handleOrderClick = () => {
    navigate('/orders');
  };
  return (
    <header>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <button onClick={handleLogoClick}>
            <h1 className="nav-title">
              <Cart width="40px" />
              NEXTSTEP
            </h1>
          </button>
        </div>
        <div className="flex gap-15">
          <button className="nav-button" onClick={handleCartClick}>
            장바구니
          </button>
          <button className="nav-button" onClick={handleOrderClick}>
            주문목록
          </button>
        </div>
      </nav>
    </header>
  );
}
