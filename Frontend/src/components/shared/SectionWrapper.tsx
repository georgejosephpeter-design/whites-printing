import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "grey" | "navy";
  id?: string;
}

const bgMap: Record<string, string> = {
  white: "bg-white",
  grey: "bg-[var(--grey-light)]",
  navy: "bg-navy",
};

export default function SectionWrapper({
  children,
  className = "",
  background = "white",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgMap[background]} py-20 md:py-16 sm:py-10 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-4">
        {children}
      </div>
    </section>
  );
}
