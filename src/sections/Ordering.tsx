import { Link } from 'react-router-dom';
import { paymentMethods, product } from '@/config/business';
import { Section, SectionHeading } from '@/components/Section';
import { useDevice } from '@/hooks/useDevice';

const steps = [
  {
    title: 'Browse in the app',
    text: 'Categories, prints and sizes are listed in the Adorini Android app. Each product page carries its own fabric and size guidance.',
  },
  {
    title: 'Place the order',
    text: `Add to cart and check out. First orders get ${product.firstOrderDiscount} off, applied automatically. Delivery is free on orders above ${product.freeDeliveryThreshold}, also applied automatically; any charge below that threshold is shown at checkout.`,
  },
  {
    title: `Pay by ${paymentMethods.join(', ')}`,
    text: 'UPI and card payments are handled by the payment gateway. Cash on Delivery orders are confirmed by a one-time passcode before dispatch.',
  },
  {
    title: 'Delivery across India',
    text: 'Orders ship pan-India with live tracking in the app.',
  },
  {
    title: 'Returns and refunds',
    text: `Return requests are raised in the app within ${product.returnWindowDays} days of delivery. Approved returns are refunded within ${product.refundDays} days of approval.`,
  },
];

export function Ordering() {
  const { isMobile } = useDevice();
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';

  return (
    <Section id="ordering" aria-labelledby="ordering-title">
      <SectionHeading
        id="ordering-title"
        eyebrow="Ordering"
        title="How ordering works"
        intro={`Refer a customer and ₹100 store credit is added to your account once their first order is delivered.`}
      />

      <ol className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isMobile ? 'gap-6' : 'gap-8'}`}>
        {steps.map((step, index) => (
          <li key={step.title} className="border-t border-outline-variant pt-5">
            <span className="text-[14px] tracking-[0.14em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`mt-2 ${isMobile ? 'text-[20px]' : 'text-[24px]'}`}>{step.title}</h3>
            <p className={`mt-3 leading-relaxed text-on-surface-variant ${bodySize}`}>{step.text}</p>
          </li>
        ))}
      </ol>

      <p className={`mt-8 ${bodySize} text-on-surface-variant`}>
        Full terms are set out in{' '}
        <Link to="/shipping-returns" className="text-accent underline underline-offset-4">
          Shipping &amp; Returns
        </Link>{' '}
        and{' '}
        <Link to="/terms" className="text-accent underline underline-offset-4">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </Section>
  );
}
