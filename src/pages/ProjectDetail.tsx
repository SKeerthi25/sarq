import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Star,
  Eye,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Lightbox } from '../components/Lightbox';
import { projectsData } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const openLightboxAt = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col">
      <SEO
        title={`${project.title} | London Case Study | SARQ LTD`}
        description={project.summary}
        ogImage={project.coverImage}
      />

      {/* Top Breadcrumb & Return Nav */}
      <section className="bg-surface py-4 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono text-muted">
          <Link to="/projects" className="inline-flex items-center gap-1.5 hover:text-brand transition-colors font-bold">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
          </Link>
          <div className="hidden sm:block text-ink font-semibold">
            {project.category}
          </div>
        </div>
      </section>

      {/* Project Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-mono text-accent">
              <span>{project.category.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
              {project.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-surface/80">
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded">
                <span className="text-surface/60">Budget Range: </span>
                <span className="text-accent font-bold">{project.budgetRange}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Slider (if available) */}
      {project.beforeImage && project.afterImage && (
        <section className="py-16 bg-surface border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="01"
              microLabel="Visual Comparison"
              title="Before & After Transformation"
              subtitle="Drag the slider to inspect the exact spatial transformation achieved by SARQ LTD."
            />

            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel="Original Site State"
                afterLabel="SARQ Practical Completion"
              />
            </div>
          </div>
        </section>
      )}

      {/* Case Study Deep Dive: Brief, Challenge, Solution */}
      <section className="py-20 bg-card border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Client Brief */}
              <div>
                <span className="micro-label text-brand">01 // The Objective</span>
                <h2 className="font-heading text-2xl font-bold uppercase text-ink mt-1">
                  Client Brief & Architectural Vision
                </h2>
                <p className="text-sm sm:text-base text-ink/85 mt-3 leading-relaxed">
                  {project.clientBrief}
                </p>
              </div>

              {/* Structural Challenge */}
              <div className="p-6 rounded bg-surface border-l-4 border-brand">
                <span className="micro-label text-brand">02 // The Engineering Hurdle</span>
                <h3 className="font-heading text-xl font-bold uppercase text-ink mt-1">
                  Structural & Site Logistics Challenge
                </h3>
                <p className="text-xs sm:text-sm text-ink/85 mt-2 leading-relaxed">
                  {project.structuralChallenge}
                </p>
              </div>

              {/* SARQ Solution */}
              <div>
                <span className="micro-label text-brand">03 // Execution</span>
                <h2 className="font-heading text-2xl font-bold uppercase text-ink mt-1">
                  The SARQ Engineering Solution
                </h2>
                <p className="text-sm sm:text-base text-ink/85 mt-3 leading-relaxed">
                  {project.sarqSolution}
                </p>
              </div>

              {/* Client Quote Card (if available) */}
              {project.clientQuote && (
                <div className="p-6 sm:p-8 rounded bg-surface-deep text-surface relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base italic text-surface/90 leading-relaxed">
                    "{project.clientQuote.text}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-accent">
                    <strong>{project.clientQuote.author}</strong>
                  </div>
                </div>
              )}
            </div>

            {/* Right Specification Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              <Card variant="elevated" className="p-6 sm:p-8 bg-card border-2 border-hairline space-y-4">
                <h3 className="font-heading text-xl font-bold uppercase text-ink border-b border-hairline pb-3">
                  Technical Specifications Table
                </h3>

                <div className="space-y-3 text-xs font-mono">
                  {project.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between border-b border-hairline/40 pb-2">
                      <span className="text-muted">{spec.label}:</span>
                      <span className="font-bold text-ink text-right max-w-[200px]">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <Button variant="primary" size="lg" pill to="/request-a-quote" className="w-full text-center">
                    Request Quote for Similar Build
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid with Lightbox */}
      {project.galleryImages.length > 0 && (
        <section className="py-20 bg-surface border-b border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              number="02"
              microLabel="On-Site Photography"
              title="Project High-Resolution Gallery"
              subtitle="Click any photograph to view high-resolution full screen image with technical notes."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightboxAt(idx)}
                  className="group cursor-pointer rounded-md overflow-hidden border border-hairline bg-surface-deep relative aspect-[4/3] shadow-sm hover:shadow-lg transition-all"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/photos/image.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-ink/80 text-accent">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={project.galleryImages}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setActiveImageIndex(idx)}
        title={project.title}
      />
    </div>
  );
};
