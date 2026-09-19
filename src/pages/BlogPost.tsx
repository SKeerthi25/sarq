import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
  Share2,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { blogData } from '../data/blog';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.filter((p) => p.slug !== slug);

  return (
    <div className="flex flex-col">
      <SEO
        title={`${post.title} | SARQ LTD Guides`}
        description={post.excerpt}
        ogType="article"
        ogImage={post.coverImage}
      />

      {/* Top Breadcrumb */}
      <section className="bg-surface py-4 border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-muted">
          <Link to="/blog" className="inline-flex items-center gap-1.5 hover:text-brand transition-colors font-bold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Guides Index
          </Link>
          <span className="text-brand font-semibold">{post.category}</span>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-16 bg-card border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-mono font-bold">
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-ink leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted pt-2 border-b border-hairline pb-6">
              <span className="flex items-center gap-1.5 text-ink font-semibold">
                <User className="w-3.5 h-3.5 text-brand" /> {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand" /> {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-md overflow-hidden border border-hairline shadow-md aspect-[16/9] bg-surface-deep">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-ink/90 leading-relaxed font-sans text-sm sm:text-base">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-ink pt-4 border-t border-hairline/60">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <div className="p-5 rounded bg-surface border-l-4 border-brand text-xs sm:text-sm font-mono text-ink my-6">
                    <strong>Expert Takeaway:</strong> {section.callout}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Author Box & Survey CTA */}
          <div className="mt-12 pt-8 border-t border-hairline">
            <Card variant="elevated" className="p-6 sm:p-8 bg-surface-deep text-surface flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="micro-label text-accent">Technical Consultation</span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Planning a Project in South West London?
                </h3>
                <p className="text-xs sm:text-sm text-surface/80 max-w-md">
                  Speak with our Estimating Directorate for a complimentary on-site appraisal and fixed lump-sum contract quotation.
                </p>
              </div>
              <Button variant="accent" size="lg" pill to="/request-a-quote" className="shrink-0">
                Book Free Survey
              </Button>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Guides */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-2xl font-bold uppercase text-ink mb-6">
              Related Construction & Planning Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Card key={rel.id} variant="default" className="p-6 bg-card flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-brand font-bold uppercase">{rel.category}</span>
                    <h4 className="font-heading text-lg font-bold uppercase text-ink mt-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-muted mt-2 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-hairline">
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-xs font-heading font-bold uppercase text-brand hover:underline flex items-center justify-between"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
