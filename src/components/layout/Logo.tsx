import { Cart } from '@assets';
import { Button } from '@components/ui';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  };
  return (
    <Button onClick={handleClick}>
      <h1 className="nav-title">
        <Cart width="40px" />
        NEXTSTEP
      </h1>
    </Button>
  );
}
