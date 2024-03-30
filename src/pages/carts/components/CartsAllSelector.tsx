import { useState } from 'react';
import { CheckBox, Button } from '@components/ui';

export default function CartAllSelector() {
	const [selectedAll, setSelectedAll] = useState(false);
	const label = selectedAll ? '선택해제' : '전체선택';
	const handleCheck = () => {
		setSelectedAll(!selectedAll);
	};
	return (
		<div className="flex justify-between items-center">
			<CheckBox checked={selectedAll} onChange={handleCheck} label={label} />
			<Button variant="border">{label}</Button>
		</div>
	);
}
