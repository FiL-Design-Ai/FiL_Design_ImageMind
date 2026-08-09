<script setup lang="ts">
/**
 * FiLTileAssembly Vue panel — a single description line.
 *
 * The node has no widgets of its own, so the panel's other job is structural:
 * mounting it puts `.fil-node-shell` into the node's DOM, which is what
 * `styles/vueNodeSkin.ts` keys the themed chrome off under the Vue renderer.
 * Without a shell the node wore ComfyUI's stock light surfaces.
 */
import FilInfo from "@/components/widgets/FilInfo.vue";

defineProps<{ state: Record<string, unknown> }>();
</script>

<template>
  <div class="fil-tile-assembly-panel">
    <FilInfo text="Feathers processed tiles back into one image." />
  </div>
</template>

<style scoped>
.fil-tile-assembly-panel {
  padding: 2px 0;
}
</style>
