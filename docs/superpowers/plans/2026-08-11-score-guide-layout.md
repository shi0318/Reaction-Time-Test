# Score Guide Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a visible, localized nine-band reaction-score reference beside the homepage test on desktop and beneath it on narrow screens.

**Architecture:** Reuse the score keys and range definitions from `src/scripts/reaction-game.js`. Extend existing `TOOL_LABELS` objects with localized static-copy fields; `ReactionGame.astro` maps the shared ranges into SSR list items. CSS owns the desktop two-column layout and the narrow-screen three-column transformation.

**Tech Stack:** Astro 5 static output, JavaScript modules, CSS Grid, Node test runner.

---

### Task 1: Establish Static SEO Regression Coverage

**Files:**
- Modify: `tests/site-build.test.mjs`
- Test: `tests/site-build.test.mjs`

- [ ] **Step 1: Write a failing built-page assertion**

```js
for (const [route, heading] of expectedGuides) {
  const html = readBuilt(route);
  assert.match(html, /class="score-guide"/);
  assert.match(html, /data-score-band="veryFast"/);
  assert.match(html, /data-score-band="repeat"/);
  assert.match(html, new RegExp(heading));
}
```

- [ ] **Step 2: Run the test and confirm it fails because the guide is absent**

Run: `node --test tests/site-build.test.mjs`

Expected: a failure matching `score-guide`.

### Task 2: Expose Shared Score Bands And Localized Labels

**Files:**
- Modify: `src/scripts/reaction-game.js`
- Test: `tests/reaction-game.test.mjs`

- [ ] **Step 1: Export one nine-entry range list used by the score classifier and guide**

```js
export const SCORE_BANDS = [
  { key: 'veryFast', range: '<= 150 ms' },
  { key: 'fast', range: '151-170 ms' },
  { key: 'good', range: '171-190 ms' },
  { key: 'typical', range: '191-220 ms' },
  { key: 'slightlySlower', range: '221-260 ms' },
  { key: 'slower', range: '261-320 ms' },
  { key: 'verySlow', range: '321-400 ms' },
  { key: 'slow', range: '401-500 ms' },
  { key: 'repeat', range: '> 500 ms' },
];
```

- [ ] **Step 2: Add localized `scoreGuideHeading`, `scoreGuideNote`, and nine `bands` values to each locale**

The English final label is `Try another round`; each other locale has an equivalent neutral retry prompt.

- [ ] **Step 3: Run unit tests**

Run: `node --test tests/reaction-game.test.mjs`

Expected: all score-classification tests pass.

### Task 3: Render The Responsive Guide

**Files:**
- Modify: `src/components/ReactionGame.astro`
- Modify: `src/styles/global.css`
- Test: `tests/site-build.test.mjs`

- [ ] **Step 1: Wrap the reaction button and guide in a `.game-play-grid`**

```astro
<div class="game-play-grid">
  <button class="reaction-panel" id="reaction-game">...</button>
  <aside class="score-guide" aria-labelledby="score-guide-heading">...</aside>
</div>
```

- [ ] **Step 2: Render one static list item for each shared `SCORE_BANDS` entry**

```astro
{SCORE_BANDS.map(({ key, range }) => (
  <li data-score-band={key}>
    <span>{range}</span><strong>{labels.bands[key]}</strong>
  </li>
))}
```

- [ ] **Step 3: Add CSS Grid rules**

```css
.game-play-grid { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(17rem, .85fr); gap: 1rem; }
@media (max-width: 960px) {
  .game-play-grid { grid-template-columns: 1fr; }
  .score-guide-list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
```

- [ ] **Step 4: Run the static build assertion**

Run: `node --test tests/site-build.test.mjs`

Expected: all static-route assertions pass.

### Task 4: Verify Production Output And Interaction

**Files:**
- Verify: `dist/en/index.html`, `dist/zh/index.html`, `dist/ko/index.html`, `dist/hi/index.html`, `dist/fr/index.html`

- [ ] **Step 1: Build static output**

Run: `node_modules\\.bin\\astro build`

Expected: 14 pages generated with no build error.

- [ ] **Step 2: Run the full suite and Astro diagnostics**

Run: `node --test tests\\reaction-game.test.mjs tests\\site-build.test.mjs`

Run: `node_modules\\.bin\\astro check`

Expected: all tests pass and diagnostics report zero errors.

- [ ] **Step 3: Manually verify desktop and 375px browser layouts**

Confirm the score guide is not interactive, no horizontal overflow occurs, and the reaction panel remains clickable.
