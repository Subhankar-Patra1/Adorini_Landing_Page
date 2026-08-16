import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useDevice } from '@/hooks/useDevice';

/**
 * Caps content at 1200px and centres it, so wide monitors do not stretch the
 * measure edge to edge.
 */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  const { isMobile } = useDevice();
  const horizontalPad = isMobile ? 'px-6' : 'px-8 lg:px-16';

  return <div className={cn('mx-auto w-full max-w-content', horizontalPad, className)}>{children}</div>;
}
