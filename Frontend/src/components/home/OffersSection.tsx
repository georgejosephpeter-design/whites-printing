import Link from "next/link";
import { offers } from "@/data/offers";

export default function OffersSection() {
  const activeOffers = offers.filter((o) => o.active);

  if (activeOffers.length === 0) {
    return null;
  }

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          This Month&apos;s Offers
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          Take advantage of our latest promotions and special deals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeOffers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col"
          >
            <h3 className="font-heading text-lg font-medium text-navy">{offer.title}</h3>
            <p className="text-sm text-grey-dark mt-3 flex-1">{offer.description}</p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--grey-light)]">
              <span className="text-xs text-grey-dark">{offer.validity}</span>
              <Link
                href="/quote"
                className="text-cyan text-sm font-medium hover:underline"
              >
                {offer.cta} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
