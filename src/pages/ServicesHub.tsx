import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Maximize2,
  Home as HomeIcon,
  ShieldAlert,
  Wrench,
  Sparkles,
  Hammer,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { servicesData } from '../data/services';

const serviceIcons: Record<string, React.ReactNode> = {
  'new-build': <Building2 className="w-8 h-8 text-brand" />,
  'extensions': <Maximize2 className="w-8 h-8 text-brand" />,
  'loft-conversions': <HomeIcon className="w-8 h-8 text-brand" />,
  'basement-structural': <ShieldAlert className="w-8 h-8 text-brand" />,
  'refurbishment': <Wrench className="w-8 h-8 text-brand" />,
  'kitchens-bathrooms': <Sparkles className="w-8 h-8 text-brand" />,
  'groundworks-roofing-external': <Hammer className="w-8 h-8 text-brand" />,
};

export const ServicesHub: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Domestic Construction Services London | SARQ LTD"
        description="Explore SARQ LTD's full domestic construction specialisms: bespoke house extensions, loft conversions, structural basements, new builds, and complete house refurbishments."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Services Directory</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              Domestic Building Specialisms
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              We provide full turnkey domestic main contracting across South West London. Select a service below to explore detailed specifications, cost guides, structural workflows, and case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((svc, index) => (
            <Card
              key={svc.id}
              variant="elevated"
              className="p-6 sm:p-10 bg-card border-2 border-hairline hover:border-brand/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Visual & Badge (4 cols) */}
                <div className="lg:col-span-4 relative rounded overflow-hidden bg-surface-deep">
                  <img
                    src={svc.heroImage}
                    alt={svc.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-ink/90 backdrop-blur-sm text-accent font-mono text-xs px-2.5 py-1 rounded border border-accent/20">
                    0{index + 1} // DOMESTIC
                  </div>
                </div>

                {/* Right Details (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-surface border border-hairline shrink-0">
                        {serviceIcons[svc.slug]}
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-ink">
                        {svc.title}
                      </h2>
                    </div>

                    <div className="font-mono text-xs text-brand font-bold bg-brand/10 px-3 py-1.5 rounded self-start sm:self-auto">
                      From {svc.startingCost} • ~{svc.durationAvg}
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Key Features bullet list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {svc.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-ink/85 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      pill
                      to={`/services/${svc.slug}`}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Full Specifications & Timelines
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      pill
                      to="/request-a-quote"
                    >
                      Request Quote for {svc.shortTitle}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-card border-t border-hairline text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="micro-label text-brand">Statutory Protection</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-ink mt-1">
            Every Project Fully Covered by UK Warranties
          </h3>
          <p className="text-sm text-muted mt-2 max-w-xl mx-auto">
            Fixed lump-sum contracts, £5M public liability insurance, and 10-year insurance-backed structural guarantees on every build.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="primary" size="lg" pill to="/request-a-quote">
              Book a Free Site Survey
            </Button>
            <Button variant="outline" size="lg" pill to="/quote-cost-guide">
              Calculate Project Cost
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
