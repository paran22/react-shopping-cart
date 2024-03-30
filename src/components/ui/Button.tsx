import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: 'primary' | 'border';
}

export default function Button({
	children,
	variant = 'primary',
	...props
}: ButtonProps) {
	return (
		<button className={`${variant}-button`} {...props}>
			{children}
		</button>
	);
}
