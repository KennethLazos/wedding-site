# Spec: Attire section from Canva page 5

**Status:** Approved

## Problem

The Attire section used generic pastel guest colors. Canva page 5 is the dress code: principal sponsors in blues, guests in coral through lavender, with specific barong and Filipiniana notes.

## Layout & structure

- Section heading becomes Dress Code Guide
- Lookbook image: `images/dress-code-guide.png` (Canva page 5)
- Two cards: Principal Sponsors and Guest
- Full-width note under the cards, using the Canva paragraph

## Components & styles

Principal Sponsors
- Ninongs: Classic Barong Tagalog
- Ninangs: Modern Filipiniana Gown or Dress
- Swatches: Blue `#3B5F9E`, Dusty Blue `#6A86B8`, Slate Blue `#8EA4C8`, Powder Blue `#B8C9DE`, Light Blue `#D8E4F0`

Guest
- Gentlemen: Classic Polo Barong Tagalog
- Ladies: Modern Filipiniana Dress
- Swatches: Coral Blush `#F07B6A`, Sunshine Yellow `#F0C45C`, Sage Green `#B5C49A`, Orange Pastel `#F4A56C`, Lavender Mist `#C9A8D6`

Note
- Guests wear the chosen palette
- No white, ivory, cream, or similar (reserved for the bride)
- No jeans or denim

## Changes

- `index.html` attire markup and swatch styles
- `images/dress-code-guide.png` is not in the repo; the section uses the page 5 copy and colors in HTML so it stays readable on mobile

## Database changes

None

## Laravel files

None

## Routes

None

## Security rules

- Image is a local static asset
- Alt text states the dress code so the lookbook is not the only source of the rules

## Retires

- Ladies / Gentlemen cards with blush, peach, lilac, sage, butter, pina, taupe, black, and navy
- Short note that only mentioned white and ninong barong

## Edge cases

- Five swatches wrap on small screens; cards stack at `max-width: 700px`
- Lookbook image is `max-width: 100%` and keeps its aspect ratio

## Approval checklist

- [x] Approved by: John Kenneth Lazos (Canva page 5)
- [x] Date: 2026-09-23
- [x] Implementation started: 2026-09-23
- [x] Implementation completed: 2026-09-23
