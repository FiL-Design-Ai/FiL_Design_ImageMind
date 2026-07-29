/**
 * Types for `sourceHash.mjs`, which stays plain JavaScript because the build
 * and CI run it with node directly — compiling a build script to check the
 * build is a knot not worth tying.
 */

/** Where the recorded hash lives — beside the bundle it describes. */
export declare const HASH_FILE: string;

/**
 * Hash of everything the bundle is built from: `src`, `vite.config.ts` and
 * `package-lock.json`, with line endings normalised so a checkout hashes the
 * same on any platform.
 */
export declare function computeSourceHash(root?: string): {
  hash: string;
  fileCount: number;
};
