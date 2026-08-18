/**
 * The dialog behind a row's ⓘ: what the file is, plus whatever Civitai knows.
 *
 * The path is split locally so the dialog can open filled in, and the request
 * only widens it. A reply for a model the user has since moved on from is
 * dropped — the check on `fullName` is what keeps a slow lookup from landing in
 * someone else's dialog.
 */
import { ref, type Ref } from "vue";
import { getJson } from "@/api/client";
import { ROUTE_PREFIX } from "@/constants/brand";
import { folderKey, type ModelInfoDetail } from "./types";

export function useModelInfo(sourceMode: Ref<string>) {
  const open = ref(false);
  const detail = ref<ModelInfoDetail | null>(null);
  const copyMessage = ref("");

  function splitPath(name: string) {
    const parts = name.replace(/\\/g, "/").split("/");
    const baseName = parts[parts.length - 1] || "";
    const dot = baseName.lastIndexOf(".");
    return {
      subfolder: parts.length > 1 ? parts.slice(0, -1).join("/") : "(root)",
      cleanName: dot === -1 ? baseName : baseName.substring(0, dot),
      extension: dot === -1 ? "(none)" : baseName.substring(dot),
    };
  }

  async function show(name: string, index: number) {
    const trimmed = name.trim();
    const { subfolder, cleanName, extension } = splitPath(trimmed);

    detail.value = {
      index: index + 1,
      fullName: trimmed,
      cleanName,
      subfolder,
      extension,
      mode: sourceMode.value,
      isLoading: true,
    };
    open.value = true;
    copyMessage.value = "";

    // `fetch=1` — the dialog is an explicit question about one model, so this
    // is where a Civitai lookup belongs; nothing else in the panel asks for it.
    const res = await getJson<Partial<ModelInfoDetail> & { error?: string }>(
      `${ROUTE_PREFIX}/model_info?mode=${folderKey(sourceMode.value)}&fetch=1&path=${encodeURIComponent(trimmed)}`
    ).catch(() => null);

    // The user may have closed this one and opened another while we waited.
    if (!detail.value || detail.value.fullName !== trimmed) return;

    const base = {
      ...detail.value,
      size_str: res?.size_str || "N/A",
      mtime_str: res?.mtime_str || "N/A",
      arch: res?.arch || "Diffusion Model",
      precision: res?.precision || "FP16",
      isLoading: false,
    };

    detail.value =
      res && !res.error
        ? {
            ...base,
            has_preview: Boolean(res.has_preview),
            model_title: res.model_title || "",
            base_model: res.base_model || "",
            creator: res.creator || "",
            download_count: res.download_count || 0,
            thumbs_up: res.thumbs_up || 0,
            trained_words: res.trained_words || [],
            sample_prompts: res.sample_prompts || [],
            has_meta_json: Boolean(res.has_meta_json),
            metadata: res.metadata || {},
          }
        : base;
  }

  function copy(text: string, label: string) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    copyMessage.value = `Copied ${label} to clipboard!`;
    setTimeout(() => {
      copyMessage.value = "";
    }, 2500);
  }

  return { open, detail, copyMessage, show, copy };
}

export type ModelInfo = ReturnType<typeof useModelInfo>;
