# Spec: Cream lace envelope and extra butterflies

**Status:** Approved

## Problem

The intro envelope was pink and flat compared with the cream paper, lace, sprig, and wax seal in the reference photo. The garden also needed more flying butterflies.

## Layout & structure

The envelope stays in the intro overlay and still opens on seal click. Visual target is the cream reference photo:

- Buttercream paper with grain, crease shading, and a center seam
- Scalloped cream lace along both flap edges
- Sage greenery sprig on the flap, above the seal
- Ivory wax seal with an EJ imprint
- Hint text: CLICK THE SEAL TO OPEN

Butterflies: 7 on desktop (4 previous plus 3). Mobile shows 4 (bf-1 through bf-4).

## Components & styles

- Envelope palette: `#F4EBD4`, `#E8D9B0`, `#D4C08C`, lace `#EFE6C4`, seal ivory `#F7F0DE`, sprig sage `#7F9C6B`
- Paper grain via an SVG noise overlay on back, front, and flap
- Open animation is unchanged: flap rotateX, card slides up, seal fades
- Seal remains the only focusable control on the envelope

## Database changes

None

## Laravel files

None

## Routes

None

## Security rules

- Seal keeps `aria-label="Open the invitation"`
- Lace and sprig are decorative (`aria-hidden="true"`) and do not capture clicks

## Changes

- `index.html` — envelope colors, paper grain, lace, sprig, cream seal, hint text, three extra butterfly paths

## Retires

- Pink envelope fills (`#F3C9CF`, `#F7D3D8`, `#F5CCD3`, `#EFB5BF`)
- Candy-stripe overlay on `.env-back::before`
- Rose wax-seal gradient
- Mobile rule that hid `.bf-3` and `.bf-4`

## Edge cases

- Envelope still opens on click, and `/#rsvp` still skips the intro
- Lace and sprig rotate away with the flap
- `prefers-reduced-motion: reduce` still freezes butterflies and shortens the open animation
- Seal stays clickable above the lace and sprig

## Approval checklist

- [x] Approved by: John Kenneth Lazos (reference photo)
- [x] Date: 2026-09-23
- [x] Implementation started: 2026-09-23
- [x] Implementation completed: 2026-09-23
