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

const imgDimensions = ref<{ width: number; height: number } | null>(null);

const onImgLoad = (e: Event) => {
  const el = e.target as HTMLImageElement;
  if (el.naturalWidth && el.naturalHeight) {
    imgDimensions.value = { width: el.naturalWidth, height: el.naturalHeight };
  }
};

const parsedDimensions = computed<{ width: number; height: number } | null>(() => {
  if (imgDimensions.value) return imgDimensions.value;
  const match =
    text.value.match(/Resolution:\s*(\d+)\s*×\s*(\d+)/i) ||
    text.value.match(/\[.*H=(\d+),\s*W=(\d+)/i);
  if (match) {
    const isHW = text.value.includes("H=");
    const width = Number(isHW ? match[2] : match[1]);
    const height = Number(isHW ? match[1] : match[2]);
    if (width && height) return { width, height };
  }
  return null;
});

const displayDimensions = computed(() => {
  const dims = parsedDimensions.value;
  if (!dims) return "";
  const count = images.value.length;
  return count > 1 ? `${dims.width} × ${dims.height} (${count})` : `${dims.width} × ${dims.height}`;
});
</script>

<template>
  <div class="fil-sa-root">
    <div class="fil-sa-content">
      <!-- Image Preview Mode -->
      <div v-if="hasImage" class="fil-sa-img-container">
        <div class="fil-sa-img-box">
          <img
            :src="activeImageUrl"
            class="fil-sa-img"
            alt="Show Any Preview"
            @load="onImgLoad"
          />
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
        <div v-if="displayDimensions" class="fil-sa-img-footer">
          {{ displayDimensions }}
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
  padding: var(--fil-node-pad);
  color: var(--fil-text);
  font-family: ui-sans-serif, system-ui, sans-serif;
  height: 100%;
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
.fil-sa-grow :deep(.fil-w-textarea.is-linked) {
  border: 1px solid var(--fil-border);
  background: rgba(0, 0, 0, 0.4);
  color: var(--fil-text);
  cursor: text;
  line-height: 1.45;
  transition: border-color 0.12s ease, background-color 0.12s ease;
}
.fil-sa-grow :deep(.fil-w-textarea.is-linked:hover) {
  border-color: color-mix(in srgb, var(--fil-border) 70%, var(--fil-accent));
}
.fil-sa-grow :deep(.fil-w-textarea.is-linked:focus) {
  border-color: var(--fil-accent);
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
  flex-direction: column;
  overflow: hidden;
}
.fil-sa-img-box {
  position: relative;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.fil-sa-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.fil-sa-img-footer {
  flex: 0 0 auto;
  width: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.35);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  color: var(--fil-muted);
  text-align: center;
  user-select: text;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

