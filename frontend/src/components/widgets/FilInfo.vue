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
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fil-w-info[data-ok] {
  color: var(--fil-ok, #62c987);
}
.fil-w-info[data-err] {
  color: var(--fil-danger, #ef6666);
}
</style>