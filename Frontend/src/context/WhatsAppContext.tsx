"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/data/constants";

interface WhatsAppContextType {
  prefillMessage: string;
  setPrefillMessage: (msg: string) => void;
  phoneNumber: string;
  openWhatsApp: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [prefillMessage, setPrefillMessage] = useState(WHATSAPP_MESSAGE);

  const openWhatsApp = useCallback(() => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefillMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, [prefillMessage]);

  return (
    <WhatsAppContext.Provider
      value={{ prefillMessage, setPrefillMessage, phoneNumber: WHATSAPP_NUMBER, openWhatsApp }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider");
  }
  return context;
}
