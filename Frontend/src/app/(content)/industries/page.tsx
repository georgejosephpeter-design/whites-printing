"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { industries } from "@/data/industries";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import IndustryCard from "@/components/industries/IndustryCard";

const categories = ["All", "Hospitality", "Healthcare", "Corporate", "Education", "Events"];

const industryCategoryMap: Record<string, string> = {
  hotels: "Hospitality",
  healthcare: "Healthcare",
  "corporate-offices": "Corporate",
  schools: "Education",
  events: "Events",
  fitness: "Hospitality",
  embassies: "Corporate",
  construction: "Corporate",
  "real-estate": "Corporate",
  government: "Corporate",
  retail: "Corporate",
  manufacturing: "Corporate",
  travel: "Hospitality",
  jewellery: "Corporate",
  banking: "Corporate",
  malls: "Corporate",
};

export default function IndustriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? industries
    : industries.filter((ind) => industryCategoryMap[ind.slug] === activeCategory);

  return (
    <>
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Printing Solutions for Every Industry in Dubai
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
              We serve 16+ industries with tailored printing solutions. From healthcare and hospitality
              to education and retail, find the perfect print partner for your sector.
            </p>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-cyan text-white"
                  : "bg-[var(--grey-light)] text-grey-dark hover:bg-cyan/10 hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((industry) => (
            <IndustryCard
              key={industry.slug}
              title={industry.title}
              slug={industry.slug}
              icon={industry.icon}
              description={industry.description}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
