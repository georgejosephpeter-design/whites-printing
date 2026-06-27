export interface Offer {
  id: string;
  title: string;
  description: string;
  validity: string;
  cta: string;
  active: boolean;
}

export const offers: Offer[] = [
  {
    id: "offer-1",
    title: "Free Design Service",
    description: "Get complimentary design service on any print order above AED 500. Our expert designers will create or refine your artwork at no extra cost.",
    validity: "Valid until further notice",
    cta: "Claim Free Design",
    active: true,
  },
  {
    id: "offer-2",
    title: "Business Card Special",
    description: "Premium business cards with spot UV finish at special rates. 500 cards for AED 149. Choose from 3 premium paper stocks.",
    validity: "Limited time offer",
    cta: "Order Now",
    active: true,
  },
  {
    id: "offer-3",
    title: "Free Delivery",
    description: "Free delivery across Dubai and the Northern Emirates on all orders above AED 200. Same-day delivery available for rush orders.",
    validity: "Ongoing",
    cta: "Learn More",
    active: true,
  },
];
