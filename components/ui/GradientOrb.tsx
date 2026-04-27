'use client';

import { CSSProperties } from 'react';

interface GradientOrbProps {
  className?: string;
  color?: 'purple' | 'white' | 'mixed';
  size?: number;
  blur?: number;
  opacity?: number;
  style?: CSSProperties;
}

const palette: Record<NonNullable<GradientOrbProps['color']>, string> = {
  purple:
    'radial-gradient(circle at 30% 30%, #7b3db5 0%, #531f7b 35%, transparent 70%)',
  white:
    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, transparent 70%)',
  mixed:
    'radial-gradient(circle at 30% 30%, #b692d9 0%, #531f7b 40%, transparent 75%)',
};

export function GradientOrb({
  className = '',
  color = 'purple',
  size = 480,
  blur = 90,
  opacity = 0.55,
  style,
}: GradientOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full will-change-transform animate-orb-drift ${className}`}
      style={{
        width: size,
        height: size,
        background: palette[color],
        filter: `blur(${blur}px)`,
        opacity,
        ...style,
      }}
    />
  );
}
