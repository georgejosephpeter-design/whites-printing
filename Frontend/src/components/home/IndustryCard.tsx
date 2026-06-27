import Link from "next/link";
import {
  School, HeartPulse, Utensils, Dumbbell, Landmark, HardHat, Building, ShieldCheck,
  Clapperboard, ShoppingBag, Factory, Plane, Gem, Banknote, Briefcase, Globe,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  school: School,
  "heart-pulse": HeartPulse,
  utensils: Utensils,
  dumbbell: Dumbbell,
  landmark: Landmark,
  "hard-hat": HardHat,
  building: Building,
  "shield-check": ShieldCheck,
  clapperboard: Clapperboard,
  "shopping-bag": ShoppingBag,
  factory: Factory,
  plane: Plane,
  gem: Gem,
  bank: Banknote,
  briefcase: Briefcase,
  globe: Globe,
};

interface IndustryCardProps {
  title: string;
  icon: string;
  href: string;
}

export default function IndustryCard({ title, icon, href }: IndustryCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-3 h-[100px] bg-[var(--grey-light)] rounded-lg hover:bg-white hover:border hover:border-cyan transition-all duration-200 p-4"
    >
      <Icon className="size-8 text-navy" />
      <span className="text-sm font-medium text-navy text-center leading-tight">
        {title}
      </span>
    </Link>
  );
}
