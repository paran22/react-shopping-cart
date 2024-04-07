import Logo from './Logo';
import NavItem from './NavItem';

export default function Header() {
  return (
    <header>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <Logo />
        </div>
        <div className="flex flex-center gap-15">
          <NavItem to="/carts" label="장바구니" />
          <NavItem to="/orders" label="주문목록" />
        </div>
      </nav>
    </header>
  );
}
