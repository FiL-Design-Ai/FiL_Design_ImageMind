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
 * `COMFY_PYTHON` overrides the interpreter used to start one.
 */
const BASE_URL = process.env.COMFY_URL ?? "http://127.0.0.1:8188";

// Bare `python` is right in CI, where the workflow installs ComfyUI's
// requirements into the runner's interpreter. It is wrong on a portable install
// — ComfyUI-Easy-Install and the standalone builds keep their dependencies in
// `python_embeded`, and the system `python` has none of them. On 2026-07-29 that
// made this suite unrunnable locally: `main.py` died on `No module named
// 'sqlalchemy'` before the server ever came up, so the one suite that exercises
// the host seam could not be run on the very machine whose ComfyUI version the
// seam is written against.
//
//   COMFY_PYTHON=E:\...\python_embeded\python.exe npm run test:smoke
//
// Simpler still: start ComfyUI yourself and run the suite — `reuseExistingServer`
// below points it at whatever is already listening.
const PYTHON = process.env.COMFY_PYTHON ?? "python";

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
  // Playwright starts ComfyUI and waits for it, rather than a CI step doing it
  // in the background and hoping the process outlives the step. That hope was
  // the one assumption here that could not be checked without pushing, so it
  // is gone instead: this path is the same one the component suite already
  // uses, and it works the same way locally and in CI.
  //
  // `reuseExistingServer` is what keeps a local run pointed at the ComfyUI the
  // developer already has open — Playwright probes the URL first and only
  // spawns its own if nothing answers. In CI nothing is listening, so it starts
  // one; if something is, that is a misconfigured runner and should fail loudly.
  webServer: {
    command: `"${PYTHON}" main.py --cpu --port 8188 --listen 127.0.0.1`,
    // Relative to this config file: frontend → pack → custom_nodes → ComfyUI.
    cwd: "../../..",
    url: BASE_URL,
    // ComfyUI imports torch and scans every custom node before it answers.
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
  },
  // The page still has to boot the frontend bundle after the server answers.
  timeout: 180_000,
  expect: { timeout: 30_000 },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
