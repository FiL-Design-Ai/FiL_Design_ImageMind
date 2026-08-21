import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";

/**
 * Flat ESLint config (ESLint 9) for the Vue 3 + TypeScript frontend.
 * Type checking is owned by `vue-tsc` (npm run typecheck); ESLint here
 * focuses on lint-level correctness (`flat/essential`), not template
 * reformatting — the house style for `.vue` templates is intentionally kept.
 */
export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      // TypeScript (via vue-tsc) already resolves identifiers/types, so the
      // core rule only produces false positives on DOM type-only references
      // (e.g. `as EventListener`). Disabling is the typescript-eslint default.
      "no-undef": "off",
      // Allow intentional unused args prefixed with `_`.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // The ComfyUI bridge surfaces are loosely typed; `any` is pragmatic there.
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    // Node body components receive `state` as a single reactive container
    // created by `domWidgetHost.addFilDomWidget` (`reactive(opts.state)`).
    // Mutating `state.X = …` IS the intended serialization bridge to ComfyUI
    // (`getValue: () => state`), not a one-way-data-flow violation.
    files: ["src/components/nodes/**/*.vue"],
    rules: {
      "vue/no-mutating-props": "off",
    },
  },
  {
    /**
     * A node's frontend must not reach into another node's.
     *
     * This is the property that makes a pack of nineteen nodes survive being
     * edited: fixing one panel physically cannot break another when they do
     * not know about each other. `tests/test_layer_boundaries.py` enforces the
     * same rule on the Python side, and shared behaviour belongs one level up
     * — `components/widgets/`, `composables/`, `nodes2/` — not sideways.
     *
     * `StyleBrowser.vue` and `ProviderModelPicker.vue` are the two exceptions,
     * and only because of where they sit: neither is a node body. They are
     * shared components filed under `components/nodes/` and would need no
     * exception at all from `components/widgets/`. Moving them is a rename
     * worth doing on its own, not inside a lint rule.
     */
    files: ["src/components/nodes/**/*.vue"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/components/nodes/*",
                "./*.vue",
                "../*.vue",
                "!@/components/nodes/StyleBrowser.vue",
                "!@/components/nodes/ProviderModelPicker.vue",
              ],
              message:
                "A node panel must not import another node panel. Shared UI belongs in " +
                "components/widgets/ or composables/. See tests/test_layer_boundaries.py " +
                "for the same rule on the Python side.",
            },
          ],
        },
      ],
    },
  },
  {
    /** The same boundary for the registration modules. */
    files: ["src/nodes2/nodes/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/nodes2/nodes/*", "./*", "../nodes/*"],
              message:
                "A node module must not import a sibling node module. Shared registration " +
                "helpers belong in nodes2/ (util, nodeStyle, domWidgetHost, applyFxComposables).",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["tests/**/*.{ts,vue}"],
    languageOptions: {
      globals: {
        vi: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        test: "readonly",
      },
    },
  },
);
