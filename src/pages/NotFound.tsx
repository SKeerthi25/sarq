import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, ArrowRight, Home, Compass } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-surface">
      <SEO
        title="404 — Page Under Construction | SARQ LTD"
        description="The requested page could not be found on the SARQ LTD website."
      />

      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded bg-brand/10 text-brand mx-auto flex items-center justify-center border-2 border-brand/30">
          <HardHat className="w-10 h-10" />
        </div>

        <span className="font-mono text-xs font-bold text-accent bg-surface-deep px-3 py-1 rounded">
          ERROR 404 // STRUCTURAL ANOMALY
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-ink">
          This Plot is Not Yet Built
        </h1>

        <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
          The page or blueprint you are looking for has either been relocated, demolished, or hasn't received planning permission yet.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            pill
            to="/projects"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore London Case Studies
          </Button>

          <Button
            variant="outline"
            size="lg"
            pill
            to="/"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return to Homepage
          </Button>
        </div>

        <div className="pt-8 border-t border-hairline text-xs font-mono text-muted">
          Need immediate assistance? Call our Battersea office directly on{' '}
          <a href="tel:07448492982" className="text-brand font-bold underline">
            07448492982
          </a>
        </div>
      </div>
    </div>
  );
};
