import { industries } from "@/data/industries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/shared/ServiceJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";
import CTABanner from "@/components/shared/CTABanner";
import IndustryCard from "@/components/industries/IndustryCard";

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);
  if (!industry) return {};
  return {
    title: `Printing for ${industry.title} in Dubai | Whites Printing`,
    description: industry.description.slice(0, 160),
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `Printing for ${industry.title} in Dubai | Whites Printing`,
      description: industry.description.slice(0, 160),
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);
  if (!industry) notFound();

  const relatedIndustries = industries.filter((ind) => ind.slug !== slug).slice(0, 4);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title, href: `/industries/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`Printing for ${industry.title}`}
        description={industry.description}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Printing for {industry.title}
            </h1>
            <p className="text-white/80 text-lg mt-4">
              {industry.description}
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Products We Offer for {industry.title}
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.products.map((product, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--grey-light)] rounded-lg p-5">
                <CheckCircle2 className="size-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-sm text-grey-dark">{product}</span>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy mb-6">
              Why Whites Printing for {industry.title}?
            </h2>
            <p className="text-lg text-grey-dark leading-relaxed">
              {industry.whyWhites}
            </p>
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Other Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedIndustries.map((ind) => (
              <IndustryCard
                key={ind.slug}
                title={ind.title}
                slug={ind.slug}
                icon={ind.icon}
                description={ind.description}
              />
            ))}
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="navy">
        <CTABanner
          title={industry.cta}
          subtitle="Contact us today and let's discuss your printing needs."
        />
      </SectionWrapper>
    </>
  );
}
