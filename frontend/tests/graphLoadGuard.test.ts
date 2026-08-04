/**
 * The counter `channel.ts` checks before queuing an ambiguity check, so a
 * workflow load — a fresh open or a tab switch — never gets mistaken for a
 * wire the user just drew. See `graphLoadGuard.ts`'s own comment for the live
 * bug this exists to prevent.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { beginGraphConfigure, endGraphConfigure, graphBeingConfigured } from "@/nodes2/wireless";

describe("graphLoadGuard", () => {
  beforeEach(() => {
    // Drain any imbalance a previous test left — `endGraphConfigure` clamps
    // at zero, so this is always enough regardless of what came before.
    for (let i = 0; i < 5; i++) endGraphConfigure();
  });

  it("is false until a load begins", () => {
    expect(graphBeingConfigured()).toBe(false);
  });

  it("is true between begin and end", () => {
    beginGraphConfigure();
    expect(graphBeingConfigured()).toBe(true);
    endGraphConfigure();
    expect(graphBeingConfigured()).toBe(false);
  });

  it("stays true through a nested load — a subgraph's own restore inside the parent's", () => {
    beginGraphConfigure();
    beginGraphConfigure();
    endGraphConfigure(); // the inner (subgraph) load finishes first
    expect(graphBeingConfigured()).toBe(true); // the outer one is not done yet
    endGraphConfigure();
    expect(graphBeingConfigured()).toBe(false);
  });

  it("does not go negative on an unmatched end", () => {
    endGraphConfigure();
    endGraphConfigure();
    beginGraphConfigure();
    expect(graphBeingConfigured()).toBe(true);
    endGraphConfigure();
    expect(graphBeingConfigured()).toBe(false);
  });
});
