import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  ChevronDown,
  Moon,
  Sun,
  ArrowRight,
  ShieldCheck,
  Building2,
  Maximize2,
  Home,
  ShieldAlert,
  Wrench,
  Sparkles,
  Hammer,
} from 'lucide-react';
import { servicesData } from '../data/services';
import { Button } from './Button';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenMobileNav: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'new-build': <Building2 className="w-5 h-5 text-brand" />,
  'extensions': <Maximize2 className="w-5 h-5 text-brand" />,
  'loft-conversions': <Home className="w-5 h-5 text-brand" />,
  'basement-structural': <ShieldAlert className="w-5 h-5 text-brand" />,
  'refurbishment': <Wrench className="w-5 h-5 text-brand" />,
  'kitchens-bathrooms': <Sparkles className="w-5 h-5 text-brand" />,
  'groundworks-roofing-external': <Hammer className="w-5 h-5 text-brand" />,
};

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileNav,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md border-b border-hairline py-2.5'
          : 'bg-surface border-b border-hairline/60 py-3.5'
      }`}
    >
      {/* Top micro trust bar (desktop only) */}
      <div className="hidden lg:block border-b border-hairline/40 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-mono text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-ink/80 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Company No. 17460532
            </span>
            <span>•</span>
            <span>Battersea, Wandsworth, Clapham & Greater London</span>
            <span>•</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">10-Year Insurance-Backed Guarantees</span>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/careers" className="hover:text-brand transition-colors">
              Trades & Careers
            </Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-brand transition-colors">
              FAQ
            </Link>
            <span>•</span>
            <a
              href="tel:07448492982"
              className="flex items-center gap-1 text-ink font-bold hover:text-brand transition-colors"
            >
              <Phone className="w-3 h-3 text-brand" /> 07448492982
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="header" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              About
            </NavLink>

            {/* Mega Menu Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`font-heading text-sm font-bold uppercase tracking-wider flex items-center gap-1 transition-colors py-2 ${
                  pathname.startsWith('/services') ? 'text-brand' : 'text-ink hover:text-brand'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] z-50">
                  <div className="bg-card text-ink rounded-md border border-hairline shadow-2xl p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Services Grid (8 cols) */}
                    <div className="col-span-8 grid grid-cols-2 gap-3 border-r border-hairline pr-6">
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.slug}`}
                          className="p-2.5 rounded hover:bg-surface transition-colors flex items-start gap-3 group/item border border-transparent hover:border-hairline"
                        >
                          <div className="p-2 rounded bg-surface border border-hairline shrink-0 group-hover/item:border-brand/40 group-hover/item:text-brand">
                            {serviceIcons[svc.slug] || <Hammer className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="font-heading font-bold text-xs uppercase tracking-wide text-ink group-hover/item:text-brand">
                              {svc.shortTitle}
                            </div>
                            <div className="text-[11px] text-muted line-clamp-1 mt-0.5">
                              {svc.startingCost} • {svc.durationAvg}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Quick Hub Link (4 cols) */}
                    <div className="col-span-4 flex flex-col justify-between p-4 rounded bg-surface border border-hairline">
                      <div>
                        <span className="micro-label text-brand">All Domestic Specialisms</span>
                        <h4 className="font-heading text-base font-bold uppercase mt-1 text-ink">
                          Explore All Services
                        </h4>
                        <p className="text-xs text-muted mt-2 leading-relaxed">
                          From heavy structural steel installations to turnkey Passivhaus new builds.
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-hairline space-y-2">
                        <Link
                          to="/services"
                          className="flex items-center justify-between text-xs font-heading font-bold uppercase text-brand hover:underline"
                        >
                          <span>Full Services Hub</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          to="/quote-cost-guide"
                          className="flex items-center justify-between text-xs font-mono text-muted hover:text-ink"
                        >
                          <span>Cost Calculator</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/process"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              Process
            </NavLink>

            <NavLink
              to="/quote-cost-guide"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              Cost Guide
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand' : 'text-ink hover:text-brand'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">

            {/* Direct Phone Number (Desktop) */}
            <a
              href="tel:07448492982"
              className="hidden xl:flex items-center gap-2 font-mono text-xs font-bold text-ink px-3 py-2 rounded border border-hairline hover:border-brand transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand" />
              <span>07448492982</span>
            </a>

            {/* Pill CTA */}
            <Button
              variant="primary"
              size="md"
              pill
              to="/request-a-quote"
              className="hidden sm:inline-flex"
            >
              Get a Quote
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={onOpenMobileNav}
              className="lg:hidden p-2 rounded border border-hairline text-ink hover:border-brand transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
