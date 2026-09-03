<script setup lang="ts">
/**
 * FiLShowAny — universal data inspector & pass-through monitor panel.
 * Displays live visual preview (images/masks) or formatted text/JSON/latents
 * with built-in toolbars and dynamic type badge.
 */
import { computed, ref } from "vue";
import { FilTextArea } from "@/components/widgets";
import { useI18n } from "@/composables/useI18n";
import { useWidgetSockets } from "@/composables/useWidgetSockets";
import { SHOW_ANY_SOCKET_INPUTS } from "@/nodes2/nodes/show_any";
import { imageUrl, type ImageDescriptor } from "@/api/client";
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

const images = computed<ImageDescriptor[]>(() => {
  const raw = props.state.ui?.images;
  return Array.isArray(raw) ? (raw as ImageDescriptor[]) : [];
});

const hasImage = computed(() => images.value.length > 0);
const viewMode = ref<"preview" | "info">("preview");

const activeImageUrl = computed(() => {
  if (images.value.length > 0) {
    return imageUrl(images.value[0]);
  }
  return "";
});

const isCopied = ref(false);
const copyImageToClipboard = async () => {
  if (!activeImageUrl.value) return;
  try {
    const res = await fetch(activeImageUrl.value);
    const blob = await res.blob();
    if (typeof ClipboardItem !== "undefined") {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 1500);
    }
  } catch {
    // fallback: copy text description
    navigator.clipboard.writeText(text.value);
  }
};

const openImageInTab = () => {
  if (activeImageUrl.value) {
    window.open(activeImageUrl.value, "_blank");
  }
};

const dataType = computed(() => {
  const raw = props.state.ui?.data_type;
  if (Array.isArray(raw) && raw.length > 0 && raw[0]) {
    return String(raw[0]);
  }
  if (typeof raw === "string" && raw) {
    return raw;
  }
  if (hasImage.value) return "IMAGE";
  if (isSourceLinked.value) return "INSPECTED";
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
      <div class="fil-sa-header-left">
        <span class="fil-sa-title">👁️ {{ t("sa_monitor", "Data Inspector") }}</span>
        <div v-if="hasImage" class="fil-sa-tabs">
          <button
            type="button"
            class="fil-sa-tab-btn"
            :class="{ active: viewMode === 'preview' }"
            @click="viewMode = 'preview'"
          >
            🖼️ {{ t("sa_tab_preview", "Preview") }}
          </button>
          <button
            type="button"
            class="fil-sa-tab-btn"
            :class="{ active: viewMode === 'info' }"
            @click="viewMode = 'info'"
          >
            📊 {{ t("sa_tab_info", "Info") }}
          </button>
        </div>
      </div>
      <span class="fil-sa-badge" :class="typeBadgeClass">{{ dataType }}</span>
    </div>

    <div class="fil-sa-content">
      <!-- Image Preview Mode -->
      <div v-if="hasImage && viewMode === 'preview'" class="fil-sa-img-container">
        <img :src="activeImageUrl" class="fil-sa-img" alt="Show Any Preview" />
        <div class="fil-sa-img-toolbar">
          <button
            type="button"
            class="fil-sa-tool-btn"
            @click="copyImageToClipboard"
            :title="t('sa_copy_img', 'Copy Image to Clipboard')"
          >
            <span v-if="isCopied" class="fil-sa-check">✔</span>
            <svg v-else class="fil-sa-icon" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
          </button>
          <button
            type="button"
            class="fil-sa-tool-btn"
            @click="openImageInTab"
            :title="t('sa_open_img', 'Open in New Tab')"
          >
            <svg class="fil-sa-icon" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Text / Info Mode -->
      <FilTextArea
        v-else
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
.fil-sa-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.fil-sa-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--fil-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.fil-sa-tabs {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(0, 0, 0, 0.3);
  padding: 1px 2px;
  border-radius: 4px;
  border: 1px solid var(--fil-border);
}
.fil-sa-tab-btn {
  font-size: 9.5px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 3px;
  border: none;
  background: transparent;
  color: var(--fil-muted);
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-sa-tab-btn:hover {
  color: var(--fil-text);
}
.fil-sa-tab-btn.active {
  background: color-mix(in srgb, var(--fil-accent, #38bdf8) 25%, transparent);
  color: var(--fil-accent, #38bdf8);
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
.fil-sa-img-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--fil-border);
  border-radius: var(--fil-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.fil-sa-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: calc(var(--fil-radius) - 1px);
}
.fil-sa-img-toolbar {
  position: absolute;
  bottom: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  padding: 3px 4px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  opacity: 0;
  transform: translateY(2px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fil-sa-img-container:hover .fil-sa-img-toolbar {
  opacity: 1;
  transform: translateY(0);
}
.fil-sa-tool-btn {
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  color: var(--fil-muted);
  cursor: pointer;
  transition: all 0.12s ease;
}
.fil-sa-tool-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: var(--fil-accent, #38bdf8);
}
.fil-sa-icon {
  width: 12px;
  height: 12px;
}
.fil-sa-check {
  font-size: 11px;
  color: #34d399;
  font-weight: bold;
}
</style>

