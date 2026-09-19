import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { Button } from './Button';
import { Logo } from './Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
}) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  // Automatically close mobile menu on ANY route navigation
  useEffect(() => {
    onClose();
  }, [location.pathname, location.search, location.hash, location.key]);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Always completely unmount when closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
        aria-label="Close menu backdrop"
      />

      {/* Drawer */}
      <div
        className="relative z-10 w-full max-w-sm bg-surface-deep text-surface shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 h-full"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-surface-deep">
          <Logo variant="footer" size="sm" onClick={onClose} />

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded bg-white/10 text-white hover:bg-brand transition-colors focus:outline-none"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="px-5 py-6 space-y-1 flex-1">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            About SARQ
          </NavLink>

          {/* Services Accordion Submenu */}
          <div>
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider text-surface hover:bg-white/5 transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesExpanded ? 'rotate-180 text-accent' : 'text-muted'
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="pl-4 pr-2 space-y-1 my-1 border-l-2 border-brand/50 ml-4 animate-in fade-in duration-150">
                <NavLink
                  to="/services"
                  onClick={onClose}
                  className="block py-2 text-xs font-mono text-accent hover:text-white uppercase tracking-wider font-bold"
                >
                  → View All Services Hub
                </NavLink>
                {servicesData.map((svc) => (
                  <NavLink
                    key={svc.id}
                    to={`/services/${svc.slug}`}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-accent font-bold' : 'text-surface/80 hover:text-white'
                      }`
                    }
                  >
                    {svc.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Projects & Case Studies
          </NavLink>

          <NavLink
            to="/process"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Our 8-Step Process
          </NavLink>

          <NavLink
            to="/quote-cost-guide"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Cost Calculator & Pricing
          </NavLink>

          <NavLink
            to="/accreditations"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Accreditations & Regs
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Client Reviews
          </NavLink>

          <NavLink
            to="/areas-we-cover"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Areas We Cover
          </NavLink>

          <NavLink
            to="/faq"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded font-heading text-lg font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white' : 'text-surface hover:bg-white/5'
              }`
            }
          >
            Contact & Office
          </NavLink>
        </nav>

        {/* Drawer Footer Details */}
        <div className="p-5 border-t border-white/10 bg-black/20 space-y-4 shrink-0">
          <Button
            variant="accent"
            size="md"
            pill
            to="/request-a-quote"
            onClick={onClose}
            className="w-full justify-center"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Detailed Quote
          </Button>

          <div className="space-y-1.5 text-xs text-surface/70 font-mono">
            <a href="tel:07448492982" onClick={onClose} className="flex items-center gap-2 hover:text-accent">
              <Phone className="w-3.5 h-3.5 text-accent" /> 07448492982
            </a>
            <a href="mailto:cons@sarqltd.com" onClick={onClose} className="flex items-center gap-2 hover:text-accent">
              <Mail className="w-3.5 h-3.5 text-accent" /> cons@sarqltd.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" /> Battersea, London SW11
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
