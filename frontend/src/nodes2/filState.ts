/**
 * Shared state shape passed to every FiL_Design_ImageMind Vue node component by
 * `addFilDomWidget`. The same `state` object is also exposed to ComfyUI
 * via `getValue()`/`setValue()` so it serializes into `.json` workflows.
 *
 * Convention: per-node state lives under `nodeState` (the keys are
 * widget names — `mode`, `seed`, `provider`, `mode`, …); UI-only flags
 * (collapsed sections, hover indicators) live under `ui`. Anything in
 * either key set survives workflow save/load.
 */
import type { LGraphNode } from "@/types/comfy";

export interface FilNodeState {
  /** Per-widget values, indexed by widget name. ComfyUI serializes these. */
  nodeState: Record<string, unknown>;
  /** Initial values pulled from the native ComfyUI widgets at creation. */
  initialValues: Record<string, unknown>;
  /** UI-only flags (collapsed sections etc.) — also serialized. */
  ui: Record<string, unknown>;
  /** Optional aux slot used by Seed: the last seed the backend used. */
  lastRunSeed?: number | null;
  /** Optional reference to the native ComfyUI node (used for widget manipulation). */
  node?: LGraphNode;
}

/** Minimum props contract every Vue node component accepts. */
export interface FilNodeComponentProps {
  state: FilNodeState;
}
