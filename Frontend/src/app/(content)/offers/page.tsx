import type { Metadata } from "next";
import Link from "next/link";
import { offers } from "@/data/offers";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import ScrollAnimate from "@/components/shared/ScrollAnimate";

export const metadata: Metadata = {
  title: "This Month's Offers & Deals | Whites Printing Dubai",
  description: "Check out our latest offers on business cards, flyers, banners, and more. Free design service, free delivery, and seasonal promotions.",
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "This Month's Offers & Deals | Whites Printing Dubai",
    description: "Check out our latest offers on business cards, flyers, banners, and more. Free design service, free delivery, and seasonal promotions.",
    type: "website",
  },
};

export default function OffersPage() {
  const activeOffers = offers.filter((o) => o.active);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Offers", href: "/offers" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Offers" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              This Month&apos;s Offers
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">
              Take advantage of our latest deals and promotions. Quality printing at great prices.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        {activeOffers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeOffers.map((offer) => (
              <ScrollAnimate key={offer.id}>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-[var(--grey-light)] hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-cyan bg-cyan/10 px-2 py-1 rounded-full">
                      {offer.validity}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-grey-dark mt-3 flex-1">
                    {offer.description}
                  </p>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center bg-cyan text-white rounded-md h-10 px-5 font-semibold text-sm mt-6 hover:opacity-90 transition-opacity"
                  >
                    {offer.cta}
                  </Link>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-navy mb-4">Check Back Soon</h2>
            <p className="text-grey-dark max-w-md mx-auto">
              We don&apos;t have any active offers right now, but new deals are coming soon.
              Follow us on social media or check back later.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-cyan text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm mt-6 hover:opacity-90 transition-opacity"
            >
              Request a Quote Anyway
            </Link>
          </div>
        )}
      </SectionWrapper>
    </>
  );
}
