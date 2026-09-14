import { describe, it, expect, beforeEach } from "vitest";
import { reactive } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import TileAssemblyPanel from "@/components/nodes/TileAssemblyPanel.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: {
      blend_mode: "Cosine (Smooth)",
      feather_strength: 1.0,
      color_match: "Match Overlap Means",
      ...overrides.nodeState,
    },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

describe("TileAssemblyPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders controls for blend curve, feather depth, and color match", () => {
    const wrapper = mount(TileAssemblyPanel, { props: { state: makeState() as never } });
    expect(wrapper.text()).toContain("Blend curve");
    expect(wrapper.text()).toContain("Feather depth");
    expect(wrapper.text()).toContain("Color match");
  });

  it("provides options for cosine, linear, and smoothstep curves", () => {
    const wrapper = mount(TileAssemblyPanel, { props: { state: makeState() as never } });
    const text = wrapper.text();
    expect(text).toContain("Cosine");
    expect(text).toContain("Linear");
    expect(text).toContain("Smoothstep");
  });

  it("updates blend_mode when a different curve is selected", async () => {
    const state = makeState();
    const wrapper = mount(TileAssemblyPanel, { props: { state: state as never } });
    const select = wrapper.findAll("select")[0];
    await select.setValue("Linear");
    expect(state.nodeState.blend_mode).toBe("Linear");
  });
});

