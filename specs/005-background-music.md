# Spec: 005 Background music

**Status:** Complete

## Problem

Guests should hear a song while they read the invitation. A YouTube watch URL cannot drive that on this static site. YouTube blocks hidden audio-only use, browsers block unmuted autoplay until a click, and the given link is a radio playlist, not a single file we can host.

## Flow

1. The guest clicks the wax seal (existing gesture).
2. After that click, the site seeks `audio/background.mp3` to 26 seconds, then plays at 0.35 volume.
3. When the file ends, playback seeks back to 26 seconds and continues. It does not restart at 0:00.
4. A fixed music control stays on screen: playing shows Pause, paused shows Play.
5. Pause and Play keep the current position. Only the first start and each loop seek to 26 seconds.
6. The control does not open YouTube.
7. If the file is missing, the control is hidden and nothing is requested from YouTube.
8. Deep links that skip the envelope (`#entourage`, `#gallery`, and other hashes) do not auto-start music. The guest uses Play, which also starts at 26 seconds.

## Pages / Components

- `index.html` intro seal click handler starts playback once.
- One fixed `.music-btn` control (bottom-right, 48px circle, cream face, rose icon).
- Native `<audio id="bgMusic" preload="metadata" src="audio/background.mp3">` in the page. No `loop` attribute. No YouTube iframe.
- Cue point is the named constant `MUSIC_START_SEC` with value `26`.

## Database changes

None.

## Laravel files

None. This site stays a single static `index.html`.

## Routes

None.

## Security rules

- Do not load, embed, scrape, or download YouTube.
- Host only an audio file the couple has the right to play on their site.
- Do not autoplay before a guest click.
- The audio element has no `autoplay` attribute.

## Approach

The couple exports or buys the track as MP3, saves it as `wedding-site/audio/background.mp3`, then the site plays that file after the seal click. The YouTube URL is a listening reference only. It is not used in the page.

## Changes

- `index.html`: add the audio element, the music button, styles, and play/pause script tied to the seal click.
- `audio/background.mp3`: new file supplied by the couple (not committed as a YouTube rip).
- `docs/CHANGELOG.md`: one line for the music control.

## Retires

None.

## Edge cases

- `prefers-reduced-motion: reduce` still allows music. Motion and sound stay separate.
- A second seal click cannot exist after the intro is dismissed. Only the music button toggles after that.
- If the MP3 fails to load, the button hides and the rest of the site is unchanged.
- Mobile browsers require the same seal or Play click. There is no silent YouTube workaround.
- Volume is 0.35. There is no volume slider in this change.
- If the MP3 is 26 seconds or shorter, playback starts at 0:00 instead of seeking past the end.

## Approval checklist

- [x] Approved by: Couple
- [x] Date: 2026-09-23
- [x] Implementation started: 2026-09-23
- [x] Implementation completed: 2026-09-23
