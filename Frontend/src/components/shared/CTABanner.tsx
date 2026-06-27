import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  title = "Ready to Start Your Print Project?",
  subtitle = "Get a free quote within 24 hours. No minimum order required for most products.",
  primaryCta = { label: "Get a Free Quote", href: "/quote" },
  secondaryCta = { label: "Call Us Now", href: "tel:+971585311993" },
}: CTABannerProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-white">
        {title}
      </h2>
      <p className="text-base text-white/80 mt-4">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <Link
          href={primaryCta.href}
          className="inline-flex items-center justify-center bg-cyan text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          {primaryCta.label}
        </Link>
        <Link
          href={secondaryCta.href}
          className="inline-flex items-center justify-center border border-white/30 text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
        >
          {secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}
