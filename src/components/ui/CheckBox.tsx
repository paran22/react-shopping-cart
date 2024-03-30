import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
	return (
		<div className="checkbox-container">
			<input type="checkbox" className="checkbox" {...props} />
			<label className="checkbox-label" htmlFor="checkbox">
				{label}
			</label>
		</div>
	);
}
