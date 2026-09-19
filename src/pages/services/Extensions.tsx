import React from 'react';
import { Link } from 'react-router-dom';
import {
  Maximize2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Table,
  HelpCircle,
  FileCheck2,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';

export const Extensions: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'extensions')!;
  const extensionProject = projectsData.find((p) => p.category === 'Extension')!;

  const extensionTypes = [
    {
      title: 'Single-Storey Rear Extension',
      desc: 'Extends directly outwards from the rear facade into the garden. Creates large open-plan kitchen and dining zones.',
      sqmRange: '18 – 35 m²',
      duration: '10 – 14 Weeks',
      costRange: '£55,000 – £85,000',
      planning: 'Often Permitted Development (Prior Approval for 6m)',
    },
    {
      title: 'Side-Return Infill Extension',
      desc: 'Encloses the unused Victorian dog-leg side alleyway, dramatically widening the rear room without reducing garden length.',
      sqmRange: '12 – 22 m²',
      duration: '10 – 12 Weeks',
      costRange: '£50,000 – £75,000',
      planning: 'Permitted Development (Subject to 3m height / boundary limits)',
    },
    {
      title: 'Wrap-Around (L-Shaped) Extension',
      desc: 'Combines side-return and rear extensions into one continuous L-shape, achieving maximum ground floor footprint.',
      sqmRange: '30 – 60 m²',
      duration: '14 – 18 Weeks',
      costRange: '£90,000 – £140,000',
      planning: 'Full Householder Planning Application required',
    },
    {
      title: 'Double-Storey Extension',
      desc: 'Adds expansive ground floor living and creates master en-suite bedrooms or family bathrooms on the first floor.',
      sqmRange: '45 – 90 m²',
      duration: '18 – 24 Weeks',
      costRange: '£120,000 – £190,000',
      planning: 'Full Planning Application (Subject to 45-degree daylight rules)',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="House Extensions London | Side Return & Wrap-Around | SARQ LTD"
        description="Bespoke domestic extensions in Battersea, Wandsworth, Clapham and South West London. Fixed-price JCT contracts for side returns, rear infills, and wrap-around builds."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <Maximize2 className="w-4 h-4 text-accent" />
                <span>RESIDENTIAL EXTENSION SPECIALISTS • SW LONDON</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book Complimentary Extension Survey
                </Button>
                <Button variant="white" size="lg" pill to="/quote-cost-guide">
                  Calculate Extension Cost Online
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  Extensions Technical Benchmark
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Average Build Duration:</span>
                    <span className="text-white font-bold">{service.durationAvg}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Starting Baseline:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Structural Steel:</span>
                    <span>Fabricated Box-Frame / Goalposts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Glazing Systems:</span>
                    <span>Crittall / Cortizo / Schuco</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXTENSION TYPES & COST GUIDE TABLE */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Configuration Comparison"
            title="London Extension Types & Indicative Cost Guide"
            subtitle="Compare floor area gains, typical duration, estimated price ranges, and planning permissions across popular London configurations."
          />

          {/* Desktop Table & Mobile Cards */}
          <div className="overflow-x-auto bg-card rounded-md border border-hairline shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-deep text-surface border-b border-white/10 font-heading uppercase text-xs tracking-wider">
                  <th className="p-4 sm:p-5">Extension Type</th>
                  <th className="p-4 sm:p-5">Added Space</th>
                  <th className="p-4 sm:p-5">Duration</th>
                  <th className="p-4 sm:p-5">Indicative Cost (2025)</th>
                  <th className="p-4 sm:p-5">Planning Route</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline text-xs sm:text-sm font-sans">
                {extensionTypes.map((ext, idx) => (
                  <tr key={idx} className="hover:bg-surface/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-ink">
                      <div>{ext.title}</div>
                      <div className="text-xs text-muted font-normal mt-0.5 max-w-xs">{ext.desc}</div>
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-ink font-semibold">{ext.sqmRange}</td>
                    <td className="p-4 sm:p-5 font-mono text-muted">{ext.duration}</td>
                    <td className="p-4 sm:p-5 font-mono text-brand font-bold">{ext.costRange}</td>
                    <td className="p-4 sm:p-5 text-xs text-muted font-mono">{ext.planning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs font-mono text-muted text-center mt-4">
            *Costs are indicative guidelines excluding VAT and architectural design fees, based on typical SW London site conditions.
          </p>
        </div>
      </section>

      {/* 3. CASE STUDY WITH BEFORE/AFTER */}
      {extensionProject && extensionProject.beforeImage && (
        <section className="py-20 bg-card border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="02"
              microLabel="Real London Case Study"
              title={extensionProject.title}
              subtitle="Inspect the dramatic spatial difference between the cramped original Victorian layout and our structural wrap-around build."
            />

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={extensionProject.beforeImage}
                afterImage={extensionProject.afterImage!}
                beforeLabel="Before Extension"
                afterLabel="SARQ Wrap-Around Completion"
              />
            </div>
          </div>
        </section>
      )}

      {/* 4. STRUCTURAL & STATUTORY CHECKLIST */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="micro-label text-brand">Structural Engineering & Compliance</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-ink">
                We Handle Party Wall, Thames Water & Building Control
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Building an extension in London involves dense Victorian boundaries, shared drainage, and substantial structural load transfers. SARQ manages all technical hurdles seamlessly.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Thames Water Section 106 Build-Over agreements for public sewers within 3m',
                  'Party Wall Surveyor coordination and Schedule of Condition reports',
                  'Structural steel goalposts sized by chartered MIStructE engineers',
                  'Full sub-floor damp-proofing and radon barrier integration',
                  'Building Control inspections at foundations, steel insertion and completion',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/85 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card variant="elevated" className="p-8 bg-card border-2 border-hairline space-y-4">
                <h3 className="font-heading text-xl font-bold uppercase text-ink">
                  Extension Survey & Fixed Quotation
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Have architectural drawings or planning permission in place? Book a free site visit to receive an itemised lump-sum quote within 5 working days.
                </p>
                <div className="pt-2">
                  <Button variant="primary" size="lg" pill to="/request-a-quote" className="w-full text-center">
                    Request Extension Site Survey
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
