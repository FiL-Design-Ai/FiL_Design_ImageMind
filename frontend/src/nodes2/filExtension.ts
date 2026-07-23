/**
 * Build the ComfyUI extension object for the FiL_Design_ImageMind frontend.
 *
 * Keeps the same surface as the legacy `web/fil_design_imagemind.js` entrypoint:
 *   - `name`
 *   - `settings` — declarative settings panel entries
 *   - `setup` — eager installers (toasts, connection FX, shortcuts, ...)
 *   - `getCustomWidgets` — register the `fil_compare` DOM widget type
 *   - `beforeRegisterNodeDef` — dispatch into per-node registration modules
 *   - `graphToPrompt` — soft preflight warnings (e.g. OpticScanner missing config)
 *
 * Node modules live in `src/nodes2/nodes/` and are looked up by canonical id.
 * Settings modules live in `src/stores/settings/` and contribute `ALL_SETTINGS`.
 */
import type { ComfyApp, ComfyExtension, ComfyNodeData } from "@/types/comfy";
import { NODE_MODULES } from "@/nodes2/nodeRegistry";
import { installHelpToolbar } from "@/nodes2/installers/helpToolbar";
import { installRunButtonFx } from "@/nodes2/installers/runButtonFx";
import { installToasts } from "@/nodes2/installers/toasts";
import { installShortcuts } from "@/nodes2/installers/shortcuts";
import { installGlobalScrollGuard } from "@/nodes2/installers/scrollGuard";
import { filCommands, filKeybindings } from "@/composables/useShortcuts";
import { installProviderManager } from "@/nodes2/installers/providerManager";
import { ALL_SETTINGS } from "@/stores/settings/allSettings";
import { applyStartupTheme } from "@/stores/settings/themeSettings";
import { applyStartupLogLevel } from "@/stores/settings/loggingSettings";
import { readSetting } from "@/stores/settings/providerSettings";
import { EXTENSION_NAME, LOG_TAG, ROUTE_PREFIX } from "@/constants/brand";

const NODE_CONTRACT_ENDPOINT = `${ROUTE_PREFIX}/node_contracts`;

// Registered at module import (not in setup()) so our window capture-phase
// wheel listener is bound before any other extension's setup hook can add
// its own — stopImmediatePropagation only silences listeners registered
// AFTER ours on the same target.
installGlobalScrollGuard();

// Seed randomization for FiLSeed/FiLHighResFix/FiLOpticScanner used to be
// resolved here via this `graphToPrompt` hook mutating the queued prompt.
// That hook never fires on queue in this frontend version (comfyui_frontend_
// package 1.45.21's executionUtil.ts builds the prompt without invoking any
// extension hooks) — verified live by wrapping the registered extension
// object and observing zero invocations across real queuePrompt() calls.
// All three nodes now drive ComfyUI core's own native, always-working
// `control_after_generate` widget instead (see seed.ts/Seed.vue,
// hiresfix.ts/HiResFix.vue, scanner.ts/OpticScanner.vue). Only the
// OpticScanner "no config connected" warning below still runs through this
// hook, for whatever secondary code paths do still call it.
function graphToPromptPreflight(prompt: unknown): unknown {
  try {
    const app = (globalThis as unknown as { app?: ComfyApp }).app;
    const nodes = (app?.graph as { _nodes?: unknown[] })?._nodes ?? [];
    for (const node of nodes) {
      const n = node as {
        comfyClass?: string; id?: number; inputs?: Array<{ name: string; link: unknown }>;
      };
      if (n.comfyClass === "FiLOpticScanner") {
        const configSlot = n.inputs?.find((input) => input.name === "config");
        if (!configSlot || configSlot.link == null) {
          console.warn(`${LOG_TAG} Optic Scanner #${n.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
        }
      }
    }
  } catch (error) {
    console.warn(`${LOG_TAG} preflight fallback:`, error);
  }
  return prompt;
}

export function createFilExtension(app: ComfyApp): ComfyExtension {
  return {
    name: EXTENSION_NAME,

    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: ALL_SETTINGS,

    // Declarative shortcuts — modern ComfyUI registers these through its
    // native command palette / keybinding system. The keydown fallback in
    // installShortcuts only kicks in when this API is unavailable.
    commands: filCommands,
    keybindings: filKeybindings,

    async setup() {
      // All installers are isolated: a throw in one must not break others.
      const installers: Array<() => unknown> = [
        () => installHelpToolbar(app),
        () => installRunButtonFx(app),
        () => installToasts(),
        () => installShortcuts(app),
        () => installProviderManager(app),
        () => applyStartupTheme((id, fallback) => readSetting(id, fallback, app)),
        () => applyStartupLogLevel((id, fallback) => readSetting(id, fallback, app)),
      ];
      for (const install of installers) {
        try {
          install();
        } catch (error) {
          console.warn(`${LOG_TAG} installer ${install.name || "anonymous"} failed:`, error);
        }
      }
    },

    getCustomWidgets(): Record<string, unknown> {
      // ComfyUI passes the app here and merges the *returned* map into its custom
      // widget registry. The previous version mutated `app.widgets` directly, but
      // that property is getter-only on modern ComfyUI and threw on every load.
      return { fil_compare: { serialize: false } };
    },

    async beforeRegisterNodeDef(nodeType: unknown, nodeData: ComfyNodeData): Promise<void> {
      const nodeModule = NODE_MODULES[nodeData.name];
      if (!nodeModule) return;
      try {
        await nodeModule.register(nodeType, nodeData);
      } catch (error) {
        console.warn(`${LOG_TAG} failed to register "${nodeData.name}":`, error);
      }
    },

    async graphToPrompt(prompt: unknown): Promise<unknown> {
      return graphToPromptPreflight(prompt);
    },
  };
}

// Re-exported for tests and introspection.
export { NODE_CONTRACT_ENDPOINT };