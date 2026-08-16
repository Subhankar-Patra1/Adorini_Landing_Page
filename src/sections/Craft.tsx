import { Section, SectionHeading } from '@/components/Section';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useDevice } from '@/hooks/useDevice';

const crafts = [
  {
    name: 'Kalankari',
    text: 'Kalamkari is drawn and block-printed on cotton using natural dyes. Motifs are figurative and floral, and outlines are filled by hand, so the depth of colour varies between pieces.',
  },
  {
    name: 'Ajrak',
    text: 'Ajrak is resist block-printed in several stages, traditionally in indigo and madder red. The geometric repeat is printed on both faces of the cloth, and the dye deepens with washing.',
  },
  {
    name: 'Batik',
    text: 'Batik uses wax to resist the dye. Wax is applied, the cloth is dyed, and the wax is removed. The fine cracks that form in the wax take up dye and leave the veined lines batik is known for.',
  },
  {
    name: 'Aplik',
    text: 'Aplik is appliqué work. Cut fabric shapes are stitched onto the base cloth to build the pattern, which gives the surface a raised edge you can feel.',
  },
];

export function Craft() {
  const { isMobile } = useDevice();
  const gap = isMobile ? 'gap-4' : 'gap-8';

  return (
    <Section id="craft" aria-labelledby="craft-title">
      <SectionHeading
        id="craft-title"
        eyebrow="Prints"
        title="How the prints are made"
        intro="Garments are stocked plain, fancy, or in one of four printed crafts. Hand-printed cloth carries small differences between pieces — that is a property of the process, not a defect."
      />
      <div className={`mt-10 grid grid-cols-1 md:grid-cols-2 ${gap}`}>
        {crafts.map((craft) => (
          <Card key={craft.name} className={isMobile ? 'p-5' : 'p-8'}>
            <CardTitle>{craft.name}</CardTitle>
            <CardContent
              className={`mt-3 leading-relaxed ${isMobile ? 'text-[16px]' : 'text-[18px]'}`}
            >
              {craft.text}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
