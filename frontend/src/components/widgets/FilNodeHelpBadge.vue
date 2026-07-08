<script setup lang="ts">
/**
 * Small "?" badge floating in the top-right corner of every FiL node body.
 * Opens the existing global `FilHelpPopup` for this node's help entry
 * (`helpDefaults.ts`, keyed by `comfyClass`) — no new help content system,
 * just a persistent, click-anywhere-on-the-node entry point for the one
 * that already exists (previously reachable only via the `?` keyboard
 * shortcut with the node selected).
 */
import FilIcon from "@/components/widgets/FilIcon.vue";
import { useHelpStore } from "@/stores/helpStore";
import { useI18n } from "@/composables/useI18n";

const props = defineProps<{ nodeId: string }>();
const help = useHelpStore();
const { t } = useI18n();

function open() {
  help.value_open(props.nodeId);
}
</script>

<template>
  <button type="button" class="fil-node-help-badge" :title="t('tt_node_help', 'Help for this node')" @click="open">
    <FilIcon name="help" :size="13" />
  </button>
</template>

<style scoped>
.fil-node-help-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(0, 0, 0, 0.25);
  color: var(--fil-muted, rgba(255, 255, 255, 0.55));
  cursor: pointer;
  outline: none;
  z-index: 5;
  transition: background 0.08s, color 0.08s, border-color 0.08s;
}
.fil-node-help-badge:hover,
.fil-node-help-badge:focus-visible {
  background: var(--fil-accent);
  border-color: var(--fil-accent);
  color: #fff;
}
</style>
