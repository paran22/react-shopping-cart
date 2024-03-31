import { Cart } from '@assets';
import { Button } from '@components/ui';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/products">
      <Button>
        <h1 className="nav-title">
          <Cart width="40px" />
          NEXTSTEP
        </h1>
      </Button>
    </Link>
  );
}
