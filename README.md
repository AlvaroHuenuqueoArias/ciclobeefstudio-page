# CicloBeef Studio – Technical Documentation Repository

**CicloBeef Studio** is an international project dedicated to the creation and distribution of high-end artistic prints inspired by history, politics, and society. This repository hosts the technical documentation site for the studio, built using **MkDocs + Material** and deployed to **GitHub Pages** under a fully-automated **GitFlow + CI/CD** workflow.

The website is designed as a foundational entry point into the broader CicloBeef Studio platform, which integrates automation tools (Google Apps Script, PayPal, Meta Graph API, and n8n) to deliver a seamless and automated e-commerce experience.

---

## 📅 Project Timeline & Releases

| Version | Date       | Description                                                                   |
| ------- | ---------- | ----------------------------------------------------------------------------- |
| v0.1.0  | 2025-11-02 | Initial release with structure, base theme, and working CI pipeline           |
| v0.2.0  | 2025-11-20 | Migrated to tag-based deployment and improved workflow integration            |
| v0.3.0  | 2025-11-28 | First major branding implementation with dark UI and structured pages         |
| v0.3.1  | 2025-11-27 | Hotfix to remove broken links and disable AWS CI pending setup                |
| v0.4.0  | Pending    | Final branding release with light UI, redesigned logo, and polished structure |

---

## 🔧 Project Goals

* Provide a professional and scalable documentation platform
* Act as the landing page for CicloBeef Studio's automation ecosystem
* Support validation and integration with **Meta Developer API**
* Demonstrate DevOps proficiency through real versioning and CI/CD workflows

---

## 🧰 Stack Overview

| Category          | Tools/Technologies                                |
| ----------------- | ------------------------------------------------- |
| Documentation     | Python, MkDocs, Material for MkDocs               |
| Versioning        | Git, GitFlow, GitHub                              |
| CI/CD             | GitHub Actions, Deploy via tag to `gh-pages`      |
| Automation        | Google Apps Script, PayPal, n8n                   |
| Frontend Assets   | Custom CSS (`extra.css`), JS (`custom.js`)        |
| Design & Branding | Canva (banners, logos), WhiteWall (print backend) |
| Security          | KeePassXC, GitHub secrets                         |

---

## 📖 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AlvaroHuenuqueoArias/ciclobeefstudio-page.git
cd ciclobeefstudio-page
```

### 2. Create and Activate Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install mkdocs mkdocs-material mkdocs-macros-plugin
```

### 4. Run Locally

```bash
mkdocs serve
```

Then visit:

```
http://127.0.0.1:8000
```

### 5. Deploy Manually

Build and deploy the site:

```bash
mkdocs gh-deploy --force
```

> Note: Only run this command from the `main` branch with a proper tag.

---

## 🌐 Live Deployment

The documentation site is published automatically to:

```
https://alvarohuenuqueoarias.github.io/ciclobeefstudio-page/
```

Every deploy is tracked through GitHub Actions and tied to specific version tags.

---

## 🌎 Business Context

The CicloBeef Studio platform integrates:

* Professional presentation (logo, branding, typography)
* Automated responses in social media via DM (future via LangGraph + LangChain)
* Automated quotation system (manual for now, pending RPA)
* Integration with Google Forms + Sheets + Apps Script
* Smart delivery of post-purchase PDFs

This site serves as a **technical validation point** and onboarding portal for automation workflows.

---

## ✉️ Contact

For business or technical inquiries:

**Email**: [ciclobeefstudio@gmail.com](mailto:ciclobeefstudio@gmail.com)
**GitHub**: [@AlvaroHuenuqueoArias](https://github.com/AlvaroHuenuqueoArias)

---

## 📃 License

All content is the intellectual property of CicloBeef Studio. Reproduction or commercial reuse is not allowed without express permission.
