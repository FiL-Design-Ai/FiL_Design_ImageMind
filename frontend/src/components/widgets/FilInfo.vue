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
  /* Wraps instead of ellipsising. Every caller here is a whole sentence, not
   * a value: Dataset Forge's "connect a Provider Loader to caption — or fill
   * in captions below" lost the half that says what to do instead, and
   * Provider Loader passes the provider's own error text through
   * (`probe.message`), which is exactly the string a user must be able to
   * read. Measured live at the 350px node minimum: the warning was cut at
   * "⚠️ Connect 🔌 Provider". `nowrap` bought one-line tidiness at the cost
   * of the message. `overflow-wrap` covers a single unbroken token (a long
   * path in the folder preview) so it breaks rather than widening the node. */
  overflow-wrap: anywhere;
}
.fil-w-info[data-ok] {
  color: var(--fil-ok);
}
.fil-w-info[data-err] {
  color: var(--fil-danger);
}
</style>
