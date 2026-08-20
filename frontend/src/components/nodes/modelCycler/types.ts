/**
 * The shapes the Model Cycler panel passes between its parts.
 *
 * One file so the composables and the components agree on them without either
 * importing the other — the panel is the only place that knows all four.
 */

/** A row in the queue: one model file, and whether the cycle visits it. */
export interface ModelItem {
  id: string;
  name: string;
  enabled: boolean;
  /** A freshly added row opens its picker; a duplicated one does not. */
  autoOpen?: boolean;
}

/** Everything the info dialog shows about one model. */
export interface ModelInfoDetail {
  index: number;
  fullName: string;
  cleanName: string;
  subfolder: string;
  extension: string;
  mode: string;
  size_str?: string;
  mtime_str?: string;
  arch?: string;
  precision?: string;
  has_preview?: boolean;
  model_title?: string;
  base_model?: string;
  creator?: string;
  download_count?: number;
  thumbs_up?: number;
  trained_words?: string[];
  sample_prompts?: string[];
  has_meta_json?: boolean;
  metadata?: Record<string, string>;
  isLoading?: boolean;
  /** What the Civitai lookup did: cached | fetched | not_found | offline | … */
  civitai_status?: string;
}

/** What the backend reports about the run that just happened. */
export interface CyclerRun {
  position: number;
  total: number;
  model_name: string;
  clean_name: string;
}

/**
 * The folder the source mode names, in the spelling every route expects.
 * Written out in four places before this, and one of them had drifted.
 */
export function folderKey(sourceMode: string): "diffusion_models" | "checkpoints" {
  return sourceMode === "Diffusion Models" ? "diffusion_models" : "checkpoints";
}
