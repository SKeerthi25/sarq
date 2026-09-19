import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Radio,
  SlidersHorizontal,
  Table,
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { SectionHeading } from '../../components/SectionHeading';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';

export const BasementStructural: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'basement-structural')!;
  const basementProject = projectsData.find((p) => p.category === 'Basement')!;

  const technicalSpecs = [
    { component: 'Excavation & Pin Underpinning', standard: 'BS 8004:2015 (Foundations)', details: 'Sequential 1.0m pins poured in C35 waterproof concrete with dry-pack non-shrink mortar' },
    { component: 'Waterproofing Barrier System', standard: 'BS 8102:2022 (Type C Tanking)', details: 'Delta MS500 Cavity Drain Membrane to walls & MS20 to floor with sealed perimeter aqua-channels' },
    { component: 'Submersible Sump Station', standard: 'Dual Pump Automatic Station', details: 'Twin foul/groundwater pumps with battery-backup inverter & cellular SMS failure dialler' },
    { component: 'Subterranean Ventilation', standard: 'Building Regs Part F (Ventilation)', details: 'Zehnder / Vent-Axia continuous Mechanical Ventilation with Heat Recovery (MVHR)' },
    { component: 'Structural Steelwork Framework', standard: 'Eurocode 3 / BS 5950', details: 'Fabricated Universal Columns (UC) and Universal Beams (UB) with laser deflection verification' },
    { component: 'Fire Safety & Escape Wells', standard: 'Building Regs Part B', details: 'Walk-on toughened structural glass lightwells with openable egress windows & smoke detection' },
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title="Basements & Structural Underpinning London | SARQ LTD"
        description="Complex subterranean basement excavations, concrete underpinning, and loadbearing structural wall removals in Putney, Battersea, Fulham, and South West London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
                <ShieldAlert className="w-4 h-4 text-accent" />
                <span>HEAVY STRUCTURAL ENGINEERING • BS 8102 WATERPROOFING</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button variant="accent" size="lg" pill to="/request-a-quote">
                  Consult Structural Engineering Team
                </Button>
                <Button variant="white" size="lg" pill to="/quote-cost-guide">
                  Estimate Basement Cost
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-accent border-b border-white/10 pb-2">
                  Basement Engineering Metrics
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Typical Excavation Duration:</span>
                    <span className="text-white font-bold">{service.durationAvg}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Starting Baseline:</span>
                    <span className="text-accent font-bold">From {service.startingCost}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-surface/60">Waterproofing Code:</span>
                    <span>BS 8102:2022 (Type C)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-surface/60">Pump System:</span>
                    <span className="text-emerald-400 font-bold">Dual Sump + Battery Backup</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPEC-HEAVY TECHNICAL SPECIFICATIONS TABLE */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Engineering Rigor"
            title="Heavy Structural Engineering Specification"
            subtitle="Commercial-grade calculations, calibrated temporary propping, and multi-redundant waterproofing protocols."
          />

          <div className="overflow-x-auto bg-surface rounded-md border border-hairline shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-deep text-surface border-b border-white/10 font-heading uppercase text-xs tracking-wider">
                  <th className="p-4 sm:p-5">Engineering Element</th>
                  <th className="p-4 sm:p-5">UK Code / Standard</th>
                  <th className="p-4 sm:p-5">Technical Specification & Execution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline text-xs sm:text-sm font-sans">
                {technicalSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-card transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-ink flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                      <span>{spec.component}</span>
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs font-semibold text-brand">{spec.standard}</td>
                    <td className="p-4 sm:p-5 text-xs text-muted font-mono">{spec.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. DARK BAND: WATERPROOFING & DUAL PUMP REDUNDANCY */}
      <section className="py-20 bg-surface-deep text-surface border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="micro-label text-accent">Zero Water Ingress Guarantee</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
                Type C Cavity Drain Membrane & Telemetric Sump Stations
              </h2>
              <p className="text-sm sm:text-base text-surface/80 leading-relaxed">
                We never rely on barrier tanking alone. Our engineered subterranean waterproofing captures and redirects all groundwater through sealed perimeter conduits into automatic dual pumps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-white/5 border border-white/10">
                  <Droplets className="w-5 h-5 text-accent mb-2" />
                  <h4 className="font-heading text-sm font-bold uppercase text-white">Dual Submersible Pumps</h4>
                  <p className="text-xs text-surface/70 mt-1">
                    Alternating duty cycles ensure neither pump is overloaded, with automatic switch-over during high water table conditions.
                  </p>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10">
                  <Radio className="w-5 h-5 text-accent mb-2" />
                  <h4 className="font-heading text-sm font-bold uppercase text-white">SMS Telemetry Dialler</h4>
                  <p className="text-xs text-surface/70 mt-1">
                    24/7 automated alerts sent to both SARQ maintenance and homeowner in the unlikely event of mains power interruption.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card variant="bordered" className="border-white/20 p-6 bg-black/40 text-surface space-y-4">
                <h3 className="font-heading text-lg font-bold uppercase text-white border-b border-white/10 pb-2">
                  Structural Knock-Throughs & Goalpost Steels
                </h3>
                <p className="text-xs text-surface/80 leading-relaxed">
                  Removing loadbearing chimney breasts, spine walls, or creating 8-metre unbroken spans requires certified temporary Acrow propping, needle beams, and precision padstones.
                </p>
                <div className="space-y-2 text-xs font-mono text-accent">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Chartered Structural Calculations (MIStructE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Laser Tilt & Vibration Monitoring During Works</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Building Control Direct Site Inspection Sign-Off</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-3xl font-bold uppercase text-ink">
            Require Structural Alterations or Basement Feasibility?
          </h3>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Our Senior Structural Engineer will review your property's load paths and ground conditions during an initial site appraisal.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="primary" size="lg" pill to="/request-a-quote">
              Book Structural Site Survey
            </Button>
            <Button variant="outline" size="lg" pill to="/contact">
              Speak to Contracts Manager
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
