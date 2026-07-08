import assert from "node:assert/strict";
import test from "node:test";

import { COMPARE_MODES, clamp01, compareLayout, modeAtPoint, normalizeCompareState, stateToProperties } from "../../web/core/compare_engine.js";

test("compare modes and geometry stay stable", () => {
  assert.equal(COMPARE_MODES.length, 8);
  assert.deepEqual(compareLayout(400, 300).image, { x: 0, y: 66, w: 400, h: 234 });
  assert.equal(modeAtPoint(10, 10, 400), "before");
  assert.equal(modeAtPoint(390, 35, 400), "difference");
});

test("compare state is clamped and serializable", () => {
  assert.equal(clamp01(2), 1);
  assert.equal(clamp01(-1), 0);
  const state = normalizeCompareState({ mode: "overlay", position: 2, opacity: -1 });
  assert.deepEqual(state, { mode: "overlay", position: 1, opacity: 0 });
  assert.deepEqual(stateToProperties(state), {
    fil_ui_compare_mode: "overlay",
    fil_ui_compare_position: 1,
    fil_ui_compare_opacity: 0,
  });
});

test("unknown workflow state falls back safely", () => {
  assert.deepEqual(normalizeCompareState({ mode: "removed" }), { mode: "wipe-lr", position: 0.5, opacity: 0.5 });
});
