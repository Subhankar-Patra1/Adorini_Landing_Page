/*
  NOTE FOR REVIEWERS — not rendered to users.
  This policy describes Adorini's actual data practices, but it has not been
  drafted or checked by a lawyer. It requires review by a qualified legal
  professional before publication.
*/

import { business } from '@/config/business';
import { LegalPage, type LegalSection } from '@/components/LegalPage';
import { useSeo } from '@/hooks/useSeo';

const sections: LegalSection[] = [
  {
    id: 'scope',
    heading: 'Scope of this policy',
    blocks: [
      `This policy explains what personal data ${business.name} collects, why it is collected, who it is shared with, and the choices you have. It covers the ${business.name} Android app and this website at ${business.domain}.`,
      `${business.name} is a ${business.entityType.toLowerCase()} with its place of business at ${business.address.line1}, ${business.address.line2}, ${business.address.locality}, ${business.address.city} – ${business.address.pin}, ${business.address.state}, ${business.address.country}. For the purposes of the Digital Personal Data Protection Act, 2023, ${business.name} is the Data Fiduciary for the data described here.`,
    ],
  },
  {
    id: 'data-we-collect',
    heading: 'Data we collect',
    blocks: [
      'We collect the following categories of personal data:',
      {
        list: [
          'Mobile number, used for one-time passcode sign-in and for order communication.',
          'Google account email address and basic profile details, if you choose to sign in with Google.',
          'Your name and the delivery addresses you save.',
          'Order history, cart contents and wishlist.',
          'Payment status only. Card and UPI details are entered with our payment gateway and are never stored by Adorini.',
          'Reviews you write and any photographs you upload with them.',
          'Custom size requests, including the size requested and the contact number you provide with the request.',
          'Store credit balance and referral activity, including whether a referred order has been delivered.',
          'Basic device and app diagnostics, such as app version, device model, operating system version and crash reports.',
        ],
      },
      'We do not ask for identity documents, and we do not collect financial account numbers.',
    ],
  },
  {
    id: 'why-we-use-it',
    heading: 'Why we use your data',
    blocks: [
      'We use personal data only for the purposes listed below:',
      {
        list: [
          'To create and secure your account, and to sign you in using a one-time passcode or Google sign-in.',
          'To accept, process, pack and dispatch your orders.',
          'To confirm Cash on Delivery orders by one-time passcode before dispatch.',
          'To arrange delivery and let you track your parcel.',
          'To answer your questions about orders, sizes, returns and refunds.',
          'To respond to custom size requests and arrange the garment with you.',
          'To apply the first-order discount, free delivery above the stated threshold, store credit and referral credit.',
          'To process returns and issue refunds.',
          'To publish product reviews you submit.',
          'To diagnose faults, prevent misuse and keep the app working.',
          'To meet legal, tax and accounting obligations.',
        ],
      },
      'We do not use your data for automated decision-making or profiling.',
    ],
  },
  {
    id: 'sharing',
    heading: 'Who we share data with',
    blocks: [
      'We share personal data only with the service providers we need to run the business, and only the data those providers require:',
      {
        list: [
          'Payment gateway — to process UPI and card payments and to confirm payment status.',
          'Logistics partner — to deliver your order. This includes your name, delivery address and phone number.',
          'SMS and WhatsApp provider — to send one-time passcodes and order updates to your mobile number.',
          'Cloud object storage provider — to host product images and any photographs uploaded with reviews.',
          'Google — only where you choose to sign in with your Google account.',
        ],
      },
      `${business.name} does not sell personal data. We do not share personal data with advertisers or data brokers.`,
      'We may disclose data where we are required to do so by law, by a court, or by a lawful request from a government authority.',
    ],
  },
  {
    id: 'retention',
    heading: 'How long we keep data',
    blocks: [
      'We keep account and order data for as long as your account is active, and afterwards for as long as we are required to retain records of transactions under applicable tax and accounting law.',
      'Reviews and review photographs remain published until you ask us to remove them or you delete your account.',
      'Custom size request records are kept while the request is being handled and afterwards as part of your order history if the request results in an order.',
      'Diagnostic and crash data is kept for a limited period and is used only to fix faults.',
      'When data is no longer needed for the purpose it was collected for, and there is no legal requirement to keep it, we delete it.',
    ],
  },
  {
    id: 'security',
    heading: 'Security',
    blocks: [
      'Data is transmitted over encrypted connections. Access to customer data is limited to the people who need it to fulfil orders and answer support requests.',
      'Card and UPI credentials are handled by the payment gateway and never reach our systems.',
      'Sign-in is by one-time passcode or Google sign-in, so there is no password for you to reuse or for us to store.',
      'No system is completely secure. If a personal data breach occurs, we will notify the Data Protection Board of India and affected users as required under the Digital Personal Data Protection Act, 2023.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies on this website',
    blocks: [
      `This marketing website at ${business.domain} does not set advertising cookies, does not run analytics, and does not embed third-party trackers or social media widgets.`,
      'The website uses your browser storage only where it is needed for the page to work. The Adorini Android app stores a sign-in token on your device so you do not have to sign in each time.',
    ],
  },
  {
    id: 'children',
    heading: "Children's data",
    blocks: [
      `${business.name} sells to adults and its services are not directed at children. We do not knowingly collect the personal data of a child under 18 years of age.`,
      'If you believe a child has provided personal data to us, contact us using the details in the grievance section and we will delete it.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    blocks: [
      'Under the Digital Personal Data Protection Act, 2023, you have the right to:',
      {
        list: [
          'Ask for a summary of the personal data we hold about you and how it is processed.',
          'Ask us to correct data that is inaccurate, or to complete data that is incomplete.',
          'Ask us to erase your personal data, where we are not required to keep it by law.',
          'Withdraw a consent you have given, without affecting processing already carried out.',
          'Nominate another person to exercise these rights on your behalf in the event of your death or incapacity.',
          'Register a grievance with us, and escalate to the Data Protection Board of India if it is not resolved.',
        ],
      },
      'We may ask you to verify the mobile number registered on the account before acting on a request, so that we do not disclose data to the wrong person.',
    ],
  },
  {
    id: 'deletion',
    heading: 'How to request deletion',
    blocks: [
      `To delete your account and the personal data associated with it, email ${business.email} from the address on your account, or call ${business.phone} during support hours, and state that you want your account deleted.`,
      'We will confirm the request, delete the account, and remove the personal data we are not required to retain. Records of completed transactions are kept where tax and accounting law requires it.',
      'Deleting your account removes any unused store credit and ends any pending referral credit.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    blocks: [
      'If we change this policy, we will publish the updated version on this page and change the "Last updated" date at the top.',
      'Where a change materially affects how your personal data is handled, we will tell you in the app or by a message to your registered mobile number before the change takes effect.',
    ],
  },
  {
    id: 'grievance',
    heading: 'Grievance contact',
    blocks: [
      'If you have a question or a complaint about how your personal data is handled, contact us:',
      {
        list: [
          `Email: ${business.email}`,
          `Phone: ${business.phone}`,
          `Support hours: ${business.supportHours}`,
          `Post: ${business.name}, ${business.address.line1}, ${business.address.line2}, ${business.address.locality}, ${business.address.city} – ${business.address.pin}, ${business.address.state}, ${business.address.country}`,
        ],
      },
      'We will acknowledge your complaint and work to resolve it. If you are not satisfied with the outcome, you may complain to the Data Protection Board of India.',
    ],
  },
];

export default function PrivacyPolicy() {
  useSeo({
    title: `Privacy Policy — ${business.name}`,
    description: `How ${business.name} collects, uses, shares and protects personal data, and how to exercise your rights under the Digital Personal Data Protection Act, 2023.`,
    path: '/privacy-policy',
  });

  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy sets out how ${business.name} handles your personal data, in line with the Digital Personal Data Protection Act, 2023.`}
      sections={sections}
    />
  );
}
