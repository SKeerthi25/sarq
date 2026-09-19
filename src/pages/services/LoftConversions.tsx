import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  VolumeX,
  Compass,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';

export const LoftConversions: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'loft-conversions')!;
  const loftProject = projectsData.find((p) => p.category === 'Loft Conversion')!;

  const loftComparison = [
    {
      type: 'Rear Dormer Conversion',
      tagline: 'Most cost-effective volume gain for terraced and semi-detached homes.',
      suitableFor: 'Victorian / Edwardian Terraces, Semi-detached, End of Terrace',
      volumeGain: '30 – 45 m³ (Max Headroom)',
      planningStatus: 'Permitted Development (Class B GPDO)',
      typicalCost: '£45,000 – £65,000',
      duration: '8 – 10 Weeks',
      features: [
        'Straight vertical walls creating regular rectangular rooms',
        'Standard UPVC or aluminium double-glazed casement/sash windows',
        'Minimal external disruption; scaffold access through roof',
      ],
    },
    {
      type: 'Mansard Loft Conversion',
      tagline: 'Architectural elegance and conservation area compliance.',
      suitableFor: 'Conservation areas, Period Townhouses, Strict Council zones (SW4, SW11, SW6)',
      volumeGain: '35 – 55 m³ (Maximum Floor Area)',
      planningStatus: 'Full Planning Application required',
      typicalCost: '£65,000 – £95,000',
      duration: '10 – 12 Weeks',
      features: [
        '70-degree slate-hung rear roof pitch with parapet raising',
        'French doors with Juliet wrought-iron or glass balustrades',
        'Favoured by Lambeth, Wandsworth, and Kensington & Chelsea planners',
      ],
    },
    {
      type: 'Hip-to-Gable Conversion',
      tagline: 'Unlocks full width on end-terrace and semi-detached properties.',
      suitableFor: '1930s Semi-detached, End-of-terrace with sloping side roof',
      volumeGain: '35 – 50 m³',
      planningStatus: 'Permitted Development (Up to 50m³ allowance)',
      typicalCost: '£55,000 – £80,000',
      duration: '9 – 11 Weeks',
      features: [
        'Extends side hipped roof vertically into a straight vertical gable wall',
        'Permits full-width master suite with separate walk-in wardrobe and en-suite',
        'Seamlessly integrated with rear dormer for maximum square footage',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Loft Conversions London | Dormer, Mansard & Hip-to-Gable | SARQ LTD"
        description="Master bedroom and en-suite loft conversions in South West London. Compare Dormer, Mansard, and Hip-to-Gable designs with fixed-price JCT contracts."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <HomeIcon className="w-4 h-4 text-accent" />
                <span>LOFT CONVERSION SPECIALISTS • CONSERVATION COMPLIANT</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book Free Loft Feasibility Survey
                </Button>
                <Button variant="white" size="lg" pill to="/quote-cost-guide">
                  Estimate Loft Budget
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  Loft Conversion Benchmarks
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Typical Build Duration:</span>
                    <span className="text-white font-bold">{service.durationAvg}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Starting Baseline:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Permitted Development:</span>
                    <span>40m³ (Terrace) / 50m³ (Semi)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Structural Floor:</span>
                    <span>C24 Timber + Steel Ridge Beams</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DORMER / MANSARD / HIP-TO-GABLE COMPARISON */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Loft Topologies"
            title="Dormer vs Mansard vs Hip-to-Gable Comparison"
            subtitle="Understand spatial gains, aesthetic profiles, council planning requirements, and budget expectations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {loftComparison.map((item, idx) => (
              <Card
                key={idx}
                variant="elevated"
                accentBorder={idx === 1 ? 'brand' : 'none'}
                className="p-6 sm:p-8 bg-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand/10 text-brand uppercase">
                      Option 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-muted">{item.duration}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                    {item.type}
                  </h3>

                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {item.tagline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-hairline space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-hairline/40 pb-1">
                      <span className="text-muted">Indicative Cost:</span>
                      <span className="text-brand font-bold">{item.typicalCost}</span>
                    </div>
                    <div className="flex justify-between border-b border-hairline/40 pb-1">
                      <span className="text-muted">Planning Status:</span>
                      <span className="text-ink font-semibold text-right max-w-[160px] truncate">{item.planningStatus}</span>
                    </div>
                    <div className="flex justify-between border-b border-hairline/40 pb-1">
                      <span className="text-muted">Volume Added:</span>
                      <span className="text-ink">{item.volumeGain}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 space-y-2">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <Button
                    variant="primary"
                    size="md"
                    pill
                    to="/request-a-quote"
                    className="w-full text-center text-xs"
                  >
                    Quote for {item.type.split(' ')[0]} Loft
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY BEFORE / AFTER */}
      {loftProject && loftProject.beforeImage && (
        <section className="py-20 bg-card border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="02"
              microLabel="Clapham Mansard Case Study"
              title={loftProject.title}
              subtitle="Inspect our conservation-approved 70-degree Mansard master suite with walk-in wardrobe and boutique en-suite."
            />

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={loftProject.beforeImage}
                afterImage={loftProject.afterImage!}
                beforeLabel="Before: Empty Unused Attic"
                afterLabel="SARQ: 38 m² Master Suite"
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. BUILDING REGS COMPLIANCE PILLARS */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="03"
            microLabel="Technical Standards"
            title="Building Regulations & Fire Safety Compliance"
            subtitle="Every loft conversion must strictly satisfy UK Building Regulations to receive legal certification."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 bg-card">
              <div className="p-3 rounded bg-brand/10 text-brand w-fit mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                Part B: Fire Escape Routes
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                30-minute fire doors (FD30) installed to all habitable rooms on the escape corridor, interlinked mains-powered smoke & heat detectors on every level, and protected escape staircase.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-card">
              <div className="p-3 rounded bg-brand/10 text-brand w-fit mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                Part K: Staircase Headroom
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Mandatory minimum 2.0-metre vertical clear headroom across the entire flight of stairs and landings (reduced to 1.9m at the pitch edge), custom engineered to fit period hallways.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-card">
              <div className="p-3 rounded bg-brand/10 text-brand w-fit mb-4">
                <VolumeX className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                Part E: Acoustic Insulation
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                100mm high-density Rockwool acoustic sound insulation between new structural floor joists and double 15mm SoundBloc plasterboard to eliminate footfall noise below.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
