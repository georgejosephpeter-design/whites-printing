import Hero from "@/components/home/Hero";
import ServiceGrid from "@/components/home/ServiceGrid";
import IndustryScroll from "@/components/home/IndustryScroll";
import WhyChoose from "@/components/home/WhyChoose";
import TechnologyShowcase from "@/components/home/TechnologyShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OffersSection from "@/components/home/OffersSection";
import CoverageMap from "@/components/home/CoverageMap";
import CTABanner from "@/components/home/CTABanner";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper>
        <ServiceGrid />
      </SectionWrapper>
      <SectionWrapper background="grey">
        <IndustryScroll />
      </SectionWrapper>
      <SectionWrapper>
        <WhyChoose />
      </SectionWrapper>
      <SectionWrapper background="grey">
        <TechnologyShowcase />
      </SectionWrapper>
      <SectionWrapper>
        <TestimonialsSection />
      </SectionWrapper>
      <SectionWrapper background="grey">
        <OffersSection />
      </SectionWrapper>
      <SectionWrapper>
        <CoverageMap />
      </SectionWrapper>
      <SectionWrapper background="navy">
        <CTABanner />
      </SectionWrapper>
    </>
  );
}
