import { Button, Input } from '@components/ui';

interface QuantitySelectorProps {
  value: number;
  onPlus: () => void;
  onMinus: () => void;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  value,
  onPlus,
  onMinus,
  onChange,
  min,
  max,
}: QuantitySelectorProps) {
  const handleMinus = () => {
    if (value === min) return;
    onMinus();
  };
  const handlePlus = () => {
    if (value === max) return;
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
        disabled
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
