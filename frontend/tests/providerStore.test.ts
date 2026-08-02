import { describe, it, expect, beforeEach, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";

/**
 * The store's job here is to open as few requests to a provider as the answer
 * needs. Two things do that: the five-minute TTL (already visible to the user as
 * the picker's "Updated: 12s" label) and the in-flight map tested below.
 *
 * The map is what the TTL cannot do. Several callers ask for the same list in
 * the same tick — two Provider Loader nodes mounting together, plus the picker
 * opening over them — and at that moment nothing is cached yet, so each call
 * used to reach the provider on its own.
 */
const loadModels = vi.fn();

vi.mock("@/api/client", () => ({
  providerApi: {
    loadModels: (provider: string, force?: boolean) => loadModels(provider, force),
    loadAccounts: vi.fn(),
    saveAccounts: vi.fn(),
    probe: vi.fn(),
    listProviders: vi.fn(),
  },
}));

const { useProviderStore } = await import("@/stores/providerStore");

/** A request that only settles when the test says so. */
function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

beforeEach(() => {
  setActivePinia(createPinia());
  loadModels.mockReset();
});

describe("providerStore.loadModels — one request per answer", () => {
  it("serves simultaneous callers from a single request", async () => {
    const first = deferred<{ models: string[] }>();
    loadModels.mockReturnValue(first.promise);
    const store = useProviderStore();

    const a = store.loadModels("openrouter");
    const b = store.loadModels("openrouter");
    const c = store.loadModels("openrouter");
    first.resolve({ models: ["gpt-4o", "claude"] });

    expect(await a).toEqual(["gpt-4o", "claude"]);
    expect(await b).toEqual(["gpt-4o", "claude"]);
    expect(await c).toEqual(["gpt-4o", "claude"]);
    expect(loadModels).toHaveBeenCalledTimes(1);
  });

  it("keeps different providers apart", async () => {
    loadModels.mockImplementation((provider: string) =>
      Promise.resolve({ models: [`${provider}-model`] }));
    const store = useProviderStore();

    const [ollama, groq] = await Promise.all([
      store.loadModels("ollama"),
      store.loadModels("groq"),
    ]);

    expect(ollama).toEqual(["ollama-model"]);
    expect(groq).toEqual(["groq-model"]);
    expect(loadModels).toHaveBeenCalledTimes(2);
  });

  it("does not serve a forced refresh from a plain load already in the air", async () => {
    const plain = deferred<{ models: string[] }>();
    const forced = deferred<{ models: string[] }>();
    loadModels.mockImplementationOnce(() => plain.promise).mockImplementationOnce(() => forced.promise);
    const store = useProviderStore();

    // `force` is passed on to the backend to bypass ITS cache, so the ↻ button
    // must reach the provider even while a plain load is pending.
    const a = store.loadModels("openai");
    const b = store.loadModels("openai", true);
    plain.resolve({ models: ["stale"] });
    forced.resolve({ models: ["fresh"] });

    expect(await a).toEqual(["stale"]);
    expect(await b).toEqual(["fresh"]);
    expect(loadModels).toHaveBeenCalledTimes(2);
    expect(loadModels).toHaveBeenNthCalledWith(2, "openai", true);
  });

  it("releases the slot once the request settles, so a later refresh still goes out", async () => {
    loadModels.mockResolvedValue({ models: ["a"] });
    const store = useProviderStore();

    await store.loadModels("groq");
    await store.loadModels("groq", true);

    expect(loadModels).toHaveBeenCalledTimes(2);
  });

  it("releases the slot after a failure too", async () => {
    loadModels.mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce({ models: ["a"] });
    const store = useProviderStore();

    // A failed load that left its promise in the map would make every later
    // attempt replay the same rejection, and the provider could never come back
    // without a page reload.
    await expect(store.loadModels("lmstudio")).rejects.toThrow("offline");
    expect(await store.loadModels("lmstudio")).toEqual(["a"]);
    expect(loadModels).toHaveBeenCalledTimes(2);
  });
});
