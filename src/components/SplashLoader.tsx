import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoEmblem } from './Logo';

export const SplashLoader: React.FC<{ durationMs?: number; onFinish?: () => void }> = ({
  durationMs = 3000,
  onFinish,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / durationMs) * 100), 100);
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          if (onFinish) onFinish();
        }, 150);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationMs, onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle industrial blueprint grid background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

          {/* Ambient center subtle glow */}
          <div className="absolute w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Logo Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 drop-shadow-md"
            >
              <LogoEmblem size={76} />
            </motion.div>

            {/* Brand Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-baseline gap-2 justify-center mb-1"
            >
              <span className="font-heading text-4xl sm:text-5xl font-black tracking-wider text-slate-900 uppercase">
                SARQ
              </span>
              <span className="font-mono text-sm sm:text-base font-extrabold uppercase px-2 py-0.5 rounded tracking-widest bg-brand text-white shadow-sm">
                LTD
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-heading font-extrabold uppercase tracking-[0.22em] text-xs text-slate-500 mb-8"
            >
              Construction London
            </motion.p>

            {/* Precision 3-Second Loading Bar */}
            <div className="w-full max-w-[260px] space-y-2">
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <motion.div
                  className="h-full bg-brand rounded-full transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span className="tracking-wider uppercase">Loading</span>
                <span className="font-bold text-slate-700">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
