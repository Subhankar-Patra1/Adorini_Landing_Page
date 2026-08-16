import { business } from '@/config/business';

/**
 * The emblem is detailed line art and goes illegible below roughly 32px, so it
 * is only ever rendered at display sizes. Tinting happens through a CSS mask
 * (see `.emblem-ink`) rather than by editing the SVG.
 */
export function Emblem({ size }: { size: number }) {
  return (
    <span
      className="emblem-ink block shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${business.name} emblem`}
    />
  );
}

export function Wordmark({ height, className }: { height: number; className?: string }) {
  return (
    <img
      src="/wordmark.svg"
      alt={business.name}
      height={height}
      width={Math.round(height * (1088 / 500))}
      style={{ height, width: 'auto' }}
      className={className}
      decoding="async"
    />
  );
}
