<script setup lang="ts">
/**
 * The left column of a `FilBrowser`: stacked groups of one-line filters.
 *
 * Purely a renderer — it is handed sections and reports which row was clicked.
 * Which rows exist, what they count and what picking one does are the
 * wrapper's business.
 *
 * The layout follows the pattern the Pixaroma workflow browser earned: the
 * user's own primary axis first (providers, style sources), derived groupings
 * below it under their own heading, and a count on every row so the list says
 * how much is behind each filter before it is clicked.
 */
import FilIcon from "./FilIcon.vue";
import type { IconName } from "@/composables/icons";
import type { BrowserSidebarRow, BrowserSidebarSection } from "@/lib/browserTypes";

const props = defineProps<{
  sections: BrowserSidebarSection[];
  /**
   * The row id (or ids) currently in force.
   *
   * An array, because a column can carry more than one axis at once: the model
   * picker's provider is one choice and its type/tier facets are others, and
   * they are all rows in the same list. A single string covers the common case.
   */
  active: string | string[];
}>();

const emit = defineEmits<{ select: [id: string] }>();

function isOn(id: string): boolean {
  return Array.isArray(props.active) ? props.active.includes(id) : props.active === id;
}

function indentStyle(row: BrowserSidebarRow) {
  return row.indent ? { paddingLeft: `${8 + row.indent * 11}px` } : undefined;
}
</script>

<template>
  <div class="fb-side-inner">
    <template v-for="section in sections" :key="section.id">
      <div v-if="section.heading" class="fb-grouphead">{{ section.heading }}</div>
      <button
        v-for="row in section.rows"
        :key="row.id"
        type="button"
        class="fb-row"
        :class="{ on: isOn(row.id), muted: row.muted }"
        :style="indentStyle(row)"
        :title="row.title || row.label"
        :aria-pressed="isOn(row.id)"
        @click="emit('select', row.id)"
      >
        <span v-if="row.dot" class="fb-dot" :style="{ background: row.dot }" />
        <FilIcon v-if="row.iconName" :name="(row.iconName as IconName)" :size="14" class="fb-row-logo" />
        <span v-if="row.icon" class="fb-row-icon">{{ row.icon }}</span>
        <span class="fb-row-label">{{ row.label }}</span>
        <span v-if="row.count != null" class="fb-row-count">{{ row.count }}</span>
      </button>
    </template>
  </div>
</template>

<style scoped>
.fb-side-inner {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 6px 6px 12px;
}
.fb-grouphead {
  padding: 12px 8px 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fil-muted);
}
/* The first heading sits right under the top of the column and needs no
   extra air above it. */
.fb-grouphead:first-child {
  padding-top: 2px;
}
.fb-row {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
  min-height: 26px;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: var(--fil-text);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: background 0.1s, border-color 0.1s, color 0.1s;
}
.fb-row:hover {
  background: var(--fil-surface-2);
}
.fb-row.on {
  background: color-mix(in srgb, var(--fil-accent) 16%, transparent);
  border-color: var(--fil-accent);
  color: var(--fil-accent-text);
  font-weight: 600;
}
.fb-row.muted {
  color: var(--fil-muted);
}
.fb-row:focus-visible {
  outline: 2px solid var(--fil-accent);
  outline-offset: -2px;
}
.fb-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.fb-row-icon {
  flex-shrink: 0;
  font-size: 12px;
  line-height: 1;
}
.fb-row-logo {
  flex-shrink: 0;
}
/* The label is what gives way when the column is dragged narrow — the count
   must stay readable, it is the reason the row is worth clicking. */
.fb-row-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fb-row-count {
  flex-shrink: 0;
  padding: 1px 5px;
  border-radius: 99px;
  background: var(--fil-pill-bg);
  color: var(--fil-muted);
  font-size: 10px;
  font-weight: 600;
}
.fb-row.on .fb-row-count {
  background: color-mix(in srgb, var(--fil-accent) 28%, transparent);
  color: var(--fil-accent-text);
}
</style>
