import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Card } from '../../components/Card';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Privacy Policy | UK GDPR Compliance | SARQ LTD"
        description="Privacy policy and data protection statement for SARQ LTD (Company No. 17460532) in accordance with the UK Data Protection Act 2018 and UK GDPR."
      />

      <section className="bg-surface-deep text-surface py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
            UK GDPR Privacy & Data Policy
          </h1>
          <p className="text-xs font-mono text-surface/70 mt-2">
            SARQ LTD (Company No. 17460532) • Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-8 sm:p-12 bg-card space-y-8 text-ink/90 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                1. Data Controller Information
              </h2>
              <p>
                SARQ LTD ("we", "us", "our") is the data controller responsible for your personal data. Registered in England & Wales (Company No. 17460532). Registered office: Flat 51 Cranmer House, 60 Surrey Lane, London, England, SW11 3TB. Email contact for data enquiries:{' '}
                <a href="mailto:cons@sarqltd.com" className="text-brand font-mono underline">
                  cons@sarqltd.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                2. Information We Collect
              </h2>
              <p>
                When you request a quotation, site survey, or contact us, we collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm font-mono text-muted">
                <li>Contact details (Full Name, Email Address, Telephone / WhatsApp Number)</li>
                <li>Property details (Street Address, Postcode, Property Type, Planning Status)</li>
                <li>Project documents (Architectural drawings, structural calculations, photos)</li>
                <li>Technical website analytics data (IP address, browser type via essential cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                3. Lawful Basis for Processing
              </h2>
              <p>
                We process your personal information under the lawful bases of:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li><strong>Contractual Necessity:</strong> To provide itemised quotations, conduct technical site surveys, and execute JCT domestic building contracts.</li>
                <li><strong>Legal Obligation:</strong> Compliance with UK Building Regulations, CDM 2015 safety legislation, and statutory Party Wall Award notifications.</li>
                <li><strong>Legitimate Interests:</strong> Responding to client enquiries and preventing spam/fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                4. Data Sharing & Third Parties
              </h2>
              <p>
                We do not sell or rent personal information to third parties. We share data only with essential statutory bodies and verified project partners:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li>Local Authority Building Control departments and licensed private Approved Inspectors</li>
                <li>Chartered Structural Engineers (MIStructE) and Party Wall Surveyors appointed for your build</li>
                <li>Thames Water for Section 106 Build-Over agreements</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                5. Your Statutory Rights (UK GDPR)
              </h2>
              <p>
                Under the UK Data Protection Act 2018, you have the right to access, rectify, or request erasure of your personal data held by SARQ LTD. To exercise your rights, please email{' '}
                <a href="mailto:cons@sarqltd.com" className="text-brand font-mono underline">
                  cons@sarqltd.com
                </a>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
