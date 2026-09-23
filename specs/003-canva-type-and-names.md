# Spec: Canva invitation type and names

**Status:** Approved

## Problem

The site used Pinyon Script, Alegreya, and Cormorant SC. The printed Canva suite (cm Elena Barrocan 3 pager) uses Luxurious Script and Cormorant Garamond, with name color `#CA6492`. Entourage names on the site were still placeholders.

## Components & styles

- `--script`: Luxurious Script
- `--serif` and `--caps`: Cormorant Garamond (labels use small-caps and tracking)
- `--rose`: `#CA6492` (Canva heading color)
- `--ink`: `#323131`
- Body size 1.15rem so Garamond stays readable

## Changes

- `index.html` Google Fonts import, CSS variables, crest SVG font, entourage names from the Canva file, gentlemen attire line for polo barong

## Database changes

None

## Laravel files

None

## Routes

None

## Security rules

None

## Retires

- Pinyon Script
- Cormorant SC as the label face
- Placeholder `Firstname Lastname` rows that the Canva file already names

## Edge cases

- Names not listed in the parsed Canva pages stay omitted rather than invented
- Google Fonts load Luxurious Script and Cormorant Garamond with `display=swap`

## Approval checklist

- [x] Approved by: John Kenneth Lazos (Canva design reference)
- [x] Date: 2026-09-23
- [x] Implementation started: 2026-09-23
- [x] Implementation completed: 2026-09-23
