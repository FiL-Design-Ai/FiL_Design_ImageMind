/**
 * Pure, framework-agnostic state helpers for the Before/After Compare
 * viewer. Kept separate from BeforeAfterCompare.vue so the mode/position/
 * opacity contract is unit-testable without mounting Vue or a DOM widget.
 */

export type CompareMode = "before" | "after" | "wipe" | "side-by-side" | "overlay" | "difference";

export interface CompareViewState {
  mode: CompareMode;
  /** Wipe divider position, 0 (all "before") .. 1 (all "after"). */
  position: number;
  /** Overlay-mode opacity of the "after" image, 0..1. */
  opacity: number;
}

export function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

