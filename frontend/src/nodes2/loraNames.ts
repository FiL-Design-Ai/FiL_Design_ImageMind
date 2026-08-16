/**
 * What a LoRA is called in a row, as opposed to what it is on disk.
 *
 * The stored value is always the full relative path — that is what the node
 * loads and what the workflow keeps. The row shows the shortest form that is
 * still unambiguous *within this stack*: the file name without its extension,
 * and as many folders in front of it as it takes to tell two entries apart.
 *
 * Scoped to the stack on purpose. Two LoRAs called `style` matter when they sit
 * in the same node; the hundreds of others installed on disk do not, and
 * pricing the label against all of them would fold every row back to a full
 * path for a collision the user cannot see.
 */

const EXTENSIONS = [".safetensors", ".ckpt", ".bin", ".pt", ".pth", ".onnx", ".gguf"];

/** `Ideogram\Eva\Eva_epoch_10.safetensors` -> `["Ideogram", "Eva", "Eva_epoch_10"]` */
function segments(path: string): string[] {
  const parts = path.replace(/\\/g, "/").split("/").filter(Boolean);
  if (!parts.length) return [];
  let last = parts[parts.length - 1];
  const lower = last.toLowerCase();
  for (const ext of EXTENSIONS) {
    if (lower.endsWith(ext)) {
      last = last.slice(0, -ext.length);
      break;
    }
  }
  return [...parts.slice(0, -1), last];
}

/** The last `depth` segments, joined the way the path was written. */
function tail(parts: string[], depth: number): string {
  return parts.slice(Math.max(0, parts.length - depth)).join("\\");
}

/**
 * Display names for a whole stack, in the order given.
 *
 * Entries that share a name grow a folder — and only those entries, so one
 * collision does not lengthen every other row.
 */
export function stackDisplayNames(paths: string[]): string[] {
  const parts = paths.map(segments);
  const depth = parts.map(() => 1);

  // Grow the colliding entries until they differ or run out of path. The loop
  // is bounded by the longest path, so a genuine duplicate (the same file twice
  // in one stack) settles at the full path and stops.
  const maxDepth = Math.max(1, ...parts.map((p) => p.length));
  for (let pass = 0; pass < maxDepth; pass += 1) {
    const seen = new Map<string, number[]>();
    parts.forEach((p, index) => {
      const key = tail(p, depth[index]).toLowerCase();
      const bucket = seen.get(key);
      if (bucket) bucket.push(index);
      else seen.set(key, [index]);
    });

    let grew = false;
    for (const indices of seen.values()) {
      if (indices.length < 2) continue;
      // Same file listed twice is not ambiguity — nothing to grow towards.
      const distinct = new Set(indices.map((i) => paths[i].toLowerCase()));
      if (distinct.size < 2) continue;
      for (const index of indices) {
        if (depth[index] < parts[index].length) {
          depth[index] += 1;
          grew = true;
        }
      }
    }
    if (!grew) break;
  }

  return parts.map((p, index) => tail(p, depth[index]) || paths[index]);
}
