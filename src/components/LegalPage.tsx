import { business } from '@/config/business';
import { Section } from '@/components/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useDevice } from '@/hooks/useDevice';

/** A paragraph, or a bulleted list of points. */
export type Block = string | { list: string[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: Block[];
};

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) =>
        typeof block === 'string' ? (
          <p key={index} className="mt-4 first:mt-0">
            {block}
          </p>
        ) : (
          <ul key={index} className="mt-4 list-disc space-y-2 pl-5 marker:text-outline">
            {block.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  const { isMobile } = useDevice();
  const headingSize = isMobile ? 'text-[32px]' : 'text-[48px]';
  const bodySize = isMobile ? 'text-[16px]' : 'text-[18px]';

  return (
    <Section aria-labelledby="legal-title">
      <div className="max-w-prose">
        <h1 id="legal-title" className={headingSize}>
          {title}
        </h1>
        <p className="mt-4 text-[14px] text-on-surface-variant">
          Last updated: {business.policyLastUpdated}
        </p>
        <p className={`mt-6 leading-relaxed text-on-surface-variant ${bodySize}`}>{intro}</p>
      </div>

      {isMobile ? (
        <Accordion type="multiple" className="mt-8">
          {sections.map((section, index) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger>
                {index + 1}. {section.heading}
              </AccordionTrigger>
              <AccordionContent>
                <Blocks blocks={section.blocks} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="mt-12 grid grid-cols-[minmax(0,1fr)_260px] gap-16">
          <div className="max-w-prose">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="mt-12 first:mt-0">
                <h2 className="text-[24px]">
                  {index + 1}. {section.heading}
                </h2>
                <div className="mt-4 text-[18px] leading-relaxed text-on-surface-variant">
                  <Blocks blocks={section.blocks} />
                </div>
              </section>
            ))}
          </div>

          <nav aria-label="On this page" className="sticky top-28 self-start">
            <h2 className="text-[14px] uppercase tracking-[0.14em] text-accent">On this page</h2>
            <ol className="mt-4 space-y-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-[14px] leading-snug text-on-surface-variant transition-colors hover:text-accent"
                  >
                    {index + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </Section>
  );
}
