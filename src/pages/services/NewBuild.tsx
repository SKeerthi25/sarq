import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
  FileCheck2,
  Layers,
  Thermometer,
  Zap,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { servicesData } from '../../data/services';

export const NewBuild: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'new-build')!;

  const timelineMilestones = [
    {
      phase: 'Phase 01',
      title: 'Site Logistics, Soil Testing & Piling',
      weeks: 'Weeks 1 – 6',
      items: [
        'Geotechnical site investigation & dynamic probe testing',
        'Party Wall awards executed with adjoining properties',
        'Thames Water Section 106 drainage connections approved',
        'CFA (Continuous Flight Auger) or screw piling installation',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Substructure & Reinforced Concrete Slab',
      weeks: 'Weeks 7 – 12',
      items: [
        'Excavation to engineer depth and steel reinforcement cage placement',
        'Ready-mix C30/35 waterproof concrete pour with cube crush tests',
        'Radon barrier, DPM (damp proof membrane) & underground foul runs',
        'Building Control statutory foundation inspection sign-off',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Superstructure, Steel Frame & Roof Weathertight',
      weeks: 'Weeks 13 – 24',
      items: [
        'Fabricated structural steel goalposts craned into position',
        'Cavity masonry, ICF or engineered timber-frame wall erection',
        'Floor cassettes, acoustic insulation & roof truss installation',
        'Slate/tile roofing, solar PV integration & triple-glazed windows',
      ],
    },
    {
      phase: 'Phase 04',
      title: 'First-Fix Mechanical, Electrical & Drylining',
      weeks: 'Weeks 25 – 36',
      items: [
        'Air Source Heat Pump (ASHP) & MVHR heat recovery ducting',
        'Part P certified full electrical rewiring, Cat6 network & smart lighting',
        'Wet underfloor heating loops pressure tested across all storeys',
        'Airtightness membrane taping (achieving Passivhaus standard <0.6 ACH)',
      ],
    },
    {
      phase: 'Phase 05',
      title: 'Second Fix, Finishes, Snagging & Turnkey Handover',
      weeks: 'Weeks 37 – 48',
      items: [
        'Bespoke kitchen cabinetry, quartz worktops & luxury bathroom tiling',
        'Hardwood flooring, micro-cement walls & decorative spray finishing',
        '100% Zero-snag audit alongside independent surveyor',
        'Building Regulations Final Completion Certificate & 10-Year Warranty issuance',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="New Build Residential Construction London | SARQ LTD"
        description="Bespoke residential new build construction in South West London. Turnkey contracting from foundation piling to Passivhaus standard finishes under JCT contracts."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <Building2 className="w-4 h-4 text-accent" />
                <span>SIC 41202 • TURNKEY RESIDENTIAL CONSTRUCTION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book New Build Tender Consultation
                </Button>
                <Button variant="white" size="lg" pill to="/quote-cost-guide">
                  Calculate Estimated Budget
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  New Build Project Profile
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Typical Build Duration:</span>
                    <span className="text-white font-bold">{service.durationAvg}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Indicative Cost Rate:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Contract Type:</span>
                    <span>JCT Standard / Minor Works</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Warranty:</span>
                    <span className="text-emerald-400 font-bold">10-Year Premier / ICW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Energy Standard:</span>
                    <span>EPC A / Passivhaus Standard</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLOT-TO-HANDOVER TIMELINE LAYOUT */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Plot-to-Handover Roadmap"
            title="The 5-Phase New Build Lifecycle"
            subtitle="From site clearance and structural piling to airtight certification and final key handover."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {timelineMilestones.map((milestone, idx) => (
              <Card key={idx} variant="elevated" accentBorder="brand" className="p-6 sm:p-8 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand/10 text-brand uppercase">
                      {milestone.phase}
                    </span>
                    <h3 className="font-heading text-xl font-bold uppercase text-ink">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted font-semibold">
                    {milestone.weeks}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {milestone.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & COMPLIANCE */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="micro-label text-brand">Building Control & Energy Efficiency</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-ink">
                Built to Exceed UK Building Regulations Part L & Part B
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Modern domestic new builds in London require rigorous compliance with conservation of fuel and power standards. We integrate low-carbon mechanical technology into the building fabric from day one.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded bg-surface border border-hairline flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-ink">Air Source Heat Pumps & MVHR</h4>
                    <p className="text-xs text-muted mt-1">
                      Full mechanical ventilation with heat recovery ensuring constant fresh filtered air with zero thermal loss.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded bg-surface border border-hairline flex items-start gap-3">
                  <Layers className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-ink">Airtight Continuous Envelope</h4>
                    <p className="text-xs text-muted mt-1">
                      Thermal bridge-free detailing, triple glazed Schuco windows, and air tightness testing signed off by chartered building physicists.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded bg-surface border border-hairline flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-ink">10-Year Latent Defect Structural Warranty</h4>
                    <p className="text-xs text-muted mt-1">
                      Comprehensive insurance policy accepted by all UK Council of Mortgage Lenders (CML) for effortless future sale or refinancing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-md border border-hairline overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="SARQ New Build Project"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="micro-label text-accent">Self-Builders & Developers</span>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
            Ready to Tender Your New Build Project?
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            Send us your architectural drawings, structural calculations, and site plan for an itemised fixed-price tender proposal.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Submit Tender Documents Online
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Call Site Operations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
