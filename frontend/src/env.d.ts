/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}

// ComfyUI external scripts. TS resolves specifiers starting with "/" as
// filesystem paths, never as ambient module names, so `declare module
// "/scripts/app.js"` here would silently never match — the real redirect
// for that import is the `paths` entry in tsconfig.json pointing at
// src/types/comfyAppModule.ts. dom_widget.js isn't imported anywhere
// (declared for completeness only), so an ambient stub is harmless here.
declare module "/scripts/dom_widget.js" {
  export const DOMWidget: unknown;
}
