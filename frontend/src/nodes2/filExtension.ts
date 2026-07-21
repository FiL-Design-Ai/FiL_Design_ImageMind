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

interface FilSeedLikeState {
  nodeState: { mode?: string; seed_mode?: string; seed: number };
  lastRunSeed: number | null;
}

/** Resolve a FiLSeed-style (mode: random/fixed) seed and override it in the
 * queued prompt payload for the given node id. Shared by FiLSeed (its own
 * `mode` field) and FiLOpticScanner (its bottom seed block's `seed_mode`
 * field) — both use the same random/fixed semantics. */
function resolveAndInjectSeed(
  prompt: unknown,
  classType: string,
  nodeId: number | undefined,
  state: FilSeedLikeState,
): void {
  const mode = state.nodeState.mode ?? state.nodeState.seed_mode ?? "random";
  const seedVal = state.nodeState.seed ?? 0;
  const resolvedSeed = mode === "random"
    ? Math.floor(Math.random() * 0xFFFFFFFF)
    : (Number(seedVal) || 0);
  state.lastRunSeed = resolvedSeed;

  if (typeof prompt !== "object" || prompt === null) return;
  for (const [id, nodeData] of Object.entries(prompt as Record<string, unknown>)) {
    const nd = nodeData as { class_type?: string; inputs?: Record<string, unknown> };
    if (nd.class_type === classType && nd.inputs && Number(id) === nodeId) {
      nd.inputs.seed = resolvedSeed;
      break;
    }
  }
}

/** Inject Vue-panel values for force_input fields whose input socket is left
 * unconnected. These fields have no native widget (declared force_input on the
 * node), so their value lives only in the panel's DOM state and would
 * otherwise reach the backend as the Python default. A connected socket wins:
 * its link value is left untouched. */
function injectPanelFields(
  prompt: unknown,
  classType: string,
  node: { id?: number; inputs?: Array<{ name: string; link: unknown }> },
  nodeState: Record<string, unknown>,
  fields: string[],
): void {
  if (typeof prompt !== "object" || prompt === null || node.id == null) return;
  const target = (prompt as Record<string, unknown>)[String(node.id)] as
    | { class_type?: string; inputs?: Record<string, unknown> }
    | undefined;
  if (!target || target.class_type !== classType || !target.inputs) return;
  for (const field of fields) {
    const slot = node.inputs?.find((input) => input.name === field);
    if (slot && slot.link != null) continue; // connected — link value wins
    const value = nodeState[field];
    if (value !== undefined) target.inputs[field] = value;
  }
}

function graphToPromptPreflight(prompt: unknown): unknown {
  try {
    const app = (globalThis as unknown as { app?: ComfyApp }).app;
    const nodes = (app?.graph as { _nodes?: unknown[] })?._nodes ?? [];
    for (const node of nodes) {
      const n = node as {
        comfyClass?: string; id?: number; inputs?: Array<{ name: string; link: unknown }>;
        _filSeedState?: FilSeedLikeState;
        _filScannerSeedState?: FilSeedLikeState;
        _filHiResFixState?: FilSeedLikeState & { nodeState: { use_same_seed?: unknown } };
      };

      // FiLSeed: inject resolved seed into prompt
      if (n.comfyClass === "FiLSeed" && n._filSeedState) {
        resolveAndInjectSeed(prompt, "FiLSeed", n.id, n._filSeedState);
        continue;
      }

      // FiLHighResFix: cross-version fallback only. In this frontend version
      // this hook doesn't fire on queue — HiResFix.vue drives core's native
      // control_after_generate instead, which is what actually randomizes
      // the hidden seed. Where the hook *does* fire, inject the own-seed
      // value (capped 32-bit, still a valid seed); same-seed mode is left
      // untouched so its input stays constant and the sampler cache holds.
      if (n.comfyClass === "FiLHighResFix" && n._filHiResFixState) {
        if (n._filHiResFixState.nodeState.use_same_seed === false) {
          resolveAndInjectSeed(prompt, "FiLHighResFix", n.id, n._filHiResFixState);
        }
        continue;
      }

      // FiLOpticScanner: inject resolved seed + warn if no config connected
      if (n.comfyClass === "FiLOpticScanner") {
        if (n._filScannerSeedState) {
          resolveAndInjectSeed(prompt, "FiLOpticScanner", n.id, n._filScannerSeedState);
          injectPanelFields(prompt, "FiLOpticScanner", n,
            n._filScannerSeedState.nodeState as Record<string, unknown>,
            ["prompt", "negative_prompt", "custom_style"]);
        }
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