import { Button, CheckBox } from '@components/ui';

interface CartsAllSelectorProps {
  selectedAll: boolean;
  selectAll: () => void;
}

export default function CartAllSelector({
  selectedAll,
  selectAll,
}: CartsAllSelectorProps) {
  const label = selectedAll ? '선택해제' : '전체선택';
  const handleCheck = () => {
    selectAll();
  };
  return (
    <div className="flex justify-between items-center">
      <CheckBox checked={selectedAll} onChange={handleCheck} label={label} />
      <Button variant="border">{label}</Button>
    </div>
  );
}
