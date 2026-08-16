import { Link } from 'react-router-dom';
import { business, product } from '@/config/business';
import { Emblem, Wordmark } from '@/components/BrandMarks';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { useDevice } from '@/hooks/useDevice';

export function Hero() {
  const { isMobile } = useDevice();
  const headingSize = isMobile ? 'text-[32px]' : 'text-[48px]';
  const leadSize = isMobile ? 'text-[16px]' : 'text-[18px]';
  const emblemSize = isMobile ? 48 : 72;
  const pad = isMobile ? 'py-12' : 'py-24';

  return (
    <section className={`bg-surface ${pad}`} aria-labelledby="hero-title">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <Emblem size={emblemSize} />
          <Wordmark height={isMobile ? 40 : 56} />
          <h1 id="hero-title" className={`${headingSize} max-w-[16ch] leading-tight`}>
            {business.tagline}
          </h1>
          <p className={`${leadSize} max-w-prose leading-relaxed text-on-surface-variant`}>
            Adorini sells women&apos;s ethnic wear online across India — kurtis, suit sets,
            blouses, palazzos and kaftaans in sizes {product.sizeRange}, priced {product.priceBand}.
            Orders are placed through the Adorini Android app.
          </p>
          <Button asChild variant="primary" size={isMobile ? 'mobile' : 'desktop'}>
            <a href="#what-we-sell">See what we sell</a>
          </Button>
          <p className="text-[14px] text-on-surface-variant">
            Custom sizes outside a category&apos;s stocked range can be requested on any product
            page.{' '}
            <Link to="/contact" className="text-accent underline underline-offset-4">
              Contact us
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
