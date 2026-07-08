<script setup lang="ts">
/**
 * Thin wrapper mounted by `domWidgetHost.ts` around every node's own Vue
 * body — adds the shared "?" help badge in one place instead of every
 * per-node component wiring it individually (same rationale as the
 * "Change color…" menu item in nodeStyle.ts).
 */
import type { Component } from "vue";
import FilNodeHelpBadge from "@/components/widgets/FilNodeHelpBadge.vue";

defineProps<{ root: Component; state: Record<string, unknown>; comfyClass: string }>();
</script>

<template>
  <div class="fil-node-shell">
    <FilNodeHelpBadge :node-id="comfyClass" />
    <component :is="root" :state="state" />
  </div>
</template>

<style scoped>
.fil-node-shell {
  position: relative;
}
</style>
