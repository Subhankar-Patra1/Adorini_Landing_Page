/*
  NOTE FOR REVIEWERS — not rendered to users.
  This page describes Adorini's actual shipping and returns practice, but it
  has not been drafted or checked by a lawyer. It requires review by a
  qualified legal professional before publication.
*/

import { business, product } from '@/config/business';
import { LegalPage, type LegalSection } from '@/components/LegalPage';
import { useSeo } from '@/hooks/useSeo';

const sections: LegalSection[] = [
  {
    id: 'where-we-deliver',
    heading: 'Where we deliver',
    blocks: [
      'We deliver across India. Orders are dispatched from Kolkata, West Bengal.',
      'We do not ship outside India. A small number of pin codes may not be serviceable by our logistics partner; if yours is one of them, checkout will tell you before you pay.',
    ],
  },
  {
    id: 'tracking',
    heading: 'Tracking your order',
    blocks: [
      'Once your order is dispatched, live tracking is available in the app under your order. Order updates are also sent to your registered mobile number.',
    ],
  },
  {
    id: 'delivery-charges',
    heading: 'Delivery charges',
    blocks: [
      `Delivery is free on orders above ${product.freeDeliveryThreshold}. The discount is applied automatically at checkout — you do not need a code.`,
      `On orders at or below ${product.freeDeliveryThreshold}, a delivery charge applies. The exact amount is shown at checkout before you pay, so you always see the full total before confirming the order.`,
    ],
  },
  {
    id: 'cod',
    heading: 'Cash on Delivery',
    blocks: [
      'Cash on Delivery is available alongside UPI and card payment.',
      'Cash on Delivery orders are confirmed by a one-time passcode sent to your registered mobile number. The order is dispatched only after the passcode is confirmed. This protects you against an order being placed on your number without your knowledge.',
      'Payment is collected by the delivery partner when the parcel is handed over.',
    ],
  },
  {
    id: 'raising-a-return',
    heading: 'Raising a return',
    blocks: [
      `Return requests are raised in the app, within ${product.returnWindowDays} days of the order being delivered. Open the order, choose the item, and select the return option.`,
      'Tell us the reason for the return and add a photograph where the item is damaged or incorrect. The item is then collected from your delivery address by our logistics partner.',
      'Requests raised after the return window has closed cannot be accepted.',
    ],
  },
  {
    id: 'return-condition',
    heading: 'Condition of returned items',
    blocks: [
      'Items must be returned unworn and unwashed, with all original tags and packaging intact.',
      'We check the item on receipt. A return is approved once the item is confirmed to be in the condition described above and to match what was dispatched.',
    ],
  },
  {
    id: 'not-returnable',
    heading: 'What cannot be returned',
    blocks: [
      'The following cannot be returned:',
      {
        list: [
          'Items that have been worn, washed, altered or damaged after delivery.',
          'Items returned without their original tags or packaging.',
          'Garments made to a custom size you specified, except where the item is faulty, damaged, or does not match what was agreed.',
          'Petticoats, leggings and innerwear-type items, on hygiene grounds, unless the item is faulty, damaged or incorrect.',
          'Items where the return request was raised after the return window closed.',
        ],
      },
      'Colour and print variation in hand-printed garments — Kalankari, Ajrak, Batik and Aplik — is a property of the craft and is not treated as a defect.',
    ],
  },
  {
    id: 'refunds',
    heading: 'Refunds',
    blocks: [
      `Once a return is approved, the refund is processed within ${product.refundDays} days of approval.`,
      'Refunds for UPI and card payments are issued to the original payment method through our payment gateway. Your bank or card issuer may take further time to show the credit in your account.',
      'Refunds for Cash on Delivery orders are issued to a bank account or UPI ID you provide, or as store credit if you prefer.',
      'Where a delivery charge was paid on the original order, it is refunded when the return is due to a fault, damage, or an incorrect item being sent.',
    ],
  },
  {
    id: 'damaged-or-incorrect',
    heading: 'Damaged or incorrect items',
    blocks: [
      `If your parcel arrives damaged, or contains the wrong item, raise a return in the app within ${product.returnWindowDays} days of delivery and attach photographs of the item and the packaging.`,
      `You can also contact us directly on ${business.phone} or ${business.email} during support hours.`,
      'We arrange collection and issue a replacement where the item is in stock, or a full refund including any delivery charge paid. You are not charged for the return collection in these cases.',
    ],
  },
  {
    id: 'help',
    heading: 'Help with an order',
    blocks: [
      'If you are unsure about anything on this page, contact us before returning an item:',
      {
        list: [
          `Email: ${business.email}`,
          `Phone: ${business.phone}`,
          `Support hours: ${business.supportHours}`,
        ],
      },
    ],
  },
];

export default function ShippingReturns() {
  useSeo({
    title: `Shipping & Returns — ${business.name}`,
    description: `Pan-India delivery with tracking, free delivery above ${product.freeDeliveryThreshold}, Cash on Delivery with passcode confirmation, and returns raised in the app within ${product.returnWindowDays} days of delivery.`,
    path: '/shipping-returns',
  });

  return (
    <LegalPage
      title="Shipping & Returns"
      intro={`How ${business.name} delivers orders across India, and how returns and refunds are handled.`}
      sections={sections}
    />
  );
}
