import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

export default function IndustryScroll() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          Industries We Serve
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          Tailored printing solutions for Dubai&apos;s diverse business sectors.
        </p>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.slug}
            title={industry.title}
            icon={industry.icon}
            href={`/industries/${industry.slug}`}
          />
        ))}
      </div>
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6">
        <div className="flex gap-4 pb-4">
          {industries.map((industry) => (
            <div key={industry.slug} className="snap-start shrink-0 w-[160px]">
              <IndustryCard
                title={industry.title}
                icon={industry.icon}
                href={`/industries/${industry.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
