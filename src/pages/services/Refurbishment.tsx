import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Paintbrush,
  Zap,
  Flame,
  Layers,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';

export const Refurbishment: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'refurbishment')!;
  const refurbProject = projectsData.find((p) => p.category === 'Refurbishment')!;

  return (
    <div className="flex flex-col">
      <SEO
        title="Full House Refurbishment London | Back-to-Brick | SARQ LTD"
        description="Complete period townhouse and domestic house refurbishments in Wandsworth, Clapham, Battersea and London. Turnkey contracting with full rewiring, plumbing, and bespoke joinery."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <Wrench className="w-4 h-4 text-accent" />
                <span>BACK-TO-BRICK RESTORATION • TURNKEY RESIDENTIAL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book Refurbishment Site Survey
                </Button>
                <Button variant="white" size="lg" pill to="/projects">
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  Full Refurbishment Scope
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                    <span className="text-surface/60">Typical Investment: </span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Electrics:</span>
                    <span>100% Part P Rewire (Cat6 / Lutron)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Heating:</span>
                    <span>Megaflo / Wet Underfloor Heating</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BEFORE / AFTER COMPARISON SLIDER */}
      {refurbProject && refurbProject.beforeImage && (
        <section className="py-20 bg-surface border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="01"
              microLabel="Before & After Transformation"
              title={refurbProject.title}
              subtitle="Inspect our complete 5-storey back-to-brick restoration project, showing dilapidated period interior transformed into luxury contemporary living."
            />

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={refurbProject.beforeImage}
                afterImage={refurbProject.afterImage!}
                beforeLabel="Before: Stripped Bare Brick & Rot"
                afterLabel="SARQ: Turnkey Period Restoration"
              />
              <p className="text-xs font-mono text-muted text-center mt-2">
                ← Slide to compare structural restoration and architectural joinery →
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. TRADE PHASES & SPECIFICATION */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Comprehensive Trades Under One Roof"
            title="Every Trade Managed In-House"
            subtitle="From structural joist sistering to heritage lime repointing, smart home AV wiring, and hand-painted bespoke joinery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default" className="p-6 bg-surface">
              <Zap className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">Part P Rewire</h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Full replacement of antiquated wiring, dual-RCD consumer units, architectural flush trimless downlights, and smart heating controls.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-surface">
              <Flame className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">Plumbing & Heating</h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Unvented Megaflo water pressure boosters, copper pipework runs, cast-iron period radiators, and multi-zone hydronic underfloor heating.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-surface">
              <Layers className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">Plaster & Moulding</h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Restoration of historic Victorian ceiling roses, fibrous plaster cornicing, smooth Thistle multi-finish skimming, and soundproof drylining.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-surface">
              <Paintbrush className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">Bespoke Joinery</h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Floor-to-ceiling handmade wardrobes, secret panel doors, engineered oak flooring, and spray-painted cabinetry in Farrow & Ball shades.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Planning a Full Period House Renovation in London?
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            Book an on-site walkthrough with our Quantity Surveyor to establish an itemised schedule of works and fixed-price contract.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Request Refurbishment Survey
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Contact Battersea Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
