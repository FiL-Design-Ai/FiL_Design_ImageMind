import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CinemaRig from "@/components/nodes/CinemaRig.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

function segByLabel(wrapper: ReturnType<typeof mount>, label: string) {
  const btn = wrapper.findAll("button.fil-w-seg").find((b) => b.text().includes(label));
  if (!btn) throw new Error(`no segmented button containing "${label}"`);
  return btn;
}

function toggleByLabel(wrapper: ReturnType<typeof mount>, label: string) {
  const btn = wrapper.findAll("button.fil-w-switch").find((b) => b.attributes("aria-label") === label);
  if (!btn) throw new Error(`no toggle labeled "${label}"`);
  return btn;
}

function sceneTextarea(wrapper: ReturnType<typeof mount>) {
  const ta = wrapper.findAll("textarea").find((t) => t.attributes("placeholder")?.includes("frame"));
  if (!ta) throw new Error("no scene textarea");
  return ta;
}

describe("CinemaRig.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("keeps the scene editable in Original Shot", () => {
    const wrapper = mount(CinemaRig, { props: { state: makeState() as never } });
    expect(sceneTextarea(wrapper).attributes("disabled")).toBeUndefined();
  });

  it("locks the scene in Reshoot — the reference image carries it", async () => {
    // node_cinema_rig.py drops scene_prompt in Reshoot mode, so the field must
    // read as inert instead of pretending to matter.
    const wrapper = mount(CinemaRig, { props: { state: makeState() as never } });
    await segByLabel(wrapper, "Reshoot").trigger("click");
    await nextTick();
    expect(sceneTextarea(wrapper).attributes("disabled")).toBeDefined();
  });

  it("stores the mode as the raw backend value, not the translated label", async () => {
    const state = makeState();
    const wrapper = mount(CinemaRig, { props: { state: state as never } });
    await segByLabel(wrapper, "Reshoot").trigger("click");
    expect(state.nodeState.mode).toBe("Reshoot");
  });

  it("hides the grade picker while grading is off", async () => {
    const state = makeState({ nodeState: { setup_mode: "Custom Hardware", enable_grading: false } });
    const wrapper = mount(CinemaRig, { props: { state: state as never } });
    await nextTick();
    expect(wrapper.text()).not.toContain("Grade");
  });

  it("reveals the grade picker when grading is switched on", async () => {
    const state = makeState({ nodeState: { setup_mode: "Custom Hardware", enable_grading: false } });
    const wrapper = mount(CinemaRig, { props: { state: state as never } });
    await toggleByLabel(wrapper, "🎨 Color grade").trigger("click");
    await nextTick();
    expect(state.nodeState.enable_grading).toBe(true);
    expect(wrapper.text()).toContain("Grade");
  });

  it("toggles setup_mode between Director Preset and Custom Hardware", async () => {
    const state = makeState();
    const wrapper = mount(CinemaRig, { props: { state: state as never } });
    expect(wrapper.text()).not.toContain("📷 Camera");
    await segByLabel(wrapper, "Manual").trigger("click");
    await nextTick();
    expect(state.nodeState.setup_mode).toBe("Custom Hardware");
    expect(wrapper.text()).toContain("📷 Camera");
  });
});
