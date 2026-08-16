/*
  NOTE FOR REVIEWERS — not rendered to users.
  These terms describe how Adorini actually operates, but they have not been
  drafted or checked by a lawyer. They require review by a qualified legal
  professional before publication.
*/

import { business, paymentMethods, product } from '@/config/business';
import { LegalPage, type LegalSection } from '@/components/LegalPage';
import { useSeo } from '@/hooks/useSeo';

const sections: LegalSection[] = [
  {
    id: 'about-these-terms',
    heading: 'About these terms',
    blocks: [
      `These terms govern your use of the ${business.name} Android app and this website at ${business.domain}, and any order you place with us. By using the app or placing an order, you agree to them.`,
      `${business.name} is a ${business.entityType.toLowerCase()} with its place of business at ${business.address.line1}, ${business.address.line2}, ${business.address.locality}, ${business.address.city} – ${business.address.pin}, ${business.address.state}, ${business.address.country}.`,
    ],
  },
  {
    id: 'eligibility',
    heading: 'Eligibility',
    blocks: [
      'You must be at least 18 years of age and capable of entering into a binding contract under Indian law to place an order.',
      'You must provide a delivery address in India. We do not ship outside India.',
    ],
  },
  {
    id: 'account-security',
    heading: 'Your account and one-time passcodes',
    blocks: [
      'Sign-in is by one-time passcode sent to your mobile number, or by Google sign-in. You are responsible for keeping access to that mobile number and that Google account secure.',
      'Do not share a one-time passcode with anyone. We will never ask you for one. Any order placed through your account is treated as placed by you.',
      'Tell us at once if you believe someone else has used your account, so we can help stop pending orders.',
    ],
  },
  {
    id: 'products',
    heading: 'Product descriptions and colour',
    blocks: [
      'We describe garments, fabrics and measurements as accurately as we can. Measurements are stated as bust size in inches.',
      'Kalankari, Ajrak, Batik and Aplik garments are hand-printed or hand-worked. Colour depth, motif placement and finish vary between pieces of the same design. This variation is a property of the craft and is not a defect.',
      'Screen colours vary between devices, so the shade you see may differ slightly from the garment you receive.',
    ],
  },
  {
    id: 'pricing',
    heading: 'Pricing',
    blocks: [
      `All prices are shown in Indian Rupees (₹). Our garments are priced ${product.priceBand}.`,
      'We may change prices at any time. The price that applies to your order is the price shown at checkout when you place it.',
      `A ${product.firstOrderDiscount} discount is applied automatically to your first order. Referral credit of ${product.referralCredit} is added to a referrer's account once the referred customer's first order has been delivered. Store credit has no cash value and cannot be transferred or withdrawn.`,
      'If a price is displayed incorrectly because of an obvious error, we may cancel the order and refund any amount paid.',
    ],
  },
  {
    id: 'orders',
    heading: 'Order acceptance and cancellation',
    blocks: [
      'Your order is an offer to buy. A contract is formed only when we accept the order and dispatch it.',
      'We may decline or cancel an order where the item is out of stock, where the delivery address is not serviceable, where a pricing error has occurred, or where we reasonably suspect misuse. If we cancel an order you have paid for, we refund the amount paid.',
      'You may cancel an order in the app before it is dispatched. Once an order has been dispatched it cannot be cancelled, and the returns process applies instead.',
    ],
  },
  {
    id: 'payment',
    heading: 'Payment',
    blocks: [
      `We accept ${paymentMethods.join(', ')}.`,
      'UPI and card payments are processed by our payment gateway. We receive confirmation of payment status only, and we do not store your card or UPI credentials.',
      'Cash on Delivery orders are confirmed by a one-time passcode before dispatch. If the passcode is not confirmed, the order is not dispatched. Payment is collected by the delivery partner at the door.',
    ],
  },
  {
    id: 'delivery',
    heading: 'Delivery',
    blocks: [
      'We deliver across India. Tracking is available in the app once an order has been dispatched.',
      `Delivery is free on orders above ${product.freeDeliveryThreshold}, applied automatically. On orders at or below that value, any delivery charge is shown at checkout before you pay.`,
      'Give a complete and correct delivery address and a reachable phone number. We are not responsible for a delay or failed delivery caused by an incorrect address or an unreachable number.',
      'Risk in the goods passes to you on delivery.',
    ],
  },
  {
    id: 'returns',
    heading: 'Returns and refunds',
    blocks: [
      `You may raise a return request in the app within ${product.returnWindowDays} days of delivery. Approved returns are refunded within ${product.refundDays} days of approval.`,
      'The conditions that apply to returns, the items that cannot be returned, and how refunds are issued are set out in the Shipping & Returns page, which forms part of these terms.',
    ],
  },
  {
    id: 'custom-sizes',
    heading: 'Custom size requests',
    blocks: [
      `Sizes outside a category's stocked range — ${product.sizeRange} for garments and ${product.blouseSizeRange} for blouses — can be requested on any product page.`,
      'A custom size request is a request, not an order. It is subject to confirmation and is not guaranteed. We will contact you on the number you give with the request to confirm whether it can be made, and on what terms.',
      'A garment made to a size you have specified may not be returnable except where it is faulty, damaged or does not match what was agreed.',
    ],
  },
  {
    id: 'prohibited-use',
    heading: 'Prohibited use',
    blocks: [
      'You must not:',
      {
        list: [
          'Place orders fraudulently, or on behalf of another person without their authority.',
          'Refuse Cash on Delivery orders repeatedly, or otherwise misuse the payment methods offered.',
          'Post reviews or photographs that are false, abusive, obscene, or that infringe another person’s rights.',
          'Copy, scrape, resell or republish our product images, descriptions or brand assets.',
          'Interfere with the app or website, or attempt to gain unauthorised access to any part of our systems.',
        ],
      },
      'We may suspend or close an account that is used in breach of these terms.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    blocks: [
      `The ${business.name} name, logo, wordmark, product photography, product descriptions and page content are owned by ${business.name} or used with permission. You may not use them without our written consent.`,
      'Where you upload a photograph with a review, you confirm you have the right to do so, and you give us permission to display it alongside that product.',
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    blocks: [
      'We are responsible for supplying goods that match their description and are of satisfactory quality. Nothing in these terms limits any liability that cannot be limited under Indian law, including under the Consumer Protection Act, 2019.',
      'Subject to that, our total liability in connection with an order is limited to the amount you paid for that order.',
      'We are not liable for indirect or consequential loss, or for delays caused by events outside our reasonable control, including transport disruption, natural events and action by public authorities.',
    ],
  },
  {
    id: 'governing-law',
    heading: 'Governing law and jurisdiction',
    blocks: [
      'These terms are governed by the laws of India.',
      `The courts at ${business.jurisdiction} have exclusive jurisdiction over any dispute arising out of or in connection with these terms.`,
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to these terms',
    blocks: [
      'We may update these terms. The current version is always the one published on this page, with the "Last updated" date shown at the top.',
      'The terms that apply to an order are the terms published when you placed it.',
    ],
  },
  {
    id: 'contact',
    heading: 'Disputes and contact',
    blocks: [
      'Contact us first if something has gone wrong with an order. Most matters are settled quickly.',
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

export default function Terms() {
  useSeo({
    title: `Terms & Conditions — ${business.name}`,
    description: `The terms that apply to orders placed with ${business.name}, covering pricing, payment, delivery, returns, custom sizes and governing law.`,
    path: '/terms',
  });

  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`These terms apply when you use the ${business.name} app or website, and when you place an order with us.`}
      sections={sections}
    />
  );
}
