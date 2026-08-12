import { defineAsyncComponent } from "vue";
import type { ComfyNodeData } from "@/types/comfy";
import type { NodeModule } from "@/nodes2/nodeRegistry";
import { registerStyledNode } from "@/nodes2/nodeStyle";
import { addFilDomWidget, unmountAllFilWidgets } from "@/nodes2/domWidgetHost";
import { createSyncedNodeState, findFilWidget, hideNativeWidget, sanitizeWidgetValue } from "@/nodes2/util";
import { exposeWidgetInputSockets, installWidgetSocketSync } from "@/nodes2/widgetInputSockets";
import { applyFxComposables } from "@/nodes2/applyFxComposables";

const CinemaRigVue = defineAsyncComponent(() => import("@/components/nodes/CinemaRig.vue"));

/**
 * Widgets that may also be driven from the graph. The Vue panel hides the
 * native widget, which hides its input slot with it — `exposeWidgetInputSockets`
 * gives the slot a row and a visible dot back.
 *
 * `scene_prompt` only: the rig axes are finite enumerations a user picks, not
 * values another node produces; the scene is the one free-text feed.
 */
export const CINEMA_RIG_SOCKET_INPUTS = ["scene_prompt"];

const stringDefaults: Record<string, string> = {
  scene_prompt: "",
  mode: "Original Shot",
  setup_mode: "Director Preset",
  camera: "RED V-RAPTOR XL",
  lens: "Helios 44-2 (Vintage)",
  focal_length: "50mm (Human Eye)",
  aperture: "f/11 (Deep Focus)",
  camera_angle: "Auto / Neutral",
  shot_framing: "Auto / Neutral",
  camera_movement: "Static (Tripod Locked)",
  lighting_setup: "Auto / Natural",
  optics_filter: "None / Pure Optic",
  director_preset: "Custom Rig",
  color_grading: "Teal & Orange (Blockbuster)",
  polish_mode: "Deterministic (Fast)",
};

const boolDefaults: Record<string, boolean> = {
  enable_grading: true,
};

export const cinemaRigNode: NodeModule = {
  id: "FiLCinemaRig",
  register(nodeType: unknown, _nodeData: ComfyNodeData): void {
    registerStyledNode(nodeType, {
      minSize: [300, 380],
      initialWidth: 300,
      family: "base",
      description: "Assembles a cinematic shot prompt from camera, lens, focal length, aperture and color grade axes.",
      badges: [{ text: "cinema", color: "#f7768e", text_color: "#0b0e14" }],
    });

    const proto = nodeType as {
      prototype: {
        onNodeCreated?: (...a: unknown[]) => unknown;
        onConfigure?: (...a: unknown[]) => unknown;
        onRemoved?: (...a: unknown[]) => unknown;
      };
    };
    const p = proto.prototype;

    const syncAll = (node: unknown, target: Record<string, unknown>) => {
      for (const name of Object.keys(stringDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "string", stringDefaults[name]);
      }
      for (const name of Object.keys(boolDefaults)) {
        target[name] = sanitizeWidgetValue(findFilWidget(node, name), "boolean", boolDefaults[name]);
      }
    };

    const originalCreated = p.onNodeCreated;
    p.onNodeCreated = function (this: unknown, ...args: unknown[]) {
      const result = originalCreated?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCinemaRigState?: unknown };
      const initial: Record<string, unknown> = {};
      syncAll(node, initial);
      for (const name of [...Object.keys(stringDefaults), ...Object.keys(boolDefaults)]) {
        hideNativeWidget(node, name);
      }
      const state = {
        nodeState: createSyncedNodeState(node, initial),
        initialValues: { ...initial },
        ui: {},
      };
      Object.defineProperty(state, "node", { value: node, enumerable: false, configurable: true });
      node._filCinemaRigState = state;
      addFilDomWidget(node, "fil_cinema_rig_view", CinemaRigVue, { state, height: 380 });
      exposeWidgetInputSockets(this, CINEMA_RIG_SOCKET_INPUTS);
      return result;
    };

    const originalConfigure = p.onConfigure;
    p.onConfigure = function (this: unknown, ...args: unknown[]) {
      const result = originalConfigure?.apply(this, args);
      const node = this as { widgets?: unknown[]; _filCinemaRigState?: { nodeState: Record<string, unknown> } };
      const state = node._filCinemaRigState;
      if (!state) return result;
      syncAll(node, state.nodeState);
      exposeWidgetInputSockets(this, CINEMA_RIG_SOCKET_INPUTS);
      return result;
    };

    const originalRemoved = p.onRemoved;
    p.onRemoved = function (this: unknown, ...args: unknown[]) {
      unmountAllFilWidgets(this);
      return originalRemoved?.apply(this, args);
    };

    installWidgetSocketSync(p, CINEMA_RIG_SOCKET_INPUTS, "_filCinemaRigState");
    applyFxComposables(nodeType as { prototype?: unknown });
  },
};
