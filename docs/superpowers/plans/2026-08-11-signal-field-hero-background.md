# Signal Field Hero Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved decorative Signal Field raster background to every localized homepage without obstructing copy or the reaction test.

**Architecture:** A single local PNG asset is drawn with the Windows system graphics API because no project image encoder is installed. A dedicated Astro component references the asset once from `LocalizedHome.astro`; global CSS owns stacking, responsive positioning, contrast, and pointer-event behavior.

**Tech Stack:** Astro 5 static build, TypeScript/Astro components, CSS, Node test runner, Windows System.Drawing.

---

### Task 1: Lock The Homepage Background Contract

**Files:**
- Modify: `tests/site-build.test.mjs`
- Test: `tests/site-build.test.mjs`

- [ ] **Step 1: Write the failing build assertion**

Add this test after the English homepage schema assertions:

```js
for (const route of ['/', 'zh', 'ko', 'hi', 'fr']) {
  const homepage = readBuilt(route);
  assert.match(homepage, /<img class="hero-signal-field" src="\/images\/reaction-signal-field\.png" alt="" aria-hidden="true" width="2560" height="960" loading="eager" decoding="async">/);
}

const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');
assert.match(styles, /\.hero-signal-field\s*\{[\s\S]*?pointer-events:\s*none/);
assert.match(styles, /\.home-intro\s*\{[\s\S]*?isolation:\s*isolate/);
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `node --test tests/site-build.test.mjs`

Expected: FAIL because the generated homepage has no `hero-signal-field` image.

### Task 2: Create The Local Raster Asset

**Files:**
- Create: `public/images/reaction-signal-field.png`

- [ ] **Step 1: Draw the image with System.Drawing**

Run a PowerShell `System.Drawing` program that creates a `2560 x 960` PNG with the base color `#0f1726`, leaves the left 48% quiet, and draws only cyan and green glow traces plus small signal nodes from x=1180 to x=2560. Save it to `public/images/reaction-signal-field.png`.

- [ ] **Step 2: Inspect the image**

Open the PNG and confirm that it contains no text, no brands, no people, and no bright visual elements in the left copy area.

- [ ] **Step 3: Verify the output size**

Run: `(Get-Item public/images/reaction-signal-field.png).Length`

Expected: a compact static background asset suitable for first-page delivery.

### Task 3: Render The Background Behind Every Homepage Hero

**Files:**
- Create: `src/components/HeroSignalField.astro`
- Modify: `src/components/LocalizedHome.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Create the decorative component**

Create `src/components/HeroSignalField.astro`:

```astro
<img
  class="hero-signal-field"
  src="/images/reaction-signal-field.png"
  alt=""
  aria-hidden="true"
  width="2560"
  height="960"
  loading="eager"
  decoding="async"
/>
```

- [ ] **Step 2: Add it before the hero copy**

Import `HeroSignalField` in `src/components/LocalizedHome.astro` and render it as the first child of `<section class="home-intro">`, before the existing `.shell` copy container. This makes every locale reuse the same decorative asset.

- [ ] **Step 3: Add the minimal stacking and responsive CSS**

Add rules that keep `.home-intro` as an isolated relative stacking context, make `.hero-signal-field` absolutely cover the hero, preserve the left copy column with a right-aligned object position, set `pointer-events: none`, and put `.home-intro > .shell` above it. At `max-width: 720px`, reduce the image opacity and crop it toward the right without changing hero height.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `node_modules\\.bin\\astro build; node --test tests/site-build.test.mjs`

Expected: the static English and four localized pages all render the local asset reference and styling contract.

### Task 4: Verify Function, Layout, And Delivery

**Files:**
- Verify: `dist/index.html`
- Verify: `dist/zh/index.html`

- [ ] **Step 1: Run the full project checks**

Run:

```powershell
npm test
node_modules\.bin\astro check
```

Expected: all tests pass and Astro reports zero errors and warnings.

- [ ] **Step 2: Inspect desktop and narrow viewports**

Open `/` at a desktop viewport and a 390px-wide viewport. Verify title contrast, unobstructed copy, no horizontal scroll, and a clickable reaction panel.

- [ ] **Step 3: Commit the feature**

Run:

```powershell
git add src/components/HeroSignalField.astro src/components/LocalizedHome.astro src/styles/global.css public/images/reaction-signal-field.png tests/site-build.test.mjs docs/superpowers/plans/2026-08-11-signal-field-hero-background.md
git commit -m "Add signal field hero background"
```
