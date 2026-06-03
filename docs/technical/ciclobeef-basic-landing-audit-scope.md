# CicloBeef Studio Basic Landing — Technical Audit Scope

## 1. Purpose

This document defines the technical scope for the CicloBeef Studio Basic Landing Page.

Its purpose is to prevent scope creep and protect the commercial logic of CoreFlux Studio Pack 1.

## 2. Pack Context

CoreFlux Studio Pack 1 contains:

1. Basic Landing Page.
2. Medium Landing Page.
3. Advanced Landing Page.

The current project is only the Basic Landing Page.

## 3. Technical Goal

The Basic Landing must be:

- Static.
- Fast.
- Responsive.
- SEO-ready.
- Commercially clear.
- Easy to maintain.
- Easy to deploy.
- Free from unnecessary backend complexity.

## 4. Allowed Stack

The allowed stack for this stage is:

- HTML.
- CSS.
- JavaScript.
- Canva assets.
- MkDocs static site structure.
- GitHub Pages deployment.
- Custom domain.
- SEO metadata.
- Open Graph metadata.
- Legal pages.
- Email/social CTA.
- Manual quote process.

## 5. Allowed Files to Modify

The main implementation may modify:

- docs/index.html
- docs/style.css
- docs/script.js
- docs/terms.md
- docs/privacy.md if needed
- docs/assets/images/
- docs/assets/social/
- docs/assets/css/extra.css if needed
- docs/assets/js/custom.js if needed
- README.md
- CHANGELOG.MD

Documentation may modify:

- docs/audits/2026-06-03-ciclobeef-basic-landing/
- docs/business/
- docs/technical/

## 6. Required Landing Sections

The final Basic Landing should include:

1. Hero.
2. What We Create.
3. Featured Collections.
4. How It Works.
5. Available Formats.
6. Why CicloBeef Studio.
7. Start Your Request.
8. Footer.

## 7. Technical Requirements

The landing must include:

- Viewport meta tag.
- SEO description.
- Open Graph metadata.
- Canonical link.
- Twitter card metadata.
- Favicon.
- Font imports.
- Descriptive alt text.
- ARIA labels for icon-only links.
- Semantic structure.
- Responsive CSS.
- Working CTA anchors.
- Working email link.
- Working legal links.
- Verified social links before release.

## 8. JavaScript Scope

JavaScript may be used for:

- Smooth scrolling.
- Legal navigation toggle.
- Chat bubble visual animation.
- Image preloading.
- Simple section reveal animations.

JavaScript must not be used for:

- Real chatbot logic.
- Commercial state machine.
- Quote calculation.
- Payment generation.
- API calls.
- Form persistence.
- CRM behavior.
- Customer data storage.

## 9. Commercial Process Scope

The Basic Landing may describe a manual quote process:

1. Customer chooses a collection.
2. Customer selects preferred format.
3. Customer contacts CicloBeef Studio by email or social media.
4. CicloBeef Studio prepares a personalized quote.
5. Customer approves.
6. CicloBeef Studio provides manual payment instructions.
7. Order is processed manually.

This process does not require backend, database, form automation, API integration, or automated checkout.

## 10. Out of Scope

The following features are explicitly out of scope for the Basic Landing:

- Backend.
- FastAPI.
- Django.
- PostgreSQL.
- SQLite.
- Google Sheets.
- Google Apps Script.
- Gmail automation.
- Chatbot.
- JSON commercial flow.
- sessionStorage sales flow.
- LangChain.
- LangGraph.
- RAG.
- ThePrintSpace API.
- Meta Graph API.
- Stripe integration.
- PayPal integration.
- Automatic payment links.
- Automatic quote calculation.
- Shipping API.
- CRM.
- Dashboard.
- Login.
- User accounts.
- Order tracking.
- Inventory.
- Admin panel.
- Customer database.

## 11. Future Combo Mapping

The following features belong to future CoreFlux Studio combos:

### Combo 2 — Landing + Leads

May include:

- Form.
- Google Sheets.
- Google Apps Script.
- Gmail automatic notification.
- Lead capture.

### Combo 3 — Landing + Basic ChatBot

May include:

- Rule-based chatbot.
- JSON flow.
- Quick replies.
- sessionStorage.
- Guided conversation.
- Summary before contact.

### Combo 4 — Landing + Leads + Basic ChatBot

May include:

- Landing.
- Form.
- Google Sheets.
- Gmail notification.
- Basic chatbot.
- Guided lead capture.

### Advanced Future Services

May include:

- FastAPI.
- PostgreSQL.
- ThePrintSpace API.
- Meta Graph API.
- Payment provider integration.
- LangChain.
- LangGraph.
- RAG.
- CRM.
- Dashboard.
- Cloud monitoring.

## 12. Provider Scope

WhiteWall is no longer the intended provider.

ThePrintSpace is the preferred provider candidate for future print-on-demand and fulfillment workflows.

However, the Basic Landing must not expose API-based provider automation as an active feature.

The Basic Landing may mention professional fine art fulfillment only in a general customer-facing way.

## 13. Size Strategy

Recommended Basic Landing sizes:

- 30 x 40 cm.
- 40 x 60 cm.
- 60 x 80 cm.
- 70 x 100 cm by custom quote.

The previous sizes should not be migrated automatically without provider validation:

- 50 x 70 cm.
- 60 x 90 cm.

Reason:
The Basic Landing should prioritize simple, repeatable, quote-friendly formats that reduce operational friction.

## 14. Definition of Done

The Basic Landing reaches 100% when:

- The page clearly communicates premium cultural wall art.
- The product is visible.
- The quote process is clear.
- Contact paths are visible.
- The email link works.
- Social links are verified.
- Legal pages match the actual process.
- SEO metadata is present.
- Fonts load correctly.
- Favicon exists.
- Mobile layout is stable.
- Desktop layout is premium.
- No advanced features are promised.
- QA is documented.

## 15. Final Technical Decision

The next implementation must complete the Basic Landing first.

Do not add leads, chatbot, backend, API, payments, automation, or CRM until the Basic Landing has been closed, validated, committed, and released.
