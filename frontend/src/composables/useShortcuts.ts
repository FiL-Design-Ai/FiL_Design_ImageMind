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
import type { ComfyApp, ComfyCommand, ComfyKeybinding } from "@/types/comfy";
import { useHelpStore } from "@/stores/helpStore";
import { toast } from "@/stores/toastStore";
import { readSetting } from "@/stores/settings/providerSettings";

import { useWirelessStore } from "@/stores/wirelessStore";

const SETTING_ENABLED = "FiL_Design_ImageMind.Shortcuts.Enabled";
const CHEATSHEET_ID = "__cheatsheet__";

// A "focus the add-node search" command lived here, bound to a bare `/`. Both
// halves were wrong for a node pack: the key is claimed globally, from every
// context in the host, and the field was hunted down through five guessed CSS
// selectors — the same way `.comfy-node-header` and the canvas `nodeEls` map
// were guessed, neither of which any shipped frontend has ever emitted.
// Focusing core's own search is core's business. Only the help binding stays.

/**
 * Declarative commands + keybindings, attached to the extension object in
 * filExtension.ts so modern ComfyUI registers them through its native
 * command palette / keybinding system. The window-level fallback below is
 * only used when that API is unavailable (very old or dev-only ComfyUI).
 */
export const filCommands: ComfyCommand[] = [
  {
    id: "FiL_Design_ImageMind.helpCheatsheet",
    label: "FiL_Design_ImageMind — Keyboard cheatsheet",
    // The menu bar shows `menubarLabel` verbatim — kept short like core's
    // "New"/"Open"; the command-palette `label` above stays the long one.
    menubarLabel: "Keyboard cheatsheet",
    icon: "?",
    function: openCheatsheet,
  },
  {
    id: "FiL_Design_ImageMind.openWirelessDashboard",
    label: "FiL_Design_ImageMind — 📡 Wireless Dashboard",
    menubarLabel: "📡 Wireless Dashboard",
    icon: "📡",
    function: openWirelessDashboard,
  },
];

export const filKeybindings: ComfyKeybinding[] = [
  { commandId: "FiL_Design_ImageMind.helpCheatsheet", combo: { key: "?", shift: true } },
  // NB: openWirelessDashboard is registered as a command in filCommands and handled
  // via global Alt+W listener to prevent ComfyUI duplicate-keybinding warnings on reload.
];

function isFormField(target: EventTarget | null): boolean {
  if (!target || typeof target !== "object") return false;
  const tag = String((target as HTMLElement).tagName || "").toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || (target as HTMLElement).isContentEditable === true;
}

/**
 * `Shortcuts.Enabled`, read from the host on every use.
 *
 * The command path has to consult it too, not just the fallback keydown
 * handler below: on any shipped ComfyUI the fallback never installs, so a
 * switch only that handler read would have been inert for every real user —
 * the same dead control this pack keeps `runButtonFxSettingsAdvanced` out of
 * `ALL_SETTINGS` to avoid.
 */
function shortcutsEnabled(): boolean {
  return readSetting<boolean>(SETTING_ENABLED, true);
}

function openCheatsheet() {
  if (!shortcutsEnabled()) return;
  const store = useHelpStore();
  store.ensureHelpDefaultsInjected();
  // The cheatsheet is registered as a help entry; the FilHelpPopup
  // auto-opens for the active help id via the shared `activeHelpId` ref.
  store.value_open?.(CHEATSHEET_ID);
}

function openWirelessDashboard() {
  if (!shortcutsEnabled()) return;
  const store = useWirelessStore();
  store.toggleDashboard();
}

/**
 * Modern ComfyUI registers `filCommands` / `filKeybindings` declaratively via
 * the extension object (filExtension.ts), so nothing to do here beyond a log.
 * Only when the native `extensionManager` is absent (very old / dev-only
 * ComfyUI) do we install the window-level keydown fallback.
 */
export function installShortcuts(app: ComfyApp): void {
  window.addEventListener("keydown", (event) => onFallbackKey(event, app), true);
  console.info("[FiL_Design_ImageMind] shortcuts installed");
}

function onFallbackKey(event: KeyboardEvent, app: ComfyApp): void {
  if (!shortcutsEnabled()) return;

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

  // Alt+W → Wireless Dashboard.
  if (event.altKey && (event.key === "w" || event.key === "W" || event.code === "KeyW")) {
    openWirelessDashboard();
    event.preventDefault();
    return;
  }

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
  }
}
