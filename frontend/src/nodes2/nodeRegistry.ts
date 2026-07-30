/**
 * Per-node frontend registration modules.
 *
 * Each module exports `{ id, register(nodeType, nodeData) }`.
 * `id` must match the Python `NODE_CLASS_MAPPINGS` key exactly.
 * `register` is called from `beforeRegisterNodeDef` in filExtension.ts.
 */
import type { ComfyNodeData } from "@/types/comfy";
import { seedNode } from "@/nodes2/nodes/seed";
import { providerNode } from "@/nodes2/nodes/provider";
import { scannerNode } from "@/nodes2/nodes/scanner";
import { cleanerNode } from "@/nodes2/nodes/cleaner";
import { upscaleNode } from "@/nodes2/nodes/upscale";
import { upscaleSimpleNode } from "@/nodes2/nodes/upscale_simple";
import { tileAssemblyNode } from "@/nodes2/nodes/tile_assembly";
import { ksamplerNode } from "@/nodes2/nodes/ksampler";
import { hiresfixNode } from "@/nodes2/nodes/hiresfix";
import { noiseControlNode } from "@/nodes2/nodes/noise_control";
import { decomposerNode } from "@/nodes2/nodes/decomposer";
import { styleMixerNode } from "@/nodes2/nodes/style_mixer";
import { colorWizardNode } from "@/nodes2/nodes/color_wizard";
import { switchNode } from "@/nodes2/nodes/switch";
import { datasetForgeNode } from "@/nodes2/nodes/dataset";

export interface NodeModule {
  id: string;
  register(nodeType: unknown, nodeData: ComfyNodeData): void | Promise<void>;
}

const modules: NodeModule[] = [
  seedNode,
  providerNode,
  scannerNode,
  cleanerNode,
  upscaleNode,
  upscaleSimpleNode,
  tileAssemblyNode,
  ksamplerNode,
  hiresfixNode,
  noiseControlNode,
  decomposerNode,
  styleMixerNode,
  colorWizardNode,
  switchNode,
  datasetForgeNode,
];

export const NODE_MODULES: Record<string, NodeModule> = Object.fromEntries(
  modules.map((nodeModule) => [nodeModule.id, nodeModule]),
);
