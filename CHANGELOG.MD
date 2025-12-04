# 📦 CHANGELOG.md

All notable changes to this project are documented in this file. The format follows the conventions of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v0.4.0] - 2025-12-02

### Added

* Updated branding with larger logo and visual enhancements to the color palette
* Final UI polish and style adjustments for corporate alignment

### Changed

* `docs/assets/css/extra.css` and `mkdocs.yml` updated to reflect new design

### Commands Executed

```bash
# Branch created
$ git checkout -b release/0.4.0

# CSS and config changes made
$ nano docs/assets/css/extra.css
$ nano mkdocs.yml

# Local preview
$ mkdocs serve

# Commit and push
$ git add .
$ git commit -m "feat(design): update corporate branding with larger logo and refined palette for v0.4.0"
$ git push origin release/0.4.0
```

---

## [v0.3.1] - 2025-11-27

### Fixed

* Removed broken link to `contact.md` to allow strict build to pass
* Disabled AWS S3 deploy workflow by moving it to `.github/workflows_disabled/`

### Commands Executed

```bash
$ git checkout -b hotfix/0.3.1
# Moved file, fixed link
$ git commit -am "fix(docs): remove broken link to contact.md to pass strict build"
$ git commit -am "chore(ci): disable unused AWS S3 deploy workflow – prepare next release"
$ git push origin hotfix/0.3.1
# PR created and merged into main
$ git checkout main
$ git merge hotfix/0.3.1
$ git tag v0.3.1
```

---

## [v0.3.0] - 2025-11-28

### Added

* Fully applied corporate branding (logo, theme, typography)
* English translation of the style guide for internationalization

### Commands Executed

```bash
$ git checkout -b release/0.3.0
# Branding and docs changes
$ git commit -am "feat(design): apply full corporate branding and documentation for v0.3.0"
$ git push origin release/0.3.0
$ git checkout main
$ git merge release/0.3.0
$ git tag v0.3.0
```

---

## [v0.2.0] - 2025-11-20

### Changed

* Migrated GitHub Pages deploy to a manual tag-based trigger
* Resolved deploy workflow conflicts across branches

### Commands Executed

```bash
$ git checkout -b release/0.2.0
# Workflow edits and CI updates
$ git commit -am "fix(ci): resolve merge conflict in deploy-ghpages.yml for release/0.2.0"
$ git push origin release/0.2.0
$ git checkout main
$ git merge release/0.2.0
$ git tag v0.2.0
```

---

## [v0.1.0] - 2025-11-02

### Added

* Initial documentation structure: `index.md`, `project.md`, `team.md`, `privacy.md`
* Configured `mkdocs.yml` with Material theme
* Set up GitHub Actions workflows: PR checks and deploy to GitHub Pages / AWS S3
* Added placeholder files for `extra.css` and `custom.js`

### Commands Executed

```bash
$ git checkout -b feature/initial-structure
# All files added and verified
$ git commit -am "feat(docs): initial docs and mkdocs config"
$ git push origin feature/initial-structure
$ gh pr create
# PR reviewed and merged
$ git checkout main
$ git merge release/0.1.0
$ git tag v0.1.0
```

---

📌 **Note:**

* Each version aligns with the GitFlow strategy: features are merged into `develop`, releases into `main`, and hotfixes directly patched into `main`.
* All deployments verified through GitHub Pages (`gh-pages` branch) and GitHub Actions.
* Tags are applied post-merge into `main` and reflect production readiness.

---
