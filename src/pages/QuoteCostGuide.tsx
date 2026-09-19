import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  AlertTriangle,
  FileText,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { CostEstimator } from '../components/CostEstimator';

export const QuoteCostGuide: React.FC = () => {
  const comparisonCards = [
    {
      title: 'Single Storey Rear Extension',
      sqm: '20 – 30 m²',
      low: '£55,000',
      high: '£85,000',
      rate: '£2,200 – £2,800 / m²',
      timeline: '10 – 14 Weeks',
      bestFor: 'Victorian terraced kitchen / dining expansions with sliding patio glazing.',
    },
    {
      title: 'Wrap-Around Extension',
      sqm: '35 – 55 m²',
      low: '£90,000',
      high: '£145,000',
      rate: '£2,500 – £3,100 / m²',
      timeline: '14 – 18 Weeks',
      bestFor: 'Maximising ground floor footprint with structural goalpost steelwork.',
    },
    {
      title: 'Dormer Loft Conversion',
      sqm: '25 – 40 m²',
      low: '£45,000',
      high: '£65,000',
      rate: '£1,800 – £2,200 / m²',
      timeline: '8 – 10 Weeks',
      bestFor: 'Master bedroom with en-suite under Permitted Development rights.',
    },
    {
      title: 'Mansard Loft Conversion',
      sqm: '35 – 50 m²',
      low: '£65,000',
      high: '£95,000',
      rate: '£2,200 – £2,600 / m²',
      timeline: '10 – 12 Weeks',
      bestFor: 'Period townhouses in conservation areas (SW11, SW4, SW6).',
    },
    {
      title: 'Full House Refurbishment',
      sqm: '120 – 250 m²',
      low: '£80,000',
      high: '£220,000',
      rate: '£1,000 – £1,800 / m²',
      timeline: '16 – 24 Weeks',
      bestFor: 'Complete back-to-brick rewiring, plumbing, plastering, and bespoke joinery.',
    },
    {
      title: 'Structural Basement',
      sqm: '40 – 80 m²',
      low: '£140,000',
      high: '£280,000',
      rate: '£3,500 – £4,500 / m²',
      timeline: '24 – 36 Weeks',
      bestFor: 'Subterranean cinema, gym, wine cellar with BS 8102 Type C tanking.',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Domestic Construction Cost Guide 2025/2026 | SARQ LTD London"
        description="Comprehensive guide to London domestic extension, loft conversion, and refurbishment costs in South West London, plus interactive online cost estimator."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">2025/2026 London Benchmarks</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              Domestic Building Cost Guide & Online Estimator
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              Transparent, realistic pricing for domestic construction in South West London. Use our interactive calculator below or explore typical price ranges across all project types.
            </p>
          </div>
        </div>
      </section>

      {/* 1. INTERACTIVE CALCULATOR */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Interactive Tool"
            title="Calculate Your Project Estimate"
            subtitle="Adjust floor area, project scope, and finish specification to receive an instant breakdown."
          />

          <CostEstimator />
        </div>
      </section>

      {/* 2. INDICATIVE PRICE RANGE COMPARISON CARDS */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Market Rates"
            title="London Indicative Price Range Comparison"
            subtitle="Current domestic building cost benchmarks for South West London properties."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonCards.map((card, idx) => (
              <Card
                key={idx}
                variant="elevated"
                accentBorder="brand"
                className="p-6 bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold text-muted">~{card.sqm}</span>
                    <span className="font-mono text-xs text-brand font-semibold">{card.timeline}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-ink">
                    {card.title}
                  </h3>

                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {card.bestFor}
                  </p>

                  <div className="mt-6 pt-4 border-t border-hairline space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted">Indicative Range:</span>
                      <span className="font-bold text-ink text-sm">{card.low} – {card.high}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Rate per m²:</span>
                      <span className="text-brand font-semibold">{card.rate}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <Button
                    variant="primary"
                    size="sm"
                    pill
                    to="/request-a-quote"
                    className="w-full text-center text-xs"
                  >
                    Request Itemised Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 rounded bg-surface border border-hairline flex items-start gap-3 text-xs text-muted max-w-3xl mx-auto">
            <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
            <span>
              <strong>Note on figures:</strong> All prices shown represent typical turnkey construction costs excluding VAT (20%) and statutory/professional fees. Final binding price is fixed under a JCT contract following our technical site survey.
            </span>
          </div>
        </div>
      </section>

      {/* 3. CONTINGENCY & STATUTORY PROFESSIONAL FEES */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="03"
            microLabel="Budget Planning"
            title="Understanding Additional Project Costs"
            subtitle="Essential professional, statutory, and contingency allowances to include in your total project budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 bg-card">
              <h4 className="font-heading text-lg font-bold uppercase text-ink mb-2">
                10% Period Contingency
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                We always advise setting aside a 10% contingency for Victorian and Edwardian properties. This caters for unforeseen historic anomalies (weakened timber joists, old lead pipes, or buried clay drains) discovered during initial strip-out.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-card">
              <h4 className="font-heading text-lg font-bold uppercase text-ink mb-2">
                Statutory Authority Fees
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Budget £800 – £1,500 for Local Authority / Approved Inspector Building Control fees, £350 – £1,300 for Thames Water Build-Over agreements, and £206 – £462 for Council Householder Planning Applications (where required).
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-card">
              <h4 className="font-heading text-lg font-bold uppercase text-ink mb-2">
                Party Wall Surveyors
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                If your neighbours consent in writing to your Party Wall notice, surveyor fees are £0. If neighbours appoint surveyors, budget £1,000 – £2,000 per dissenting adjoining owner for formal Party Wall Awards.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
