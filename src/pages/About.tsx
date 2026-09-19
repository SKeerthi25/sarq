import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HardHat,
  Scale,
  Clock,
  Building,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { accreditationsData } from '../data/accreditations';

export const About: React.FC = () => {
  const companyValues = [
    {
      num: '01',
      title: 'Punctuality & Site Discipline',
      desc: 'We turn up at 7:30am on the dot. Our sites are clean, secure, and run under strict SMSTS site management protocols with minimal neighbour disruption.',
    },
    {
      num: '02',
      title: 'Structural Integrity First',
      desc: 'We never cut corners on steel beam sizing, concrete padstones, or damp-proofing. Every structural detail is engineered and inspected to exceed Building Regulations.',
    },
    {
      num: '03',
      title: 'Transparent Lump-Sum Billing',
      desc: 'No hidden variation shocks. We operate on fixed-price JCT Minor Works or RIBA domestic contracts with milestone payments linked to tangible site sign-offs.',
    },
    {
      num: '04',
      title: 'Direct Accountable Communication',
      desc: 'You have direct daily contact with your dedicated Project Manager via a private WhatsApp group, alongside weekly written photo progress reports.',
    },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="About SARQ LTD | London Domestic Building Contractor"
        description="Learn about SARQ LTD (Company No. 17460532), our leadership team, engineering values, and domestic construction credentials across South West London."
      />

      {/* 1. HERO HEADER */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">About SARQ Construction</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              Domestic Building Built On Engineering Rigor
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              Founded on the belief that London homeowners deserve dependable, highly skilled, and transparent domestic builders. We manage complex structural extensions, loft conversions, and complete home transformations across Battersea, Wandsworth, Clapham, and Greater London.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY & SPLIT PANEL */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="micro-label text-brand">Company Heritage & Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-ink">
                A Local Battersea Builder You Can Trust With Your Biggest Asset
              </h2>
              
              <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
                SARQ LTD (Company No. 17460532, SIC 41202) was established to bring commercial-grade project management and structural engineering discipline into the London domestic building sector.
              </p>
              
              <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
                Too many London domestic renovations suffer from vague estimates, shifting start dates, and unvetted subcontract labor. At SARQ, we operate with full-time core site teams, chartered structural engineers, and accredited trade specialists (Gas Safe, NICEIC, CHAS).
              </p>

              <div className="p-5 rounded bg-surface border-l-4 border-brand text-xs sm:text-sm font-medium italic text-ink/90 leading-relaxed">
                "Our promise to homeowners is straightforward: We turn up on time, we build with precision according to certified structural calculations, and we do not leave site until practical completion and snag-free handover."
              </div>

              <div className="pt-2 flex flex-wrap gap-6 text-xs font-mono text-muted">
                <div>
                  <span className="text-brand font-bold text-sm block">100%</span>
                  <span>Building Regs Pass Rate</span>
                </div>
                <div>
                  <span className="text-brand font-bold text-sm block">£5,000,000</span>
                  <span>Public Liability Cover</span>
                </div>
                <div>
                  <span className="text-brand font-bold text-sm block">SW11 Base</span>
                  <span>Battersea, London</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-md border border-hairline overflow-hidden shadow-xl bg-surface-deep">
                <img
                  src="/photos/image copy 6.png"
                  alt="SARQ Construction on site"
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/photos/image.png';
                  }}
                />
                <div className="p-4 bg-card border-t border-hairline">
                  <div className="flex items-center gap-2 text-xs font-mono text-ink font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand" />
                    <span>SARQ LTD • Registered in England & Wales #17460532</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUMBERED VALUES RAIL */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Core Operating Principles"
            title="The 4 Standards We Never Compromise"
            subtitle="How we manage our sites, treat our clients, and guarantee exceptional craftsmanship on every London build."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((val) => (
              <Card key={val.num} variant="elevated" className="p-6 bg-card flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-extrabold text-brand">{val.num}</span>
                  <h3 className="font-heading text-lg font-bold uppercase text-ink mt-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-3 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "WHY HOMEOWNERS CHOOSE SARQ" SPLIT PANEL */}
      <section className="py-20 bg-surface-deep text-surface border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="micro-label text-accent">The SARQ Difference</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
                Why Discerning London Homeowners Choose SARQ
              </h2>
              <p className="text-sm sm:text-base text-surface/80 leading-relaxed">
                Whether you are investing £60,000 into a loft conversion or £250,000 into a subterranean basement, our domestic contracting model protects your home, your schedule, and your capital.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '100% fixed lump-sum contract pricing before any hammer swings',
                  'Dedicated full-time on-site Site Supervisor on your property daily',
                  'Weekly photo reports & milestone stage payments linked to inspections',
                  'Full liaison with Thames Water, Party Wall Surveyors & Council Inspectors',
                  '10-Year structural guarantee backed by UK insurance providers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-surface/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book a Consultation With Our Team →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card variant="bordered" className="border-white/20 p-6 sm:p-8 bg-black/30 space-y-6">
                <h3 className="font-heading text-xl font-bold uppercase text-white border-b border-white/10 pb-3">
                  Statutory Company Details
                </h3>

                <div className="space-y-3 text-xs font-mono text-surface/90">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-surface/60">Legal Entity:</span>
                    <span className="font-bold text-white">SARQ LTD</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-surface/60">Company Number:</span>
                    <span className="font-bold text-accent">17460532</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-surface/60">Registered in:</span>
                    <span>England & Wales</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-surface/60">SIC Industry Code:</span>
                    <span>41202 (Domestic Buildings)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-surface/60">Registered Office:</span>
                    <span className="text-right">Flat 51 Cranmer House, 60 Surrey Lane, London, SW11 3TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Primary Domain:</span>
                    <span className="text-accent">www.sarqcons.co.uk</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CREDENTIALS & STATUTORY ACCREDITATIONS */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="03"
            microLabel="Compliance & Standards"
            title="Accreditations, Insurance & Safety"
            subtitle="Full statutory compliance under UK Construction (Design and Management) Regulations 2015."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditationsData.map((acc, i) => (
              <Card key={i} variant="default" className="p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded bg-brand/10 text-brand shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase text-ink">{acc.name}</h4>
                    {acc.code && <span className="text-xs font-mono text-muted">{acc.code}</span>}
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed">{acc.description}</p>
                <div className="mt-3 pt-3 border-t border-hairline/60 text-[11px] font-mono text-ink/80">
                  <strong className="text-brand">Benefit:</strong> {acc.benefitToHomeowner}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-heading text-3xl font-bold uppercase text-ink">
            Speak Directly With Our Managing Team
          </h3>
          <p className="text-sm text-muted mt-2 max-w-xl mx-auto">
            Book a complimentary initial consultation or site survey to discuss your London property plans.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="primary" size="lg" pill to="/request-a-quote">
              Request Site Survey & Quote
            </Button>
            <Button variant="outline" size="lg" pill to="/contact">
              Contact Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
