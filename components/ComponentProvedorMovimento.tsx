'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

// Respeita prefers-reduced-motion nas animações em JS (o CSS já é coberto em globals.css).
export function ComponentProvedorMovimento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
