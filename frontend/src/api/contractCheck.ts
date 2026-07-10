/**
 * Soft contract self-check.
 *
 * Fetches `/fil_design_imagemind/node_contracts` from the running ComfyUI server and
 * console-warns when local JS registration drifts from the server registry.
 * Pure runtime diagnostics — never blocks UI boot. Mirrors the legacy
 * `selfCheckNodeContracts()` in web/fil_design_imagemind.js.
 */
import { NODE_MODULES } from "@/nodes2/nodeRegistry";
import { LOG_TAG, ROUTE_PREFIX } from "@/constants/brand";

interface ContractResponse {
  node_ids?: Record<string, unknown>;
}

export async function selfCheckNodeContracts(): Promise<void> {
  if (typeof fetch === "undefined") return;
  let response: Response;
  try {
    response = await fetch(`${ROUTE_PREFIX}/node_contracts`);
  } catch {
    return; // ComfyUI not running (dev/test) — skip silently.
  }
  if (!response.ok) return;
  let data: ContractResponse;
  try {
    data = (await response.json()) as ContractResponse;
  } catch {
    return;
  }
  const declared = new Set(Object.keys(data.node_ids ?? {}));
  const local = new Set(Object.keys(NODE_MODULES));
  for (const id of declared) {
    if (!local.has(id)) {
      console.warn(`${LOG_TAG} server expects "${id}" but local JS does not register it`);
    }
  }
  for (const id of local) {
    if (!declared.has(id)) {
      console.warn(`${LOG_TAG} JS registers "${id}" but server does not expose a contract`);
    }
  }
}