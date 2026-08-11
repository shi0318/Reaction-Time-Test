# Score Guide Layout Design

## Goal

Show the nine browser-test score ranges beside the reaction test on wide screens and directly below it on narrow screens. Every localized homepage must render the guide in the initial HTML.

## Placement

The game section keeps its heading and mode controls. A new two-column play area contains the reaction button and a non-interactive score-guide aside. At viewport widths below 960px, the aside moves below the button and changes into a three-column grid.

## Content

The guide contains nine fixed millisecond ranges used by `classifyScore`. Its title, explanatory note, and band labels come from existing locale data for English, Chinese, Korean, Hindi, and French. A short note says browser measurements vary with device and input conditions and are not medical or universal rankings. The final range uses a neutral retry prompt rather than a claim about a person's ability.

## Accessibility And SEO

The guide is an `aside` with an accessible heading and a semantic list. Text labels accompany all color cues. Astro renders the guide in server HTML for every locale; no client-side translation or interaction is required. Existing motion preferences and keyboard testing controls remain unchanged.

## Verification

Automated build tests assert the guide, its nine semantic band items, locale-specific headings, and responsive CSS rules. The production build, test suite, Astro type check, and desktop/mobile browser views validate the change.
