import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  // Always shows whenever the website is opened
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 bg-white border-t border-slate-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-800 font-medium text-center sm:text-left">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 shrink-0 hidden sm:flex">
                <Cookie className="w-5 h-5" />
              </div>
              <p>We use cookies to improve your browsing experience.</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold font-heading uppercase transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-bold font-heading uppercase shadow-sm hover:shadow transition-all"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
