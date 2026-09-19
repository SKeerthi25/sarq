import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileNav } from '../components/MobileNav';
import { CookieBanner } from '../components/CookieBanner';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ScrollToTop } from '../components/ScrollToTop';

export const Layout: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  // Close mobile navigation drawer whenever route location changes
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname, location.key]);

  // Always enforce clean light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('sarq_theme');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-ink relative transition-colors duration-200">
      <ScrollToTop />
      
      {/* Sticky Top Header */}
      <Header
        onOpenMobileNav={() => setMobileNavOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Statutory Footer */}
      <Footer />

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* GDPR Cookie Consent */}
      <CookieBanner />
    </div>
  );
};
