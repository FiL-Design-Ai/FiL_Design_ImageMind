<script setup lang="ts" generic="T extends string">
/**
 * Scrollable chip list with optional search box. Equivalent of the legacy
 * `chipList()` factory. Used by Optic Scanner for `photo_style`,
 * `art_style`. Multi-select is intentionally NOT supported — the contract
 * layer treats these as single-value combos.
 */
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    options: T[];
    searchable?: boolean;
    disabled?: boolean;
    placeholder?: string;
  }>(),
  { searchable: true, placeholder: "Search…" },
);

const modelValue = defineModel<T | null>({ required: true });

const query = ref("");

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return props.options;
  return props.options.filter((opt) => opt.toLowerCase().includes(q));
});

function select(value: T) {
  if (props.disabled) return;
  if (value !== modelValue.value) modelValue.value = value;
}
</script>

<template>
  <div class="fil-w-chiplist">
    <input
      v-if="searchable"
      v-model="query"
      class="fil-w-search"
      type="search"
      :placeholder="placeholder"
      :aria-label="placeholder"
      :disabled="disabled"
      spellcheck="false"
    />
    <div class="fil-w-chip-scroll" role="radiogroup">
      <button
        v-for="opt in filtered"
        :key="opt"
        type="button"
        role="radio"
        class="fil-w-chip"
        :class="{ active: opt === modelValue, disabled }"
        :aria-checked="opt === modelValue"
        :disabled="disabled"
        :title="opt"
        @click="select(opt)"
      >
        {{ opt }}
      </button>
      <div v-if="filtered.length === 0" class="fil-w-chip-empty">
        {{ query ? "No matches" : "Empty" }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.fil-w-chiplist {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}
.fil-w-search {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 8px;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: 5px;
  color: var(--fil-text);
  font-family: inherit;
  font-size: 11px;
  outline: none;
}
.fil-w-search:focus {
  border-color: var(--fil-accent);
}
.fil-w-search:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: 1px;
}
.fil-w-chip-scroll {
  display: grid;
  gap: 3px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 2px;
}
.fil-w-chip-scroll::-webkit-scrollbar {
  width: 5px;
}
.fil-w-chip-scroll::-webkit-scrollbar-thumb {
  background: var(--fil-muted);
  border-radius: 3px;
}
.fil-w-chip-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.fil-w-chip {
  box-sizing: border-box;
  background: var(--fil-panel-alt);
  border: 1px solid var(--fil-border);
  border-radius: 5px;
  padding: 6px 4px;
  font-size: 10px;
  color: var(--fil-text);
  cursor: pointer;
  user-select: none;
  text-align: center;
  transition: background 0.08s, border-color 0.08s, color 0.08s;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  font-family: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fil-w-chip:hover:not(.disabled) {
  border-color: var(--fil-accent);
  color: var(--fil-text);
}
.fil-w-chip.active {
  background: var(--fil-accent);
  color: var(--fil-accent-ink);
  border-color: var(--fil-accent);
  font-weight: 500;
}
.fil-w-chip.disabled {
  opacity: 0.5;
  cursor: default;
}
.fil-w-chip:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fil-w-chip-empty {
  padding: 8px;
  text-align: center;
  color: var(--fil-muted);
  font-size: 11px;
}
</style>
