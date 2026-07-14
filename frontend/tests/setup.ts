import { vi } from "vitest";

/**
 * Global vitest setup.
 *
 * ComfyUI exposes an `api` object with `fetchApi`, which `@/api/client`
 * prefers as its HTTP transport. Under jsdom there is no server, so any
 * composable that fetches on mount (e.g. `useI18n` -> `/locale/{lang}`)
 * would attempt a real relative-URL fetch and log a noisy failure.
 *
 * Provide a minimal stub that resolves to empty JSON. Components fall back
 * to their built-in defaults, keeping component tests hermetic and quiet.
 */
(globalThis as unknown as { api: unknown }).api = {
  apiURL: (route: string) => route,
  fetchApi: vi.fn(async () =>
    new Response("{}", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  ),
};
