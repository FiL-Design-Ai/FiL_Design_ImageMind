/**
 * Entry point for the FiL_LLM ComfyUI frontend extension.
 *
 * ComfyUI loads this file from /extensions/FiL_LLM/fil_llm.js (built by
 * Vite as a real ES module) via a dynamic `import()`.
 *
 * `app` is imported directly from "/scripts/app.js" (a real ES module core
 * exposes) rather than read off `window.app`. This matters: verified against
 * a real ComfyUI 1.45.20 instance, `window.app` is only assigned *after*
 * core has already defined every node type and fired `beforeRegisterNodeDef`
 * for each already-registered extension — so an extension that waits for
 * `window.app` to appear before calling `app.registerExtension(...)`
 * permanently misses that hook for every node type on that page load, no
 * matter how short the wait. A static ESM import of "/scripts/app.js"
 * doesn't have this problem: module resolution guarantees that module's
 * top-level code (which creates and exports `app`) has already run before
 * this file's own top-level code starts, so `app` is available synchronously
 * — this is also how every other working ComfyUI extension does it.
 *
 * This file wires up the Vue 3 + Pinia + TS stack and delegates per-node
 * UI to the modules under src/nodes2/ and src/components/nodes/.
 */
import { app } from "/scripts/app.js";
import { createFilExtension } from "@/nodes2/filExtension";
import { injectFilBrandVars } from "@/styles/brand";
import { initStores } from "@/stores";
import { selfCheckNodeContracts } from "@/api/contractCheck";

injectFilBrandVars();
initStores(app);
void selfCheckNodeContracts().catch((err) => {
  console.warn("[FiL_LLM] contract self-check failed:", err);
});

const ext = createFilExtension(app);
app.registerExtension(ext);
console.info(`[FiL_LLM] extension registered as "${ext.name}"`);
