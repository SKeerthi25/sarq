import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../lib/utils';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  className?: string;
  light?: boolean;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  className,
  light = false,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className={cn('flex flex-col', className)}>
      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span
            className={cn(
              'font-mono text-2xl sm:text-3xl font-bold',
              light ? 'text-accent' : 'text-brand'
            )}
          >
            {prefix}
          </span>
        )}
        <span
          className={cn(
            'font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight tabular-nums',
            light ? 'text-white' : 'text-ink'
          )}
        >
          {count}
        </span>
        {suffix && (
          <span
            className={cn(
              'font-mono text-2xl sm:text-3xl font-bold',
              light ? 'text-accent' : 'text-brand'
            )}
          >
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-2 border-t border-hairline/60 pt-2">
        <p
          className={cn(
            'font-heading text-base sm:text-lg font-bold uppercase tracking-wider',
            light ? 'text-surface' : 'text-ink'
          )}
        >
          {label}
        </p>
        {sublabel && (
          <p
            className={cn(
              'text-xs font-normal mt-0.5',
              light ? 'text-surface/70' : 'text-muted'
            )}
          >
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
};
