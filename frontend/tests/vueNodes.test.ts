/**
 * What ComfyUI's Vue renderer (Nodes 2.0) would put on a FiL node.
 *
 * The pack shipped this mode broken for months with a fully green suite, so
 * these tests are written against the host's own rules rather than ours:
 * `vueRenderedWidgets()` in `fakes/comfyHost.ts` reimplements
 * `shouldRenderAsVue` + `isWidgetVisible` from comfyui_frontend_package 1.48.7,
 * and every assertion below asks it "what does the user see", not "did we set
 * our flag".
 *
 * Two failures it exists to catch, both real:
 *   1. The panel marked `canvasOnly`, which core reads as "never render this
 *      under Vue" — every FiL node lost its whole UI and showed the raw widget
 *      list instead.
 *   2. Widgets hidden via `widget.hidden` only. The Vue renderer reads
 *      `widget.options.hidden`, so all the fields the panel replaces came back
 *      as live rows above it — 🎬 Cinema Rig at nine duplicated rows and twice
 *      the height.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { defineComponent, h } from "vue";
import { addFilDomWidget } from "@/nodes2/domWidgetHost";
import { hideNativeWidget, hideWidget } from "@/nodes2/util";
import {
  FakeResizeObserver,
  createNode,
  createWidgetNode,
  vueRenderedWidgets,
  type FakeWidget,
} from "./fakes/comfyHost";

const Panel = defineComponent({ name: "TestPanel", render: () => h("div", "panel") });

beforeEach(() => {
  FakeResizeObserver.install();
});
afterEach(() => {
  vi.resetModules();
});

describe("the panel itself under the Vue renderer", () => {
  it("is rendered on the node body, not filtered out of it", () => {
    const node = createWidgetNode();

    const controller = addFilDomWidget(node, "fil_test_view", Panel, { state: {}, height: 40 });
    const widget = controller?.widget as FakeWidget;

    // `canvasOnly` is what dropped the panel: core documents it as "the widget
    // will not be rendered by the Vue renderer".
    expect(widget.options?.canvasOnly).toBeUndefined();
    expect(vueRenderedWidgets({ widgets: [widget] })).toEqual(["fil_test_view"]);
  });

  it("still keeps itself out of the right-side properties panel", () => {
    const node = createWidgetNode();

    const controller = addFilDomWidget(node, "fil_test_view", Panel, { state: {}, height: 40 });

    // `hideInPanel` is the narrow flag for that: out of the side panel, still
    // drawn on the node. `rightSidePanel/shared.ts` filters on it.
    expect((controller?.widget as FakeWidget).options?.hideInPanel).toBe(true);
  });
});

describe("hiding a native widget", () => {
  it("hides it for both renderers, not just the canvas one", () => {
    const node = createNode({ widgets: [{ name: "steps", value: 20, type: "number" }] });

    hideNativeWidget(node, "steps");

    expect(node.widgets[0].hidden).toBe(true);
    expect(vueRenderedWidgets(node)).toEqual([]);
  });

  it("keeps the widget's own options object, so a combo keeps its value list", () => {
    const values = ["a", "b"];
    const node = createNode({ widgets: [{ name: "mode", value: "a", type: "combo", options: { values } }] });

    hideWidget(node.widgets[0]);

    expect(node.widgets[0].options?.values).toBe(values);
  });

  it("says nothing about a widget the node does not have", () => {
    const node = createNode({ widgets: [] });

    expect(hideNativeWidget(node, "absent")).toBeUndefined();
  });
});

describe("a real node registration", () => {
  it("leaves 🎬 Cinema Rig with nothing above its panel but the one socket row", async () => {
    vi.doMock("@/nodes2/domWidgetHost", () => ({
      addFilDomWidget: () => ({ name: "fil_cinema_rig_view", value: {} }),
      unmountAllFilWidgets: () => {},
    }));
    const { cinemaRigNode } = await import("@/nodes2/nodes/cinema_rig");

    const node = createNode({
      comfyClass: "FiLCinemaRig",
      widgets: [
        { name: "scene_prompt", value: "", type: "string" },
        { name: "mode", value: "Original Shot", type: "combo" },
        { name: "camera", value: "RED", type: "combo" },
        { name: "lens", value: "Helios", type: "combo" },
        { name: "focal_length", value: "50mm", type: "combo" },
        { name: "aperture", value: "f/11", type: "combo" },
        { name: "color_grading", value: "Teal", type: "combo" },
        { name: "enable_grading", value: true, type: "toggle" },
        { name: "polish_mode", value: "Deterministic", type: "combo" },
      ],
    });
    const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
    cinemaRigNode.register(nodeType as never, { name: "FiLCinemaRig" } as never);

    (nodeType.prototype.onNodeCreated as (this: unknown) => unknown).call(node);

    // `scene_prompt` is the node's declared socket input (CINEMA_RIG_SOCKET_INPUTS).
    // Its row is what carries the only connection dot a widget-backed input gets
    // under the Vue renderer, so it survives on purpose — stripped to a labelled
    // socket in CSS. Every other field belongs to the panel alone.
    expect(vueRenderedWidgets(node)).toEqual(["scene_prompt"]);
    // Still hidden for the canvas renderer, where the panel's own dots do this job.
    expect(node.widgets.find((w) => w.name === "scene_prompt")?.hidden).toBe(true);
  });

  it("keeps a socket field out of the properties panel and past the advanced-widgets gate", async () => {
    vi.doMock("@/nodes2/domWidgetHost", () => ({
      addFilDomWidget: () => ({ name: "fil_scanner_view", value: {} }),
      unmountAllFilWidgets: () => {},
    }));
    const { scannerNode } = await import("@/nodes2/nodes/scanner");

    const node = createNode({
      comfyClass: "FiLOpticScanner",
      // ComfyUI marks these two `advanced` from the node schema, which is why
      // 🕵️ Optic Scanner shipped a socket for `prompt` and none for its two
      // siblings until the flag was cleared alongside `hidden`.
      widgets: [
        { name: "prompt", value: "", type: "customtext" },
        { name: "negative_prompt", value: "", type: "customtext", options: { advanced: true } },
        { name: "custom_style", value: "", type: "customtext", options: { advanced: true } },
        { name: "agent", value: "None", type: "combo" },
      ],
    });
    const nodeType = { prototype: {} } as { prototype: Record<string, unknown> };
    scannerNode.register(nodeType as never, { name: "FiLOpticScanner" } as never);

    (nodeType.prototype.onNodeCreated as (this: unknown) => unknown).call(node);

    expect(vueRenderedWidgets(node)).toEqual(["prompt", "negative_prompt", "custom_style"]);
    expect(node.widgets.every((w) => w.name === "agent" || w.options?.hideInPanel)).toBe(true);
  });
});
