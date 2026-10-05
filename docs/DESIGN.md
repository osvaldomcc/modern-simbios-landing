## This is the final, consolidated DESIGN.md document. It includes all your original tokens, specifications, and logic, with the technical layers of Google Labs, Addy Osmani, Vercel, and Anthropic seamlessly integrated.

## company MASTER DESIGN SYSTEM v6.0 (PRO + DARK MODE)

## Standards: Google DESIGN.md | Anthropic Frontend | Vercel UI | Addy Osmani Quality

## Framework: Astro 5.x Optimized

---

tokens:
colors: # Image Palette Extraction
brand:
navy: "#354B8C" # Authority & Trust
black: "#0B0C0D" # Deep Base
yellow: "#F2CB05" # Action/Highlight (Dark Mode)
burgundy: "#592525" # Error/State Accent
off_white: "#F2F2F2" # Soft Neutral
orange: "#D94929" # Primary Action (Light Mode)

    # Dynamic Mode Mapping
    modes:
      light:
        background: "#FFFFFF"
        surface: "#F9FAFB"
        primary: "#354B8C"
        text_heading: "#111827"
        text_body: "#374151"
        action: "#D94929"
      dark:
        background: "#0B0C0D"
        surface: "#1A1B1C"
        primary: "#3BACD9"
        text_heading: "#F2F2F2"
        text_body: "#D1D5DB"
        action: "#F2CB05" # High contrast on dark backgrounds

typography:
family: "Inter, system-ui, sans-serif"
scale: 1.25 # Major Third scale for hierarchy
line_height: 1.65 # WCAG reading comfort standard
letter_spacing: "-0.02em" # Anthropic-style precision kerning

layout:
max_width: "1280px"
section_gap: "clamp(5rem, 10vw, 8rem)"
grid_gap: "32px"
radius:
pill: "999px" # For CTA Buttons
card: "16px" # For Service Cards
inner: "12px" # Nested elements (Systematic Radius principle)

performance_budgets:
lcp: "< 1.2s" # Largest Contentful Paint (Hero) - Addy Osmani Standard
cls: "0" # Zero Layout Shift - Vercel Quality Standard
inp: "< 200ms" # Interaction to Next Paint - Google Labs Standard

---

## company.com | Site Specification & Content Master

## 🚀 Astro Framework Implementation

- **Islands of Interactivity**: Use `client:visible` for the Contact Form to keep JS payloads minimal (<50kb).
- **Asset Pipeline**: Utilize `astro:assets` for automatic WebP conversion and responsive srcset.
- **Global Styles**: Map Tailwind theme.extend directly to the tokens defined above.
- **Server Islands (Astro 5)**: Consider for components requiring dynamic data without blocking static rendering.
- **Theme Strategy**: Use the `.dark` class on the `<html>` element for mode switching.
- **Deterministic UI**: Resolve theme via inline script in `<head>` to prevent Flash of Unstyled Content (Vercel standard).

---

## 1. Global Navigation

- **Logo**: company (Clean, modern sans-serif).
- **Nav Menu**: Home · Solutions · Expertise · About Us.
- **Action Button**: [Contact Us] (Style: `bg-action`, `text-white`, `rounded-pill`).
- **A11y**: Every link must be an `<a>` tag; use `:focus-visible` rings for keyboard navigation.

---

## 2. Optimized Content Sections (The Wording)

## 2.1 Hero Section: The First Impression

- **Headline (H1)**: Scalable IT Solutions for Modern Enterprises.
- **Sub-headline**: We bridge the gap between complex technology and your business goals through expert consulting and custom software development.
- **Action Buttons**:
  - **Primary**: [Book a Consultation] (Solid #D94929 in Light / #F2CB05 in Dark)
  - **Secondary**: [Explore Our Services] (Outline #354B8C in Light / #F2F2F2 in Dark)
- **Visuals**: Use `fetchpriority="high"` for the hero graphic/image to optimize LCP.

## 2.2 Services / Solutions (The "What We Do" Grid)

Display in a responsive 4-column grid. Use `<article>` tags and `radius.card`.

1. **Custom Software Development**
   - Copy: Tailored applications designed to automate workflows and enhance operational efficiency.
2. **IT Strategy & Consulting**
   - Copy: Align your technology roadmap with your business vision to ensure sustainable growth.
3. **Cloud Infrastructure & DevOps**
   - Copy: Reliable, secure, and scalable cloud solutions to modernize your legacy systems.
4. **Managed IT Services**
   - Copy: Proactive support and maintenance to keep your business running without interruptions.

## 2.3 Value Proposition (The "Why company")

- **Headline**: Why Partner with company?
- **Key Pillars**:
  - **Decades of Expertise**: Over 20 years of experience delivering high-impact IT projects.
  - **Tailored Approach**: We don't believe in "one size fits all." Every solution is built for your specific needs.
  - **Reliability & Security**: We prioritize data integrity and system uptime in everything we build.
  - **Agile Methodology**: Faster delivery cycles with transparent communication at every stage.

## 2.4 About Section (The Story)

- **Headline**: About company
- **Copy**: At company, we believe that technology should be an enabler, not a hurdle. Based in country, our team of senior consultants and developers specializes in transforming complex technical challenges into streamlined digital experiences. We partner with companies to build the backbone of their digital future.

## 2.5 Social Proof

- **Headline**: Trusted by Industry Leaders.
- **Logos**: Monochrome display of Java, .NET, AWS, Azure, and key partner technologies.
- **Engineering**: Implement a 50% width marquee loop for seamless animation.

---

## 3. Lead Generation & Contact Footer

## 3.1 Conversion Area

- **Headline**: Ready to Start Your Digital Transformation?
- **Sub-headline**: Let’s build something great together.
- **Form Fields**: Full Name, Company Email, Service of Interest (Dropdown), Message.
- **Behavior**: Handle idle, submitting, success, and error states visually (Vercel-style feedback).

## 3.2 Global Footer

- **Theme**: `bg-primary` (#354B8C) in Light / `bg-brand-black` (#0B0C0D) in Dark.
- **Slogan**: Connecting Technology and Business.
- **Quick Links**: Privacy Policy · Terms of Service · LinkedIn Profile.
- **Contact Info**: Capital, country | info@company.com
- **Copyright**: © 2024 company. All rights reserved.

---

## 4. Engineering & Design Principles (Anthropic/Vercel/Google)

- **Operational Silence**: UX designed for zero friction. No layout shifts and immediate tactile feedback.
- **Systematic Radius**: Child elements must have smaller radii than their parent container (e.g., Card 16px -> Image 12px).
- **Interactions**: Use `cubic-bezier(0.4, 0, 0.2, 1)` for hover transitions (e.g., cards lift up 4px).
- **Copywriting**: Use active voice throughout. Headlines focus on Results, body text focuses on How.
- **Quality Audit**: Lighthouse score must be 95+ in all categories before deployment.
- **Accessibility**: Ensure 4.5:1 contrast for all text and minimum 48px touch targets.
