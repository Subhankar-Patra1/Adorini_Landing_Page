import { Hero } from '@/sections/Hero';
import { WhatWeSell } from '@/sections/WhatWeSell';
import { Craft } from '@/sections/Craft';
import { Sizing } from '@/sections/Sizing';
import { Ordering } from '@/sections/Ordering';
import { ContactStrip } from '@/sections/ContactStrip';
import { useSeo } from '@/hooks/useSeo';
import { business, product } from '@/config/business';

export default function Home() {
  useSeo({
    title: `${business.name} — Women's ethnic wear online in India`,
    description: `${business.name} sells women's ethnic wear online across India: kurtis, suit sets, blouses, palazzos and kaftaans in sizes ${product.sizeRange}, priced ${product.priceBand}. Custom sizes on request.`,
    path: '/',
  });

  return (
    <>
      <Hero />
      <WhatWeSell />
      <Craft />
      <Sizing />
      <Ordering />
      <ContactStrip />
    </>
  );
}
