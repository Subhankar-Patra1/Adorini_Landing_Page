/**
 * Single source of truth for every published business fact.
 *
 * This site backs Meta Business Verification and Google Play publishing, so
 * nothing here may be paraphrased, embellished or duplicated inside a
 * component. If a fact is not in this file, it does not go on the site.
 */

export const business = {
  name: 'Adorini',
  legalName: 'Adorini',
  entityType: 'Sole Proprietorship',
  tagline: '“Adore the elegance you owe yourself”',
  established: 2026,
  domain: 'https://adorini.shop',
  jurisdiction: 'Kolkata, West Bengal',
  policyLastUpdated: '17 August 2026',

  address: {
    line1: 'Baguiati AC Market (G-12)',
    line2: 'EB/21 Desbandhu Nagar',
    locality: 'Baguiati',
    city: 'Kolkata',
    state: 'West Bengal',
    pin: '700059',
    country: 'India',
  },

  email: 'rupsa1728@gmail.com',
  phone: '+91 8902520956',
  /** E.164, for tel: links. */
  phoneHref: '+918902520956',
  supportHours: '12:00 pm – 9:30 pm, Tuesday to Sunday (closed Mondays)',
} as const;

/** Full postal address on one line, for meta tags and compact contexts. */
export const addressOneLine = [
  business.address.line1,
  business.address.line2,
  business.address.locality,
  `${business.address.city} – ${business.address.pin}`,
  business.address.state,
  business.address.country,
].join(', ');

/** Postal address as display lines, matching how it is printed on invoices. */
export const addressLines = [
  `${business.address.line1}, ${business.address.line2},`,
  `${business.address.locality}, ${business.address.city} – ${business.address.pin},`,
  `${business.address.state}, ${business.address.country}`,
];

export const product = {
  customers: 'women aged 25–55',
  priceBandLow: 300,
  priceBandHigh: 1500,
  priceBand: '₹300 – ₹1,500',
  sizeRange: '40–48',
  blouseSizeRange: '32–36',
  freeDeliveryThreshold: '₹3,000',
  firstOrderDiscount: '10%',
  referralCredit: '₹100',
  returnWindowDays: 3,
  refundDays: '3–4',
} as const;

export type Category = {
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: 'Kurtis',
    description: 'Everyday and occasion kurtis in stretch and rigid fabrics.',
  },
  {
    name: 'Two-Piece Suit Sets',
    description: 'Kurti with matching bottom, sold as a set.',
  },
  {
    name: 'Three-Piece Suit Sets',
    description: 'Kurti, bottom and dupatta, sold as a set.',
  },
  {
    name: 'Blouses',
    description: 'Saree blouses in sizes 32–36.',
  },
  {
    name: 'Petticoats',
    description: 'Saree petticoats to wear under drapes.',
  },
  {
    name: 'Leggings',
    description: 'Stretch leggings to pair with kurtis.',
  },
  {
    name: 'Palazzos',
    description: 'Wide-leg bottoms in flowing fabrics.',
  },
  {
    name: 'Straight/Pencil Pants',
    description: 'Narrow-cut bottoms in stretch and rigid fabrics.',
  },
  {
    name: 'One-Piece',
    description: 'Single-piece dresses in ethnic prints.',
  },
  {
    name: 'Kaftaans',
    description: 'Loose-cut kaftaans for relaxed wear.',
  },
];

/** Print and craft families stocked. */
export const prints = [
  'Plain',
  'Kalankari',
  'Ajrak',
  'Batik',
  'Aplik',
  'Fancy',
] as const;

export const paymentMethods = ['UPI', 'Card', 'Cash on Delivery'] as const;

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Shipping & Returns', to: '/shipping-returns' },
  { label: 'Contact', to: '/contact' },
] as const;
