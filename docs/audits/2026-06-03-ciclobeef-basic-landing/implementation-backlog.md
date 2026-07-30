# Implementation Backlog — CicloBeef Studio Basic Landing

## 1. Purpose

This backlog defines the implementation stages required to complete the CicloBeef Studio Basic Landing Page at 100% according to CoreFlux Studio Pack 1 requirements.

The backlog is intentionally limited to the Basic Landing scope.

## 2. Current Status

Current estimated completion: 40%.

Remaining estimated work: 60%.

Target completion: 100%.

## 3. Implementation Rule

Do not implement advanced features in this stage.

The Basic Landing must remain static and lightweight.

Allowed stack:

- HTML.
- CSS.
- JavaScript.
- Canva assets.
- Static deployment.
- SEO basics.
- Legal links.
- Email and social CTA.
- Manual quote process.

Not allowed in this stage:

- Backend.
- FastAPI.
- Django.
- Database.
- Chatbot.
- Google Sheets.
- Google Apps Script.
- Payment automation.
- ThePrintSpace API.
- Meta Graph API.
- LangChain.
- LangGraph.
- CRM.
- Dashboard.

## 4. Stage 1 — Documentation and Audit Consolidation

Estimated contribution: +8%.

### Task 1.1 — Complete Audit Documentation

Priority: P0.

Affected files:

- docs/audits/2026-06-03-ciclobeef-basic-landing/deepseek-audit-prompt.md
- docs/audits/2026-06-03-ciclobeef-basic-landing/audit-input-files.md
- docs/audits/2026-06-03-ciclobeef-basic-landing/audit-findings.md
- docs/audits/2026-06-03-ciclobeef-basic-landing/implementation-backlog.md

Business reason:
CoreFlux Studio must show a professional method, not only a visual output.

Technical reason:
The development scope must be documented before editing the landing structure.

Acceptance criteria:

- Audit prompt is documented.
- Input files are documented.
- Findings are documented.
- Implementation backlog is documented.
- Scope boundaries are clear.

## 5. Stage 2 — Commercial HTML Structure

Estimated contribution: +15%.

### Task 2.1 — Add Commercial Landing Sections

Priority: P0.

Affected file:

- docs/index.html

Required sections:

1. Hero.
2. What We Create.
3. Featured Collections.
4. How It Works.
5. Available Formats.
6. Why CicloBeef Studio.
7. Start Your Request.
8. Footer.

Business reason:
The visitor must understand what CicloBeef Studio sells and how to start a request.

Technical reason:
The landing must move from a two-section conceptual page to a complete commercial structure.

Acceptance criteria:

- All required sections exist.
- The current bubble animation is preserved only as visual support.
- The page remains static.
- No backend or chatbot is added.

## 6. Stage 3 — Copy and Value Proposition

Estimated contribution: +8%.

### Task 3.1 — Replace Conceptual Hero Copy with Commercial Copy

Priority: P0.

Affected files:

- docs/index.html
- docs/business/ciclobeef-basic-landing-value-proposition.md

Recommended hero title:

Premium Wall Art That Speaks

Recommended subtitle:

High-end cultural prints for collectors, offices, and spaces that demand more than decoration.

Recommended primary CTA:

See Our Collections

Recommended secondary CTA:

Request Your Quote

Business reason:
The visitor must understand the offer within the first few seconds.

Technical reason:
The copy must align with the page sections and CTA anchors.

Acceptance criteria:

- Hero communicates product category.
- Subtitle communicates audience and premium positioning.
- CTA leads to product or quote request sections.
- Copy remains in English.

## 7. Stage 4 — Contact, CTA, and Manual Quote Process

Estimated contribution: +10%.

### Task 4.1 — Add Manual Quote Process

Priority: P0.

Affected files:

- docs/index.html
- docs/style.css

Recommended process:

1. Choose your collection.
2. Select your preferred size.
3. Request a quote by email or social DM.
4. Receive a personalized price and payment instructions.
5. Approve the order.
6. Receive your artwork.

Business reason:
A Basic Landing can generate revenue through manual quote and payment workflows without automated checkout.

Technical reason:
The page must not require backend, database, or payment integration.

Acceptance criteria:

- The process is visible.
- The process does not promise automation.
- The process explains how the customer starts a request.

### Task 4.2 — Add Final CTA and Contact Paths

Priority: P0.

Affected files:

- docs/index.html
- docs/style.css

Required elements:

- Visible email.
- mailto link.
- Social links.
- Final CTA section.
- Quote request instructions.

Business reason:
The visitor needs a direct conversion path.

Technical reason:
Static CTA links are valid within the Basic Landing scope.

Acceptance criteria:

- Email is visible.
- CTA works.
- Social links are verified or clearly marked before release.
- No form is added in this stage.

### Task 4.3 — Align Terms with Manual Payment Process

Priority: P1.

Affected file:

- docs/terms.md

Business reason:
The landing must not promise automated payments that are not implemented.

Technical reason:
The legal page must match the actual commercial process.

Acceptance criteria:

- Terms explain manual quote approval.
- Terms mention third-party payment methods only as possible manual options.
- No automated checkout is promised.

## 8. Stage 5 — Canva Assets and Product Preview

Estimated contribution: +9%.

### Task 5.1 — Add Product Mockups

Priority: P1.

Affected files:

- docs/assets/images/
- docs/index.html
- docs/style.css

Recommended product lines:

- Historical Memory Prints.
- Political Reflection Artwork.
- Social Commentary Collections.
- Custom Cultural Pieces.

Business reason:
A commercial landing cannot sell artwork without showing visual examples.

Technical reason:
Static images are enough for Basic Landing.

Acceptance criteria:

- At least 3 product or collection previews exist.
- Images are optimized.
- Images have descriptive alt text.
- The page does not include e-commerce functionality.

### Task 5.2 — Add Available Formats Section

Priority: P1.

Affected files:

- docs/index.html
- docs/style.css

Recommended visible formats:

- Essential Cultural Print — 30 x 40 cm.
- Signature Cultural Print — 40 x 60 cm.
- Collector Cultural Print — 60 x 80 cm.
- Gallery Quote — 70 x 100 cm, quote-only.

Business reason:
The customer needs enough information to request a quote.

Technical reason:
Showing formats does not require payment or provider API integration.

Acceptance criteria:

- Formats are visible.
- Prices are not published yet.
- The page explains that final quotes depend on size, finish, destination, shipping, and availability.

## 9. Stage 6 — SEO, Accessibility, and Responsive Fixes

Estimated contribution: +7%.

### Task 6.1 — Add Technical Metadata

Priority: P0.

Affected file:

- docs/index.html

Required additions:

- Viewport meta tag.
- Meta description.
- Open Graph title.
- Open Graph description.
- Open Graph type.
- Open Graph URL.
- Twitter card.
- Canonical link.
- Favicon link.
- Font imports.

Business reason:
The landing must look professional when shared and discovered.

Technical reason:
SEO and responsive foundations are required for production-quality landing pages.

Acceptance criteria:

- Viewport exists.
- SEO metadata exists.
- Fonts load correctly.
- Favicon loads correctly.
- The page remains valid HTML.

### Task 6.2 — Improve Accessibility

Priority: P2.

Affected files:

- docs/index.html
- docs/script.js

Required improvements:

- Descriptive alt text.
- ARIA labels for icon-only links.
- ARIA label for menu button.
- Decorative images marked correctly.
- Semantic main and nav elements.

Business reason:
A professional landing should be usable and trustworthy.

Technical reason:
Accessibility improves compatibility, quality, and maintainability.

Acceptance criteria:

- Icon-only links have labels.
- Images have useful alt text or are marked decorative.
- Page semantics improve.

### Task 6.3 — Improve Responsive Layout

Priority: P1.

Affected file:

- docs/style.css

Required improvements:

- Responsive typography.
- Mobile section spacing.
- Mobile CTA layout.
- Product cards responsive grid.
- Format cards responsive grid.
- Trust cards responsive grid.

Business reason:
Most landing traffic may arrive from mobile.

Technical reason:
The landing must be stable across viewport sizes.

Acceptance criteria:

- Mobile layout is readable.
- Desktop layout remains premium.
- CTA remains visible.
- No horizontal overflow.

## 10. Stage 7 — QA and Release

Estimated contribution: +3%.

### Task 7.1 — Final QA Checklist

Priority: P0.

Affected files:

- docs/audits/2026-06-03-ciclobeef-basic-landing/implementation-backlog.md
- README.md
- CHANGELOG.MD

Required validation:

- Mobile view.
- Desktop view.
- CTA links.
- Email link.
- Social links.
- Legal links.
- No backend promises.
- No automated payment promises.
- No chatbot promises.
- No API promises.
- No prototype badge.
- SEO metadata.
- Favicon.
- Font loading.
- Performance.
- Accessibility.

Business reason:
The landing must be presentable as a CoreFlux Studio portfolio demo.

Technical reason:
A release must be validated before tagging and deployment.

Acceptance criteria:

- QA is documented.
- Known limitations are documented.
- Landing reaches 100% Basic Landing completion.
- Release branch can be prepared.

## 11. Final Completion Definition

The Basic Landing is complete when:

- The hero clearly communicates premium cultural wall art.
- Product preview sections exist.
- The manual quote process is clear.
- Available formats are visible.
- Contact paths are visible.
- Email works.
- Social links work.
- Terms match the manual payment process.
- The page has SEO basics.
- The page is responsive.
- The page is accessible enough for a basic commercial release.
- The page does not include advanced combo features.

## 12. Next Stage After Completion

After the Basic Landing reaches 100%, future work may continue with:

- Combo 2: Landing + Leads.
- Combo 3: Landing + Basic ChatBot.
- Combo 4: Landing + Leads + Basic ChatBot.

Those future stages must be developed in separate branches and must not be mixed into the Basic Landing release.

---

## 13. Addendum — Pre-Implementation Frontend Diagnosis

Date: 2026-06-03.

Model:

- DeepSeek V4 Pro.

Branch:

- feature/basic-landing-commercial-structure.

### 13.1 Diagnosis Summary

The pre-implementation diagnosis confirmed that the current landing page has a strong visual foundation but still behaves as a two-section brand introduction.

The next implementation must focus on commercial structure and frontend stability before adding future features.

### 13.2 Accepted Scope for This Branch

This branch should implement:

- Hero commercial structure.
- What We Create section.
- Featured Collections section.
- How It Works section.
- Available Formats section.
- Why CicloBeef Studio section.
- Start Your Request section.
- Basic CSS structure for commercial sections.
- Bubble visual stabilization.
- Bubble image preloading.
- Basic responsive section layout.

### 13.3 Technical Issues to Fix in This Branch

The following issues should be handled during this implementation:

1. Replace broad bubble animation transition with specific opacity and transform transitions.
2. Add stable aspect ratio or explicit dimensions for bubble images.
3. Preload all bubble images before the animation cycle.
4. Avoid visible position snapping when bubble side changes.
5. Reduce fragile layout behavior caused by hardcoded hero spacing.
6. Add reusable CSS section and card structures.
7. Preserve the current chat bubble concept without turning it into a chatbot.

### 13.4 Issues Deferred to Later Branches

The following items are intentionally deferred:

- Full SEO metadata.
- Favicon.
- Open Graph social preview replacement.
- Canva product mockups.
- Terms payment wording.
- Social media URL verification.
- Analytics.
- Full accessibility pass.
- Final release QA.

### 13.5 Completion Target

Before this branch:

- 48%.

Expected after this branch:

- 63%.

This branch must not claim 71% completion because the full copy/value proposition stage remains separate.

---

## 14. Addendum — Post-Codex Implementation Review Pending

Date: 2026-06-04.

Branch:

- feature/basic-landing-commercial-structure.

Codex CLI implemented the first commercial structure for the Basic Landing.

### 14.1 Implemented in Current Branch

- Hero commercial copy.
- What We Create section.
- Featured Collections section.
- How It Works section.
- Available Formats section.
- Why CicloBeef Studio section.
- Start Your Request section.
- Visible email CTA.
- Social buttons moved into the request section.
- Bubble visual sequence moved into How It Works.
- Bubble image preloading.
- Bubble transition stabilization.
- Initial responsive section/grid styles.

### 14.2 Required Before Commit

The implementation must be audited visually and technically before commit.

Required checks:

1. Desktop visual rhythm.
2. Mobile responsiveness.
3. Section height and scroll behavior.
4. Bubble animation stability.
5. No forbidden scope additions.
6. No forms.
7. No backend.
8. No payment integration.
9. No provider API integration.
10. No chatbot logic.
11. No unwanted CHANGELOG.MD inclusion.

### 14.3 Known Visual Concerns

The current implementation may still require refinement in later branches or before commit:

- Some section transitions may expose small next-section strips during scrolling.
- Mobile responsive layout is not final.
- Background images may need to be removed from primary section backgrounds and reused as gallery/product presentation assets.
- Real Canva product mockups are still missing.
- WhatsApp button has not been implemented yet.

### 14.4 Completion Impact

If the post-implementation audit validates the scope and frontend structure, this branch may close the Stage 2 target:

- Before branch: 48%.
- After branch: 63%.

This branch must not claim completion beyond 63%.

---

## 15. Addendum — Premium Visual Section Refinement

This refinement belongs to Stage 2 commercial structure.

It supports the 48% -> 63% target by improving the client-facing landing rhythm, navigation, section structure, and responsive baseline.

It does not move the project beyond 63%.

Still deferred:

- Contact/payment wording.
- WhatsApp click-to-chat.
- Canva assets.
- SEO and Open Graph metadata.
- Accessibility pass.
- Final QA.

---

## 16. Addendum — Full Panel Viewport and Responsive Refinement

This refinement still belongs to Stage 2.

It supports the 48% -> 63% completion target by making the six-section landing behave as complete, intentional viewport panels on desktop/laptop while preserving content-safe responsive behavior on tablet/mobile.

It does not move the project beyond 63%.

Still deferred:

- SEO.
- Canva product mockups.
- Contact/payment wording.
- WhatsApp click-to-chat.
- Accessibility pass.
- Final QA.

---

## 18. Addendum — Hero Image Background and Contact Anchor Refinement

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by applying the real Hero image backgrounds, improving left-side Hero composition, and preserving direct contact/social anchor behavior.

It does not move the project beyond 63%.

It does not add forms, backend, payments, APIs, or automation.

---

## 19. Addendum — Hero Clarity, Products Layer, and About Contact Separation

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by refining Hero clarity, applying the Hero visual layer to Products, and separating About and Contact navigation destinations.

It does not move the project beyond 63%.

It does not add forms, backend, payments, APIs, or automation.

It intentionally blocks arbitrary visual changes outside Hero, Products, About, and Contact.

---

## 20. Addendum — About and Contact Scroll Navigation Fix

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by correcting internal section navigation and deterministic scroll behavior.

It does not move the project beyond 63%.

It does not add forms, backend, payments, APIs, or automation.

It only fixes internal navigation and scroll behavior.

---

## 17. Addendum — Final Premium Visual Polish

This is still part of Stage 2.

It supports the 48% -> 63% completion target by improving the premium visual finish, mobile Products/Gallery behavior, process chat stability, Formats mobile balance, and About presentation.

It does not move the project beyond 63%.

Still deferred:

- SEO.
- Real Canva mockups.
- Real testimonials or verified customer feedback.
- Contact/payment wording.
- WhatsApp click-to-chat.
- Accessibility pass.
- Final QA.

---

## 21. Addendum — Global Section Scroll Normalization

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by restoring deterministic internal section navigation and panel alignment.

It does not move the project beyond 63%.

It does not add forms, backend, payments, APIs, or automation.

It only fixes internal section navigation and scroll/panel alignment.

---

## 22. Addendum — About Section Compact Panel Refinement

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by improving About section containment inside the full-panel landing system.

It does not move the project beyond 63%.

It only adjusts About section visual containment.

It does not add forms, backend, payments, APIs, or automation.

---

## 23. Addendum — About Trust Pillars and Process Chat Refinement

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by replacing representative feedback with defensible brand pillars and stabilizing the Process chat visual.

It does not move beyond 63%.

It does not add forms, backend, payments, APIs, or automation.

It only adjusts About and Process.

---

## 24. Addendum — Process Quote Journey and Instagram DM Confirmation

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by converting Process into a clear manual Instagram DM quote journey.

It does not move beyond 63%.

It does not add forms, backend, payments, APIs, automation, or chatbot logic.

It converts Process into a manual DM quote journey.

---

## 25. Addendum — Hero CTA Simplification

This refinement belongs to Stage 2.

It supports the 48% -> 63% completion target by clarifying the Hero CTA hierarchy.

It does not move beyond 63%.

It only simplifies the Hero CTA hierarchy.

---

## 19. Addendum — Process Instagram Order Flow Integration

This refinement belongs to the current frontend-commercial stage.

It improves the Process section presentation by replacing the old visual flow with a realistic Instagram order-flow image.

It does not add backend, forms, payments, APIs, or automation.

It strengthens the commercial storytelling of the landing.

---

## 20. Addendum — Process Layout Correction

This correction preserves the intended Process commercial structure.

It fixes the oversized image issue by reducing the phone visual and restoring a balanced right-side explanation area.

It does not add backend, forms, payments, APIs, or automation.

---

## 22. Addendum — Process Layout Reorder and Phone Crop

This refinement improves Process section composition.

It keeps the landing within the Basic Landing scope.

It does not add backend, forms, payments, APIs, analytics, or automation.

It does not modify the image file.
