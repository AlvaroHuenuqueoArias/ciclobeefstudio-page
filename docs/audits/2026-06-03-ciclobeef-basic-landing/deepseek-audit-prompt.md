# DeepSeek V4 Pro Audit Prompt — CicloBeef Studio Basic Landing

## 1. Purpose

This document stores the official GenAI audit prompt used to evaluate the CicloBeef Studio landing page as a Basic Commercial Landing Page for CoreFlux Studio.

The goal of the audit is not to build advanced automation yet. The goal is to determine whether the current landing page can become a complete, professional, static commercial landing page that belongs to Pack 1, Level 1: Basic Landing Page.

## 2. Project Context

CicloBeef Studio is a premium cultural wall art studio focused on historical, social, political, and cultural artwork.

The landing page must communicate a clear commercial offer:

- What CicloBeef Studio sells.
- Who the artwork is for.
- Why the brand feels premium.
- How a potential customer can request a quote.
- Why the landing page is commercially useful even without backend, chatbot, payment automation, or APIs.

This landing is also intended to become the first real portfolio demo for CoreFlux Studio's Pack 1: Commercial Landing Pages.

## 3. Pack 1 Context

CoreFlux Studio Pack 1 contains three landing page levels:

1. Basic Landing Page.
2. Medium Landing Page.
3. Advanced Landing Page.

The current CicloBeef Studio project is only focused on the Basic Landing Page.

The Basic Landing Page must be static, responsive, commercially clear, technically clean, and conversion-oriented.

## 4. Basic Landing Scope

The Basic Landing Page may include:

- HTML.
- CSS.
- JavaScript.
- Canva-designed visual assets.
- Static deployment.
- Responsive layout.
- SEO basics.
- Favicon.
- Social media links.
- Email contact.
- Legal links.
- Manual quote process.
- Clear commercial CTA.
- Product preview sections.
- Trust sections.
- Basic accessibility improvements.

## 5. Out of Scope

The Basic Landing Page must not include:

- Backend.
- FastAPI.
- Django.
- Database.
- Google Sheets.
- Google Apps Script.
- Automated email workflows.
- Chatbot.
- LangChain.
- LangGraph.
- RAG.
- Stripe integration.
- PayPal integration.
- ThePrintSpace API integration.
- Meta Graph API integration.
- CRM.
- Dashboard.
- Login system.
- Payment automation.
- Quote automation.

Those features belong to future CoreFlux Studio combos or higher-level packs.

## 6. Audit Role

Act as:

- Principal Fullstack Software Engineer.
- UX Strategist.
- Conversion Rate Optimization Specialist.
- SaaS Product Architect.
- Technical Product Manager.

Do not evaluate the landing only as a visual page. Evaluate it as a commercial product that must be sellable as a CoreFlux Studio service.

## 7. Files to Audit

Audit the following project files:

- docs/index.html
- docs/style.css
- docs/script.js
- docs/assets/css/extra.css
- docs/assets/js/custom.js
- overrides/main.html
- mkdocs.yml
- docs/privacy.md
- docs/terms.md
- README.md
- CHANGELOG.MD
- docs/style-guide.md
- docs/assets/images/
- docs/assets/social/
- .github/workflows/

Important discovery:
The landing page currently lives in:

- docs/index.html
- docs/style.css
- docs/script.js

It does not live in:

- docs/landing/index.html
- docs/landing/style.css
- docs/landing/script.js

## 8. Audit Criteria

Evaluate the landing page according to these criteria:

### 8.1 Business Clarity

Check whether the visitor understands:

- What CicloBeef Studio sells.
- Who the offer is for.
- Why the artwork is premium.
- Why it is different from generic decoration.
- How the customer can start the order process.

### 8.2 Value Proposition

Evaluate:

- Hero headline.
- Hero subtitle.
- Product category clarity.
- Emotional positioning.
- Cultural positioning.
- Commercial positioning.
- CTA quality.

### 8.3 Conversion Path

Evaluate:

- Primary CTA.
- Secondary CTA.
- Final CTA.
- Email visibility.
- Social media links.
- Quote request process.
- Whether the page can convert a visitor into a real commercial conversation.

### 8.4 UX/UI

Evaluate:

- Visual hierarchy.
- Typography.
- Section spacing.
- CTA visibility.
- Mobile layout.
- Desktop layout.
- Background usage.
- Logo placement.
- Chat bubble animation.
- Footer clarity.
- Premium brand perception.

### 8.5 Technical Quality

Evaluate:

- HTML semantics.
- CSS maintainability.
- JavaScript simplicity.
- Responsive foundations.
- SEO metadata.
- Open Graph metadata.
- Favicon.
- Font imports.
- Accessibility.
- Alt text.
- ARIA labels.
- Performance risks.
- Image optimization.

### 8.6 Scope Discipline

Classify every recommendation into one of the following categories:

A. Must be implemented now for Basic Landing completion.
B. Should be implemented soon but still belongs to Basic Landing.
C. Belongs to Combo 2: Landing + Leads.
D. Belongs to Combo 3: Landing + Basic ChatBot.
E. Belongs to future API, automation, AI, or advanced services.
F. Should not be implemented.

## 9. Expected Output

Return the audit in this structure:

1. Executive Decision.
2. Current Strengths.
3. Critical Gaps.
4. Basic Landing Completion Checklist.
5. Recommended Final Page Structure.
6. Copywriting Recommendations.
7. UX/UI Recommendations.
8. Technical Recommendations.
9. What Must Stay Out of the Basic Pack.
10. Canva Workflow Recommendations.
11. Prioritized Implementation Backlog.
12. Final Commercial Verdict.

## 10. Language Rule

The audit output should use English for technical, code, copywriting, branch, and implementation terms.

The project owner may receive strategic explanation in Spanish outside this prompt, but the landing page itself and implementation documentation must remain aligned with an international English-language brand.
