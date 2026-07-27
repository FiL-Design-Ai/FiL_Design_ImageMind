<script setup lang="ts">
import { computed, watch } from "vue";
import { useHelpStore } from "@/stores/helpStore";
import type { HelpDef } from "@/stores/helpStore";
import FilModal from "./FilModal.vue";
import FilIcon from "./FilIcon.vue";

const help = useHelpStore();

const currentDef = computed<HelpDef | null>(() => {
  const id = help.activeHelpId;
  return id ? help.get(id) ?? null : null;
});

const isOpen = computed({
  get: () => help.activeHelpId !== null,
  set: (v: boolean) => {
    if (!v) help.value_close();
  },
});

watch(currentDef, (def) => {
  if (!def) help.value_close();
});
</script>

<template>
  <FilModal v-model:open="isOpen" title="FiL LLM Help" width="600px" @close="help.value_close()">
    <template v-if="currentDef">
      <h2 class="fil-help-title">{{ currentDef.title }}</h2>
      <p v-if="currentDef.body" class="fil-help-body">{{ currentDef.body }}</p>
      <ul v-if="currentDef.bullets?.length">
        <li v-for="(b, i) in currentDef.bullets" :key="i" class="fil-help-bullet">
          <FilIcon name="chevronRight" :size="12" />
          <span>{{ b }}</span>
        </li>
      </ul>
      <table v-if="currentDef.table" class="fil-help-table">
        <thead>
          <tr>
            <th v-for="h in currentDef.table.headers" :key="h">{{ h }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, ri) in currentDef.table.rows" :key="ri">
            <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
      <pre v-if="currentDef.code" class="fil-help-code"><code>{{ currentDef.code }}</code></pre>
    </template>
    <p v-else class="fil-help-empty">No help available for this node.</p>
  </FilModal>
</template>

<style scoped>
.fil-help-title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 700;
  color: var(--fil-text);
}
.fil-help-body {
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--fil-muted);
}
.fil-help-bullet {
  display: flex;
  gap: 6px;
  align-items: flex-start;
  margin-bottom: 6px;
  font-size: 13px;
  color: var(--fil-muted);
}
.fil-help-bullet > span { flex: 1; }
.fil-help-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  font-size: 12px;
}
.fil-help-table th,
.fil-help-table td {
  text-align: left;
  padding: 6px 10px;
  border-bottom: 1px solid var(--fil-border);
}
.fil-help-table th {
  font-weight: 600;
  color: var(--fil-text);
}
.fil-help-table td {
  color: var(--fil-muted);
}
.fil-help-code {
  background: rgba(0,0,0,0.3);
  border-radius: 6px;
  padding: 12px;
  margin-top: 10px;
  overflow-x: auto;
  font-size: 12px;
  color: var(--fil-muted);
}
.fil-help-empty {
  color: var(--fil-muted);
  font-size: 13px;
}
</style>
