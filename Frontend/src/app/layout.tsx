import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppProvider } from "@/context/WhatsAppContext";
import JsonLd from "@/components/shared/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Whites Printing Services LLC | Premium Printing Dubai",
    template: "%s | Whites Printing",
  },
  description:
    "Dubai's trusted full-service print shop. Business cards, brochures, banners, signage & more. 15+ years experience. Get a free quote online.",
  metadataBase: new URL("https://whites.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Whites Printing Services LLC | Premium Printing Dubai",
    description:
      "Dubai's trusted full-service print shop. Business cards, brochures, banners, signage & more. 15+ years experience. Get a free quote online.",
    type: "website",
    locale: "en_AE",
    siteName: "Whites Printing Services LLC",
    url: "https://whites.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whites Printing Services LLC | Premium Printing Dubai",
    description:
      "Dubai's trusted full-service print shop. Business cards, brochures, banners, signage & more. 15+ years experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <WhatsAppProvider>
          <JsonLd />
          {children}
        </WhatsAppProvider>
        <Toaster />
      </body>
    </html>
  );
}
