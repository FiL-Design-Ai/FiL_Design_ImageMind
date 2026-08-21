import { test, expect, type Page } from "@playwright/test";
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";
// Relative, not `@/`: these specs run in Playwright's own runtime rather than
// through Vite, and nothing else under tests/smoke resolves the alias.
import contracts from "../../src/api/contracts.json";

/**
 * Every node, in a real ComfyUI, on one canvas.
 *
 * This is the check the pack never had. The Python suite proves a node's logic,
 * the component suite proves a widget in isolation — and between them sat every
 * defect users actually reported: a node that fails to register, a panel that
 * never mounts, an extension hook that throws on a cold load, a wrapper that
 * recurses against another pack. All of those are silent until someone opens
 * the graph.
 *
 * Run against a running instance with:
 *   COMFY_URL=http://127.0.0.1:8188 npx playwright test -c playwright.comfy.config.ts
 *
 * The suite never touches an existing workflow: it opens a blank temporary one,
 * works there, and closes it again.
 */

/**
 * Every node the pack ships, read from the generated contracts.
 *
 * This file used to carry two hand-written copies of that list — a count of 19
 * and the panel roster below — the second of which pointed at an `EXPECTED_IDS`
 * set in `tests/test_node_contracts.py` that was itself a third copy. All of
 * them were the same nineteen strings, so adding a node meant remembering three
 * files, and the check each one performed was against another copy of itself.
 *
 * `contracts.json` is generated from `common/contracts/`, and CI proves the
 * committed copy matches it (`npm run check:contracts`,
 * `tests/test_contract_generation.py`), so reading it here is reading the
 * backend.
 */
const EXPECTED_IDS = Object.keys(contracts.data).sort();
const EXPECTED_NODE_COUNT = EXPECTED_IDS.length;

/**
 * Nodes that deliberately ship no Vue panel — native ComfyUI widgets only.
 *
 * Empty today: every node module in `src/nodes2/nodes/` calls
 * `addFilDomWidget`. `docs/architecture.md` claimed five nodes were in this
 * position (Cleaner, Decomposer, Noise Control, Tile Assembly, KSampler) long
 * after each of them grew a panel — `KSamplerPanel.vue` is 1169 lines. Listing
 * the exceptions rather than the rule is what keeps that from happening again:
 * a node losing its panel fails here until someone writes down that it was on
 * purpose.
 */
const NODES_WITHOUT_PANELS = new Set<string>([]);

/**
 * The nodes whose frontend module mounts a Vue panel.
 *
 * Derived, so a node whose panel silently stops mounting fails this assertion
 * instead of dropping out of the sample and taking its own check with it.
 */
const NODES_WITH_PANELS = EXPECTED_IDS.filter((id) => !NODES_WITHOUT_PANELS.has(id));

/**
 * Anything the pack put in the console.
 *
 * Not every error on the page: a ComfyUI install with other packs in it is
 * noisy on a good day — a 404 for `user.css`, another pack registering an
 * extension twice, a third one throwing in its own `init`. Failing on those
 * would make this suite red everywhere except a pristine CI runner, and a
 * suite that is always red gets ignored. So the filter is our own tag and our
 * own bundle; everything seen is still reported, to read alongside a failure.
 */
const OURS = /FiL_Design_ImageMind|\[FiL/;

interface Collected {
  ours: string[];
  all: string[];
}

function collectErrors(page: Page): Collected {
  const collected: Collected = { ours: [], all: [] };
  const record = (line: string) => {
    collected.all.push(line);
    if (OURS.test(line)) collected.ours.push(line);
  };
  page.on("console", (message) => {
    if (message.type() === "error") record(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => record(`pageerror: ${error.message}\n${error.stack ?? ""}`));
  return collected;
}

function errorReport(collected: Collected, what: string): string {
  return `${what}\n\nfrom this pack:\n${collected.ours.join("\n") || "(none)"}\n\neverything seen:\n${collected.all.join("\n")}`;
}

test.describe("the pack in a real ComfyUI", () => {
  test.afterEach(async ({ page }) => {
    await closeScratchWorkflow(page).catch(() => {});
  });

  test("registers every node the backend ships", async ({ page }) => {
    // `registered_node_types` is filled from the backend's `object_info`, so
    // this is the round trip rather than our frontend registration: the pack
    // imported, the schemas served, the frontend parsed them. Whether *our*
    // module then took the node over is the next test's business.
    const errors = collectErrors(page);
    await page.goto("/");
    await openBlankWorkflow(page);

    const registered = await page.evaluate(() =>
      Object.keys(window.LiteGraph.registered_node_types).filter((id) => id.startsWith("FiL")).sort(),
    );

    // By name, not by count: nineteen registered nodes and nineteen contracts
    // can still be nineteen different nodes.
    expect(registered).toEqual(EXPECTED_IDS);
    expect(errors.ours, errorReport(errors, "errors while loading the graph")).toEqual([]);
  });

  test("drops every node on the canvas without a single error", async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const ids = Object.keys(window.LiteGraph.registered_node_types)
        .filter((id) => id.startsWith("FiL"))
        .sort();
      const failed: Array<{ id: string; error: string }> = [];
      let column = 0;
      for (const id of ids) {
        try {
          const node = window.LiteGraph.createNode(id) as { pos: [number, number] } | null;
          if (!node) {
            failed.push({ id, error: "createNode returned null" });
            continue;
          }
          node.pos = [60 + (column % 5) * 460, 60 + Math.floor(column / 5) * 700];
          column += 1;
          window.app.graph.add(node);
        } catch (error) {
          failed.push({ id, error: String(error) });
        }
      }
      // The panels are async components: let the chunks resolve and the host's
      // settle loop run before anything is measured.
      const frames = async (count: number) => {
        for (let i = 0; i < count; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      await frames(60);

      const nodes = window.app.graph._nodes as Array<{
        comfyClass?: string;
        _filVueApps?: Record<string, { host: HTMLElement }>;
      }>;

      // A DOM widget outside the viewport is hidden by ComfyUI and measures
      // zero, so each node has to be brought into view before it is read —
      // which is also the only way to see that it renders at all.
      const canvas = (window.app as unknown as {
        canvas?: { centerOnNode?: (node: unknown) => void; ds?: { scale: number }; setDirty?: (a: boolean, b: boolean) => void };
      }).canvas;
      if (canvas?.ds) canvas.ds.scale = 1;

      const panels: Array<{ id: string; height: number; mounted: boolean }> = [];
      for (const node of nodes) {
        if (!node._filVueApps || Object.keys(node._filVueApps).length === 0) continue;
        canvas?.centerOnNode?.(node);
        canvas?.setDirty?.(true, true);
        await frames(12);
        const controller = Object.values(node._filVueApps)[0];
        panels.push({
          id: node.comfyClass ?? "?",
          height: controller.host.clientHeight,
          mounted: Boolean(controller.host.firstElementChild?.firstElementChild),
        });
      }

      return { ids, failed, onGraph: nodes.length, panels };
    });

    expect(result.failed, `nodes that would not instantiate: ${JSON.stringify(result.failed)}`).toEqual([]);
    expect(result.onGraph).toBe(EXPECTED_NODE_COUNT);

    // A panel that reports no height rendered nothing — the symptom of the
    // getter-only `widget.height` throw, which killed the frame for every node.
    // Which nodes brought a panel at all — a node that stops mounting one
    // would otherwise vanish from the sample instead of failing.
    expect(result.panels.map((panel) => panel.id).sort()).toEqual(NODES_WITH_PANELS);

    const empty = result.panels.filter((panel) => !panel.mounted || panel.height === 0);
    expect(empty, `panels that mounted nothing: ${JSON.stringify(empty)}`).toEqual([]);

    expect(errors.ours, errorReport(errors, "errors while building the graph")).toEqual([]);
  });

  test("builds a context menu on every node", async ({ page }) => {
    /**
     * The check the console filter cannot make.
     *
     * Our accessor on `getExtraMenuOptions` once recursed against a pack that
     * patches it the classic way, and every context menu in the app died with
     * "Maximum call stack size exceeded" (86b4c0e). That failure carries no tag
     * of ours — and LiteGraph wraps the assembler in a try/catch that turns it
     * into a `console.error` — so nothing about it looks like our fault from
     * the outside. Calling the assembler directly is the only way to see it.
     *
     * Worth most with other packs installed, which is what the neighbours job
     * is for; on a bare ComfyUI it still guards the accessor itself.
     */
    const errors = collectErrors(page);
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const ids = Object.keys(window.LiteGraph.registered_node_types).filter((id) => id.startsWith("FiL"));
      for (const [column, id] of ids.entries()) {
        const node = window.LiteGraph.createNode(id) as { pos: [number, number] } | null;
        if (node) {
          node.pos = [60 + (column % 5) * 460, 60 + Math.floor(column / 5) * 700];
          window.app.graph.add(node);
        }
      }
      for (let i = 0; i < 40; i++) await new Promise((r) => requestAnimationFrame(r));

      const canvas = (window.app as unknown as {
        canvas: { getNodeMenuOptions(node: unknown): unknown[] };
      }).canvas;

      const failed: Array<{ id: string; error: string }> = [];
      const empty: string[] = [];
      for (const node of window.app.graph._nodes as Array<{ comfyClass?: string }>) {
        const id = node.comfyClass ?? "?";
        try {
          const options = canvas.getNodeMenuOptions(node);
          if (!Array.isArray(options) || options.length === 0) empty.push(id);
        } catch (error) {
          failed.push({ id, error: String(error) });
        }
      }
      return { failed, empty, checked: window.app.graph._nodes.length };
    });

    expect(result.failed, `menu assembly threw: ${JSON.stringify(result.failed)}`).toEqual([]);
    expect(result.empty, `nodes whose menu came back empty: ${result.empty.join(", ")}`).toEqual([]);
    expect(result.checked).toBe(EXPECTED_NODE_COUNT);
    expect(errors.ours, errorReport(errors, "errors while building menus")).toEqual([]);
  });

  test("serialises and reloads the graph with its wires intact", async ({ page }) => {
    // The Style Mixer lost every wire into it on reload, because its hidden-slot
    // filter handed LiteGraph the stale slots it had parked (86b4c0e). Nothing
    // caught it but a user.
    const errors = collectErrors(page);
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const app = window.app as unknown as {
        graph: { _nodes: unknown[]; serialize(): unknown };
        loadGraphData(data: unknown): Promise<void>;
      };
      const litegraph = window.LiteGraph;

      const provider = litegraph.createNode("FiLProviderLoader") as {
        pos: [number, number];
        connect(slot: number, target: unknown, targetSlot: number | string): unknown;
      };
      const mixer = litegraph.createNode("FiLStyleMixer") as { pos: [number, number] };
      provider.pos = [60, 60];
      mixer.pos = [560, 60];
      window.app.graph.add(provider);
      window.app.graph.add(mixer);
      for (let i = 0; i < 30; i++) await new Promise((r) => requestAnimationFrame(r));

      provider.connect(0, mixer, "config");
      for (let i = 0; i < 30; i++) await new Promise((r) => requestAnimationFrame(r));

      const linksBefore = (mixer as unknown as { inputs: Array<{ name: string; link: number | null }> })
        .inputs.filter((input) => input.link != null).map((input) => input.name);

      const serialized = JSON.parse(JSON.stringify(app.graph.serialize()));
      await app.loadGraphData(serialized);
      for (let i = 0; i < 60; i++) await new Promise((r) => requestAnimationFrame(r));

      const reloaded = (window.app.graph._nodes as Array<{
        comfyClass?: string;
        inputs?: Array<{ name: string; link: number | null }>;
      }>).find((node) => node.comfyClass === "FiLStyleMixer");

      return {
        linksBefore,
        linksAfter: (reloaded?.inputs ?? []).filter((input) => input.link != null).map((input) => input.name),
      };
    });

    expect(result.linksBefore).toContain("config");
    expect(result.linksAfter, "a wire was lost across serialize + reload").toEqual(result.linksBefore);
    expect(errors.ours, errorReport(errors, "errors across the reload")).toEqual([]);
  });
});
