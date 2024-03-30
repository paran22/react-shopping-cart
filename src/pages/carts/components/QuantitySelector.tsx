import { Button, Input } from '@components/ui';

interface QuantitySelectorProps {
	value: number;
	onPlus: () => void;
	onMinus: () => void;
}

export default function QuantitySelector({
	value,
	onPlus,
	onMinus,
}: QuantitySelectorProps) {
	return (
		<div className="number-input-container">
			<Input type="number" className="number-input" value={value} />
			<div>
				<Button className="number-input-button" onClick={onPlus}>
					▲
				</Button>
				<Button className="number-input-button" onClick={onMinus}>
					▼
				</Button>
			</div>
		</div>
	);
}
