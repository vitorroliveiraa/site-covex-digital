'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

type Variant = 'default' | 'strong' | 'purple';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  hoverable?: boolean;
  children: ReactNode;
}

const variantClass: Record<Variant, string> = {
  default: 'liquid-glass',
  strong: 'liquid-glass-strong',
  purple: 'liquid-glass-purple',
};

const cn = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard(
    { variant = 'default', hoverable = false, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl',
          variantClass[variant],
          hoverable && 'glass-hover',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
