import { describe, it, expect, beforeEach } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import PromptDirectorPanel from "@/components/nodes/PromptDirectorPanel.vue";

function makeState(overrides: { nodeState?: Record<string, unknown>; node?: unknown } = {}) {
  const raw = {
    nodeState: { instruction: "", source_prompt: "", seed: 0, ...overrides.nodeState },
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: overrides.node, enumerable: false, configurable: true });
  return reactive(raw);
}

/** The node as LiteGraph hands it to the panel: every director input, with the given links. */
function directorNode(links: Record<string, number | null> = {}) {
  const names = ["config", "instruction", "source_prompt", "language", "seed", "mode", "camera_motion"];
  return {
    widgets: [],
    inputs: names.map((name) => ({ name, widget: name === "config" ? undefined : {}, link: links[name] ?? null })),
  };
}

describe("PromptDirectorPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("shows the instruction, the source prompt and the seed row", () => {
    const wrapper = mount(PromptDirectorPanel, { props: { state: makeState({ node: directorNode() }) as never } });
    expect(wrapper.findAll("textarea")).toHaveLength(2);
    expect(wrapper.text()).toContain("Seed");
  });

  it("locks the seed field while a link drives it", async () => {
    const node = directorNode({ seed: 7 });
    const wrapper = mount(PromptDirectorPanel, { props: { state: makeState({ node }) as never } });
    await nextTick();
    const seedInputs = wrapper.findAll("input").filter((i) => (i.element as HTMLInputElement).value === "0");
    expect(seedInputs.length).toBeGreaterThan(0);
    for (const input of seedInputs) {
      expect((input.element as HTMLInputElement).disabled).toBe(true);
    }
  });

  it("leaves the seed field editable when nothing is wired to it", async () => {
    const node = directorNode();
    const wrapper = mount(PromptDirectorPanel, { props: { state: makeState({ node }) as never } });
    await nextTick();
    const seedInputs = wrapper.findAll("input").filter((i) => (i.element as HTMLInputElement).value === "0");
    expect(seedInputs.length).toBeGreaterThan(0);
    for (const input of seedInputs) {
      expect((input.element as HTMLInputElement).disabled).toBe(false);
    }
  });

  it("locks the instruction box while a text link drives it", async () => {
    const node = directorNode({ instruction: 3 });
    const wrapper = mount(PromptDirectorPanel, { props: { state: makeState({ node }) as never } });
    await nextTick();
    const instruction = wrapper.findAll("textarea")[0].element as HTMLTextAreaElement;
    expect(instruction.disabled || instruction.readOnly).toBe(true);
  });
});
