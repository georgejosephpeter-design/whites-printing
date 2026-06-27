export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What file formats do you accept for printing?",
    answer: "We accept PDF, AI, EPS, CDR, PSD, and TIFF files. For best results, provide PDF with 3mm bleeds and CMYK color mode. Our prepress team checks every file before production to ensure print-readiness.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "What is your typical turnaround time?",
    answer: "Most standard print jobs are completed within 24–48 hours. Business cards and flyers can be ready in 24 hours. Large format and specialty items may take 48–72 hours. Rush services are available upon request.",
    category: "general",
  },
  {
    id: "faq-3",
    question: "Do you offer delivery services in Dubai?",
    answer: "Yes, we offer in-house delivery across Dubai and the Northern Emirates. Delivery is free for orders above a certain value. Same-day delivery is available for rush orders within Dubai.",
    category: "general",
  },
  {
    id: "faq-4",
    question: "What is the difference between CMYK and RGB?",
    answer: "CMYK (Cyan, Magenta, Yellow, Black) is the color model used for professional printing. RGB (Red, Green, Blue) is used for digital screens. We recommend designing your artwork in CMYK mode for accurate color reproduction in print.",
    category: "general",
  },
  {
    id: "faq-5",
    question: "Do you offer design services?",
    answer: "Yes, our experienced in-house design team can create artwork from scratch, modify existing designs, or prepare your files for printing. Design fees are quoted based on the scope of work.",
    category: "general",
  },
  {
    id: "faq-6",
    question: "What is the minimum order quantity?",
    answer: "Minimum quantities vary by product. Business cards start from 100 units, flyers from 50 units, and brochures from 25 units. Many products have no minimum. Contact us for specific product requirements.",
    category: "general",
  },
  {
    id: "faq-7",
    question: "Can I get a sample before placing a bulk order?",
    answer: "Yes, we can provide printed samples of our paper stocks and finishes. For custom projects, we offer proof prints before full production runs.",
    category: "general",
  },
  {
    id: "faq-8",
    question: "How do I request a quote?",
    answer: "You can request a quote through our website form, call us directly, or send a message on WhatsApp. Provide your specifications (quantity, size, paper type, finishing) and we will get back to you promptly.",
    category: "general",
  },
  {
    id: "faq-9",
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer tiered pricing for bulk orders. The more you print, the lower the per-unit cost. Contact us with your quantities for a customized quote.",
    category: "pricing",
  },
  {
    id: "faq-10",
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfer, and credit/debit cards. Corporate accounts can be set up with invoicing terms upon approval.",
    category: "pricing",
  },
  {
    id: "faq-11",
    question: "Can I cancel or modify an order after placing it?",
    answer: "Modifications can be made before production begins. Once printing has started, cancellations may incur charges for materials used. Contact us immediately if changes are needed.",
    category: "orders",
  },
  {
    id: "faq-12",
    question: "Do you offer eco-friendly printing options?",
    answer: "Yes, we offer recycled paper stocks and eco-friendly materials. We continuously work to reduce waste and use environmentally responsible practices in our production process.",
    category: "general",
  },
];
