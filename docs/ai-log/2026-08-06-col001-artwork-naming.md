# AI Log — COL001 Artwork Naming

## Date

2026-08-06

## Branch

docs/col001-artwork-naming

## Objective

Establish the canonical artwork naming registry for Collection 001 without
modifying production frontend code, generated assets, source masters, or asset
pipeline scripts.

## Approved Nomenclature

| Internal code | Public title | Editorial descriptor |
| --- | --- | --- |
| COL001-AW001 | Aureocrya | Antarctic Dawn |
| COL001-AW002 | Vesperocrya | Antarctic Afterglow |

## Scope

Included:

- README registry summary.
- Business documentation registry.
- AI implementation log.

Excluded:

- HTML changes.
- CSS changes.
- JavaScript changes.
- Asset renames.
- Generated image path changes.
- Pipeline script changes.
- Release tagging.
- Deployment.

## Rationale

Collection 001 previously relied on `AW001` and `AW002` as operational artwork
identifiers. The approved titles add customer-facing and editorial clarity while
preserving the existing technical asset model.

The asset names remain unchanged because the current source masters, generated
WebP files, gallery paths, and build pipeline depend on stable `aw001` and
`aw002` identifiers.

## Validation Plan

- Confirm only documentation files changed.
- Run whitespace validation.
- Rebuild frontend assets to ensure no accidental pipeline drift.
- Run strict MkDocs build through the documented virtual environment command
  when `.venv` is available.
