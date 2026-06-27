import { services } from "@/data/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Ruler,
  FileText,
  Printer,
  Image,
  FileSpreadsheet,
  ScrollText,
  Layout,
  PanelBottom,
  PanelTop,
  PanelRight,
  Sticker,
  Frame,
  BookOpen,
  Award,
  Tag,
  Gift,
  CreditCard,
  Stamp,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/shared/ServiceJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceCard from "@/components/home/ServiceCard";
import CTABanner from "@/components/shared/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  printer: Printer,
  image: Image,
  "file-text": FileText,
  "file-spreadsheet": FileSpreadsheet,
  "scroll-text": ScrollText,
  layout: Layout,
  "panel-bottom": PanelBottom,
  "panel-top": PanelTop,
  "panel-right": PanelRight,
  sticker: Sticker,
  frame: Frame,
  "book-open": BookOpen,
  award: Award,
  tag: Tag,
  gift: Gift,
  "credit-card": CreditCard,
  stamp: Stamp,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Dubai | Whites Printing`,
    description: service.description.slice(0, 160),
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} in Dubai | Whites Printing`,
      description: service.description.slice(0, 160),
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || FileText;
  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.longDescription}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <div className="mt-10 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <div className="size-16 flex items-center justify-center text-cyan mb-6">
                <Icon className="size-12" />
              </div>
              <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-white/80 text-lg mt-4 max-w-3xl">
                {service.longDescription}
              </p>
            </div>
            <div className="hidden lg:block">
              <ServiceSidebar currentSlug={slug} relatedSlugs={service.relatedSlugs} />
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.useCases.map((useCase, i) => (
              <div key={i} className="bg-white rounded-lg p-5 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="size-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-sm text-grey-dark">{useCase}</span>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper>
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Technical Specifications
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.specs && service.specs.map((spec, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--grey-light)] rounded-lg p-4">
                <CheckCircle2 className="size-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-sm text-grey-dark">{spec}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 bg-[var(--grey-light)] rounded-lg p-4">
              <Clock className="size-5 text-cyan shrink-0 mt-0.5" />
              <span className="text-sm text-grey-dark">
                Turnaround: <strong>{service.turnaround}</strong>
              </span>
            </div>
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <FAQAccordion
            title="Frequently Asked Questions"
            items={service.faq}
          />
        </ScrollAnimate>
      </SectionWrapper>

      {relatedServices.length > 0 && (
        <SectionWrapper>
          <ScrollAnimate>
            <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.shortTitle}
                  description={s.description}
                  icon={s.icon}
                  href={`/services/${s.slug}`}
                />
              ))}
            </div>
          </ScrollAnimate>
        </SectionWrapper>
      )}

      <SectionWrapper background="navy">
        <CTABanner
          title={`Get a Quote for ${service.shortTitle}`}
          subtitle="Tell us your requirements and we'll provide a detailed quote within 24 hours."
          primaryCta={{ label: "Request a Quote", href: "/quote" }}
          secondaryCta={{ label: "Call Us Now", href: "tel:+971585311993" }}
        />
      </SectionWrapper>
    </>
  );
}
