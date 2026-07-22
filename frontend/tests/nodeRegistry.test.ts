import { describe, it, expect } from "vitest";
import { NODE_MODULES } from "@/nodes2/nodeRegistry";

const CANONICAL_IDS = [
  "FiLSeed",
  "FiLProviderLoader",
  "FiLOpticScanner",
  "FiLNeuroCleaner",
  "FiLBeforeAfterCompare",
  "FiLUpscaleTileCalc",
  "FiLUpscaleSimple",
  "FiLTileAssembly",
  "FiLKSampler",
  "FiLHighResFix",
  "FiLNoiseControl",
];

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
});