import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  ArrowRight,
  Camera,
  Maximize2,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Lightbox } from '../components/Lightbox';
import { projectsData } from '../data/projects';
import { galleryPhotos, GalleryPhoto } from '../data/galleryPhotos';

export const Projects: React.FC = () => {
  // On-Site Photo Gallery Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const allPhotoSrcs = useMemo(() => {
    return galleryPhotos.map((p) => p.src);
  }, []);

  const openLightboxAt = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Domestic Construction Projects & Case Studies London | SARQ LTD"
        description="Explore our completed London residential projects: bespoke home extensions, loft conversions, basements, and on-site construction gallery in Battersea, Wandsworth, and Clapham."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="micro-label text-accent">Portfolio of Work</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
              London Project Case Studies
            </h1>
            <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
              Every project represents our core ethos: turn up on time, engineer with uncompromising standards, and deliver on budget. Explore real London transformations and live site photography below.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Main Case Studies Grid */}
      <section className="py-16 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="micro-label text-brand">Featured Case Studies</span>
            <h2 className="text-3xl font-extrabold uppercase text-ink mt-1">
              Bespoke Residential Transformations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card
                key={project.id}
                variant="interactive"
                className="p-0 overflow-hidden bg-card flex flex-col justify-between group hover:border-brand/40 transition-all"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-deep">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/photos/image.png';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-ink/90 backdrop-blur-sm text-accent text-[11px] font-mono px-2.5 py-1 rounded border border-accent/20">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold uppercase text-ink group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-hairline space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-muted">Budget Range:</span>
                        <span className="font-bold text-brand">{project.budgetRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Year Built:</span>
                        <span className="text-ink">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded bg-surface hover:bg-brand hover:text-white transition-colors text-xs font-heading font-bold uppercase text-ink border border-hairline"
                  >
                    <span>View Case Study Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. On-Site Real Work Photo Gallery (33 Live Photos) */}
      <section className="py-20 bg-card border-b border-hairline" id="site-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="micro-label text-brand">Real London Craftsmanship</span>
                <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[10px] font-mono font-bold">
                  33 Verified Site Photos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-ink mt-2">
                On-Site Construction & Progress Gallery
              </h2>
              <p className="text-sm text-muted mt-2 max-w-2xl">
                Browse unedited, direct site photography from our active and recently completed residential builds across South West London. Click any photo for high-resolution inspection.
              </p>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightboxAt(index)}
                className="group relative rounded-md border border-hairline bg-surface overflow-hidden cursor-pointer hover:border-brand transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-deep">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating Micro Phase Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
                    {photo.phase}
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-brand text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-3.5 bg-card border-t border-hairline">
                  <h4 className="font-heading text-xs font-bold uppercase text-ink line-clamp-1 group-hover:text-brand transition-colors">
                    {photo.title}
                  </h4>
                  <div className="text-[11px] font-mono text-brand font-semibold mt-1">
                    {photo.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Footer Note */}
          <div className="mt-10 p-4 rounded bg-surface border border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-brand" />
              <span>All photographs taken on live domestic construction sites managed by SARQ LTD.</span>
            </div>
            <span className="text-ink font-bold">
              Showing all {galleryPhotos.length} photos
            </span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={allPhotoSrcs}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(idx) => setCurrentPhotoIndex(idx)}
        title={galleryPhotos[currentPhotoIndex]?.title}
      />

      {/* Bottom CTA */}
      <section className="py-16 bg-surface-deep text-surface text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="micro-label text-accent">Have a Similar Project?</span>
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Discuss Your Property With Our Senior Estimator
          </h3>
          <p className="text-sm text-surface/80 max-w-xl mx-auto">
            We provide complimentary site feasibility visits and itemised fixed-price proposals across all London postcodes within the M25.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button variant="accent" size="lg" pill to="/request-a-quote">
              Request Project Quote
            </Button>
            <Button variant="white" size="lg" pill to="/contact">
              Contact Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
