import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hammer,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Shovel,
  Layers,
  Umbrella,
  FileCheck2,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { servicesData } from '../../data/services';

export const GroundworksRoofing: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'groundworks-roofing-external')!;

  const groundworksScope = [
    'Bulk excavation and muck-away with licensed grab lorry logistics',
    'C30/C35 strength structural concrete trench-fill, strip footings, and raft slabs',
    'Thames Water approved Section 106 public sewer connections and manholes',
    'Permeable attenuation crates, soakaways, and ACO surface water channels',
    'Reinforced concrete retaining walls for multi-tiered garden transformations',
  ];

  const roofingScope = [
    'Natural Spanish slate (Cupastone / SSQ) with copper nail fixings',
    'Handmade clay plain tiles and modern interlocking concrete tiles',
    'Code 4 / Code 5 milled lead flashings, dressed valleys, and chimney copings',
    'Seamless EPDM rubber and GRP fibreglass warm-roof flat systems',
    'Structural timber cut-roof rafter carpentry and Velux rooflights',
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Groundworks, Roofing & External Envelopes London | SARQ LTD"
        description="Deep foundation groundworks, Thames Water drainage connections, natural slate re-roofing, and structural envelope works across South West London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <Hammer className="w-4 h-4 text-accent" />
                <span>STRUCTURAL ENVELOPE & SITE INFRASTRUCTURE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book Site Survey for External Works
                </Button>
                <Button variant="white" size="lg" pill to="/projects">
                  View External Projects
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  External Infrastructure Metrics
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Starting Baseline:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Drainage Compliance:</span>
                    <span>Building Regs Part H (Drainage)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Leadwork:</span>
                    <span>Lead Sheet Association Standard</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL UTILITY SCOPE LISTS */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Comprehensive Scope"
            title="Civil Groundworks & Structural Roofing Specifications"
            subtitle="Explore our detailed technical scope across heavy subterranean groundwork and high-specification exterior roofing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Groundworks Scope Card */}
            <Card variant="elevated" accentBorder="brand" className="p-8 bg-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded bg-brand/10 text-brand">
                    <Shovel className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                    Civil Groundworks & Drainage
                  </h3>
                </div>

                <p className="text-xs text-muted mb-6 leading-relaxed">
                  Precision excavation and structural foundation engineering in dense London soils.
                </p>

                <div className="space-y-3">
                  {groundworksScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/85 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-hairline">
                <Button variant="primary" size="md" pill to="/request-a-quote" className="w-full text-center">
                  Request Groundworks Tender
                </Button>
              </div>
            </Card>

            {/* Roofing Scope Card */}
            <Card variant="elevated" accentBorder="lime" className="p-8 bg-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded bg-accent/20 text-ink">
                    <Umbrella className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                    Structural Roofing & Leadwork
                  </h3>
                </div>

                <p className="text-xs text-muted mb-6 leading-relaxed">
                  Weathertight roof coverings, traditional Welsh/Spanish slate, and warm-roof flat systems.
                </p>

                <div className="space-y-3">
                  {roofingScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/85 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-hairline">
                <Button variant="primary" size="md" pill to="/request-a-quote" className="w-full text-center">
                  Request Roofing Tender
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. WASTE LICENCE & STATUTORY DISPOSAL */}
      <section className="py-16 bg-card text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="micro-label text-brand">Environmental Duty of Care</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-ink mt-1">
            Registered Upper Tier Waste Carrier
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-2 max-w-xl mx-auto font-mono">
            Environment Agency Licence: CBDU491028. All excavated spoil and building waste is 100% recycled or processed at licensed UK transfer facilities with statutory waste transfer notes.
          </p>
        </div>
      </section>
    </div>
  );
};
