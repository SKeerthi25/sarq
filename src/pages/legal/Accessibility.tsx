import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Card } from '../../components/Card';

export const Accessibility: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Accessibility Statement | WCAG AA Standards | SARQ LTD"
        description="Accessibility statement for SARQ LTD detailing compliance with WCAG 2.1 AA digital standards."
      />

      <section className="bg-surface-deep text-surface py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
            Accessibility Statement
          </h1>
          <p className="text-xs font-mono text-surface/70 mt-2">
            SARQ LTD • WCAG 2.1 Level AA Commitment
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-8 sm:p-12 bg-card space-y-8 text-ink/90 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                Our Accessibility Commitment
              </h2>
              <p>
                SARQ LTD is dedicated to ensuring digital accessibility for all users, including individuals with disabilities. We continually refine the user experience of our website in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                Key Accessibility Implementations
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Semantic HTML:</strong> Proper landmark elements (header, main, nav, footer, article) for seamless screen reader navigation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Contrast Ratios:</strong> Text and interactive UI elements satisfy WCAG AA minimum 4.5:1 contrast standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Full Keyboard Navigation:</strong> All modals, forms, and accordions are operable via keyboard with visible focus rings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Touch Targets:</strong> Mobile tap targets are engineered to a minimum of 44x44 pixels.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                Feedback & Contact
              </h2>
              <p>
                If you encounter any accessibility barrier on our website, please let us know by emailing{' '}
                <a href="mailto:cons@sarqltd.com" className="text-brand font-mono underline">
                  cons@sarqltd.com
                </a>{' '}
                or calling <strong>07448492982</strong>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
