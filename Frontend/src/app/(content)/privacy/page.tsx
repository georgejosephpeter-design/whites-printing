import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import { SITE_NAME, EMAIL } from "@/data/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Whites Printing Services Dubai",
  description: "Whites Printing Services LLC privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Whites Printing Services Dubai",
    description: "Whites Printing Services LLC privacy policy — how we collect, use, and protect your personal information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-sm text-grey-dark space-y-6">
          <p>
            At {SITE_NAME}, we take your privacy seriously. This policy describes how we collect, use, and
            protect your personal information when you use our website and services.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including your name, phone number, email address,
            company name, and project details when you fill out our quote request, contact form, or callback form.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your quote requests and inquiries</li>
            <li>Provide our printing and delivery services</li>
            <li>Communicate with you about your orders</li>
            <li>Improve our website and services</li>
            <li>Send occasional promotional offers (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy mt-8">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. Your data is stored securely and only accessed by
            authorized personnel.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information with trusted service providers who assist us in operating our website and conducting our
            business, subject to confidentiality agreements.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in
            your browser settings, though this may affect some functionality of the site.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information held by us. To exercise
            these rights, please contact us at {EMAIL}.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with
            an updated effective date.
          </p>

          <h2 className="text-xl font-semibold text-navy mt-8">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at {EMAIL}.
          </p>

          <p className="text-sm text-grey-dark pt-6 border-t border-[var(--grey-light)]">
            Last updated: January 2026
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
