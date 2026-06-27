import { MapPin } from "lucide-react";

export default function CoverageMap() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          We Deliver Across Dubai
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          From Deira to Dubai Marina, JLT to Business Bay — our in-house delivery team covers all of Dubai and the Northern Emirates.
        </p>
      </div>
      <div className="bg-[var(--grey-light)] rounded-lg h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="text-center">
          <MapPin className="size-12 text-cyan mx-auto" />
          <p className="text-sm text-grey-dark mt-3">
            Coverage map will be loaded here
          </p>
          <p className="text-xs text-grey-dark mt-1">
            Free delivery across Dubai on orders above AED 200
          </p>
        </div>
      </div>
    </>
  );
}
