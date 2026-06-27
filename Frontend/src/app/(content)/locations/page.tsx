import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { locations } from "@/data/locations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Printing Services Across Dubai | Whites Printing",
  description: "We deliver printing services across 15 locations in Dubai and the Northern Emirates. Fast, reliable delivery near you.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Printing Services Across Dubai | Whites Printing",
    description: "We deliver printing services across 15 locations in Dubai and the Northern Emirates. Fast, reliable delivery near you.",
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Printing Services Near You
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
              We cover 15 locations across Dubai and the Northern Emirates with fast in-house delivery.
            </p>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="block bg-[var(--grey-light)] rounded-lg p-6 hover:border-cyan hover:border transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="size-12 flex items-center justify-center text-cyan bg-white rounded-lg">
                  <MapPin className="size-6" />
                </div>
                <span className="text-xs font-medium text-cyan bg-cyan/10 px-2 py-1 rounded-full">
                  {loc.deliveryTime}
                </span>
              </div>
              <h3 className="font-heading text-lg font-medium text-navy mt-4 group-hover:text-cyan transition-colors">
                {loc.name}
              </h3>
              <p className="text-sm text-grey-dark mt-2 line-clamp-2">
                {loc.description}
              </p>
              <div className="flex items-center gap-1 text-cyan text-sm font-medium mt-4">
                <span>View Details</span>
                <ChevronRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
