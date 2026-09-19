import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  ShieldCheck,
  Phone,
  Mail,
  FileCheck2,
  Check,
  AlertCircle,
  Clock,
  Building,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {
  fullQuoteSchema,
  quoteStep1Schema,
  quoteStep2Schema,
  quoteStep3Schema,
  quoteStep4Schema,
  FullQuoteFormData,
} from '../lib/schemas';

const PROJECT_TYPES = [
  'Rear / Side Return Extension',
  'Wrap-around Extension',
  'Dormer Loft Conversion',
  'Mansard Loft Conversion',
  'Basement & Structural Underpinning',
  'Full House Refurbishment',
  'New Build Residential',
  'Kitchen & Bathroom Fit-out',
  'Groundworks & External Works',
] as const;

const PROPERTY_TYPES = [
  'Victorian / Edwardian Terraced',
  'Semi-Detached',
  'Detached',
  'Maisonette / Flat',
  'Commercial to Residential Conversion',
  'Vacant Plot',
] as const;

const PLANNING_STATUSES = [
  'Architectural drawings ready & Planning Approved',
  'Planning Application in Progress',
  'Permitted Development (No planning needed)',
  'Need architectural & planning support',
  'Just seeking initial budget feasibility',
] as const;

const BUDGET_RANGES = [
  '£40k – £75k',
  '£75k – £150k',
  '£150k – £250k',
  '£250k – £500k',
  '£500k+',
] as const;

const FINISH_LEVELS = [
  { value: 'Builder Standard', label: 'Builder Standard', desc: 'Standard trade finishes, standard fittings' },
  { value: 'Premium Architectural', label: 'Premium Architectural', desc: 'Cortizo/Crittall glazing, wet UFH, engineered oak' },
  { value: 'Bespoke Luxury', label: 'Bespoke Luxury', desc: 'Frameless glass, micro-cement, bespoke handmade joinery' },
] as const;

export const RequestQuote: React.FC = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Read router location state for prefilled values if navigated from CostEstimator
  const state = location.state as { presetProjectType?: string; presetArea?: number; presetFinish?: string } | undefined;

  const {
    register,
    handleSubmit,
    trigger,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FullQuoteFormData>({
    resolver: zodResolver(fullQuoteSchema),
    defaultValues: {
      projectType: (state?.presetProjectType as any) || 'Wrap-around Extension',
      propertyType: 'Victorian / Edwardian Terraced',
      approximateAreaSqM: state?.presetArea || 35,
      postcode: '',
      propertyAddress: '',
      planningStatus: 'Architectural drawings ready & Planning Approved',
      partyWallRequired: 'Unsure',
      targetStartDate: '1–3 months',
      budgetRange: '£75k – £150k',
      finishLevel: state?.presetFinish === 'luxury' ? 'Bespoke Luxury' : state?.presetFinish === 'standard' ? 'Builder Standard' : 'Premium Architectural',
      projectNotes: '',
      fullName: '',
      email: '',
      phone: '',
      preferredContact: 'WhatsApp',
      siteVisitPreferredDays: ['Saturdays', 'Weekday Mornings'],
      consentToContact: true,
      honeypot: '',
    },
    mode: 'onTouched',
  });

  const selectedProjectType = watch('projectType');
  const selectedPropertyType = watch('propertyType');
  const selectedPlanning = watch('planningStatus');
  const selectedBudget = watch('budgetRange');
  const selectedFinish = watch('finishLevel');
  const selectedPartyWall = watch('partyWallRequired');
  const selectedContactPref = watch('preferredContact');
  const selectedDays = watch('siteVisitPreferredDays') || [];

  // Step progression with schema validation per step
  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger(['projectType', 'propertyType', 'approximateAreaSqM']);
    } else if (currentStep === 2) {
      isValid = await trigger(['postcode', 'propertyAddress', 'planningStatus', 'partyWallRequired', 'targetStartDate']);
    } else if (currentStep === 3) {
      isValid = await trigger(['budgetRange', 'finishLevel', 'projectNotes']);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(4, prev + 1) as any);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1) as any);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const onSubmit = async (data: FullQuoteFormData) => {
    // Check honeypot
    if (data.honeypot && data.honeypot.length > 0) return;

    setIsSubmitting(true);
    // Simulate direct secure transmission to cons@sarqltd.com
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Request a Detailed Quote & Technical Survey | SARQ LTD"
        description="Submit your domestic building enquiry for a fixed-price JCT quotation and free on-site survey in Battersea, Wandsworth, Clapham and London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="micro-label text-accent">Complimentary Site Survey</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
            Request a Fixed-Price Quotation
          </h1>
          <p className="text-sm sm:text-base text-surface/85 mt-3 leading-relaxed">
            Fill in your property and project requirements below. Our Senior Estimator will review your specifications and schedule a site survey within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Wizard Section */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            /* Success State */
            <Card variant="elevated" accentBorder="lime" className="p-8 sm:p-12 text-center bg-card">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="micro-label text-brand">Enquiry Received</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-ink mt-2">
                Thank You — Your Quote Request is Logged
              </h2>

              <p className="text-sm sm:text-base text-muted max-w-xl mx-auto mt-3 leading-relaxed">
                Your details have been submitted directly to our estimating desk at{' '}
                <strong className="text-ink">cons@sarqltd.com</strong>. One of our Senior Project Managers will review your drawings and call or WhatsApp you within 24 hours to confirm your complimentary site survey.
              </p>

              <div className="mt-8 p-6 rounded bg-surface border border-hairline max-w-md mx-auto text-left text-xs font-mono space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted">Target Response:</span>
                  <span className="font-bold text-ink">Within 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Direct Helpline:</span>
                  <span className="font-bold text-brand">07448492982</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Survey Cost:</span>
                  <span className="font-bold text-emerald-600">100% Complimentary</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button variant="primary" size="md" pill to="/projects">
                  Explore London Case Studies
                </Button>
                <Button variant="outline" size="md" pill to="/">
                  Return to Homepage
                </Button>
              </div>
            </Card>
          ) : (
            /* Multi-Step Wizard */
            <Card variant="elevated" className="p-6 sm:p-10 bg-card border-2 border-hairline shadow-lg">
              {/* Progress Rail */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="micro-label text-brand">
                    Step 0{currentStep} of 04 //{' '}
                    {currentStep === 1 && 'Project Type & Area'}
                    {currentStep === 2 && 'Property & Planning Details'}
                    {currentStep === 3 && 'Budget, Finishes & Drawings'}
                    {currentStep === 4 && 'Contact & Survey Times'}
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">
                    {Math.round((currentStep / 4) * 100)}% Complete
                  </span>
                </div>

                <div className="w-full h-2 bg-hairline rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Honeypot anti-spam field */}
                <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" />

                {/* STEP 1: PROJECT TYPE & AREA */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-heading text-base font-bold uppercase text-ink mb-3">
                        1. Select Primary Scope of Work *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setValue('projectType', type as any)}
                            className={`p-3 text-left rounded border transition-all text-xs font-medium ${
                              selectedProjectType === type
                                ? 'border-brand bg-brand/5 text-brand ring-1 ring-brand font-bold'
                                : 'border-hairline bg-surface/40 text-ink hover:border-brand/40'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className="text-xs text-brand mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-heading text-base font-bold uppercase text-ink mb-3">
                        2. Property Classification *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {PROPERTY_TYPES.map((prop) => (
                          <button
                            key={prop}
                            type="button"
                            onClick={() => setValue('propertyType', prop as any)}
                            className={`p-3 text-left rounded border transition-all text-xs font-medium ${
                              selectedPropertyType === prop
                                ? 'border-brand bg-brand/5 text-brand ring-1 ring-brand font-bold'
                                : 'border-hairline bg-surface/40 text-ink hover:border-brand/40'
                            }`}
                          >
                            {prop}
                          </button>
                        ))}
                      </div>
                      {errors.propertyType && (
                        <p className="text-xs text-brand mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.propertyType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-heading text-base font-bold uppercase text-ink mb-2">
                        3. Approximate New Internal Floor Area (m²) *
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          {...register('approximateAreaSqM', { valueAsNumber: true })}
                          className="w-32 p-3 rounded border border-hairline bg-surface text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. 35"
                        />
                        <span className="text-xs font-mono text-muted">
                          m² (~{Math.round((watch('approximateAreaSqM') || 0) * 10.764)} sq ft)
                        </span>
                      </div>
                      {errors.approximateAreaSqM && (
                        <p className="text-xs text-brand mt-1.5 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.approximateAreaSqM.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: PROPERTY & PLANNING DETAILS */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Project Postcode *
                        </label>
                        <input
                          type="text"
                          {...register('postcode')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand uppercase"
                          placeholder="e.g. SW11 3TB"
                        />
                        {errors.postcode && (
                          <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.postcode.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          {...register('propertyAddress')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. 60 Surrey Lane, Battersea"
                        />
                        {errors.propertyAddress && (
                          <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.propertyAddress.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-sm font-bold uppercase text-ink mb-2">
                        Planning & Architectural Status *
                      </label>
                      <div className="space-y-2">
                        {PLANNING_STATUSES.map((status) => (
                          <label
                            key={status}
                            className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-all text-xs sm:text-sm ${
                              selectedPlanning === status
                                ? 'border-brand bg-brand/5 text-brand font-medium'
                                : 'border-hairline bg-surface/40 text-ink hover:border-brand/40'
                            }`}
                          >
                            <input
                              type="radio"
                              value={status}
                              {...register('planningStatus')}
                              className="accent-brand"
                            />
                            <span>{status}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Party Wall Notices Required?
                        </label>
                        <select
                          {...register('partyWallRequired')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-xs sm:text-sm font-mono focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          <option value="Yes">Yes (Affects shared boundary / excavation within 3m)</option>
                          <option value="No">No (Detached / No excavation near boundary)</option>
                          <option value="Unsure">Unsure (Please advise during survey)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Target On-Site Start Date
                        </label>
                        <select
                          {...register('targetStartDate')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-xs sm:text-sm font-mono focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          <option value="Immediate (Next 4 weeks)">Immediate (Next 4 weeks)</option>
                          <option value="1–3 months">1–3 months</option>
                          <option value="3–6 months">3–6 months</option>
                          <option value="6+ months (Planning stage)">6+ months (Planning stage)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: BUDGET, FINISHES & DRAWINGS */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block font-heading text-base font-bold uppercase text-ink mb-3">
                        Target Construction Budget Range *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {BUDGET_RANGES.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setValue('budgetRange', b as any)}
                            className={`p-3 text-center rounded border transition-all text-xs font-mono font-bold ${
                              selectedBudget === b
                                ? 'border-brand bg-brand text-white shadow-sm'
                                : 'border-hairline bg-surface/50 text-ink hover:border-brand/40'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-base font-bold uppercase text-ink mb-3">
                        Specification & Material Level *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {FINISH_LEVELS.map((fl) => (
                          <button
                            key={fl.value}
                            type="button"
                            onClick={() => setValue('finishLevel', fl.value as any)}
                            className={`p-4 text-left rounded border transition-all flex flex-col justify-between ${
                              selectedFinish === fl.value
                                ? 'border-brand bg-brand/5 text-brand ring-1 ring-brand'
                                : 'border-hairline bg-surface/40 text-ink hover:border-brand/40'
                            }`}
                          >
                            <div className="font-heading font-bold text-sm uppercase">{fl.label}</div>
                            <div className="text-xs text-muted mt-1 leading-snug">{fl.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* File Upload for plans / photos */}
                    <div>
                      <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                        Upload Architectural Drawings, Photos or Scope (Optional)
                      </label>
                      <div className="p-6 border-2 border-dashed border-hairline rounded bg-surface/30 text-center hover:border-brand/40 transition-colors">
                        <Upload className="w-8 h-8 text-brand mx-auto mb-2" />
                        <label className="cursor-pointer text-xs font-mono text-brand font-bold underline block">
                          <span>Click to browse files (PDF, DWG, JPG, PNG)</span>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                            accept=".pdf,.dwg,.jpg,.jpeg,.png,.doc,.docx"
                          />
                        </label>
                        <p className="text-[11px] text-muted mt-1 font-mono">Max 25MB total. Multiple drawings welcome.</p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          {uploadedFiles.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs font-mono bg-surface p-2 rounded border border-hairline">
                              <span className="truncate max-w-xs">{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                        Additional Project Notes or Specific Requirements
                      </label>
                      <textarea
                        {...register('projectNotes')}
                        rows={3}
                        className="w-full p-3 rounded border border-hairline bg-surface text-ink text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                        placeholder="Tell us about specific details (e.g. Crittall doors, unvented Megaflo, cellar conversion, side access constraints)..."
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & SURVEY PREFERENCES */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('fullName')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. David Miller"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. david@example.co.uk"
                        />
                        {errors.email && (
                          <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block font-heading text-sm font-bold uppercase text-ink mb-1.5">
                          Contact Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. 07448492982"
                        />
                        {errors.phone && (
                          <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-sm font-bold uppercase text-ink mb-2">
                        Preferred Communication Channel
                      </label>
                      <div className="flex gap-4">
                        {['WhatsApp', 'Phone Call', 'Email'].map((channel) => (
                          <label key={channel} className="flex items-center gap-2 text-xs font-mono cursor-pointer">
                            <input
                              type="radio"
                              value={channel}
                              {...register('preferredContact')}
                              className="accent-brand"
                            />
                            <span>{channel}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Preferred Site Survey Days */}
                    <div>
                      <label className="block font-heading text-sm font-bold uppercase text-ink mb-2">
                        Preferred Free Site Visit Windows (Select All That Apply) *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Weekday Mornings', 'Weekday Afternoons', 'Saturdays', 'Evenings (After 5pm)'].map((day) => {
                          const isChecked = selectedDays.includes(day);
                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => {
                                const nextDays = isChecked
                                  ? selectedDays.filter((d) => d !== day)
                                  : [...selectedDays, day];
                                setValue('siteVisitPreferredDays', nextDays);
                              }}
                              className={`p-2.5 text-center rounded border transition-all text-xs font-mono ${
                                isChecked
                                  ? 'border-brand bg-brand/10 text-brand font-bold'
                                  : 'border-hairline bg-surface text-muted hover:text-ink'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                      {errors.siteVisitPreferredDays && (
                        <p className="text-xs text-brand mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.siteVisitPreferredDays.message}
                        </p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-muted cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('consentToContact')}
                          className="mt-0.5 accent-brand"
                        />
                        <span>
                          I consent to SARQ LTD contacting me regarding my domestic building enquiry and processing my details in accordance with the{' '}
                          <Link to="/privacy-policy" className="underline text-brand">
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                      {errors.consentToContact && (
                        <p className="text-xs text-brand mt-1 font-mono">
                          {errors.consentToContact.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Form Controls Bottom Navigation */}
                <div className="mt-10 pt-6 border-t border-hairline flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      pill
                      onClick={handlePrev}
                      icon={<ArrowLeft className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Previous Step
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      pill
                      onClick={handleNext}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Continue to Step 0{currentStep + 1}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      pill
                      isLoading={isSubmitting}
                      icon={<Check className="w-4 h-4" />}
                    >
                      Submit & Lock In Site Survey
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          )}

          {/* Trust Guarantees Band */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs font-mono text-muted">
            <div className="flex items-center justify-center gap-2 bg-card p-3 rounded border border-hairline">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>£5M Public Liability Cover</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card p-3 rounded border border-hairline">
              <FileCheck2 className="w-4 h-4 text-brand" />
              <span>Fixed-Price JCT Contracts</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card p-3 rounded border border-hairline">
              <Clock className="w-4 h-4 text-brand" />
              <span>24-Hour Survey Confirmation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
