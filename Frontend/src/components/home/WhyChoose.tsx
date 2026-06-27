import { Clock, Printer, Users, Truck } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "15+ Years UAE Experience",
    description: "Over a decade of serving Dubai businesses with consistent quality, reliable turnaround, and deep industry knowledge.",
  },
  {
    icon: Printer,
    title: "Canon C10000VP Technology",
    description: "Industry-leading Canon imagePRESS digital press delivering gallery-quality prints with precise color accuracy.",
  },
  {
    icon: Users,
    title: "7-Person Expert Team",
    description: "Dedicated team of prepress, design, production, finishing, and delivery professionals committed to your project.",
  },
  {
    icon: Truck,
    title: "In-House Delivery Fleet",
    description: "Own delivery team ensures your orders arrive on time, every time, across Dubai and the Northern Emirates.",
  },
];

export default function WhyChoose() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl sm:text-2xl font-semibold text-navy">
          Why Choose Whites
        </h2>
        <p className="text-base text-grey-dark mt-3 max-w-2xl mx-auto">
          We combine expertise, technology, and service to deliver printing that exceeds expectations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((point) => (
          <div key={point.title} className="text-center">
            <div className="size-14 mx-auto flex items-center justify-center rounded-full bg-[var(--grey-light)] text-cyan">
              <point.icon className="size-7" />
            </div>
            <h3 className="font-heading text-lg font-medium text-navy mt-5">{point.title}</h3>
            <p className="text-sm text-grey-dark mt-2 leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
