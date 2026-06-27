import type { Metadata } from "next";
import { services } from "@/data/services";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ServiceCard from "@/components/home/ServiceCard";

export const metadata: Metadata = {
  title: "All Printing Services in Dubai | Whites Printing",
  description: "Explore all 15 printing services we offer in Dubai — from business cards and brochures to banners, acrylic signs, corporate gifts and more.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "All Printing Services in Dubai | Whites Printing",
    description: "Explore all 15 printing services we offer in Dubai — from business cards and brochures to banners, acrylic signs, corporate gifts and more.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Our Printing Services in Dubai
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
              From a single business card to a full event signage setup, we offer 15 comprehensive printing services
              under one roof. Quality guaranteed, delivered on time.
            </p>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.description}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
