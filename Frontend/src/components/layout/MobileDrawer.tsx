"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { mainNavItems } from "@/data/navigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expandedService, setExpandedService] = useState(false);

  const servicesItem = mainNavItems.find((item) => item.label === "Services");

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-navy z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white p-2" aria-label="Close menu">
            <X className="size-6" />
          </button>
        </div>
        <nav className="px-4 pb-6">
          {mainNavItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setExpandedService(!expandedService)}
                    className="flex items-center justify-between w-full text-left min-h-[48px] text-lg text-white border-b border-white/10 py-3"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        expandedService ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedService && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block min-h-[44px] text-base text-white/80 border-b border-white/5 py-2.5 hover:text-cyan transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block min-h-[48px] text-lg text-white border-b border-white/10 py-3 hover:opacity-85 transition-opacity"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/quote"
            onClick={onClose}
            className="block w-full mt-6 text-center bg-cyan text-white rounded-md min-h-12 px-6 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
