import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Filter,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Extension', 'Loft', 'Refurbishment', 'Basement', 'Kitchen'];

  const filteredTestimonials = useMemo(() => {
    if (selectedFilter === 'All') return testimonialsData;
    return testimonialsData.filter((t) =>
      t.projectType.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  }, [selectedFilter]);

  return (
    <div className="flex flex-col">
      <SEO
        title="Client Reviews & Testimonials | SARQ LTD London"
        description="Read authentic verified homeowner reviews for domestic extensions, loft conversions, and refurbishments carried out by SARQ LTD in South West London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Homeowner Experiences</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              Verified Client Reviews & Feedback
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              We take immense pride in our reputation. Discover why homeowners in Battersea, Wandsworth, Clapham, Putney, and Wimbledon recommend SARQ LTD.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-card border-b border-hairline py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by Project:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedFilter === f
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-surface text-ink hover:bg-hairline/60 border border-hairline'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((review) => (
              <Card
                key={review.id}
                variant="elevated"
                accentBorder="brand"
                className="p-8 bg-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                      <span className="font-mono text-xs font-bold text-ink ml-1.5">5.0</span>
                    </div>

                    {review.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Verified Client
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-ink font-medium leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-mono text-muted font-semibold">
                      {review.projectType}
                    </p>
                  </div>

                  {review.projectSlug && (
                    <Link
                      to={`/projects/${review.projectSlug}`}
                      className="text-xs font-heading font-bold uppercase text-brand hover:underline flex items-center gap-1 self-start sm:self-auto"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Ready to Experience SARQ's Professional Standard?
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            Book a complimentary site survey and fixed-price quotation for your London domestic project.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Request Your Free Quote
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Contact Battersea Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
