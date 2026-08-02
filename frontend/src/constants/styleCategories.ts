/**
 * Display labels for the style-library categories.
 *
 * A style key is `"📷 КАМЕРЫ/📷 Disposable 90s"` and the part before the slash
 * is the category. Those words are written in Russian in
 * `common/styles/{photo,art,nsfw_photo,nsfw_art}.py`, so the browser showed a
 * Russian category next to an English style name whatever the panel language
 * was set to.
 *
 * They are translated **here, at display time, and nowhere else**. The key is
 * not ours to rewrite: it is the value a workflow saves for the style widget,
 * and it is the input to the preview file name (`md5(style_key)[:12].webp` —
 * tools/gen_style_previews.py). Renaming the categories in the data would
 * orphan every saved graph's style and all 292 committed preview images at
 * once.
 *
 * Mapped by the **whole** category including its emoji, because the emoji is
 * part of the distinction: `🎭 ФЭШН` and `👗 ФЭШН` are two different categories
 * that strip to the same word, and so are `🎯 ЖАНРЫ`/`🏜️ ЖАНРЫ` and
 * `🎨 ЖИВОПИСЬ`/`🖌️ ЖИВОПИСЬ`.
 *
 * `frontend/tests/styleCategories.test.ts` checks this map against the shipped
 * style keys, so a category added to the Python side fails a test rather than
 * quietly showing up untranslated.
 */

/** Category (emoji included, exactly as it appears in the key) → locale key. */
export const CATEGORY_LABEL_KEY: Record<string, string> = {
  "⏱️ ЗАХВАТ": "stcat_capture",
  "✏️ ГРАФИКА": "stcat_graphics",
  "✒️ СКЕТЧ": "stcat_sketch",
  "🌑 НУАР": "stcat_noir",
  "🌿 ПРИРОДА": "stcat_nature",
  "🎨 ЖИВОПИСЬ": "stcat_painting",
  "🎨 ИЛЛЮСТРАЦИЯ": "stcat_illustration",
  "🎬 КИНО": "stcat_cinema",
  "🎭 ФЭШН": "stcat_fashion_editorial",
  "🎯 ЖАНРЫ": "stcat_genres",
  "🏙️ ЛОКАЦИИ": "stcat_locations",
  "🏙️ СРЕДА": "stcat_environment",
  "🏛️ ИСТОРИЯ": "stcat_history",
  "🏜️ ЖАНРЫ": "stcat_genres_scene",
  "🏠 ИНТЕРЬЕР": "stcat_interior",
  "🏰 ФЭНТЕЗИ": "stcat_fantasy",
  "👗 ФЭШН": "stcat_fashion_wear",
  "👾 ДИДЖИТАЛ": "stcat_digital_art",
  "💥 КОМИКС": "stcat_comics",
  "💻 ЦИФРОВАЯ": "stcat_digital",
  "📐 МОДИФИКАТОРЫ": "stcat_modifiers",
  "📜 КЛАССИКА": "stcat_classical",
  "📷 КАМЕРЫ": "stcat_cameras",
  "📸 РЕПОРТАЖ": "stcat_reportage",
  "📸 СТУДИЯ": "stcat_studio",
  "🔬 СТИЛИЗАЦИЯ": "stcat_stylization",
  "🕰️ РЕТРО": "stcat_retro",
  "🖌️ ЖИВОПИСЬ": "stcat_painterly",
  "🗺️ СЦЕНЫ": "stcat_scenes",
  "🚀 SCI-FI": "stcat_scifi",
  "🛀 ТЕКСТУРЫ": "stcat_textures",
  "🦾 КИБЕРПАНК": "stcat_cyberpunk",
  "🧪 ЭФФЕКТЫ": "stcat_effects",
};
