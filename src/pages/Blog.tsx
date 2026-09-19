import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Filter,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { blogData } from '../data/blog';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cost Guides', 'Planning & Permits', 'Design & Architecture'];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return blogData;
    return blogData.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
      <SEO
        title="London Domestic Construction & Planning Guides | SARQ LTD"
        description="Authoritative guides on London extension costs, Party Wall Act 1996 compliance, Permitted Development rights, and loft conversion comparisons."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Knowledge Hub</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              London Building & Planning Guides
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              Technical guides, cost breakdowns, and statutory advice written by our in-house Estimating and Structural Engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Category Bar */}
      <section className="bg-card border-b border-hairline py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand text-white shadow-sm'
                  : 'bg-surface text-ink hover:bg-hairline/60 border border-hairline'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                variant="interactive"
                className="p-0 overflow-hidden bg-card flex flex-col justify-between group hover:border-brand/40 transition-all"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-deep">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-ink/90 text-accent text-[11px] font-mono px-2.5 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-mono text-muted mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brand" /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold uppercase text-ink group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-hairline/60">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded bg-surface hover:bg-brand hover:text-white transition-colors text-xs font-heading font-bold uppercase text-ink border border-hairline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
