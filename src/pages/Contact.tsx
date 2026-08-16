import { useState, type FormEvent } from 'react';
import { addressLines, business } from '@/config/business';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useDevice } from '@/hooks/useDevice';
import { useSeo } from '@/hooks/useSeo';

export default function Contact() {
  const { isMobile } = useDevice();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useSeo({
    title: `Contact — ${business.name}`,
    description: `Contact ${business.name} in ${business.address.city}. Phone ${business.phone}, email ${business.email}. Support ${business.supportHours}.`,
    path: '/contact',
  });

  const headingSize = isMobile ? 'text-[32px]' : 'text-[48px]';
  const subSize = isMobile ? 'text-[20px]' : 'text-[24px]';
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';
  const buttonSize = isMobile ? 'mobile' : 'desktop';

  // No backend endpoint is configured for this site, so the form hands the
  // composed message to the visitor's own mail client instead of posting it.
  // It reports failure rather than appearing to send.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!subject.trim() || !message.trim()) {
      setError('Add a subject and a message before sending.');
      return;
    }
    setError('');
    const href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = href;
  };

  return (
    <Section aria-labelledby="contact-title">
      <div className="max-w-prose">
        <h1 id="contact-title" className={headingSize}>
          Contact us
        </h1>
        <p className={`mt-6 leading-relaxed text-on-surface-variant ${bodySize}`}>
          Email or call us for questions about orders, sizes, returns or custom size requests. We
          answer {business.supportHours}.
        </p>
      </div>

      <div className={`mt-10 grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-6' : 'gap-12'}`}>
        <Card className={isMobile ? 'p-6' : 'p-8'}>
          <h2 className={subSize}>{business.name}</h2>
          <address className={`mt-4 not-italic leading-relaxed text-on-surface-variant ${bodySize}`}>
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <Separator className="my-6" />

          <dl className={`space-y-4 ${bodySize}`}>
            <div>
              <dt className="text-on-surface">Phone</dt>
              <dd className="text-on-surface-variant">
                {isMobile ? (
                  <a
                    href={`tel:${business.phoneHref}`}
                    className="inline-flex min-h-[44px] items-center text-accent underline underline-offset-4"
                  >
                    {business.phone}
                  </a>
                ) : (
                  business.phone
                )}
              </dd>
            </div>
            <div>
              <dt className="text-on-surface">Email</dt>
              <dd className="text-on-surface-variant">
                {isMobile ? (
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex min-h-[44px] items-center break-all text-accent underline underline-offset-4"
                  >
                    {business.email}
                  </a>
                ) : (
                  <span className="break-all">{business.email}</span>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-on-surface">Support hours</dt>
              <dd className="text-on-surface-variant">{business.supportHours}</dd>
            </div>
            <div>
              <dt className="text-on-surface">Entity</dt>
              <dd className="text-on-surface-variant">
                {business.entityType}, established {business.established}
              </dd>
            </div>
          </dl>

          <div className={`mt-6 flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3`}>
            <Button asChild variant="primary" size={buttonSize}>
              <a href={`mailto:${business.email}`}>Email us</a>
            </Button>
            <Button asChild variant="outline" size={buttonSize}>
              <a href={`tel:${business.phoneHref}`}>Call {business.phone}</a>
            </Button>
          </div>
        </Card>

        <Card className={isMobile ? 'p-6' : 'p-8'}>
          <h2 className={subSize}>Write to us</h2>
          <p className={`mt-3 leading-relaxed text-on-surface-variant ${bodySize}`}>
            This site has no server behind it. Sending opens your email app with the message ready
            to send to {business.email}. Nothing is submitted from this page.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="subject" className="block text-[14px] text-on-surface">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                className="mt-2"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[14px] text-on-surface">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="mt-2"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            {error ? (
              <p role="alert" className="text-[14px] text-accent">
                {error}
              </p>
            ) : null}

            <Button type="submit" variant="primary" size={buttonSize} className="w-full">
              Open in email app
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
