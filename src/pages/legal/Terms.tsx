import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Card } from '../../components/Card';

export const Terms: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Terms of Business | Domestic Contracting | SARQ LTD"
        description="Standard terms of business and contracting guidelines for SARQ LTD domestic building works in London."
      />

      <section className="bg-surface-deep text-surface py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
            Terms of Business & Contracting
          </h1>
          <p className="text-xs font-mono text-surface/70 mt-2">
            SARQ LTD (Company No. 17460532) • Domestic Building Terms
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-8 sm:p-12 bg-card space-y-8 text-ink/90 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                1. Quotations & Contract Formation
              </h2>
              <p>
                All preliminary cost calculator outputs and budget estimates on this website are indicative. A binding contract is formed only upon mutual signature of a formal written JCT Minor Works Building Contract (or equivalent domestic building contract) accompanied by certified structural drawings, a detailed specification of works, and agreed milestone schedule.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                2. Variations & Unforeseen Works
              </h2>
              <p>
                Any changes to the agreed scope of works requested by the client or necessitated by concealed structural conditions during strip-out will be priced and agreed in writing via a formal Variation Order (VO) before any additional works proceed on site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                3. Milestone Stage Payments
              </h2>
              <p>
                Payments are made in arrears according to verified completion milestones (e.g. Foundations, Steelwork, Weathertight Shell, First Fix, Plastering, Second Fix, and Practical Completion). A standard retention (typically 2.5%–5%) is held until final snagging resolution.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                4. Statutory Approvals & Inspections
              </h2>
              <p>
                SARQ LTD coordinates all statutory site visits with Local Authority Building Control or appointed private Approved Inspectors. Practical completion is deemed achieved upon issuance of the official Building Regulations Completion Certificate.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                5. Guarantees & Defects Liability
              </h2>
              <p>
                All works are subject to a 12-month defects liability period from the date of practical completion, during which any settlement snags are rectified promptly. Major structural elements carry a 10-year structural warranty backed by UK insurance providers.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
