<script setup lang="ts">
/**
 * Thin wrapper mounted by `domWidgetHost.ts` around every node's own Vue
 * body (same rationale as the "Change color…" menu item in nodeStyle.ts —
 * one shared mount point instead of every per-node component wiring
 * things individually).
 */
import type { Component } from "vue";

defineProps<{ root: Component; state: Record<string, unknown>; comfyClass: string }>();
</script>

<template>
  <div class="fil-node-shell">
    <component :is="root" :state="state" />
  </div>
</template>

<style scoped>
.fil-node-shell {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  /* Pass the host's height through to the node body. `growable` nodes (see
   * domWidgetHost.ts) give the host an explicit pixel height so their panel can
   * hand the spare space to flexible fields; everywhere else the host stays
   * `height: auto`, where a percentage resolves to auto and this is inert. */
  height: 100%;
}
</style>
