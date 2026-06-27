export interface EquipmentItem {
  name: string;
  type: string;
  description: string;
  specs: string[];
  isFlagship: boolean;
  icon: string;
}

export const equipment: EquipmentItem[] = [
  {
    name: "Canon imagePRESS C10000VP",
    type: "Digital Production Press",
    description: "Our flagship digital press delivering exceptional color accuracy, consistency, and speed for premium print production.",
    specs: [
      "Print speed: 100 ppm (color/mono)",
      "Resolution: 2400 x 2400 DPI",
      "Max paper size: 330 x 660mm (SRA3+)",
      "Paper weight: 60–400 GSM",
      "Advanced color management with Pantone calibration",
      "In-line finishing: Creasing, folding, stapling, booklet making",
    ],
    isFlagship: true,
    icon: "printer",
  },
  {
    name: "Epson SureColor SC-S80600",
    type: "Large Format Printer",
    description: "64-inch eco-solvent printer for vibrant indoor and outdoor signage with ultra-high resolution.",
    specs: [
      "Print width: 64 inches (1,625mm)",
      "Resolution: 1440 x 1440 DPI",
      "Eco-solvent UltraChrome GS3 ink",
      "Media: Vinyl, banner, canvas, film, paper",
    ],
    isFlagship: false,
    icon: "layout",
  },
  {
    name: "Kongser KS-P1262B",
    type: "Hydraulic Cutting Machine",
    description: "Heavy-duty hydraulic cutting and creasing machine for precise finishing of all print materials.",
    specs: [
      "Cutting pressure: 120 tons",
      "Max sheet size: 1200 x 900mm",
      "Automatic feeding system",
      "Multi-function: Cutting, creasing, embossing, hot foil stamping",
    ],
    isFlagship: false,
    icon: "scissors",
  },
  {
    name: "Horizon BQ-270F",
    type: "Perfect Binder",
    description: "Automated perfect binder for professional book and catalogue production with consistent quality.",
    specs: [
      "Max book thickness: 80mm",
      "Production speed: 300 cycles/hour",
      "Self-adjusting setup",
      "Cover nipping and scoring",
    ],
    isFlagship: false,
    icon: "book-open",
  },
  {
    name: "Ecoterm E1000",
    type: "Laminating Machine",
    description: "High-speed thermal laminating machine for protective finishes on printed materials.",
    specs: [
      "Max width: 1,000mm",
      "Speed: 10m/min",
      "Temperature: 80–160°C",
      "Heated rollers for premium finish",
    ],
    isFlagship: false,
    icon: "layers",
  },
  {
    name: "Mimaki CJV150-130",
    type: "Printer/Cutter",
    description: "Integrated print-and-cut large format machine for stickers, labels, and contour-cut graphics.",
    specs: [
      "Print width: 1,360mm",
      "Resolution: 1440 DPI",
      "Integrated contour cutting",
      "SS21 ink for outdoor durability",
    ],
    isFlagship: false,
    icon: "tag",
  },
  {
    name: "Duplo DC-646",
    type: "Slitter/Cutter/Creaser",
    description: "Automated slitting, cutting, and creasing for business cards, flyers, and postcards in one pass.",
    specs: [
      "Speed: 60 sheets/min",
      "Performs slit, cut, crease, and score in single pass",
      "Touchscreen control",
      "Handles multiple-up layouts efficiently",
    ],
    isFlagship: false,
    icon: "file-text",
  },
  {
    name: "Graphtec FC8600",
    type: "Plotter/Cutter",
    description: "Precision cutting plotter for vinyl decals, stencils, and custom shapes with exceptional accuracy.",
    specs: [
      "Cutting width: 860mm",
      "Cutting speed: Max 1,000mm/s",
      "Pressure: Up to 450g",
      "Auto-registration mark detection",
    ],
    isFlagship: false,
    icon: "sticker",
  },
];
