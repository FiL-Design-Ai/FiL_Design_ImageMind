/**
 * Build the ComfyUI extension object for the FiL_Design_ImageMind frontend.
 *
 * Keeps the same surface as the legacy `web/fil_design_imagemind.js` entrypoint:
 *   - `name`
 *   - `settings` — declarative settings panel entries
 *   - `setup` — eager installers (toasts, connection FX, shortcuts, ...)
 *   - `getCustomWidgets` — kept for the ComfyUI contract; no custom types left
 *   - `beforeRegisterNodeDef` — dispatch into per-node registration modules
 *   - `graphToPrompt` — soft preflight warnings (e.g. OpticScanner missing config)
 *
 * Node modules live in `src/nodes2/nodes/` and are looked up by canonical id.
 * Settings modules live in `src/stores/settings/` and contribute `ALL_SETTINGS`.
 */
import type { ComfyApp, ComfyExtension, ComfyNodeData } from "@/types/comfy";
import { NODE_MODULES } from "@/nodes2/nodeRegistry";
import { installToasts } from "@/nodes2/installers/toasts";
import { installRunButtonFx } from "@/nodes2/installers/runButtonFx";
import { installProviderManager } from "@/nodes2/installers/providerManager";
import { installHelpToolbar } from "@/nodes2/installers/helpToolbar";
import { installShortcuts } from "@/nodes2/installers/shortcuts";
import { filCommands, filKeybindings } from "@/composables/useShortcuts";
import { ALL_SETTINGS } from "@/stores/settings/allSettings";
import { applyStartupLogLevel } from "@/stores/settings/loggingSettings";
import { applyStartupTheme } from "@/stores/settings/themeSettings";
import { readSetting } from "@/stores/settings/providerSettings";
import { EXTENSION_NAME, LOG_TAG, ROUTE_PREFIX } from "@/constants/brand";

const NODE_CONTRACT_ENDPOINT = `${ROUTE_PREFIX}/node_contracts`;

// The wheel guard used to be installed here, at module import, to bind ahead
// of every other extension's setup hook. It now installs on the first mounted
// FiL widget instead (nodes2/domWidgetHost.ts): a capture-phase listener on
// `window` outruns core's canvas-bound forwarder whenever it is added, and an
// install whose graphs contain no FiL node has no business touching the wheel
// at all.

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

    // One command, one binding: Shift+? opens the keyboard cheatsheet. It goes
    // through the host's own `commands`/`keybindings` API, so the key shows up
    // in ComfyUI's keybinding settings and the user can rebind or clear it —
    // which is the answer to the objection that sank the previous attempt (a
    // raw capture-phase `document` listener nobody could see or override).
    //
    // The `/` binding for the add-node search does *not* come back. A bare key
    // claimed from every context in the host is a conflict waiting to happen,
    // and focusing core's own search is core's business.
    commands: filCommands,
    keybindings: filKeybindings,

    async setup() {
      // All installers are isolated: a throw in one must not break others.
      const installers: Array<() => unknown> = [
        () => installToasts(),
        () => installProviderManager(app),
        () => installRunButtonFx(app),
        () => installHelpToolbar(app),
        // A no-op when the host has `extensionManager` — the commands above
        // already did the work. Only a very old or dev-only ComfyUI falls back
        // to a keydown listener.
        () => installShortcuts(app),
        () => applyStartupLogLevel((id, fallback) => readSetting(id, fallback, app)),
        () => applyStartupTheme((id, fallback) => readSetting(id, fallback, app)),
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
      return {};
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