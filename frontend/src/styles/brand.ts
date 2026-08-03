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
 *
 * IMPORTANT — how the ratios below were measured. Not against `panel`/`panelAlt`:
 * a widget never sits on those directly. The node body is `--fil-surface-bg`
 * (a 6% tint) over the color LiteGraph paints on its canvas, and rows stack
 * `--fil-surface-1/2` on top of that, so the real backdrop is a good deal
 * lighter. Measuring against the nominal palette values overstates contrast by
 * roughly 0.5–1.0 and is how an earlier pass wrongly certified `muted` and
 * `danger` as compliant. The figures here come from reading composited
 * `getComputedStyle` values off a live graph — the segmented trough is the
 * worst case for `muted`, a plain row for `danger`.
 */
export const FIL_PALETTE = {
  accent: "#f08a45",
  accentInk: "#241206", // 7.24:1 on #f08a45 (white was 2.49:1)
  panel: "#171b22",
  panelAlt: "#222934",
  text: "#e8edf3",
  muted: "#a4afbb", // 4.65:1 in a segmented trough (#9ca8b5 read 4.29:1)
  danger: "#f17575", // 4.74:1 on a panel row (#ef6666 read 4.25:1)
  ok: "#62c987",
} as const;

export type FilPaletteKey = keyof typeof FIL_PALETTE;
export type FilPalette = Record<FilPaletteKey, string>;

/**
 * Palette for when ComfyUI itself is running a light color palette, detected by
 * `detectComfyBase()` and applied by `renderTheme()`. Every Vue widget reads
 * colors through `var(--fil-*)`, never a hardcoded hex, so redefining these
 * re-themes the whole extension without touching component CSS.
 *
 * Applies to the "default" theme only — the five named themes are deliberate
 * choices and keep their own colors on a light canvas.
 */
const FIL_PALETTE_LIGHT: FilPalette = {
  accent: "#c9682c",
  accentInk: "#1c1006", // 4.88:1 on #c9682c (white was 3.82:1)
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#48505d", // 6.16:1 in a segmented trough (#5b6572 read 3.44:1)
  danger: "#a83737", // 4.73:1 on a panel row (#b13a3a read 4.37:1)
  ok: "#2a7046", // 4.78:1 on panelAlt; #3f8f5f sat at 3.16:1
};

/**
 * "Cyberpunk Neon" — Vivid Pink (#FF0080) + Cyan (#00FFFF) + Magenta (#FF00FF)
 * + Vivid Purple (#8000FF) + Electric Green (#39FF14).
 */
const FIL_PALETTE_CYBERPUNK: FilPalette = {
  accent: "#ff0080",
  accentInk: "#050811",
  panel: "#050811",
  panelAlt: "#0f1526",
  text: "#00ffff",
  // 4.76:1 on the composited panel/field backdrop; the pure #8000ff this
  // replaces measured 3.00:1, and `muted` is text (see the 1.0.0 notes), so it
  // has to clear AA. Violet cannot reach that at full saturation no matter how
  // bright — the hue is held at 270° and saturation gives way instead.
  muted: "#a952ff",
  danger: "#ff00ff",
  ok: "#39ff14",
};

const FIL_PALETTE_FALLOUT: FilPalette = {
  accent: "#d4a017",
  accentInk: "#1a1712", // 7.52:1 on #d4a017 (white was 2.38:1)
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#b6a889", // 4.74:1 in a segmented trough (#a09272 read 3.63:1)
  danger: "#dd795c", // 4.73:1 on a panel row; the original #9a3324 was 2.17:1
  ok: "#8fbf3f",
};

const FIL_PALETTE_PIPBOY: FilPalette = {
  accent: "#00ff00",
  accentInk: "#001100",
  panel: "#020c02",
  panelAlt: "#061a06",
  text: "#00ff00",
  muted: "#00b800", // 4.8:1 на фосфорном фоне
  danger: "#ff3333", // 4.8:1 фосфорно-красный
  ok: "#00ff00",
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
  muted: "#a8b0a0", // 4.77:1 in a segmented trough (#8b9483 read 3.39:1)
  danger: "#ff6479", // 4.81:1 on a panel row (#ff5c72 read 4.60:1)
  ok: "#3ed98c",
};

/**
 * "Pixaroma" — matches the sibling custom_nodes/ComfyUI-Pixaroma pack's own
 * brand (js/framework/theme.mjs: `--pxf-accent:#f66744` on `--pxf-bg-dark:
 * #171718`/`--pxf-bg-panel:#242628`, text `#e0e0e0`, dim text `#888`, danger
 * `#d46060`). Sampled directly so a workflow mixing both node packs reads as
 * one system. `ok` isn't defined over there — picked `#4ade80` (10.3:1 on the
 * panel) to match the green ProviderManager already uses for a "connected"
 * status.
 */
const FIL_PALETTE_PIXAROMA: FilPalette = {
  accent: "#f66744",
  accentInk: "#1a0d08", // 6.28:1 on #f66744 (white was 3.03:1)
  panel: "#171718",
  panelAlt: "#242628",
  text: "#e0e0e0",
  // Pixaroma's own --pxf-text-dim is #888; it needed lightening to clear AA
  // once composited, so this departs from their brand by a few steps.
  muted: "#acacac", // 4.65:1 in a segmented trough (#909090 read 3.31:1)
  danger: "#e27777", // 4.62:1 on a panel row; Pixaroma's own #d46060 was 4.08:1
  ok: "#4ade80",
};

/**
 * "Neo Emerald" — High-Tech Web3 Cyber Dark Matrix aesthetic inspired by modern
 * crypto wallets, neon dashboards and sleek glass UI.
 */
const FIL_PALETTE_NEO_EMERALD: FilPalette = {
  accent: "#00ff88",
  accentInk: "#03190e",
  panel: "#090d0a",
  panelAlt: "#101813",
  text: "#ecfdf5",
  muted: "#34d399",
  danger: "#ff4d6d",
  ok: "#00ff88",
};

/**
 * "NFT Vibe" — High-contrast NFT & Crypto Studio aesthetic.
 * Banana Yellow (#D0FF00) + Plum Cyber Violet (#8116E0) + Blanche White (#FEFFFC)
 * on ultra-black (#08080a) surface.
 */
const FIL_PALETTE_NFT_VIBE: FilPalette = {
  accent: "#d0ff00",
  accentInk: "#08080a",
  panel: "#08080a",
  panelAlt: "#121217",
  text: "#fefffc",
  muted: "#c084fc",
  danger: "#ff3366",
  ok: "#d0ff00",
};

/**
 * "Hollywood Teal" — Hollywood Blockbuster Cinematic Teal & Orange aesthetic.
 * Midnight Navy (#0D1B2A) + Electric Teal (#00D2BE) + Amber Fire (#F97316).
 */
const FIL_PALETTE_HOLLYWOOD_TEAL: FilPalette = {
  accent: "#00d2be",
  accentInk: "#0d1b2a",
  panel: "#0d1b2a",
  panelAlt: "#13263b",
  text: "#f1f5f9",
  // 4.86:1 on the composited panel/field backdrop; #0d9488 measured 4.31:1.
  // Value only — the teal keeps its full saturation and its 175° hue.
  muted: "#0e9e91",
  danger: "#f97316",
  ok: "#00d2be",
};

/**
 * "Cyberpunk 2077" — Official CD PROJEKT RED Game aesthetic.
 * High-Voltage Yellow (#FCEE0A) + Night City Cyan (#00F0FF) + Deep Glitch Black (#060907).
 */
const FIL_PALETTE_CYBERPUNK_2077: FilPalette = {
  accent: "#fcee0a",
  accentInk: "#050805",
  panel: "#060907",
  panelAlt: "#0f1714",
  text: "#fcee0a",
  muted: "#00f0ff",
  danger: "#ff0055",
  ok: "#fcee0a",
};

/**
 * "Cyber Punch" — brand kit sampled directly from a reference swatch card
 * (@PIXELAPHIC): #FF0022 red, #121212 near-black, #FFD000 yellow, #FFFFFF
 * white, no fifth colour. Two THEMES entries share this one palette object —
 * `cyber_punch` (glass) and `cyber_punch_hud` — the same brand, two different
 * surface/effect treatments, the way `cyberpunk`/`cyberpunk_2077` are two takes
 * on one aesthetic rather than the same theme name twice.
 *
 * `accent` is the yellow, not the red: red at full saturation reads 3.98:1
 * against white and needs a dark ink same as every other vivid accent here,
 * which the ink swatch already provides — but yellow's own luminance is high
 * enough that ink-on-yellow clears AA with the widest margin of any theme
 * (12.74:1), so the accent role goes to whichever swatch that margin favours.
 * Red keeps the role it already reads as: danger. `ok` has no green in the kit
 * to spend, so it reuses the accent — the same move `cyberpunk_2077` makes
 * for the same reason.
 */
const FIL_PALETTE_CYBER_PUNCH: FilPalette = {
  accent: "#ffd000",
  accentInk: "#121212", // 12.74:1 on #ffd000 (white was 1.47:1)
  panel: "#121212",
  panelAlt: "#1c1c1c",
  text: "#ffffff",
  muted: "#bdbdbd", // 9.63:1 composited over the glass surface tint
  danger: "#ff0022", // 4.71:1 on panel/panelAlt
  ok: "#ffd000",
};

export type FilThemeName = "default" | "cyberpunk" | "fallout" | "travelmate" | "pipboy" | "pixaroma" | "neo_emerald" | "nft_vibe" | "hollywood_teal" | "cyberpunk_2077" | "cyber_punch" | "cyber_punch_hud";

const THEMES: Record<FilThemeName, FilPalette> = {
  default: FIL_PALETTE,
  cyberpunk: FIL_PALETTE_CYBERPUNK,
  fallout: FIL_PALETTE_FALLOUT,
  travelmate: FIL_PALETTE_TRAVELMATE,
  pipboy: FIL_PALETTE_PIPBOY,
  pixaroma: FIL_PALETTE_PIXAROMA,
  neo_emerald: FIL_PALETTE_NEO_EMERALD,
  nft_vibe: FIL_PALETTE_NFT_VIBE,
  hollywood_teal: FIL_PALETTE_HOLLYWOOD_TEAL,
  cyberpunk_2077: FIL_PALETTE_CYBERPUNK_2077,
  cyber_punch: FIL_PALETTE_CYBER_PUNCH,
  cyber_punch_hud: FIL_PALETTE_CYBER_PUNCH,
};

/**
 * Every theme, as a value rather than a type, so the contrast test covers a new
 * palette the moment it is added instead of the day someone remembers to list
 * it. `muted`, `text` and `danger` here are *text* colours and are held to WCAG
 * AA — Cyberpunk shipped at 3.00:1 and Hollywood Teal at 4.31:1 because nothing
 * measured them.
 */
export const FIL_THEME_NAMES = Object.keys(THEMES) as FilThemeName[];

/**
 * Mutable "currently active" palette — updated in place (never reassigned)
 * by `applyFilTheme()`. `nodeStyle.ts` reads this instead of the frozen
 * `FIL_PALETTE` default when coloring a node's native LiteGraph title/body
 * at creation time, so newly dropped nodes always match whichever theme is
 * selected, not just Vue-rendered widget content (which re-themes for free
 * via CSS variables — no JS involved there).
 */
export const ACTIVE_PALETTE: FilPalette = { ...FIL_PALETTE };

let themeBaseEl: HTMLStyleElement | null = null;
let themeVarsEl: HTMLStyleElement | null = null;
let themeEffectsEl: HTMLStyleElement | null = null;

/**
 * The two axes that decide the palette, kept apart:
 *  - `currentTheme` — what the user picked in our own Theme setting.
 *  - `currentBase`  — whether ComfyUI itself is running light or dark.
 *
 * `FIL_PALETTE_LIGHT` only ever applies to the "default" theme. Picking
 * Cyberpunk means Cyberpunk on a light canvas too; that is an explicit choice,
 * not something to second-guess.
 */
let currentTheme: FilThemeName = "default";
let currentBase: FilBaseTheme = "dark";

/**
 * Which theme is live, by name.
 *
 * Callers that need to branch per theme MUST use this rather than comparing
 * `ACTIVE_PALETTE.accent` to a hex literal. Canvas drawing in
 * `nodes2/nodeStyle.ts` used to do the latter, which silently reverts a theme's
 * whole title-bar treatment to the default branch the moment its accent is
 * retuned — and accents do get retuned, because they are held to a contrast
 * ratio (see the ratios recorded beside each palette value above).
 */
export function activeThemeName(): FilThemeName {
  return currentTheme;
}

export type FilBaseTheme = "light" | "dark";

/**
 * Which palette wins right now. Kept in one place so `applyFilTheme` and
 * `applyFilBaseTheme` cannot drift apart.
 */
function resolvePalette(): FilPalette {
  if (currentTheme === "default" && currentBase === "light") return FIL_PALETTE_LIGHT;
  return THEMES[currentTheme] ?? FIL_PALETTE;
}

/**
 * `--fil-border` is emitted here, alongside the palette it derives from, rather
 * than once on `:root`. A `var()` inside a custom property is substituted where
 * that property is *declared*, so a lone `:root` definition would freeze the
 * default theme's muted into the border and keep it there through every later
 * palette swap. Deriving from the literal keeps each palette block
 * self-contained, so a re-emit is all a theme change needs.
 */
function paletteCssVars(p: FilPalette): string {
  return `--fil-accent:${p.accent};--fil-accent-ink:${p.accentInk};--fil-accent-text:color-mix(in srgb,${p.accent} 65%,${p.text});--fil-panel:${p.panel};--fil-panel-alt:${p.panelAlt};--fil-text:${p.text};--fil-muted:${p.muted};--fil-border:color-mix(in srgb,${p.muted} 55%,transparent);--fil-danger:${p.danger};--fil-ok:${p.ok};`;
}

/**
 * Per-theme flourishes.
 *
 * Most are a one-time box-shadow or background-image, which costs nothing after
 * paint. Three are not: Pipboy runs `fil-pipboy-scanlines` and `fil-pipboy-beam`
 * and Neo Emerald runs `fil-emerald-orb-pulse`, all `infinite`, on every visible
 * panel at once — a continuous repaint that scales with how many nodes are on
 * screen. `MOTION_OFF_CSS` below is the off switch, wired to the "Theme
 * animations" setting and to `prefers-reduced-motion`.
 *
 * The title-bar rules key off `.lg-node-header`, which is what the Vue renderer
 * names it (frontend 1.47.10). They used to say `.comfy-node-header`, a class
 * no shipped frontend has ever emitted — the same wrong guess that kept the run
 * highlight from ever firing, see `composables/useRunButtonFx.ts`. Under the
 * default canvas renderer (`Comfy.VueNodes.Enabled: false`) a node has no DOM
 * at all, so these stay inert there by nature; the node-body rules below are on
 * our own Vue shell and apply either way.
 */
const THEME_EFFECTS: Record<FilThemeName, string> = {
  default: "",
  cyberpunk: `
:root[data-fil-theme="cyberpunk"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 0 24px rgba(255, 0, 128, 0.4), inset 0 0 15px rgba(0, 255, 255, 0.25);
  border: 1px solid #ff0080;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}
:root[data-fil-theme="cyberpunk"] .fil-w-section {
  background: linear-gradient(90deg, rgba(255, 0, 128, 0.25) 0%, rgba(128, 0, 255, 0.1) 100%) !important;
  border-left: 3px solid #ff0080 !important;
  color: #00ffff !important;
  font-weight: 700;
}
:root[data-fil-theme="cyberpunk"] .fil-w-section:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(255, 0, 128, 0.35) 0%, rgba(0, 255, 255, 0.2) 100%) !important;
  color: #ff0080 !important;
}
:root[data-fil-theme="cyberpunk"] .fil-w-seg.active,
:root[data-fil-theme="cyberpunk"] .fil-combo-trigger.open,
:root[data-fil-theme="cyberpunk"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="cyberpunk"] .fil-w-chip.active {
  background: #ff0080 !important;
  color: #050811 !important;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.8), 0 0 10px rgba(0, 255, 255, 0.5) !important;
  border-color: #00ffff !important;
  font-weight: 800;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}
:root[data-fil-theme="cyberpunk"] .fil-w-seedrow-pill.is-accent {
  background: #39ff14 !important;
  border-color: #00ffff !important;
  color: #000000 !important;
  font-weight: 800;
  box-shadow: 0 0 16px rgba(57, 255, 20, 0.7) !important;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}
:root[data-fil-theme="cyberpunk"] .fil-w-seedrow-pill.is-accent:hover {
  background: #ff00ff !important;
  color: #ffffff !important;
  box-shadow: 0 0 24px rgba(255, 0, 255, 0.8) !important;
}
:root[data-fil-theme="cyberpunk"] input:focus,
:root[data-fil-theme="cyberpunk"] textarea:focus {
  border-color: #ff0080 !important;
  box-shadow: 0 0 18px rgba(255, 0, 128, 0.5) !important;
}
:root[data-fil-theme="cyberpunk"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(255, 0, 128, 0.5) !important;
}
`,
  cyberpunk_2077: `
:root[data-fil-theme="cyberpunk_2077"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 0 24px rgba(252, 238, 10, 0.35), inset 0 0 15px rgba(0, 240, 255, 0.2);
  border: 1px solid #fcee0a;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
}
:root[data-fil-theme="cyberpunk_2077"] .fil-w-section {
  background: repeating-linear-gradient(-45deg, rgba(252, 238, 10, 0.25) 0px, rgba(252, 238, 10, 0.25) 6px, transparent 6px, transparent 12px) !important;
  border-left: 3px solid #fcee0a !important;
  color: #fcee0a !important;
  font-weight: 800;
  letter-spacing: 0.1em;
}
:root[data-fil-theme="cyberpunk_2077"] .fil-w-section:hover:not(:disabled) {
  background: repeating-linear-gradient(-45deg, rgba(0, 240, 255, 0.3) 0px, rgba(0, 240, 255, 0.3) 6px, transparent 6px, transparent 12px) !important;
  color: #00f0ff !important;
}
:root[data-fil-theme="cyberpunk_2077"] .fil-w-seg.active,
:root[data-fil-theme="cyberpunk_2077"] .fil-combo-trigger.open,
:root[data-fil-theme="cyberpunk_2077"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="cyberpunk_2077"] .fil-w-chip.active {
  background: #fcee0a !important;
  color: #050805 !important;
  box-shadow: 0 0 22px rgba(252, 238, 10, 0.8), 0 0 10px rgba(0, 240, 255, 0.5) !important;
  border-color: #00f0ff !important;
  font-weight: 800;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}
:root[data-fil-theme="cyberpunk_2077"] .fil-w-seedrow-pill.is-accent {
  background: #00f0ff !important;
  border-color: #fcee0a !important;
  color: #050805 !important;
  font-weight: 800;
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.7) !important;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
}
:root[data-fil-theme="cyberpunk_2077"] .fil-w-seedrow-pill.is-accent:hover {
  background: #fcee0a !important;
  color: #000000 !important;
  box-shadow: 0 0 24px rgba(252, 238, 10, 0.9) !important;
}
:root[data-fil-theme="cyberpunk_2077"] input:focus,
:root[data-fil-theme="cyberpunk_2077"] textarea:focus {
  border-color: #fcee0a !important;
  box-shadow: 0 0 18px rgba(252, 238, 10, 0.6) !important;
}
:root[data-fil-theme="cyberpunk_2077"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(252, 238, 10, 0.6) !important;
}
:root[data-fil-theme="cyberpunk_2077"] .lg-node-header {
  letter-spacing: 0.06em;
}
`,
  cyber_punch: `
:root[data-fil-theme="cyber_punch"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 28px rgba(255, 0, 34, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 208, 0, 0.3);
}
:root[data-fil-theme="cyber_punch"] .fil-w-section {
  background: linear-gradient(90deg, rgba(255, 0, 34, 0.22) 0%, rgba(255, 208, 0, 0.06) 100%) !important;
  border-left: 3px solid #ff0022 !important;
  border-radius: 9999px !important;
  padding-left: 12px !important;
  color: #ffd000 !important;
  font-weight: 700;
}
:root[data-fil-theme="cyber_punch"] .fil-w-section:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(255, 0, 34, 0.32) 0%, rgba(255, 208, 0, 0.14) 100%) !important;
  color: #ffffff !important;
}
:root[data-fil-theme="cyber_punch"] .fil-w-seg.active,
:root[data-fil-theme="cyber_punch"] .fil-combo-trigger.open,
:root[data-fil-theme="cyber_punch"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="cyber_punch"] .fil-w-chip.active {
  background: #ffd000 !important;
  color: #121212 !important;
  box-shadow: 0 0 20px rgba(255, 208, 0, 0.6), 0 0 10px rgba(255, 0, 34, 0.4) !important;
  border-color: #ffd000 !important;
  border-radius: 9999px !important;
  font-weight: 700;
}
:root[data-fil-theme="cyber_punch"] .fil-w-seedrow-pill.is-accent {
  background: #ff0022 !important;
  border-color: #ffd000 !important;
  color: #ffffff !important;
  border-radius: 9999px !important;
  font-weight: 800;
  box-shadow: 0 0 16px rgba(255, 0, 34, 0.55) !important;
}
:root[data-fil-theme="cyber_punch"] .fil-w-seedrow-pill.is-accent:hover {
  background: #d40016 !important;
  box-shadow: 0 0 24px rgba(255, 0, 34, 0.8) !important;
}
:root[data-fil-theme="cyber_punch"] input:focus,
:root[data-fil-theme="cyber_punch"] textarea:focus {
  border-color: #ffd000 !important;
  box-shadow: 0 0 18px rgba(255, 208, 0, 0.45) !important;
}
:root[data-fil-theme="cyber_punch"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(255, 208, 0, 0.4) !important;
}
:root[data-fil-theme="cyber_punch"] .lg-node-header {
  letter-spacing: 0.03em;
}
`,
  cyber_punch_hud: `
:root[data-fil-theme="cyber_punch_hud"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 0 22px rgba(255, 208, 0, 0.25), inset 0 0 14px rgba(255, 0, 34, 0.18);
  border: 1px solid rgba(255, 208, 0, 0.5);
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
:root[data-fil-theme="cyber_punch_hud"] .fil-w-section {
  background: repeating-linear-gradient(-45deg, rgba(255, 0, 34, 0.18) 0px, rgba(255, 0, 34, 0.18) 6px, transparent 6px, transparent 12px) !important;
  border-left: 3px solid #ffd000 !important;
  color: #ffd000 !important;
  font-weight: 800;
  letter-spacing: 0.08em;
}
:root[data-fil-theme="cyber_punch_hud"] .fil-w-section:hover:not(:disabled) {
  background: repeating-linear-gradient(-45deg, rgba(255, 208, 0, 0.25) 0px, rgba(255, 208, 0, 0.25) 6px, transparent 6px, transparent 12px) !important;
  color: #ffffff !important;
}
:root[data-fil-theme="cyber_punch_hud"] .fil-w-seg.active,
:root[data-fil-theme="cyber_punch_hud"] .fil-combo-trigger.open,
:root[data-fil-theme="cyber_punch_hud"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="cyber_punch_hud"] .fil-w-chip.active {
  background: #ffd000 !important;
  color: #121212 !important;
  box-shadow: 0 0 18px rgba(255, 208, 0, 0.7) !important;
  border-color: #ff0022 !important;
  font-weight: 800;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
}
:root[data-fil-theme="cyber_punch_hud"] .fil-w-seedrow-pill.is-accent {
  background: #ff0022 !important;
  border-color: #ffd000 !important;
  color: #ffffff !important;
  font-weight: 800;
  box-shadow: 0 0 14px rgba(255, 0, 34, 0.6) !important;
  clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%);
}
:root[data-fil-theme="cyber_punch_hud"] .fil-w-seedrow-pill.is-accent:hover {
  background: #d40016 !important;
  box-shadow: 0 0 20px rgba(255, 0, 34, 0.85) !important;
}
:root[data-fil-theme="cyber_punch_hud"] input:focus,
:root[data-fil-theme="cyber_punch_hud"] textarea:focus {
  border-color: #ffd000 !important;
  box-shadow: 0 0 16px rgba(255, 208, 0, 0.5) !important;
}
:root[data-fil-theme="cyber_punch_hud"] button:hover:not(:disabled) {
  box-shadow: 0 0 14px rgba(255, 208, 0, 0.5) !important;
}
:root[data-fil-theme="cyber_punch_hud"] .lg-node-header {
  letter-spacing: 0.08em;
}
`,
  fallout: `
[data-fil-theme="fallout"] .fil-node-shell [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(212,160,23,0.2);
}
`,
  pipboy: `
@keyframes fil-pipboy-scanlines {
  0% { background-position-y: 0px; }
  100% { background-position-y: 8px; }
}
@keyframes fil-pipboy-beam {
  0% { top: -20%; opacity: 0; }
  50% { opacity: 0.15; }
  100% { top: 120%; opacity: 0; }
}
:root[data-fil-theme="pipboy"] .fil-node-shell [class$="-root"] {
  background-image: linear-gradient(rgba(0, 255, 0, 0.08) 50%, rgba(0, 0, 0, 0.35) 50%);
  background-size: 100% 4px;
  animation: fil-pipboy-scanlines 1.2s linear infinite;
  position: relative;
}
:root[data-fil-theme="pipboy"] .fil-node-shell [class$="-root"]::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(#00ff00, #00ff00), linear-gradient(#00ff00, #00ff00),
    linear-gradient(#00ff00, #00ff00), linear-gradient(#00ff00, #00ff00),
    linear-gradient(#00ff00, #00ff00), linear-gradient(#00ff00, #00ff00),
    linear-gradient(#00ff00, #00ff00), linear-gradient(#00ff00, #00ff00);
  background-position:
    left 3px top 3px, left 3px top 3px,
    right 3px top 3px, right 3px top 3px,
    left 3px bottom 3px, left 3px bottom 3px,
    right 3px bottom 3px, right 3px bottom 3px;
  background-repeat: no-repeat;
  background-size: 14px 2px, 2px 14px, 14px 2px, 2px 14px, 14px 2px, 2px 14px, 14px 2px, 2px 14px;
  pointer-events: none;
  opacity: 0.85;
  z-index: 10;
}
:root[data-fil-theme="pipboy"] .fil-node-shell [class$="-root"]::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(180deg, transparent, rgba(0, 255, 0, 0.15), transparent);
  pointer-events: none;
  animation: fil-pipboy-beam 6s ease-in-out infinite;
  z-index: 9;
}
:root[data-fil-theme="pipboy"] .lg-node-header,
:root[data-fil-theme="pipboy"] .fil-node-shell {
  font-family: "Roboto Mono", "Courier New", monospace !important;
}
:root[data-fil-theme="pipboy"] .fil-w-seg.active,
:root[data-fil-theme="pipboy"] .fil-combo-trigger.open,
:root[data-fil-theme="pipboy"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="pipboy"] button:hover {
  box-shadow: 0 0 8px rgba(0, 255, 0, 0.8), inset 0 0 6px rgba(0, 255, 0, 0.3) !important;
  text-shadow: 0 0 6px #00ff00 !important;
}
`,
  travelmate: `
[data-fil-theme="travelmate"] .fil-node-shell [class$="-root"]{border:none;box-shadow:none;}
[data-fil-theme="travelmate"] .fil-w-seg.active,
[data-fil-theme="travelmate"] .fil-combo-trigger.open,
[data-fil-theme="travelmate"] .fil-combo-trigger:focus-visible{box-shadow:0 0 6px var(--fil-accent),0 0 14px var(--fil-accent);}
`,
  pixaroma: `
:root[data-fil-theme="pixaroma"] .fil-node-shell [class$="-root"]{backdrop-filter:none;}
:root[data-fil-theme="pixaroma"] .fil-w-chip.active,
:root[data-fil-theme="pixaroma"] .fil-style-tab-btn.active,
:root[data-fil-theme="pixaroma"] .fil-style-picker-btn.has-styles{
  background:var(--fil-accent);
  border-color:var(--fil-accent);
  color:var(--fil-accent-ink);
  box-shadow:none;
}
:root[data-fil-theme="pixaroma"] .fil-style-picker-btn.has-styles:hover{
  background:color-mix(in srgb,var(--fil-accent) 85%,#000);
}
:root[data-fil-theme="pixaroma"] .fil-w-section{
  background:transparent;
  color:var(--fil-accent-text);
  font-size:9px;
  letter-spacing:0.06em;
}
:root[data-fil-theme="pixaroma"] .fil-w-section:hover:not(:disabled){
  background:var(--fil-surface-1);
  color:var(--fil-accent-text);
}
`,
  neo_emerald: `
@keyframes fil-emerald-orb-pulse {
  0%, 100% { opacity: 0.25; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.15); }
}
:root[data-fil-theme="neo_emerald"] .fil-node-shell [class$="-root"] {
  background-image:
    radial-gradient(circle at 90% 10%, rgba(0, 255, 136, 0.22) 0%, transparent 40%),
    radial-gradient(circle at 10% 90%, rgba(0, 229, 255, 0.15) 0%, transparent 40%),
    radial-gradient(rgba(0, 255, 136, 0.12) 1px, transparent 1px) !important;
  background-size: 100% 100%, 100% 100%, 16px 16px !important;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.75),
    0 0 30px rgba(0, 255, 136, 0.18),
    inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border: 1px solid rgba(0, 255, 136, 0.35) !important;
  backdrop-filter: blur(16px) !important;
  position: relative !important;
}
:root[data-fil-theme="neo_emerald"] .fil-node-shell [class$="-root"]::before {
  content: "";
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.35) 0%, transparent 70%);
  pointer-events: none;
  animation: fil-emerald-orb-pulse 4s ease-in-out infinite;
  z-index: 1;
}
:root[data-fil-theme="neo_emerald"] .fil-w-section {
  background: linear-gradient(90deg, rgba(0, 255, 136, 0.18) 0%, rgba(0, 229, 255, 0.05) 100%) !important;
  border-left: 3px solid #00ff88 !important;
  border-radius: 8px !important;
  padding: 5px 12px !important;
  color: #00ff88 !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}
:root[data-fil-theme="neo_emerald"] .fil-w-section:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(0, 255, 136, 0.3) 0%, rgba(163, 230, 53, 0.12) 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 0 16px rgba(0, 255, 136, 0.4) !important;
}
:root[data-fil-theme="neo_emerald"] .fil-w-seg.active,
:root[data-fil-theme="neo_emerald"] .fil-combo-trigger.open,
:root[data-fil-theme="neo_emerald"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="neo_emerald"] .fil-w-chip.active {
  background: linear-gradient(135deg, #00ff88 0%, #a3e635 50%, #00e5ff 100%) !important;
  color: #03190e !important;
  box-shadow:
    0 0 22px rgba(0, 255, 136, 0.6),
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
  border: 1px solid #00ff88 !important;
  font-weight: 700 !important;
  letter-spacing: 0.02em !important;
}
:root[data-fil-theme="neo_emerald"] .fil-w-seedrow-pill.is-accent {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.3) 0%, rgba(0, 229, 255, 0.2) 100%) !important;
  border: 1px solid #00ff88 !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  box-shadow: 0 0 14px rgba(0, 255, 136, 0.35) !important;
}
:root[data-fil-theme="neo_emerald"] .fil-w-seedrow-pill.is-accent:hover {
  background: linear-gradient(135deg, #00ff88 0%, #00e5ff 100%) !important;
  color: #03190e !important;
  box-shadow: 0 0 24px rgba(0, 255, 136, 0.7) !important;
}
:root[data-fil-theme="neo_emerald"] input:focus,
:root[data-fil-theme="neo_emerald"] textarea:focus {
  border-color: #00ff88 !important;
  box-shadow: 0 0 18px rgba(0, 255, 136, 0.45) !important;
}
:root[data-fil-theme="neo_emerald"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(0, 255, 136, 0.45) !important;
}
:root[data-fil-theme="neo_emerald"] .lg-node-header {
  letter-spacing: 0.04em;
}
`,
  nft_vibe: `
:root[data-fil-theme="nft_vibe"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.85), 0 0 30px rgba(129, 22, 224, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(208, 255, 0, 0.35);
  backdrop-filter: blur(16px);
}
:root[data-fil-theme="nft_vibe"] .fil-w-section {
  background: linear-gradient(90deg, rgba(129, 22, 224, 0.22) 0%, rgba(208, 255, 0, 0.04) 100%) !important;
  border-left: 3px solid #8116e0 !important;
  border-radius: 9999px !important;
  padding-left: 12px !important;
  color: #c084fc !important;
  font-weight: 700;
}
:root[data-fil-theme="nft_vibe"] .fil-w-section:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(129, 22, 224, 0.35) 0%, rgba(208, 255, 0, 0.1) 100%) !important;
  color: #d0ff00 !important;
}
:root[data-fil-theme="nft_vibe"] .fil-w-seg.active,
:root[data-fil-theme="nft_vibe"] .fil-combo-trigger.open,
:root[data-fil-theme="nft_vibe"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="nft_vibe"] .fil-w-chip.active {
  background: #d0ff00 !important;
  color: #08080a !important;
  box-shadow: 0 0 20px rgba(208, 255, 0, 0.6), 0 0 10px rgba(129, 22, 224, 0.4) !important;
  border-color: #d0ff00 !important;
  border-radius: 9999px !important;
  font-weight: 700;
}
:root[data-fil-theme="nft_vibe"] .fil-w-seedrow-pill.is-accent {
  background: #8116e0 !important;
  border-color: #a78bfa !important;
  color: #fefffc !important;
  border-radius: 9999px !important;
  box-shadow: 0 0 14px rgba(129, 22, 224, 0.4) !important;
}
:root[data-fil-theme="nft_vibe"] .fil-w-seedrow-pill.is-accent:hover {
  background: #9333ea !important;
  box-shadow: 0 0 20px rgba(208, 255, 0, 0.5) !important;
}
:root[data-fil-theme="nft_vibe"] input:focus,
:root[data-fil-theme="nft_vibe"] textarea:focus {
  border-color: #d0ff00 !important;
  box-shadow: 0 0 16px rgba(208, 255, 0, 0.4) !important;
}
:root[data-fil-theme="nft_vibe"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(208, 255, 0, 0.4) !important;
}
:root[data-fil-theme="nft_vibe"] .lg-node-header {
  letter-spacing: 0.05em;
}
`,
  hollywood_teal: `
:root[data-fil-theme="hollywood_teal"] .fil-node-shell [class$="-root"] {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 24px rgba(249, 115, 22, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(13, 148, 136, 0.4);
  backdrop-filter: blur(14px);
}
:root[data-fil-theme="hollywood_teal"] .fil-w-section {
  background: linear-gradient(90deg, rgba(13, 148, 136, 0.25) 0%, rgba(249, 115, 22, 0.08) 100%) !important;
  border-left: 3px solid #f97316 !important;
  border-radius: 6px !important;
  padding-left: 10px !important;
  color: #00d2be !important;
  font-weight: 700;
  letter-spacing: 0.05em;
}
:root[data-fil-theme="hollywood_teal"] .fil-w-section:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(13, 148, 136, 0.35) 0%, rgba(249, 115, 22, 0.18) 100%) !important;
  color: #f97316 !important;
}
:root[data-fil-theme="hollywood_teal"] .fil-w-seg.active,
:root[data-fil-theme="hollywood_teal"] .fil-combo-trigger.open,
:root[data-fil-theme="hollywood_teal"] .fil-combo-trigger:focus-visible,
:root[data-fil-theme="hollywood_teal"] .fil-w-chip.active {
  background: #00d2be !important;
  color: #0d1b2a !important;
  box-shadow: 0 0 20px rgba(0, 210, 190, 0.6), 0 0 10px rgba(249, 115, 22, 0.4) !important;
  border-color: #f97316 !important;
  font-weight: 700;
}
:root[data-fil-theme="hollywood_teal"] .fil-w-seedrow-pill.is-accent {
  background: #f97316 !important;
  border-color: #f97316 !important;
  color: #ffffff !important;
  font-weight: 800;
  box-shadow: 0 0 16px rgba(249, 115, 22, 0.6) !important;
}
:root[data-fil-theme="hollywood_teal"] .fil-w-seedrow-pill.is-accent:hover {
  background: #c45000 !important;
  box-shadow: 0 0 24px rgba(249, 115, 22, 0.8) !important;
}
:root[data-fil-theme="hollywood_teal"] input:focus,
:root[data-fil-theme="hollywood_teal"] textarea:focus {
  border-color: #00d2be !important;
  box-shadow: 0 0 16px rgba(0, 210, 190, 0.4) !important;
}
:root[data-fil-theme="hollywood_teal"] button:hover:not(:disabled) {
  box-shadow: 0 0 16px rgba(0, 210, 190, 0.4) !important;
}
:root[data-fil-theme="hollywood_teal"] .lg-node-header {
  letter-spacing: 0.04em;
}
`,
};

/**
 * Stops every looping theme flourish, leaving the same colours and shapes
 * standing still. Emitted *after* the theme's own effects in the same style tag
 * so it wins on document order — the two selectors tie on specificity, and
 * which stylesheet ends up later in `<head>` is a build detail no rule should
 * depend on (the same trap the Pixaroma rules document).
 *
 * `!important` because the animated declarations carry it too.
 *
 * The moving parts are decoration in the literal sense: the scanline sweep, the
 * CRT beam and the emerald orb are all `::before`/`::after` overlays or a
 * background wash. Freezing them costs nothing but the motion — no layout, no
 * colour, no control changes state.
 */
const MOTION_OFF_CSS = `
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"],
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"]::before,
:root[data-fil-motion="off"] .fil-node-shell [class$="-root"]::after {
  animation: none !important;
}
`;

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
 * Vault-Tec Pip-Boy CRT surface tokens — sharp retro terminal chassis,
 * phosphor green outline glow, zero blur, dark phosphor inner field.
 */
const SURFACE_VARS_PIPBOY =
  "--fil-surface-bg:#020a02;" +
  "--fil-surface-border:#00ff00;" +
  "--fil-surface-radius:4px;" +
  "--fil-surface-blur:0px;" +
  "--fil-surface-shadow:0 0 18px rgba(0,255,0,0.35), inset 0 0 15px rgba(0,255,0,0.12);" +
  "--fil-glass-bg:rgba(0,35,0,0.45);" +
  "--fil-glass-border:rgba(0,255,0,0.45);" +
  "--fil-field-radius:3px;" +
  "--fil-pill-radius:3px;" +
  "--fil-pill-bg:rgba(0,255,0,0.08);" +
  "--fil-pill-border:rgba(0,255,0,0.5);" +
  "--fil-border:#00aa00;" +
  "--fil-input-border:#00ff00;";

const SURFACE_VARS_PIXAROMA =
  "--fil-surface-bg:#171718;" +
  "--fil-surface-border:#2a2c2e;" +
  "--fil-surface-radius:8px;" +
  "--fil-surface-blur:0px;" +
  "--fil-surface-shadow:none;" +
  "--fil-glass-bg:#111111;" +
  "--fil-glass-border:#3a3d40;" +
  "--fil-field-radius:4px;" +
  "--fil-pill-radius:5px;" +
  "--fil-pill-bg:#1e2022;" +
  "--fil-pill-border:#3a3d40;" +
  "--fil-border:#3a3d40;" +
  "--fil-input-border:#3a3d40;";

/**
 * Modern High-Tech Web3 / Cyber Emerald Dark Glass surface tokens.
 * Sleek 16px radii, emerald glow aura, deep glass backdrop.
 */
const SURFACE_VARS_NEO_EMERALD =
  "--fil-surface-bg:rgba(9,13,10,0.88);" +
  "--fil-surface-border:rgba(0,255,136,0.25);" +
  "--fil-surface-radius:16px;" +
  "--fil-surface-blur:14px;" +
  "--fil-surface-shadow:0 16px 36px rgba(0,0,0,0.65), 0 0 24px rgba(0,255,136,0.12), inset 0 1px 0 rgba(255,255,255,0.12);" +
  "--fil-glass-bg:rgba(16,26,20,0.55);" +
  "--fil-glass-border:rgba(0,255,136,0.35);" +
  "--fil-field-radius:10px;" +
  "--fil-pill-radius:12px;" +
  "--fil-pill-bg:rgba(0,255,136,0.06);" +
  "--fil-pill-border:rgba(0,255,136,0.35);" +
  "--fil-border:rgba(0,255,136,0.3);" +
  "--fil-input-border:rgba(0,255,136,0.5);";

/**
 * NFT Vibe — High-contrast Acid Yellow & Cyber Violet Capsule UI surface tokens.
 */
const SURFACE_VARS_NFT_VIBE =
  "--fil-surface-bg:rgba(8,8,10,0.92);" +
  "--fil-surface-border:rgba(208,255,0,0.35);" +
  "--fil-surface-radius:20px;" +
  "--fil-surface-blur:16px;" +
  "--fil-surface-shadow:0 20px 40px rgba(0,0,0,0.85), 0 0 30px rgba(129,22,224,0.3), inset 0 1px 0 rgba(255,255,255,0.18);" +
  "--fil-glass-bg:rgba(22,18,30,0.6);" +
  "--fil-glass-border:rgba(129,22,224,0.4);" +
  "--fil-field-radius:12px;" +
  "--fil-pill-radius:9999px;" +
  "--fil-pill-bg:rgba(208,255,0,0.08);" +
  "--fil-pill-border:rgba(208,255,0,0.4);" +
  "--fil-border:rgba(129,22,224,0.35);" +
  "--fil-input-border:rgba(208,255,0,0.5);";

/**
 * Night City Cyberpunk 2077 HUD surface tokens.
 * Chamfer cut styling, Electric Cyan outline, Hot Edgerunners Pink inner glow.
 */
const SURFACE_VARS_CYBERPUNK =
  "--fil-surface-bg:rgba(6,9,19,0.95);" +
  "--fil-surface-border:#00f0ff;" +
  "--fil-surface-radius:2px;" +
  "--fil-surface-blur:12px;" +
  "--fil-surface-shadow:0 0 24px rgba(0,240,255,0.4), inset 0 0 15px rgba(255,0,85,0.25);" +
  "--fil-glass-bg:rgba(14,21,38,0.7);" +
  "--fil-glass-border:rgba(0,240,255,0.4);" +
  "--fil-field-radius:2px;" +
  "--fil-pill-radius:3px;" +
  "--fil-pill-bg:rgba(0,240,255,0.08);" +
  "--fil-pill-border:rgba(0,240,255,0.45);" +
  "--fil-border:rgba(255,0,85,0.4);" +
  "--fil-input-border:#00f0ff;";

/**
 * Hollywood Teal & Orange Cinematic surface tokens.
 */
const SURFACE_VARS_HOLLYWOOD_TEAL =
  "--fil-surface-bg:rgba(13,27,42,0.94);" +
  "--fil-surface-border:rgba(13,148,136,0.4);" +
  "--fil-surface-radius:12px;" +
  "--fil-surface-blur:14px;" +
  "--fil-surface-shadow:0 16px 36px rgba(0,0,0,0.75), 0 0 24px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.12);" +
  "--fil-glass-bg:rgba(19,38,59,0.6);" +
  "--fil-glass-border:rgba(0,210,190,0.35);" +
  "--fil-field-radius:8px;" +
  "--fil-pill-radius:20px;" +
  "--fil-pill-bg:rgba(0,210,190,0.08);" +
  "--fil-pill-border:rgba(0,210,190,0.4);" +
  "--fil-border:rgba(13,148,136,0.35);" +
  "--fil-input-border:rgba(0,210,190,0.5);";

/**
 * Cyberpunk 2077 Official Game HUD surface tokens.
 * Chamfer cut styling, High-Voltage Yellow outline, Night City Cyan inner glow.
 */
const SURFACE_VARS_CYBERPUNK_2077 =
  "--fil-surface-bg:rgba(6,9,7,0.96);" +
  "--fil-surface-border:#fcee0a;" +
  "--fil-surface-radius:2px;" +
  "--fil-surface-blur:12px;" +
  "--fil-surface-shadow:0 0 24px rgba(252,238,10,0.35), inset 0 0 15px rgba(0,240,255,0.2);" +
  "--fil-glass-bg:rgba(15,23,20,0.7);" +
  "--fil-glass-border:rgba(252,238,10,0.4);" +
  "--fil-field-radius:2px;" +
  "--fil-pill-radius:3px;" +
  "--fil-pill-bg:rgba(252,238,10,0.08);" +
  "--fil-pill-border:rgba(252,238,10,0.45);" +
  "--fil-border:rgba(0,240,255,0.4);" +
  "--fil-input-border:#fcee0a;";

/**
 * Cyber Punch — glass variant. Translucent red-black glass, wide blur, rounded
 * — the "Neon Glass" treatment tried in the ui-lab sandbox node before this.
 */
const SURFACE_VARS_CYBER_PUNCH =
  "--fil-surface-bg:rgba(255,0,34,0.05);" +
  "--fil-surface-border:rgba(255,208,0,0.3);" +
  "--fil-surface-radius:18px;" +
  "--fil-surface-blur:18px;" +
  "--fil-surface-shadow:0 18px 38px rgba(0,0,0,0.7), 0 0 26px rgba(255,0,34,0.3), inset 0 1px 0 rgba(255,255,255,0.14);" +
  "--fil-glass-bg:rgba(28,20,20,0.55);" +
  "--fil-glass-border:rgba(255,208,0,0.35);" +
  "--fil-field-radius:12px;" +
  "--fil-pill-radius:9999px;" +
  "--fil-pill-bg:rgba(255,208,0,0.08);" +
  "--fil-pill-border:rgba(255,208,0,0.4);" +
  "--fil-border:rgba(255,0,34,0.35);" +
  "--fil-input-border:rgba(255,208,0,0.5);";

/**
 * Cyber Punch — HUD variant. Same palette, opposite instinct: near-opaque,
 * small radius, a tight glow instead of a wide one — the "Prицел"/HUD
 * treatment from the same sandbox pass, corner brackets and a chamfered
 * corner supplied by `THEME_EFFECTS.cyber_punch_hud`'s `clip-path`.
 */
const SURFACE_VARS_CYBER_PUNCH_HUD =
  "--fil-surface-bg:rgba(18,18,18,0.94);" +
  "--fil-surface-border:rgba(255,208,0,0.5);" +
  "--fil-surface-radius:3px;" +
  "--fil-surface-blur:6px;" +
  "--fil-surface-shadow:0 0 20px rgba(255,208,0,0.25), inset 0 0 12px rgba(255,0,34,0.15);" +
  "--fil-glass-bg:rgba(10,10,10,0.7);" +
  "--fil-glass-border:rgba(255,0,34,0.4);" +
  "--fil-field-radius:2px;" +
  "--fil-pill-radius:3px;" +
  "--fil-pill-bg:rgba(255,208,0,0.06);" +
  "--fil-pill-border:rgba(255,208,0,0.45);" +
  "--fil-border:rgba(255,0,34,0.4);" +
  "--fil-input-border:#ffd000;";

const THEME_SURFACES: Partial<Record<FilThemeName, string>> = {
  cyberpunk: SURFACE_VARS_CYBERPUNK,
  pipboy: SURFACE_VARS_PIPBOY,
  pixaroma: SURFACE_VARS_PIXAROMA,
  neo_emerald: SURFACE_VARS_NEO_EMERALD,
  nft_vibe: SURFACE_VARS_NFT_VIBE,
  hollywood_teal: SURFACE_VARS_HOLLYWOOD_TEAL,
  cyberpunk_2077: SURFACE_VARS_CYBERPUNK_2077,
  cyber_punch: SURFACE_VARS_CYBER_PUNCH,
  cyber_punch_hud: SURFACE_VARS_CYBER_PUNCH_HUD,
};

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
 * - `--fil-accent` vs `--fil-accent-text` — the raw accent is a *fill and
 *   outline* color. As small text on a panel it measures 3.10:1 on the light
 *   palette and 4.19:1 on Pixaroma, under the 4.5:1 floor, so accent-colored
 *   labels (active tab, selected option, status badge) use `--fil-accent-text`:
 *   the accent pulled 35% toward the theme's own text color, which lands the
 *   whole set at 5.17–11.01:1 while keeping the hue recognisable. Derived rather
 *   than hand-listed so a future palette is safe without extra bookkeeping.
 *   Icons stay on the raw accent — glyphs are non-text and only need 3:1.
 * - `--fil-control-h` (30px) — the height of EVERY interactive control, with no
 *   exceptions. There used to be a `--fil-control-h-lg` (34px) for seed rows and
 *   icon buttons; the "deliberate exception" simply read as three different
 *   field sizes stacked in one node (KSampler showed 34/30/33px in a row) and is
 *   gone. A new control gets this token or it does not line up.
 * - `--fil-label-col` (38%) — the width of the label column in every labelled
 *   row. Each row widget used to size its own label track to its own text
 *   (`minmax(auto, max-content)`), so the left edge of the *controls* moved from
 *   row to row: "CFG" started its field 40px earlier than "After generate". One
 *   shared width is what makes a stack of rows read as a column. Labels that do
 *   not fit are ellipsised, and a node with unusually long labels can widen the
 *   track by setting the variable on its own root.
 *
 * Inject the FiL_Design_ImageMind CSS variables on `:root` exactly once, plus three extra
 * (initially empty) `<style>` tags reserved for runtime theme switching —
 * see `applyFilTheme()` and `applyFilBaseTheme()`. Safe to call from any module
 * — duplicates are skipped via an id guard.
 *
 * Tag order matters and is the reason these are separate elements. All four
 * write `:root`, so they have equal specificity and the last one in the head
 * wins: base stylesheet → auto light/dark base → explicitly chosen theme →
 * theme flourishes. That ordering is what lets Cyberpunk stay Cyberpunk on a
 * light canvas while the default theme follows ComfyUI.
 */
export function injectFilBrandVars(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById("fil-brand-vars")) return;
  const el = document.createElement("style");
  el.id = "fil-brand-vars";
  el.textContent = `:root{${paletteCssVars(FIL_PALETTE)}--fil-radius:8px;--fil-node-pad:6px 8px 14px 8px;--fil-node-gap:4px;--fil-row-pad:4px 6px;--fil-control-h:30px;--fil-label-col:38%;--fil-input-border:rgba(240,138,69,0.35);${SURFACE_VARS_CYAN}${OVERLAY_VARS_DARK}}
/* The light palette used to live here under a .comfy-theme-light selector. That
 * class is absent on current ComfyUI builds, so the block never matched — it is
 * emitted into the fil-theme-base tag now, driven by detectComfyBase(). */
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

  themeBaseEl = document.createElement("style");
  themeBaseEl.id = "fil-theme-base";
  document.head.appendChild(themeBaseEl);

  themeVarsEl = document.createElement("style");
  themeVarsEl.id = "fil-theme-vars";
  document.head.appendChild(themeVarsEl);

  themeEffectsEl = document.createElement("style");
  themeEffectsEl.id = "fil-theme-effects";
  document.head.appendChild(themeEffectsEl);
}

/**
 * Is ComfyUI itself currently light or dark?
 *
 * The `.comfy-theme-light` class this extension used to key the light palette
 * off is not present on current ComfyUI builds — verified against a running
 * 8188: switching `Comfy.ColorPalette` to a light palette changes
 * `--bg-color`/`--fg-color` (written as an inline style on `<html>`) and adds no
 * class anywhere, so the entire light block was dead code.
 *
 * Reading the luminance of `--bg-color` instead works for any palette, including
 * third-party and user-made ones, which a hardcoded list of palette names would
 * miss. Falls back to "dark" when the variable is missing or unparseable —
 * that is the historical behaviour, so an unknown value cannot make things worse.
 */
export function detectComfyBase(): FilBaseTheme {
  if (typeof document === "undefined") return "dark";
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim();
  const lum = relativeLuminance(raw);
  if (lum == null) return "dark";
  return lum > 0.4 ? "light" : "dark";
}

/** sRGB relative luminance per WCAG, or null if the color isn't a plain hex/rgb(). */
function relativeLuminance(color: string): number | null {
  let rgb: [number, number, number] | null = null;
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(color);
  if (hex) {
    const h = hex[1].length === 3 ? hex[1].replace(/./g, (c) => c + c) : hex[1];
    rgb = [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  } else {
    const m = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(color);
    if (m) rgb = [Number(m[1]), Number(m[2]), Number(m[3])];
  }
  if (!rgb) return null;
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Follow ComfyUI's own light/dark mode. Only affects the "default" theme — see
 * `resolvePalette`. Callers should pair this with `reapplyThemeToGraph`, since
 * LiteGraph node title/body colors are JS properties, not CSS.
 */
export function applyFilBaseTheme(base: FilBaseTheme): void {
  currentBase = base;
  renderTheme();
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
  currentTheme = theme;
  renderTheme();
}

/**
 * Push `currentTheme` + `currentBase` into `ACTIVE_PALETTE` and the two style
 * tags. Single writer, so the two setters above can never disagree about which
 * palette is live.
 */
function renderTheme(): void {
  Object.assign(ACTIVE_PALETTE, resolvePalette());
  if (typeof document === "undefined") return;
  document.documentElement.dataset.filTheme = currentTheme;
  document.documentElement.dataset.filBase = currentBase;

  // Light base: the light palette plus its surface and overlay tokens, which is
  // what the dead `.comfy-theme-light` block used to carry.
  //
  // Gated on the light palette actually having won, not merely on ComfyUI being
  // light. The tag below only overrides palette colors, not surfaces — so
  // emitting this whenever the canvas was light left an explicitly chosen dark
  // theme (Cyberpunk on a light ComfyUI) with light overlays and a white
  // `--fil-inset`, i.e. a near-white field inside a near-black panel.
  if (themeBaseEl) {
    themeBaseEl.textContent =
      resolvePalette() === FIL_PALETTE_LIGHT
        ? `:root{${paletteCssVars(FIL_PALETTE_LIGHT)}--fil-input-border:rgba(201,104,44,0.35);${SURFACE_VARS_LIGHT}${OVERLAY_VARS_LIGHT}}`
        : "";
  }
  // Left empty for "default" so the base tag above governs unopposed.
  if (themeVarsEl) {
    themeVarsEl.textContent =
      currentTheme === "default"
        ? ""
        : `:root{${paletteCssVars(THEMES[currentTheme] ?? FIL_PALETTE)}${THEME_SURFACES[currentTheme] ?? ""}}`;
  }
  if (themeEffectsEl) themeEffectsEl.textContent = (THEME_EFFECTS[currentTheme] ?? "") + MOTION_OFF_CSS;
}
