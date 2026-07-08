/**
 * Pinia store initialization.
 *
 * Pinia is installed lazily so it works both in the browser (where Vue +
 * Pinia globals may already be present from ComfyUI Nodes 2.0) and in unit
 * tests (where a fresh Vue app is created per test).
 */
import { createPinia, type Pinia } from "pinia";
import type { ComfyApp } from "@/types/comfy";

let _pinia: Pinia | null = null;

export function initStores(_app: ComfyApp): Pinia {
  if (_pinia) return _pinia;
  _pinia = createPinia();
  return _pinia;
}

export function useActivePinia(): Pinia {
  if (!_pinia) {
    _pinia = createPinia();
  }
  return _pinia;
}

export function resetStoresForTests(): void {
  _pinia = null;
}