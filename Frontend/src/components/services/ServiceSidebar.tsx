import Link from "next/link";
import { services } from "@/data/services";

interface ServiceSidebarProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function ServiceSidebar({ currentSlug, relatedSlugs }: ServiceSidebarProps) {
  const related = services.filter(
    (s) => relatedSlugs.includes(s.slug) && s.slug !== currentSlug
  );

  return (
    <aside className="space-y-6">
      <div className="bg-[var(--grey-light)] rounded-lg p-5">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy mb-4">
          Related Services
        </h3>
        <ul className="space-y-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="text-sm text-grey-dark hover:text-cyan transition-colors block py-1"
              >
                {item.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-cyan/5 rounded-lg p-5 border border-cyan/20">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy mb-2">
          Need Help?
        </h3>
        <p className="text-sm text-grey-dark mb-4">
          Not sure which service fits your needs? Contact us and we&apos;ll guide you.
        </p>
        <Link
          href="/contact"
          className="text-cyan text-sm font-medium hover:underline"
        >
          Contact Us &rarr;
        </Link>
      </div>
    </aside>
  );
}
