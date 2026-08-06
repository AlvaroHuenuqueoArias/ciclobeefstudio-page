# Collection 001 Artwork Registry

## Purpose

This document is the canonical naming registry for Collection 001 artworks.
It establishes the approved public titles and editorial descriptors used in
commercial conversations, quote preparation, documentation, and future content
updates.

This activity is documentation-only. It does not rename production assets,
source masters, generated images, HTML references, CSS, JavaScript, or pipeline
scripts.

## Canonical Artwork Names

| Internal code | Public title | Editorial descriptor |
| --- | --- | --- |
| COL001-AW001 | Aureocrya | Antarctic Dawn |
| COL001-AW002 | Vesperocrya | Antarctic Afterglow |

## Field Definitions

Internal code:
The stable operational identifier for the artwork inside Collection 001. It is
used to map commercial requests to the existing source and generated asset
families.

Public title:
The customer-facing artwork name used in quotes, messages, invoices, and future
public-facing content.

Editorial descriptor:
The supporting editorial phrase that gives collection context without replacing
the public title or the internal code.

## Quote Usage

Quote requests should include the public title and internal code together,
followed by the requested Studio Edition, orientation, size, and delivery
details.

Recommended example:

```text
Aureocrya (COL001-AW001), CicloBeef Signature Frame, vertical orientation,
60 × 90 cm, delivery to Santiago, Chile.
```

This structure keeps customer-facing language clear while preserving the
operational code needed to identify the exact artwork.

## Studio Editions, Materials, and Orientations

Both registered artworks are available by quote in the current Studio Edition
families:

- CicloBeef Signature Frame.
- CicloBeef Signature Acrylic.

Both artworks support the current orientation model:

- Vertical.
- Horizontal.

The approved name registry is independent from material and orientation. A
single artwork title can therefore appear across both Studio Editions and both
orientations.

## Asset Naming Rule

Do not rename assets as part of this naming registry activity.

The existing asset and pipeline identifiers such as `aw001`, `aw002`,
`col001-aw001-*`, and `col001-aw002-*` remain stable technical references.
They are intentionally preserved to avoid breaking generated WebP paths,
`src`/`srcset` references, source master filenames, build scripts, and existing
deployment artifacts.

Any future asset migration must be handled as a separate implementation with
explicit rename mapping, generated asset validation, frontend reference updates,
and release QA.
