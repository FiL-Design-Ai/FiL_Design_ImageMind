import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import contracts from "@/api/contracts.json";

/**
 * Guards a class of bug that neither typecheck nor the contract tests catch:
 * a node panel offering a hand-typed option string the backend enum does not
 * contain. Two shipped at once —
 *   StyleMixer  "Vision LLM Blend (Smart)"  vs  "Smart LLM Fusion (Gen-Mix)"
 *   ColorWizard "LAB Contrast"              vs  "LAB Enhance"
 * Both wrote a value execute() never matches, so the node silently ran a
 * different mode, and the value was not legal for the COMBO input either.
 */

const HERE = dirname(fileURLToPath(import.meta.url));
const NODES_DIR = resolve(HERE, "../src/components/nodes");

/** ComponentFile.vue -> backend node id. */
const NODE_ID_BY_FILE: Record<string, string> = {
  "StyleMixer.vue": "FiLStyleMixer",
  "CinemaRig.vue": "FiLCinemaRig",
  "ColorWizard.vue": "FiLColorWizard",
  "OpticScanner.vue": "FiLOpticScanner",
  "UpscaleTileCalc.vue": "FiLUpscaleTileCalc",
  "HiResFix.vue": "FiLHighResFix",
  "ProviderLoader.vue": "FiLProviderLoader",
  "Seed.vue": "FiLSeed",
  "Switch.vue": "FiLSignalSwitch",
  "DatasetForge.vue": "FiLDatasetForge",
  "KSamplerPanel.vue": "FiLKSampler",
  "NoiseControlPanel.vue": "FiLNoiseControl",
  "CleanerPanel.vue": "FiLNeuroCleaner",
  "ImageDecomposerPanel.vue": "FiLImageDecomposer",
  "ChannelPanel.vue": "FiLChannel",
};

/**
 * UI-only literals with no backend enum behind them: FilSegmented renders an
 * ON/OFF pair for inputs the schema declares as plain Boolean, so these values
 * never travel to `execute()` as strings. Same idea as UI_ONLY_WIDGETS in
 * common/contracts/registry.py.
 */
const UI_ONLY_LITERALS = new Set(["ON", "OFF"]);

/**
 * Files in this folder that are not node panels.
 *
 * Both are pickers a panel opens — they receive the options they show as a
 * prop from the panel that owns them, so there is no node id to check them
 * against and nothing here is hand-typed. Listed by name rather than skipped
 * by a pattern, so a genuinely unmapped panel still fails loudly.
 */
const NOT_A_NODE_PANEL = new Set(["ProviderModelPicker.vue", "StyleBrowser.vue"]);

// The generated JSON carries explicit nulls for unset fields, so the spec type
// has to allow them; casting through `unknown` keeps vue-tsc happy about the
// literal's much wider inferred shape.
type WidgetSpec = { name: string; values?: string[] | null; options?: string[] | null };
type Contract = { inputs: { required: WidgetSpec[]; optional: WidgetSpec[] } };

/** Every enum value the backend accepts for any widget of this node. */
function legalValues(nodeId: string): Set<string> {
  const data = (contracts as unknown as { data?: Record<string, Contract> }).data ?? {};
  const contract = data[nodeId];
  const out = new Set<string>();
  if (!contract) return out;
  for (const w of [...contract.inputs.required, ...contract.inputs.optional]) {
    for (const v of w.values ?? []) out.add(v);
    for (const v of w.options ?? []) out.add(v);
  }
  return out;
}

/** Literal string arrays passed as `:options="[…]"` in the template. */
function hardcodedOptionLiterals(source: string): string[] {
  const found: string[] = [];
  const arrayRe = /:options="\[([^\]]*)\]"/g;
  for (const match of source.matchAll(arrayRe)) {
    for (const item of match[1].matchAll(/'([^']*)'|"([^"]*)"/g)) {
      const value = item[1] ?? item[2];
      if (value) found.push(value);
    }
  }
  return found;
}

const vueFiles = readdirSync(NODES_DIR).filter((f) => f.endsWith(".vue"));

describe("node panel option literals match the backend contract", () => {
  it("covers every node component file", () => {
    // Fails loudly if a component is added without being mapped here, rather
    // than silently skipping it.
    const unmapped = vueFiles.filter((f) => !(f in NODE_ID_BY_FILE) && !NOT_A_NODE_PANEL.has(f));
    expect(unmapped, `unmapped node components: ${unmapped.join(", ")}`).toEqual([]);
  });

  for (const file of vueFiles) {
    const nodeId = NODE_ID_BY_FILE[file];
    if (!nodeId) continue;

    it(`${file}: no :options literal outside the contract's enum`, () => {
      const source = readFileSync(resolve(NODES_DIR, file), "utf-8");
      const literals = hardcodedOptionLiterals(source).filter(
        (v) => !UI_ONLY_LITERALS.has(v),
      );
      if (literals.length === 0) return; // derived from the contract — nothing to check

      const legal = legalValues(nodeId);
      const illegal = literals.filter((v) => !legal.has(v));
      expect(
        illegal,
        `${file} offers value(s) ${nodeId} does not accept: ${illegal.join(", ")}`,
      ).toEqual([]);
    });
  }
});
