"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTABanner from "@/components/shared/CTABanner";
import FaqJsonLd from "@/components/shared/FaqJsonLd";

const categories = [
  { key: "general", label: "General" },
  { key: "pricing", label: "Pricing & Payment" },
  { key: "orders", label: "Orders & Delivery" },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");

  const filtered = faqs.filter((f) => f.category === activeCategory);
  const categoryLabel = categories.find((c) => c.key === activeCategory)?.label ?? "General";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">
              Find answers to common questions about our printing services, pricing, orders, and delivery.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-cyan text-white"
                  : "bg-[var(--grey-light)] text-grey-dark hover:bg-cyan/10 hover:text-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <FAQAccordion
          title={categoryLabel}
          items={filtered}
        />
      </SectionWrapper>

      <SectionWrapper background="grey">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-grey-dark mb-6">
            We&apos;re happy to help. Reach out to us on WhatsApp and we&apos;ll get back to you promptly.
          </p>
          <a
            href="https://wa.me/971585311993?text=Hi%2C%20I%20have%20a%20question%20about%20your%20printing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-cyan text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
