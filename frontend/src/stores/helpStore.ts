import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Help registry. Replaces `web/core/help.js` + `web/nodes/help_registry.js`.
 * Each canonical node declares a `HelpDef` describing definitions,
 * bullets, tables etc., and the `<FilHelp>` popup renders the matching
 * entry for the currently selected node (or `default` for the index).
 */
export interface HelpRow {
  label: string;
  desc: string;
}

export interface HelpDef {
  id: string;
  title: string;
  body?: string;
  bullets?: string[];
  rows?: HelpRow[];
  table?: { headers: string[]; rows: string[][] };
  code?: string;
}

const _registry = ref<Record<string, HelpDef>>({});
let injected = false;

export const useHelpStore = defineStore("fil/help", () => {
  /** The currently displayed help entry id, or null when popup is closed. */
  const activeHelpId = ref<string | null>(null);

  function registerAll(defs: Record<string, HelpDef>): void {
    for (const [id, def] of Object.entries(defs)) {
      _registry.value[id] = def;
    }
  }

  function ensureHelpDefaultsInjected(): void {
    if (injected) return;
    injected = true;
    void import("@/stores/helpDefaults")
      .then(({ HELP_DEFAULTS }) => registerAll(HELP_DEFAULTS))
      .catch((err) => console.warn("[FiL_Design_ImageMind] help defaults import failed:", err));
  }

  function get(id: string): HelpDef | undefined {
    return _registry.value[id];
  }

  function list(): HelpDef[] {
    return Object.values(_registry.value);
  }

  function value_open(id: string): void {
    ensureHelpDefaultsInjected();
    activeHelpId.value = id;
  }

  function value_close(): void {
    activeHelpId.value = null;
  }

  return {
    registry: _registry,
    activeHelpId,
    ensureHelpDefaultsInjected,
    registerAll,
    get,
    list,
    value_open,
    value_close,
  };
});