import { Button } from '@components/ui';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

export default function NavItem({ to, label }: NavItemProps) {
  return (
    <Link to={to}>
      <Button variant="nav">{label}</Button>
    </Link>
  );
}
