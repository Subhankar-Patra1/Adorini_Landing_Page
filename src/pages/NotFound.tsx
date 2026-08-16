import { Link } from 'react-router-dom';
import { business } from '@/config/business';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { useDevice } from '@/hooks/useDevice';
import { useSeo } from '@/hooks/useSeo';

export default function NotFound() {
  const { isMobile } = useDevice();
  useSeo({
    title: `Page not found — ${business.name}`,
    description: 'The page you asked for does not exist on this site.',
    path: '/404',
  });

  return (
    <Section aria-labelledby="not-found-title">
      <div className="max-w-prose">
        <p className="text-[14px] uppercase tracking-[0.14em] text-accent">Error 404</p>
        <h1 id="not-found-title" className={`mt-3 ${isMobile ? 'text-[32px]' : 'text-[48px]'}`}>
          Page not found
        </h1>
        <p
          className={`mt-6 leading-relaxed text-on-surface-variant ${
            isMobile ? 'text-[16px]' : 'text-[18px]'
          }`}
        >
          The page you asked for does not exist, or it has moved. Go back to the home page, or
          contact us if you were looking for something specific.
        </p>
        <div className={`mt-8 flex gap-3 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <Button asChild variant="primary" size={isMobile ? 'mobile' : 'desktop'}>
            <Link to="/">Go to home page</Link>
          </Button>
          <Button asChild variant="outline" size={isMobile ? 'mobile' : 'desktop'}>
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
