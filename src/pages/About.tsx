import { Link } from 'react-router-dom';
import { addressLines, business, categories, prints, product } from '@/config/business';
import { Section } from '@/components/Section';
import { Separator } from '@/components/ui/separator';
import { useDevice } from '@/hooks/useDevice';
import { useSeo } from '@/hooks/useSeo';

export default function About() {
  const { isMobile } = useDevice();
  useSeo({
    title: `About — ${business.name}`,
    description: `${business.name} is a ${business.entityType.toLowerCase()} based in ${business.address.city}, established ${business.established}, selling women's ethnic wear online across India.`,
    path: '/about',
  });

  const headingSize = isMobile ? 'text-[32px]' : 'text-[48px]';
  const subSize = isMobile ? 'text-[20px]' : 'text-[24px]';
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';

  return (
    <Section aria-labelledby="about-title">
      <div className="max-w-prose">
        <h1 id="about-title" className={headingSize}>
          About {business.name}
        </h1>
        <p className={`mt-6 leading-relaxed text-on-surface-variant ${bodySize}`}>
          {business.name} is a {business.entityType.toLowerCase()} based in{' '}
          {business.address.city}, {business.address.state}, established {business.established}. We
          sell women&apos;s ethnic wear online across India through the {business.name} Android app.
        </p>

        <Separator className="my-10" />

        <h2 className={subSize}>What we sell</h2>
        <p className={`mt-4 leading-relaxed text-on-surface-variant ${bodySize}`}>
          {categories.map((category) => category.name).join(', ')}. Prices run {product.priceBand}.
          Garments are stocked plain and in {prints.filter((p) => p !== 'Plain').join(', ')} prints.
          The printed crafts are block-printed, wax-resist or appliqué work, so colour and placement
          vary between pieces.
        </p>

        <h2 className={`mt-10 ${subSize}`}>Who we make for</h2>
        <p className={`mt-4 leading-relaxed text-on-surface-variant ${bodySize}`}>
          Our customers are {product.customers}. Stock covers sizes {product.sizeRange} by bust in
          inches, and {product.blouseSizeRange} for blouses. Garments come in stretch and rigid
          fabrics, and each fabric family has its own size guidance on the product page.
        </p>

        <h2 className={`mt-10 ${subSize}`}>Custom sizes</h2>
        <p className={`mt-4 leading-relaxed text-on-surface-variant ${bodySize}`}>
          Sizes outside a category&apos;s stocked range can be requested on any product page. The
          team responds directly to arrange it. Custom size requests are subject to confirmation.
        </p>

        <h2 className={`mt-10 ${subSize}`}>Where to find us</h2>
        <address className={`mt-4 not-italic leading-relaxed text-on-surface-variant ${bodySize}`}>
          <span className="block font-heading text-on-surface">{business.name}</span>
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className={`mt-4 leading-relaxed text-on-surface-variant ${bodySize}`}>
          Reach us on{' '}
          <a href={`tel:${business.phoneHref}`} className="text-accent underline underline-offset-4">
            {business.phone}
          </a>{' '}
          or{' '}
          <a
            href={`mailto:${business.email}`}
            className="break-all text-accent underline underline-offset-4"
          >
            {business.email}
          </a>
          , {business.supportHours}. Full details are on the{' '}
          <Link to="/contact" className="text-accent underline underline-offset-4">
            contact page
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
