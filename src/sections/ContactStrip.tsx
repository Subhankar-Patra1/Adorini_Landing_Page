import { addressLines, business } from '@/config/business';
import { Section, SectionHeading } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { useDevice } from '@/hooks/useDevice';

export function ContactStrip() {
  const { isMobile } = useDevice();
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';

  return (
    <Section id="contact" aria-labelledby="contact-strip-title" className="bg-surface-low">
      <SectionHeading id="contact-strip-title" eyebrow="Reach us" title="Contact" />

      <div className={`mt-8 grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-6' : 'gap-12'}`}>
        <address className={`not-italic leading-relaxed text-on-surface-variant ${bodySize}`}>
          <span className="block font-heading text-on-surface">{business.name}</span>
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <div className={`${bodySize} text-on-surface-variant`}>
          <dl className="space-y-3">
            <div>
              <dt className="text-on-surface">Phone</dt>
              <dd>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="text-on-surface-variant transition-colors hover:text-accent"
                >
                  {business.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-on-surface">Email</dt>
              <dd>
                <a
                  href={`mailto:${business.email}`}
                  className="break-all text-on-surface-variant transition-colors hover:text-accent"
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-on-surface">Support hours</dt>
              <dd>{business.supportHours}</dd>
            </div>
          </dl>

          <Button asChild variant="outline" size={isMobile ? 'mobile' : 'desktop'} className="mt-6">
            <a href={`mailto:${business.email}`}>Email {business.name}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
