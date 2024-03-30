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
	const handleMinus = () => {
		if (value === 0) return;
		onMinus();
	};

	const handlePlus = () => {
		onPlus();
	};

	return (
		<div className="number-input-container">
			<Input type="number" className="number-input" value={value} />
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
