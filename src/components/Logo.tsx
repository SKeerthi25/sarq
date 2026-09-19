import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'header' | 'footer' | 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  to?: string;
  className?: string;
  onClick?: () => void;
  showSubtitle?: boolean;
}

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="SARQ Monogram"
    >
      <defs>
        {/* Deep architectural oxblood gradient */}
        <linearGradient id="sarqRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C51E42" />
          <stop offset="50%" stopColor="#A81332" />
          <stop offset="100%" stopColor="#68091B" />
        </linearGradient>

        {/* Facet shadow gradient for 3D beam depth */}
        <linearGradient id="sarqShadowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A0512" />
          <stop offset="100%" stopColor="#870B24" />
        </linearGradient>

        {/* Precision surveyor lime / gold highlight */}
        <linearGradient id="sarqAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F548" />
          <stop offset="100%" stopColor="#C3D63F" />
        </linearGradient>

        {/* Outer shield subtle gradient */}
        <linearGradient id="sarqShieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22252A" />
          <stop offset="100%" stopColor="#141618" />
        </linearGradient>

        {/* Drop shadow filter for solid presence */}
        <filter id="sarqGlow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Hexagonal / Precision Architectural Shield */}
      <polygon
        points="50,4 92,26 92,74 50,96 8,74 8,26"
        fill="url(#sarqShieldGrad)"
        stroke="url(#sarqRedGrad)"
        strokeWidth="3.5"
        strokeLinejoin="round"
        filter="url(#sarqGlow)"
      />

      {/* Blueprint Grid Micro-Lines (Subtle Engineering Detail) */}
      <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 2" />

      {/* Top Beam of "S" (Cantilever Structural Geometry) */}
      <path
        d="M 28 32 L 72 32 L 64 43 L 36 43 Z"
        fill="url(#sarqRedGrad)"
      />
      <polygon
        points="72,32 64,43 78,43 82,32"
        fill="url(#sarqAccentGrad)"
      />

      {/* Left Vertical Connecting Column */}
      <path
        d="M 28 32 L 36 43 L 36 57 L 24 51 Z"
        fill="url(#sarqShadowGrad)"
      />

      {/* Center Structural Cross-Beam */}
      <path
        d="M 28 49 L 72 49 L 64 60 L 22 60 Z"
        fill="url(#sarqRedGrad)"
      />
      
      {/* Precision Center Indicator Triangle */}
      <polygon
        points="50,44 54,49 46,49"
        fill="url(#sarqAccentGrad)"
      />

      {/* Right Vertical Connecting Column */}
      <path
        d="M 64 60 L 76 54 L 76 68 L 64 68 Z"
        fill="url(#sarqShadowGrad)"
      />

      {/* Bottom Beam of "S" (Foundation Slab Geometry) */}
      <path
        d="M 28 68 L 76 68 L 68 79 L 20 79 Z"
        fill="url(#sarqRedGrad)"
      />
      <polygon
        points="20,79 28,68 18,68 12,79"
        fill="url(#sarqAccentGrad)"
      />

      {/* Outer corner micro-rivets / structural anchor points */}
      <circle cx="50" cy="11" r="1.75" fill="#C3D63F" />
      <circle cx="85" cy="29" r="1.75" fill="#C51E42" />
      <circle cx="85" cy="71" r="1.75" fill="#C51E42" />
      <circle cx="50" cy="89" r="1.75" fill="#C3D63F" />
      <circle cx="15" cy="71" r="1.75" fill="#C51E42" />
      <circle cx="15" cy="29" r="1.75" fill="#C51E42" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  size = 'md',
  to = '/',
  className = '',
  onClick,
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { emblem: 34, title: 'text-lg', sub: 'text-[9px]', ltd: 'text-[10px]' },
    md: { emblem: 42, title: 'text-2xl', sub: 'text-[10px]', ltd: 'text-xs' },
    lg: { emblem: 52, title: 'text-3xl', sub: 'text-xs', ltd: 'text-sm' },
    xl: { emblem: 68, title: 'text-4xl sm:text-5xl', sub: 'text-sm', ltd: 'text-base' },
  }[size];

  const content = (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Precision Emblem */}
      <div className="relative transform transition-transform duration-200 group-hover:scale-105">
        <LogoEmblem size={sizeMap.emblem} />
      </div>

      {/* Typography Lockup */}
      {variant !== 'icon' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-heading font-black tracking-wider uppercase transition-colors ${sizeMap.title} ${
                variant === 'footer'
                  ? 'text-white'
                  : 'text-ink dark:text-white group-hover:text-brand dark:group-hover:text-brand'
              }`}
            >
              SARQ
            </span>
            <span
              className={`font-mono font-extrabold uppercase px-1.5 py-0.5 rounded tracking-widest bg-brand text-white ${sizeMap.ltd}`}
            >
              LTD
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1 leading-none">
              <span
                className={`font-heading font-bold uppercase tracking-[0.2em] ${sizeMap.sub} ${
                  variant === 'footer'
                    ? 'text-surface/70'
                    : 'text-muted dark:text-surface/70 group-hover:text-ink dark:group-hover:text-white transition-colors'
                }`}
              >
                Construction London
              </span>
              <span className="w-1 h-1 rounded-full bg-accent inline-block" />
              <span className={`font-mono font-medium text-accent ${sizeMap.sub}`}>
                SW11
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (!to) {
    return content;
  }

  return (
    <Link to={to} onClick={onClick} className="inline-flex items-center focus:outline-none">
      {content}
    </Link>
  );
};
