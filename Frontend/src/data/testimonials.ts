export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  industry: string;
  rating: number;
  isNamed: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Whites Printing has been our go-to print partner for over three years. Their quality is consistently excellent and they always deliver on time, even with tight deadlines.",
    author: "Ahmed Al Mazroui",
    company: "Al Mazroui Group",
    industry: "Corporate",
    rating: 5,
    isNamed: true,
  },
  {
    id: "test-2",
    quote: "The acrylic signs they produced for our new office reception exceeded our expectations. Professional, elegant, and installed without any hassle.",
    author: "Sarah Johnson",
    company: "Gulf Medical Center",
    industry: "Healthcare",
    rating: 5,
    isNamed: true,
  },
  {
    id: "test-3",
    quote: "We needed 5,000 brochures for a product launch in three days. Whites Printing delivered on day two. The print quality was outstanding and our clients were impressed.",
    author: "Raj Patel",
    company: "TechVista Solutions",
    industry: "Technology",
    rating: 5,
    isNamed: true,
  },
  {
    id: "test-4",
    quote: "Their menu printing service is excellent. The laminated menus have held up perfectly in our busy restaurant environment. Highly recommended for hospitality businesses.",
    author: "Marco Rossi",
    company: "Ristorante Bella Vita",
    industry: "Hospitality",
    rating: 4,
    isNamed: true,
  },
  {
    id: "test-5",
    quote: "Whites handles all our school printing from ID cards to graduation certificates. Reliable, affordable, and the quality is always top-notch.",
    author: "Fatima Hassan",
    company: "Dubai International Academy",
    industry: "Education",
    rating: 5,
    isNamed: true,
  },
  {
    id: "test-6",
    quote: "The best print shop in Deira. They understand branding and always offer helpful advice on paper stock and finishes. Fair prices and great customer service.",
    author: "Omar Khaled",
    company: "Al Khaled Real Estate",
    industry: "Real Estate",
    rating: 5,
    isNamed: true,
  },
];
