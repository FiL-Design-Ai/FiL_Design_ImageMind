import { describe, it, expect } from "vitest";
import { NODE_MODULES } from "@/nodes2/nodeRegistry";
import { styleMixerNode } from "@/nodes2/nodes/style_mixer";
import { decomposerNode } from "@/nodes2/nodes/decomposer";
import { colorWizardNode } from "@/nodes2/nodes/color_wizard";
import contracts from "@/api/contracts.json";

// Derived from the generated backend contracts, not hand-maintained: a node
// added to the registry without a contract (or vice versa) must fail here.
const CANONICAL_IDS: string[] = Object.keys(contracts.node_ids);

describe("node registry", () => {
  it("registers all canonical node ids", () => {
    for (const id of CANONICAL_IDS) {
      expect(NODE_MODULES[id], `missing ${id}`).toBeDefined();
      expect(typeof NODE_MODULES[id].register).toBe("function");
    }
  });

  it("does not register stray nodes", () => {
    const local = new Set(Object.keys(NODE_MODULES));
    for (const id of local) {
      expect(CANONICAL_IDS).toContain(id);
    }
  });

  it("registers FiLStyleMixer node module properly", () => {
    const mockNodeType = { prototype: {} };
    const mockNodeData = {
      name: "FiLStyleMixer",
      category: "FiL_Design_Ai/Styling",
      input: { required: {} },
      output: ["STRING", "STRING"],
      output_name: ["styled_prompt", "style_overlay"],
    };

    expect(() => styleMixerNode.register(mockNodeType, mockNodeData as any)).not.toThrow();
  });

  it("registers FiLImageDecomposer node module properly", () => {
    const mockNodeType = { prototype: {} };
    const mockNodeData = {
      name: "FiLImageDecomposer",
      category: "FiL_Design_Ai/Analysis",
      input: { required: {} },
      output: ["STRING", "STRING", "STRING", "STRING", "STRING"],
      output_name: ["subject", "lighting", "composition", "style", "full_prompt"],
    };

    expect(() => decomposerNode.register(mockNodeType, mockNodeData as any)).not.toThrow();
  });

  it("registers FiLColorWizard node module properly", () => {
    const mockNodeType = { prototype: {} };
    const mockNodeData = {
      name: "FiLColorWizard",
      category: "FiL_Design_Ai/Image",
      input: { required: {} },
      output: ["IMAGE"],
      output_name: ["image"],
    };

    expect(() => colorWizardNode.register(mockNodeType, mockNodeData as any)).not.toThrow();
  });
});
