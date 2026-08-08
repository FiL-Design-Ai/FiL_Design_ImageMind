# Adding a theme

A theme is not one edit. It is **six places in three files**, plus a build, plus
a contrast budget — and three of those places fail *silently* if you skip them:
TypeScript stays green, the tests stay green, and the theme is quietly broken in
a way only a human looking at a node will notice.

This file exists because that already happened. Four themes were added in one
pass and shipped with unreadable text; four settings vanished from the settings
panel at the same time. Everything below is a repair, not a preference.

---

## The six places

All paths are from the pack root.

| # | Where | What | Missed it? |
|---|---|---|---|
| 1 | `frontend/src/styles/brand.ts` | `FIL_PALETTE_<NAME>` — the eight colour tokens | typecheck catches |
| 2 | `frontend/src/styles/brand.ts` | add the name to the `FilThemeName` union | typecheck catches |
| 3 | `frontend/src/styles/brand.ts` | entry in `THEMES` | typecheck catches |
| 4 | `frontend/src/styles/brand.ts` | entry in `THEME_EFFECTS` | typecheck catches |
| 5 | `frontend/src/styles/brand.ts` | `SURFACE_VARS_<NAME>` + entry in `THEME_SURFACES` | **SILENT** |
| 6 | `frontend/src/stores/settings/themeSettings.ts` | `THEME_VALUE_TO_NAME` **and** the `options` array | **SILENT** |

### 5 is the one that bites

`THEME_SURFACES` is typed `Partial<Record<FilThemeName, string>>`. The `Partial`
means TypeScript will not say a word if your theme is missing, and the lookup
falls back to `""`:

```ts
`:root{${paletteCssVars(THEMES[currentTheme])}${THEME_SURFACES[currentTheme] ?? ""}}`
```

An empty surface block does not mean "no surface" — it means the base
`SURFACE_VARS_CYAN` from `fil-brand-vars` wins. Your theme gets **the default
cyan-tinted panels** under its own palette colours. It looks deliberate. It is
not.

### 6 has two halves and you need both

`THEME_VALUE_TO_NAME` maps the label shown in the settings dropdown to the
internal key. `options` is the dropdown list itself. Add to one and not the
other and either the theme is unselectable, or selecting it silently falls back
to `default` (`?? "default"` at the end of the lookup).

Label and key are deliberately different: `"FiL Green"` → `travelmate`. Do not
"tidy" that — the key is what `data-fil-theme` carries and what saved settings
store.

---

## The contrast budget — not optional

`muted`, `text` and `danger` are **text colours**. `accentInk` is text painted
on the accent. All four are held to WCAG AA (4.5:1). This is a documented
property of the pack, measured across 204 elements for 1.0.0, and the ratios are
recorded next to the values so the next edit cannot quietly undo them.

`frontend/tests/themeContrast.test.ts` checks every theme automatically — it
reads `FIL_THEME_NAMES`, so a new theme is covered the day you add it. Run it:

```bash
cd frontend && npx vitest run tests/themeContrast.test.ts
```

Two things to know before you argue with it:

- **Its backdrop model is deliberately approximate** and its threshold is 4.1,
  not 4.5. The recorded ratios were read with `getComputedStyle` off a live
  graph, where the panel is also blurred over the canvas; that cannot be
  reproduced offline, and this model lands 0.4–0.6 low. So it fails what is
  *badly* wrong and does not adjudicate 4.4 against 4.5.
- **If it fails, fix the colour, not the test.** Cyberpunk's `muted` was
  `#8000ff` at 3.00:1 — a violet cannot reach AA at full saturation however
  bright it gets. Hold the hue, give up saturation:

```
#8000ff  →  #a952ff   hue 270° kept, saturation 1.00 → 0.68
```

`ok` and the accent used as an *icon* only need 3:1 — glyphs are not text.

---

## Animations: wire them to the off switch

If your theme animates (Pipboy's CRT flicker, Neo Emerald's pulsing orb),
put the animation on the panel root or its `::before`/`::after`. That is what
`MOTION_OFF_CSS` targets:

```css
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"],
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"]::before,
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"]::after {
  animation: none !important;
}
```

An animation anywhere else ignores the "Theme animations" setting **and**
`prefers-reduced-motion`. A looping glow on every visible node is exactly what
that OS setting is about.

---

## Class names: check them against a running ComfyUI

Title-bar rules key off **`.lg-node-header`**. Not `.comfy-node-header` — no
shipped frontend has ever emitted that class, and every flourish written against
it was inert for the whole of 1.0.0.

Under the default canvas renderer a node has no DOM at all, so title-bar CSS is
inert there by nature; node-body rules sit on this pack's own Vue shell and
apply either way. If a rule does nothing, confirm the class exists in the live
DOM before assuming your CSS is wrong.

---

## Canvas drawing goes by name, never by colour

`frontend/src/nodes2/nodeStyle.ts` draws the title bar on the canvas, where CSS
cannot reach. If your theme needs a custom stripe, corner brackets or radius,
add a branch there — and branch on the **theme name**:

```ts
const theme = activeThemeName();
const isCyberpunk = theme === "cyberpunk";      // correct
// const isCyberpunk = ACTIVE_PALETTE.accent === "#ff0080";   // was here, and wrong
```

The accent is expected to move: every one of them is held to a contrast ratio,
so retuning is routine. Under the old hex check, retuning a colour dropped its
whole theme into the plain `else` branch with no error anywhere.

**Radius blindness:** this file patches the prototype of all 15 node types.
A mistake here is not one theme, it is every node in the pack.

---

## Do not paint other packs' nodes

"Theme applies to" can extend the tint beyond this pack's nodes. It colours
**the title bar only**, never the node body, and any new theme work must keep
that line.

`node.bgcolor` is *serialised by LiteGraph into the workflow file*. Painting a
foreign node's body writes this pack's colour into the user's saved graph: it
travels to whoever they send the workflow to, outlives uninstalling the pack,
and fights packs that colour their own nodes. The title bar is drawn per frame
through `onDrawTitleBar` and stored nowhere, which is why it is the only thing
on offer.

---

## Finish the job

```bash
cd frontend && npm run typecheck && npm run lint && npm run test && npm run build && npm run check:bundle
```

**The build is not optional.** `frontend/dist` is committed and it is what ships
to the registry — an unbuilt `dist` sends users the old bundle while every other
check passes. `check:bundle` is what catches that; it compares a hash of `src`
against what `dist` was built from.

Then update, in both language halves:

- `README.md` — the theme list (~line 531 EN, ~line 1189 RU) and the count in
  the features table (~line 47).
- `CHANGELOG.md` — under the current version's `### Added`.

---

## Verify it live, not just in tests

Tests do not look at a screen. Open a real ComfyUI, and **make a scratch
workflow first** — an open one may live only in browser localStorage, and adding
a node overwrites that draft.

```js
// paste in the browser console with a FiL node on canvas
document.documentElement.dataset.filTheme        // your theme's key?
getComputedStyle(document.documentElement).getPropertyValue("--fil-surface-bg")
```

If `--fil-surface-bg` is `rgba(100,180,220,0.06)` and you did not write that,
you skipped place 5.

Check the theme actually appears in **Settings → 🎨 FiL ImageMind → Appearance →
Theme**, and switch to it: it applies live, with no reload.

---

## If you also add a setting

Three levels of `category`, always: `[SETTINGS_CATEGORY, "Section", "Slot"]`.

ComfyUI reads a two-level category as `[section, slot]` and lets settings
sharing a section overwrite each other — only the last registered is drawn. That
is how four of this pack's ten settings became invisible, the theme picker among
them. Core has the same bug in its own `["Appearance", "General"]` pair.

The third level is never displayed; the visible heading is the second. Sections
are sorted alphabetically by the host, and rows **within** a section render in
*reverse* registration order — see the comments in
`frontend/src/stores/settings/allSettings.ts`.

`frontend/tests/settingsLayout.test.ts` enforces all of this.
