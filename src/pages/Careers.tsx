import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Briefcase,
  CheckCircle2,
  HardHat,
  ShieldCheck,
  ArrowRight,
  FileCheck2,
  Check,
  AlertCircle,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {
  subcontractorFormSchema,
  SubcontractorFormData,
} from '../lib/schemas';

const OPEN_ROLES = [
  {
    title: 'Site Manager (SMSTS)',
    type: 'Full-time Permanent',
    location: 'South West London (Battersea / Wandsworth)',
    rate: '£48,000 – £58,000 / annum',
    desc: 'Lead daily operations on high-end residential domestic extensions and lofts. SMSTS, First Aid at Work, and minimum 5 years London site leadership required.',
  },
  {
    title: 'Senior 1st & 2nd Fix Carpenter',
    type: 'CIS / Subcontract',
    location: 'SW London Sites',
    rate: '£220 – £260 / day',
    desc: 'Precision structural roof cut carpentry, dormer framing, bespoke internal cabinetry, and hardwood floor laying. NVQ Level 3 and own tools required.',
  },
  {
    title: 'Bricklayer & Groundworks Specialist',
    type: 'CIS / Subcontract',
    location: 'SW London Sites',
    rate: '£220 – £250 / day',
    desc: 'Heavy foundation trenching, concrete underpinning, matching London stock facing brickwork, and lime mortar repointing.',
  },
];

export const Careers: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubcontractorFormData>({
    resolver: zodResolver(subcontractorFormSchema),
    defaultValues: {
      companyOrName: '',
      trade: '',
      utrOrCompanyNo: '',
      cisRegistered: 'Yes (20% Deduction)',
      publicLiabilityInsured: 'Yes (£5M+)',
      phone: '',
      email: '',
      experienceYears: 5,
      londonBoroughsOperated: 'Battersea, Wandsworth, Lambeth',
    },
  });

  const onSubmit = async (data: SubcontractorFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Careers & Subcontractor Applications | SARQ LTD"
        description="Join SARQ LTD's network of accredited London trades, Site Managers, and specialist subcontractors in South West London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="micro-label text-accent">Join Our Supply Chain</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
            Trades & Subcontractor Opportunities
          </h1>
          <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
            SARQ LTD partners with the finest vetted subcontractors, craftspeople, and site managers across South West London. Prompt weekly CIS payments and well-organised sites.
          </p>
        </div>
      </section>

      {/* 1. OPEN ROLES */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Current Vacancies"
            title="Open Site & Management Positions"
            subtitle="Explore direct employment and long-term contract roles across active Battersea, Wandsworth, and Clapham sites."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OPEN_ROLES.map((role, idx) => (
              <Card key={idx} variant="elevated" accentBorder="brand" className="p-6 sm:p-8 bg-card flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand/10 text-brand font-bold">
                      {role.type}
                    </span>
                    <span className="font-mono text-xs text-muted">{role.rate}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-ink mt-2">
                    {role.title}
                  </h3>

                  <p className="text-xs font-mono text-muted mt-1">{role.location}</p>

                  <p className="text-xs sm:text-sm text-ink/80 mt-4 leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline">
                  <a
                    href={`mailto:cons@sarqltd.com?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded bg-surface hover:bg-brand hover:text-white transition-colors text-xs font-heading font-bold uppercase text-ink border border-hairline"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SUBCONTRACTOR REGISTRATION FORM */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Vetted Partner Network"
            title="Subcontractor & Trade Registration Form"
            subtitle="Are you a certified plumber, electrician, bricklayer, joiner, or roofer? Register your trade details to receive tender opportunities."
          />

          {isSubmitted ? (
            <Card variant="elevated" accentBorder="lime" className="p-8 text-center bg-surface">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                Trade Registration Submitted
              </h3>
              <p className="text-xs sm:text-sm text-muted max-w-md mx-auto mt-2">
                Thank you. Our Procurement and Site Operations manager will review your trade details and contact you for active tenders.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs font-mono text-brand underline font-bold"
              >
                Register Another Trade
              </button>
            </Card>
          ) : (
            <Card variant="elevated" className="p-6 sm:p-10 bg-surface border-2 border-hairline">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Company Name / Sole Trader Name *
                    </label>
                    <input
                      type="text"
                      {...register('companyOrName')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. Apex Electrical SW Ltd"
                    />
                    {errors.companyOrName && (
                      <p className="text-xs text-brand mt-1 font-mono">{errors.companyOrName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Trade / Specialism *
                    </label>
                    <input
                      type="text"
                      {...register('trade')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. NICEIC Electrician / Gas Safe Plumber"
                    />
                    {errors.trade && (
                      <p className="text-xs text-brand mt-1 font-mono">{errors.trade.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      UTR or Company Number *
                    </label>
                    <input
                      type="text"
                      {...register('utrOrCompanyNo')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. 1234567890"
                    />
                    {errors.utrOrCompanyNo && (
                      <p className="text-xs text-brand mt-1 font-mono">{errors.utrOrCompanyNo.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      CIS Registration Status
                    </label>
                    <select
                      {...register('cisRegistered')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink font-mono text-xs focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value="Yes (Gross)">Yes (Gross Payment)</option>
                      <option value="Yes (20% Deduction)">Yes (20% Deduction)</option>
                      <option value="Yes (30% Deduction)">Yes (30% Deduction)</option>
                      <option value="No">No (Direct PAYE)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Public Liability Insurance
                    </label>
                    <select
                      {...register('publicLiabilityInsured')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink font-mono text-xs focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value="Yes (£5M+)">Yes (£5M+ Cover)</option>
                      <option value="Yes (£2M+)">Yes (£2M+ Cover)</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. 07123456789"
                    />
                    {errors.phone && (
                      <p className="text-xs text-brand mt-1 font-mono">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. info@trade.co.uk"
                    />
                    {errors.email && (
                      <p className="text-xs text-brand mt-1 font-mono">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                      Years Trade Experience
                    </label>
                    <input
                      type="number"
                      {...register('experienceYears', { valueAsNumber: true })}
                      className="w-full p-3 rounded border border-hairline bg-card text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                      placeholder="e.g. 8"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                    London Boroughs & Postcodes Operated In *
                  </label>
                  <input
                    type="text"
                    {...register('londonBoroughsOperated')}
                    className="w-full p-3 rounded border border-hairline bg-card text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="e.g. Wandsworth (SW11, SW18), Lambeth (SW4), Hammersmith & Fulham (SW6)"
                  />
                  {errors.londonBoroughsOperated && (
                    <p className="text-xs text-brand mt-1 font-mono">{errors.londonBoroughsOperated.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    pill
                    isLoading={isSubmitting}
                    className="w-full justify-center"
                    icon={<Check className="w-4 h-4" />}
                  >
                    Submit Subcontractor Application
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};
