import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import KSamplerPanel from "@/components/nodes/KSamplerPanel.vue";

/**
 * FiLKSampler kept its native ComfyUI widgets until now, and the reason it was
 * allowed to is the reason this file exists: a KSampler panel is only an
 * improvement if it drives the *same* values the stock widgets did. Every test
 * here is about not diverging from the node's schema.
 */

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** A node whose sampler list is not the one any literal in the panel could hold. */
function nodeWithSamplers(values: string[]) {
  return {
    widgets: [
      { name: "sampler_name", value: values[0], options: { values } },
      { name: "scheduler", value: "karras", options: { values: ["karras", "sgm_uniform"] } },
    ],
    inputs: [],
  };
}

describe("KSamplerPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("reads the sampler list from the running ComfyUI, not from a literal", () => {
    // Sampler packs add entries; a hardcoded list would hide every sampler the
    // panel had not been told about, which is worse than the plain widget was.
    const node = nodeWithSamplers(["res_2m", "gradient_estimation", "euler"]);
    const wrapper = mount(KSamplerPanel, { props: { state: makeState({ node }) as never } });
    const options = wrapper.findAll("select")[1].findAll("option").map((o) => o.text());
    expect(options).toEqual(["res_2m", "gradient_estimation", "euler"]);
  });

  it("keeps control_after_generate as one of ComfyUI's own four values", () => {
    const wrapper = mount(KSamplerPanel, { props: { state: makeState() as never } });
    const options = wrapper.findAll("select")[0].findAll("option").map((o) => o.text());
    expect(options).toEqual(["fixed", "increment", "decrement", "randomize"]);
  });

  it("starts with the advanced fields folded away", () => {
    const wrapper = mount(KSamplerPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Steps");
    expect(wrapper.text()).not.toContain("Bongmath");
  });

  it("shows eta, bongmath, preview and vae_decode once advanced is opened", async () => {
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    (state.ui as Record<string, unknown>).collapsed_advanced = false;
    await nextTick();
    for (const label of ["Eta", "Bongmath", "Preview", "VAE decode"]) {
      expect(wrapper.text()).toContain(label);
    }
  });

  it("writes an edited value back under the widget's own name", async () => {
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    const stepsInput = wrapper.findAll("input.fil-w-num")[1];
    await stepsInput.trigger("focus");
    await stepsInput.setValue("35");
    await stepsInput.trigger("keydown", { key: "Enter" });
    expect(state.nodeState.steps).toBe(35);
  });

  it("falls back to the schema default rather than NaN for an unreadable value", () => {
    // A workflow saved by an older build can hold a string here; Number("") is
    // 0 and Number("x") is NaN, and either one silently becomes the sampled
    // step count.
    const state = makeState({ nodeState: { steps: "not a number" } });
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    expect((wrapper.findAll("input.fil-w-num")[1].element as HTMLInputElement).value).toBe("20");
  });

  it("writes the seed under its own name, the field the prompt is built from", async () => {
    // The panel's only seed path is the generic numberField, which writes
    // nodeState and lets createSyncedNodeState carry it to the native widget.
    // Its two siblings, HiResFix and OpticScanner, also write the widget by
    // hand; this one does not, so nothing else in the suite covered the seed
    // reaching anything at all. tests/nodeStateMirror.test.ts guards the other
    // half — that the mirror is installed for this module.
    const state = makeState();
    const wrapper = mount(KSamplerPanel, { props: { state: state as never } });
    const seedInput = wrapper.findAll("input.fil-w-num")[0];
    await seedInput.trigger("focus");
    await seedInput.setValue("123456");
    await seedInput.trigger("keydown", { key: "Enter" });
    expect(state.nodeState.seed).toBe(123456);
  });
});
