import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MobileMenu = dynamic(() => import("@/components/layout/MobileMenu"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/components/layout/WhatsAppButton"), { ssr: true });

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
