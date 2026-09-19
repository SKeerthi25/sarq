import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ClipboardEdit } from 'lucide-react';

export const BottomBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-deep/95 backdrop-blur-md border-t border-white/10 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href="tel:07448492982"
          className="flex flex-col items-center justify-center min-h-[46px] rounded bg-white/5 hover:bg-white/10 active:bg-white/20 text-surface text-center transition-colors border border-white/10 py-1"
          aria-label="Direct phone call to SARQ"
        >
          <Phone className="w-4 h-4 text-accent mb-0.5" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-wide">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/447448492982?text=Hello%20SARQ%20LTD%2C%20I%20have%20a%20construction%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[46px] rounded bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-center transition-colors border border-[#25D366]/40 py-1"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-wide">WhatsApp</span>
        </a>

        {/* Get Quote Button */}
        <Link
          to="/request-a-quote"
          className="flex flex-col items-center justify-center min-h-[46px] rounded bg-brand hover:bg-brand-hover text-white text-center transition-colors shadow-sm py-1"
          aria-label="Request a quote"
        >
          <ClipboardEdit className="w-4 h-4 text-accent mb-0.5" />
          <span className="font-heading text-[11px] font-bold uppercase tracking-wide">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};
