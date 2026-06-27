export interface TeamCompetency {
  area: string;
  description: string;
  icon: string;
}

export const teamCompetencies: TeamCompetency[] = [
  {
    area: "Prepress & Design",
    description: "Expert prepress technicians ensure every file is print-ready. Our designers create stunning layouts tailored to your brand.",
    icon: "image",
  },
  {
    area: "Digital Printing",
    description: "Certified operators manage our Canon imagePRESS C10000VP for consistent, gallery-quality color reproduction.",
    icon: "printer",
  },
  {
    area: "Large Format Production",
    description: "Specialists in large-format printing, mounting, and finishing for banners, signage, and display graphics.",
    icon: "layout",
  },
  {
    area: "Finishing & Binding",
    description: "Skilled craftsmen handle cutting, folding, binding, lamination, and all post-press operations with precision.",
    icon: "book-open",
  },
  {
    area: "Signage Installation",
    description: "Professional installation team for acrylic signs, window graphics, wall murals, and exterior signage.",
    icon: "hard-hat",
  },
  {
    area: "Customer Service",
    description: "Dedicated account managers provide end-to-end support from quotation to delivery, ensuring a seamless experience.",
    icon: "message-circle",
  },
  {
    area: "Logistics & Delivery",
    description: "In-house delivery fleet ensures your orders arrive on time, every time, across Dubai and the Northern Emirates.",
    icon: "truck",
  },
];
