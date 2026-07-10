/**
 * useShortcuts — declarative registration of FiL_Design_ImageMind keyboard shortcuts via
 * the ComfyUI `commands` + `keybindings` + `menuCommands` API (advanced
 * guide §11, §12.3). Replaces the raw `document.addEventListener`
 * capture-phase hook used by the legacy `web/core/shortcuts.js`.
 *
 * When the ComfyUI `commands` API is unavailable (very old or dev-only
 * Vite server), we fall back to a window-level keydown handler that
 * emulates the same bindings — keeps the extension functional everywhere.
 */
import type { ComfyApp } from "@/types/comfy";
import { useHelpStore } from "@/stores/helpStore";
import { toast } from "@/stores/toastStore";

const SETTING_ENABLED = "FiL_Design_ImageMind.Shortcuts.Enabled";
const CHEATSHEET_ID = "__cheatsheet__";

const SEARCH_SELECTORS = [
  "#comfy-search-input",
  'input[name="search"]',
  'input[aria-label="Search"]',
  "#search-input",
  'input[placeholder*="search" i]',
];

interface ExtensionShape {
  commands?: unknown[];
  keybindings?: unknown[];
  menuCommands?: unknown[];
}

function isFormField(target: EventTarget | null): boolean {
  if (!target || typeof target !== "object") return false;
  const tag = String((target as HTMLElement).tagName || "").toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || (target as HTMLElement).isContentEditable === true;
}

function findSearchField(): HTMLElement | null {
  for (const sel of SEARCH_SELECTORS) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) return el;
  }
  return null;
}

function openCheatsheet() {
  const store = useHelpStore();
  store.ensureHelpDefaultsInjected();
  // The cheatsheet is registered as a help entry; the FilHelpPopup
  // auto-opens for the active help id via the shared `activeHelpId` ref.
  store.value_open?.(CHEATSHEET_ID);
}

function focusSearch() {
  const el = findSearchField();
  if (!el) {
    toast.info("ComfyUI search field not found");
    return;
  }
  try {
    el.focus();
    if ("select" in el) (el as HTMLInputElement).select();
  } catch {
    // ignore — non-critical.
  }
}

/** Install declarative commands; falls back to a global keydown handler. */
export function installShortcuts(app: ComfyApp): void {
  const ext = app as unknown as { extensionManager?: { registerCommands?: (reg: ExtensionShape) => void } };

  // Declarative path — preferred when ComfyUI exposes the API.
  if (typeof ext.extensionManager?.registerCommands === "function") {
    try {
      ext.extensionManager.registerCommands({
        commands: [
          {
            id: "FiL_Design_ImageMind.helpCheatsheet",
            label: "FiL_Design_ImageMind — Keyboard cheatsheet",
            icon: "?",
            function: openCheatsheet,
          },
          {
            id: "FiL_Design_ImageMind.focusSearch",
            label: "FiL_Design_ImageMind — Focus add-node search",
            icon: "/",
            function: focusSearch,
          },
        ],
        keybindings: [
          { combo: { key: "?", shift: true }, commandId: "FiL_Design_ImageMind.helpCheatsheet" },
          { combo: { key: "k", ctrl: true, shift: true }, commandId: "FiL_Design_ImageMind.helpCheatsheet" },
          { combo: { key: "/" }, commandId: "FiL_Design_ImageMind.focusSearch" },
        ],
        menuCommands: [{ path: ["FiL LLM"], commands: ["FiL_Design_ImageMind.helpCheatsheet", "FiL_Design_ImageMind.focusSearch"] }],
      });
      return;
    } catch (err) {
      console.warn("[FiL_Design_ImageMind] declarative shortcuts register failed, falling back:", err);
    }
  }

  // Fallback — window-level keydown handler (works in dev & old ComfyUI).
  window.addEventListener("keydown", (event) => onFallbackKey(event, app), true);
  console.info("[FiL_Design_ImageMind] shortcuts installed (fallback keydown handler)");
}

function onFallbackKey(event: KeyboardEvent, app: ComfyApp): void {
  let enabled = true;
  try {
    const w = globalThis as unknown as {
      app?: { extensionManager?: { setting?: { get?: (id: string, fallback?: unknown) => unknown } } };
    };
    enabled = Boolean(w.app?.extensionManager?.setting?.get?.(SETTING_ENABLED, true) ?? true);
  } catch { /* defaults on */ }
  if (!enabled) return;

  const t = event.target;
  const inField = isFormField(t);

  // Escape handled everywhere (even inside form fields).
  if (event.key === "Escape") {
    try {
      const store = useHelpStore();
      store.value_close?.();
    } catch { /* ignore */ }
    if (inField) (t as HTMLElement).blur?.();
    event.preventDefault?.();
    return;
  }

  if (inField) return;

  // Ctrl+Shift+K or Shift+? → cheatsheet.
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === "K" || event.key === "k")) {
    openCheatsheet();
    event.preventDefault();
    return;
  }
  if (event.key === "?" || (event.shiftKey && event.key === "/")) {
    if (event.shiftKey) openCheatsheet();
    else {
      // ? → open help for the single selected FiL_Design_ImageMind node.
      const can = (app as unknown as { canvas?: { selected_nodes?: Record<string, unknown> } }).canvas;
      const sel = can?.selected_nodes ?? {};
      const ids = Object.values(sel).filter(Boolean);
      if (ids.length === 1) {
        const id = (ids[0] as { comfyClass?: string } | null)?.comfyClass ?? "default";
        const store = useHelpStore();
        store.ensureHelpDefaultsInjected();
        store.value_open?.(id);
      } else {
        toast.info("Select exactly one FiL_Design_ImageMind node, then press ?");
      }
    }
    event.preventDefault();
    return;
  }

  // "/" — focus search.
  if (event.key === "/" && !event.shiftKey && !event.ctrlKey && !event.metaKey && !event.altKey) {
    focusSearch();
    event.preventDefault();
  }
}

/** Placeholder hooks consumed by the cheatsheet module above. */
export const __shortcutHooks = { openCheatsheet, focusSearch };