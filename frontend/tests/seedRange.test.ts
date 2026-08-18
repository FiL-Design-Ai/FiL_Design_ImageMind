/**
 * A fixed seed has to be a seed the node can actually carry.
 *
 * The pack's seed inputs do not share one range: FiLSeed, FiLKSampler, HiRes
 * Fix and Noise Control run to `0xFFFFFFFFFFFFFFFF`, while Optic Scanner and
 * Dataset Forge stop at 999999999999, because their seed is forwarded to a
 * provider API instead of feeding local RNG (nodes/node_scanner.py:131).
 *
 * "New fixed" used to draw across `Number.MAX_SAFE_INTEGER` for every panel,
 * which on Optic Scanner is ~9000× its declared maximum. Nothing caught it:
 * `execution.py` skips its whole min/max check for any node whose
 * `validate_inputs()` takes `**kwargs`, and the scanner's does — so the
 * out-of-range value reached the provider, which cannot represent it and falls
 * back to a random one. From the outside that is a fixed seed that refuses to
 * stay fixed.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SeedVue from "@/components/nodes/Seed.vue";
import HiResFixVue from "@/components/nodes/HiResFix.vue";
import OpticScannerVue from "@/components/nodes/OpticScanner.vue";
import { clampSeed, randomSeed, type ComfyLikeWidget } from "@/nodes2/util";

/** The ranges the backend declares, copied from the node schemas. */
const PROVIDER_SEED_MAX = 999999999999; // node_scanner.py / node_dataset.py
const LOCAL_SEED_MAX = 0xFFFFFFFFFFFFFFFF; // node_seed.py / node_ksampler.py / node_hiresfix.py

function seedWidget(min: number, max: number): ComfyLikeWidget {
  return { name: "seed", value: 0, options: { min, max } };
}

/** A node as the panels reach it: `state.node`, non-enumerable, with widgets. */
function nodeWith(...widgets: ComfyLikeWidget[]) {
  return { widgets };
}

function makeState(nodeState: Record<string, unknown>, node?: unknown) {
  const raw = {
    nodeState: { ...nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
    lastRunSeed: null as number | null,
  };
  Object.defineProperty(raw, "node", { value: node, enumerable: false, configurable: true });
  return reactive(raw);
}

function seedPill(wrapper: VueWrapper, index: number) {
  return wrapper.findAll(".fil-w-seedrow-pill")[index];
}

describe("randomSeed()", () => {
  // 500 draws, not one: the old implementation cleared 999999999999 about once
  // in ten thousand tries, so a single sample would have passed against it.
  it("stays inside the range the widget declares", () => {
    const widget = seedWidget(-1, PROVIDER_SEED_MAX);
    for (let i = 0; i < 500; i += 1) {
      const seed = randomSeed(widget);
      expect(seed).toBeLessThanOrEqual(PROVIDER_SEED_MAX);
      // -1 is the "let the provider pick one" sentinel on those nodes, so a
      // *fixed* seed may never land on it even though the widget allows it.
      expect(seed).toBeGreaterThanOrEqual(0);
      expect(Number.isSafeInteger(seed)).toBe(true);
    }
  });

  it("keeps 64-bit seed widgets inside the exact-integer range", () => {
    const widget = seedWidget(0, LOCAL_SEED_MAX);
    for (let i = 0; i < 200; i += 1) {
      // Above MAX_SAFE_INTEGER the number shown in the panel is no longer the
      // number that reaches the prompt.
      expect(Number.isSafeInteger(randomSeed(widget))).toBe(true);
    }
  });

  it("falls back to the safe-integer range when the widget is unknown", () => {
    expect(Number.isSafeInteger(randomSeed(undefined))).toBe(true);
    expect(randomSeed(undefined)).toBeGreaterThanOrEqual(0);
  });
});

describe("clampSeed()", () => {
  it("folds a typed value into the node's range", () => {
    const widget = seedWidget(-1, PROVIDER_SEED_MAX);
    expect(clampSeed(9007199254740991, widget)).toBe(PROVIDER_SEED_MAX);
    expect(clampSeed(-5, widget)).toBe(0);
    expect(clampSeed(1234, widget)).toBe(1234);
  });

  it("keeps a deliberate 0", () => {
    expect(clampSeed(0, seedWidget(-1, PROVIDER_SEED_MAX))).toBe(0);
  });

  it("rounds rather than passing a fraction to an INT input", () => {
    expect(clampSeed(12.7, seedWidget(0, LOCAL_SEED_MAX))).toBe(12);
  });
});

describe("New fixed produces a seed the node accepts", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Optic Scanner stays under its provider-side maximum", async () => {
    const seed = seedWidget(-1, PROVIDER_SEED_MAX);
    const ctrl = { name: "control_after_generate", value: "randomize" };
    const state = makeState(
      { seed: -1, seed_mode: "random", prompt: "", negative_prompt: "", custom_style: "" },
      nodeWith(seed, ctrl),
    );
    const wrapper = mount(OpticScannerVue, { props: { state: state as never } });

    await seedPill(wrapper, 2).trigger("click"); // "New fixed"
    await nextTick();

    expect(state.nodeState.seed_mode).toBe("fixed");
    expect(state.nodeState.seed as number).toBeLessThanOrEqual(PROVIDER_SEED_MAX);
    expect(state.nodeState.seed as number).toBeGreaterThanOrEqual(0);
    // The value the prompt is built from is the widget's, not the panel's.
    expect(seed.value).toBe(state.nodeState.seed);
    // And the host must be told to leave it alone.
    expect(ctrl.value).toBe("fixed");
  });

  it("FiLSeed pins the widget and the control together", async () => {
    const seed = seedWidget(0, LOCAL_SEED_MAX);
    const ctrl = { name: "control_after_generate", value: "randomize" };
    const state = makeState({ seed: 0, mode: "random" }, nodeWith(seed, ctrl));
    const wrapper = mount(SeedVue, { props: { state: state as never } });

    await wrapper.findAll("button").at(2)!.trigger("click"); // 🎲 new fixed
    await nextTick();

    expect(state.nodeState.mode).toBe("fixed");
    expect(Number.isSafeInteger(state.nodeState.seed as number)).toBe(true);
    expect(seed.value).toBe(state.nodeState.seed);
    expect(ctrl.value).toBe("fixed");
  });
});

describe("a pinned seed of 0 survives", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  // `Number(x) || fallback` read 0 back as the fallback, and on Optic Scanner
  // that fallback is -1 — the one value that hands the seed back to the
  // provider. Dataset Forge already carried this fix; the older panels did not.
  it("Optic Scanner shows 0, not -1", () => {
    const state = makeState({ seed: 0, seed_mode: "fixed", prompt: "", negative_prompt: "", custom_style: "" });
    const wrapper = mount(OpticScannerVue, { props: { state: state as never } });
    const field = wrapper.find<HTMLInputElement>(".fil-w-seedrow-field");
    expect(field.element.value).toBe("0");
  });

  it("HiRes Fix shows 0 in its own-seed row", async () => {
    const state = makeState({ seed: 0, seed_mode: "fixed", use_same_seed: false });
    const wrapper = mount(HiResFixVue, { props: { state: state as never } });
    await nextTick();
    const field = wrapper.find<HTMLInputElement>(".fil-w-seedrow-field");
    expect(field.exists()).toBe(true);
    expect(field.element.value).toBe("0");
  });
});
