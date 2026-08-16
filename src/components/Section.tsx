import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import { useDevice } from '@/hooks/useDevice';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  'aria-labelledby'?: string;
};

export function Section({ id, children, className, ...rest }: SectionProps) {
  const { isMobile } = useDevice();
  const verticalPad = isMobile ? 'py-10' : 'py-20';

  return (
    <section id={id} className={cn(verticalPad, className)} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  const { isMobile } = useDevice();
  const titleSize = isMobile ? 'text-[24px]' : 'text-[32px]';
  const introSize = isMobile ? 'text-[16px]' : 'text-[18px]';

  return (
    <header className="max-w-prose">
      {eyebrow ? (
        <p className="mb-3 text-[14px] uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 id={id} className={titleSize}>
        {title}
      </h2>
      {intro ? (
        <p className={cn('mt-4 leading-relaxed text-on-surface-variant', introSize)}>{intro}</p>
      ) : null}
    </header>
  );
}
