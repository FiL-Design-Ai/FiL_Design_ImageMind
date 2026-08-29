<script setup lang="ts">
/**
 * FiLShowAny — universal data inspector & pass-through monitor panel.
 * Displays formatted text, JSON, latents, or image metadata with a built-in
 * toolbar (Copy, Paste, Clear, Live Counter) and type badge.
 */
import { computed } from "vue";
import { FilTextArea } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { SHOW_ANY_SOCKET_INPUTS } from "@/nodes2/nodes/show_any";
import type { FilNodeState } from "@/nodes2/filState";

const props = defineProps<{ state: FilNodeState }>();
const { t } = useI18n();

const { setFieldEl, isLinked } = useWidgetSockets(props.state, SHOW_ANY_SOCKET_INPUTS);

const text = computed({
  get: () => String(props.state.nodeState.text ?? props.state.initialValues.text ?? ""),
  set: (v: string) => {
    props.state.nodeState.text = v;
  },
});

const isSourceLinked = computed(() => isLinked("source"));

const dataType = computed(() => {
  if (isSourceLinked.value) {
    const raw = props.state.ui?.data_type;
    if (Array.isArray(raw) && raw.length > 0) {
      return String(raw[0]);
    }
    if (typeof raw === "string" && raw) {
      return raw;
    }
    return "INSPECTED";
  }
  return text.value ? "STRING" : "STANDALONE";
});

const typeBadgeClass = computed(() => {
  const dt = dataType.value.toUpperCase();
  if (dt.includes("IMAGE")) return "badge-image";
  if (dt.includes("LATENT")) return "badge-latent";
  if (dt.includes("JSON") || dt.includes("DICT") || dt.includes("LIST")) return "badge-json";
  if (dt.includes("MODEL") || dt.includes("CLIP") || dt.includes("VAE")) return "badge-model";
  if (dt.includes("CONDITIONING")) return "badge-cond";
  return "badge-default";
});
</script>

<template>
  <div class="fil-sa-root">
    <div class="fil-sa-header">
      <span class="fil-sa-title">👁️ {{ t("sa_monitor", "Data Inspector") }}</span>
      <span class="fil-sa-badge" :class="typeBadgeClass">{{ dataType }}</span>
    </div>
    <div class="fil-sa-content">
      <FilTextArea
        :ref="(el: unknown) => setFieldEl('text', el)"
        class="fil-sa-grow"
        v-model="text"
        :rows="4"
        toolbar
        :linked="isSourceLinked"
        :placeholder="t('sa_placeholder', 'Connect any signal to `source` or type text here…')"
        :title="t('sa_tooltip', 'Displays formatted data or text. 1-click copy with live word/char counters.')"
      />
    </div>
  </div>
</template>

<style scoped>
.fil-sa-root {
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
  height: 100%;
}
.fil-sa-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  flex-shrink: 0;
  padding: 0 2px;
}
.fil-sa-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--fil-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.fil-sa-badge {
  font-size: 9.5px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  user-select: none;
}
.badge-default {
  background: color-mix(in srgb, var(--fil-accent, #38bdf8) 18%, transparent);
  color: var(--fil-accent, #38bdf8);
  border: 1px solid color-mix(in srgb, var(--fil-accent, #38bdf8) 35%, transparent);
}
.badge-image {
  background: rgba(16, 185, 129, 0.18);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.35);
}
.badge-latent {
  background: rgba(168, 85, 247, 0.18);
  color: #c084fc;
  border: 1px solid rgba(168, 85, 247, 0.35);
}
.badge-json {
  background: rgba(245, 158, 11, 0.18);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.35);
}
.badge-model {
  background: rgba(236, 72, 153, 0.18);
  color: #f472b6;
  border: 1px solid rgba(236, 72, 153, 0.35);
}
.badge-cond {
  background: rgba(99, 102, 241, 0.18);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.35);
}
.fil-sa-content {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
}
.fil-sa-content > :first-child {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.fil-sa-grow {
  flex: 1 1 auto;
  min-height: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
</style>
