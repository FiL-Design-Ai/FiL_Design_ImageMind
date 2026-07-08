<script setup lang="ts">
import type { IconName } from "@/composables/icons";
import { icon } from "@/composables/icons";

withDefaults(
  defineProps<{
    name: IconName;
    size?: number;
    title?: string;
  }>(),
  { size: 16 },
);

defineOptions({ name: "FilIcon" });
</script>

<template>
  <span
    class="fil-icon"
    :style="{ width: size + 'px', height: size + 'px' }"
    :title="title"
    role="img"
    :aria-label="title ?? name"
    v-html="icon(name)"
  />
</template>

<style scoped>
.fil-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
}
.fil-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
