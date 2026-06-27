# System Design Document — Whites Printing Services LLC

> **Version:** 1.0  
> **Project:** Whites Printing Services LLC — Corporate Website  
> **Framework:** Next.js 16.2.9 (App Router)  
> **Last Updated:** 2026-06-27

---

## Table of Contents

1. [Directory Structure](#1-directory-structure)
2. [Component Tree](#2-component-tree)
3. [Route Design](#3-route-design)
4. [Data Models (TypeScript Interfaces)](#4-data-models-typescript-interfaces)
5. [Component Specifications](#5-component-specifications)
6. [API Route Design](#6-api-route-design)
7. [Data Flow Architecture](#7-data-flow-architecture)
8. [State Management](#8-state-management)
9. [Backend Architecture](#9-backend-architecture)
10. [SEO & Structured Data](#10-seo--structured-data)
11. [Implementation Order (6 Phases)](#11-implementation-order-6-phases)

---

## 1. Directory Structure

```
Frontend/src/
├── app/
│   ├── globals.css                          # Design tokens from system
│   ├── layout.tsx                           # Root layout: Montserrat+Inter fonts, Toaster, WhatsAppContext provider
│   ├── page.tsx                             # Redirect to (home) group
│   ├── not-found.tsx                        # 404 page
│   ├── error.tsx                            # Root error boundary
│   ├── loading.tsx                          # Root loading state
│   ├── sitemap.ts                           # Dynamic sitemap generation
│   ├── robots.ts                            # Robots.txt generation
│   │
│   ├── (home)/
│   │   ├── layout.tsx                       # Homepage layout (Navbar + Footer + WhatsAppButton)
│   │   └── page.tsx                         # Homepage composition
│   │
│   ├── (content)/
│   │   ├── layout.tsx                       # Content layout (Navbar + Breadcrumbs + Footer + WhatsAppButton + BottomCTABar)
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx                     # Services overview page
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                 # Service detail page (ServiceTemplate)
│   │   │       ├── loading.tsx
│   │   │       ├── error.tsx
│   │   │       └── not-found.tsx
│   │   │
│   │   ├── industries/
│   │   │   ├── page.tsx                     # Industries overview page
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                 # Industry detail page (IndustryTemplate)
│   │   │       ├── loading.tsx
│   │   │       ├── error.tsx
│   │   │       └── not-found.tsx
│   │   │
│   │   ├── locations/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                 # Location SEO page
│   │   │       ├── loading.tsx
│   │   │       ├── error.tsx
│   │   │       └── not-found.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   ├── quote/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   ├── faq/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   ├── offers/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   ├── technology/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   │
│   │   └── privacy/
│   │       ├── page.tsx
│   │       ├── loading.tsx
│   │       └── error.tsx
│   │
│   └── api/
│       ├── quotes/
│       │   └── route.ts                     # POST — submit quote request
│       ├── callbacks/
│       │   └── route.ts                     # POST — request callback
│       ├── contact/
│       │   └── route.ts                     # POST — contact form submission
│       ├── upload/
│       │   └── route.ts                     # POST — file upload handler
│       └── content/
│           └── [type]/
│               └── route.ts                 # GET — return JSON for any content type
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                       # Sticky top nav with mobile drawer
│   │   ├── Footer.tsx                       # 4-column footer
│   │   ├── WhatsAppButton.tsx               # Floating WhatsApp CTA
│   │   └── MobileDrawer.tsx                 # Slide-in mobile navigation
│   │
│   ├── home/
│   │   ├── Hero.tsx                         # Hero section
│   │   ├── ServiceGrid.tsx                  # Featured services grid
│   │   ├── IndustryScroll.tsx               # Horizontal scrolling industries
│   │   ├── WhyChoose.tsx                    # Why Whites section
│   │   ├── TechnologyShowcase.tsx           # Equipment/tech section
│   │   ├── TestimonialsSection.tsx          # Testimonial carousel
│   │   ├── OffersSection.tsx                # Active offers display
│   │   ├── CoverageMap.tsx                  # Map/area coverage section
│   │   └── CTABanner.tsx                    # Call-to-action banner
│   │
│   ├── services/
│   │   ├── ServiceCard.tsx                  # Card for service grid
│   │   ├── ServiceTemplate.tsx              # Full service detail layout
│   │   └── ServiceSidebar.tsx               # Sidebar nav for services
│   │
│   ├── industries/
│   │   ├── IndustryCard.tsx                 # Card for industry grid
│   │   └── IndustryTemplate.tsx             # Full industry detail layout
│   │
│   ├── forms/
│   │   ├── QuoteForm.tsx                    # Multi-step quote form
│   │   ├── CallbackForm.tsx                 # Quick callback form
│   │   ├── ContactForm.tsx                  # Contact page form
│   │   └── FileUpload.tsx                   # Drag-drop file uploader
│   │
│   ├── shared/
│   │   ├── SectionWrapper.tsx               # Section container with padding/background
│   │   ├── ScrollAnimate.tsx                # Intersection Observer wrapper
│   │   ├── Breadcrumbs.tsx                  # Dynamic breadcrumb trail
│   │   ├── CTABanner.tsx                    # Reusable CTA banner (shared)
│   │   ├── BottomCTABar.tsx                 # Sticky bottom bar on mobile
│   │   ├── TrustBadges.tsx                  # Payment/trust badges
│   │   ├── GoogleReviewsWidget.tsx          # Google reviews embed
│   │   └── FAQAccordion.tsx                 # Accordion for FAQs
│   │
│   └── about/
│       ├── TeamSection.tsx                  # Team/competency section
│       ├── EquipmentShowcase.tsx            # Equipment list with specs
│       └── ProcessFlow.tsx                  # How-it-works flowchart
│
├── lib/
│   ├── utils.ts                             # cn() utility
│   ├── content.ts                           # Content retrieval helpers
│   ├── types.ts                             # All TypeScript interfaces & enums
│   ├── api.ts                               # Fetch wrappers for content API
│   └── constants.ts                         # Site-wide constants (nav items, etc.)
│
├── data/
│   ├── services.ts                          # 15 service entries
│   ├── industries.ts                        # 16 industry entries
│   ├── locations.ts                         # 15 location entries
│   ├── faq.ts                               # FAQ entries by category
│   ├── testimonials.ts                      # Testimonial entries
│   ├── offers.ts                            # Current/past offers
│   ├── team.ts                              # Team competencies
│   ├── equipment.ts                         # Equipment list
│   └── navigation.ts                        # Navigation structure
│
└── context/
    └── WhatsAppContext.tsx                   # WhatsApp pre-fill context
```

---

## 2. Component Tree

### Root Layout (`layout.tsx`)
```
<html>
  <body>
    <WhatsAppProvider>
      <Toaster />
      {children}
    </WhatsAppProvider>
  </body>
</html>
```

### Homepage — `(home)/page.tsx`
```
HomePage
├── Navbar                                      [shared/layout]
├── <main>
│   ├── Hero                                    [home]
│   │   ├── ScrollAnimate                       [shared]
│   │   └── CTABanner (inline CTA)              [shared]
│   ├── ServiceGrid                             [home]
│   │   ├── ScrollAnimate                       [shared]
│   │   └── ServiceCard × 6                     [services]
│   ├── IndustryScroll                          [home]
│   │   ├── ScrollAnimate                       [shared]
│   │   └── IndustryCard × 6                    [industries]
│   ├── WhyChoose                               [home]
│   │   └── ScrollAnimate                       [shared]
│   ├── TechnologyShowcase                      [home]
│   │   └── ScrollAnimate                       [shared]
│   ├── TestimonialsSection                     [home]
│   │   ├── ScrollAnimate                       [shared]
│   │   └── TestimonialCard × 3–5               [inline]
│   ├── OffersSection                           [home]
│   │   └── ScrollAnimate                       [shared]
│   ├── CoverageMap                             [home]
│   │   └── ScrollAnimate                       [shared]
│   └── CTABanner                               [home]
│       └── ScrollAnimate                       [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout] (mobile only)
```

### Services Overview — `services/page.tsx`
```
ServicesPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (intro)                  [shared]
│   ├── SectionWrapper (grid)
│   │   └── ServiceCard × 15                    [services]
│   └── CTABanner                               [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Service Detail — `services/[slug]/page.tsx`
```
ServiceDetailPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   └── ServiceTemplate                         [services]
│       ├── Hero (title, description, CTA)
│       ├── Section (specs & turnaround)
│       ├── Section (use cases)
│       ├── FAQAccordion                        [shared]
│       ├── ServiceSidebar                      [services]
│       │   └── ServiceCard × 4                 [services] (related)
│       └── CTABanner                           [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Industries Overview — `industries/page.tsx`
```
IndustriesPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (intro)                  [shared]
│   ├── SectionWrapper (grid)
│   │   └── IndustryCard × 16                   [industries]
│   └── CTABanner                               [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Industry Detail — `industries/[slug]/page.tsx`
```
IndustryDetailPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   └── IndustryTemplate                        [industries]
│       ├── Hero (title, description, CTA)
│       ├── Section (products used)
│       ├── Section (why Whites)
│       ├── ServiceCard × N                     [services] (relevant services)
│       └── CTABanner                           [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Location SEO — `locations/[slug]/page.tsx`
```
LocationPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (area intro + map)
│   ├── SectionWrapper (key sectors served)
│   ├── SectionWrapper (nearby landmarks)
│   ├── ServiceCard × N                         [services] (relevant)
│   └── CTABanner (localized)                   [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### About — `about/page.tsx`
```
AboutPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (company story)          [shared]
│   ├── TeamSection                             [about]
│   │   └── ScrollAnimate × N                   [shared]
│   ├── EquipmentShowcase                       [about]
│   │   └── ScrollAnimate × N                   [shared]
│   ├── ProcessFlow                             [about]
│   │   └── ScrollAnimate × N                   [shared]
│   ├── TrustBadges                             [shared]
│   └── CTABanner                               [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Contact — `contact/page.tsx`
```
ContactPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (contact details)
│   │   ├── Address, Phone, Email, Map embed
│   │   └── GoogleReviewsWidget                 [shared]
│   └── SectionWrapper (form)
│       └── ContactForm                         [forms]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Quote — `quote/page.tsx`
```
QuotePage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   └── SectionWrapper
│       └── QuoteForm                           [forms]
│           ├── Step 1: Service selection
│           ├── Step 2: Specifications
│           ├── Step 3: File upload (FileUpload)  [forms]
│           ├── Step 4: Contact details
│           └── Step 5: Review & submit
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### FAQ — `faq/page.tsx`
```
FAQPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (intro)
│   └── SectionWrapper (accordions by category)
│       └── FAQAccordion × N                    [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Offers — `offers/page.tsx`
```
OffersPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (active offers)
│   │   └── OfferCard × N                       [inline]
│   └── SectionWrapper (expired/past)
│       └── OfferCard × N                       [inline]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Technology — `technology/page.tsx`
```
TechnologyPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   ├── SectionWrapper (overview)
│   ├── EquipmentShowcase                       [about]
│   ├── SectionWrapper (quality & finishing)
│   └── CTABanner                               [shared]
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### Privacy — `privacy/page.tsx`
```
PrivacyPage
├── Navbar                                      [shared/layout]
├── Breadcrumbs                                 [shared]
├── <main>
│   └── SectionWrapper (policy content)
│       └── Prose content from data file
├── Footer                                      [shared/layout]
├── WhatsAppButton                              [shared/layout]
└── BottomCTABar                                [shared/layout]
```

### 404 — `not-found.tsx`
```
NotFoundPage
├── Navbar                                      [shared/layout]
├── <main>
│   ├── 404 illustration
│   ├── Message + link home
│   └── Search / quick links
├── Footer                                      [shared/layout]
└── WhatsAppButton                              [shared/layout]
```

---

## 3. Route Design

| Route | Page File | Layout | Loading | Error | Not-Found | Notes |
|---|---|---|---|---|---|---|
| `/` | `(home)/page.tsx` | `(home)/layout.tsx` | Root `loading.tsx` | Root `error.tsx` | Root `not-found.tsx` | Nav + Footer in layout |
| `/services` | `(content)/services/page.tsx` | `(content)/layout.tsx` | `services/loading.tsx` | `services/error.tsx` | `services/not-found.tsx` | Breadcrumbs in layout |
| `/services/[slug]` | `(content)/services/[slug]/page.tsx` | `(content)/layout.tsx` | `[slug]/loading.tsx` | `[slug]/error.tsx` | `[slug]/not-found.tsx` | generateStaticParams for 15 slugs |
| `/industries` | `(content)/industries/page.tsx` | `(content)/layout.tsx` | `industries/loading.tsx` | `industries/error.tsx` | `industries/not-found.tsx` | |
| `/industries/[slug]` | `(content)/industries/[slug]/page.tsx` | `(content)/layout.tsx` | `[slug]/loading.tsx` | `[slug]/error.tsx` | `[slug]/not-found.tsx` | generateStaticParams for 16 slugs |
| `/locations/[slug]` | `(content)/locations/[slug]/page.tsx` | `(content)/layout.tsx` | `[slug]/loading.tsx` | `[slug]/error.tsx` | `[slug]/not-found.tsx` | generateStaticParams for 15 slugs |
| `/about` | `(content)/about/page.tsx` | `(content)/layout.tsx` | `about/loading.tsx` | `about/error.tsx` | Root `not-found.tsx` | |
| `/contact` | `(content)/contact/page.tsx` | `(content)/layout.tsx` | `contact/loading.tsx` | `contact/error.tsx` | Root `not-found.tsx` | |
| `/quote` | `(content)/quote/page.tsx` | `(content)/layout.tsx` | `quote/loading.tsx` | `quote/error.tsx` | Root `not-found.tsx` | |
| `/faq` | `(content)/faq/page.tsx` | `(content)/layout.tsx` | `faq/loading.tsx` | `faq/error.tsx` | Root `not-found.tsx` | |
| `/offers` | `(content)/offers/page.tsx` | `(content)/layout.tsx` | `offers/loading.tsx` | `offers/error.tsx` | Root `not-found.tsx` | |
| `/technology` | `(content)/technology/page.tsx` | `(content)/layout.tsx` | `technology/loading.tsx` | `technology/error.tsx` | Root `not-found.tsx` | |
| `/privacy` | `(content)/privacy/page.tsx` | `(content)/layout.tsx` | `privacy/loading.tsx` | `privacy/error.tsx` | Root `not-found.tsx` | |
| `/*` | `not-found.tsx` | None | — | — | — | Catch-all 404 |

**Route Group Notes:**
- `(home)/layout.tsx` — provides Navbar, Footer, WhatsAppButton, BottomCTABar. No Breadcrumbs (hero is full-bleed).
- `(content)/layout.tsx` — provides Navbar, Breadcrumbs, Footer, WhatsAppButton, BottomCTABar. Breadcrumbs auto-generated from pathname.
- Root `layout.tsx` — wraps all groups with fonts, Toaster, WhatsAppContext.

---

## 4. Data Models (TypeScript Interfaces)

All interfaces in `src/lib/types.ts`:

```typescript
// ─── Services ───────────────────────────────────────────────
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;                          // Lucide icon name
  iconLibrary?: 'lucide' | 'custom';    // default: 'lucide'
  useCases: string[];
  specs: string[];
  turnaround: string;                    // e.g. "24–48 hours"
  minOrder?: string;
  finishingOptions?: string[];
  faq: FAQEntry[];
  relatedServices: string[];             // slugs
  cta: {
    label: string;
    href: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

// ─── Industries ─────────────────────────────────────────────
export interface Industry {
  slug: string;
  title: string;
  icon: string;
  description: string;
  products: string[];                    // service slugs commonly used
  whyWhites: string[];
  cta: {
    label: string;
    href: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

// ─── Locations ──────────────────────────────────────────────
export interface Location {
  slug: string;
  title: string;                         // "Printing Services in Al Qusais"
  areaName: string;                      // "Al Qusais"
  distance: string;                      // e.g. "2.3 km from our shop"
  mapCoords: {
    lat: number;
    lng: number;
  };
  description: string;
  keySectors: string[];                  // industry slugs
  nearby: string[];                      // landmark names
  metaTitle?: string;
  metaDescription?: string;
}

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'design' | 'delivery' | 'payment' | 'general' | string;
}

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  industry: string;
  rating: 1 | 2 | 3 | 4 | 5;
  isNamed: boolean;                      // false = "Happy Client, Dubai"
  avatarUrl?: string;
  date?: string;
}

// ─── Offers ─────────────────────────────────────────────────
export interface Offer {
  id: string;
  title: string;
  description: string;
  validityStart: string;                 // ISO date string
  validityEnd: string;                   // ISO date string
  cta: {
    label: string;
    href: string;
  };
  active: boolean;
  terms?: string;
  discount?: string;                     // e.g. "20% OFF"
}

// ─── Team / Competencies ────────────────────────────────────
export interface TeamMember {
  competency: string;                    // e.g. "Graphic Design"
  description: string;
  icon: string;                          // Lucide icon name
}

// ─── Equipment ──────────────────────────────────────────────
export interface EquipmentItem {
  name: string;                          // e.g. "HP Latex 3600"
  type: 'printer' | 'cutter' | 'finishing' | 'binding' | 'other';
  description: string;
  specs: string[];
  isFlagship: boolean;
  icon: string;
}

// ─── Forms ──────────────────────────────────────────────────
export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;                       // service slug
  quantity?: number;
  files?: UploadedFile[];
  description?: string;
  deliveryRequired: boolean;
  installationRequired: boolean;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  timePreference: 'morning' | 'afternoon' | 'evening' | 'any';
  description?: string;
}

export interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
}

export interface UploadedFile {
  name: string;
  size: number;                          // bytes
  type: string;                          // MIME type
  url: string;                           // path or CDN URL
}

// ─── Navigation ─────────────────────────────────────────────
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

// ─── API Responses ──────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface ContentResponse<T = unknown> {
  items: T[];
  total: number;
  type: string;
}

// ─── Context ────────────────────────────────────────────────
export interface WhatsAppContextType {
  prefillMessage: string;
  setPrefillMessage: (msg: string) => void;
  phoneNumber: string;                   // "+971XXXXXXXXX"
  openWhatsApp: () => void;
}
```

---

## 5. Component Specifications

### 5.1 Layout Components

---

#### `Navbar`
```typescript
interface NavbarProps {
  transparent?: boolean;  // transparent bg on hero pages, solid on scroll
}
```
- **Description:** Sticky top navigation. Logo left, nav links center, CTA button right. Mobile: hamburger → MobileDrawer. Scroll listener adds shadow/opaque background on scrollY > 50px. Highlights active route.
- **Data source:** Client component (`"use client"`). Reads `navigation.ts` via import.
- **Responsive:** Desktop: full horizontal nav. Tablet: condensed links + hamburger. Mobile: hamburger only.
- **States:** Normal, scrolled (bg-navy/white with shadow), mobile drawer open.

---

#### `Footer`
```typescript
interface FooterProps {
  hideNewsletter?: boolean;
}
```
- **Description:** 4-column footer: (1) Logo + description + social links, (2) Quick Links, (3) Services, (4) Contact info. Bottom bar with copyright + payment badges.
- **Data source:** Server component. Imports `navigation.ts` and `constants.ts`.
- **Responsive:** Desktop: 4 columns. Tablet: 2×2 grid. Mobile: stacked.
- **States:** Static — no loading/error states.

---

#### `WhatsAppButton`
```typescript
interface WhatsAppButtonProps {
  position?: 'bottom-right' | 'bottom-left';
}
```
- **Description:** Fixed-position floating button. Uses WhatsAppContext to pre-fill message. Opens `wa.me` link in new tab. Accessible label.
- **Data source:** Client component (`"use client"`). Reads WhatsAppContext.
- **Responsive:** Visible on all breakpoints. Slightly smaller on mobile (48px vs 56px).
- **States:** Normal, hover (scale 1.1), tooltip on first visit.

---

#### `MobileDrawer`
```typescript
interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: NavigationItem[];
}
```
- **Description:** Slide-in drawer from right (or left) for mobile navigation. Renders `items` recursively for sub-menus. Focus trap + body scroll lock when open. Backdrop overlay.
- **Data source:** Client component. Receives `items` as prop.
- **Responsive:** Hidden on desktop (display:none via Tailwind `lg:hidden`).
- **States:** Closed (translateX 100%), open (translateX 0), submenu expanded.

---

### 5.2 Home Components

---

#### `Hero`
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  backgroundVideo?: string;
  backgroundImage?: string;
}
```
- **Description:** Full-viewport hero with navy gradient background, optional video/image, headline, subheadline, and two CTAs. CTA hierarchy: "Get a Quote" (primary/magenta), "WhatsApp Us" (secondary/cyan).
- **Data source:** Server component. Content from `constants.ts`.
- **Responsive:** Desktop: full height, text left-aligned. Mobile: reduced height (60vh), centered text, smaller headings.
- **States:** Normal, loading (skeleton if video).

---

#### `ServiceGrid`
```typescript
interface ServiceGridProps {
  services: Service[];
  limit?: number;
  columns?: 2 | 3 | 4;
  showAllLink?: boolean;
}
```
- **Description:** Grid of ServiceCards. Homepage shows 6 featured services with "View All" link. Uses `ScrollAnimate` for each row.
- **Data source:** Server component. Receives `services` as prop from page.
- **Responsive:** 4 cols desktop, 2 cols tablet, 1 col mobile.
- **States:** Empty (hidden if no services).

---

#### `IndustryScroll`
```typescript
interface IndustryScrollProps {
  industries: Industry[];
}
```
- **Description:** Horizontal scrolling row of IndustryCards. Click/drag to scroll. Left/right arrow buttons on desktop.
- **Data source:** Server component. Receives `industries` as prop.
- **Responsive:** Desktop: horizontal scroll with arrows. Mobile: swipeable row.
- **States:** Empty (hidden), edge states (arrows disabled at ends).

---

#### `WhyChoose`
```typescript
interface WhyChooseProps {
  items: { icon: string; title: string; description: string }[];
}
```
- **Description:** 3- or 4-column grid highlighting unique selling points (quality, speed, support, expertise). Icon + heading + short blurb per item.
- **Data source:** Server component. Content from `constants.ts`.
- **Responsive:** 3 cols desktop, 2 cols tablet, 1 col mobile.
- **States:** Static.

---

#### `TechnologyShowcase`
```typescript
interface TechnologyShowcaseProps {
  items: EquipmentItem[];
  limit?: number;
}
```
- **Description:** Cards showing latest equipment/technology. Icons, names, brief specs. "See all technology" link.
- **Data source:** Server component. From `equipment.ts`.
- **Responsive:** 3 cols desktop, 2 cols tablet, 1 col mobile.
- **States:** Empty (hidden).

---

#### `TestimonialsSection`
```typescript
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}
```
- **Description:** Carousel/slider of TestimonialCards. Auto-rotate every 5s, pause on hover. Dot navigation + prev/next arrows.
- **Data source:** Client component (carousel interactivity). Data from `testimonials.ts` via page.
- **Responsive:** Desktop: 3 cards visible. Tablet: 2 cards. Mobile: 1 card (single column).
- **States:** Loading (skeleton cards), empty (hidden), active slide, transitioning.

---

#### `OffersSection`
```typescript
interface OffersSectionProps {
  offers: Offer[];
}
```
- **Description:** Displays active offers (filtered by `offer.active && validityEnd > now`). Cards with discount badge, title, validity dates, CTA.
- **Data source:** Server component. From `offers.ts`.
- **Responsive:** 2 cols desktop, 1 col mobile.
- **States:** No active offers (hidden section entirely).

---

#### `CoverageMap`
```typescript
interface CoverageMapProps {
  locations: Location[];
  centerLat?: number;
  centerLng?: number;
}
```
- **Description:** Map or visual showing service coverage across Dubai areas. Lists nearby areas. Could use a simple SVG map (Phase 1) or Google Maps embed (Phase 2).
- **Data source:** Server component. From `locations.ts`.
- **Responsive:** Desktop: map + list side-by-side. Mobile: stacked.
- **States:** Static.

---

#### `CTABanner` (home variant)
```typescript
interface CTABannerProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  variant?: 'navy' | 'cyan' | 'magenta';
}
```
- **Description:** Full-width call-to-action banner with background color, text, and CTA button. Used at bottom of homepage and as shared component on content pages.
- **Data source:** Server component. Receives content as props.
- **Responsive:** Text + button always stacked vertically on mobile, side-by-side on desktop.
- **States:** Static.

---

### 5.3 Services Components

---

#### `ServiceCard`
```typescript
interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'sidebar';
}
```
- **Description:** Clickable card for a service. Shows icon, title, short description, CTA. Hover lifts shadow + subtle icon color shift.
- **Data source:** Server component. Receives `Service` object as prop.
- **Responsive:** Width dictated by parent grid.
- **States:** Normal, hover, active (clicked/selected).

---

#### `ServiceTemplate`
```typescript
interface ServiceTemplateProps {
  service: Service;
  relatedServices: Service[];
}
```
- **Description:** Full-service detail layout. Sections: hero (title + description), specs table, use cases list, finishing options, turnaround, FAQ (accordion), related services sidebar, bottom CTA.
- **Data source:** Server component. Content from `services.ts`.
- **Responsive:** Desktop: content + sidebar layout. Mobile: single column, sidebar below.
- **States:** Loading (skeleton for each section), 404 (handled by `not-found.tsx`).

---

#### `ServiceSidebar`
```typescript
interface ServiceSidebarProps {
  currentSlug: string;
  services: Service[];
}
```
- **Description:** Sticky sidebar listing all services. Highlights current. Links to each service page.
- **Data source:** Server component. From `services.ts`.
- **Responsive:** Desktop: sticky sidebar (top: 100px). Tablet: horizontal strip. Mobile: hidden (replaced by bottom nav/bottom bar).
- **States:** Normal, active (current).

---

### 5.4 Industries Components

---

#### `IndustryCard`
```typescript
interface IndustryCardProps {
  industry: Industry;
}
```
- **Description:** Card for an industry. Icon, title, brief description. Hover effect.
- **Data source:** Server component.
- **Responsive:** Grid-based sizing.
- **States:** Normal, hover.

---

#### `IndustryTemplate`
```typescript
interface IndustryTemplateProps {
  industry: Industry;
  relevantServices: Service[];
}
```
- **Description:** Full industry detail. Hero, products/services list (with links to service pages), why Whites section (bullet points), relevant ServiceCards, bottom CTA.
- **Data source:** Server component.
- **Responsive:** Content + sidebar or full width.
- **States:** Loading skeleton, 404.

---

### 5.5 Form Components

---

#### `QuoteForm`
```typescript
interface QuoteFormProps {
  preSelectedService?: string;  // slug, pre-fills step 1
}
```
- **Description:** Multi-step form (5 steps). Steps: (1) Select service category → specific service, (2) Quantity + specs, (3) File upload (FileUpload component), (4) Contact info (name, phone, email?, company?), (5) Review + submit. Progress bar at top. Validates each step before proceeding. Submits to `POST /api/quotes`. Shows success toast + WhatsApp prompt.
- **Data source:** Client component (`"use client"`). Data from `services.ts` (list for dropdown). All state local.
- **Responsive:** Single column always (form width max 640px centered). File upload full-width.
- **States:** Step 1–5 active, validation error per field, submitting (loading spinner on submit button), success (confirmation message + WhatsApp CTA), error (API error message with retry).

---

#### `CallbackForm`
```typescript
interface CallbackFormProps {
  variant?: 'inline' | 'modal';
  onSuccess?: () => void;
}
```
- **Description:** Quick call-back form. Fields: name, phone, time preference (dropdown: morning/afternoon/evening/any), optional description. Inline or modal variant. Submits to `POST /api/callbacks`.
- **Data source:** Client component. Local state.
- **Responsive:** Full-width on mobile, compact on desktop.
- **States:** Empty, validation errors, submitting, success (thank you message), error.

---

#### `ContactForm`
```typescript
interface ContactFormProps {
  defaultSubject?: string;
}
```
- **Description:** Standard contact form. Fields: name, phone (optional), email, subject, message (textarea). Submits to `POST /api/contact`. Shows success toast.
- **Data source:** Client component. Local state.
- **Responsive:** Full-width single column.
- **States:** Empty, validation errors, submitting, success, error.

---

#### `FileUpload`
```typescript
interface FileUploadProps {
  files: UploadedFile[];
  onChange: (files: UploadedFile[]) => void;
  maxFiles?: number;        // default: 5
  maxSize?: number;         // default: 25 * 1024 * 1024 (25MB)
  accept?: string;          // default: ".pdf,.ai,.eps,.cdr,.psd,.jpg,.jpeg,.png,.tiff,.tif"
  disabled?: boolean;
}
```
- **Description:** Drag-and-drop file upload zone. Lists uploaded files with remove button. Shows file size, type. Validates count and size client-side before upload. Uploads each file to `POST /api/upload` and collects returned URLs.
- **Data source:** Client component. Controlled via props (parent manages state).
- **Responsive:** Full-width drop zone.
- **States:** Empty (drop zone with dashed border + "Drag files here or click to browse"), dragging (highlighted border + background), has files (list with progress per file), uploading (per-file progress indicator), error (per-file error message), max files reached (zone hidden/disabled), file too large (inline error).

---

### 5.6 Shared Components

---

#### `SectionWrapper`
```typescript
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'grey' | 'navy' | 'none';
  id?: string;               // for anchor links
  containerClass?: string;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}
```
- **Description:** Standard section container. Applies horizontal padding, vertical padding, background color, max-width container. Wraps children.
- **Data source:** Server component. Pure layout.
- **Responsive:** Container max 1200px, padding 24px desktop / 16px mobile.
- **States:** Static.

---

#### `ScrollAnimate`
```typescript
interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up';
  delay?: number;              // ms, default 0
  threshold?: number;          // 0–1, default 0.2
  className?: string;
}
```
- **Description:** Intersection Observer wrapper that triggers CSS animation when element enters viewport. Uses GPU-only transforms (`translateY`, `translateX`, `scale`, `opacity`). Respects `prefers-reduced-motion`.
- **Data source:** Client component (`"use client"`).
- **Responsive:** Same animation across breakpoints.
- **States:** Hidden (pre-intersection), visible (post-intersection, animated).

---

#### `Breadcrumbs`
```typescript
interface BreadcrumbsProps {
  items: Breadcrumb[];
  homeLabel?: string;   // default "Home"
}
```
- **Description:** Breadcrumb trail with `Home > Parent > Current` structure. Last item is plain text (not link). Cheveron separator.
- **Data source:** Client or Server component. Items generated from pathname + content map.
- **Responsive:** Mobile: truncate to "Home > Current" with ellipsis for deep pages.
- **States:** Single item (home only — hidden).

---

#### `CTABanner` (shared variant)
```typescript
interface CTABannerProps {
  title: string;
  description: string;
  cta: { label: string; href: string };
  variant?: 'navy' | 'cyan' | 'magenta';
  className?: string;
}
```
- **Description:** Reusable CTA banner used across content pages. Same as home variant but shared export from `shared/` folder.
- **Data source:** Server component.
- **Responsive:** Stacked on mobile, side-by-side on desktop.
- **States:** Static.

---

#### `BottomCTABar`
```typescript
interface BottomCTABarProps {
  whatsappMessage?: string;
}
```
- **Description:** Fixed bottom bar on mobile with 2–3 quick CTAs: "WhatsApp", "Get Quote", "Call Now". Persistent across content pages. Hidden on scroll down, shows on scroll up (or always visible).
- **Data source:** Client component. Reads WhatsAppContext.
- **Responsive:** Visible only on mobile (<640px). Hidden on tablet/desktop.
- **States:** Visible, hidden (scroll down behavior), action tapped.

---

#### `TrustBadges`
```typescript
interface TrustBadgesProps {
  badges?: ('payment' | 'secure' | 'delivery' | 'quality')[];
  showLabels?: boolean;
}
```
- **Description:** Row of trust indicators (payment methods, SSL, delivery guarantee, quality assurance). Icons + optional labels.
- **Data source:** Server component.
- **Responsive:** Center-aligned, wrap on mobile.
- **States:** Static.

---

#### `GoogleReviewsWidget`
```typescript
interface GoogleReviewsWidgetProps {
  googlePlaceId?: string;
}
```
- **Description:** Embed Google Reviews widget (iframe or custom widget using Google Places API). Falls back to manual testimonials display if Google integration not configured.
- **Data source:** Client component. Iframe embed or Google API call.
- **Responsive:** Full-width.
- **States:** Loading (skeleton), loaded, error (fallback to manual testimonials).

---

#### `FAQAccordion`
```typescript
interface FAQAccordionProps {
  items: FAQEntry[];
  allowMultiple?: boolean;   // default false
  defaultOpen?: string[];    // ids of items open by default
}
```
- **Description:** Accordion component. Click question to expand/collapse answer. Chevron icon rotates on open. Smooth height animation.
- **Data source:** Client component. Items from data files.
- **Responsive:** Full-width single column.
- **States:** Closed, open (with answer visible), focus (keyboard navigation).

---

### 5.7 About Components

---

#### `TeamSection`
```typescript
interface TeamSectionProps {
  members: TeamMember[];
}
```
- **Description:** Grid of team competencies (not individual people — Whites is a service brand, not a team showcase). Each card: icon, competency name, description. Positions as "Our Expertise" section.
- **Data source:** Server component.
- **Responsive:** 3 cols desktop, 2 cols tablet, 1 col mobile.
- **States:** Static.

---

#### `EquipmentShowcase`
```typescript
interface EquipmentShowcaseProps {
  equipment: EquipmentItem[];
  showAll?: boolean;
}
```
- **Description:** Equipment cards with name, type badge, description, key specs. Flagship items highlighted with accent border/icon. Used on both About and Technology pages.
- **Data source:** Server component.
- **Responsive:** 3 cols desktop, 2 cols tablet, 1 col mobile.
- **States:** Empty (hidden).

---

#### `ProcessFlow`
```typescript
interface ProcessFlowProps {
  steps: { title: string; description: string; icon: string }[];
}
```
- **Description:** Vertical or horizontal "how it works" flow. Desktop: horizontal timeline with arrows between steps. Mobile: vertical timeline with connecting line.
- **Data source:** Server component.
- **Responsive:** Horizontal desktop, vertical mobile.
- **States:** Static.

---

## 6. API Route Design

### `POST /api/quotes`

- **Purpose:** Submit a quote request — sends email notification + WhatsApp auto-reply to customer.
- **Request body:**
```typescript
interface QuoteRequestBody extends QuoteFormData {
  _honeypot?: string;        // spam prevention
  timestamp?: number;
}
```
- **Response:**
```typescript
ApiResponse<{ quoteId: string }>
// 201 on success, 400 on validation error, 500 on server error
```
- **Logic:**
  1. Validate required fields (name, phone, service)
  2. Check honeypot field — if filled, return 200 anyway but discard
  3. Sanitize all inputs
  4. Generate unique `quoteId` (e.g. `Q-{timestamp}-{random4}`)
  5. Store in database (if available) or log
  6. Send email via Resend SDK to `orders@whitesprinting.ae` with all form data + file URLs
  7. Send WhatsApp auto-reply to customer via Twilio API (or return wa.me link if Twilio not configured)
  8. Return success with `quoteId`

---

### `POST /api/callbacks`

- **Purpose:** Request a callback — sends email notification.
- **Request body:**
```typescript
interface CallbackRequestBody extends CallbackFormData {
  _honeypot?: string;
  timestamp?: number;
}
```
- **Response:**
```typescript
ApiResponse<null>
// 201 on success, 400 on validation error, 500 on server error
```
- **Logic:**
  1. Validate name and phone
  2. Check honeypot
  3. Send email via Resend to `orders@whitesprinting.ae`
  4. Return success

---

### `POST /api/contact`

- **Purpose:** Submit contact form — sends email notification.
- **Request body:**
```typescript
interface ContactRequestBody extends ContactFormData {
  _honeypot?: string;
  timestamp?: number;
}
```
- **Response:**
```typescript
ApiResponse<null>
// 201 on success, 400 on validation error, 500 on server error
```
- **Logic:**
  1. Validate name, email, subject, message
  2. Check honeypot
  3. Send email via Resend to `info@whitesprinting.ae`
  4. Auto-reply with "Thank you for contacting us" email to sender
  5. Return success

---

### `POST /api/upload`

- **Purpose:** Upload a single file and return its accessible URL.
- **Request:** `multipart/form-data` with field `file`
- **Response:**
```typescript
ApiResponse<UploadedFile>
// 201 on success, 400 on validation error, 413 on file too large, 500 on error
```
- **Validation:**
  - Max file size: 25MB (check before processing)
  - Allowed MIME types: `application/pdf`, `application/postscript`, `application/illustrator`, `image/vnd.adobe.photoshop`, `image/jpeg`, `image/png`, `image/tiff`, `application/x-coreldraw` (and variations)
  - Sanitize filename (remove special chars, limit length to 50 chars)
- **Logic:**
  1. Receive file from `formData`
  2. Validate size and type
  3. Generate safe filename: `{timestamp}-{random6}-{original.ext}`
  4. Store: dev → `/uploads/` directory, prod → S3 bucket
  5. Return URL: dev → `/uploads/{filename}`, prod → `https://cdn.whitesprinting.ae/{filename}`
  6. Schedule cleanup of unclaimed uploads > 24h (optional)

---

### `GET /api/content/[type]`

- **Purpose:** Return JSON for any content type. Used by client components if dynamic fetching needed, or for external tools.
- **Parameters:** `[type]` — one of: `services`, `industries`, `locations`, `faq`, `testimonials`, `offers`
- **Query params:** `?slug=xxx` (optional, filter to one item)
- **Response:**
```typescript
ContentResponse<Service | Industry | Location | FAQEntry | Testimonial | Offer>
// 200 with items array, 404 if type unknown
```
- **Logic:**
  1. Map `type` to data file import
  2. If `slug` provided, filter to single item (return as single-item array)
  3. Return JSON response

---

## 7. Data Flow Architecture

### 7.1 Static Content Flow (data/*.ts → Server Components)

```
data/services.ts ──► import ──► app/services/page.tsx (Server Component)
                                   │
                                   ├── render ServiceCard × 15
                                   │
                                   └── generateStaticParams
                                        │
                                        ▼
                                   app/services/[slug]/page.tsx
                                   import single service
                                   render ServiceTemplate
```

All data files are TypeScript modules imported directly by Server Components at build time. No runtime fetching needed for content pages. This is the default data flow for Phase 1.

**Optional API path (for client-side use):**
```
data/*.ts ──► api/content/[type]/route.ts ──► fetch() ──► Client Component
                     │
                     └── GET /api/content/services?slug=xyz
```

### 7.2 Form Submission Flow (Client → API Route → Email + WhatsApp)

```
QuoteForm (Client Component)
    │
    ├── Validate fields client-side
    │
    ├── Upload files one-by-one ──► POST /api/upload ──► returns URLs
    │       │                                                │
    │       └── Progress tracked per file                    ▼
    │                                                   UploadedFile[]
    │
    └── POST /api/quotes { ...formData, files: UploadedFile[] }
            │
            ├── Validate + sanitize
            │
            ├── Send email via Resend ──► orders@whitesprinting.ae
            │       │
            │       └── HTML template with all quote details + file links
            │
            └── Send WhatsApp auto-reply ──► customer's phone
                    │
                    └── "Thank you for your enquiry! We'll get back to you within 2 hours."
```

### 7.3 File Upload Flow

```
User drops file ──► FileUpload component (client)
    │
    ├── Validate size (≤25MB) + type (allowed extensions)
    │
    ├── Display progress bar
    │
    └── POST /api/upload (multipart/form-data)
            │
            ├── Dev: write to /public/uploads/{filename}
            ├── Prod: stream to S3 bucket via presigned URL or SDK
            │
            └── Return { name, size, type, url }
```

### 7.4 Google Reviews Flow

```
GoogleReviewsWidget (Client Component)
    │
    ├── Option A: Embed iframe via Google Place Reviews widget
    │       └── <iframe src="https://widget.google.com/..." />
    │
    └── Option B: Fetch via Google Places API (requires API key)
            └── Display custom review cards with ratings
```

### 7.5 Analytics Flow

```
GTM script in layout.tsx <head>
    │
    └── Events:
        ├── page_view ──► GA4 (automatic via GTM)
        ├── form_submit (quote/callback/contact) ──► GA4 custom event
        ├── whatsapp_click ──► GA4 custom event
        ├── phone_click ──► GA4 custom event
        └── file_upload ──► GA4 custom event

Events fired in client components via:
```typescript
window.dataLayer.push({
  event: 'form_submit',
  formType: 'quote',
  service: 'business-cards',
});
```
```

---

## 8. State Management

### 8.1 Philosophy: Server-First

- **Server Components** are the default. All content data is imported directly from `data/*.ts`.
- **Client Components** are used only when interactivity is needed (forms, animations, mobile drawer, carousel).
- No global state library (no Redux, Zustand, etc.). React Context used sparingly.

### 8.2 WhatsAppContext

```typescript
// src/context/WhatsAppContext.tsx
"use client";

const WhatsAppContext = createContext<WhatsAppContextType>({...});

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const [prefillMessage, setPrefillMessage] = useState('');

  const phoneNumber = '+97143311247';  // Whites Printing phone

  const openWhatsApp = useCallback(() => {
    const encoded = encodeURIComponent(prefillMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  }, [prefillMessage, phoneNumber]);

  return (
    <WhatsAppContext.Provider value={{ prefillMessage, setPrefillMessage, phoneNumber, openWhatsApp }}>
      {children}
    </WhatsAppContext.Provider>
  );
}
```

- **Usage:** Every content page calls `setPrefillMessage` in `generateMetadata` or page component to set context-aware pre-fill. E.g., on Business Cards service page: `setPrefillMessage("Hi! I'm interested in Business Card printing. Can you tell me more?")`.
- **WhatsAppButton** reads context to open the correct `wa.me` link.

### 8.3 Scroll Animation State

- Managed locally with Intersection Observer inside `<ScrollAnimate>`.
- No global scroll state.
- Each `<ScrollAnimate>` instance tracks its own `isVisible` state.
- Respects `prefers-reduced-motion` media query.

### 8.4 Form State

- Local `useState` / `useReducer` per form.
- No persistence across page navigation.
- Validation via zod schemas defined locally in each form component.
- Submission state: `idle → submitting → success | error`.

### 8.5 Navigation State

- Mobile drawer open/close: local state in `Navbar`.
- Active route: determined by `usePathname()` from Next.js.

---

## 9. Backend Architecture

### 9.1 All-in-Next.js (Phase 1)

For Phase 1 (MVP), all backend logic lives in Next.js API routes. No separate backend server.

| Concern | Implementation |
|---|---|
| **API routes** | `src/app/api/*` — Next.js Route Handlers |
| **Email** | Resend SDK (`resend` npm package) |
| **File storage (dev)** | `public/uploads/` directory |
| **File storage (prod)** | AWS S3 bucket (TBD) |
| **WhatsApp notifications** | Twilio API (preferred) or `wa.me` link fallback |
| **Form validation** | zod schemas in API routes |
| **Rate limiting** | `@upstash/ratelimit` or custom IP-based limit |
| **CORS** | Next.js handles natively for same-origin requests |

### 9.2 Future Backend Extraction (Phase 2+)

If a separate backend is needed later, the structure would be:

```
Backend/
├── src/
│   ├── routes/
│   │   ├── quotes.ts
│   │   ├── callbacks.ts
│   │   ├── contact.ts
│   │   ├── upload.ts
│   │   └── content.ts
│   ├── services/
│   │   ├── email.ts          # Resend integration
│   │   ├── whatsapp.ts       # Twilio integration
│   │   ├── storage.ts        # S3 integration
│   │   └── validation.ts     # zod schemas
│   ├── middleware/
│   │   ├── rateLimit.ts
│   │   ├── auth.ts           # If admin API needed
│   │   └── errorHandler.ts
│   ├── models/
│   │   └── ...               # Database models (Prisma / Drizzle)
│   ├── config/
│   │   └── env.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── ... (Dockerfile, etc.)
```

The API route handlers in Next.js would be refactored to call external backend endpoints instead of handling logic directly.

### 9.3 Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
TWILIO_ACCOUNT_SID=ACxxxx
TWILIO_AUTH_TOKEN=xxxx
TWILIO_WHATSAPP_FROM=+14155238886    # Twilio WhatsApp sandbox or number

# Email recipients
QUOTES_EMAIL=orders@whitesprinting.ae
CONTACT_EMAIL=info@whitesprinting.ae

# File upload (dev: local, prod: S3)
UPLOAD_PROVIDER=local                # or 's3'
S3_BUCKET_NAME=whites-printing-uploads
S3_REGION=me-central-1
S3_ACCESS_KEY_ID=xxxx
S3_SECRET_ACCESS_KEY=xxxx

# Google
NEXT_PUBLIC_GOOGLE_PLACE_ID=xxxx
NEXT_PUBLIC_GTM_ID=GTM-xxxx

# Site
NEXT_PUBLIC_SITE_URL=https://www.whitesprinting.ae
NEXT_PUBLIC_WHATSAPP_NUMBER=+97143311247
```

---

## 10. SEO & Structured Data

### 10.1 JSON-LD Schemas

All structured data injected via `<script type="application/ld+json">` in the relevant pages.

#### LocalBusiness (homepage + contact page)
```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Whites Printing Services LLC",
  "image": "https://www.whitesprinting.ae/og-image.jpg",
  "url": "https://www.whitesprinting.ae",
  "telephone": "+97143311247",
  "email": "info@whitesprinting.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop 5, Al Qusais Industrial Area 1",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2854,
    "longitude": 55.3604
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday–Saturday", "opens": "08:00", "closes": "19:00" }
  ],
  "priceRange": "$$",
  "sameAs": ["https://www.instagram.com/whitesprinting/", "https://www.facebook.com/whitesprinting/"]
};
```

#### FAQPage (faq page & per-service FAQ)
```typescript
const faqSchema = (items: FAQEntry[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});
```

#### BreadcrumbList (every content page)
```typescript
const breadcrumbSchema = (items: Breadcrumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.label,
    "item": `${baseUrl}${item.href}`
  }))
});
```

#### Service (per service detail page)
```typescript
const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Whites Printing Services LLC"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  }
});
```

#### Product (per service, if applicable)
```typescript
const productSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": service.title,
  "description": service.description,
  "brand": { "@type": "Brand", "name": "Whites Printing" },
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock",
    "url": `https://www.whitesprinting.ae/services/${service.slug}`
  }
});
```

### 10.2 generateMetadata() Factory

Shared helper in `src/lib/utils.ts` or `src/lib/seo.ts`:

```typescript
// src/lib/seo.ts
import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  noIndex?: boolean;
  openGraph?: {
    images?: { url: string; width: number; height: number }[];
    type?: 'website' | 'article';
  };
}

export function generateMetadata({
  title,
  description,
  slug = '',
  noIndex = false,
  openGraph,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.whitesprinting.ae';
  const fullTitle = `${title} | Whites Printing Services Dubai`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: slug ? `${baseUrl}/${slug}` : baseUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: slug ? `${baseUrl}/${slug}` : baseUrl,
      siteName: 'Whites Printing Services LLC',
      locale: 'en_AE',
      type: openGraph?.type || 'website',
      images: openGraph?.images || [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}
```

### 10.3 sitemap.ts

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.whitesprinting.ae';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/offers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryPages = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationPages = locations.map(location => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...locationPages];
}
```

### 10.4 robots.ts

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.whitesprinting.ae';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

---

## 11. Implementation Order (6 Phases)

### Phase A: Layout Shell + Homepage Static Sections
**Goal:** Deployable layout with homepage showing all sections.

| Step | Task | Files |
|---|---|---|
| A1 | Initialize Next.js project, install deps (shadcn, resend, zod, lucide-react) | `package.json`, `next.config.ts` |
| A2 | Set up `globals.css` with design tokens (navy, cyan, magenta, etc.) | `app/globals.css` |
| A3 | Create root `layout.tsx` with Montserrat + Inter fonts, Toaster | `app/layout.tsx` |
| A4 | Build `Navbar` with responsive logic + `MobileDrawer` | `components/layout/Navbar.tsx`, `MobileDrawer.tsx` |
| A5 | Build `Footer` with 4-column layout | `components/layout/Footer.tsx` |
| A6 | Build `WhatsAppButton` floating button | `components/layout/WhatsAppButton.tsx` |
| A7 | Build `BottomCTABar` (mobile only) | `components/shared/BottomCTABar.tsx` |
| A8 | Build `SectionWrapper` + `ScrollAnimate` + `Breadcrumbs` | `components/shared/` |
| A9 | Build `(home)/layout.tsx` | `app/(home)/layout.tsx` |
| A10 | Build `Hero` component | `components/home/Hero.tsx` |
| A11 | Build `ServiceGrid` + `ServiceCard` (basic) | `components/home/ServiceGrid.tsx`, `components/services/ServiceCard.tsx` |
| A12 | Build `IndustryScroll` + `IndustryCard` (basic) | `components/home/IndustryScroll.tsx`, `components/industries/IndustryCard.tsx` |
| A13 | Build `WhyChoose` | `components/home/WhyChoose.tsx` |
| A14 | Build `TechnologyShowcase` | `components/home/TechnologyShowcase.tsx` |
| A15 | Build `TestimonialsSection` | `components/home/TestimonialsSection.tsx` |
| A16 | Build `OffersSection` | `components/home/OffersSection.tsx` |
| A17 | Build `CoverageMap` | `components/home/CoverageMap.tsx` |
| A18 | Build homepage `CTABanner` | `components/home/CTABanner.tsx` |
| A19 | Compose homepage `page.tsx` | `app/(home)/page.tsx` |
| A20 | Create `data/` files (services.ts, industries.ts, etc.) with all entries | `data/*.ts` |
| A21 | Create `constants.ts` with nav items, site info | `lib/constants.ts` |
| A22 | Create `types.ts` with all interfaces | `lib/types.ts` |

**Deliverable:** Full homepage at `/` with all sections, navigation, footer, WhatsApp button.

---

### Phase B: Services + Industries + Locations Template Pages
**Goal:** All content pages rendering from data files.

| Step | Task | Files |
|---|---|---|
| B1 | Build `(content)/layout.tsx` with Breadcrumbs | `app/(content)/layout.tsx` |
| B2 | Build Services Overview page with ServiceGrid | `app/(content)/services/page.tsx` |
| B3 | Build `ServiceTemplate` + `ServiceSidebar` | `components/services/ServiceTemplate.tsx`, `ServiceSidebar.tsx` |
| B4 | Build Service detail `[slug]/page.tsx` with `generateStaticParams` | `app/(content)/services/[slug]/page.tsx` |
| B5 | Build Industries Overview page | `app/(content)/industries/page.tsx` |
| B6 | Build `IndustryTemplate` | `components/industries/IndustryTemplate.tsx` |
| B7 | Build Industry detail `[slug]/page.tsx` | `app/(content)/industries/[slug]/page.tsx` |
| B8 | Build Locations `[slug]/page.tsx` | `app/(content)/locations/[slug]/page.tsx` |
| B9 | Add loading, error, not-found files for all route segments | `*/(loading|error|not-found).tsx` |
| B10 | Build shared `CTABanner` (shared variant) | `components/shared/CTABanner.tsx` |

**Deliverable:** All 15 service pages, 16 industry pages, 15 location pages with navigation.

---

### Phase C: Forms + API Routes
**Goal:** Working form submissions with email + WhatsApp notifications.

| Step | Task | Files |
|---|---|---|
| C1 | Build `FileUpload` component with drag-drop | `components/forms/FileUpload.tsx` |
| C2 | Build `QuoteForm` multi-step | `components/forms/QuoteForm.tsx` |
| C3 | Build `CallbackForm` | `components/forms/CallbackForm.tsx` |
| C4 | Build `ContactForm` | `components/forms/ContactForm.tsx` |
| C5 | Create `POST /api/quotes` route | `app/api/quotes/route.ts` |
| C6 | Create `POST /api/callbacks` route | `app/api/callbacks/route.ts` |
| C7 | Create `POST /api/contact` route | `app/api/contact/route.ts` |
| C8 | Create `POST /api/upload` route | `app/api/upload/route.ts` |
| C9 | Create `GET /api/content/[type]` route | `app/api/content/[type]/route.ts` |
| C10 | Build Quote page at `/quote` | `app/(content)/quote/page.tsx` |
| C11 | Build Contact page at `/contact` | `app/(content)/contact/page.tsx` |
| C12 | Integrate Resend SDK for email sending | `lib/email.ts` |
| C13 | Integrate Twilio SDK for WhatsApp replies | `lib/whatsapp.ts` |
| C14 | Add toast notifications on form success/error | — |
| C15 | Add honeypot spam protection | API routes |

**Deliverable:** All forms functional with file uploads, email notifications, WhatsApp auto-replies.

---

### Phase D: Interactive Features
**Goal:** Scroll animations, FAQ accordion, WhatsApp context, Google Reviews.

| Step | Task | Files |
|---|---|---|
| D1 | Build `ScrollAnimate` with Intersection Observer | `components/shared/ScrollAnimate.tsx` |
| D2 | Wrap all sections with ScrollAnimate | Homepage + content pages |
| D3 | Build `FAQAccordion` component | `components/shared/FAQAccordion.tsx` |
| D4 | Build FAQ page at `/faq` | `app/(content)/faq/page.tsx` |
| D5 | Create `WhatsAppContext` and provider | `context/WhatsAppContext.tsx` |
| D6 | Integrate `setPrefillMessage` on all pages | Every page file |
| D7 | Build `GoogleReviewsWidget` | `components/shared/GoogleReviewsWidget.tsx` |
| D8 | Add scroll-based animations to homepage sections | All home components |
| D9 | Add `prefers-reduced-motion` support | `ScrollAnimate.tsx` + CSS |

**Deliverable:** Animated page transitions, working FAQ, context-aware WhatsApp pre-fill.

---

### Phase E: Remaining Pages
**Goal:** About, Technology, Offers, Privacy pages complete.

| Step | Task | Files |
|---|---|---|
| E1 | Build `TeamSection` | `components/about/TeamSection.tsx` |
| E2 | Build `EquipmentShowcase` | `components/about/EquipmentShowcase.tsx` |
| E3 | Build `ProcessFlow` | `components/about/ProcessFlow.tsx` |
| E4 | Build About page at `/about` | `app/(content)/about/page.tsx` |
| E5 | Build Technology page at `/technology` | `app/(content)/technology/page.tsx` |
| E6 | Build Offers page at `/offers` | `app/(content)/offers/page.tsx` |
| E7 | Build Privacy page at `/privacy` | `app/(content)/privacy/page.tsx` |
| E8 | Build 404 page at `not-found.tsx` | `app/not-found.tsx` |
| E9 | Build `TrustBadges` component | `components/shared/TrustBadges.tsx` |
| E10 | Add `error.tsx` and `loading.tsx` to all routes | All route folders |

**Deliverable:** All 15+ pages complete and navigable.

---

### Phase F: SEO + Performance + Launch Prep
**Goal:** Production-ready website with SEO, analytics, performance optimization.

| Step | Task | Files |
|---|---|---|
| F1 | Add JSON-LD schemas to all pages | Layout + page files |
| F2 | Create `generateMetadata()` factory function | `lib/seo.ts` |
| F3 | Add `generateMetadata` to every page | All page files |
| F4 | Create `sitemap.ts` | `app/sitemap.ts` |
| F5 | Create `robots.ts` | `app/robots.ts` |
| F6 | Add GTM + GA4 scripts to `layout.tsx` | `app/layout.tsx` |
| F7 | Add analytics event tracking to forms + WhatsApp button | Client components |
| F8 | Add canonical URLs to all pages | Via `generateMetadata` |
| F9 | Add Open Graph images (per-page if possible) | Metadata |
| F10 | Performance audit (Lighthouse) + optimize | — |
| F11 | Add aria labels, keyboard nav, focus management | All interactive components |
| F12 | Test all forms end-to-end | — |
| F13 | Build production bundle, test | — |
| F14 | Set up environment variables for production | `.env.production` |
| F15 | Deploy to Vercel / hosting | — |

**Deliverable:** Production-ready website with SEO, analytics, accessibility compliance.

---

> **End of System Design Document**
>
> This document serves as the authoritative blueprint for all development agents working on the Whites Printing Services LLC website. Any deviations from this design must be documented and approved.
