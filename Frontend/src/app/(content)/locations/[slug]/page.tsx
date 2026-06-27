import { locations } from "@/data/locations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";
import CTABanner from "@/components/shared/CTABanner";
import { WHATSAPP_NUMBER, ADDRESS } from "@/data/constants";

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);
  if (!location) return {};
  return {
    title: `Printing Services near ${location.name}, Dubai | Whites Printing`,
    description: `Premium printing services near ${location.name}, Dubai. ${location.deliveryTime} delivery from our shop near National Paints Metro.`,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title: `Printing Services near ${location.name}, Dubai | Whites Printing`,
      description: `Premium printing services near ${location.name}, Dubai. ${location.deliveryTime} delivery from our shop near National Paints Metro.`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);
  if (!location) notFound();

  const nearbyLocations = locations.filter(
    (loc) => loc.slug !== slug && loc.nearby.some((n) => location.nearby.includes(n))
  );
  const otherLocations = locations.filter((loc) => loc.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.name, href: `/locations/${slug}` },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: location.name },
            ]}
          />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Printing Services near {location.name}, Dubai
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl">
              {location.description}
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <ScrollAnimate>
              <div className="space-y-6">
                <div className="bg-[var(--grey-light)] rounded-lg p-6">
                  <h2 className="font-heading text-lg font-semibold text-navy mb-3">
                    Delivery Information
                  </h2>
                  <div className="flex items-center gap-2 text-grey-dark">
                    <MapPin className="size-5 text-cyan" />
                    <span>
                      Just <strong>{location.distance}</strong> from our shop near National Paints Metro Station
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-grey-dark">
                    <span className="font-medium text-navy">Estimated delivery time:</span>{" "}
                    {location.deliveryTime}
                  </div>
                </div>

                <div className="bg-[var(--grey-light)] rounded-lg p-6">
                  <h2 className="font-heading text-lg font-semibold text-navy mb-3">
                    Key Areas We Serve in {location.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {location.nearby.map((area) => (
                      <span
                        key={area}
                        className="bg-white text-sm text-navy px-3 py-1.5 rounded-full border border-[var(--grey-light)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--grey-light)] rounded-lg p-6">
                  <h2 className="font-heading text-lg font-semibold text-navy mb-3">
                    Quick Actions
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 bg-cyan text-white rounded-md h-10 px-5 font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get a Quote
                      <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20looking%20for%20printing%20services%20near%20${encodeURIComponent(location.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-navy text-navy rounded-md h-10 px-5 font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
                    >
                      <Phone className="size-4" />
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div>
            <ScrollAnimate delay={100}>
              <div className="bg-[var(--grey-light)] rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-navy/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="size-12 text-cyan mx-auto" />
                    <p className="text-sm text-grey-dark mt-3 max-w-xs mx-auto px-4">
                      {ADDRESS}
                    </p>
                    <p className="text-xs text-grey-dark mt-1">
                      {location.distance} from {location.name}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </SectionWrapper>

      {nearbyLocations.length > 0 && (
        <SectionWrapper background="grey">
          <ScrollAnimate>
            <h2 className="text-2xl md:text-xl font-semibold text-navy text-center mb-6">
              Also Serving Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="bg-white rounded-lg px-5 py-3 text-sm text-navy font-medium hover:border-cyan hover:border transition-all shadow-sm"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </ScrollAnimate>
        </SectionWrapper>
      )}

      {otherLocations.length > 0 && (
        <SectionWrapper>
          <ScrollAnimate>
            <h2 className="text-2xl md:text-xl font-semibold text-navy text-center mb-6">
              Other Locations We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="bg-[var(--grey-light)] rounded-lg px-5 py-3 text-sm text-grey-dark hover:text-navy hover:border-cyan hover:border transition-all"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </ScrollAnimate>
        </SectionWrapper>
      )}

      <SectionWrapper background="navy">
        <CTABanner
          title={`Get Printing Services Near ${location.name}`}
          subtitle={`Fast ${location.deliveryTime.toLowerCase()} delivery. Request a quote now and we'll handle the rest.`}
        />
      </SectionWrapper>
    </>
  );
}
