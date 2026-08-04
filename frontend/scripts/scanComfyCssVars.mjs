/**
 * Which CSS custom properties does the shipped ComfyUI frontend define?
 *
 * This pack themes its own nodes; theming the ComfyUI chrome around them
 * means overriding the frontend's own CSS variables from the `<style>` tag
 * this extension injects. The list of available "handles" changes with every
 * ComfyUI frontend release, so rather than maintaining the map by hand it is
 * generated straight from the installed `comfyui_frontend_package` build:
 *
 *   node scripts/scanComfyCssVars.mjs                # auto-locate the build
 *   node scripts/scanComfyCssVars.mjs <static-dir>   # explicit path
 *
 * Output: docs/comfyui-css-variables.md (committed — regenerate after
 * upgrading ComfyUI, then eyeball the diff before re-targeting themes).
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const FRONTEND = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_ROOT = resolve(FRONTEND, "..");
const OUTPUT_FILE = join(PROJECT_ROOT, "docs", "comfyui-css-variables.md");

/** Definitions only — `--foo:` — not `var(--foo)` usages. */
const DEF_RE = /(--[A-Za-z0-9_-]+)\s*:/g;

/**
 * Known layouts for the frontend build, relative to the ComfyUI root (two
 * levels above this project: custom_nodes/FiL_Design_ImageMind). Portable
 * installs keep the venv beside ComfyUI; standard installs put site-packages
 * inside a venv under it.
 */
function candidateStaticDirs(comfyRoot) {
  const pkg = join("site-packages", "comfyui_frontend_package", "static");
  return [
    join(comfyRoot, "..", "python_embeded", "Lib", pkg),
    join(comfyRoot, "venv", "Lib", pkg),
    join(comfyRoot, ".venv", "Lib", pkg),
  ];
}

function findStaticDir() {
  const explicit = process.argv[2];
  if (explicit) {
    const dir = resolve(explicit);
    if (!existsSync(dir)) {
      console.error(`Not a directory: ${dir}`);
      process.exit(1);
    }
    return dir;
  }
  const comfyRoot = resolve(PROJECT_ROOT, "..", "..");
  for (const candidate of candidateStaticDirs(comfyRoot)) {
    if (existsSync(candidate)) return candidate;
  }
  console.error(
    "Could not locate comfyui_frontend_package/static automatically.\n" +
      "Pass the path explicitly: node scripts/scanComfyCssVars.mjs <static-dir>",
  );
  process.exit(1);
}

function readComfyVersion(staticDir) {
  // Five levels above static/: the ComfyUI root itself for venv layouts, the
  // install dir (with ComfyUI as a sibling "ComfyUI" folder) for portable
  // python_embeded layouts.
  const base = resolve(staticDir, "..", "..", "..", "..", "..");
  const candidates = [join(base, "comfyui_version.py"), join(base, "ComfyUI", "comfyui_version.py")];
  for (const versionFile of candidates) {
    if (!existsSync(versionFile)) continue;
    const match = readFileSync(versionFile, "utf8").match(/__version__\s*=\s*"([^"]+)"/);
    if (match) return match[1];
  }
  return "unknown";
}

function collectVariables(staticDir) {
  const counts = new Map();
  const stack = [staticDir];
  while (stack.length > 0) {
    const dir = stack.pop();
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(path);
        continue;
      }
      // .map files mirror the sources and would double-count everything.
      if (!/\.(css|js)$/.test(entry.name)) continue;
      const text = readFileSync(path, "utf8");
      for (const match of text.matchAll(DEF_RE)) {
        counts.set(match[1], (counts.get(match[1]) || 0) + 1);
      }
    }
  }
  return counts;
}

/** First matching predicate wins, so order matters. */
const GROUPS = [
  ["PrimeVue tokens (`--p-*`)", (name) => name.startsWith("--p-")],
  ["Legacy ComfyUI (`--comfy-*`)", (name) => name.startsWith("--comfy-")],
  ["Node appearance (`--node-*`)", (name) => name.startsWith("--node-")],
  ["Interface & panels (`--interface-*`, `--palette-*`)", (name) => name.startsWith("--interface-") || name.startsWith("--palette-")],
  ["Dialogs & modals (`--modal-*`, `--dialog-*`)", (name) => name.startsWith("--modal-") || name.startsWith("--dialog-")],
  ["Sidebar (`--sidebar-*`)", (name) => name.startsWith("--sidebar-")],
  ["Tailwind v4 palette (`--color-*`)", (name) => name.startsWith("--color-")],
  ["Tailwind internals (`--tw-*`)", (name) => name.startsWith("--tw-")],
  ["Other semantic tokens", () => true],
];

function groupVariables(counts) {
  const sorted = [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const grouped = GROUPS.map(([title]) => ({ title, items: [] }));
  for (const [name, n] of sorted) {
    const index = GROUPS.findIndex(([, test]) => test(name));
    grouped[index].items.push([name, n]);
  }
  return grouped.filter((group) => group.items.length > 0);
}

function renderMarkdown(staticDir, version, counts, grouped) {
  const today = new Date().toISOString().slice(0, 10);
  const lines = [
    "# ComfyUI CSS variables (theming map)",
    "",
    "> **Generated file** — produced by `frontend/scripts/scanComfyCssVars.mjs`.",
    "> Do not edit by hand; regenerate after upgrading ComfyUI:",
    "> `cd frontend && npm run scan:comfy-vars`",
    "",
    `- Source: \`comfyui_frontend_package\` — \`${staticDir}\``,
    `- ComfyUI version: ${version}`,
    `- Generated: ${today}`,
    `- Total unique variables: ${counts.size}`,
    "",
    "## How to use",
    "",
    "These are the variables the ComfyUI frontend defines, i.e. the handles a",
    "custom-node extension can override from an injected `<style>` tag. Rules of",
    "thumb:",
    "",
    "- Override on `:root` — this extension's CSS is injected after the app's,",
    "  so same-specificity overrides win.",
    "- Prefer the semantic groups below over raw `--color-*` palette entries;",
    "  semantic names survive palette reshuffles better.",
    "- `--tw-*` are Tailwind's own plumbing — treat as read-only.",
    "- PrimeVue (`--p-*`) tokens are mostly emitted at runtime from a JS theme,",
    "  so the static list here is incomplete; check ComfyUI_frontend sources for",
    "  the full token set.",
    "",
  ];
  for (const { title, items } of grouped) {
    lines.push(`## ${title} — ${items.length}`);
    lines.push("");
    lines.push("```");
    for (const [name, n] of items) lines.push(`${name}  ×${n}`);
    lines.push("```");
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const staticDir = findStaticDir();
  const version = readComfyVersion(staticDir);
  const counts = collectVariables(staticDir);
  const grouped = groupVariables(counts);
  writeFileSync(OUTPUT_FILE, renderMarkdown(staticDir, version, counts, grouped), "utf8");
  console.log(`${counts.size} variables -> ${OUTPUT_FILE}`);
  for (const { title, items } of grouped) console.log(`  ${items.length}\t${title}`);
}

// Only run as a CLI; importing it for tests must not exit the process.
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
