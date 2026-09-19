import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  HelpCircle,
  Filter,
  CheckCircle2,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Accordion, AccordionItemData } from '../components/Accordion';
import { faqsData } from '../data/faqs';

type CategoryFilter = 'All' | 'Planning & Permissions' | 'Costs & Contracts' | 'Timescales & Process' | 'Guarantees & Insurance';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Planning & Permissions',
    'Costs & Contracts',
    'Timescales & Process',
    'Guarantees & Insurance',
  ];

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const accordionItems: AccordionItemData[] = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    badge: faq.category.split(' ')[0],
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-ink/85">{faq.answer}</p>
        <div className="pt-2 border-t border-hairline/40 flex justify-between items-center text-xs font-mono text-muted">
          <span>Category: {faq.category}</span>
          <Link to="/contact" className="text-brand hover:underline font-bold">
            Ask our Senior Estimator →
          </Link>
        </div>
      </div>
    ),
  }));

  return (
    <div className="flex flex-col">
      <SEO
        title="Frequently Asked Questions (FAQ) | SARQ LTD London"
        description="Clear answers to domestic construction questions regarding Planning Permission, Party Wall awards, JCT contract costs, and build timescales in London."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="micro-label text-accent">Knowledge Base</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
            Transparent answers regarding London domestic building regulations, Party Wall procedures, fixed lump-sum contracts, and realistic timescales.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-muted" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. Party Wall, Permitted Development, JCT, Thames Water)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-card text-ink font-sans text-sm border-2 border-white/20 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-muted hover:text-ink"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Pills Bar */}
      <section className="bg-card border-b border-hairline py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-muted mr-2 hidden sm:inline-flex items-center gap-1">
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

      {/* Main Accordion List */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {accordionItems.length === 0 ? (
            <div className="text-center py-16 bg-card rounded border border-hairline p-8">
              <HelpCircle className="w-10 h-10 text-muted mx-auto mb-3" />
              <p className="font-heading text-lg font-bold uppercase text-ink">
                No matching answers found for "{searchQuery}"
              </p>
              <p className="text-xs text-muted mt-1">
                Try searching for general terms like "planning", "steel", or "warranty".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-xs font-mono text-brand underline font-bold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-mono text-muted mb-2">
                Showing {accordionItems.length} questions
              </div>
              <Accordion items={accordionItems} allowMultiple defaultOpenId="planning-permission-vs-permitted-dev" />
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-card border-t border-hairline text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="micro-label text-brand">Direct Contact</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-ink">
            Have a Specific Project Question?
          </h3>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Our Senior Estimators and Structural Engineers are happy to review your property requirements.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button variant="primary" size="lg" pill to="/request-a-quote">
              Request Free Site Survey
            </Button>
            <a
              href="tel:07448492982"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-ink px-6 py-3 rounded-full border border-hairline hover:border-brand transition-colors"
            >
              <Phone className="w-4 h-4 text-brand" /> 07448492982
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
