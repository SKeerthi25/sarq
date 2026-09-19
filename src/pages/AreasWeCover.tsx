import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  Building,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { areasData } from '../data/areas';

export const AreasWeCover: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Areas We Cover in London | Battersea, Wandsworth, Clapham | SARQ LTD"
        description="Explore SARQ LTD's domestic building services across South West London boroughs: Battersea SW11, Clapham SW4, Wandsworth SW18, Putney SW15, Fulham SW6, and within the M25."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="micro-label text-accent">Service Territory</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
            Areas We Cover Across London
          </h1>
          <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
            Headquartered in Battersea SW11, SARQ operates dedicated residential building teams across South West London and all boroughs within the M25 ring road.
          </p>
        </div>
      </section>

      {/* Boroughs Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            number="01"
            microLabel="Local Knowledge"
            title="South West London Boroughs & Postcodes"
            subtitle="Deep familiarity with local council planning policies, conservation area restrictions, and Victorian housing stock."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasData.map((area, idx) => (
              <Card
                key={idx}
                variant="elevated"
                accentBorder={idx === 0 ? 'brand' : 'none'}
                className="p-6 sm:p-8 bg-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-brand font-mono text-xs font-bold bg-brand/10 px-2.5 py-1 rounded">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{area.postcodes.join(', ')}</span>
                    </div>
                    <span className="text-xs font-mono text-muted">
                      {area.recentProjectsCount}+ Projects
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                    {area.borough}
                  </h3>

                  <p className="text-xs font-mono text-brand font-semibold mt-1">
                    {area.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-hairline space-y-1.5">
                    <span className="text-[11px] font-heading font-bold uppercase text-ink block">
                      Common Local Projects:
                    </span>
                    {area.popularProjects.map((proj, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-ink/80">
                        <CheckCircle2 className="w-3 h-3 text-brand shrink-0" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <div className="text-[11px] font-mono text-muted mb-3">
                    Planning: {area.planningOffice}
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    pill
                    to="/request-a-quote"
                    className="w-full text-center text-xs"
                  >
                    Request Quote in {area.postcodes[0]}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* M25 Coverage Map Note */}
      <section className="py-16 bg-card border-t border-hairline text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="micro-label text-brand">Greater London Coverage</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-ink">
            Operating Across All London Boroughs Within the M25
          </h3>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Not sure if your property is in our service zone? Give our estimating office a call on 07448492982 or request a complimentary feasibility check.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button variant="primary" size="lg" pill to="/request-a-quote">
              Check Site Feasibility
            </Button>
            <Button variant="outline" size="lg" pill to="/contact">
              Contact Battersea Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
