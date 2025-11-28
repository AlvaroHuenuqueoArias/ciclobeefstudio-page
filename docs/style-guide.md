# Ciclobeef Studio – Brand & Style Guide (v0.3.0)

> This document defines the visual and editorial foundations of the Ciclobeef Studio website and related digital products.  
> It must be followed by anyone who creates or updates UI, documentation, or frontend components.

---

## 1. Brand Identity

**Brand name:** Ciclobeef Studio  
**Tagline:** High-end art, history and society  
**Primary language of the website:** English (international audience)

### 1.1 Mission

To connect people worldwide with historical, political and social narratives through high-end visual art, combining research-based storytelling with premium presentation.

### 1.2 Vision

To become a global reference for curated art pieces that document critical moments of history and society, serving collectors, institutions and cultural projects.

### 1.3 Core Values

- **Elegance** – visual and narrative quality in every piece and page.  
- **Research** – historically informed content, not superficial decoration.  
- **Impact** – works that invite reflection on culture, conflict and identity.  
- **Exclusivity** – limited, premium offerings, not mass-produced decor.  

---

## 2. Color Palette

All UI work must use this palette as the primary reference.

- **Primary:** `#1A1A1A` – Deep black / charcoal  
  - Use for: main text, headers, footer background.
- **Secondary (Gold/Bronze):** `#BFA56D`  
  - Use for: primary buttons, key accents, call-to-action highlights.
- **Accent (Dark Red):** `#8B0000`  
  - Use for: hover states, emphasis, warnings, artistic highlights.
- **Light Background:** `#F5F5F5`  
  - Use for: hero sections, cards, separated blocks.
- **Body Background:** `#FFFFFF`  
  - Use for: page content area.
- **Neutral Gray:** `#777777`  
  - Use for: secondary text, muted labels, metadata.

> **Rule:** Never introduce new brand colors in the UI without updating this guide first.

---

## 3. Typography System

### 3.1 Typefaces

- **Headings:** “Playfair Display”, serif  
  - Fallbacks: `Georgia, "Times New Roman", serif`
- **Body text:** “Inter”, sans-serif  
  - Fallbacks: `"Helvetica Neue", Arial, sans-serif`

> Note: If a given environment does not support the primary fonts, the fallbacks must keep the same tone: elegant serif for headings, clean sans-serif for body text.

### 3.2 Hierarchy

- **H1 (Page title)**
  - Font: Playfair Display  
  - Size (desktop): ~2.5rem  
  - Weight: 700  
  - Margin top: 3.5rem  
- **H2 (Section title)**
  - Font: Playfair Display  
  - Size: ~2rem  
  - Weight: 600  
  - Margin top: 2.5rem  
- **Body text**
  - Font: Inter  
  - Size: 1rem  
  - Line height: 1.6  
- **Quotes / Emphasis**
  - Style: italic  
  - Color: `#8B0000` when appropriate  

> **Rule:** Each page should have exactly one main H1. Subsections use H2/H3 for logical structure, not for visual “boldness only”.

---

## 4. Buttons, Links and Interactions

### 4.1 Primary Button

CSS class: `.btn-primary`

- Background: `#BFA56D`  
- Text color: `#FFFFFF`  
- Padding: `0.75rem 1.25rem`  
- Border radius: `4px`  
- Font weight: 600  
- Display: `inline-block`  

**Hover state:**

- Background: `#8B0000`  
- Text color: `#FFFFFF` (unchanged)

### 4.2 Links

- Default color: `#BFA56D`  
- Hover: `#8B0000`  
- No underline by default; underline allowed for emphasis in long paragraphs.

> Links must be meaningful: avoid “click here”; prefer “view our project overview”, etc.

---

## 5. Layout and Structure

### 5.1 Page Layout

- Content container:
  - Max width: ~1100px (`.container`)
  - Horizontal padding: ~1.5rem
- White space is part of the visual hierarchy: avoid cramming elements.

### 5.2 Header

Class: `.ciclo-header`

- Background: `#1A1A1A`  
- Text: `#FFFFFF`  
- Bottom border: `2px solid #BFA56D`  
- Contains: logo / brand name and main navigation.

### 5.3 Footer

Class: `.ciclo-footer`

- Background: `#1A1A1A`  
- Text: `#F5F5F5`  
- Content: legal notice, contact email, copyright.

---

## 6. Images and Art Direction

- Use **high-resolution** images of artworks, but optimized for web.  
- Max width in hero sections: ~1200px.  
- All images:
  - Must have `alt` text describing the subject (accessibility).
  - Should use subtle border radius (~6px).
  - Should avoid heavy filters that distort the original art.

> Visual tone: serious, reflective, with controlled contrast and sobriety.

---

## 7. Spacing Rules

- Base line height: **1.6** for paragraphs.  
- Vertical spacing:
  - Section top margin: 3–4rem on desktop, 2rem on mobile.
  - Paragraph spacing: 1.5rem.  
- Avoid stacking more than 3 different typographic styles in a single block (e.g. bold + italic + color + caps).

---

## 8. Versioning

This guide is tied to the web release cycle.

- **v0.1.0** – Initial docs and project setup.  
- **v0.2.0** – CI/CD, GitFlow, static site deployed.  
- **v0.3.0** – Corporate branding and style guide formalized (this document).  
- **v0.4.0** – Planned: backend foundation (FastAPI + Meta Graph API).  

> Any visual or structural change that affects multiple pages must be reflected in this document and released under a new version tag.

---

## 9. GitFlow Workflow Reference

Ciclobeef Studio uses a GitFlow-like branching model:

- `main` – production-ready code.  
- `develop` – integration branch for the next release.  
- `feature/*` – new work units (e.g. `feature/design-v3`).  
- `release/*` – release stabilization branches (e.g. `release/0.3.0`).  
- Tags – mark published versions (e.g. `v0.3.0`).

**Example flow for this release:**

1. Start feature from `develop`:  
   `feature/design-v3`
2. Merge into `develop`.  
3. Create `release/0.3.0` from `develop`.  
4. Merge `release/0.3.0` into `main`.  
5. Tag `v0.3.0` and deploy.

This model is based on widely documented GitFlow practices adapted for release-based workflows.:contentReference[oaicite:0]{index=0}
