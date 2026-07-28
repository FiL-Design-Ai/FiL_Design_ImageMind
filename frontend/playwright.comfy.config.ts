import { defineConfig, devices } from "@playwright/test";

/**
 * The smoke suite, run against a real ComfyUI.
 *
 * Separate from `playwright.config.ts` because it needs the opposite setup:
 * no dev server, and a base URL pointing at a running ComfyUI that already
 * serves `frontend/dist` through WEB_DIRECTORY. That is the only place the
 * pack's registration, its extension hooks and its panels meet the real
 * LiteGraph — the component suite runs each widget in isolation and cannot
 * see a node that fails to register or a panel that never mounts.
 *
 * `COMFY_URL` overrides the default for a locally running instance.
 */
const BASE_URL = process.env.COMFY_URL ?? "http://127.0.0.1:8188";

export default defineConfig({
  testDir: "./tests/smoke",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
  },
  // ComfyUI loads models and scans custom nodes before it answers; the page
  // itself then has to boot the frontend bundle.
  timeout: 180_000,
  expect: { timeout: 30_000 },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
