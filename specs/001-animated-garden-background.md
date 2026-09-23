# Spec: Animated golden-hour garden background

**Status:** Approved

## Problem

The envelope intro and hero used a still watercolor SVG on a flat paper field. Guests should see a living golden-hour garden: blush and lavender blooms, faint cream stripes, sunlight flare, bokeh, flying butterflies, and a soft-focus foreground. The envelope and invite card must stay fully readable.

## Flow

1. Guest lands on `/` and sees the envelope over the animated garden.
2. Guest taps the seal. The envelope opens. The garden stays visible behind it, then the intro fades.
3. The hero shows the same garden behind the invite card.
4. Direct links such as `/#rsvp` skip the envelope. The hero garden still renders.
5. `prefers-reduced-motion: reduce` shows the still garden and freezes all garden motion.

## Pages/Components

- Envelope intro (`.intro`)
- Hero (`.hero`)
- Shared garden stack (`.garden`)
- Existing watercolor flora on intro scatter and hero corners, now swaying

## Layout & structure

Applies only to the envelope intro and the hero. Section garlands, story, RSVP, and footer stay unchanged.

Layers, back to front:

1. Painterly garden photo (`images/background-floral.jpg`)
2. Faint cream vertical stripes
3. Golden-hour wash: peach-gold from the top right, blush and lilac at the edges
4. Soft sunlight flare with a 12s pulse
5. Drifting bokeh orbs (14 desktop, 8 at max-width 860px)
6. Existing watercolor florals with an 8-14s sway
7. Four butterflies on 18-28s looping paths (two at max-width 860px)
8. Soft-focus foreground petals at the bottom
9. Envelope or invite card

## Components & styles

- Palette: paper `#FFFAF8`, blush `#F8DCDF`, lavender `#C4B5E0`, lilac `#9C8AD4`, peach `#F2A77E`, butter gold `#F7E3B5`
- Photo asset: `images/background-floral.jpg`, `object-fit` cover, decorative only
- Motion is CSS keyframes only. No new libraries.
- Garden layers use `pointer-events: none`
- Invite card stays opaque white at `z-index: 2`

## Database changes

None

## Laravel files

None

## Routes

None. The site remains a static `index.html`.

## Security rules

- Garden photo is a local static asset. No remote image host.
- Garden markup is `aria-hidden="true"` and does not capture clicks or keyboard focus.
- Seal, nav, and RSVP controls stay above the garden and keep their existing labels.

## Changes

- `index.html` — garden layers, animation CSS, butterfly markup, floral sway classes
- `images/background-floral.jpg` — existing garden painting used as the photo layer
- Floral JS — wrap intro scatter and hero corner groups in sway wrappers

## Retires

The intro scatter SVG as the only background. It becomes a swaying foreground layer over the garden photo. Nothing else is removed.

## Edge cases

- Invite text stays readable: garden sits behind, card stays opaque white.
- Intro kicker and hint get a light paper text-shadow so they stay readable on the garden.
- Direct links such as `/#rsvp` skip the envelope; the hero garden still shows.
- Gallery photos remain optional; missing images still use placeholders.
- `prefers-reduced-motion: reduce` freezes flare, bokeh, butterflies, petals, and floral sway.
- At `max-width: 860px`, only two butterflies and eight bokeh orbs render.

## Approval checklist

- [x] Approved by: John Kenneth Lazos
- [x] Date: 2026-09-23
- [x] Implementation started: 2026-09-23
- [x] Implementation completed: 2026-09-23
