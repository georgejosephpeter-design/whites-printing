import Link from "next/link";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-navy pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-4 py-20 md:py-16 sm:py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-4xl sm:text-3xl font-bold leading-tight tracking-tight text-white">
              Premium Printing for Dubai Businesses
            </h1>
            <p className="text-white/80 text-lg max-w-lg mt-6 mx-auto lg:mx-0">
              From business cards to banners, signage to corporate gifts — your trusted full-service print shop with 15+ years of experience in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center lg:justify-start">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-cyan text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/971585311993?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white rounded-md min-h-12 px-8 py-3 font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
              >
                <Phone className="size-4" />
                WhatsApp Now
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-cyan" />
                15+ Years
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-cyan" />
                1,000+ Clients
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-cyan" />
                In-House Delivery
              </span>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px]">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(0,188,212,0.04) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(0,188,212,0.04) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 50%),
                  radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.08) 0%, transparent 100%),
                  radial-gradient(2px 2px at 30% 60%, rgba(255,255,255,0.08) 0%, transparent 100%),
                  radial-gradient(2px 2px at 50% 10%, rgba(255,255,255,0.08) 0%, transparent 100%),
                  radial-gradient(2px 2px at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 100%),
                  radial-gradient(2px 2px at 90% 40%, rgba(255,255,255,0.08) 0%, transparent 100%)
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
