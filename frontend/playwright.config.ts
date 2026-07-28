import { defineConfig, devices } from "@playwright/test";

const BASE_URL = "http://localhost:5173/extensions/FiL_Design_ImageMind/";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // The HTML reporter serves its result on a port and waits, which hangs a CI
  // run; "github" turns failures into annotations readable on the run page,
  // the way the vitest step already does.
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "html",
  // Playwright starts the dev server itself, so the suite is one command
  // instead of two terminals. `--strictPort` makes a port clash fail loudly
  // rather than serving the tests from somewhere they will 404.
  webServer: {
    command: "npm run dev -- --port 5173 --strictPort",
    url: `${BASE_URL}test-playground.html`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
