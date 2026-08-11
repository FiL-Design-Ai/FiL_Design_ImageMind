import { test, expect } from "@playwright/test";
import { openBlankWorkflow, closeScratchWorkflow } from "./comfyWindow";

/**
 * A select whose value does not fit says so on hover.
 *
 * Only a real browser can see this. A native <select> clips its own text and
 * reports no overflow — `scrollWidth === clientWidth` however long the value
 * is — so FilSelect measures the string against the box and only then hangs
 * the full value off `title`. jsdom has neither layout nor canvas, so the
 * component suite cannot reach the branch at all.
 *
 * The case that pays for this: `FlowMatchEulerDiscreteScheduler` is 17px too
 * wide for the sampler's row at node width, and 41px too wide once the label
 * is the Russian one. Checkpoint and LoRA names come off the user's disk with
 * no length limit, so no amount of label trimming fixes the class of problem.
 *
 * The other half matters just as much: when the value does fit there must be
 * no title, or it would cover the row's own explanatory tooltip everywhere.
 */
test.describe("a select too narrow for its value", () => {
  test.afterEach(async ({ page }) => {
    await closeScratchWorkflow(page).catch(() => {});
  });

  test("hangs the full value off the hover, and only when it is cut off", async ({ page }) => {
    await page.goto("/");
    await openBlankWorkflow(page);

    const result = await page.evaluate(async () => {
      const frames = async (n: number) => {
        for (let i = 0; i < n; i++) await new Promise((r) => requestAnimationFrame(r));
      };
      const node = window.LiteGraph.createNode("FiLKSampler") as { pos: [number, number] } | null;
      if (!node) throw new Error("FiLKSampler would not instantiate");
      node.pos = [40, 40];
      window.app.graph.add(node);
      await frames(90);

      const host = Object.values(
        (node as unknown as { _filVueApps?: Record<string, { host: HTMLElement }> })._filVueApps ?? {},
      )[0]?.host;
      if (!host) throw new Error("the sampler mounted no panel");

      const selectFor = (label: string) =>
        Array.from(host.querySelectorAll<HTMLElement>(".fil-w-select"))
          .find((el) =>
            (el.querySelector("label, .fil-w-select-inline-label")?.textContent ?? "").includes(label),
          )
          ?.querySelector<HTMLSelectElement>("select");

      const scheduler = selectFor("Scheduler");
      if (!scheduler) throw new Error("no scheduler row in the panel");

      const pick = async (needle: string) => {
        const option = Array.from(scheduler.options).find((o) => (o.textContent ?? "").includes(needle));
        if (!option) return null;
        scheduler.value = option.value;
        scheduler.dispatchEvent(new Event("change", { bubbles: true }));
        await frames(12);
        return { value: option.value, title: scheduler.getAttribute("title") };
      };

      // Longest name ComfyUI ships on this axis, and the shortest.
      const longest = Array.from(scheduler.options)
        .map((o) => (o.textContent ?? "").trim())
        .sort((a, b) => b.length - a.length)[0];
      const shortest = Array.from(scheduler.options)
        .map((o) => (o.textContent ?? "").trim())
        .filter(Boolean)
        .sort((a, b) => a.length - b.length)[0];

      return { long: await pick(longest), short: await pick(shortest), longest, shortest };
    });

    // The long one is spelled out on hover...
    expect(result.long, "the longest scheduler name was not selectable").not.toBeNull();
    expect(result.long!.title, `"${result.longest}" should be readable on hover`).toBe(result.longest);

    // ...and the short one leaves the row's own tooltip alone.
    expect(result.short, "the shortest scheduler name was not selectable").not.toBeNull();
    expect(
      result.short!.title,
      `"${result.shortest}" fits, so it must not shadow the row's explanation`,
    ).toBeNull();
  });
});
