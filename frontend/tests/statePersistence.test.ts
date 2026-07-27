import { describe, it, expect } from "vitest";
import { nextTick, reactive, watch } from "vue";
import { createSyncedNodeState } from "@/nodes2/util";
import {
  FIL_STATE_KEY,
  installFilStatePersistence,
  restoreFilState,
} from "@/nodes2/statePersistence";

/** A node stub with the two things the helper touches: widgets and onSerialize. */
function makeNode() {
  return {
    widgets: [
      { name: "prompt", value: "" },
      { name: "response_format", value: "text" },
    ],
    onSerialize: undefined as ((o: Record<string, unknown>) => void) | undefined,
  };
}

function makeState(node: unknown) {
  return {
    nodeState: createSyncedNodeState(node, { prompt: "", response_format: "text" }),
    ui: {} as Record<string, unknown>,
    lastRunSeed: null as number | null,
  };
}

describe("panel state persistence", () => {
  it("writes the panel state onto the serialized node", () => {
    const node = makeNode();
    const state = makeState(node);
    installFilStatePersistence(node, state);

    state.nodeState.prompt = "a cat";
    state.ui.collapsed_agent = true;

    const o: Record<string, any> = {};
    node.onSerialize!(o);
    expect(o[FIL_STATE_KEY].nodeState.prompt).toBe("a cat");
    expect(o[FIL_STATE_KEY].ui.collapsed_agent).toBe(true);
  });

  it("chains onto an onSerialize the node already had", () => {
    const node = makeNode();
    let ran = false;
    node.onSerialize = () => { ran = true; };
    installFilStatePersistence(node, makeState(node));

    node.onSerialize!({});
    expect(ran).toBe(true);
  });

  // The reason this key exists: ComfyUI's `migrateWidgetsValues` drops the
  // `widgets_values` entries at every force_input index whenever its mask
  // happens to be as long as the saved array, which shifts every value after
  // it onto the wrong widget. Optic Scanner meets that condition, so the
  // restore has to come from a name-keyed payload instead.
  it("restores values that arrived shifted onto the native widgets", () => {
    const node = makeNode();
    const state = makeState(node);
    // What a shifted positional restore leaves behind.
    state.nodeState.prompt = "";
    state.nodeState.response_format = "";

    const restored = restoreFilState(state, {
      [FIL_STATE_KEY]: {
        nodeState: { prompt: "a cat", response_format: "text" },
        ui: { collapsed_agent: true },
        lastRunSeed: 42,
      },
    });

    expect(restored).toBe(true);
    expect(state.nodeState.prompt).toBe("a cat");
    expect(state.ui.collapsed_agent).toBe(true);
    expect(state.lastRunSeed).toBe(42);
    // …and the native widgets the prompt builder reads are corrected too.
    expect(node.widgets[0].value).toBe("a cat");
    expect(node.widgets[1].value).toBe("text");
  });

  it("reports nothing to restore for a workflow saved without the key", () => {
    const state = makeState(makeNode());
    expect(restoreFilState(state, {})).toBe(false);
    expect(restoreFilState(state, undefined)).toBe(false);
  });

  it("notifies the mounted panel instead of only mutating the raw object", async () => {
    const node = makeNode();
    const state = makeState(node);
    // How addFilDomWidget mounts the component.
    const mounted = reactive(state);
    const seen: unknown[] = [];
    watch(() => mounted.nodeState.prompt, (v) => seen.push(v));

    restoreFilState(state, { [FIL_STATE_KEY]: { nodeState: { prompt: "a cat" } } });
    await nextTick();

    expect(seen).toEqual(["a cat"]);
  });
});
