import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  number?: string;
  microLabel?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  microLabel,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignmentClass, className)}>
      {(number || microLabel) && (
        <div className="flex items-center gap-2 mb-3">
          {number && (
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
              {number}
            </span>
          )}
          {microLabel && (
            <span
              className={cn(
                'micro-label',
                light ? 'text-accent' : 'text-brand'
              )}
            >
              {microLabel}
            </span>
          )}
        </div>
      )}
      
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight',
          light ? 'text-surface' : 'text-ink'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal',
            light ? 'text-surface/80' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
