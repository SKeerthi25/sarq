import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck2,
  Flame,
  Zap,
  Umbrella,
  Recycle,
  Award,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { accreditationsData } from '../data/accreditations';

export const Accreditations: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Accreditations, Building Regs & Compliance | SARQ LTD"
        description="Statutory accreditations, insurance policies, Health & Safety statements, and Building Regulations compliance standards for SARQ LTD in London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Statutory Compliance</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              Accreditations, Standards & Legal Compliance
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              We operate under rigorous UK safety, environmental, and structural building frameworks. Every aspect of your project is insured, inspected, and certified.
            </p>
          </div>
        </div>
      </section>

      {/* 1. ACCREDITATIONS BADGE GRID */}
      <section className="py-20 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            microLabel="Accreditations Wall"
            title="Certified Trade & Statutory Memberships"
            subtitle="Verified credentials protecting London homeowners during structural and domestic renovations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditationsData.map((acc, idx) => (
              <Card key={idx} variant="elevated" accentBorder="brand" className="p-6 sm:p-8 bg-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-brand/10 text-brand">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    {acc.code && (
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-hairline text-muted">
                        {acc.code}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-ink">
                    {acc.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                    {acc.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hairline text-xs font-mono text-ink/85">
                  <strong className="text-brand block uppercase text-[11px] mb-1">Homeowner Benefit:</strong>
                  <span>{acc.benefitToHomeowner}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STATUTORY POLICIES: H&S, CDM 2015, PARTY WALL & WASTE */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            microLabel="Legal Compliance"
            title="Health & Safety, CDM 2015 & Environmental Policy"
            subtitle="How SARQ LTD manages site welfare, neighbour protections, and sustainable waste recycling."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="default" className="p-8 bg-surface space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-brand" />
                <h3 className="font-heading text-xl font-bold uppercase text-ink">
                  CDM 2015 Principal Contractor Duties
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Under the Construction (Design and Management) Regulations 2015, SARQ LTD acts as Principal Contractor on all domestic builds. We produce Construction Phase Plans (CPP), implement site-specific Risk Assessments and Method Statements (RAMS), and maintain daily site induction logs.
              </p>
              <div className="space-y-1.5 text-xs font-mono text-ink/80 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> SMSTS-qualified Site Managers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Daily toolbox talks & PPE enforcement
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Fully secured site perimeters & dust extraction
                </div>
              </div>
            </Card>

            <Card variant="default" className="p-8 bg-surface space-y-4">
              <div className="flex items-center gap-3">
                <Recycle className="w-6 h-6 text-brand" />
                <h3 className="font-heading text-xl font-bold uppercase text-ink">
                  Waste Carrier Duty of Care (CBDU491028)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                SARQ LTD is registered with the Environment Agency as an Upper Tier Waste Carrier (Reg No. CBDU491028). We ensure 100% of concrete spoil, bricks, and structural timber are processed through licensed transfer stations with statutory waste transfer receipts.
              </p>
              <div className="space-y-1.5 text-xs font-mono text-ink/80 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Zero illegal fly-tipping liability for homeowners
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Over 85% site aggregate recycling target
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Hazardous waste (e.g. historic asbestos) handled by licensed specialists
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Have Questions About Planning, Party Wall, or Regs?
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            Our compliance team will review your local borough requirements during a complimentary site consultation.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Book Technical Consultation
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Contact Compliance Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
