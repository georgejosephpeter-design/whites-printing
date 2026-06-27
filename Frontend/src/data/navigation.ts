export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Cards & Stationery", href: "/services/business-cards" },
      { label: "Flyers & Leaflets", href: "/services/flyers-leaflets" },
      { label: "Brochures & Catalogues", href: "/services/brochures-catalogues" },
      { label: "Posters & Large Format Printing", href: "/services/posters-large-format" },
      { label: "Roll-Up & Pop-Up Banners", href: "/services/roll-up-banners" },
      { label: "Banners & Outdoor Printing", href: "/services/banners-outdoor" },
      { label: "Foam Board & Forex Board Printing", href: "/services/foam-board-forex" },
      { label: "Window, Office & Event Graphics", href: "/services/window-event-graphics" },
      { label: "Acrylic Signs & Stands", href: "/services/acrylic-signs" },
      { label: "Stamps", href: "/services/stamps" },
      { label: "Photo Framing", href: "/services/photo-framing" },
      { label: "Binding Services", href: "/services/binding" },
      { label: "Awards, Certificates & Tent Cards", href: "/services/awards-certificates" },
      { label: "Labels, Menus & Invitation Cards", href: "/services/labels-menus" },
      { label: "Corporate Gifts", href: "/services/corporate-gifts" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Business Cards & Stationery", href: "/services/business-cards" },
  { label: "Flyers & Leaflets", href: "/services/flyers-leaflets" },
  { label: "Brochures & Catalogues", href: "/services/brochures-catalogues" },
  { label: "Posters & Large Format", href: "/services/posters-large-format" },
  { label: "Roll-Up & Pop-Up Banners", href: "/services/roll-up-banners" },
  { label: "Banners & Outdoor Printing", href: "/services/banners-outdoor" },
  { label: "Foam Board & Forex Board", href: "/services/foam-board-forex" },
  { label: "Window & Event Graphics", href: "/services/window-event-graphics" },
  { label: "Acrylic Signs & Stands", href: "/services/acrylic-signs" },
  { label: "Stamps", href: "/services/stamps" },
  { label: "Photo Framing", href: "/services/photo-framing" },
  { label: "Binding Services", href: "/services/binding" },
  { label: "Awards & Certificates", href: "/services/awards-certificates" },
  { label: "Labels, Menus & Invitations", href: "/services/labels-menus" },
  { label: "Corporate Gifts", href: "/services/corporate-gifts" },
];

export const footerIndustries: NavItem[] = [
  { label: "Schools & Education", href: "/industries/schools" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Hotels & Hospitality", href: "/industries/hotels" },
  { label: "Fitness & Gyms", href: "/industries/fitness" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Government", href: "/industries/government" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerSupport: NavItem[] = [
  { label: "Request Quote", href: "/quote" },
  { label: "WhatsApp", href: "https://wa.me/971585311993" },
  { label: "Request Callback", href: "/#callback" },
  { label: "Delivery Info", href: "/faq" },
];
