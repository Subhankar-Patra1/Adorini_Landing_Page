import { categories, product } from '@/config/business';
import { Section, SectionHeading } from '@/components/Section';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useDevice } from '@/hooks/useDevice';

export function WhatWeSell() {
  const { isMobile } = useDevice();

  const heading = (
    <SectionHeading
      id="what-we-sell-title"
      eyebrow="Categories"
      title="What we sell"
      intro={`Ten categories of women's ethnic wear, priced ${product.priceBand}. Stock covers sizes ${product.sizeRange} by bust in inches, and ${product.blouseSizeRange} for blouses.`}
    />
  );

  if (isMobile) {
    return (
      <Section id="what-we-sell" aria-labelledby="what-we-sell-title" className="bg-surface-low">
        {heading}
        {/* Horizontal scroll on phones keeps ten categories reachable without a
            tall column of cards. */}
        <ul className="hide-scrollbar -mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
          {categories.map((category) => (
            <li key={category.name} className="w-[70vw] max-w-[280px] shrink-0 snap-start">
              <Card className="flex h-full flex-col gap-2 p-5">
                <CardTitle>{category.name}</CardTitle>
                <CardContent className="text-[16px] leading-relaxed">
                  {category.description}
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[14px] text-on-surface-variant">Scroll sideways for all categories.</p>
      </Section>
    );
  }

  return (
    <Section id="what-we-sell" aria-labelledby="what-we-sell-title" className="bg-surface-low">
      {heading}
      <ul className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <li key={category.name}>
            <Card className="flex h-full flex-col gap-2 p-6">
              <CardTitle>{category.name}</CardTitle>
              <CardContent className="text-[18px] leading-relaxed">
                {category.description}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
