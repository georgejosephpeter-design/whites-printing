"use client";

import Script from "next/script";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Whites Printing Services LLC",
    image: "https://whites.me/images/logo.png",
    description:
      "Dubai's trusted full-service commercial print shop. Business cards, brochures, banners, signage & more. Serving Dubai since 2010.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near National Paints Metro Station",
      addressLocality: "Deira",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2857,
      longitude: 55.3215,
    },
    url: "https://whites.me",
    telephone: "+971XXXXXXXXX",
    email: "info@whites.me",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50+",
      bestRating: "5",
    },
    knowsAbout: [
      "Commercial Printing",
      "Digital Printing",
      "Large Format Printing",
      "Signage",
      "Banner Printing",
      "Brochure Printing",
      "Business Card Printing",
    ],
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
