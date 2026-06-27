import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Printing Quote | Whites Printing Dubai",
  description: "Get a free quote for your printing project. Business cards, brochures, banners, signage, and more. Response within 24 hours.",
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Request a Free Printing Quote | Whites Printing Dubai",
    description: "Get a free quote for your printing project. Business cards, brochures, banners, signage, and more. Response within 24 hours.",
    type: "website",
  },
};

export default function QuotePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Get a Quote", href: "/quote" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Request a Free Quote
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a detailed quote.
              No minimum order required for most products.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-6">
            <QuoteForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
