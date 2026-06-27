"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/data/constants";

export default function WhatsAppButton() {
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPulsing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] group">
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp, opens WhatsApp"
        className={`flex items-center justify-center size-14 md:size-[52px] rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#20BD5A] hover:shadow-xl transition-all duration-300 ${
          pulsing ? "animate-pulse" : ""
        }`}
      >
        <Phone className="size-7" />
      </button>
      <div className="absolute -top-10 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
}
