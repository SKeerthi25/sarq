import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-deep text-surface border-t border-white/10 pt-16 pb-28 sm:pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Col 1: Brand & Statutory (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" size="lg" />

            <p className="text-xs sm:text-sm text-surface/80 leading-relaxed max-w-sm">
              Domestic building contractor specialising in high-specification residential extensions, loft conversions, structural basements, and back-to-brick restorations in London.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-surface/90">
              <a
                href="tel:07448492982"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" /> 07448492982
              </a>
              <a
                href="mailto:cons@sarqltd.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" /> cons@sarqltd.com
              </a>
              <div className="flex items-start gap-2 text-surface/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Flat 51 Cranmer House, 60 Surrey Lane, London, England, SW11 3TB</span>
              </div>
              <div className="flex items-start gap-2 text-surface/70 pt-1">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px]">
                  <div>Mon – Fri: <span className="text-white font-semibold">09:00 – 18:00</span></div>
                  <div>Sat – Sun: <span className="text-white font-semibold">10:00 – 16:00</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Building Services
            </h5>
            <ul className="space-y-2.5 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="text-surface/80 hover:text-accent transition-colors block"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div>
            <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Process
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="text-surface/80 hover:text-accent transition-colors">
                  About SARQ & Values
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-surface/80 hover:text-accent transition-colors">
                  Project Case Studies
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-surface/80 hover:text-accent transition-colors">
                  Our 8-Step Build Rail
                </Link>
              </li>
              <li>
                <Link to="/accreditations" className="text-surface/80 hover:text-accent transition-colors">
                  Building Regs & Standards
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-surface/80 hover:text-accent transition-colors">
                  Verified Client Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-surface/80 hover:text-accent transition-colors">
                  Planning Guides & Articles
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-surface/80 hover:text-accent transition-colors">
                  Subcontractor Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Statutory Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-surface/60">
          <p className="text-center md:text-left leading-relaxed">
            SARQ LTD — Registered in England & Wales. Company No. 17460532. Nature of business: Construction of domestic buildings (SIC 41202). Registered office: Flat 51 Cranmer House, 60 Surrey Lane, London, SW11 3TB.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 text-surface/80">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Business
            </Link>
            <span>•</span>
            <Link to="/cookie-policy" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link to="/accessibility" className="hover:text-accent transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
