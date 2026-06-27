"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
  title?: string;
}

export default function FAQAccordion({ items, title }: FAQAccordionProps) {
  if (items.length === 0) return null;

  return (
    <div>
      {title && (
        <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-navy text-center mb-10">
          {title}
        </h2>
      )}
      <Accordion className="max-w-3xl mx-auto space-y-3">
        {items.map((item, index) => (
          <AccordionItem key={index} className="bg-[var(--grey-light)] rounded-lg overflow-hidden border-0">
            <AccordionTrigger className="px-5 py-4 text-navy font-medium hover:no-underline data-open:bg-white rounded-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-grey-dark leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
