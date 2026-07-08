/**
 * FiL_LLM design-system tokens.
 * Mirrors the legacy web/core/ui.js FIL_PALETTE so existing CSS variables
 * (`--fil-accent`, `--fil-panel`, ...) keep the same meaning.
 */
export const FIL_PALETTE = {
  accent: "#f08a45",
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
  panel: "#eef1f5",
  panelAlt: "#e2e6ec",
  text: "#1c2430",
  muted: "#5b6572",
  danger: "#c94b4b",
  ok: "#3f8f5f",
};

const FIL_PALETTE_CYBERPUNK: FilPalette = {
  accent: "#00e5ff",
  panel: "#0a0e1a",
  panelAlt: "#131a2e",
  text: "#dff9ff",
  muted: "#5f7d94",
  danger: "#ff2e63",
  ok: "#00ff9f",
};

const FIL_PALETTE_FALLOUT: FilPalette = {
  accent: "#d4a017",
  panel: "#1a1712",
  panelAlt: "#26221a",
  text: "#e8dcc0",
  muted: "#8a7d5f",
  danger: "#9a3324",
  ok: "#8fbf3f",
};

export type FilThemeName = "default" | "cyberpunk" | "fallout";

const THEMES: Record<FilThemeName, FilPalette> = {
  default: FIL_PALETTE,
  cyberpunk: FIL_PALETTE_CYBERPUNK,
  fallout: FIL_PALETTE_FALLOUT,
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

function paletteCssVars(p: FilPalette): string {
  return `--fil-accent:${p.accent};--fil-panel:${p.panel};--fil-panel-alt:${p.panelAlt};--fil-text:${p.text};--fil-muted:${p.muted};--fil-danger:${p.danger};--fil-ok:${p.ok};`;
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
[data-fil-theme="cyberpunk"] [class$="-root"]{border:1px solid rgba(0,229,255,0.18);}
`,
  fallout: `
[data-fil-theme="fallout"] [class$="-root"]{
  background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 3px);
  border:1px solid rgba(212,160,23,0.2);
}
[data-fil-theme="fallout"] .comfy-node-header{text-shadow:0 0 4px rgba(212,160,23,0.55);}
`,
};

/**
 * Inject the FiL_LLM CSS variables on `:root` exactly once, plus two extra
 * (initially empty) `<style>` tags reserved for runtime theme switching —
 * see `applyFilTheme()`. Safe to call from any module — duplicates are
 * skipped via an id guard.
 */
export function injectFilBrandVars(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById("fil-brand-vars")) return;
  const el = document.createElement("style");
  el.id = "fil-brand-vars";
  el.textContent = `:root{${paletteCssVars(FIL_PALETTE)}--fil-radius:8px;--fil-gap:.55rem;--fil-input-border:rgba(240,138,69,0.35);}
.comfy-theme-light{${paletteCssVars(FIL_PALETTE_LIGHT)}--fil-input-border:rgba(201,104,44,0.35);}
.comfy-multiline-input{border-color:var(--fil-input-border) !important;}`;
  document.head.appendChild(el);

  themeVarsEl = document.createElement("style");
  themeVarsEl.id = "fil-theme-vars";
  document.head.appendChild(themeVarsEl);

  themeEffectsEl = document.createElement("style");
  themeEffectsEl.id = "fil-theme-effects";
  document.head.appendChild(themeEffectsEl);
}

/**
 * Switch the FiL_LLM theme at runtime — no page reload needed. Vue widget
 * CSS updates instantly since every component reads `var(--fil-*)`, never a
 * hardcoded hex. LiteGraph's native node title/body colors are plain JS
 * properties (not CSS-driven though), so callers must separately loop
 * existing graph nodes and reassign `.color`/`.bgcolor` from `ACTIVE_PALETTE`
 * — see `installTheme.ts`, which does that right after calling this.
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
