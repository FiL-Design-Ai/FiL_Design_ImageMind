/**
 * Typed HTTP client for the FiL_Design_ImageMind REST routes (see `ROUTE_PREFIX`).
 * Thin wrapper over `api.fetchApi` when running inside ComfyUI; falls
 * back to `window.fetch` during dev/tests so unit tests can mock with
 * `vi.stubGlobal("fetch", …)` without loading ComfyUI scripts.
 */
import { LOG_TAG, ROUTE_PREFIX } from "@/constants/brand";

/** GET /fil_design_imagemind/auth returns `get_safe_provider_accounts()` entries
 * (`common/provider_accounts.py`): stored API keys are never echoed back —
 * only safe metadata. `key` exists solely in the POST request body. */
export interface ProviderAccount {
  display_name?: string;
  local?: boolean;
  configured?: boolean;
  account_id?: string | null;
  base_url?: string | null;
}

/** POST /fil_design_imagemind/auth request-body shape (the only place a key is sent). */
export interface ProviderAccountUpdate {
  key?: string | null;
  account_id?: string | null;
  base_url?: string | null;
}

export interface ProviderAccounts {
  accounts: Record<string, ProviderAccount>;
}

/** Provider status labels emitted by `common/provider_runtime.py`
 * (`fetch_models_with_status` / `probe_provider`). "available" is the only
 * success value; everything else carries a user-facing `message`. */
export type ProviderStatus = "available" | "configured" | "auth_error" | "rate_limited" | "offline";

/** `fetch_models_with_status` returns
 * `{models: string[], status, message, vision_models: string[]}` — the
 * latter is the subset of `models` that `is_model_vision_capable()` (backend)
 * flagged, looked up by name rather than changing `models` to objects. */
export interface ProviderModelsResponse {
  models?: string[];
  status?: ProviderStatus;
  message?: string;
  vision_models?: string[];
}

/** `probe_provider` returns `{status, message, latency_ms}`. */
export interface ProbeResponse {
  status?: ProviderStatus;
  message?: string;
  latency_ms?: number;
}

export interface ImageDescriptor {
  filename: string;
  subfolder?: string;
  type?: string;
}

export interface CompareSaveResponse {
  status: "saved";
  image: { filename: string; subfolder: string; type: string };
}

export interface NodeContractsPayload {
  node_ids: Record<string, { title: string; category: string }>;
  schemas: Record<string, unknown>;
  data: Record<string, unknown>;
  settings_prefix: string;
}

async function readJson<T>(response: Response): Promise<T> {
  let data: unknown;
  try {
    data = await response.json();
  } catch {
    data = {};
  }
  if (!response.ok) {
    const msg = (data as { error?: string } | null)?.error || `HTTP ${response.status}`;
    throw new Error(msg);
  }
  return data as T;
}

interface ComfyApiStub {
  fetchApi: (url: string, opts?: RequestInit) => Promise<Response>;
  apiURL?: (route: string) => string;
}

/** Builds a `/view` URL for a `{filename, subfolder, type}` image descriptor
 * (the shape every ComfyUI `SaveImage`/`PreviewImage` node returns in `ui`).
 * Routed through `api.apiURL` when available so it works behind ComfyUI's
 * configurable base path; falls back to a bare relative URL otherwise. */
export function imageUrl(desc: ImageDescriptor): string {
  const params = new URLSearchParams({
    filename: desc.filename,
    type: desc.type || "temp",
    subfolder: desc.subfolder || "",
  });
  const route = `/view?${params.toString()}`;
  const w = globalThis as unknown as { api?: ComfyApiStub };
  return w.api?.apiURL ? w.api.apiURL(route) : route;
}

function getFetch(): (url: string, opts?: RequestInit) => Promise<Response> {
  const w = globalThis as unknown as {
    api?: ComfyApiStub;
    fetch?: typeof fetch;
  };
  if (w.api?.fetchApi) return (url, opts) => w.api!.fetchApi(url, opts);
  if (w.fetch) return w.fetch.bind(globalThis);
  throw new Error(`${LOG_TAG} no HTTP transport (api.fetchApi or window.fetch undefined)`);
}

export async function getJson<T>(url: string): Promise<T> {
  const res = await getFetch()(url);
  return readJson<T>(res);
}

export async function postJson<T>(url: string, body: unknown): Promise<T> {
  const res = await getFetch()(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return readJson<T>(res);
}

export const providerApi = {
  loadAccounts: () => getJson<ProviderAccounts>(`${ROUTE_PREFIX}/auth`),
  saveAccounts: (accounts: Record<string, ProviderAccountUpdate | { delete: true }>) =>
    postJson<{ status: string; accounts: Record<string, ProviderAccount> }>(`${ROUTE_PREFIX}/auth`, {
      accounts,
    }),
  loadModels: (provider: string, force = false) =>
    getJson<ProviderModelsResponse>(`${ROUTE_PREFIX}/models/${encodeURIComponent(provider)}${force ? "?force=1" : ""}`),
  probe: (provider: string, model = "") =>
    postJson<ProbeResponse>(`${ROUTE_PREFIX}/provider_probe`, { provider, model }),
  listProviders: () => getJson<{ providers: Record<string, string> }>(`${ROUTE_PREFIX}/providers`),
  saveCompareImage: (image: unknown) =>
    postJson<CompareSaveResponse>(`${ROUTE_PREFIX}/compare/save`, { image }),
  nodeContracts: () => getJson<NodeContractsPayload>(`${ROUTE_PREFIX}/node_contracts`),
};