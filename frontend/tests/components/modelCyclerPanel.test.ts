/**
 * What the Model Cycler panel writes into `model_list` — the one value the
 * backend and the run count are both read from.
 *
 * A row switched off has to leave as a `#` comment: `node_model_cycler.py`
 * skips lines whose first character is `#`, and anything the panel fails to
 * mark stays in the cycle. Reported from a live graph on 2026-08-12: two
 * models with one of them off, and Queue produced two runs.
 *
 * The panel is mounted for real rather than reasoning about its handlers,
 * because the write happens through a chain — toggle -> `toggleItemEnabled`
 * -> `syncToNodeState` -> proxy -> native widget — and every link of it is
 * where the mark could be lost.
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { reactive, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ModelCyclerPanel from "@/components/nodes/ModelCyclerPanel.vue";

// The panel asks the backend for the installed models on mount; this test is
// about the list the user built, not about the folder scan.
vi.mock("@/api/client", () => ({
  getJson: vi.fn(async () => ({ models: ["modelA.safetensors", "modelB.safetensors"] })),
}));

interface FakeWidget {
  name: string;
  value: unknown;
}

function makeNode(modelList: string): { widgets: FakeWidget[]; inputs: [] } {
  return {
    widgets: [
      { name: "model_list", value: modelList },
      { name: "source_mode", value: "Checkpoints" },
    ],
    inputs: [],
  };
}

function makeState(node: unknown, modelList: string) {
  const raw = {
    nodeState: { model_list: modelList, source_mode: "Checkpoints" } as Record<string, unknown>,
    initialValues: {},
    ui: {} as Record<string, unknown>,
  };
  Object.defineProperty(raw, "node", { value: node, enumerable: false, configurable: true });
  return reactive(raw);
}

function widgetValue(node: { widgets: FakeWidget[] }, name: string): unknown {
  return node.widgets.find((w) => w.name === name)?.value;
}

describe("ModelCyclerPanel.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("comments out a row the user switches off, in the state and on the widget", async () => {
    const list = "modelA.safetensors\nmodelB.safetensors";
    const node = makeNode(list);
    const state = makeState(node, list);
    const wrapper = mount(ModelCyclerPanel, { props: { state: state as never } });
    await nextTick();

    const rows = wrapper.findAll(".fil-cycler-row");
    expect(rows).toHaveLength(2);

    // The switch itself, not the `.fil-w-toggle` wrapper around it — a click
    // on the wrapper does nothing, and would leave `model_list` untouched for
    // a reason that has nothing to do with what is under test.
    await rows[1].find("button[role='switch']").trigger("click");
    await nextTick();

    // Proof the click landed before anything is concluded from the value.
    expect(wrapper.findAll(".fil-cycler-row")[1].classes()).toContain("disabled");

    expect(state.nodeState.model_list).toBe("modelA.safetensors\n# modelB.safetensors");
    expect(widgetValue(node, "model_list")).toBe("modelA.safetensors\n# modelB.safetensors");
  });

  it("counts only the rows that are still on when it says how many runs it takes", async () => {
    const list = "modelA.safetensors\n# modelB.safetensors";
    const node = makeNode(list);
    const wrapper = mount(ModelCyclerPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    expect(wrapper.find(".fil-cycler-queue-btn").text()).toContain("(1)");
  });

  it("shows which model the last run used, once the node reports it", async () => {
    const list = "modelA.safetensors\nmodelB.safetensors";
    const node = makeNode(list);
    const state = makeState(node, list);
    const wrapper = mount(ModelCyclerPanel, { props: { state: state as never } });
    await nextTick();

    // Nothing to show before a run — no stale position invented from `index`.
    expect(wrapper.find(".fil-cycler-now").exists()).toBe(false);

    // The hand-off the node module makes from the backend's `ui.fil_cycler`.
    (state.ui.onCycleRun as (r: unknown) => void)({
      position: 2,
      total: 2,
      model_name: "modelB.safetensors",
      clean_name: "modelB",
    });
    await nextTick();

    const now = wrapper.find(".fil-cycler-now");
    expect(now.text()).toContain("2/2");
    expect(now.text()).toContain("modelB");
  });

  it("picks up a run that finished before it was mounted", async () => {
    const list = "modelA.safetensors\nmodelB.safetensors";
    const node = makeNode(list) as ReturnType<typeof makeNode> & { _filCyclerLastRun?: unknown };
    node._filCyclerLastRun = {
      position: 1,
      total: 2,
      model_name: "modelA.safetensors",
      clean_name: "modelA",
    };
    const wrapper = mount(ModelCyclerPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    expect(wrapper.find(".fil-cycler-now").text()).toContain("1/2");
  });

  it("reads a row back as off when the workflow is reloaded", async () => {
    const list = "modelA.safetensors\n# modelB.safetensors";
    const node = makeNode(list);
    const wrapper = mount(ModelCyclerPanel, { props: { state: makeState(node, list) as never } });
    await nextTick();

    const rows = wrapper.findAll(".fil-cycler-row");
    expect(rows).toHaveLength(2);
    expect(rows[1].classes()).toContain("disabled");
    // The `#` is bookkeeping, not part of the model's name.
    expect(rows[1].text()).not.toContain("#");
  });
});
