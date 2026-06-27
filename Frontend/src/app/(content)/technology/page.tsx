import type { Metadata } from "next";
import { CheckCircle, Printer, Layout, Scissors, BookOpen, Layers, Tag, FileText, Sticker } from "lucide-react";
import { equipment } from "@/data/equipment";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";
import CTABanner from "@/components/shared/CTABanner";

const equipIconMap: Record<string, React.ElementType> = {
  printer: Printer,
  layout: Layout,
  scissors: Scissors,
  "book-open": BookOpen,
  layers: Layers,
  tag: Tag,
  "file-text": FileText,
  sticker: Sticker,
};

export const metadata: Metadata = {
  title: "Our Technology & Equipment | Whites Printing Dubai",
  description: "Discover the advanced printing technology behind Whites Printing — Canon imagePRESS C10000VP, large format printers, binders, and finishing equipment.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "Our Technology & Equipment | Whites Printing Dubai",
    description: "Discover the advanced printing technology behind Whites Printing — Canon imagePRESS C10000VP, large format printers, binders, and finishing equipment.",
    type: "website",
  },
};

export default function TechnologyPage() {
  const flagship = equipment.find((e) => e.isFlagship);
  const rest = equipment.filter((e) => !e.isFlagship);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Technology" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Our Technology &amp; Equipment
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl">
              We invest in industry-leading printing technology to deliver exceptional quality, consistency, and speed.
            </p>
          </div>
        </SectionWrapper>
      </div>

      {flagship && (
        <SectionWrapper>
          <ScrollAnimate>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan/5 to-navy/5 border border-cyan/20 rounded-xl p-8 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cyan text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                    Powered by {flagship.name.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="size-20 flex items-center justify-center text-cyan bg-white rounded-xl shadow-sm shrink-0">
                    <Printer className="size-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-navy">{flagship.name}</h2>
                    <p className="text-sm text-grey-dark uppercase tracking-wider mt-0.5">{flagship.type}</p>
                    <p className="text-grey-dark mt-3">{flagship.description}</p>
                    <ul className="mt-4 space-y-2">
                      {flagship.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-grey-dark">
                          <CheckCircle className="size-4 text-cyan shrink-0 mt-0.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </SectionWrapper>
      )}

      <SectionWrapper background="grey">
        <ScrollAnimate>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
            Our Complete Equipment Lineup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rest.map((eq) => {
              const Icon = equipIconMap[eq.icon] || Printer;
              return (
                <div key={eq.name} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="size-12 flex items-center justify-center text-cyan bg-[var(--grey-light)] rounded-lg shrink-0">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-navy">{eq.name}</h3>
                      <p className="text-xs text-grey-dark uppercase tracking-wider">{eq.type}</p>
                      <p className="text-sm text-grey-dark mt-2">{eq.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5 border-t border-[var(--grey-light)] pt-4">
                    {eq.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-grey-dark">
                        <CheckCircle className="size-3.5 text-cyan shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </ScrollAnimate>
      </SectionWrapper>

      <SectionWrapper background="navy">
        <CTABanner
          title="Ready to Experience Our Technology?"
          subtitle="Get your project printed on the best equipment in Dubai."
        />
      </SectionWrapper>
    </>
  );
}
