import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const featured = testimonials.filter((t) => t.isNamed).slice(0, 3);

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          What Our Clients Say
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          Trusted by businesses across Dubai for quality, reliability, and service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-cyan"
          >
            <div className="flex items-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < t.rating ? "text-[var(--yellow)] fill-[var(--yellow)]" : "text-grey-dark"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-grey-dark italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-[var(--grey-light)]">
              <p className="text-sm font-medium text-navy">{t.author}</p>
              <p className="text-xs text-grey-dark mt-0.5">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
