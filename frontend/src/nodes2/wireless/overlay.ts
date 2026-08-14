/**
 * Draw what the channels are doing, on the canvas.
 *
 * Uses `canvas.onDrawBackground`, which LiteGraph offers as a property for
 * exactly this (`LGraphCanvas.ts:637`, called at `:5613` inside
 * `drawBackCanvas`, after the graph transform is applied — so everything here
 * is in graph coordinates). Nodes draw afterwards, in the separate
 * `drawFrontCanvas` pass — so a dashed link never sits on top of the node it
 * touches. `onDrawForeground` (`:5203`, the pairing hook, above nodes) was
 * tried first and moved here once a real graph showed the wrong ordering: a
 * label could land squarely on a node's title bar. The real wire connections
 * are also drawn after this hook (`:5634`, still inside the background pass),
 * so an actual wire always reads on top of a dashed one, never the reverse.
 * The pack does not patch `drawConnections` or `drawNode` the way
 * cg-use-everywhere does; there is no need.
 *
 * Whatever handler was already on the canvas is kept and called first, since
 * another extension may own it.
 */

import type { ComfyApp } from "@/types/comfy";
import { LOG_TAG } from "@/constants/brand";
import {
  LINKS_NEVER,
  LINKS_SELECTED,
  wirelessEnabled,
  wirelessLabelsShown,
  wirelessLinkMode,
} from "@/stores/settings/wirelessSettings";
import { channelColor, channelColorFor, soften } from "./channelColor";
import { livePlan } from "./livePlan";
import type { LinkToCreate, NodeId, WirelessChannel, WirelessGraph } from "./types";

type Point = [number, number];

interface CanvasNode {
  id: NodeId;
  pos?: Point;
  getInputPos?: (slot: number) => Point;
  getOutputPos?: (slot: number) => Point;
}

interface LiteCanvas {
  graph?: WirelessGraph & { getNodeById?: (id: NodeId) => CanvasNode | null };
  onDrawBackground?: ((ctx: CanvasRenderingContext2D, area: unknown) => void) | null;
  onDrawForeground?: ((ctx: CanvasRenderingContext2D, area: unknown) => void) | null;
  ds?: { scale?: number };
}

/** Below this zoom the labels are unreadable and only add noise, so only the links are drawn. */
const LABEL_MIN_SCALE = 0.6;

function inputPos(node: CanvasNode | null | undefined, slot: number): Point | null {
  if (!node?.getInputPos) return null;
  try {
    const pos = node.getInputPos(slot);
    return Array.isArray(pos) && pos.length >= 2 ? [pos[0], pos[1]] : null;
  } catch {
    return null;
  }
}

function outputPos(node: CanvasNode | null | undefined, slot: number): Point | null {
  if (!node?.getOutputPos) return null;
  try {
    const pos = node.getOutputPos(slot);
    return Array.isArray(pos) && pos.length >= 2 ? [pos[0], pos[1]] : null;
  } catch {
    return null;
  }
}

/**
 * A dashed curve from source to receiver.
 *
 * Dashed on purpose: these links do not exist in the graph the user saved, and
 * drawing them like real wires would be a lie the moment they open the JSON.
 */
function drawLink(ctx: CanvasRenderingContext2D, from: Point, to: Point, color: string): void {
  const dx = Math.max(40, Math.abs(to[0] - from[0]) * 0.4);
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.bezierCurveTo(from[0] + dx, from[1], to[0] - dx, to[1], to[0], to[1]);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 5]);
  ctx.stroke();
  ctx.setLineDash([]);
}

/** The channel's name beside the input it feeds, so the node says where its data comes from. */
function drawLabel(ctx: CanvasRenderingContext2D, at: Point, text: string, color: string): void {
  ctx.font = "bold 10px sans-serif";
  const width = ctx.measureText(text).width;
  const x = at[0] + 8;
  const y = at[1] - 6;

  ctx.fillStyle = soften(color, 0.9);
  ctx.beginPath();
  ctx.roundRect(x, y, width + 10, 13, 3);
  ctx.fill();

  ctx.fillStyle = "#0b0b0f";
  ctx.fillText(text, x + 5, y + 10);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();
}

/**
 * `node.selected` is a plain flag LiteGraph keeps on the node itself
 * (`LGraphNode.ts:462`), so this needs neither the canvas's selection registry
 * nor a listener on it — just a lookup per link, on the frame it is drawn.
 */
function isSelected(graph: WirelessGraph, id: NodeId): boolean {
  const node = graph.getNodeById?.(id) as { selected?: boolean } | null | undefined;
  return !!node?.selected;
}

/**
 * With `LINKS_SELECTED`, a link is shown when *either* end is selected — the
 * transmitter (see everything one Channel node sends out) or a receiver (see
 * everything feeding one node, wireless or not, without hunting the graph for
 * where a MODEL input's data actually comes from). Selecting neither hides it.
 *
 * The transmitter check is against `channelNodeId`, not `link.origin_id`:
 * `origin_id` is the real data source the channel forwards (e.g. an
 * `UNETLoader`), never the `FiLChannel` node itself — clicking the Channel
 * node has nothing else in the resolved link to match against.
 */
function linkTouchesSelection(
  graph: WirelessGraph,
  link: LinkToCreate,
  channelNodeId: NodeId | undefined,
): boolean {
  return (
    isSelected(graph, link.origin_id) ||
    isSelected(graph, link.target_id) ||
    (channelNodeId !== undefined && isSelected(graph, channelNodeId))
  );
}

function drawPlanBackground(ctx: CanvasRenderingContext2D, canvas: LiteCanvas): void {
  const graph = canvas.graph;
  if (!graph || !Array.isArray(graph._nodes)) return;

  const mode = wirelessLinkMode();
  if (mode === LINKS_NEVER) return;

  const plan = livePlan(graph);
  if (plan.resolution.links.length === 0) return;

  const filterBySelection = mode === LINKS_SELECTED;
  const channelsByName = new Map((plan.channels as WirelessChannel[]).map((c) => [c.name, c]));

  for (const link of plan.resolution.links as LinkToCreate[]) {
    const channel = channelsByName.get(link.channelName);
    if (filterBySelection && !linkTouchesSelection(graph, link, channel?.nodeId)) {
      continue;
    }
    const origin = graph.getNodeById?.(link.origin_id);
    const target = graph.getNodeById?.(link.target_id);
    const from = outputPos(origin, link.origin_slot);
    const to = inputPos(target, link.target_slot);
    if (!from || !to) continue;

    // The socket it lands in wears the host's type colour; the dashed link
    // wears it too, instead of a hue nothing else on the canvas uses.
    const color = channel ? channelColorFor(channel) : channelColor(link.channelName);
    drawLink(ctx, from, to, color);
  }
}

function drawPlanForeground(ctx: CanvasRenderingContext2D, canvas: LiteCanvas): void {
  const graph = canvas.graph;
  if (!graph || !Array.isArray(graph._nodes)) return;

  const mode = wirelessLinkMode();
  if (mode === LINKS_NEVER) return;
  if (!wirelessLabelsShown()) return;

  const plan = livePlan(graph);
  if (plan.resolution.links.length === 0) return;

  const filterBySelection = mode === LINKS_SELECTED;
  const scale = canvas.ds?.scale ?? 1;
  if (scale < LABEL_MIN_SCALE) return;

  const channelsByName = new Map((plan.channels as WirelessChannel[]).map((c) => [c.name, c]));

  for (const link of plan.resolution.links as LinkToCreate[]) {
    const channel = channelsByName.get(link.channelName);
    if (filterBySelection && !linkTouchesSelection(graph, link, channel?.nodeId)) {
      continue;
    }
    const target = graph.getNodeById?.(link.target_id);
    const to = inputPos(target, link.target_slot);
    if (!to) continue;

    const color = channel ? channelColorFor(channel) : channelColor(link.channelName);
    drawLabel(ctx, to, link.channelName, color);
  }
}

export function installWirelessOverlay(app: ComfyApp): void {
  const canvas = app.canvas as unknown as LiteCanvas | undefined;
  if (!canvas) {
    console.warn(`${LOG_TAG} wireless: no canvas, channels will not be drawn`);
    return;
  }
  if ((canvas as { __filWirelessOverlay?: boolean }).__filWirelessOverlay) return;

  const previousBg = canvas.onDrawBackground;
  canvas.onDrawBackground = function (this: unknown, ctx: CanvasRenderingContext2D, area: unknown) {
    previousBg?.call(this, ctx, area);
    if (!wirelessEnabled()) return;
    try {
      ctx.save();
      drawPlanBackground(ctx, canvas);
    } catch (error) {
      console.warn(`${LOG_TAG} wireless: background overlay failed:`, error);
    } finally {
      ctx.restore();
    }
  };

  const previousFg = canvas.onDrawForeground;
  canvas.onDrawForeground = function (this: unknown, ctx: CanvasRenderingContext2D, area: unknown) {
    previousFg?.call(this, ctx, area);
    if (!wirelessEnabled()) return;
    try {
      ctx.save();
      drawPlanForeground(ctx, canvas);
    } catch (error) {
      console.warn(`${LOG_TAG} wireless: foreground overlay failed:`, error);
    } finally {
      ctx.restore();
    }
  };

  (canvas as { __filWirelessOverlay?: boolean }).__filWirelessOverlay = true;
}

