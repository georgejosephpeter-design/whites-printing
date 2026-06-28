"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const handleScroll = () => header.classList.toggle("shadow-md", window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-[14px] right-4 z-50 lg:hidden text-white p-2"
        aria-label="Open menu"
      >
        <Menu className="size-6" />
      </button>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}