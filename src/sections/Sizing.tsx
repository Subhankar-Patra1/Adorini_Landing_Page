import { product } from '@/config/business';
import { Section, SectionHeading } from '@/components/Section';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useDevice } from '@/hooks/useDevice';

export function Sizing() {
  const { isMobile } = useDevice();
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';

  const stocked = [
    { term: 'Kurtis, suit sets, one-piece, kaftaans', detail: `Sizes ${product.sizeRange}, bust in inches` },
    { term: 'Blouses', detail: `Sizes ${product.blouseSizeRange}, bust in inches` },
  ];

  return (
    <Section id="sizing" aria-labelledby="sizing-title" className="bg-surface-container">
      <SectionHeading
        id="sizing-title"
        eyebrow="Fit"
        title="Sizing and custom orders"
        intro={`Adorini stocks sizes ${product.sizeRange} by bust in inches, and ${product.blouseSizeRange} for blouses. Sizes outside a category's stocked range can be requested on any product page.`}
      />

      <div className={`mt-10 grid grid-cols-1 lg:grid-cols-3 ${isMobile ? 'gap-4' : 'gap-8'}`}>
        <Card className={isMobile ? 'p-5' : 'p-8'}>
          <CardTitle>Stocked sizes</CardTitle>
          {/* Definition list rather than a table, so it stacks cleanly on phones. */}
          <dl className={`mt-4 space-y-4 ${bodySize}`}>
            {stocked.map((row) => (
              <div key={row.term}>
                <dt className="text-on-surface">{row.term}</dt>
                <dd className="text-on-surface-variant">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card className={isMobile ? 'p-5' : 'p-8'}>
          <CardTitle>Stretch and rigid fabrics</CardTitle>
          <CardContent className={`mt-4 leading-relaxed ${bodySize}`}>
            Every garment is either a stretch fabric or a rigid, non-stretch one. The two families
            fit differently at the same stated size, so each product page carries the size guidance
            that applies to that fabric. Read it before ordering.
          </CardContent>
        </Card>

        <Card className={isMobile ? 'p-5' : 'p-8'}>
          <CardTitle>Custom size requests</CardTitle>
          <CardContent className={`mt-4 leading-relaxed ${bodySize}`}>
            If your size is outside the stocked range for a category, raise a custom size request on
            the product page in the app. The request records the size you need and a contact number,
            and the team replies directly to arrange it. Custom sizes are subject to confirmation.
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
