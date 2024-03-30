import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: 'primary' | 'border';
	className?: string;
}

export default function Button({
	children,
	variant,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(variant && `${variant}-button`, className)}
			{...props}
		>
			{children}
		</button>
	);
}
