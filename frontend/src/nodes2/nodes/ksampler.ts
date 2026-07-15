import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

export const ksamplerNode: NodeModule = {
  id: "FiLKSampler",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }],
    });

    // Unlike other FiL nodes, FiLKSampler intentionally keeps every native
    // ComfyUI widget visible (seed, control_after_generate, steps, cfg,
    // sampler_name, scheduler, denoise, preview_method, vae_decode) instead
    // of hiding them behind a custom Vue panel. Each one then behaves like a
    // stock KSampler widget — right-click "Convert Widget to Input" (or drag
    // directly onto its socket dot) lets the user feed seed/sampler_name/
    // scheduler/etc. from another node.
    //
    // On top of that, the backend schema (nodes/node_ksampler.py) exposes
    // three optional typed sockets — sampler (SAMPLER), sigmas (SIGMAS) and
    // noise (NOISE) — that render automatically here. When wired they override
    // the matching widgets, so the node can be driven by the advanced-sampling
    // ecosystem (KSamplerSelect / BasicScheduler / RandomNoise).
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
