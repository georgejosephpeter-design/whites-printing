import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/shared/BreadcrumbJsonLd";
import GoogleReviewsWidget from "@/components/shared/GoogleReviewsWidget";
import ContactForm from "@/components/forms/ContactForm";
import { ADDRESS, PHONE_NUMBER, EMAIL, WORKING_HOURS, WHATSAPP_NUMBER } from "@/data/constants";

export const metadata: Metadata = {
  title: "Contact Whites Printing Services Dubai | Get in Touch",
  description: "Visit our shop near National Paints Metro, Deira. Call, WhatsApp, or email us. We're here Sat–Thu 9 AM–7 PM.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Whites Printing Services Dubai | Get in Touch",
    description: "Visit our shop near National Paints Metro, Deira. Call, WhatsApp, or email us.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <div className="bg-navy pt-[72px]">
        <SectionWrapper background="navy">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-10">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-white">
              Contact Whites Printing Services Dubai
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">
              We&apos;re here to help. Reach out for quotes, questions, or just to say hello.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-navy mb-6">Visit or Contact Us</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-navy text-sm">Address</h3>
                  <p className="text-sm text-grey-dark mt-1">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-navy text-sm">Phone</h3>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-sm text-cyan hover:underline mt-1 block"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-navy text-sm">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan hover:underline mt-1 block"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-navy text-sm">Email</h3>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-cyan hover:underline mt-1 block"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-cyan/10 flex items-center justify-center text-cyan shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-navy text-sm">Working Hours</h3>
                  <p className="text-sm text-grey-dark mt-1">{WORKING_HOURS}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[var(--grey-light)] rounded-lg overflow-hidden">
              <div className="aspect-[16/9] bg-navy/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="size-10 text-cyan mx-auto" />
                  <p className="text-sm text-grey-dark mt-3">
                    Near National Paints Metro Station<br />
                    Deira, Dubai
                  </p>
                  <a
                    href="https://maps.google.com/?q=National+Paints+Metro+Station+Deira+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-cyan font-medium hover:underline"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="grey">
        <div className="max-w-3xl mx-auto">
          <GoogleReviewsWidget />
        </div>
      </SectionWrapper>
    </>
  );
}
