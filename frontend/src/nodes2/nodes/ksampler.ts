import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { applyFxComposables } from "@/nodes2/applyFxComposables";
import { findFilWidget } from "@/nodes2/util";

// Which widget(s) each optional advanced-sampling socket makes redundant.
// When the socket is wired the widget value is silently ignored by the
// backend (see common/sampling.py::sample_unified), so we hide it to avoid a
// dead, misleading control — mirroring ComfyUI's own "convert widget to input"
// behaviour where the widget disappears once it becomes a socket.
const SOCKET_OVERRIDES: Record<string, string[]> = {
  sampler: ["sampler_name"],
  sigmas: ["steps", "scheduler", "denoise"],
  // ComfyUI auto-adds `control_after_generate` next to any widget named "seed";
  // both are meaningless once noise is fed from a socket.
  noise: ["seed", "control_after_generate"],
};

interface LGInput {
  name?: string;
  link?: number | null;
}

interface LGNodeLike {
  inputs?: LGInput[];
  size?: [number, number];
  computeSize?: () => [number, number];
  setSize?: (s: [number, number]) => void;
  setDirtyCanvas?: (fg: boolean, bg: boolean) => void;
}

function isInputConnected(node: LGNodeLike, name: string): boolean {
  const inp = node.inputs?.find((i) => i.name === name);
  return inp != null && inp.link != null;
}

/**
 * Hide every widget that a currently-wired socket overrides, and re-show it
 * when the socket is disconnected. Called on creation, on load (via
 * onConnectionsChange when links restore) and on every connect/disconnect.
 */
function syncSocketOverrides(node: LGNodeLike): void {
  for (const [socket, widgets] of Object.entries(SOCKET_OVERRIDES)) {
    const hide = isInputConnected(node, socket);
    for (const wname of widgets) {
      const w = findFilWidget(node, wname);
      if (w) (w as { hidden?: boolean }).hidden = hide;
    }
  }
  // Collapse the freed vertical space (LiteGraph's computeSize skips hidden
  // widgets), keeping any width the user chose.
  if (node.computeSize && node.setSize && node.size) {
    const cs = node.computeSize();
    node.setSize([Math.max(node.size[0], cs[0]), cs[1]]);
  }
  node.setDirtyCanvas?.(true, true);
}

export const ksamplerNode: NodeModule = {
  id: "FiLKSampler",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [270, 260],
      family: "sampling",
      description: "Full sampler/scheduler set, passthrough outputs, preview, HighRes-fix script.",
      badges: [{ text: "sampler", color: "#7aa2f7", text_color: "#0b0e14" }],
    });

    // FiLKSampler intentionally keeps every native ComfyUI widget visible
    // (seed, control_after_generate, steps, cfg, sampler_name, scheduler,
    // denoise, preview_method, vae_decode) instead of hiding them behind a
    // custom Vue panel. Each behaves like a stock KSampler widget — right-click
    // "Convert Widget to Input" (or drag onto its socket dot) feeds it from
    // another node.
    //
    // On top of that the backend schema (nodes/node_ksampler.py) exposes three
    // optional typed sockets — sampler (SAMPLER), sigmas (SIGMAS) and noise
    // (NOISE) — driven by the advanced-sampling ecosystem (KSamplerSelect /
    // BasicScheduler / RandomNoise). When one is wired it overrides the
    // matching widget(s), and syncSocketOverrides() hides those now-dead
    // widgets so the node never shows a control that silently does nothing.
    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConnectionsChange?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      syncSocketOverrides(this as LGNodeLike);
      return result;
    };

    const originalConnChange = p.onConnectionsChange;
    p.onConnectionsChange = function (this: unknown, ...args: unknown[]) {
      const result = originalConnChange?.apply(this, args);
      syncSocketOverrides(this as LGNodeLike);
      return result;
    };

    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
