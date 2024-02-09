import { ReactNode } from 'react';
import clsx from 'clsx';

interface TypographyProps {
  variant?: 'heading' | 'subheading' | 'paragraph';
  customClass?: string;
  className?: string;
  children: ReactNode;
}

export default function Typography({
  variant = 'paragraph',
  customClass,
  className,
  children,
}: TypographyProps) {
  const baseClasses = 'font-poppins';

  let variantClasses = '';

  switch (variant) {
    case 'heading':
      variantClasses = 'text-xl font-bold';
      break;
    case 'subheading':
      variantClasses = 'text-lg font-light';
      break;
    case 'paragraph':
      variantClasses = 'text-sm font-normal';
      break;
    default:
      variantClasses = 'text-base';
  }

  const textSize = customClass || variantClasses;

  return <p className={clsx(baseClasses, textSize, className)}>{children}</p>;
}
