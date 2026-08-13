/**
 * A saved LoRA stack has to survive being loaded back.
 *
 * LiteGraph builds the node first and fills its widgets afterwards, so the
 * panel state captured in `onNodeCreated` holds the defaults, and `onConfigure`
 * is the one chance to copy the saved widget values into it. `lora_loader.ts`
 * had the `onConfigure` hook but never parked the state on the node, so the
 * hook found nothing and returned early: reopening a workflow showed an empty
 * stack while `lora_list` still held the user's LoRAs, and the first edit in
 * the panel wrote that empty view back over them.
 *
 * `nodeStateMirror.test.ts` could not catch this — it skips any module whose
 * state it cannot find on the node, which is exactly the defect.
 */
import { describe, it, expect, vi } from "vitest";
import { loraLoaderNode } from "@/nodes2/nodes/lora_loader";
import { createNode } from "./fakes/comfyHost";

vi.mock("@/nodes2/domWidgetHost", () => ({
  addFilDomWidget: () => ({ name: "fil_lora_loader_view", value: {} }),
  unmountAllFilWidgets: () => {},
}));

interface Registrable {
  prototype: {
    onNodeCreated?: (...a: unknown[]) => unknown;
    onConfigure?: (...a: unknown[]) => unknown;
  };
}

const SAVED_STACK = "style_v1.safetensors:0.80:0.80\n# cyber_v2.safetensors:1.00:1.00";

describe("FiLLoraLoader across a workflow reload", () => {
  it("copies the saved widget values into the panel state on configure", () => {
    const nodeType = { prototype: {} } as Registrable;
    loraLoaderNode.register(nodeType as never, { name: "FiLLoraLoader" } as never);

    const node = createNode({
      comfyClass: "FiLLoraLoader",
      id: 1,
      widgets: [
        { name: "lora_list", value: "" },
        { name: "strength_model", value: 1.0 },
        { name: "strength_clip", value: 1.0 },
      ],
    });

    // Creation happens against the defaults, as it does in the host.
    nodeType.prototype.onNodeCreated?.call(node);
    const state = (node as unknown as { _filCyclerState?: { nodeState: Record<string, unknown> } })
      ._filCyclerState;
    expect(
      state,
      "the module never parked its state on the node, so nothing can read it back",
    ).toBeTruthy();

    // Then the saved workflow fills the widgets and configure runs.
    const widgets = node.widgets as Array<{ name: string; value: unknown }>;
    widgets.find((w) => w.name === "lora_list")!.value = SAVED_STACK;
    nodeType.prototype.onConfigure?.call(node, {});

    expect(state!.nodeState.lora_list).toBe(SAVED_STACK);
  });
});
