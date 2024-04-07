import { Button } from '@components/ui';
import { useNavigate } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

export default function NavItem({ to, label }: NavItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <Button variant="nav" onClick={handleClick}>
      {label}
    </Button>
  );
}
