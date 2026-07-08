/**
 * Type-only stub for ComfyUI's real "/scripts/app.js" module.
 *
 * TypeScript resolves specifiers starting with "/" as filesystem paths, not
 * ambient module names, so `declare module "/scripts/app.js" { ... }` in
 * env.d.ts is never actually matched (TS reports "Cannot find module"
 * before it ever consults the ambient-module table). Redirecting the
 * specifier here via `compilerOptions.paths` in tsconfig.json sidesteps
 * that — this file is never bundled, only type-checked; at runtime the
 * browser resolves the real "/scripts/app.js" from ComfyUI core.
 */
import type { ComfyApp } from "@/types/comfy";

export const app: ComfyApp = undefined as unknown as ComfyApp;
