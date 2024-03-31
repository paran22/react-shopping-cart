import clsx from 'clsx';
import React from 'react';

const toVariantClassName = (
  variant?: `primary` | 'border',
  size?: 'small' | 'medium' | 'large',
) => {
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
  variant?: 'primary' | 'border';
  className?: string;
  size?: 'small' | 'medium' | 'large';
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
