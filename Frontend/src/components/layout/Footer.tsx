import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { footerServices, footerIndustries, footerCompany, footerSupport } from "@/data/navigation";
import { SITE_NAME, ADDRESS, PHONE_NUMBER, EMAIL, WORKING_HOURS, COPYRIGHT_YEAR } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-12 md:pt-12 md:pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          <div>
            <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {footerIndustries.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerSupport.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-cyan transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-white/80 hover:text-cyan transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/90">
                <MapPin className="size-4 mt-0.5 shrink-0 text-cyan" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2.5 text-sm text-white/90 hover:text-cyan transition-colors"
                >
                  <Phone className="size-4 shrink-0 text-cyan" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-white/90 hover:text-cyan transition-colors"
                >
                  <Mail className="size-4 shrink-0 text-cyan" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/90">
                <Clock className="size-4 mt-0.5 shrink-0 text-cyan" />
                <span>{WORKING_HOURS}</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {COPYRIGHT_YEAR} {SITE_NAME}. Color Your Business&trade;.
          </p>
          <Link href="/privacy" className="hover:text-white/80 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
