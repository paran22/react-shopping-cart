import { Button, Input } from '@components/ui';

interface QuantitySelectorProps {
  value: number;
  onPlus: () => void;
  onMinus: () => void;
  onChange: (value: number) => void;
}

export default function QuantitySelector({
  value,
  onPlus,
  onMinus,
  onChange,
}: QuantitySelectorProps) {
  const handleMinus = () => {
    if (value === 0) return;
    onMinus();
  };
  const handlePlus = () => {
    onPlus();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="number-input-container">
      <Input
        type="number"
        className="number-input"
        value={value}
        onChange={handleChange}
      />
      <div>
        <Button className="number-input-button" onClick={handlePlus}>
          ▲
        </Button>
        <Button className="number-input-button" onClick={handleMinus}>
          ▼
        </Button>
      </div>
    </div>
  );
}
