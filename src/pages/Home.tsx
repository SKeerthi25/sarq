import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Maximize2,
  Home as HomeIcon,
  ShieldAlert,
  Wrench,
  Sparkles,
  Hammer,
  Phone,
  FileCheck2,
  TrendingUp,
  MapPin,
  Flame,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { Lightbox } from '../components/Lightbox';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { accreditationsData } from '../data/accreditations';

const serviceIcons: Record<string, React.ReactNode> = {
  'new-build': <Building2 className="w-6 h-6 text-brand" />,
  'extensions': <Maximize2 className="w-6 h-6 text-brand" />,
  'loft-conversions': <HomeIcon className="w-6 h-6 text-brand" />,
  'basement-structural': <ShieldAlert className="w-6 h-6 text-brand" />,
  'refurbishment': <Wrench className="w-6 h-6 text-brand" />,
  'kitchens-bathrooms': <Sparkles className="w-6 h-6 text-brand" />,
  'groundworks-roofing-external': <Hammer className="w-6 h-6 text-brand" />,
};

export const Home: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState<string[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const featuredProject = projectsData[0]; // Battersea Wrap-Around
  const featuredProjects = projectsData.slice(0, 3);

  const openProjectLightbox = (project: typeof featuredProject, idx = 0) => {
    setActiveGallery(project.galleryImages);
    setLightboxIndex(idx);
    setLightboxTitle(project.title);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="SARQ LTD | Domestic Construction, Extensions & Renovations London"
        description="London domestic construction contractor. Bespoke home extensions, loft conversions, structural basements and full house refurbishments in Battersea, Wandsworth, Clapham and South West London."
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-surface-deep text-surface overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 border-b border-white/10">
        {/* Blueprint grid texture background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />

        {/* Ambient brand glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>STARQ LTD</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                We Turn Up. <br />
                We Finish On Time.
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed max-w-xl">
                SARQ LTD is an engineered domestic building contractor in South West London. Specialising in structural extensions, loft conversions, subterranean basements and back-to-brick restorations with fixed-budget JCT contracts and 10-year warranties.
              </p>

              {/* Hero CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  pill
                  to="/request-a-quote"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Technical Survey & Quote
                </Button>

                <Button
                  variant="white"
                  size="lg"
                  pill
                  to="/projects"
                >
                  View Recent Projects
                </Button>
              </div>
            </motion.div>

            {/* Right Live-Site Visual (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-md border-2 border-white/20 overflow-hidden shadow-2xl bg-surface-deep group">
                <img
                  src="/photos/image copy.png"
                  alt="SARQ Construction Live Site - Bespoke Residential Extension"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/photos/image.png';
                  }}
                />

                {/* Floating Site Spec Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-ink/90 backdrop-blur-md p-4 rounded border border-white/20 text-xs font-mono text-surface">
                  <div className="flex justify-between items-center text-accent font-bold mb-1">
                    <span>LIVE CASE STUDY</span>
                    <span>COMPLETED ON SCHEDULE</span>
                  </div>
                  <p className="text-[11px] text-surface/80 line-clamp-1 font-sans">
                    Victorian Wrap-Around with Cortizo Slimline Glazing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY TRUST STRIP */}
      <section className="bg-surface py-6 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2.5 rounded bg-brand/10 text-brand shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-ink">Company No. 17460532</h4>
                <p className="text-xs text-muted font-mono">Domestic SIC 41202</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2.5 rounded bg-brand/10 text-brand shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-ink">JCT Minor Works</h4>
                <p className="text-xs text-muted font-mono">Lump-Sum Contracts</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2.5 rounded bg-brand/10 text-brand shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-ink">Full Building Regs</h4>
                <p className="text-xs text-muted font-mono">Council & Approved Sign-off</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2.5 rounded bg-brand/10 text-brand shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase text-ink">Complimentary Survey</h4>
                <p className="text-xs text-muted font-mono">Written Itemised Scope</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES 3-UP FEATURE GRID */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Comprehensive Domestic Contracting"
            title="Engineered Residential Services"
            subtitle="Every domestic build is managed by an in-house site team with rigorous structural calculations, Party Wall management, and milestone stage payments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const categoryLabel = 
                service.slug === 'loft-conversions' ? 'CONVERSIONS' :
                service.slug === 'kitchens-bathrooms' ? 'RENOVATIONS' :
                service.slug === 'refurbishment' ? 'REFURBISHMENT' :
                service.slug === 'extensions' ? 'EXTENSIONS' :
                service.slug === 'new-build' ? 'NEW BUILD' :
                service.slug === 'basement-structural' ? 'BASEMENTS' : 'STRUCTURAL';

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Image Container with Floating Icon */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/photos/image.png';
                        }}
                      />
                      <div className="absolute top-3.5 left-3.5 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-amber-400 border border-white/10 shadow-lg">
                        {React.cloneElement(serviceIcons[service.slug] as React.ReactElement, {
                          className: 'w-5 h-5 text-amber-400',
                        })}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 space-y-4">
                      {/* Gold Eyebrow */}
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C5A059] block">
                        {categoryLabel}
                      </span>

                      {/* Main Title */}
                      <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-brand transition-colors">
                        {service.shortTitle || service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {service.description}
                      </p>

                      {/* Key Service Benefits */}
                      <div className="pt-2 space-y-2.5">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                          KEY SERVICE BENEFITS:
                        </h4>
                        <div className="space-y-2">
                          {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action CTA Button */}
                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      to={`/services/${service.slug}`}
                      className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-100/90 text-slate-900 font-semibold text-xs flex items-center justify-between transition-all group/btn shadow-sm hover:shadow"
                    >
                      <span className="font-heading font-bold text-slate-900">Learn More About Service</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" pill to="/services">
              View All 7 Building Specialisms & Scope →
            </Button>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDY (BEFORE / AFTER COMPARISON SLIDER) */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Verified Transformations"
            title="The Battersea Victorian Wrap-Around"
            subtitle="Drag the slider to compare the dated compartmentalised layout against SARQ's open-concept structural glass transformation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Before/After (7 cols) */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={featuredProject.beforeImage!}
                afterImage={featuredProject.afterImage!}
                beforeLabel="Before: Dark 1970s Galley Kitchen"
                afterLabel="SARQ: 42 m² Open-Plan Living"
              />
              <p className="text-xs text-center font-mono text-muted mt-2">
                ← Drag centre handle left and right to inspect structural transformation →
              </p>
            </div>

            {/* Case Study Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Card variant="elevated" accentBorder="brand" className="p-6 sm:p-8 bg-card">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand/10 text-brand font-bold uppercase">
                    Case Study #{featuredProject.postcode}
                  </span>
                  <span className="text-xs font-mono text-muted">{featuredProject.duration}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold uppercase mt-3 text-ink">
                  {featuredProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                  {featuredProject.summary}
                </p>

                <div className="mt-6 pt-4 border-t border-hairline space-y-2 text-xs font-mono">
                  {featuredProject.specifications.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex justify-between border-b border-hairline/40 pb-1.5">
                      <span className="text-muted">{spec.label}:</span>
                      <span className="font-semibold text-ink text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="md"
                    pill
                    to={`/projects/${featuredProject.slug}`}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full text-center"
                  >
                    Read Full Technical Case Study
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NUMBERED 8-STEP PROCESS RAIL PREVIEW */}
      <section className="py-20 bg-surface-deep text-surface border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="03"
            microLabel="Engineered Delivery"
            title="Our 8-Step Build Rail"
            subtitle="Every SARQ project follows a systematic, transparent construction rail from initial laser survey to statutory completion certificate."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Technical Site Survey', desc: 'Complimentary laser scan, Party Wall feasibility and structural appraisal.' },
              { num: '02', title: 'Fixed-Price Schedule', desc: 'Itemised lump-sum contract under JCT terms with fixed stage payments.' },
              { num: '03', title: 'Statutory Approvals', desc: 'Building Control, Thames Water build-over, and Party Wall awards secured.' },
              { num: '04', title: 'Site Mobilisation', desc: 'Protective dust screening, temporary propping, and ground excavations.' },
              { num: '05', title: 'Structural Steelwork', desc: 'Goalpost steels craned and bolted with laser deflection verification.' },
              { num: '06', title: 'Weathertight Envelope', desc: 'Glazing, roof lanterns, and high-performance flat roof membranes.' },
              { num: '07', title: 'M&E & Bespoke Joinery', desc: 'Part P electrics, Gas Safe plumbing, plastering, and cabinetry.' },
              { num: '08', title: 'Snagging & Handover', desc: 'Zero-snag sign-off, Building Control certificate & 10-year warranty.' },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 rounded bg-white/5 border border-white/10 flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-accent">{step.num}</span>
                  <h4 className="font-heading text-lg font-bold uppercase tracking-wide text-white mt-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-surface/75 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="accent" size="lg" pill to="/process">
              Explore Our Complete 8-Step Process Workflow →
            </Button>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED CLIENT TESTIMONIALS */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="04"
            microLabel="Homeowner Reviews"
            title="What South West London Clients Say"
            subtitle="Authentic feedback from homeowners whose extensions, lofts, and refurbishments we have built across SW11, SW4, SW18, and SW15."
          />

          <TestimonialCarousel maxItems={5} />

          <div className="mt-8 text-center">
            <Link
              to="/testimonials"
              className="text-xs font-mono font-bold uppercase tracking-wider text-brand hover:underline"
            >
              View All Client Reviews & Ratings →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. ACCREDITATIONS & STATUTORY WALL */}
      <section className="py-16 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="micro-label text-brand">Statutory Compliance</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-ink mt-1">
              Rigorous Building Standards & Accreditations
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {accreditationsData.slice(0, 6).map((acc, i) => (
              <div
                key={i}
                className="p-4 rounded bg-card border border-hairline text-center flex flex-col items-center justify-center hover:border-brand/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h5 className="font-heading text-xs font-bold uppercase text-ink">{acc.name}</h5>
                {acc.code && <span className="text-[10px] font-mono text-muted mt-0.5">{acc.code}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL QUOTE CTA BANNER */}
      <section className="py-20 bg-surface-deep text-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="micro-label text-accent">Ready to Build?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Book Your Free Technical Survey & Fixed-Price Quotation
          </h2>
          <p className="text-sm sm:text-base text-surface/80 max-w-2xl mx-auto leading-relaxed">
            Our Senior Estimator will visit your property, review architectural drawings or measure up on-site, and provide a fixed-price lump-sum proposal within 5 working days.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              pill
              to="/request-a-quote"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote Online
            </Button>
            <a
              href="tel:07448492982"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-white px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call 07448492982</span>
            </a>
          </div>

          <p className="text-xs font-mono text-surface/60 pt-4">
            SARQ LTD • Registered office: Flat 51 Cranmer House, 60 Surrey Lane, London, SW11 3TB
          </p>
        </div>
      </section>

      {/* Lightbox for gallery images */}
      <Lightbox
        isOpen={lightboxOpen}
        images={activeGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setLightboxIndex(idx)}
        title={lightboxTitle}
      />
    </div>
  );
};
