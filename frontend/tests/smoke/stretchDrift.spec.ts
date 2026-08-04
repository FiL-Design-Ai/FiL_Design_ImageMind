import { test, expect } from "@playwright/test";
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

/**
 * Where the stretch goes when the content changes underneath it.
 *
 * A panel dragged to +200px of stretch settled at +192 after its content
 * changed — live in ComfyUI, never in jsdom (`3a0752e`). The characterization
 * tests exonerated the `domWidgetHost` split, so whatever moves those 8px is
 * something only the real host does, and only a real host can be asked.
 *
 * Optic Scanner is the only growable node (`nodes2/nodes/scanner.ts`), so it is
 * the only one that can drift.
 *
 * The reading, per step: `node.size[1]` is the box; `node.computeSize()[1]` is
 * patched by `nodeSizeSync` to report the height with the stretch taken back
 * out, so the difference between them *is* the stretch as the pack sees it.
 * Every `setSize` reaching the node is recorded with the top of its stack, so a
 * write that did not come from the drag names its own caller.
 */

interface SizeCall {
  /** Height asked for. */
  asked: number;
  /** Height the node ended up with, after our patch had its say. */
  got: number;
  /** Who called, minus the recorder's own frame. */
  from: string;
}

interface Step {
  what: string;
  size: number;
  unstretched: number;
  stretch: number;
  hostHeight: string;
  calls: SizeCall[];
}

test.describe("the growable panel's stretch", () => {
  test.afterEach(async ({ page }) => {
    await closeScratchWorkflow(page).catch(() => {});
  });

  test("survives a content change", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const steps = await page.evaluate(async (): Promise<Step[]> => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };

      type Node = {
        pos: [number, number];
        size: [number, number];
        computeSize(): [number, number];
        setSize(size: [number, number]): void;
        _filVueApps?: Record<string, { host: HTMLElement; state: Record<string, unknown> }>;
      };

      const node = window.LiteGraph.createNode("FiLOpticScanner") as Node;
      node.pos = [60, 60];
      window.app.graph.add(node);
      // The panel is an async component; the host's settle loop runs after it.
      await frames(90);

      const canvas = window.app.canvas;
      if (canvas?.ds) canvas.ds.scale = 1;
      canvas?.centerOnNode?.(node);
      canvas?.setDirty?.(true, true);
      await frames(30);

      const controller = Object.values(node._filVueApps ?? {})[0];

      // Outermost wrapper: every write lands here before the pack's own patch
      // sees it, so `asked` is what the host actually requested.
      let calls: SizeCall[] = [];
      const patched = node.setSize.bind(node);
      node.setSize = (size: [number, number]) => {
        const stack = (new Error().stack ?? "").split("\n").slice(2, 4).join(" | ");
        patched(size);
        calls.push({ asked: Math.round(size[1]), got: Math.round(node.size[1]), from: stack.trim() });
      };

      const read = (what: string): Step => {
        const unstretched = Math.round(node.computeSize()[1]);
        const step: Step = {
          what,
          size: Math.round(node.size[1]),
          unstretched,
          stretch: Math.round(node.size[1]) - unstretched,
          hostHeight: controller.host.style.height,
          calls,
        };
        calls = [];
        return step;
      };

      const steps: Step[] = [read("panel mounted, nothing dragged yet")];

      // What a resize drag ends in: LiteGraph writes the dragged box through
      // `setSize`. 200px is the number from the report.
      node.setSize([node.size[0], node.size[1] + 200]);
      await frames(30);
      steps.push(read("dragged 200px taller"));

      // A content change of the kind the report describes: a section unfolds,
      // the panel's own minimum grows, and the observers resync the box.
      //
      // Written as explicit `false`/`true` rather than a toggle: `state.ui` is
      // empty on a fresh node and `agent`/`focus`/`output`/`advanced` default
      // to collapsed (OpticScanner.vue's `DEFAULT_COLLAPSED`), so flipping an
      // absent value just writes the default back and nothing moves.
      const ui = controller.state.ui as Record<string, unknown>;
      ui.collapsed_output = false;
      await frames(60);
      steps.push(read("a section opened underneath it"));

      // And folded back: the panel's minimum returns to where it started, so
      // anything the stretch lost on the way out shows up as a mismatch here.
      ui.collapsed_output = true;
      await frames(60);
      steps.push(read("the same section folded again"));

      return steps;
    });

    // eslint-disable-next-line no-console -- the reading is the point of this run
    console.log(JSON.stringify(steps, null, 2));

    const dragged = steps[1].stretch;
    for (const step of steps.slice(2)) {
      expect(
        step.stretch,
        `stretch drifted from ${dragged} to ${step.stretch} after "${step.what}"\n${JSON.stringify(steps, null, 2)}`,
      ).toBe(dragged);
    }
  });

  test("survives a content change after a real drag", async ({ page }) => {
    /**
     * The same question, asked the way a user asks it.
     *
     * The test above writes the height once, cleanly. A hand on the resize
     * corner writes it on every pointer move, through whatever LiteGraph does
     * with a drag in progress — snapping, clamping to `computeSize()`, its own
     * write-back on mouse-up. If the 8px come from any of that, they cannot
     * appear in a synthetic call and can only appear here.
     */
    await page.goto("/");
    await openBlankWorkflow(page);

    const corner = await page.evaluate(async () => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      type Node = { pos: [number, number]; size: [number, number] };
      const node = window.LiteGraph.createNode("FiLOpticScanner") as Node;
      node.pos = [60, 60];
      window.app.graph.add(node);
      await frames(90);

      const canvas = window.app.canvas as unknown as {
        canvas: HTMLCanvasElement;
        ds: { scale: number; offset: [number, number] };
        centerOnNode?(node: unknown): void;
        setDirty?(a: boolean, b: boolean): void;
      };
      canvas.ds.scale = 1;

      // The resize grip sits in the bottom-right corner of the node box.
      // Place THAT POINT, not the node: the host keeps its own floating
      // controls (the Run/queue button group) pinned to the canvas panel's
      // bottom-right corner, confirmed live with `document.elementFromPoint`
      // — a grip landing under them sends the drag to a button, and the node
      // never resizes. Aim the grip at an open spot well clear of the corner
      // instead of centring the node and hoping.
      const rect = canvas.canvas.getBoundingClientRect();
      const grip = {
        x: node.pos[0] + node.size[0] - 6,
        y: node.pos[1] + node.size[1] - 6,
      };
      const target = {
        x: rect.left + rect.width * 0.4,
        y: rect.top + rect.height * 0.4,
      };
      // toPage(x, y) = rect.topleft + (graph + offset) * scale, so this puts
      // the grip exactly on the target at scale 1.
      canvas.ds.offset = [target.x - rect.left - grip.x, target.y - rect.top - grip.y];
      canvas.setDirty?.(true, true);
      await frames(30);

      return target;
    });

    // A drag, not a jump: LiteGraph only starts resizing on a move after the
    // press, and the intermediate writes are the point of this test.
    await page.mouse.move(corner.x, corner.y);
    await page.mouse.down();
    for (let step = 1; step <= 10; step++) {
      await page.mouse.move(corner.x, corner.y + step * 20);
      await page.waitForTimeout(16);
    }
    await page.mouse.up();
    await page.waitForTimeout(200);

    const steps = await page.evaluate(async (): Promise<Step[]> => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      type Node = {
        size: [number, number];
        computeSize(): [number, number];
        _filVueApps?: Record<string, { host: HTMLElement; state: Record<string, unknown> }>;
      };
      const node = window.app.graph._nodes[0] as Node;
      const controller = Object.values(node._filVueApps ?? {})[0];

      const read = (what: string): Step => {
        const unstretched = Math.round(node.computeSize()[1]);
        return {
          what,
          size: Math.round(node.size[1]),
          unstretched,
          stretch: Math.round(node.size[1]) - unstretched,
          hostHeight: controller.host.style.height,
          calls: [],
        };
      };

      const steps: Step[] = [read("dragged by hand")];

      const ui = controller.state.ui as Record<string, unknown>;
      ui.collapsed_output = false;
      await frames(60);
      steps.push(read("a section opened underneath it"));

      ui.collapsed_output = true;
      await frames(60);
      steps.push(read("the same section folded again"));

      return steps;
    });

    // eslint-disable-next-line no-console -- the reading is the point of this run
    console.log(JSON.stringify(steps, null, 2));

    expect(steps[0].stretch, "the drag moved nothing — the grip was missed").toBeGreaterThan(50);
    for (const step of steps.slice(1)) {
      expect(
        step.stretch,
        `stretch drifted from ${steps[0].stretch} to ${step.stretch} after "${step.what}"\n${JSON.stringify(steps, null, 2)}`,
      ).toBe(steps[0].stretch);
    }
  });

  test("survives being saved and opened again", async ({ page }) => {
    /**
     * The third way in, and the one the arithmetic points at.
     *
     * A saved workflow restores `node.size` directly, without `setSize`, so the
     * stretch is not restored — it is re-derived once, as box minus content
     * height (`nodeSizeSync.ts`'s `initialized` branch). That subtraction is
     * only as stable as the content height, and the content height is snapped
     * up to a 4px grid (`heightModel.ts`'s `snap`). Anything that shifts the
     * measurement across a reload is charged to the stretch.
     */
    await page.goto("/");
    await openBlankWorkflow(page);

    const steps = await page.evaluate(async (): Promise<Step[]> => {
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      type Node = {
        pos: [number, number];
        size: [number, number];
        computeSize(): [number, number];
        setSize(size: [number, number]): void;
        _filVueApps?: Record<string, { host: HTMLElement }>;
      };
      const app = window.app as unknown as {
        graph: { _nodes: unknown[]; add(node: unknown): void; serialize(): unknown };
        loadGraphData(data: unknown): Promise<void>;
      };

      const node = window.LiteGraph.createNode("FiLOpticScanner") as Node;
      node.pos = [60, 60];
      window.app.graph.add(node);
      await frames(90);

      const canvas = window.app.canvas;
      if (canvas?.ds) canvas.ds.scale = 1;
      canvas?.centerOnNode?.(node);
      canvas?.setDirty?.(true, true);
      await frames(30);

      const read = (what: string, n: Node): Step => {
        const unstretched = Math.round(n.computeSize()[1]);
        const controller = Object.values(n._filVueApps ?? {})[0];
        return {
          what,
          size: Math.round(n.size[1]),
          unstretched,
          stretch: Math.round(n.size[1]) - unstretched,
          hostHeight: controller?.host.style.height ?? "(no panel)",
          calls: [],
        };
      };

      node.setSize([node.size[0], node.size[1] + 200]);
      await frames(30);
      const steps: Step[] = [read("dragged 200px taller", node)];

      const serialized = JSON.parse(JSON.stringify(app.graph.serialize()));
      await app.loadGraphData(serialized);
      await frames(90);

      const reloaded = window.app.graph._nodes[0] as Node;
      canvas?.centerOnNode?.(reloaded);
      canvas?.setDirty?.(true, true);
      await frames(60);
      steps.push(read("saved and opened again", reloaded));

      // A second round trip: a loss that repeats every reload is a different
      // defect from one that happens once and settles.
      const twice = JSON.parse(JSON.stringify(app.graph.serialize()));
      await app.loadGraphData(twice);
      await frames(90);
      const again = window.app.graph._nodes[0] as Node;
      canvas?.centerOnNode?.(again);
      canvas?.setDirty?.(true, true);
      await frames(60);
      steps.push(read("and opened a second time", again));

      return steps;
    });

    // eslint-disable-next-line no-console -- the reading is the point of this run
    console.log(JSON.stringify(steps, null, 2));

    for (const step of steps.slice(1)) {
      expect(
        step.stretch,
        `stretch drifted from ${steps[0].stretch} to ${step.stretch} after "${step.what}"\n${JSON.stringify(steps, null, 2)}`,
      ).toBe(steps[0].stretch);
    }
  });
});
