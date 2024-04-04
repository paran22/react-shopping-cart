import { Button, CheckBox } from '@components/ui';

interface CartsAllSelectorProps {
  isSelectedAll: boolean;
  selectAll: () => void;
}

export default function CartAllSelector({
  isSelectedAll,
  selectAll,
}: CartsAllSelectorProps) {
  const label = isSelectedAll ? '선택해제' : '전체선택';
  const handleCheck = () => {
    selectAll();
  };
  return (
    <div className="flex justify-between items-center">
      <CheckBox checked={isSelectedAll} onChange={handleCheck} label={label} />
      <Button variant="border" onClick={handleCheck}>
        {label}
      </Button>
    </div>
  );
}
