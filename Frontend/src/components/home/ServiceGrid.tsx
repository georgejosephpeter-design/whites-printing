import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  const featuredServices = services.slice(0, 8);

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          What We Print
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          From everyday essentials to large-format specialty items, we handle all your printing needs under one roof.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.shortTitle}
            description={service.description}
            icon={service.icon}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-flex items-center justify-center border border-navy text-navy rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:bg-navy hover:text-white transition-colors"
        >
          View All Services
        </Link>
      </div>
    </>
  );
}
