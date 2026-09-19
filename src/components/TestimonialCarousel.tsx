import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

export const TestimonialCarousel: React.FC<{ maxItems?: number }> = ({ maxItems = 6 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = testimonialsData.slice(0, maxItems);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card variant="elevated" accentBorder="brand" className="p-8 sm:p-12 bg-card relative">
        <div className="absolute top-6 right-8 text-brand/10 pointer-events-none">
          <Quote className="w-24 h-24" />
        </div>

        <div className="relative z-10">
          {/* Star rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-xs font-mono font-bold text-muted uppercase">
              5.0 Verified Homeowner Review
            </span>
          </div>

          {/* Review text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-ink font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {current.verified && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Verified Client Review
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted font-mono mt-0.5">
                    {current.projectType}
                  </p>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted mr-2">
                    {currentIndex + 1} / {items.length}
                  </span>
                  <button
                    onClick={prevReview}
                    className="p-2.5 rounded-full border border-hairline hover:border-brand hover:text-brand text-ink transition-colors focus:outline-none"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2.5 rounded-full border border-hairline hover:border-brand hover:text-brand text-ink transition-colors focus:outline-none"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
};
