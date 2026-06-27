"use client";

import Script from "next/script";

interface ServiceJsonLdProps {
  name: string;
  description: string;
}

export default function ServiceJsonLd({ name, description }: ServiceJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Whites Printing Services LLC",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };

  return (
    <Script
      id="service-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
