/**
 * FiL_Design_ImageMind design-system tokens.
 * Mirrors the legacy web/core/ui.js FIL_PALETTE so existing CSS variables
 * (`--fil-accent`, `--fil-panel`, ...) keep the same meaning.
 */
/**
 * `accentInk` is the text color painted ON the accent (active segment, primary
 * button, active pill). It is deliberately dark in every theme: white on these
 * accents measures 1.5–2.5:1, far under the 4.5:1 WCAG AA floor for the 11–13px
 * labels that use it. Each value below is the theme's own darkest surface tone
 * pushed to ≥4.5:1 against its accent — see the per-theme comments.
 */
export const FIL_PALETTE = {
  accent: "#f08a45",
  accentInk: "#241206", // 7.24:1 on #f08a45 (white was 2.49:1)
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#9ca8b5",
  danger: "#ef6666",
  ok: "#62c987",
} as const;

export type FilPaletteKey = keyof typeof FIL_PALETTE;
export type FilPalette = Record<FilPaletteKey, string>;

/**
 * Light-theme overrides, applied under `.comfy-theme-light` (per advanced
 * guide §19.1 — ComfyUI adds this class to the document root when the user
 * picks the light theme; default/no class is dark). Every Vue widget reads
 * colors through `var(--fil-*)`, never a hardcoded hex, so redefining these
 * here re-themes the whole extension without touching component CSS.
 */
const FIL_PALETTE_LIGHT: FilPalette = {
  accent: "#c9682c",
  accentInk: "#1c1006", // 4.88:1 on #c9682c (white was 3.82:1)
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#b13a3a", // 4.74:1 on panelAlt; #c94b4b sat at 3.65:1
  ok: "#2a7046", // 4.78:1 on panelAlt; #3f8f5f sat at 3.16:1
};

const FIL_PALETTE_CYBERPUNK: FilPalette = {
  accent: "#00e5ff",
  accentInk: "#04222b", // 10.76:1 on #00e5ff (white was 1.54:1 — worst of the set)
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#7a9cb5", // 6.65:1 on the panel; the old #5f7d94 sat at 4.44:1
  danger: "#ff2e63",
  ok: "#00ff9f",
};

const FIL_PALETTE_FALLOUT: FilPalette = {
  accent: "#d4a017",
  accentInk: "#1a1712", // 7.52:1 on #d4a017 (white was 2.38:1)
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#a09272", // 5.83:1 on the panel; the old #8a7d5f sat at 4.41:1
  danger: "#d96a4a", // 4.61:1 on panelAlt; #9a3324 sat at 2.17:1 — near-invisible
  ok: "#8fbf3f",
};

const FIL_PALETTE_PIPBOY: FilPalette = {
  accent: "#14b13b",
  accentInk: "#0c190c",
  panel: "#0a110a",
  panelAlt: "#121e12",
  text: "#4af626",
  muted: "#3fa845", // 6.29:1 on the panel; the old #2e7d32 sat at 3.73:1
  danger: "#ef5350", // 4.94:1 on panelAlt; #d32f2f sat at 3.46:1
  ok: "#14b13b",
};

/**
 * "Travelmate" — adapted from a Behance mobile-app reference (Liza Prymak,
 * TravelMate / Travel Mobile App UX/UI Design): acid-lime accent on a
 * near-black surface. Colors sampled directly from that project's published
 * design-system swatches (accent D5FF40, dark surface 181916, neutral
 * C0C2B8); panelAlt/text/muted/danger/ok are derived to fit the existing
 * token roles since the reference doesn't define them. This theme is where the
 * dark `accentInk` convention started — white on this lime is unreadable —
 * and the other palettes have since been measured and brought in line.
 */
const FIL_PALETTE_TRAVELMATE: FilPalette = {
  accent: "#d5ff40",
  accentInk: "#14150f",
  panel: "#181916",
  panelAlt: "#232620",
  text: "#edf2e2",
  muted: "#8b9483",
  danger: "#ff5c72",
  ok: "#3ed98c",
};

/**
 * "Pixaroma" — matches the sibling custom_nodes/ComfyUI-Pixaroma pack's own
 * brand (js/framework/theme.mjs: `--pxf-accent:#f66744` on `--pxf-bg-dark:
 * #171718`/`--pxf-bg-panel:#242628`, text `#e0e0e0`, dim text `#888`, danger
 * `#d46060`). Sampled directly so a workflow mixing both node packs reads as
 * one system. `ok` isn't defined over there — picked `#4ade80` (10.3:1 on the
 * panel) to match the green ProviderManager already uses for a "connected"
 * status. `muted` sits at 5.05:1 here (Pixaroma's own text-dim), no bump needed.
 */
const FIL_PALETTE_PIXAROMA: FilPalette = {
  accent: "#f66744",
  accentInk: "#1a0d08", // 6.28:1 on #f66744 (white was 3.03:1)
  panel: "#171718",
  panelAlt: "#242628",
  text: "#e0e0e0",
  muted: "#888888",
  danger: "#e07070", // 4.86:1 on panelAlt; #d46060 sat at 4.08:1
  ok: "#4ade80",
};

export type FilThemeName = "default" | "cyberpunk" | "fallout" | "travelmate" | "pipboy" | "pixaroma";

const THEMES: Record<FilThemeName, FilPalette> = {
  default: FIL_PALETTE,
  cyberpunk: FIL_PALETTE_CYBERPUNK,
  fallout: FIL_PALETTE_FALLOUT,
  travelmate: FIL_PALETTE_TRAVELMATE,
  pipboy: FIL_PALETTE_PIPBOY,
  pixaroma: FIL_PALETTE_PIXAROMA,
};

/**
 * Mutable "currently active" palette — updated in place (never reassigned)
 * by `applyFilTheme()`. `nodeStyle.ts` reads this instead of the frozen
 * `FIL_PALETTE` default when coloring a node's native LiteGraph title/body
 * at creation time, so newly dropped nodes always match whichever theme is
 * selected, not just Vue-rendered widget content (which re-themes for free
 * via CSS variables — no JS involved there).
 */
export const ACTIVE_PALETTE: FilPalette = { ...FIL_PALETTE };

let themeVarsEl: HTMLStyleElement | null = null;
let themeEffectsEl: HTMLStyleElement | null = null;

/**
 * `--fil-border` is emitted here, alongside the palette it derives from, rather
 * than once on `:root`. A `var()` inside a custom property is substituted where
 * that property is *declared*, so a lone `:root` definition would freeze the
 * default theme's muted into the border and never follow `.comfy-theme-light`
 * if ComfyUI ever moves that class off the document root. Deriving from the
 * literal keeps every palette block self-contained.
 */
function paletteCssVars(p: FilPalette): string {
  return `--fil-accent:${p.accent};--fil-accent-ink:${p.accentInk};--fil-panel:${p.panel};--fil-panel-alt:${p.panelAlt};--fil-text:${p.text};--fil-muted:${p.muted};--fil-border:color-mix(in srgb,${p.muted} 55%,transparent);--fil-danger:${p.danger};--fil-ok:${p.ok};`;
}

/**
 * Subtle, static (no @keyframes) per-theme flourishes so they don't cost a
 * continuous repaint on a graph with many nodes — a one-time box-shadow/
 * background-image, not an animation loop.
 */
const THEME_EFFECTS: Record<FilThemeName, string> = {
  default: "",
  cyberpunk: `
[data-fil-theme="cyberpunk"] .comfy-node-header{box-shadow:0 0 12px var(--fil-accent);}
[data-fil-theme="cyberpunk"] .fil-w-seg.active,
[data-fil-theme="cyberpunk"] .fil-combo-trigger.open,
[data-fil-theme="cyberpunk"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
[data-fil-theme="cyberpunk"] .fil-node-shell [class$="-root"]{border:1px solid rgba(0,229,255,0.18);}
`,
  fallout: `
[data-fil-theme="fallout"] .fil-node-shell [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(212,160,23,0.2);
}
[data-fil-theme="fallout"] .comfy-node-header{text-shadow:0 0 4px rgba(212,160,23,0.55);}
`,
  pipboy: `
[data-fil-theme="pipboy"] .fil-node-shell [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.2) 0px,rgba(0,0,0,0.2) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(20,177,59,0.3);
}
[data-fil-theme="pipboy"] .comfy-node-header{text-shadow:0 0 4px rgba(20,177,59,0.75);}
`,
  travelmate: `
[data-fil-theme="travelmate"] .fil-node-shell [class$="-root"]{border:none;box-shadow:none;}
[data-fil-theme="travelmate"] .fil-w-seg.active,
[data-fil-theme="travelmate"] .fil-combo-trigger.open,
[data-fil-theme="travelmate"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
`,
  // Pixaroma's own editor chrome is flat panels, no glow/scanline texture —
  // matching that means no flourish here, same as "default".
  pixaroma: "",
};

/**
 * Neo-Tactile "glass" surface tokens — extracted from the original hardcoded
 * OpticScanner CSS so every node shares one source of truth. Cyan is the
 * current default; a future style variant only needs to reassign these.
 * `--fil-surface-*` = the node container; `--fil-glass-*`/`--fil-field-*`/
 * `--fil-pill-*` = inner fields, textareas and pill buttons.
 */
const SURFACE_VARS_CYAN =
  "--fil-surface-bg:rgba(100,180,220,0.06);" +
  "--fil-surface-border:rgba(0,255,255,0.18);" +
  "--fil-surface-radius:20px;" +
  "--fil-surface-blur:10px;" +
  "--fil-surface-shadow:0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);" +
  "--fil-glass-bg:rgba(50,80,120,0.18);" +
  "--fil-glass-border:rgba(0,150,200,0.35);" +
  "--fil-field-radius:10px;" +
  "--fil-pill-radius:17px;" +
  "--fil-pill-bg:rgba(255,255,255,0.06);" +
  "--fil-pill-border:rgba(0,150,200,0.4);";

/**
 * Neutral overlays used for "one step up from the panel" surfaces — section
 * headers, segmented-control troughs, toggle tracks, inset fields. They used to
 * be written inline as `rgba(255,255,255,0.04…0.16)` in a dozen components,
 * which is why the light theme lost them: a white wash over an already-light
 * panel is invisible, and `rgba(0,0,0,0.35)` inset fields turned dark text into
 * dark-on-dark. As tokens they can flip polarity per theme — see
 * `OVERLAY_VARS_LIGHT`, which tints with the light theme's ink instead.
 */
const OVERLAY_VARS_DARK =
  "--fil-surface-1:rgba(255,255,255,0.04);" +
  "--fil-surface-2:rgba(255,255,255,0.08);" +
  "--fil-surface-3:rgba(255,255,255,0.14);" +
  "--fil-inset:rgba(0,0,0,0.35);";

const OVERLAY_VARS_LIGHT =
  "--fil-surface-1:rgba(28,36,48,0.05);" +
  "--fil-surface-2:rgba(28,36,48,0.09);" +
  "--fil-surface-3:rgba(28,36,48,0.16);" +
  "--fil-inset:rgba(255,255,255,0.6);";

/** Light-theme surface: softer tint, same geometry. */
const SURFACE_VARS_LIGHT =
  "--fil-surface-bg:rgba(70,130,170,0.08);" +
  "--fil-surface-border:rgba(40,120,160,0.28);" +
  "--fil-surface-radius:20px;" +
  "--fil-surface-blur:10px;" +
  "--fil-surface-shadow:0 8px 24px rgba(40,60,90,0.18), inset 0 1px 0 rgba(255,255,255,0.5);" +
  "--fil-glass-bg:rgba(120,160,200,0.16);" +
  "--fil-glass-border:rgba(40,120,160,0.3);" +
  "--fil-field-radius:10px;" +
  "--fil-pill-radius:17px;" +
  "--fil-pill-bg:rgba(30,60,90,0.06);" +
  "--fil-pill-border:rgba(40,120,160,0.35);";

/**
 * Token roles worth spelling out, since two of them look interchangeable and
 * are not:
 * - `--fil-muted` — *text* only (labels, hints, placeholders). Every palette
 *   above keeps it ≥4.5:1 against its own `panel`.
 * - `--fil-border` — field/control outlines. Derived from `--fil-muted` so it
 *   tracks the theme, but knocked back to 55% opacity: the full-strength muted
 *   that inputs used to borrow is a text weight and read as a heavy box.
 * - `--fil-control-h` (30px) — the standard height for select/text/number
 *   fields, so a stack of mixed widgets lines up. `--fil-control-h-lg` (34px)
 *   is the deliberate exception for seed rows and icon buttons.
 *
 * Inject the FiL_Design_ImageMind CSS variables on `:root` exactly once, plus two extra
 * (initially empty) `<style>` tags reserved for runtime theme switching —
 * see `applyFilTheme()`. Safe to call from any module — duplicates are
 * skipped via an id guard.
 */
export function injectFilBrandVars(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById("fil-brand-vars")) return;
  const el = document.createElement("style");
  el.id = "fil-brand-vars";
  el.textContent = `:root{${paletteCssVars(FIL_PALETTE)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-control-h:30px;--fil-control-h-lg:34px;--fil-input-border:rgba(240,138,69,0.35);${SURFACE_VARS_CYAN}${OVERLAY_VARS_DARK}}
.comfy-theme-light{${paletteCssVars(FIL_PALETTE_LIGHT)}--fil-input-border:rgba(201,104,44,0.35);${SURFACE_VARS_LIGHT}${OVERLAY_VARS_LIGHT}}
.comfy-multiline-input{border-color:var(--fil-input-border) !important;}
/* Shared "Neo-Tactile" glass surface for every node body (scoped to the Vue
 * shell so it only hits node roots). Values live in the fil-surface and
 * fil-glass tokens above, so a future style just reassigns the tokens. */
.fil-node-shell [class$="-root"]{
  background:var(--fil-surface-bg);
  border:1px solid var(--fil-surface-border);
  border-radius:var(--fil-surface-radius);
  backdrop-filter:blur(var(--fil-surface-blur));
  box-shadow:var(--fil-surface-shadow);
  overflow:hidden;
}`;
  document.head.appendChild(el);

  themeVarsEl = document.createElement("style");
  themeVarsEl.id = "fil-theme-vars";
  document.head.appendChild(themeVarsEl);

  themeEffectsEl = document.createElement("style");
  themeEffectsEl.id = "fil-theme-effects";
  document.head.appendChild(themeEffectsEl);
}

/**
 * Switch the FiL_Design_ImageMind theme at runtime — no page reload needed. Vue widget
 * CSS updates instantly since every component reads `var(--fil-*)`, never a
 * hardcoded hex. LiteGraph's native node title/body colors are plain JS
 * properties (not CSS-driven though), so callers must separately loop
 * existing graph nodes and reassign `.color`/`.bgcolor` from `ACTIVE_PALETTE`
 * — see `nodes2/nodeStyle.ts::reapplyThemeToGraph`, which does that right
 * after calling this (invoked from `themeSettings.ts::onThemeChange`).
 */
export function applyFilTheme(theme: FilThemeName): void {
  const palette = THEMES[theme] ?? FIL_PALETTE;
  Object.assign(ACTIVE_PALETTE, palette);
  if (typeof document === "undefined") return;
  document.documentElement.dataset.filTheme = theme;
  // `:root{...}` here has the same specificity as `.comfy-theme-light` in
  // the base stylesheet but comes later in the DOM, so it wins the cascade
  // regardless of whether ComfyUI's own light/dark toggle is active. Left
  // empty for "default" so ComfyUI's own light theme (if active) governs
  // unopposed.
  if (themeVarsEl) themeVarsEl.textContent = theme === "default" ? "" : `:root{${paletteCssVars(palette)}}`;
  if (themeEffectsEl) themeEffectsEl.textContent = THEME_EFFECTS[theme] ?? "";
}
