import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';
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
        className="relative z-10 w-full max-w-sm bg-white text-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 h-full border-l border-slate-200"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <Logo variant="header" size="sm" onClick={onClose} />

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors focus:outline-none"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="px-5 py-6 space-y-1 flex-1 bg-white">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
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
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 hover:text-brand transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesExpanded ? 'rotate-180 text-brand' : 'text-slate-400'
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="pl-4 pr-2 space-y-1 my-1 border-l-2 border-brand ml-4 animate-in fade-in duration-150">
                <NavLink
                  to="/services"
                  onClick={onClose}
                  className="block py-2 text-xs font-mono text-brand hover:underline uppercase tracking-wider font-bold"
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
                        isActive ? 'text-brand font-bold' : 'text-slate-600 hover:text-brand hover:bg-slate-50 rounded px-2'
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
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Projects & Case Studies
          </NavLink>

          <NavLink
            to="/process"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Our 8-Step Process
          </NavLink>

          <NavLink
            to="/accreditations"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Accreditations & Regs
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Client Reviews
          </NavLink>

          <NavLink
            to="/faq"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg font-heading text-base font-bold uppercase tracking-wider transition-colors ${
                isActive ? 'bg-brand text-white shadow-sm' : 'text-slate-800 hover:bg-slate-50 hover:text-brand'
              }`
            }
          >
            Contact & Office
          </NavLink>
        </nav>

        {/* Drawer Footer Details */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4 shrink-0">
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

          <div className="space-y-1.5 text-xs text-slate-600 font-mono">
            <a href="tel:07448492982" onClick={onClose} className="flex items-center gap-2 hover:text-brand font-medium">
              <Phone className="w-3.5 h-3.5 text-brand" /> 07448492982
            </a>
            <a href="mailto:cons@sarqltd.com" onClick={onClose} className="flex items-center gap-2 hover:text-brand font-medium">
              <Mail className="w-3.5 h-3.5 text-brand" /> cons@sarqltd.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand shrink-0" /> Battersea, London SW11
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-slate-200 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-[11px]">
                <div>Mon – Fri: <span className="text-slate-900 font-bold">09:00 – 18:00</span></div>
                <div>Sat – Sun: <span className="text-slate-900 font-bold">10:00 – 16:00</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
