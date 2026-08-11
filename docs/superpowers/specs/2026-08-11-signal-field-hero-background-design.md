# Signal Field Hero Background Design

## Goal

Give the English and localized homepages a more distinctive first viewport without reducing the prominence, readability, or usability of the reaction-time tool.

## Visual Direction

Use the approved Signal Field direction: a dark, low-contrast cyan and green visual-response pulse placed on the right side of the hero. The left side remains deliberately quiet so the H1 and introductory text are readable without a text panel or gradient overlay.

The artwork is decorative. It contains no text, people, brands, or game UI, and it does not communicate facts that would require alt text.

## Asset And Placement

- Create one self-hosted WebP asset in `public/images/` at a wide desktop-friendly aspect ratio.
- Keep its transfer size small enough for a fast static-site first load.
- Render it as an absolutely positioned decorative layer inside the homepage hero, with an empty `alt` attribute and `aria-hidden="true"`.
- Preserve the existing dark hero color behind the image so the page remains legible while the image loads or is unavailable.
- Keep the hero copy and the interactive reaction panel above the decorative layer; the asset must not receive pointer events.

## Responsive Behavior

- Desktop: place the pulse on the right side and retain a clear left copy column.
- Narrow screens: reduce the visual density and opacity so line wrapping and contrast stay comfortable. The asset must never cause horizontal scrolling or increase the hero height solely to reveal the artwork.
- No animation is added. The existing low-priority ambient particles remain independent of this static background.

## SEO And Accessibility

- Keep title, H1, server-rendered body copy, canonical URLs, schema, and `hreflang` unchanged.
- Reuse the same decorative artwork on `/`, `/zh/`, `/ko/`, `/hi/`, and `/fr/`.
- Do not use a third-party image URL or client-side image injection.

## Verification

- Add a build test confirming the hero background element and local asset reference render on all five homepages.
- Run the Astro static build, complete test suite, and `astro check`.
- Inspect desktop and narrow viewport output to confirm the copy remains readable, the background stays behind it, and the reaction panel is still clickable.
