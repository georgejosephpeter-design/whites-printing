"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled ? "bg-navy shadow-md" : "bg-navy"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-cyan flex items-center justify-center text-navy font-bold text-sm">
              W
            </div>
            <span className="text-white font-heading font-semibold text-lg hidden sm:block">
              Whites Printing
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="text-white text-sm font-medium hover:opacity-85 transition-opacity py-2 inline-block"
                    >
                      {item.label}
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-navy hover:bg-[var(--grey-light)] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-sm font-medium hover:opacity-85 transition-opacity py-2"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hidden lg:inline-flex items-center justify-center bg-cyan text-white rounded-md h-9 px-4 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
