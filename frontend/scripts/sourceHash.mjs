/**
 * Is the committed bundle built from the committed sources?
 *
 * `frontend/dist` is in git and is what the registry ships, so editing `src`
 * without rebuilding sends users the old bundle while every other check passes.
 * The first attempt at guarding that rebuilt in CI and compared the result byte
 * for byte with the committed file — which quietly required a Linux build to
 * reproduce a Windows one, a promise nobody had made and this project does not
 * need. Nothing here depends on that any more.
 *
 * Instead the build records a hash of what it was built *from*. CI recomputes
 * it from the checkout and compares. That answers the actual question, and it
 * is the same answer on every platform: the inputs are source text, hashed with
 * line endings normalised, not the output of a minifier.
 *
 *   node scripts/sourceHash.mjs --write   # after a build, records the hash
 *   node scripts/sourceHash.mjs --check   # fails if the sources have moved on
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const FRONTEND = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Where the recorded hash lives — beside the bundle it describes. */
export const HASH_FILE = join(FRONTEND, "dist", ".source-hash");

/**
 * Everything the bundle is built from.
 *
 * `src` is the code; `vite.config.ts` decides how it is assembled;
 * `package-lock.json` pins the toolchain that assembles it. A change to any of
 * the three can change the bundle, and nothing else can.
 */
const INPUTS = ["src", "vite.config.ts", "package-lock.json"];

function walk(path, found = []) {
  if (statSync(path).isDirectory()) {
    for (const entry of readdirSync(path).sort()) walk(join(path, entry), found);
  } else {
    found.push(path);
  }
  return found;
}

export function computeSourceHash(root = FRONTEND) {
  const relativeFiles = INPUTS.flatMap((input) => {
    const path = join(root, input);
    return existsSync(path) ? walk(path) : [];
  })
    .map((file) => relative(root, file).split("\\").join("/"))
    .sort();

  const hash = createHash("sha256");
  for (const rel of relativeFiles) {
    const file = join(root, rel);
    // The path goes in too, so moving a file is a change even when its
    // contents are not. Forward slashes so Windows and Linux agree.
    hash.update(rel);
    hash.update("\0");
    // CRLF normalised away: the same source checked out on two platforms is
    // the same source, and git already stores it this way.
    hash.update(readFileSync(file).toString("binary").split("\r\n").join("\n"), "binary");
    hash.update("\0");
  }
  return { hash: hash.digest("hex"), fileCount: relativeFiles.length };
}

function readRecorded() {
  if (!existsSync(HASH_FILE)) return null;
  return readFileSync(HASH_FILE, "utf8").trim().split(/\s+/)[0] || null;
}

function main() {
  const mode = process.argv[2];
  const { hash, fileCount } = computeSourceHash();

  if (mode === "--write") {
    writeFileSync(HASH_FILE, `${hash}\n`, "utf8");
    console.log(`source hash ${hash} (${fileCount} files)`);
    return;
  }

  if (mode === "--check") {
    const recorded = readRecorded();
    if (recorded === null) {
      console.error(
        "No dist/.source-hash. Run `npm run build` and commit the result — the\n" +
        "committed bundle cannot be shown to match the committed sources without it.",
      );
      process.exit(1);
    }
    if (recorded !== hash) {
      console.error(
        `frontend/src has changed since the bundle was built.\n` +
        `  recorded : ${recorded}\n` +
        `  sources  : ${hash}  (${fileCount} files)\n\n` +
        "dist/ is committed and is what the registry ships, so this would send\n" +
        "users the old bundle. Run `npm run build` and commit dist/ with the change.",
      );
      process.exit(1);
    }
    console.log(`source hash matches (${fileCount} files)`);
    return;
  }

  console.error("usage: node scripts/sourceHash.mjs --write|--check");
  process.exit(2);
}

// Only run as a CLI; importing it for tests must not exit the process.
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
