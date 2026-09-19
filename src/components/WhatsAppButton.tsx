import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/447448492982?text=${encodeURIComponent(
    'Hello SARQ LTD, I would like to discuss a domestic construction enquiry in London.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 sm:bottom-8 right-5 sm:right-8 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with SARQ LTD on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full" />
      </div>
      <span className="font-heading font-bold text-xs uppercase tracking-wider hidden sm:inline-block">
        WhatsApp Us
      </span>
    </a>
  );
};
