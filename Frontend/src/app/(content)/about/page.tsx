import type { Metadata } from "next";
import {
  Image, Printer, Layout, BookOpen, HardHat, MessageCircle, Truck,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { teamCompetencies } from "@/data/team";
import { equipment } from "@/data/equipment";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";
import CTABanner from "@/components/shared/CTABanner";

const competencyIconMap: Record<string, React.ElementType> = {
  image: Image,
  printer: Printer,
  layout: Layout,
  "book-open": BookOpen,
  "hard-hat": HardHat,
  "message-circle": MessageCircle,
  truck: Truck,
};

const processSteps = [
  { step: 1, label: "Design Review", description: "Our prepress team checks your files for print readiness." },
  { step: 2, label: "Prepress", description: "Color correction, imposition, and plate/file preparation." },
  { step: 3, label: "Print", description: "High-precision digital or large-format printing." },
  { step: 4, label: "Quality Control", description: "Every sheet is inspected for color accuracy and defects." },
  { step: 5, label: "Finishing", description: "Cutting, folding, binding, lamination, and specialty finishes." },
  { step: 6, label: "Packing", description: "Careful packaging to ensure damage-free delivery." },
  { step: 7, label: "Delivery", description: "In-house fleet delivers your order on time." },
];

export const metadata: Metadata = {
  title: "About Whites Printing Services LLC | Dubai Print Shop",
  description: "Learn about Whites Printing Services — 15+ years of premium printing in Dubai. Meet our team, see our equipment, and understand our process.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Whites Printing Services LLC | Dubai Print Shop",
    description: "Learn about Whites Printing Services — 15+ years of premium printing in Dubai. Meet our team, see our equipment, and understand our process.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              About Whites Printing Services Dubai
            </h1>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <ScrollAnimate>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy">
              A Decade and a Half of Colour
            </h2>
            <div className="mt-6 space-y-4 text-grey-dark leading-relaxed">
              <p>
                For over 15 years, Whites Printing Services LLC has been the trusted print partner for
                businesses across Dubai and the UAE. What started as a small print shop in Deira has grown
                into a full-service printing house serving 1,000+ clients across 16 industries.
              </p>
              <p>
                We invest in the best technology, hire the best talent, and obsess over quality because we
                believe that print matters. Every business card, every brochure, every banner carries your
                brand&apos;s reputation — and we treat it with the care it deserves.
              </p>
              <p>
                Located near National Paints Metro Station in Deira, we offer in-house delivery across Dubai
                and the Northern Emirates. From a single flyer to a full corporate rebrand, we are your
                complete print solution.
              </p>
            </div>
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Our Team Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamCompetencies.map((comp) => {
              const Icon = competencyIconMap[comp.icon] || Image;
              return (
                <div key={comp.area} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="size-12 flex items-center justify-center text-cyan">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-navy mt-4">
                    {comp.area}
                  </h3>
                  <p className="text-sm text-grey-dark mt-2">
                    {comp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Our Equipment
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {equipment.filter((e) => e.isFlagship).map((eq) => (
              <div key={eq.name} className="bg-cyan/5 border border-cyan/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-cyan text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Flagship
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">{eq.name}</h3>
                <p className="text-sm text-grey-dark mt-1">{eq.type}</p>
                <p className="text-sm text-grey-dark mt-3">{eq.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {eq.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-grey-dark">
                      <CheckCircle className="size-4 text-cyan shrink-0 mt-0.5" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipment.filter((e) => !e.isFlagship).map((eq) => (
                <div key={eq.name} className="bg-[var(--grey-light)] rounded-lg p-5">
                  <h3 className="font-heading text-base font-semibold text-navy">{eq.name}</h3>
                  <p className="text-xs text-grey-dark uppercase tracking-wider mt-0.5">{eq.type}</p>
                  <p className="text-sm text-grey-dark mt-2">{eq.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Our Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-lg p-5 shadow-sm text-center">
                    <div className="size-10 rounded-full bg-cyan text-white font-bold flex items-center justify-center mx-auto">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-navy mt-3">
                      {step.label}
                    </h3>
                    <p className="text-xs text-grey-dark mt-1">
                      {step.description}
                    </p>
                  </div>
                  {step.step < processSteps.length && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-cyan">
                      <ArrowRight className="size-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="navy">
        <CTABanner
          title="Ready to Work with Us?"
          subtitle="Experience the Whites Printing difference. Get a free quote within 24 hours."
        />
      </SectionWrapper>
    </>
  );
}
