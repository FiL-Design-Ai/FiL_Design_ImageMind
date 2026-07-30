<script setup lang="ts">
/** Status info line — ok/error/neutral variants. Mirrors `styledInfo()`. */
withDefaults(
  defineProps<{
    text?: string;
    ok?: boolean;
    err?: boolean;
  }>(),
  {},
);
</script>

<template>
  <div class="fil-w-info" :data-ok="ok || undefined" :data-err="err || undefined">
    {{ text }}
  </div>
</template>

<style scoped>
.fil-w-info {
  font-size: 11px;
  line-height: 1.5;
  /* Was a flat `rgba(255,255,255,0.45)`, which erased the line entirely on the
   * light theme — and this widget carries DatasetForge's path preview and the
   * "connect a provider" warning, so it has to survive every palette. */
  color: var(--fil-muted);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fil-w-info[data-ok] {
  color: var(--fil-ok);
}
.fil-w-info[data-err] {
  color: var(--fil-danger);
}
</style>
