/**
 * Build the ComfyUI extension object for the FiL_LLM frontend.
 *
 * Keeps the same surface as the legacy `web/fil_llm.js` entrypoint:
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
import { installProviderManager } from "@/nodes2/installers/providerManager";
import { ALL_SETTINGS } from "@/stores/settings/allSettings";
import { applyStartupTheme } from "@/stores/settings/themeSettings";
import { readSetting } from "@/stores/settings/providerSettings";

const NODE_CONTRACT_ENDPOINT = "/fil_llm/node_contracts";

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

function graphToPromptPreflight(prompt: unknown): unknown {
  try {
    const app = (globalThis as unknown as { app?: ComfyApp }).app;
    const nodes = (app?.graph as { _nodes?: unknown[] })?._nodes ?? [];
    for (const node of nodes) {
      const n = node as {
        comfyClass?: string; id?: number; inputs?: Array<{ name: string; link: unknown }>;
        _filSeedState?: FilSeedLikeState;
        _filScannerSeedState?: FilSeedLikeState;
      };

      // FiLSeed: inject resolved seed into prompt
      if (n.comfyClass === "FiLSeed" && n._filSeedState) {
        resolveAndInjectSeed(prompt, "FiLSeed", n.id, n._filSeedState);
        continue;
      }

      // FiLOpticScanner: inject resolved seed + warn if no config connected
      if (n.comfyClass === "FiLOpticScanner") {
        if (n._filScannerSeedState) {
          resolveAndInjectSeed(prompt, "FiLOpticScanner", n.id, n._filScannerSeedState);
        }
        const configSlot = n.inputs?.find((input) => input.name === "config");
        if (!configSlot || configSlot.link == null) {
          console.warn(`[FiL_LLM] Optic Scanner #${n.id} has no Provider Loader wired to its "config" slot — execution will fail.`);
        }
      }
    }
  } catch (error) {
    console.warn("[FiL_LLM] preflight fallback:", error);
  }
  return prompt;
}

export function createFilExtension(app: ComfyApp): ComfyExtension {
  return {
    name: "FiL_LLM.UI",

    // Declarative settings — registered BEFORE setup so the panel renders
    // even if a later installer throws.
    settings: ALL_SETTINGS,

    async setup() {
      // All installers are isolated: a throw in one must not break others.
      const installers: Array<() => unknown> = [
        () => installHelpToolbar(app),
        () => installRunButtonFx(app),
        () => installToasts(),
        () => installShortcuts(app),
        () => installProviderManager(app),
        () => applyStartupTheme((id, fallback) => readSetting(id, fallback, app)),
      ];
      for (const install of installers) {
        try {
          install();
        } catch (error) {
          console.warn(`[FiL_LLM] installer ${install.name || "anonymous"} failed:`, error);
        }
      }
    },

    getCustomWidgets(canvas: unknown): unknown {
      const c = canvas as { widgets?: Record<string, unknown> };
      c.widgets = c.widgets || {};
      c.widgets["fil_compare"] = { serialize: false };
      return c.widgets;
    },

    async beforeRegisterNodeDef(nodeType: unknown, nodeData: ComfyNodeData): Promise<void> {
      const nodeModule = NODE_MODULES[nodeData.name];
      if (!nodeModule) return;
      try {
        await nodeModule.register(nodeType, nodeData);
      } catch (error) {
        console.warn(`[FiL_LLM] failed to register "${nodeData.name}":`, error);
      }
    },

    async graphToPrompt(prompt: unknown): Promise<unknown> {
      return graphToPromptPreflight(prompt);
    },
  };
}

// Re-exported for tests and introspection.
export { NODE_CONTRACT_ENDPOINT };