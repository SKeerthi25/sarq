import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  FileSignature,
  FileCheck2,
  HardHat,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation & 3D Laser Site Survey',
      icon: <PhoneCall className="w-6 h-6 text-brand" />,
      timeline: 'Initial Survey',
      description: 'We meet at your London property to review architectural drawings or conduct a precision digital laser measurement. We assess Party Wall considerations, Thames Water drainage runs, and structural access routes.',
      keyDeliverables: [
        'Complimentary on-site technical consultation with Senior Estimator',
        'Laser-measured boundary & structural load path check',
        'Preliminary feasibility feedback on Permitted Development vs Full Planning',
      ],
    },
    {
      num: '02',
      title: 'Fixed Lump-Sum Tender & JCT Minor Works Contract',
      icon: <FileSignature className="w-6 h-6 text-brand" />,
      timeline: 'Tender & Contract',
      description: 'You receive an itemised, transparent schedule of works specifying every material, fixture allowance, and structural steel beam. We execute a standard JCT Minor Works or RIBA domestic contract with zero hidden variation clauses.',
      keyDeliverables: [
        'Detailed line-by-line cost schedule in GBP',
        'Fixed milestone stage payment schedule linked to statutory inspections',
        'Weekly Gantt chart construction program with guaranteed completion target',
      ],
    },
    {
      num: '03',
      title: 'Statutory Compliance & Party Wall Awards',
      icon: <FileCheck2 className="w-6 h-6 text-brand" />,
      timeline: 'Statutory Approvals',
      description: 'We liaise directly with your Local Authority Building Control (or private Approved Inspector), submit Section 106 Thames Water Build-Over notices, and ensure Party Wall Awards and Schedules of Condition are fully executed.',
      keyDeliverables: [
        'Initial Building Notice / Full Plans submission to Building Control',
        'Party Wall Award executed with adjoining property owners',
        'Thames Water Section 106 / Build-Over licence clearance',
      ],
    },
    {
      num: '04',
      title: 'Site Mobilisation, Dust Sealing & Safe Demolition',
      icon: <HardHat className="w-6 h-6 text-brand" />,
      timeline: 'Mobilisation & Strip-out',
      description: 'Our site team arrives promptly at 7:30am. We install heavy-duty zip-sealed dust barriers, floor protection, independent external access scaffolding, and site welfare facilities before safe, sequenced strip-out commences.',
      keyDeliverables: [
        'Full protective screening of living zones & common areas',
        'Licensed waste grab lorries and skip logistics (Environment Agency Reg)',
        'Calibrated temporary Acrow propping and Strongboy installations',
      ],
    },
    {
      num: '05',
      title: 'Substructure, Concrete Footings & Structural Steelwork',
      icon: <Layers className="w-6 h-6 text-brand" />,
      timeline: 'Substructure & Steel',
      description: 'We excavate footings, pour structural concrete under Building Control supervision, and crane in fabricated steel goalposts. Padstones and laser level deflections are signed off by our structural engineer.',
      keyDeliverables: [
        'Building Inspector foundation depth & sub-floor inspection sign-off',
        'Fabricated Universal Beams (UB) / Columns (UC) bolted and torqued',
        'Damp-proof membrane (DPM) and radon barrier installation',
      ],
    },
    {
      num: '06',
      title: 'Weathertight Envelope, Glazing & Roof Coverings',
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      timeline: 'Envelope & Roofing',
      description: 'Your extension or loft becomes completely watertight. We install aluminium sliding doors (Cortizo/Schuco), frameless structural glass roof lanterns, and high-grade slate or EPDM warm roof systems.',
      keyDeliverables: [
        'Structural glazing installation with perimeter airtight seals',
        'Natural slate, clay tile, or GRP flat roof membrane completion',
        'External brickwork matching, lime repointing, or silicone rendering',
      ],
    },
    {
      num: '07',
      title: 'Mechanical, Electrical, Plastering & Architectural Joinery',
      icon: <Sparkles className="w-6 h-6 text-brand" />,
      timeline: 'Fit-out & Joinery',
      description: 'First and second fix trades execute with surgical precision: Part P electrical rewiring, wet underfloor heating pressure testing, Megaflo cylinders, smooth plaster skimming, bespoke cabinetry, and tile laying.',
      keyDeliverables: [
        'Part P NICEIC Electrical Safety Certificate',
        'Gas Safe compliance certificate for boiler & heating loops',
        'Bespoke kitchen fitment, stone templating, and wet room tanking',
      ],
    },
    {
      num: '08',
      title: 'Snagging Audit, Building Control Certificate & 10-Year Warranty',
      icon: <Award className="w-6 h-6 text-brand" />,
      timeline: 'Final Handover',
      description: 'We conduct a rigorous 100% zero-snag audit with you. Building Control conducts their final statutory inspection and issues your Completion Certificate. We issue our 10-year insurance-backed structural warranty.',
      keyDeliverables: [
        'Official Local Authority / Approved Inspector Building Regulations Certificate',
        '10-Year Insurance-Backed Latent Defects Structural Guarantee',
        'Complete O&M (Operations & Maintenance) manual and appliance warranties',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Our 8-Step Construction Process | SARQ LTD London"
        description="Explore the transparent 8-step build rail used by SARQ LTD for London home extensions, loft conversions, basements, and full house renovations."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Engineered Process</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              The 8-Step SARQ Build Rail
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              We eliminate the uncertainty and stress of domestic building with an engineered, transparent step-by-step construction rail. You always know what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-7 sm:before:left-10 before:w-0.5 before:bg-hairline before:pointer-events-none">
            {steps.map((step) => (
              <div key={step.num} className="relative flex items-start gap-6 sm:gap-10">
                {/* Step Circle Marker */}
                <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-surface-deep border-4 border-surface text-accent flex flex-col items-center justify-center shrink-0 z-10 shadow-lg">
                  <span className="font-mono text-sm sm:text-base font-extrabold text-white">{step.num}</span>
                  <span className="text-[9px] font-mono text-accent -mt-0.5">PHASE</span>
                </div>

                {/* Step Content Card */}
                <Card variant="elevated" accentBorder="brand" className="flex-1 p-6 sm:p-8 bg-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-surface border border-hairline shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs text-brand font-bold bg-brand/10 px-3 py-1 rounded shrink-0 self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-hairline space-y-2">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-ink block">
                      Key Milestone Outputs:
                    </span>
                    {step.keyDeliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-ink/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="micro-label text-accent">Ready to Start Step 01?</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Book Your Technical Site Survey Today
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            Experience the clarity and discipline of working with a premier London domestic building contractor.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Request Step 01 Survey
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
