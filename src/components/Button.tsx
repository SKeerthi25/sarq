import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'dark' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  pill = true,
  to,
  href,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[38px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-7 py-3.5 min-h-[50px] gap-2.5',
  }[size];

  const shapeStyles = pill ? 'rounded-full' : 'rounded-md';

  const variantStyles = {
    primary: 'bg-brand text-white hover:bg-brand-hover shadow-sm border border-transparent',
    accent: 'bg-accent text-ink hover:brightness-95 shadow-sm border border-transparent font-bold',
    outline: 'border border-brand text-brand hover:bg-brand hover:text-white bg-transparent',
    dark: 'bg-surface-deep text-surface hover:bg-ink border border-surface-deep/40 shadow-sm',
    ghost: 'bg-transparent text-ink hover:bg-hairline/40 border border-transparent',
    white: 'bg-white text-ink hover:bg-surface border border-hairline shadow-sm',
  }[variant];

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={props.onClick as any}
        className={cn(baseStyles, sizeStyles, shapeStyles, variantStyles, className)}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={props.onClick as any}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cn(baseStyles, sizeStyles, shapeStyles, variantStyles, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(baseStyles, sizeStyles, shapeStyles, variantStyles, className)}
      {...props}
    >
      {content}
    </button>
  );
};
