import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'dark' | 'interactive';
  accentBorder?: 'brand' | 'lime' | 'none';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  accentBorder = 'none',
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-card text-ink border border-hairline',
    elevated: 'bg-card text-ink border border-hairline shadow-industrial hover:shadow-industrial-lg transition-shadow duration-200',
    bordered: 'bg-transparent text-ink border-2 border-hairline',
    dark: 'bg-surface-deep text-surface border border-hairline/20',
    interactive: 'bg-card text-ink border border-hairline hover:border-brand/40 hover:shadow-industrial-lg transition-all duration-200 cursor-pointer',
  }[variant];

  const accentStyles = {
    none: '',
    brand: 'callout-accent-border',
    lime: 'callout-lime-border',
  }[accentBorder];

  return (
    <div
      className={cn(
        'rounded-md p-6 sm:p-8 relative overflow-hidden transition-colors',
        variantStyles,
        accentStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
