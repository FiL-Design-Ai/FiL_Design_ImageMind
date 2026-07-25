import type { ComfyExtensionSettings } from "@/types/comfy";
import { postJson } from "@/api/client";
import { ROUTE_PREFIX, SETTINGS_CATEGORY } from "@/constants/brand";

function onLogLevelChange(newValue: unknown): void {
  postJson(`${ROUTE_PREFIX}/log_level`, { level: String(newValue) }).catch(() => {});
}

export const LOGGING_SETTINGS: ComfyExtensionSettings[] = [
  {
    id: "FiL_Design_ImageMind.Logging.Level",
    name: "Log level",
    type: "combo",
    defaultValue: "WARNING",
    options: ["DEBUG", "INFO", "WARNING", "ERROR"],
    category: [SETTINGS_CATEGORY, "Logging"],
    tooltip: "Python backend log verbosity for this node pack.",
    onChange: onLogLevelChange,
  },
];

/** Push the stored setting to the backend at startup (the backend always boots at the config.yaml default). */
export function applyStartupLogLevel(readSetting: <T>(id: string, fallback: T) => T): void {
  const stored = readSetting<string>("FiL_Design_ImageMind.Logging.Level", "WARNING");
  onLogLevelChange(stored);
}
