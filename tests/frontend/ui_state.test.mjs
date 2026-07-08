import assert from "node:assert/strict";
import test from "node:test";

import { setWidgetVisible } from "../../web/core/ui.js";

test("widget visibility keeps and restores native computeSize", () => {
  const original = () => [120, 20];
  const widget = { computeSize: original };
  setWidgetVisible(widget, false);
  assert.equal(widget.hidden, true);
  assert.deepEqual(widget.computeSize(), [0, -4]);
  setWidgetVisible(widget, true);
  assert.equal(widget.hidden, false);
  assert.equal(widget.computeSize, original);
});
