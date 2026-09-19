import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  Droplet,
  Eye,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Lightbox } from '../../components/Lightbox';
import { servicesData } from '../../data/services';

export const KitchensBathrooms: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'kitchens-bathrooms')!;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryItems = [
    {
      title: 'Calacatta Gold Island Kitchen',
      category: 'Kitchen Fit-out',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      specs: 'Waterfall mitred quartz, Bora Pure induction venting, handmade handleless cabinetry',
    },
    {
      title: 'Boutique Spa Wet Room',
      category: 'Bathroom Fit-out',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      specs: 'Schluter waterproof tanking, ceiling flush rainfall shower, concealed Lusso brassware',
    },
    {
      title: 'Open-Plan Dining & Breakfast Bar',
      category: 'Kitchen Fit-out',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      specs: 'Herringbone timber flooring, integrated wine cooler, Quooker boiling water tap',
    },
    {
      title: 'Minimalist Monolithic En-Suite',
      category: 'Bathroom Fit-out',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      specs: 'Micro-cement wall finish, freestanding stone resin bathtub, LED niche lighting',
    },
  ];

  const allImages = galleryItems.map((g) => g.image);

  return (
    <div className="flex flex-col">
      <SEO
        title="Bespoke Kitchens & Luxury Bathrooms London | SARQ LTD"
        description="High-specification domestic kitchen installations and luxury spa bathrooms in Battersea, Wandsworth, Wimbledon, and South West London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>ARCHITECTURAL FIT-OUT • BESPOKE FINISHES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Book Kitchen & Bathroom Survey
                </Button>
                <Button variant="white" size="lg" pill to="/quote-cost-guide">
                  Estimate Fit-out Costs
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  Fit-Out Highlights
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Typical Installation:</span>
                    <span className="text-white font-bold">{service.durationAvg}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Starting Baseline:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Waterproofing:</span>
                    <span>Schluter-DITRA Wet Tanking</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Worktops:</span>
                    <span>Precision Laser Templating</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT-STYLE GALLERY GRID */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Architectural Gallery"
            title="Product-Style Portfolio & Fit-Out Specifications"
            subtitle="Click on any installation to inspect high-resolution imagery and material details."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveImageIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group cursor-pointer rounded-md border border-hairline bg-card overflow-hidden hover:border-brand/40 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-deep">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-ink/80 text-white p-3 rounded-full backdrop-blur-sm">
                      <Eye className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-ink/90 text-accent text-[11px] font-mono px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold uppercase text-ink group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-muted mt-2 border-t border-hairline pt-3">
                    {item.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS & TANKING */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Engineered Installation"
            title="Schluter Wet Room Tanking & Water Boosting"
            subtitle="Never worry about concealed leaks. Every wet area is sealed with decoupling membranes and tested under pressure."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 bg-surface">
              <Droplet className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                100% Watertight Tanking
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Schluter-KERDI waterproof membrane applied to all shower enclosures, niches, and floor substrates before tile adhesive application.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-surface">
              <Flame className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                High-Flow Water Pressure
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Unvented Megaflo cylinders or Stuart Turner monsoon pumps ensure powerful dual-shower water flow without pressure drops.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-surface">
              <CheckCircle2 className="w-6 h-6 text-brand mb-3" />
              <h4 className="font-heading text-lg font-bold uppercase text-ink">
                Laser Templating & Mitres
              </h4>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Digital 3D laser templating for quartz and granite worktops ensures seamless flush waterfall ends and precision sink cut-outs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setActiveImageIndex(idx)}
        title="Kitchen & Bathroom Gallery"
      />
    </div>
  );
};
