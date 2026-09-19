import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { contactFormSchema, ContactFormData } from '../lib/schemas';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceRequired: 'House Extension',
      postcode: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot && data.honeypot.length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Contact SARQ LTD | Battersea London Office"
        description="Contact SARQ LTD. Phone 07448492982, email cons@sarqltd.com. Registered office: Flat 51 Cranmer House, 60 Surrey Lane, London SW11 3TB."
      />

      {/* Hero Header */}
      <section className="bg-surface-deep text-surface py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <span className="micro-label text-accent">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mt-2 leading-tight">
            Contact SARQ Construction
          </h1>
          <p className="text-base sm:text-lg text-surface/85 mt-4 leading-relaxed">
            Discuss your domestic project, book a technical survey, or enquire about active tenders across South West London.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Card variant="elevated" accentBorder="brand" className="p-6 sm:p-8 bg-card space-y-6">
                <div>
                  <span className="micro-label text-brand">Direct Contact</span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-ink mt-1">
                    Battersea Head Office
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    SARQ LTD (Company No. 17460532)
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm font-mono text-ink">
                  {/* Phone */}
                  <a
                    href="tel:07448492982"
                    className="flex items-start gap-3 p-3 rounded bg-surface hover:bg-brand hover:text-white transition-colors border border-hairline group"
                  >
                    <Phone className="w-5 h-5 text-brand group-hover:text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-muted group-hover:text-white/80">Direct Telephone / Office:</div>
                      <div className="font-bold text-sm">07448492982</div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/447448492982?text=Hello%20SARQ%20LTD%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white transition-colors border border-[#25D366]/30 text-[#128C7E] group"
                  >
                    <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-muted group-hover:text-white/80">Instant WhatsApp Chat:</div>
                      <div className="font-bold text-sm">07448492982</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:cons@sarqltd.com"
                    className="flex items-start gap-3 p-3 rounded bg-surface hover:bg-brand hover:text-white transition-colors border border-hairline group"
                  >
                    <Mail className="w-5 h-5 text-brand group-hover:text-white shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-muted group-hover:text-white/80">General & Tender Enquiries:</div>
                      <div className="font-bold text-sm">cons@sarqltd.com</div>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 rounded bg-surface border border-hairline">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] text-muted">Registered Office:</div>
                      <div className="font-normal text-xs text-ink/90 leading-snug">
                        Flat 51 Cranmer House, 60 Surrey Lane, London, England, SW11 3TB
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Operating Hours */}
                <div className="pt-4 border-t border-hairline">
                  <div className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-ink mb-2">
                    <Clock className="w-4 h-4 text-brand" /> Office & Site Hours
                  </div>
                  <div className="space-y-1 text-xs font-mono text-muted">
                    <div className="flex justify-between">
                      <span>Monday – Friday:</span>
                      <span className="font-semibold text-ink">07:30 – 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold text-ink">08:00 – 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday & Bank Holidays:</span>
                      <span>Closed (Emergency on-call)</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Statutory Note */}
              <div className="p-4 rounded bg-card border border-hairline text-xs font-mono text-muted">
                SARQ LTD — Registered in England & Wales. Company No. 17460532. SIC 41202.
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <Card variant="elevated" accentBorder="lime" className="p-8 sm:p-12 text-center bg-card">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-ink">
                    Message Dispatched to cons@sarqltd.com
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you for contacting SARQ LTD. Your message has been received by our Estimating Desk. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs font-mono text-brand underline font-bold"
                  >
                    Send Another Message
                  </button>
                </Card>
              ) : (
                <Card variant="elevated" className="p-6 sm:p-10 bg-card border-2 border-hairline shadow-md">
                  <div className="mb-6">
                    <span className="micro-label text-brand">Quick Message</span>
                    <h3 className="font-heading text-2xl font-bold uppercase text-ink mt-1">
                      Send an Enquiry to Our Estimating Desk
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Honeypot field */}
                    <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. Charlotte Miller"
                        />
                        {errors.name && (
                          <p className="text-xs text-brand mt-1 font-mono">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. charlotte@example.com"
                        />
                        {errors.email && (
                          <p className="text-xs text-brand mt-1 font-mono">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                          placeholder="e.g. 07448492982"
                        />
                        {errors.phone && (
                          <p className="text-xs text-brand mt-1 font-mono">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                          Service Required *
                        </label>
                        <select
                          {...register('serviceRequired')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink text-xs font-mono focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          <option value="House Extension">House Extension</option>
                          <option value="Loft Conversion">Loft Conversion</option>
                          <option value="Basement / Structural">Basement / Structural</option>
                          <option value="Full House Refurbishment">Full House Refurbishment</option>
                          <option value="New Build Construction">New Build Construction</option>
                          <option value="Kitchen & Bathroom">Kitchen & Bathroom</option>
                          <option value="Groundworks & Roofing">Groundworks & Roofing</option>
                          <option value="General Technical Enquiry">General Technical Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                          Project Postcode *
                        </label>
                        <input
                          type="text"
                          {...register('postcode')}
                          className="w-full p-3 rounded border border-hairline bg-surface text-ink font-mono text-sm focus:outline-none focus:ring-1 focus:ring-brand uppercase"
                          placeholder="e.g. SW11 3TB"
                        />
                        {errors.postcode && (
                          <p className="text-xs text-brand mt-1 font-mono">{errors.postcode.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-heading text-xs font-bold uppercase text-ink mb-1">
                        Project Details & Scope *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full p-3 rounded border border-hairline bg-surface text-ink text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                        placeholder="Tell us about your project, target start date, or if you already have planning permission..."
                      />
                      {errors.message && (
                        <p className="text-xs text-brand mt-1 font-mono">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        pill
                        isLoading={isSubmitting}
                        className="w-full justify-center"
                        icon={<Send className="w-4 h-4" />}
                      >
                        Send Enquiry to SARQ Desk
                      </Button>
                    </div>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Embed (SW11 Battersea) */}
      <section className="py-12 bg-card border-t border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border border-hairline overflow-hidden shadow-md">
            <iframe
              title="SARQ LTD Registered Office Map Battersea SW11"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.4957597176527!2d-0.17042572338497645!3d51.47844007180629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760573dc081691%3A0xc3ce1a546051df67!2s60%20Surrey%20Ln%2C%20London%20SW11%203TB%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
