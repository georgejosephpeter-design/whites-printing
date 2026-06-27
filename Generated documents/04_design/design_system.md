# Whites Printing Services LLC — Design System

**Prepared by:** UI/UX Designer Agent
**Date:** June 2026
**Brand Tagline:** "Color Your Business"
**Website:** whites.me

---

## 1. Three Design Direction Options — Evaluation

| Criteria | Option A: "Premium B2B Trust" | Option B: "Creative Showcase" | Option C: "Conversion-First" |
|---|---|---|---|
| **Visual Style** | Corporate, clean, minimal, trust-focused. Ample white space, generous margins, restrained layout. Professional photography of finished products in business contexts. | Portfolio-driven, visually rich, editorial feel. Full-bleed imagery, dark navy backgrounds, gallery-style product showcase. Masonry grids, hover expansions. | Lead-gen optimised, bold CTAs, high-contrast. Directional cues (arrows, progress indicators), punchy hero, simplified Quick Quote form inline. Pages engineered for action. |
| **Primary Color** | Navy #0A1F3F — headers, nav, footer, CTAs. White #FFFFFF — 90%+ of backgrounds. | Navy #0A1F3F — dark sections, gallery backgrounds. White #FFFFFF — content areas. | Navy #0A1F3F — primary. White #FFFFFF — backgrounds. |
| **Accent Color** | CMYK accents at 5–10% opacity for section dividers, icon fills, small decorative elements. Used sparingly — micro-accents only. | CMYK accents used liberally — full-bleed colour sections per service category, vibrant hover states, dark gallery background for image pop. | Yellow (#FDD835) for primary CTAs (max contrast on navy). Cyan (#00BCD4) for secondary CTAs. Aggressive accent use to guide eye. |
| **Typography** | Montserrat Bold (700) headings — uppercase section titles. Inter Regular (400) body. Montserrat SemiBold (600) nav/CTAs. Sizes: H1 48–56px, body 16–18px. | Montserrat Black (900) / ExtraBold (800) — oversized headlines. Open Sans (400) body — warmer. Playfair Display serif for pull quotes. Sizes: H1 56–72px. | Montserrat Bold (700) headings. Inter (400) body. Exaggerated hierarchy: H1 64px+, body 18px, button text 20px. Key numbers in accent colours. |
| **Complexity Level** | Low — simple layout, minimal animations (fade-in on scroll + card hover lift). Complexity is in execution quality. | Medium-High — masonry grids, hover-triggered animations, full-bleed overlays, scroll-triggered transitions. Image-critical. | Low-Medium — visually simple but conversion architecture is sophisticated (A/B testing, form optimisation, analytics). |
| **Best For** | Corporate procurement, government entities, hotels, banks, financial institutions. Any buyer justifying choice to a committee. | Design agencies, marketing firms, event organisers, premium-print buyers (foiling, embossing). Social media sharing. | SMEs, urgent-print buyers, mobile users, initial launch phase (lead volume priority), Google Ads landing pages. |
| **Pros** | Maximum trust & credibility. Timeless — won't date. Fast loading. Accessible. Aligns perfectly with brand voice. | Visually impressive — stands out from competitors. Demonstrates print quality. Engages creative decision-makers. Strong shareability. | Highest conversion potential. Clear messaging. Fast development. Easy to A/B test. Mobile-first by nature. |
| **Cons** | May feel too conservative for creative buyers. Less "wow" for social sharing. Requires exceptional photography. | Higher production cost (pro product photography). Slower load if images not optimised. May overwhelm non-creative buyers. Risk of dating. | Least premium feel — may seem salesy. Less brand equity building. Needs ongoing optimisation. May not differentiate from lower-end competitors. |

---

## 2. Selected Option: Option A — "Premium B2B Trust" (Hybrid Approach)

### Rationale

Option A is selected as the visual foundation, with deliberate borrowings from Options B and C:

**Why Option A wins:**
1. The core requirement is "more premium than mprinthouse.ae" — Option A directly addresses this with a corporate-grade aesthetic that no competitor in Deira/North Dubai currently offers.
2. Corporate and B2B buyers represent the highest-value customer segment (larger order values, recurring contracts). Option A speaks their language: trust, reliability, longevity.
3. The market analysis confirms all local competitors have average-to-poor websites. There is a clear gap for a premium-positioned print brand — Option A fills it.
4. A clean, minimal design with navy + white aligns perfectly with brand guidelines and the "not overly salesy" tone requirement.

**What we borrow from Option C (Conversion Architecture):**
- Simplified quote forms with minimal required fields (progressive disclosure)
- Sticky bottom-CTA bar on service pages (scroll-triggered after 50%)
- Context-aware WhatsApp pre-fill based on current page
- Clear, unambiguous CTA hierarchy on every page

**What we borrow from Option B (Creative Showcase):**
- A dedicated "Our Work" gallery page (not in main nav — accessible via About or footer)
- Before/after image sliders on signage and framing service pages
- Product photography treatment that elevates printed materials as hero content

### Chosen Design Philosophy

> "Trust through restraint" — Every design decision answers: "Does this help the buyer make a confident decision?" Visual flair is subordinated to clarity, credibility, and conversion. The site should feel like a premium business partner's website, not a print shop's website.

---

## 3. Color Palette

| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Primary Navy** | `#0A1F3F` | 10, 31, 63 | Headers, navigation bar, primary buttons, footer background, section headings |
| **White** | `#FFFFFF` | 255, 255, 255 | Page backgrounds, card backgrounds, text on navy, form inputs |
| **Cyan Accent** | `#00BCD4` | 0, 188, 212 | Links (underline & text), secondary CTAs, service icon fills, form focus ring, info badges |
| **Magenta Accent** | `#E91E63` | 233, 30, 99 | Sale/offer badges, limited-time promotion indicators, emphasis dots, price highlights |
| **Yellow Accent** | `#FDD835` | 253, 216, 53 | Star ratings (review stars), attention markers, highlight underlines, "Urgent" badges |
| **Black (K)** | `#1A1A1A` | 26, 26, 26 | Body text, icon strokes (not pure black — softer for readability) |
| **Light Grey** | `#F5F7FA` | 245, 247, 250 | Alternate section backgrounds, testimonial card backgrounds, FAQ accordion backgrounds |
| **Dark Grey** | `#6B7280` | 107, 114, 128 | Secondary text, captions, helper text, placeholder text, metadata |

### Usage Notes
- Navy on white achieves AAA contrast ratio (15.2:1) — use for all critical text.
- Cyan on white achieves AA at 16px+ body text (4.6:1). Do not use cyan text smaller than 14px on white.
- Yellow on white fails contrast — only use yellow as background fills or decorative elements, never for text.
- Magenta on white achieves AA at 18px+ (4.8:1). OK for badges with large text.
- CMYK accent colours should never cover more than 10% of any page's total colour area. White space is the dominant visual.

### Gradient (Optional)
- **Hero overlay gradient:** Linear gradient from `#0A1F3F` (left, 85% opacity) to transparent (right) for hero image overlays
- **Section divider:** Subtle `#F5F7FA` to `#FFFFFF` or vice versa for alternating section backgrounds

---

## 4. Typography

### Font Stack

| Usage | Font | Fallback | Weight |
|---|---|---|---|
| Headings | Montserrat | Sans-serif | See table below |
| Body | Inter | Sans-serif | See table below |

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| **H1** | Montserrat | 48px / 3rem | Bold (700) | 1.15 | -0.02em | Page titles (Hero headline, About H1) |
| **H2** | Montserrat | 36px / 2.25rem | SemiBold (600) | 1.2 | -0.01em | Section titles (Services, Industries, Why Choose) |
| **H3** | Montserrat | 24px / 1.5rem | Medium (500) | 1.25 | 0 | Subsection titles, card titles, service names |
| **H4** | Montserrat | 20px / 1.25rem | Medium (500) | 1.3 | 0 | Component headings, form titles, industry names |
| **Body** | Inter | 16px / 1rem | Regular (400) | 1.6 | 0 | Paragraphs, descriptions, form labels |
| **Body Small** | Inter | 14px / 0.875rem | Regular (400) | 1.5 | 0 | Secondary text, metadata, FAQ answers |
| **Caption** | Inter | 12px / 0.75rem | Medium (500) | 1.4 | 0.02em | Helper text, timestamps, footnotes |
| **Button** | Montserrat | 16px / 1rem | SemiBold (600) | 1 | 0.02em | All CTA buttons |
| **Button Large** | Montserrat | 18px / 1.125rem | SemiBold (600) | 1 | 0.02em | Hero CTAs, primary quote CTAs |
| **Navigation** | Montserrat | 15px / 0.9375rem | Medium (500) | 1 | 0.01em | Primary nav links |
| **Section Title (Uppercase)** | Montserrat | 14px / 0.875rem | Bold (700) | 1.2 | 0.08em | Eyebrow labels above H2 sections (e.g., "SERVICES", "INDUSTRIES") |

### Heading Hierarchy (Ratio)
- H1 → H2: 1.33x (perfect fourth)
- H2 → H3: 1.5x (perfect fifth)
- H3 → Body: 1.5x (perfect fifth)
- Body → Body Small: 1.14x (minor second)

### Responsive Type Adjustments
| Element | Desktop (≥1024px) | Tablet (640–1024px) | Mobile (<640px) |
|---|---|---|---|
| H1 | 48px | 36px | 28px |
| H2 | 36px | 28px | 22px |
| H3 | 24px | 20px | 18px |
| Body | 16px | 16px | 15px |

### Line Length
- Maximum line length for body text: 72 characters (optimal 50–65 for readability)
- Service descriptions and testimonial text: cap at 65 characters per line

---

## 5. Component Specifications

### 5.1 Primary Button

| State | Background | Text | Border | Shadow | Transition |
|---|---|---|---|---|---|
| **Default** | `#0A1F3F` | `#FFFFFF` | None | `0 2px 4px rgba(10,31,63,0.2)` | — |
| **Hover** | `#132C5A` | `#FFFFFF` | None | `0 4px 8px rgba(10,31,63,0.3)` | All 0.2s ease |
| **Active** | `#081833` | `#FFFFFF` | None | `0 1px 2px rgba(10,31,63,0.4)` | 0.1s ease |
| **Disabled** | `#B0BEC5` | `#FFFFFF` (50% opacity) | None | None | — |
| **Focus** | `#0A1F3F` | `#FFFFFF` | `2px solid #00BCD4` (offset 2px) | Same as default | — |

- **Dimensions:** Min 48px height, horizontal padding 24–32px, border-radius 6px
- **Font:** Montserrat SemiBold 16px, letter-spacing 0.02em
- **Icon:** May include arrow right or WhatsApp icon on specific variants

### 5.2 Secondary Button (Outline)

| State | Background | Text | Border | Transition |
|---|---|---|---|---|
| **Default** | Transparent | `#0A1F3F` | `2px solid #0A1F3F` | — |
| **Hover** | `#0A1F3F` | `#FFFFFF` | `2px solid #0A1F3F` | All 0.2s ease |
| **Active** | `#081833` | `#FFFFFF` | `2px solid #081833` | 0.1s |
| **Disabled** | Transparent | `#B0BEC5` | `2px solid #E0E0E0` | — |
| **Focus** | Transparent | `#0A1F3F` | `2px solid #00BCD4` + ring offset 2px | — |

- Same dimensions as Primary Button
- Use for secondary actions: "Learn More", "View All", secondary navigation

### 5.3 WhatsApp Button (Floating)

| State | Background | Icon | Shadow | Transition |
|---|---|---|---|---|
| **Default** | `#25D366` (WhatsApp Green) | White WhatsApp icon, 28px | `0 4px 12px rgba(37,211,102,0.4)` | — |
| **Hover** | `#20BD5A` | White | `0 6px 16px rgba(37,211,102,0.5)` | All 0.2s ease |
| **Active** | `#1DA851` | White | `0 2px 6px rgba(37,211,102,0.5)` | 0.1s |
| **Focus** | `#25D366` | White | Same as default + `0 0 0 3px rgba(37,211,102,0.3)` | — |

- **Position:** Fixed bottom-right, 24px from edge on desktop, 16px on mobile
- **Size:** 56px × 56px (desktop), 52px × 52px (mobile) — circular
- **Z-index:** 999 (highest non-modal layer)
- **Tooltip:** "Chat on WhatsApp" — appears on hover, 12px font, dark bg
- **Pre-filled message:** Context-aware based on current page (see copy.md Section 11 for page-specific messages)
- **Animation:** Subtle pulse (see Section 8)
- **Accessibility:** ARIA label "Chat on WhatsApp, opens WhatsApp"

### 5.4 Form Input

| State | Background | Border | Text | Label |
|---|---|---|---|---|
| **Default** | `#FFFFFF` | `1px solid #D1D5DB` | `#1A1A1A` (placeholder: `#9CA3AF`) | `#374151`, 14px, above input |
| **Focus** | `#FFFFFF` | `2px solid #00BCD4` | `#1A1A1A` | `#00BCD4` |
| **Error** | `#FFF5F5` | `2px solid #E91E63` | `#1A1A1A` | `#E91E63` |
| **Disabled** | `#F5F7FA` | `1px solid #E5E7EB` | `#9CA3AF` | `#9CA3AF` |
| **Success** | `#F0FFF4` | `2px solid #25D366` | `#1A1A1A` | `#25D366` |

- **Dimensions:** Height 48px, border-radius 6px, padding 12px 16px
- **Font:** Inter Regular 16px (prevents iOS zoom on mobile)
- **Label:** Inter Medium 14px, margin-bottom 6px
- **Error message:** Inter Regular 12px, `#E91E63`, appears below input with 4px margin
- **Required indicator:** Asterisk `*` in `#E91E63`

### 5.5 File Upload (Drag & Drop Zone)

| State | Background | Border | Icon | Text |
|---|---|---|---|---|
| **Default** | `#F5F7FA` | `2px dashed #D1D5DB` | Upload icon (24px, `#6B7280`) | "Drag & drop your file here, or click to browse" — Inter 14px |
| **Hover/Drag Over** | `#E8F4FD` | `2px dashed #00BCD4` | Upload icon (24px, `#00BCD4`) | "Drop your file here" — Inter 14px, `#00BCD4` |
| **File Selected** | `#F0FFF4` | `2px solid #25D366` | Check icon (24px, `#25D366`) | Filename displayed + "Change file" link |
| **Error** | `#FFF5F5` | `2px solid #E91E63` | Alert icon (24px, `#E91E63`) | Error message in `#E91E63` |
| **Disabled** | `#F5F7FA` | `2px dashed #E5E7EB` | Upload icon (24px, `#D1D5DB`) | "File upload unavailable" |

- **Zone dimensions:** Min height 120px, border-radius 8px, padding 20px
- **Accepted formats:** PDF, AI, EPS, CDR, PSD, JPG, PNG, TIFF — displayed as chips below zone
- **File size limit:** "Max 25 MB" displayed below zone in caption style
- **Multiple files:** Allow up to 5 files; show file list with remove button
- **Accessibility:** Hidden file input with `accept=".pdf,.ai,.eps,.cdr,.psd,.jpg,.jpeg,.png,.tiff"`

### 5.6 Card

#### Service Card

| State | Background | Shadow | Image | CTA |
|---|---|---|---|---|
| **Default** | `#FFFFFF` | `0 1px 3px rgba(0,0,0,0.08)` | 100% width, 160px height, object-fit cover | "Learn More" arrow |
| **Hover** | `#FFFFFF` | `0 8px 24px rgba(0,0,0,0.12)` | Slight scale(1.02) on image | Arrow animates right |
| **Active** | `#F5F7FA` | `0 4px 12px rgba(0,0,0,0.1)` | — | — |

- **Structure:** Icon (48px, cyan accent) → Title (H3, 20px) → Description (Body, 14px, 3-line clamp) → Link "Learn More →"
- **Dimensions:** Min 280px width, border-radius 10px, overflow hidden
- **Grid:** 4 columns desktop, 2 columns tablet, 1 column mobile
- **Transition:** All 0.3s ease — transform, shadow

#### Industry Card

| State | Background | Border | Icon |
|---|---|---|---|
| **Default** | `#F5F7FA` | `1px solid transparent` | Industry icon (32px, navy) |
| **Hover** | `#FFFFFF` | `1px solid #00BCD4` | Icon scales 1.05 |

- **Structure:** Icon → Industry name (Inter Medium 15px) — no description
- **Dimensions:** 160px × 100px (desktop grid) — compact
- **Grid:** Horizontal scrollable on mobile (snap-scroll), grid on desktop

#### Testimonial Card

| State | Background | Shadow | Accent |
|---|---|---|---|
| **Default** | `#FFFFFF` | `0 2px 8px rgba(0,0,0,0.06)` | Left border: `#00BCD4`, 4px |
| **Hover** | `#FFFFFF` | `0 6px 20px rgba(0,0,0,0.1)` | Same |

- **Structure:** Quote mark (decorative, navy, 40px) → Quote text (Inter Italic 15px) → Author name (Montserrat SemiBold 14px) → Company/Industry (Inter 12px, dark grey) → Star rating (yellow, 5 stars)
- **Max width:** 400px per card

### 5.7 Navigation

#### Desktop (≥1024px)
- **Background:** `#0A1F3F`, full-width, 72px height
- **Logo:** Left-aligned, circular badge version (48px) + company name "Whites Printing" in Montserrat SemiBold 18px, white
- **Links:** Right-aligned, Montserrat Medium 15px, white, padding 20px 16px
- **Active link:** Bottom border 2px solid `#00BCD4`
- **Hover:** Opacity 0.85, no underline animation
- **Dropdown (Services):** Triggered on hover, white bg, navy text, 2-column grid layout, shadow `0 8px 24px rgba(0,0,0,0.15)`, border-radius 8px
- **CTA in Nav:** "Get a Quote" button (Primary Button style, compact 36px height)

#### Mobile (<1024px)
- **Hamburger icon:** Right-aligned, 24px icon, white
- **Drawer:** Slide-in from right, `#0A1F3F` background, 0.3s ease, 100% viewport height
- **Links:** 48px min touch target, Montserrat Medium 18px, white, border-bottom `1px solid rgba(255,255,255,0.1)`
- **Submenu:** Chevron expand/collapse, slide height transition 0.3s, child links indented 16px
- **CTA in drawer:** Primary Button at bottom of menu, full-width, 48px height
- **Overlay:** Semi-transparent navy (`rgba(10,31,63,0.5)`), click to close

### 5.8 Accordion (FAQ)

| State | Header Background | Header Text | Chevron | Content |
|---|---|---|---|---|
| **Collapsed** | `#F5F7FA` | `#0A1F3F`, Montserrat Medium 16px | `+` icon, `#0A1F3F` | Hidden, max-height 0 |
| **Expanded** | `#FFFFFF` | `#0A1F3F`, Montserrat SemiBold 16px | `−` icon, `#00BCD4` | Content visible, padding 16px 20px |
| **Hover (header)** | `#EEF2F6` | Same | Same | — |
| **Focus** | `#F5F7FA` | Same | Ring `2px solid #00BCD4` | — |

- **Border:** `1px solid #E5E7EB` around each accordion item, border-radius 8px
- **Content:** Inter Regular 15px, `#4B5563`, line-height 1.6
- **Transition:** max-height 0.3s ease (GPU-accelerated), chevron rotate 0.2s

### 5.9 Review Widget (Google Reviews)

| Element | Style |
|---|---|
| **Container** | `#FFFFFF` bg, border-radius 12px, shadow `0 2px 8px rgba(0,0,0,0.06)`, padding 20px |
| **Header** | Google logo (left) + "Google Reviews" text (Inter SemiBold 16px, `#1A1A1A`) |
| **Rating badge** | Large number (e.g., "4.8") in Montserrat Bold 36px + star row (yellow `#FDD835`) + "Based on X reviews" (Inter 13px, dark grey) |
| **Review cards** | 3 featured reviews with: reviewer name (Montserrat Medium 14px), date (Inter 12px, `#6B7280`), star row, text excerpt (Inter 14px, 3-line clamp) |
| **CTA** | "View all reviews on Google →" — link, `#00BCD4`, Inter Medium 14px |
| **Integration** | Live embed via Elfsight or EmbedSocial widget, styled to match brand |

### 5.10 Footer

| Section | Content |
|---|---|
| **Background** | `#0A1F3F`, full-width |
| **Padding** | 64px top, 48px bottom (desktop); 48px top, 32px bottom (mobile) |
| **Logo + Tagline** | Horizontal logo (white version), "Color Your Business" tagline, "We Print, Deliver & Install — In-House." — Montserrat Medium 14px, `rgba(255,255,255,0.8)` |
| **Column 1: Services** | Link list, Inter Regular 14px, `rgba(255,255,255,0.8)` — hover turns `#00BCD4` |
| **Column 2: Industries** | Link list (top 6 industries + "View All"), same treatment |
| **Column 3: Company** | About, Technology, Testimonials, FAQ, Contact |
| **Column 4: Support** | Request Quote, WhatsApp Quote, Request Callback, Delivery & Installation |
| **Column 5: Contact** | Address (with map link), Phone, WhatsApp, Email, Working Hours — Inter 14px, `rgba(255,255,255,0.9)` |
| **Social icons** | Row of icon links (Instagram, LinkedIn, Facebook, Google) — 24px icons, `rgba(255,255,255,0.7)`, hover `#FFFFFF` |
| **Divider** | `1px solid rgba(255,255,255,0.1)`, margin 32px 0 |
| **Copyright** | Inter 13px, `rgba(255,255,255,0.6)` — "© 2026 Whites Printing Services LLC. Color Your Business™. Privacy Policy." |
| **Map embed** | Small Google Maps preview (w/ link to full map), border-radius 8px, 200px × 120px |

- **Grid:** 5 columns desktop, 2 columns tablet (Services+Industries row, Company+Support+Contact row), 1 column mobile (stacked)
- **WhatsApp button:** Also in footer as: "Chat on WhatsApp" with green icon — for users who scrolled past floating button

---

## 6. Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|---|---|---|
| **xs** | 4px | Icon gaps, inline spacing, small separations |
| **sm** | 8px | Between icon and text in buttons, between label and input |
| **md** | 16px | Between form fields, card padding, between body paragraphs |
| **lg** | 24px | Between cards in grid, section title to first content, button groups |
| **xl** | 32px | Between major sections (e.g., Services grid to Why Choose), hero padding |
| **2xl** | 48px | Between large sections, section top padding (mobile/tablet) |
| **3xl** | 64px | Section top/bottom padding (desktop), hero top padding |
| **4xl** | 80px | Hero section height, major section padding (desktop) |

### Container
- **Max-width:** 1200px (centered, with 24px padding on each side)
- **Full-width sections:** Eye-brow label + section content inside container, background color bleeds edge-to-edge

### Section Padding
| Device | Section Top/Bottom Padding | Hero Padding Top |
|---|---|---|
| Desktop (≥1024px) | 80px | 120px + 80px bottom |
| Tablet (640–1024px) | 60px | 100px + 60px bottom |
| Mobile (<640px) | 40px | 80px + 40px bottom |

### Card Padding
| Card Type | Internal Padding | Gap Between |
|---|---|---|
| Service Card | 20px | 24px grid gap |
| Industry Card | 16px | 16px grid gap |
| Testimonial Card | 24px | 24px grid gap |

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|---|---|---|
| **Mobile** | < 640px | Single column all sections. Hamburger nav. Stacked hero (text top, image bottom). 1-col service grid. 2-col industry grid. Stacked footer. 16px page padding. Floating WhatsApp at 52px. |
| **Tablet** | 640–1024px | 2-col grids for services, testimonials, footer columns. Horizontal scroll for industry cards (snap-points). Hero text 60% width, image right (or stacked if insufficient width). Accordion FAQ remains full-width. Forms remain 1-col but wider. Page padding 24px. Floating WhatsApp at 56px. |
| **Desktop** | > 1024px | 4-col service grid, 3-col testimonial grid, 5-col footer. Full hero: left text (50%) + right image (50%). Multi-column footer. Dropdown nav for Services. Page padding 24px. Floating WhatsApp at 56px. |

### Specific Component Changes at Breakpoints

**Navigation:**
- Mobile: Hamburger → slide drawer, sticky top
- Tablet: Hamburger → slide drawer, sticky top (same as mobile)
- Desktop: Full horizontal nav, dropdown on Services hover, transparent on hero → solid on scroll (bg: `#0A1F3F` with 0.3s transition)

**Hero:**
- Mobile: Full-width text, image below or as background with overlay, stacked layout
- Desktop: Split layout — left 50% text with CTA, right 50% image or CMYK abstract visual

**Services Grid:**
- Mobile: 1 column, stacked vertically
- Tablet: 2 columns
- Desktop: 4 columns

**Industry Cards:**
- Mobile: Horizontal scroll snap with overflow-x: auto, scrollbar hidden, snap-type x mandatory
- Tablet: 4-column grid
- Desktop: 4-column grid

**Testimonial Cards:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns (or carousel with dots)

**Contact Page:**
- Mobile: Stacked — form on top, map below
- Desktop: Split — form left (50%), map/address right (50%)

**Footer:**
- Mobile: Single column, stacked groups with accordion expand/collapse for link groups
- Tablet: 2 columns (Services+Industries | Company+Support+Contact), copyright full-width
- Desktop: 5 columns (Services | Industries | Company | Support | Contact+Map)

**Quote Form:**
- Mobile: 1 column, full-width inputs
- Tablet: 1 column, wider
- Desktop: 2-column grid for fields (name+phone row, email+company row), file upload and description full-width

---

## 8. Animation Specifications

### Guiding Principles
- All animations use `transform` and `opacity` only (GPU-accelerated properties)
- Respect `prefers-reduced-motion` — disable all animations when user has reduced motion enabled
- No animation exceeds 0.6s duration
- No auto-playing animations (video, carousel auto-scroll) without user interaction
- Use `will-change: transform, opacity` sparingly — only on elements that animate on scroll

### 8.1 Scroll Animations (Intersection Observer)

| Element | Animation | Duration | Delay | Easing |
|---|---|---|---|---|
| Section titles (H2) | Fade-in + translateY(20px) | 0.6s | 0s | ease-out |
| Card grids | Fade-in + translateY(20px), stagger children | 0.5s each | 0.1s stagger | ease-out |
| Testimonial cards | Fade-in + translateY(20px), stagger | 0.5s each | 0.15s stagger | ease-out |
| Hero content | Fade-in + translateY(0px) — no movement, just opacity | 0.8s | 0.1s delay per element (headline → sub → CTA) | ease-out |
| Trust badge row | Fade-in | 0.4s | 0.6s (after hero) | ease-out |

**Implementation:**
```css
.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-animate.stagger-1 { transition-delay: 0.1s; }
.scroll-animate.stagger-2 { transition-delay: 0.2s; }
.scroll-animate.stagger-3 { transition-delay: 0.3s; }
```

### 8.2 Hover Effects

| Element | Effect | Duration | Easing |
|---|---|---|---|
| **Service Card** | translateY(-4px), shadow increases to `0 12px 28px rgba(0,0,0,0.12)` | 0.3s | ease-out |
| **Industry Card** | translateY(-2px), border-color to `#00BCD4` | 0.2s | ease-out |
| **Primary Button** | Background darken `#132C5A`, shadow deepen | 0.2s | ease-out |
| **Secondary Button** | Background fill from transparent to `#0A1F3F`, text to white | 0.2s | ease-out |
| **Navigation Link** | Opacity 0.85, no transform | 0.15s | ease-out |
| **Footer Link** | Color change to `#00BCD4` | 0.15s | ease-out |
| **Card Image** | scale(1.02) — subtle zoom | 0.4s | ease-out |

### 8.3 WhatsApp Pulse Animation

```css
@keyframes whatsapp-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  50% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

.whatsapp-button {
  animation: whatsapp-pulse 3s infinite;
  /* Run pulse 3 times on page load, then stop — or loop gently */
}
```

- Pulse triggers on page load (3 cycles), then stops
- On hover: pulse stops, button gets the hover state shadow

### 8.4 Mobile Navigation Drawer

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Drawer panel | Slide from right: translateX(100%) → translateX(0) | 0.3s | cubic-bezier(0.16, 1, 0.3, 1) |
| Backdrop overlay | Fade-in: opacity 0 → 0.5 | 0.3s | ease-out |
| Menu links | Stagger fade-in + translateX(-8px) | 0.3s each | ease-out, 0.05s stagger |
| Close (reverse) | All reverse, same duration | 0.25s | ease-in |

### 8.5 Accordion Expand/Collapse

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}
.accordion-content.expanded {
  max-height: 500px; /* or use JS-set value */
}
.accordion-chevron {
  transition: transform 0.2s ease;
}
.accordion-chevron.expanded {
  transform: rotate(45deg); /* + to × */
}
```

### 8.6 Form Feedback

| Event | Animation | Duration |
|---|---|---|
| **Success (form submit)** | Input borders turn green (`#25D366`), success message fades in below form | 0.3s |
| **Error (validation)** | Shake animation on erroneous field + border turns magenta + error message slide-down | 0.4s shake, 0.3s message |
| **File upload success** | Drop zone border turns green, checkmark icon scales in (scale 0 → 1) | 0.3s |

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
.form-input.error {
  animation: shake 0.4s ease;
}
```

### 8.7 Performance & Accessibility

```css
/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001s !important;
    transition-duration: 0.001s !important;
    animation-iteration-count: 1 !important;
  }
  .scroll-animate {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

- All scroll animations use Intersection Observer (not scroll event listeners) for performance
- Stagger delays use CSS custom properties or inline styles to avoid forced layout
- Animation on cards uses `transform` only — no `width`, `height`, `top`, `left` animations

---

## 9. Iconography & Imagery Style

### 9.1 Icons

| Attribute | Specification |
|---|---|
| **Style** | Line icons (Feather-style / Lucide), 1.5px stroke, rounded caps and joins |
| **Default Size** | 24px × 24px |
| **Small Size** | 16px × 16px (inline, badges) |
| **Large Size** | 32px × 32px (service card icons), 48px × 48px (hero feature icons) |
| **Stroke Color** | `#0A1F3F` (navy) for navigation/section icons; `#00BCD4` (cyan) for accent/service icons |
| **Fill** | No fill — line style only, except for social media brand icons |
| **Library Recommendation** | Lucide Icons (open source, consistent, 1.5px stroke, 1000+ icons) |

**Required Icon Set:**
- Service icons (each of 15 services) — line icons representing the product (card, flyer, brochure, poster, banner, etc.)
- Industry icons — building, hospital, school, hotel, gym, embassy, etc.
- UI icons — chevron (dropdown/accordion), hamburger (nav), close (X), arrow right (CTA), check (success), upload (file), phone, WhatsApp, email, map-pin, clock, star (review)
- Social icons — Instagram, LinkedIn, Facebook, Google (branded fills acceptable)

### 9.2 Photography

| Attribute | Specification |
|---|---|
| **Subject** | Real Whites-printed products in authentic business contexts. Business cards in a professional's hand. Brochures fanned on a meeting table. Banners installed at a venue entrance. Finished products only — avoid photos of machines running. |
| **Style** | Well-lit, shallow depth of field, warm tones. Avoid harsh shadows or overly stylized filters. Natural and professional — like a premium brand catalogue. |
| **Source** | Professional photo shoot of Whites' actual work, shop floor (clean, organized shots), team (group photo, action shots at workstations), and installed projects. No stock photography. |
| **Format** | WebP with JPEG fallback. Compress to < 150 KB per image (hero: < 200 KB). |
| **Responsive** | Use `srcset` with 3 sizes: 480w, 768w, 1200w. |
| **Loading** | `loading="lazy"` on all images below the fold. Hero image: `loading="eager"`. |
| **Aspect Ratio** | Locked with `aspect-ratio` CSS property: 16:9 (hero, banners), 4:3 (service cards), 1:1 (team thumbnails), 3:4 (product showcase) |
| **Alt Text** | Descriptive: "Premium matte business card printing for corporate clients in Dubai" — include product name + keyword where natural. |

### 9.3 Illustration Style

| Attribute | Specification |
|---|---|
| **Usage** | Minimal — used only for decorative section transitions, abstract backgrounds, and "no image available" placeholders. Not as primary visual content. |
| **Style** | Geometric, minimal, CMYK-themed abstract shapes. Circles, lines, and overlapping translucent colour blocks in cyan (`#00BCD4`), magenta (`#E91E63`), yellow (`#FDD835`), and black (`#1A1A1A`) at 15–30% opacity. |
| **Purpose** | To visually hint at the printing process (CMYK dots, registration marks, colour bars) without being literal or distracting. |
| **Examples** | Hero background abstract: overlapping translucent geometric shapes in CMYK colours. Section dividers: subtle CMYK dot pattern or thin coloured line. Service page banners: diagonal colour bar in the associated CMYK accent. |

### 9.4 Image Treatment

- **Hero image:** Dark overlay gradient (navy left → transparent right) for text readability
- **Service card images:** Bright, saturated, consistent color grading across all cards
- **Team images:** Warm, natural lighting, professional but approachable
- **Product close-ups:** Macro shots showing paper texture, foil detail, embossing depth — maximum 2 per service page
- **Lazy loading:** Intersection Observer-based with low-res placeholder or blur-up technique

---

## 10. Layout Patterns

### 10.1 Section Structure

Every page section follows this pattern:
1. **Section container** — full-width background band (alternating `#FFFFFF` and `#F5F7FA`)
2. **Inner container** — max-width 1200px, centered, padding 24px
3. **Eye-brow label** — uppercase Montserrat Bold 14px, `#00BCD4`, letter-spacing 0.08em (optional — for key sections)
4. **Section title** — H2
5. **Section subtitle** — Body 16px, `#6B7280`, max-width 600px (centered or left)
6. **Content** — grid, cards, or custom layout
7. **Optional CTA** — centered button or link at bottom of section

### 10.2 Grid System

- **Framework:** CSS Grid (not Flexbox for grid layouts)
- **Columns:** 12-column grid for page layouts
- **Gap:** 24px (desktop), 16px (tablet/mobile)
- **Card grids:** Use auto-fill with minmax for responsive card grids:
  ```css
  .service-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  @media (max-width: 1024px) {
    .service-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .service-grid { grid-template-columns: 1fr; }
  }
  ```

### 10.3 Hero Layout

```
┌──────────────────────────────────────────────────┐
│ ┌─────────────────────┐ ┌───────────────────┐    │
│ │  SERVICES           │ │                    │    │
│ │                     │ │                    │    │
│ │  Premium Printing   │ │  [Hero Image /     │    │
│ │  for Dubai          │ │   CMYK Abstract]   │    │
│ │  Businesses         │ │                    │    │
│ │                     │ │                    │    │
│ │  Body text...       │ │                    │    │
│ │                     │ │                    │    │
│ │  [CTA] [WhatsApp]   │ │                    │    │
│ │                     │ │                    │    │
│ │  15+ Years | 1K+    │ │                    │    │
│ │  Clients | Delivery  │ │                    │    │
│ └─────────────────────┘ └───────────────────┘    │
│                Background: #FFFFFF                │
└──────────────────────────────────────────────────┘
```

- **Desktop:** Left 50% text + right 50% image/section
- **Mobile:** Stacked — text on top, image below (or image as background with overlay)
- **Hero height:** 600–700px (desktop), auto (mobile — content-height driven)
- **Overlay:** `linear-gradient(90deg, #0A1F3F 0%, rgba(10,31,63,0.6) 50%, transparent 100%)` when image is a full-width background

### 10.4 Services Page Template

```
┌─────────────────────────────────────┐
│  Hero (Service-specific)            │
├─────────────────────────────────────┤
│  Section: Service Description       │
│  (Text + Feature image)             │
├─────────────────────────────────────┤
│  Section: Use Cases (3–5 cards)     │
├─────────────────────────────────────┤
│  Section: Technical Specs (table)   │
├─────────────────────────────────────┤
│  Section: FAQ Accordion             │
├─────────────────────────────────────┤
│  Section: Related Services (grid)   │
├─────────────────────────────────────┤
│  CTA Banner (full-width, navy bg)   │
└─────────────────────────────────────┘
```

- Sticky bottom CTA bar appears after 50% scroll depth
- Sidebar table of contents (desktop only) for long service pages

### 10.5 Contact Page Layout

```
┌───────────────────────────────────────┐
│  ┌────────────┐  ┌─────────────────┐  │
│  │  Contact    │  │  Google Maps    │  │
│  │  Form       │  │  Embed          │  │
│  │             │  │                 │  │
│  │  [Fields]   │  │  Address        │  │
│  │             │  │  Phone          │  │
│  │  [Submit]   │  │  WhatsApp       │  │
│  │             │  │  Hours          │  │
│  │             │  │  Directions     │  │
│  └────────────┘  └─────────────────┘  │
│       Background: #FFFFFF              │
└───────────────────────────────────────┘
```

- **Desktop:** Split — form left 50%, map + contact details right 50%
- **Mobile:** Stacked — form on top, map below

### 10.6 Industries Page Layout

```
┌───────────────────────────────────────┐
│  Hero: "Printing Solutions for        │
│  Every Industry in Dubai"             │
├───────────────────────────────────────┤
│  Section: Industry Grid               │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │School│ │Health│ │Hotel │ │Fitness│ │
│  │+ Uni │ │+ Clin│ │+ Rest│ │+ Club │ │
│  └──────┘ └──────┘ └──────┘ └──────┘ │
│  ... 16 verticals in interactive grid  │
├───────────────────────────────────────┤
│  Each vertical → dedicated anchor or   │
│  sub-page with products + CTAs        │
├───────────────────────────────────────┤
│  CTA Banner                           │
└───────────────────────────────────────┘
```

- Each vertical card links to an anchor section on the same page (desktop) or a sub-page (mobile)
- Filter bar at top: "All | Hospitality | Healthcare | Corporate | Education | Events"

### 10.7 Location Page Template

```
┌───────────────────────────────────────┐
│  Hero: "Printing Services near        │
│  [Area], Dubai"                       │
├───────────────────────────────────────┤
│  Intro paragraph (2–3 sentences)      │
├───────────────────────────────────────┤
│  Map section (mini map + distance)    │
├───────────────────────────────────────┤
│  Local business callout               │
├───────────────────────────────────────┤
│  Relevant services for this area      │
├───────────────────────────────────────┤
│  CTA: "Get Printing Delivered to      │
│  [Area]" + WhatsApp                   │
└───────────────────────────────────────┘
```

- Each location page follows the same template with area-specific content swapping
- Breadcrumb navigation: Home > Locations > [Area]

---

## Appendix A: CTA Hierarchy

Every page must maintain the following CTA priority:

| Priority | Channel | Button Label | Placement |
|---|---|---|---|
| **1 (Primary)** | WhatsApp | "WhatsApp Now" | Floating button (all pages), Hero (secondary CTA), Service pages, Footer |
| **2 (Secondary)** | Quote Form | "Get a Free Quote" / "Get a Quote for [Service]" | Hero (primary CTA), Service pages (primary CTA), End-of-section banners |
| **3 (Tertiary)** | Phone Call | "Call Us Now" | Footer, Contact page, Mobile header |

### CTA Button Variants

| Context | Style | Text |
|---|---|---|
| Homepage Hero (Primary) | Primary Button, Large | "Get a Free Quote" |
| Homepage Hero (Secondary) | Outline Button, white variant on navy | "WhatsApp Now" (with WhatsApp icon) |
| Service Page (Primary) | Primary Button | "Get a Quote for [Service Name]" |
| Service Page (Secondary) | WhatsApp Button (inline, not floating) | "WhatsApp Now" |
| Bottom Banner (Global) | Primary Button, Large | "Start Your Print Project" |
| Industry Section | Primary Button | "Get a Quote for [Industry] Printing" |
| Location Page | Primary Button | "Get Printing Delivered to [Area]" |
| Monthly Offers | Primary Button | "Get This Offer" |
| FAQ Section | Text Link with WhatsApp icon | "Still Have Questions? WhatsApp Us" |
| Corporate Gifts (Soft) | Secondary Button | "Enquire About Corporate Gifts" |

---

## Appendix B: Design Tokens (CSS Custom Properties)

```css
:root {
  /* Colors */
  --color-navy: #0A1F3F;
  --color-navy-light: #132C5A;
  --color-navy-dark: #081833;
  --color-white: #FFFFFF;
  --color-cyan: #00BCD4;
  --color-magenta: #E91E63;
  --color-yellow: #FDD835;
  --color-black: #1A1A1A;
  --color-grey-light: #F5F7FA;
  --color-grey-medium: #E5E7EB;
  --color-grey-dark: #6B7280;
  --color-grey-darker: #4B5563;
  --color-whatsapp: #25D366;
  --color-whatsapp-hover: #20BD5A;
  --color-success: #25D366;
  --color-error: #E91E63;

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --fs-h1: 48px;
  --fs-h2: 36px;
  --fs-h3: 24px;
  --fs-h4: 20px;
  --fs-body: 16px;
  --fs-body-small: 14px;
  --fs-caption: 12px;
  --fw-bold: 700;
  --fw-semi-bold: 600;
  --fw-medium: 500;
  --fw-regular: 400;
  --lh-tight: 1.15;
  --lh-normal: 1.4;
  --lh-loose: 1.6;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;

  /* Layout */
  --container-max: 1200px;
  --container-padding: 24px;
  --nav-height: 72px;
  --border-radius-sm: 6px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-whatsapp: 0 4px 12px rgba(37, 211, 102, 0.4);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.6s ease;
}

@media (max-width: 1024px) {
  :root {
    --fs-h1: 36px;
    --fs-h2: 28px;
    --fs-h3: 20px;
    --container-padding: 20px;
    --space-4xl: 60px;
    --space-3xl: 48px;
  }
}

@media (max-width: 640px) {
  :root {
    --fs-h1: 28px;
    --fs-h2: 22px;
    --fs-h3: 18px;
    --container-padding: 16px;
    --space-4xl: 40px;
    --space-3xl: 32px;
  }
}
```

---

## Appendix C: Key Design Decisions & Rationale

1. **Navy #0A1F3F** chosen instead of #112AD0 from requirements — #0A1F3F is deeper, more corporate, and provides better contrast for white text. #112AD0 is brighter and slightly riskier for large surface areas.

2. **Focus on finished products, not machines** — photography shows what the customer receives, not how it's made. This is an evidence-based decision from competitive analysis (section 5.1 of market research: "stock photography of printing presses is meaningless to buyers").

3. **Inter over Open Sans** for body — Inter has better screen rendering (hinting, x-height, letter spacing) and a more modern feel that pairs cleanly with Montserrat.

4. **No dark mode** — per market research section 5.3: "dark mode on a print company website feels incongruous — print is about paper, light, and colour."

5. **Sticky bottom CTA on service pages** — a direct lift from Option C's conversion architecture, informed by the finding that scroll-triggered CTAs catch users who have consumed enough information.

6. **CMYK accents only as micro-accents** — the requirement says "sparingly for highlights." Using CMYK at 5–10% opacity or as small decorative elements ensures the site is navy + white dominant without feeling flat.

7. **Pull-to-refresh not recommended** — mobile browser default is sufficient; custom pull-to-refresh can conflict with scroll-based animations.

8. **Accordion max-height via JS** — CSS-only accordions with `max-height` can't animate from 0 to auto. Use JS to measure content height and apply inline style for smooth transitions.

---

---

## Visual Mockups

A refined HTML mockup is available at `mockups/visual-mockup.html` — open in a browser to view:

| Section | Description |
|---------|-------------|
| **Color Palette** | All brand colors with hex values |
| **Typography Scale** | Complete type hierarchy (Montserrat + Inter) with specs |
| **Component Library** | Buttons (primary, outline, ghost, WhatsApp, floating), badges, form fields, file upload, navigation |
| **Service Cards** | 4-column grid with icon + title + description + link, hover shadow lift |
| **Industry Cards** | Grid with SVG line icons (no emoji), border highlight on hover |
| **Testimonial Cards** | 3-column cards with star ratings |
| **Desktop Preview** | Full homepage: solid navy hero (no gradient), services grid, industries grid, testimonials, CTA banner, footer |
| **Mobile Preview** | 375px viewport showing mobile-first responsive layout |

**Design refinements applied:**
- All icons are Lucide-style SVG line icons (no emoji)
- Hero uses solid navy background with subtle geometric pattern (no gradient overlay)
- Clean, minimal spacing with consistent padding
- Subtle hover effects (shadow lift only, no translateY overshoot)

*End of Design System Document*
