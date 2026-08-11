import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import HiResFixVue from "@/components/nodes/HiResFix.vue";
import { useToastStore } from "@/stores/toastStore";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown; lastRunSeed?: number | null } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
    lastRunSeed: overrides.lastRunSeed ?? null,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** A segmented control is identified by its label text; the option by its
 * (possibly emoji-prefixed) button text. */
function segmentedOption(wrapper: VueWrapper, sectionLabel: string, optionText: string) {
  const group = wrapper.findAll(".fil-w-segmented").find((g) => g.text().includes(sectionLabel));
  if (!group) throw new Error(`no segmented control labeled "${sectionLabel}"`);
  const btn = group.findAll("button.fil-w-seg").find((b) => b.text() === optionText);
  if (!btn) throw new Error(`no option "${optionText}" in "${sectionLabel}"`);
  return btn;
}

function seedPill(wrapper: VueWrapper, index: number) {
  return wrapper.findAll(".fil-w-seedrow-pill")[index];
}

describe("HiResFix.vue upscale type", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("shows the latent upscaler by default and hides the pixel one", () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Latent upscaler");
    expect(wrapper.text()).not.toContain("Pixel upscaler");
  });

  it("switches to the pixel upscaler when upscale type is 'pixel'", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    await segmentedOption(wrapper, "Upscale type", "pixel").trigger("click");
    await nextTick();
    expect(wrapper.text()).toContain("Pixel upscaler");
    expect(wrapper.text()).not.toContain("Latent upscaler");
  });

  // Confirmed against common/sampling.py's hires-fix helper: the "both" path
  // decodes to pixels and always drives the pixel upscaler — latent_upscaler
  // is only ever read on the exact "latent" branch — so the panel is right to
  // keep the latent dropdown hidden here, not an oversight.
  it("shows only the pixel upscaler for 'both' (latent_upscaler is unused on that path)", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    await segmentedOption(wrapper, "Upscale type", "both").trigger("click");
    await nextTick();
    expect(wrapper.text()).not.toContain("Latent upscaler");
    expect(wrapper.text()).toContain("Pixel upscaler");
  });
});

describe("HiResFix.vue advanced / ControlNet section", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("starts with the ADVANCED section collapsed but keeps Iterations in view", () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    expect(wrapper.text()).not.toContain("Hires checkpoint");
    // Iterations is an everyday control — it lives right after Hires steps,
    // not behind the ADVANCED fold.
    expect(wrapper.text()).toContain("Iterations");
  });

  it("expanding ADVANCED reveals the checkpoint/ControlNet controls, CN fields still hidden", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    const header = wrapper.findAll(".fil-w-section").find((h) => h.text().includes("ADVANCED"));
    expect(header).toBeTruthy();
    await header!.trigger("click");
    await nextTick();

    expect(wrapper.text()).toContain("Hires checkpoint");
    expect(wrapper.text()).toContain("Use ControlNet");
    expect(wrapper.text()).not.toContain("ControlNet model");
  });

  it("turning Use ControlNet on reveals the CN model/strength/preprocessor fields", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    await wrapper.findAll(".fil-w-section").find((h) => h.text().includes("ADVANCED"))!.trigger("click");
    await nextTick();

    await segmentedOption(wrapper, "Use ControlNet", "🕹️ ON").trigger("click");
    await nextTick();

    expect(wrapper.text()).toContain("ControlNet model");
    expect(wrapper.text()).toContain("Strength");
    expect(wrapper.text()).toContain("Preprocessor");
  });
});

describe("HiResFix.vue seed handling", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("hides the own-seed row while Seed source is 'same seed'", () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    expect(wrapper.find(".fil-w-seedrow").exists()).toBe(false);
  });

  it("reveals the own-seed row when Seed source switches to own", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState() as never } });
    await segmentedOption(wrapper, "Seed source", "🎲 own").trigger("click");
    await nextTick();
    expect(wrapper.find(".fil-w-seedrow").exists()).toBe(true);
  });

  it("pins control_after_generate to fixed while same-seed is on, switches to randomize for own+random", async () => {
    const ctrl = { name: "control_after_generate", value: "" };
    const node = { widgets: [ctrl] };
    const wrapper = mount(HiResFixVue, { props: { state: makeState({ node }) as never } });
    await nextTick();
    expect(ctrl.value).toBe("fixed");

    await segmentedOption(wrapper, "Seed source", "🎲 own").trigger("click");
    await nextTick();
    expect(ctrl.value).toBe("randomize");
  });

  it("newFixedSeed sets a positive fixed seed and pins control_after_generate", async () => {
    const state = makeState();
    const wrapper = mount(HiResFixVue, { props: { state: state as never } });
    await segmentedOption(wrapper, "Seed source", "🎲 own").trigger("click");
    await nextTick();

    await seedPill(wrapper, 2).trigger("click"); // "New fixed"
    await nextTick();

    expect(state.nodeState.seed_mode).toBe("fixed");
    expect(typeof state.nodeState.seed).toBe("number");
    expect(state.nodeState.seed as number).toBeGreaterThan(0);
    const field = wrapper.find<HTMLInputElement>(".fil-w-seedrow-field");
    expect(field.element.value).toBe(String(state.nodeState.seed));
  });

  it("useLastSeed warns when no last-run seed is recorded", async () => {
    const wrapper = mount(HiResFixVue, { props: { state: makeState({ lastRunSeed: null }) as never } });
    await segmentedOption(wrapper, "Seed source", "🎲 own").trigger("click");
    await nextTick();

    await seedPill(wrapper, 1).trigger("click"); // "Use last"
    await nextTick();

    const items = useToastStore().items;
    expect(items.some((i) => i.level === "warning" && i.text.includes("No last-run seed"))).toBe(true);
  });

  it("useLastSeed applies props.state.lastRunSeed as a fixed seed when present", async () => {
    const state = makeState({ lastRunSeed: 777 });
    const wrapper = mount(HiResFixVue, { props: { state: state as never } });
    await segmentedOption(wrapper, "Seed source", "🎲 own").trigger("click");
    await nextTick();

    await seedPill(wrapper, 1).trigger("click"); // "Use last"
    await nextTick();

    expect(state.nodeState.seed_mode).toBe("fixed");
    expect(state.nodeState.seed).toBe(777);
  });

  // Stock ComfyUI grays a linked seed widget out; the panel's seed source
  // choice and random/fixed pills would edit a value the link overwrites.
  it("locks the seed source and the own-seed row while the seed socket carries a link", async () => {
    const node = { widgets: [], inputs: [{ name: "seed", widget: {}, link: 7 }] };
    const state = makeState({ node, nodeState: { use_same_seed: false } });
    const wrapper = mount(HiResFixVue, { props: { state: state as never } });
    await nextTick();

    const group = wrapper.findAll(".fil-w-segmented").find((g) => g.text().includes("Seed source"))!;
    for (const b of group.findAll("button.fil-w-seg")) {
      expect((b.element as HTMLButtonElement).disabled).toBe(true);
    }
    for (const p of wrapper.findAll(".fil-w-seedrow-pill")) {
      expect((p.element as HTMLButtonElement).disabled).toBe(true);
    }
    const field = wrapper.find<HTMLInputElement>(".fil-w-seedrow-field");
    expect(field.element.disabled).toBe(true);
  });
});
