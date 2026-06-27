import Link from "next/link";
import {
  School, HeartPulse, Utensils, Dumbbell, Landmark, HardHat, Building,
  ShieldCheck, Clapperboard, ShoppingBag, Factory, Plane, Gem, Banknote, Briefcase,
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
  banknote: Banknote,
  briefcase: Briefcase,
};

interface IndustryCardProps {
  title: string;
  slug: string;
  icon: string;
  description: string;
}

export default function IndustryCard({ title, slug, icon, description }: IndustryCardProps) {
  const Icon = iconMap[icon] || Building;

  return (
    <Link
      href={`/industries/${slug}`}
      className="block bg-[var(--grey-light)] rounded-lg p-6 hover:border-cyan hover:border transition-all duration-300 group"
    >
      <div className="size-12 flex items-center justify-center text-cyan">
        <Icon className="size-8" />
      </div>
      <h3 className="font-heading text-lg font-medium text-navy mt-4 group-hover:text-cyan transition-colors">
        {title}
      </h3>
      <p className="text-sm text-grey-dark mt-2 line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
