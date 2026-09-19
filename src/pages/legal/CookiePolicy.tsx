import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Card } from '../../components/Card';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Cookie Policy | SARQ LTD London"
        description="Cookie policy explaining how SARQ LTD uses essential and performance cookies on www.sarqcons.co.uk."
      />

      <section className="bg-surface-deep text-surface py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline mb-4">
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-surface/70 mt-2">
            SARQ LTD • Last Updated: January 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="default" className="p-8 sm:p-12 bg-card space-y-8 text-ink/90 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work properly, remember your preferences, and provide anonymous performance data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                2. How We Use Cookies
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded bg-surface border border-hairline">
                  <h4 className="font-heading text-base font-bold uppercase text-ink">Essential Technical Cookies</h4>
                  <p className="text-xs text-muted mt-1">
                    Necessary for core website navigation, quote calculator state management, and theme preferences (light/dark mode). These cannot be disabled.
                  </p>
                </div>

                <div className="p-4 rounded bg-surface border border-hairline">
                  <h4 className="font-heading text-base font-bold uppercase text-ink">Consent & Preference Storage</h4>
                  <p className="text-xs text-muted mt-1">
                    We store your cookie acceptance choice in local storage (<code>sarq_cookie_consent</code>) so you are not repeatedly prompted on subsequent visits.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-ink mb-3">
                3. Managing Your Cookies
              </h2>
              <p>
                You can configure or delete cookies through your browser settings at any time. For more information, please refer to your browser's help documentation.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
