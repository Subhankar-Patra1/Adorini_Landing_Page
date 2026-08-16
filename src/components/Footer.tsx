import { Link } from 'react-router-dom';
import { addressLines, business, legalLinks } from '@/config/business';
import { Container } from '@/components/Container';
import { Wordmark } from '@/components/BrandMarks';
import { Separator } from '@/components/ui/separator';
import { useDevice } from '@/hooks/useDevice';
import { cn } from '@/lib/utils';

/**
 * Every business detail here stays visible at all widths — it is the record
 * relied on for business verification, so nothing collapses behind a toggle.
 */
export function Footer() {
  const { isMobile } = useDevice();
  const layout = isMobile ? 'flex flex-col gap-8' : 'grid grid-cols-3 gap-12';
  const pad = isMobile ? 'py-10' : 'py-16';

  return (
    <footer className="border-t border-outline-variant bg-surface-low">
      <Container className={pad}>
        <div className={layout}>
          <div>
            <Wordmark height={isMobile ? 30 : 36} />
            <p className="mt-4 font-heading text-[16px] text-on-surface-variant">
              {business.tagline}
            </p>
            <p className="mt-4 text-[14px] text-on-surface-variant">
              {business.entityType}, established {business.established}.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[18px]">Contact</h2>
            <address className="mt-4 not-italic text-[16px] leading-relaxed text-on-surface-variant">
              <span className="block font-heading text-on-surface">{business.name}</span>
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`tel:${business.phoneHref}`}
                className={cn(
                  'mt-3 block text-on-surface transition-colors hover:text-accent',
                  isMobile && 'min-h-[44px] leading-[44px]',
                )}
              >
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className={cn(
                  'block break-all text-on-surface transition-colors hover:text-accent',
                  isMobile && 'min-h-[44px] leading-[44px]',
                )}
              >
                {business.email}
              </a>
            </address>
            <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">
              Support: {business.supportHours}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-[18px]">Policies</h2>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      'inline-flex items-center text-[16px] text-on-surface-variant transition-colors hover:text-accent',
                      isMobile ? 'min-h-[44px]' : 'min-h-[32px]',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-[14px] text-on-surface-variant">
          © {business.established} {business.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
