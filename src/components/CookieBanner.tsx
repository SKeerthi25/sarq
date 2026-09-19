import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sarq_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sarq_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sarq_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-surface-deep text-surface p-5 sm:p-6 rounded-md shadow-2xl border border-white/10"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-brand text-white shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white">
                Cookie & Privacy Consent
              </h4>
              <p className="text-xs text-surface/80 mt-1.5 leading-relaxed">
                We use essential cookies to ensure our website functions correctly and optional performance analytics to improve your experience. View our{' '}
                <Link to="/cookie-policy" className="underline text-accent hover:text-white">
                  Cookie Policy
                </Link>.
              </p>

              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="accent"
                  size="sm"
                  pill
                  onClick={handleAccept}
                  icon={<Check className="w-3.5 h-3.5" />}
                  className="flex-1 text-xs"
                >
                  Accept All
                </Button>
                <Button
                  variant="dark"
                  size="sm"
                  pill
                  onClick={handleDecline}
                  className="flex-1 text-xs bg-white/10 text-white hover:bg-white/20 border-white/10"
                >
                  Essential Only
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
