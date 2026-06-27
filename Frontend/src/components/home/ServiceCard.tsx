import Link from "next/link";
import {
  Printer, Image, FileText, FileSpreadsheet, ScrollText, Layout, PanelBottom, PanelTop,
  PanelRight, Sticker, Frame, BookOpen, Award, Tag, Gift, CreditCard, Stamp,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  printer: Printer,
  image: Image,
  "file-text": FileText,
  "file-spreadsheet": FileSpreadsheet,
  "scroll-text": ScrollText,
  layout: Layout,
  "panel-bottom": PanelBottom,
  "panel-top": PanelTop,
  "panel-right": PanelRight,
  sticker: Sticker,
  frame: Frame,
  "book-open": BookOpen,
  award: Award,
  tag: Tag,
  gift: Gift,
  "credit-card": CreditCard,
  stamp: Stamp,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const Icon = iconMap[icon] || Printer;

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="size-12 flex items-center justify-center text-cyan">
        <Icon className="size-8" />
      </div>
      <h3 className="font-heading text-lg font-medium text-navy mt-4">{title}</h3>
      <p className="text-sm text-grey-dark mt-2 line-clamp-3 flex-1">{description}</p>
      <Link
        href={href}
        className="text-cyan text-sm font-medium mt-4 inline-block hover:underline"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
