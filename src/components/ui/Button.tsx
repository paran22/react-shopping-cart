import clsx from 'clsx';
import React from 'react';

type ButtonVariant = 'primary' | 'border' | 'nav';
type ButtonSize = 'small' | 'medium' | 'large';

const toVariantClassName = (variant?: ButtonVariant, size?: ButtonSize) => {
  let className = '';
  if (variant) {
    className += `${variant}-button`;
  }
  if (size) {
    className += `-${size}`;
  }
  return className;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
}

export default function Button({
  children,
  variant,
  className,
  size,
  ...props
}: ButtonProps) {
  const variantClassName = toVariantClassName(variant, size);
  return (
    <button className={clsx(variantClassName, className)} {...props}>
      {children}
    </button>
  );
}
