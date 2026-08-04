# Hardening Ledger — 1.0.0

Постепенная отладка нод через staging-gate (`common/release_gate.py`).
Нода регистрируется в ComfyUI только когда её `node_id` добавлен в `RELEASE_NODES`.
Байпас для полного прогона/CI: `FIL_RELEASE_ALL=1`.

Статусы: `todo` → `in-progress` → `promoted`.
Решение по находке: **перенести** / **доработать** / **изменить** / **выкинуть**.

## Порядок промоута

| # | node_id | Статус | Комментарий |
|---|---------|--------|-------------|
| 1 | FiLSeed | promoted | обкатка gate; UX-фикс поля seed |
| 2 | FiLUpscaleTileCalc | promoted | вынесена логика в common/tile_calc.py; 2 мёртвых ключа локали убраны; переименована в "🔍 Upscaler Advanced" |
| 2b | FiLUpscaleSimple | promoted | новая нода, 100% делегат в FiLUpscaleTileCalc, тот же виджет-панель, см. секцию ниже |
| 2c | FiLTileAssembly | promoted | новая нода (не из исходного списка), см. секцию ниже |
| 3 | FiLProviderLoader | promoted | max_tokens/seed/response_format wiring, refresh_models, parse_response, +Seed UI (перенесён вперёд по запросу пользователя) |
| 4 | FiLOpticScanner | promoted | temperature/max_tokens/rate_limit_ms из config, глобальный rate-limiter фикс (перенесён вперёд по запросу пользователя) |
| 5 | FiLNeuroCleaner | promoted | рефакторинг: убрано 14 чекбоксов и Windows ctypes плацебо-код; добавлены 4 чистых режима clean_mode; компактный UI |
| 7 | FiLKSampler | promoted | сэмплинг |
| 8 | FiLHighResFix | promoted | script для KSampler (пара с #6) |
| 9 | FiLNoiseControl | promoted | новая нода (не из исходного списка), см. секцию ниже |
| 10 | FiLImageDecomposer | promoted | разложение изображений/промптов на слои, None-resilience |
| 11 | FiLStyleMixer | promoted | микширование стилей, None-resilience |
| 12 | FiLColorWizard | promoted | авто-коррекция цвета, белая точка, LAB контраст, защита тонов кожи |
| 13 | FiLSignalSwitch | promoted | новая нода (не из исходного списка), см. секцию ниже |
| 14 | FiLDatasetForge | promoted | новая нода (после 1.0.0): бакетинг + каптионинг + запись датасета LoRA, см. секцию ниже |
| 15 | FiLChannel | promoted | новая нода (после 1.1.0): беспроводной канал-передатчик, см. секцию ниже |
| 16 | FiLCinemaRig | promoted | новая нода (после 1.1.1): кино-риг по осям камера/оптика/фокусное/диафрагма/грейдинг, см. секцию ниже |

**Выбывшая из списка:** `FiLBeforeAfterCompare` — нода удалена из пакета целиком (вместе с
`/compare/save` и `output/*/compare/`), поэтому гейт до неё не дошёл. См. секцию 4.

**Итог:** 17 нод в `RELEASE_NODES` = 17 нод в `nodes/` — гейт открыт полностью, фильтра больше нет.
Оставлен в коде намеренно: следующая новая нода снова не попадёт в меню, пока не пройдёт чек-лист.

## Общий backlog (не привязан к одной ноде)

- [x] `common/processing.py:88` — нормализован возврат tuple.
- [x] `common/node_registry.py` — мёртвый модуль выкинут.
- [x] `useShortcuts.ts` — мёртвые экспорты убраны.
- [x] `styles/brand.ts` — комментарии нормализованы.
- [x] `scripts/gen_contracts.mjs` — генерация контрактов обновлена.
- [x] `NeuroCleaner.vue` и `FilStylePicker.vue` — цвета переведены на динамический `color-mix(in srgb, var(--fil-accent) 14%, transparent)`.

## Тема "Travelmate" (по запросу пользователя)

Добавлена 4-я тема в `styles/brand.ts` (`default/cyberpunk/fallout/travelmate`), адаптация палитры
из референса на Behance (Liza Prymak, TravelMate Mobile App UX/UI Design): акцент `#D5FF40`,
тёмная поверхность `#181916`, нейтральный `#C0C2B8` (сэмплировано напрямую с исходных PNG-страниц
PDF через canvas-пиксели, т.к. подписи на референсе местами дублировались/ошибочны). Шрифт Poppins
не подключали — оставили системный sans (по решению пользователя).

- Новый токен `--fil-accent-ink` (текст поверх акцент-фона) добавлен во ВСЕ палитры
  (`default/light/cyberpunk/fallout` = `#fff`, как было; `travelmate` = `#14150F` тёмный) —
  без этого лайм-фон с белым текстом был бы нечитаем. 7 мест с захардкоженным `color:#fff`,
  спаренным с `--fil-accent`-фоном, переведены на `var(--fil-accent-ink, #fff)`:
  `FilButton.vue` (×2), `FilComboBox.vue`, `FilChipList.vue`, `FilSegmented.vue`,
  `FilStylePicker.vue`, `NeuroCleaner.vue`.
- Регистрация: `THEME_VALUE_TO_NAME`/`options` в `stores/settings/themeSettings.ts` — доступна
  в Settings → FiL_Design_ImageMind → Appearance → Theme → "Travelmate".
- Проверено вживую (чистая перезагрузка страницы, не рантайм-свитч — рантайм-свитч давал ложные
  показания `getComputedStyle` в этой браузерной автоматизации, тот же артефакт что и зависания
  скриншотов весь сеанс): Default `#f08a45`/белый, Cyberpunk `#00e5ff`/белый, Travelmate
  `#D5FF40`/`#14150F` — все корректны, регресса нет. `npm run build` (vue-tsc) + vitest 37/37 зелёные.

---

## 1. FiLSeed — promoted

- **Статус:** promoted (первый в `RELEASE_NODES`).
- **Файлы:** `nodes/node_seed.py`, `components/nodes/Seed.vue`, `nodes2/nodes/seed.ts`, contract в `registry.py`, locale `sd_*`.
- **Аудит:** нода тривиальна: in `seed` Int → out `SEED` Int. Все locale-ключи `sd_*` (en) на месте.
- **Интуитивность/UX:** ✅ ИСПРАВЛЕНО — поле seed было привязано `v-model` к read-only computed
  `display`, из-за чего в режиме `fixed` его нельзя было ввести вручную (Vue молча ронял запись).
  Сделал `display` writable: ввод цифр переключает в `fixed` и применяет значение.
- **UI-компоновка:** ✅ ИСПРАВЛЕНО — по запросу пользователя перекроил панель в один ряд
  (seed слева на всю ширину, 3 иконки-кнопки без подписи справа: 🔀 ♻️ 🎲), убрал текстовые
  лейблы кнопок и блок "Last run". `minSize`/высота DOM-виджета уменьшены под новую раскладку
  (`nodes2/nodes/seed.ts`: `minSize: [240, 90]`, `height: 52`).
- **Визуальная перегрузка (обводка):** ✅ ИСПРАВЛЕНО — общий стиль "стеклянная карточка"
  `.fil-node-shell [class$="-root"]` (`styles/brand.ts:155`) применяется ко ВСЕМ узлам и на
  компактном Seed давал 3-4 вложенные рамки (нода→shell→поле/кнопки). Добавлен локальный override
  только в `Seed.vue` (`div.fil-seed-root{border:none;box-shadow:none;background:transparent;
  backdrop-filter:none}`), остальные 7 узлов не тронуты. Важно: понадобился именно `div.fil-seed-root`
  (не просто `.fil-seed-root`) — специфичность scoped-класса совпадает с глобальным правилом (0,2,0),
  и глобальный `<style>` вставляется в `<head>` позже бандла компонентов, поэтому побеждает по
  порядку в DOM; добавление типового селектора даёт (0,2,1) и гарантированную победу без `!important`.
  Проверено вживую через `getComputedStyle`: border/box-shadow/backdrop-filter → none, поле и кнопки
  свои рамки сохранили.
- **Находки (не блокеры промоута, в общий backlog):**
  - [x] Контракт `FiLSeed` объявлял входы `mode` (segmented) и `copy_to_clipboard` (bool), которых
    НЕТ в реальной `node_seed.py` (только `seed`). → **закрыто:** `copy_to_clipboard` выкинут (кнопки
    копирования в `Seed.vue` нет), оставшиеся фронтовые контролы (`mode`, `use_last_seed`,
    `new_fixed`) внесены в белый список `UI_ONLY_WIDGETS` (`common/contracts/registry.py:592`) —
    паритет контракта и схемы теперь проверяется тестом `tests/test_node_contracts.py:77`.
- **Тесты:** pytest зелёный (299), frontend build + vitest — см. прогон.
- **Живой смоук:** требует поднятого ComfyUI (:8189) — reboot + добавить ноду, проверить ввод seed.

## 2. FiLUpscaleTileCalc — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_upscale.py`, `common/tile_calc.py` (новый), `components/nodes/UpscaleTileCalc.vue`,
  `nodes2/nodes/upscale.ts`, contract в `registry.py`, locale `utc_*`.
- **Аудит:** математика тайлов (align/edge-safe подбор/aspect-aware non-square/auto-профили) —
  без функциональных багов, проверена по существующим 18 тестам построчно. Контракт в `registry.py`
  соответствует реальной схеме ноды (в отличие от FiLSeed — дрейфа нет).
- **Архитектура:** ✅ ИСПРАВЛЕНО (нарушение CLAUDE.md) — `nodes/node_upscale.py` был 376-строчным
  "god-файлом": dataclasses, геометрия тайлов, VRAM-профили и PIL-рендер сетки лежали прямо в ноде.
  Вынес всю логику в `common/tile_calc.py` (по конвенции `common/sampling.py` для ksampler/hiresfix),
  `node_upscale.py` теперь тонкая обёртка: schema + `execute()` только оркестрирует ветвления
  (auto/manual/partial-grid) и вызывает `tile_calc.*`. 1:1 перенос тел функций — риск регресса
  минимален, подтверждено тестами и живым смоуком.
- **Баг найден после промоута (реальный прод-краш, не синтетика):** `crop_latent_tiles` резала
  латент фиксированными индексами `[:, :, y0:.., x0:..]`, считая тензор всегда 4D `(B,C,H,W)`.
  Некоторые чекпоинты (в данном случае Z-Image-подобная модель, обвязанная `ModelSamplingAuraFlow`)
  отдают латент 5D `(B,C,T=1,H,W)` даже для одиночного изображения — индексы 2/3 резали ось T
  вместо H, и для каждого тайла со row>0 (`y0>0 > T=1`) срез схлопывался в 0 элементов →
  `RuntimeError: ... size 0 for tensor number 3 in the list` в `FiLUpscaleSimple`/`FiLTileAssembly`
  цепочке. Воспроизведено 1-в-1 синтетическим 5D-латентом. **Исправлено:** `samples[..., y0:.., x0:..]`
  (эллипсис на последние 2 оси вместо жёстких позиций 2/3) — работает для 4D и 5D одинаково.
  `apply_latent_resize`/`comfy.utils.common_upscale` уже была safe для >4D (reshape/restore), только
  `crop_latent_tiles` — нет. Тест: `test_latent_tiles_support_5d_video_style_latent_format`.
- **Находки:**
  - [x] `data/locales/{en,ru}.json` — мёртвые дубли `utc_manual_tile_cols`/`utc_manual_tile_rows`
    (реально используются `utc_manual_cols`/`utc_manual_rows`) → **выкинуто**.
- **Тесты:** `tests/test_upscale.py` 18/18 зелёных без изменений (тесты бьют только по `execute()`/
  `GET_SCHEMA()`, внутренние методы не трогают — рефактор был безопасен). Полный набор 299/299.
- **Живой смоук:** gate-инвариант подтверждён (`/api/object_info`: только Seed+Upscaler видны,
  остальные 6 скрыты). Полный сквозной прогон через реальную очередь
  (`LoadImage → FiLUpscaleTileCalc(auto_mode=True, show_grid_preview=True) → SaveImage`) —
  `execution_success`, PNG с сеткой тайлов сохранён и открывается (1408×2432 RGB). Vue-панель
  монтируется, ошибок в консоли нет.

### Улучшения качества апскейла (по запросу пользователя)

- **`upscale_model` (реальный апскейл через модель)** — новый опциональный вход `UPSCALE_MODEL`.
  Раньше `image` на выходе был чистый passthrough (нода вопреки названию "🔍 Upscaler" не апскейлила
  пиксели вообще, только считала план тайлов). При подключённой модели `common/tile_calc.py::apply_upscale_model`
  вызывает штатную `comfy_extras.nodes_upscale_model.ImageUpscaleWithModel.execute()` (переиспользование,
  не реализация с нуля), затем `comfy.utils.common_upscale(...,"lanczos","disabled")` подгоняет результат
  под точный размер `aw×ah`, посчитанный тайл-калькулятором — иначе плановая сетка тайлов не совпадала бы
  с реальными пикселями. `tile_grid_preview` теперь тоже рендерится поверх апскейленного изображения,
  не оригинала. Без подключённой модели поведение не изменилось (passthrough, 0 риска для существующих графов).
  **Живой смоук:** `LoadImage → UpscaleModelLoader(4x-UltraSharp.pth) → FiLUpscaleTileCalc(upscale_model,
  auto_fix_thin_edges=True) → SaveImage` — `execution_success`, результат 1408×2432 (ровно `align(674*2,64) × align(1198*2,64)`),
  визуально проверен (чёткое изображение, сетка легла верно).
- **`auto_fix_thin_edges`** — новый опциональный bool (advanced, default False). В Manual Tiles-режиме
  (без ручной сетки cols/rows) при тонком краевом тайле раньше только предупреждение в `warnings`;
  теперь при включении реюзается `tile_calc.choose_edge_safe_tile` (та же функция, что уже применяется
  в Auto-режиме) — уменьшает `tile_size` до следующего стандартного размера, избегая шва. Не трогает
  явную ручную сетку (`manual_tile_cols/rows`) — там пользователь явно указал размеры, автокоррекция
  была бы нарушением его намерения. Тест: `test_auto_fix_thin_edges_shrinks_tile_to_avoid_seam`
  (1200×1200 → 1024 даёт тонкий край, авто-фикс переключает на 768, шов пропадает, `info` фиксирует
  причину), `test_auto_fix_thin_edges_does_not_touch_explicit_manual_grid`.
- **Тесты:** `tests/test_upscale.py` 20/20 (было 18, +2 новых). Полный набор 301/301. vitest 37/37.
- **Контракт/локали:** `upscale_model` — connection-only сокет, в UI-контракт не входит (как `optional_vae`
  у KSampler). `auto_fix_thin_edges` добавлен в `registry.py` + locale-ключи `lbl_auto_fix_edges`/
  `utc_auto_fix_edges`/`utc_upscale_model` (en+ru).

### Реальные тайлы в preview (`tiles` output) — по запросу пользователя

Новый 19-й выход `tiles` (batch IMAGE) — реальные обрезанные куски картинки (не нарисованная сетка),
опционально, за тумблером `show_tile_previews` (advanced, default False — чтобы не считать второй
батч изображений впустую). Крайние "тонкие" тайлы (меньше `tile_width×tile_height`) паддятся нулями
до общего размера батча, а не растягиваются — иначе исказился бы реальный пиксельный контент.
`common/tile_calc.py::crop_tiles` (+ helper `_resize_source`).

**Найден и исправлен реальный баг по ходу разработки:** когда `upscale_model` не подключён, `out_image`
намеренно остаётся в ОРИГИНАЛЬНОМ разрешении (passthrough), но `layout.tile_rects` всегда считаются под
ВЫРАВНЕННЫЙ ЦЕЛЕВОЙ размер `aw×ah`. Обрезка по этим координатам из маленького оригинала уходила за
границы массива → тайлы получались полностью чёрными. `render_preview` от этого защищён (ресайзит
картинку до `aw×ah` перед рисованием), а `crop_tiles` — нет. Исправлено: `crop_tiles` теперь тоже
ресайзит источник до `aw×ah` через `_resize_source` (torch: `comfy.utils.common_upscale`; numpy-фолбэк:
PIL lanczos, как в `render_preview`) прежде чем резать по тайлам.
Баг не был пойман первыми тестами (`test_tile_previews_batch_matches_tile_count_on_clean_grid` и
`test_tile_previews_pad_thin_edge_without_stretching_content` случайно использовали `upscale_factor=1.0`
с уже кратными 64 размерами — ресайз был no-op) — добавлен целевой регрессионный тест
`test_tile_previews_upscale_source_when_no_model_ran` (upscale_factor=2.0, проверяет `tiles.min() > 0.5`,
т.е. отсутствие полностью чёрных тайлов). Также поймано вживую через реальный прогон очереди ComfyUI —
15-й тайл (последний, тонкий край) был 100% чёрным при старом коде, после фикса и **перезапуска сервера**
(правки бэкенд-Python не подхватываются без перезагрузки процесса — фронтенд-ребилд тут не помогает)
показал 56% реального контента + честный чёрный паддинг, визуально проверено (реальная текстура тропы
в углу, ровная граница паддинга, без искажений).
- **Тесты:** `tests/test_upscale.py` 24/24 (было 20, +4 новых, включая регрессионный). Полный набор
  305/305. vitest 37/37.
- **Контракт/локали:** `show_tile_previews` bool добавлен в `registry.py`, `tiles` IMAGE-выход добавлен.
  Locale-ключи `lbl_show_tiles`/`utc_show_tiles`/`utc_out_tiles` (en+ru).

### Замена нарисованной сетки на реальные тайлы (уточнение пользователя)

Пользователь спросил "зачем tiles если есть tile_grid_preview" → решение: **нарисованную сетку убрать
совсем, preview = обрезанные тайлы**. Слил два выхода в один:
- Удалён вход `show_grid_preview` и выход `tile_grid_preview` (нарисованный red-grid оверлей).
- `show_tile_previews` стал default **True** (это теперь основной preview), выход `tiles` переехал
  на позицию 1 (где был `tile_grid_preview`). Контракт снова 18 выходов (был 19).
- `tile_calc.render_preview` (рисование сетки+номеров, ~57 строк) удалён как мёртвый; импорты
  `ImageDraw`/`ImageFont` убраны (остался только `Image` для numpy-фолбэка в `_resize_source`).
- Мёртвые локали `lbl_show_grid`/`utc_show_grid`/`utc_out_preview` удалены (en+ru); `utc_out_tiles`
  переехал на место `utc_out_preview` (был дубль — убран).
- `contracts.ts/json` регенерированы (`npm run gen:contracts`), дрейф по `show_grid_preview`/
  `tile_grid_preview` = 0.
- Тесты переписаны: контракт 18 выходов с `tiles` на индексе 1, все `show_grid_preview=` убраны,
  индексы tiles-тестов `result[18]→result[1]`. Полный набор **304/304** pytest, **37/37** vitest.
- **Живой смоук с разными размерами тайла** (запрос пользователя "проверь при изменении размера тайла"):
  `tile_size=512` → 15 тайлов 512×512 (3×5), `tile_size=768` → 8 тайлов 768×768 (2×4) — количество и
  размер корректно меняются, крайние тайлы паддятся (512: 56% контента, 768: 14% — тоньше край),
  первый тайл визуально проверен (чистый кроп неба+гор, без нарисованной сетки).

### Убран тумблер `show_tile_previews` — tiles считается всегда (запрос пользователя)

Пользователь: тумблер `🧩 Show tile previews` убрать из UI, т.к. он должен быть всегда активен,
если выход `tiles` используется. Нода не знает, подключён ли downstream её `tiles`, а сам crop
дешёвый — поэтому просто убрал параметр целиком и считаю `tiles` безусловно.
- Удалён вход `show_tile_previews` из `node_upscale.py` (schema + execute), `registry.py`,
  `frontend/upscale.ts` (boolDefaults), `UpscaleTileCalc.vue` (FilSegmented + boolField).
- Мёртвые локали `lbl_show_tiles`/`utc_show_tiles` удалены (en+ru); `utc_out_tiles` (тултип выхода)
  оставлен. `contracts.ts/json` регенерированы, дрейф по `show_tile_previews` = 0.
- Тесты: убраны все `show_tile_previews=` (была отдельная функция-off — удалена, т.к. off-состояния
  больше нет). Полный набор **303/303** pytest, **37/37** vitest.
- **Живой смоук:** схема через `/api/object_info` — входа `show_tile_previews` нет, выход `tiles` на
  месте; в панели узла тумблеров tile/grid preview нет; реальная очередь без параметра в промпте —
  `tiles` всё равно заполнился (15 тайлов), `execution_success`.

### Убраны чёрные полосы на крайних тайлах (найдено пользователем на скриншоте)

Крайний "тонкий" тайл раньше паддился нулями до общего размера батча (нужно для одинаковой формы
всех элементов IMAGE-батча ComfyUI) — визуально это чёрная полоса справа/снизу на скриншоте юзера.
**Исправлено на стандартный подход тайлового апскейла** (как в Ultimate SD Upscale/
`comfy.utils.tiled_scale`): вместо паддинга крайний тайл **сдвигается внутрь** так, чтобы остаться
полного размера — `x0 = min(col*step_w, aw-tile_w)` вместо жёсткой сетки `col*step_w`. Тайл просто
перекрывается с соседним (что и так штатно для тайлового блендинга), но целиком состоит из реального
пикселя, без чёрного паддинга.
- `common/tile_calc.py::crop_tiles` переписан: убран весь код паддинга (`torch.nn.functional.pad`/
  `np.pad`), вместо `layout.tile_rects` (которые заведомо дают тонкий последний ряд/столбец) координаты
  считаются напрямую с клампом к границе.
- Тесты: `test_tile_previews_pad_thin_edge_without_stretching_content` заменён на
  `test_tile_previews_edge_tiles_are_full_size_without_black_padding` (весь батч `np.allclose(tiles, 1.0)`,
  паддинга по определению больше нет) + `test_tile_previews_shift_reads_real_content_from_photo`
  (тест на градиенте — правый край последнего тайла не должен резко падать к нулю, как было бы при
  паддинге). Полный набор **304/304** pytest.
- **Живой смоук:** тот же прогон, что показал баг на скриншоте пользователя — `nonzero_frac` последнего
  тайла вырос с 0.56 (чёрный паддинг) до **0.99** (весь тайл реальным контентом), визуально подтверждено
  (тот же кусок тропы, но без чёрной полосы).

### Overlap не влиял на реальную сетку тайлов (вопрос пользователя "Overlap работает?")

Честная проверка кода на вопрос пользователя обнаружила реальный разрыв: `tile_overlap` превращался
в `eff_overlap`, но использовался только для `mask_blur` и как число на выходе `overlap` (для передачи
в Ultimate SD Upscale) — `compute_layout(aw, ah, tw, th)` вообще не принимала overlap, шаг сетки был
`step_w=tw` (тайлы встык, без нахлёста). На выходе `tiles` overlap не менял ничего, кроме числа в сокете.

**Исправлено:** `compute_layout(aw, ah, tw, th, overlap=0)` — шаг теперь `tw-overlap`/`th-overlap`
(стандартная схема тайлового апскейла, как `comfy.utils.tiled_scale`). Число тайлов пересчитано по
формуле `cols = ceil((aw-tw)/step_w)+1` (при `aw>tw`), обратно совместимо с `overlap=0` (даёт то же
число тайлов, что и раньше). `crop_tiles` уже читал `layout.step_w/step_h` для позиционирования —
правка ничего не потребовала, overlap подхватился автоматически.

**Побочный найденный баг:** предупреждение "Thin edge tile" читало `layout.tile_cols/tile_rows`,
которые теперь означают overlap-aware число тайлов (другое, обычно большее) — формула `aw-(cols-1)*tw`
для этого числа больше не имела смысла. Восстановлен исходный смысл предупреждения: посчитан
независимый `naive_cols/naive_rows` (без overlap, как раньше) специально для этой проверки.

**Ещё один конфликт:** в режиме явной ручной сетки (`manual_tile_cols/rows`) overlap раньше игнорировался
только визуально, а после фикса начал реально раздувать число тайлов сверх явно заданного пользователем —
нарушение его прямого намерения (тот же принцип, что уже применён для `auto_fix_thin_edges`). Исправлено:
`compute_layout(..., 0 if mg_act else eff_overlap)` — overlap применяется только вне явной ручной сетки.
- Тесты: `test_tile_overlap_actually_shrinks_the_grid_step` (0 vs 64 overlap на одном изображении — разное
  число тайлов), `test_manual_grid_ignores_overlap_for_tile_count` (явная сетка не раздувается overlap'ом).
  Полный набор **306/306** pytest.
- **Живой смоук:** реальное фото, overlap=0 → 15 тайлов (3×5), overlap=64 → 18 тайлов (3×6, по формуле).
  Пиксельная проверка зоны нахлёста между соседними тайлами: при overlap=64 — **max diff = 0** (полностью
  идентичные пиксели в зоне перекрытия), при overlap=0 — соседние строки разные (edge-to-edge, без нахлёста).

### Глубокая верификация 7 виджетов + polish (запрос пользователя, со сверкой с интернетом)

Пользователь попросил перепроверить каждый виджет при вкл/выкл со сверкой практики. Explore-агент
прогнал **33 реальных `execute()`** (embedded python), сверено с
[Ultimate SD Upscale FAQ](https://github.com/Coyote-A/ultimate-upscale-for-automatic1111/wiki/FAQ) и
[Tiled Diffusion wiki](https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111/wiki/Tiled-Diffusion).

**Итог: вся геометрия/арифметика верна** (Upscale factor линеен, Full Auto-профили вменяемы,
Tile size даёт tw==th, Overlap растит счётчик и клэмпится на половине тайла, Auto overlap=12.5%,
Non-square ≤1.5:1). Багов в расчётах нет. Исправлены 3 не-геометрических пункта:

1. **`auto_fix_thin_edges` — no-op при tile_size=512 (дефолт).** `choose_edge_safe_tile` ищет только
   в `STANDARD_SIZES=[1536,1024,768,512]`; при 512 меньше некуда → тайл не менялся, тумблер выглядел
   «сломанным». **Решение пользователя: ниже 512 НЕ опускать.** → коммуникативный фикс: в `info`
   добавляется строка «Auto-fix: tile already at min standard 512px — thin edge handled by
   overlap/mask_blur downstream, not by shrinking» (флаг `auto_fix_noop` в `execute()`); тултип
   `utc_auto_fix_edges` (en+ru) уточнён про порог 512. Геометрия не тронута.
2. **Ложный warning «Manual grid produced non-standard tile».** `is_standard_quality_tile` требует
   tw==th, но non_square/manual-grid намеренно дают tw≠th → warning шумел почти всегда. Гейтнут на
   `not non_square_tiles` (прямоугольный тайл при non_square — ожидаемо). Для ручного грида без
   non_square warning остаётся (там вытянутый тайл — реально неожиданный).
3. **Denoise-подсказка занижена (0.14 при 2×).** Практика — ~0.20 типовой, ≤0.4 для композиции.
   `compute_denoise_hint` → `0.15 + (scale-1)*0.05`, клэмп 0.15–0.30 (1×→0.15, 2×→0.20, 4×→0.30).
   `AUTO_PROFILE_TABLE` denoise_cap подняты (0.20/0.24/0.26/0.30/0.30), финальный клэмп в
   `compute_auto_tile_settings` 0.10–0.24 → 0.15–0.30. Влияет ТОЛЬКО на output `denoise`, не на геометрию.

- **Тесты:** +3 новых (`test_denoise_hint_matches_upscale_practice` 2×→0.20/4×→0.30/downscale→0.15;
  `test_non_square_manual_grid_has_no_false_nonstandard_warning`;
  `test_auto_fix_at_min_tile_explains_noop_in_info`). `test_upscale.py` 32/32, полный набор **313/313**.
  Ни один старый ассерт не сломан (denoise/warning-значения нигде жёстко не проверялись).
- **Контракт/фронт:** не трогали (схема входов/выходов без изменений — только internal logic/info/
  warnings/тултипы). Локали провалидированы `json.load`.
- **Живой смоук:** прод перезапущен (reboot), 3 конфига (auto_fix@512, non_square+grid, factor=2)
  прогнаны через HTTP `/prompt` на реальном фото — все `execution_success`, без node_errors.
  Значения выходов запинены юнит-тестами на том же on-disk коде.

### Систематическая проверка остальных виджетов (запрос пользователя) — 2 доп. бага в overlap+non_square

По просьбе "проверь остальные опции" прошёл execute() свежим взглядом (не веря докстрингам) —
`mask_blur`/`tile_padding`/`denoise`/комбинации `manual_tile_cols/rows`+`non_square_tiles`+
`auto_fix_thin_edges` — связны, багов не нашёл. Но нашлись 2 новых реальных бага именно в свежепочиненном
overlap, оба воспроизведены и исправлены:

1. **Усреднение overlap по осям убивало non_square.** `sov`/`soh` клэмпились раздельно по каждой оси, но
   потом усреднялись в одно `eff_overlap`, которое шло в `compute_layout` для ОБЕИХ осей. При сильно
   вытянутом non_square-тайле (`tw=1448, th=184`) и overlap=500: `sov=500` (в пределах tw), `soh=176`
   (клэмп по th), среднее=338 — превышает `th` целиком → `step_h` схлопывался до 1px → **146 тайлов**
   вместо разумных ~10. Исправлено: `compute_layout(aw, ah, tw, th, overlap_w, overlap_h)` — раздельные
   параметры на ось; `crop_tiles` ничего не потребовал (уже читал `layout.step_w/step_h`).
   Тест: `test_non_square_overlap_does_not_collapse_short_axis_step`.
2. **Клэмп `tw-8`/`th-8` слишком мягкий — overlap мог занимать ~100% тайла.** На реальном фото
   (674×1198, factor=1.5, tile_size=512, overlap=400, non_square) это дало **486 тайлов** — шаг сетки
   `384-376=8px`. Исправлено: клэмп на ось снижен до `tw//2`/`th//2` (стандартная практика тайлового
   апскейла — overlap редко превышает половину тайла); дефолтный overlap=64 не задет (64 ≪ tw/2).
   Тест: `test_overlap_capped_at_half_tile_size_prevents_tile_explosion`.
- Полный набор **308/308** pytest. Живой смоук на реальном фото с теми же параметрами, что дали
  486 — теперь **25** тайлов, `execution_success`.

### UI-баг: label не рядом со значением на многополевых строках (найдено пользователем)

`FilNumberInput.vue` жёстко задавал `grid-column: 2` для своего `<input>`, рассчитывая на СВОЮ
внутреннюю 2-колоночную сетку (label|value). Но при использовании без `:label` (паттерн "спаренная
строка": `label1 input1 label2 input2` в одной 4-колоночной родительской grid, как в
`UpscaleTileCalc.vue` и `KSampler.vue`) это правило перебивало авто-размещение родительской сетки —
второй `<input>` форсированно попадал в уже занятую колонку 2 и CSS Grid сбрасывал его на новую
строку, отрывая от своей метки ("Manual rows" сидела в строке 1, а её поле — в строке 2).
**Исправлено:** правило `grid-column:2` теперь скопировано на `.fil-w-numfield:not(.no-label) .fil-w-num`
— применяется только в собственной (labeled) раскладке компонента, не протекает наружу.
Заодно ответ на второй вопрос пользователя ("нужно ли такое большое поле для значений") — оба
затронутых `.fil-up-row`/`.fil-ks-row` переведены с `minmax(48px,1fr)` (растягивалось на всю
доступную ширину) на фиксированную ширину: 64px в Upscaler (значения максимум 4 цифры, до 2048),
92px в KSampler для seed-колонки (там значения до 20 цифр — 64-битный seed).
Проверено вживую через `getBoundingClientRect()`: все 4 элемента ряда "Manual cols/rows" теперь на
одном Y, метка примыкает к своему полю (`x` идут по порядку 381→417→478→514), инпуты компактные
(~58px вместо растянутых). KSampler получил тот же фикс по аналогии (идентичный паттерн бага), но
живая проверка отложена до его собственного прохода промоута — сейчас скрыт gate'ом.

### UI-баги раскладки (по репорту пользователя, скриншоты)

- **"Manual rows" не рядом со своим полем** — ✅ ИСПРАВЛЕНО, реальный кросс-нодный баг.
  `FilNumberInput.vue` жёстко ставил `grid-column: 2` на `<input>`, рассчитывая на СВОЮ 2-колоночную
  сетку (label|value). В режиме без `:label` (`display:contents`, наш paired-row паттерн) это правило
  всё равно применялось и лезло в РОДИТЕЛЬСКУЮ 4-колоночную сетку (`.fil-up-row`/`.fil-ks-row`) —
  второй инпут насильно попадал в уже занятую колонку 2 и CSS Grid сбрасывал его на вторую строку.
  Fix: `.fil-w-numfield:not(.no-label) .fil-w-num{grid-column:2}` — scoped только на labeled-вариант.
  **Тот же баг нашёл и починил в `KSampler.vue`** (`fil-ks-row`, Seed/Steps ряд) — идентичный паттерн,
  не был замечен пользователем, но воспроизводился бы один в один.
- **"Слишком большое поле для ввода" (вопрос пользователя)** — да, не нужно: `.fil-up-row`/`.fil-ks-row`
  использовали `minmax(48px,1fr)` для value-колонок (жадно растягивались, отжимая место у подписей).
  Заменено на фиксированную ширину: `64px` (Upscaler — значения максимум 4 цифры, до 2048) и `92px`
  у Seed в KSampler (может быть 20-значным 64-битным числом, нужно больше места).
- **Переполнение узла в Full Auto режиме** — ✅ ИСПРАВЛЕНО, найдено при живой проверке (не было в
  репорте пользователя). `FilSegmented.vue`: кнопки `.fil-w-seg` имели `flex:1` без `min-width:0` —
  классическая ловушка flexbox, кнопки не сжимались меньше текста ("💎 Max Quality" и т.п.), 5 опций
  `auto_profile` распирали всю панель. Fix: `min-width:0` + `overflow:hidden;text-overflow:ellipsis;
  white-space:nowrap` на `.fil-w-seg` — централизованно, чинит ВСЕ узлы с `FilSegmented`, не только Upscaler.
- **Живой смоук:** оба фикса проверены через `getBoundingClientRect()` (Manual cols/rows — все 4
  элемента ряда на одном `top`, ширина value-полей 64px) и скриншотом (Auto profile: 5 кнопок с
  обрезанным текстом "Lo...", "Ba...", "Hi..." и т.д., без переполнения, `scrollWidth === clientWidth`).
  KSampler-фикс не проверен вживую — нода ещё не в `RELEASE_NODES`, отложено на её собственный проход.

### non_square_tiles давал неограниченно вытянутые тайлы (найдено пользователем)

Пользователь прогнал реальное портретное фото (3000×5331) с `non_square_tiles=ON`, `tile_size=1024` —
получил тайл 768×1368 и заподозрил ошибку в расчёте. `compute_tile_dimensions()` заставляла пропорцию
ОДНОГО тайла точно копировать пропорцию ВСЕЙ картинки (`tw/th == ow/oh` алгебраически) — для
портрета это давало вытянутую в ~1.8 раза полосу. Проверено через `WebSearch` по практике tiled-upscale
(Ultimate SD Upscale, ComfyUI-TiledDiffusion/MultiDiffusion): индустриальный консенсус — тайлы близкие
к квадрату у native-разрешения модели (512/768/1024), швы контролируются overlap и алгоритмом тайлинга,
а не формой тайла; там, где используют прямоугольные тайлы, их выводят как ограниченное деление
картинки на N строк/столбцов, а не как копию пропорций всего фото.
**Исправлено:** `MAX_TILE_ASPECT_RATIO = 1.5` — клэмп `ar` перед формулой в `compute_tile_dimensions`
(`common/tile_calc.py`). Портрет 3000×5331: было `tw=768,th=1368` (1:1.78) → стало `tw=840,th=1256`
(1:1.495). non_square по-прежнему что-то делает (не no-op), просто без экстремального вытягивания.
- **Побочно:** живая проверка 170-тайлового расхождения на скрине пользователя объяснилась не багом
  формулы, а не перезапущенным после правок сессии прод-процессом (backend требует полного рестарта,
  фронт-ребилд не подхватывает Python-правки) — после `POST /api/manager/reboot` числа сошлись с расчётом.
- **Тесты:** 2 теста с зашитыми числами non-square обновлены (`test_non_square_overlap_does_not_collapse_short_axis_step`
  4→5 тайлов, `test_overlap_capped_at_half_tile_size_prevents_tile_explosion` 25→20). Полный набор 308/308.
- **Живой смоук:** прод перезапущен, реальный прогон того же фото — 15 тайлов, содержимое каждого
  проверено (Read на PNG) на предмет "призрачного" удвоения — чисто, одиночные кропы без артефактов.

### `auto_overlap` — overlap, пропорциональный tile_size (по запросу пользователя)

Вопрос "как считать overlap правильно / можно автоматически под разрешение" → overlap логически
должен масштабироваться от **tile_size**, а не от сырого разрешения фото (это зона блендинга между
соседними тайлами; разрешение уже влияет на тайл косвенно). Автоматика для этого уже существовала
внутри `Full Auto` (`compute_auto_tile_settings`: `base_ov = max(32, round(tile_size/64)*8)` — ~12.5%
tile_size), но была недоступна в Manual Tiles без переключения всего остального на VRAM-профиль.
**Реализовано:** формула вынесена в переиспользуемую `tile_calc.compute_auto_overlap(tile_size)`;
новый bool-вход `auto_overlap` (advanced, default False) — при включении `eff_ov` в ручном режиме
берётся из неё (`min(tw, th)` как база — безопасно и для вытянутых non-square тайлов), игнорируя
виджет `tile_overlap` (UI дизейблит его же поле). Нет эффекта при `auto_mode=ON` (там уже свой
overlap) — добавлено предупреждение в `warnings`.
- **Тесты:** +2 новых (`test_auto_overlap_ignores_manual_value_and_scales_with_tile_size` — auto
  даёт 128 для tile_size=1024 вместо ручных 64; `test_auto_overlap_ignored_when_full_auto_active`).
  `test_upscale.py` 29/29. Полный набор 310/310. vitest 37/37.
- **Контракт/локали:** `auto_overlap` добавлен в `registry.py` (`gen:contracts` перегенерирован),
  `data/locales/{en,ru}.json` (`lbl_auto_overlap`/`utc_auto_overlap`).
- **Живой смоук:** прод перезапущен, прогон с `auto_overlap=True, tile_size=1024, tile_overlap=64`
  (ручное значение намеренно другое) — `node_errors: {}`, `execution_success`, сетка тайлов совпала
  с расчётным overlap=128 (не с проигнорированным ручным 64).

### UI: компактный switch вместо ON/OFF-пилюль (по запросу пользователя)

"Зачем перегружаем интерфейс двумя кнопками?" — каждый bool-виджет был `FilSegmented(['ON','OFF'])`:
две отдельные кнопки-пилюли на всю ширину строки ради одного булева значения. Новый общий виджет
`FilToggle.vue` (компактный iOS-style switch, 32×18px, позиция+цвет = состояние, подпись строки уже
объясняет что переключает) добавлен в барель `components/widgets/index.ts`. Применён к 4 булевым
тумблерам Upscaler (`Full auto`, `Auto overlap`, `Auto-fix thin edges`, `Non-square tiles`) —
`auto_profile` (5 опций) и прочие настоящие мультивыборы остались на `FilSegmented` (тот компонент
для этого и предназначен, не трогаем). HiResFix/BeforeAfterCompare тоже используют `['ON','OFF']`
пилюли, но не промоучены — оставлены как есть, получат `FilToggle` на своём проходе.
- **Живой смоук:** 4 переключателя на проде — `getBoundingClientRect()` подтвердил компактный размер
  (32×18 вместо пилюль на всю ширину), клик реально переключает состояние и реактивность секции
  (Full Auto ON скрывает Manual-виджеты, показывает Auto profile) не сломана.
- vitest 37/37 (backend не тронут — pytest не требовался).

### UI-декluttering раунд 2 (по запросу пользователя): Auto inline, короткие лейблы, удалён Max megapixels

1. **`🧵 Auto` встроен в строку Overlap** — вместо отдельного полноширинного `FilToggle`-ряда под
   Tile size/Overlap теперь компактный switch сразу справа от поля Overlap (5-я колонка
   `.fil-up-row-overlap`, `grid-template-columns: ... auto`). `FilToggle.vue` получил `bare`-режим
   (flex вместо grid, `width:auto`, мелкий лейбл) для инлайн-встраивания рядом с другим полем —
   переиспользуемый паттерн для будущих подобных случаев.
2. **`Manual cols`/`Manual rows` → `Cols`/`Rows`** — слово "Manual" избыточно (секция и так называется
   "Manual Tiles"), убрано из обоих лейблов (en+ru), тултипы (`utc_manual_cols/rows`) не тронуты.
3. **`Max megapixels` удалён целиком** — пользователь решил, что фича не нужна. Убрано из:
   `nodes/node_upscale.py` (Float.Input, `mp_cap`/`mp_before`-логика в `execute()` — `actual_scale`
   упростился до `= upscale_factor` напрямую, алгебраически эквивалентно старой формуле
   `sqrt((ow·f·oh·f)/(ow·oh))=f` при отсутствии кэпа, так что поведение оставшегося пути не изменилось),
   `common/contracts/registry.py`, `UpscaleTileCalc.vue`, `nodes2/nodes/upscale.ts` (`numericDefaults`),
   `data/locales/{en,ru}.json` (`lbl_max_megapixels`/`utc_max_mp`). Вход сократился с 12 до 11.
   - Тест `test_megapixel_cap_and_single_tile_warning` удалён; "Single tile covers full image"
     переиспользован в новом `test_single_tile_covers_full_image_warning` без зависимости от MP-кэпа.
     `test_max_factor_80` избавлен от `max_megapixels=` аргумента.
- **Тесты:** `test_upscale.py` 29/29 (было 29, замена 1 теста без изменения счёта). Полный набор 310/310.
- **Контракт/локали:** перегенерировано (`gen:contracts`), `npm run build` чистый (vue-tsc + vite).
- **Живой смоук:** прод перезапущен. Подтверждено через `getBoundingClientRect()`: лейблы "Cols"/"Rows"
  на месте, "Max megapixels" нигде в тексте страницы нет, `🧵 Auto` физически справа от поля Overlap
  в одной строке (left=561 сразу после поля). Клик по Auto реально дизейблит ИМЕННО поле Overlap
  (проверено индексно — не спутано с Tile size), Tile size остаётся активным.

### UI: степпер ▲/▼ у числовых полей (по запросу пользователя)

`FilNumberInput.vue` — общий виджет для ВСЕХ узлов — получил кнопки ▲/▼ справа внутри поля (шаг
`step`, Shift=×10, дизейблятся на min/max). Затронуло Upscaler сразу (6 полей), но фикс общий для
всего пакета. Живьём: 6/6 полей на Upscaler получили степпер, клик реально меняет значение
(Overlap: 56→64→72→64), билд/vue-tsc чистый.

### Rename → "Upscaler Advanced" + новая нода FiLUpscaleSimple (по запросу пользователя)

Пользователь захотел упрощённую версию Upscaler'а — только `image`+`upscale_model` на входе,
`image`+`tiles` на выходе. `node_id` существующей ноды (`FiLUpscaleTileCalc`) **не менялся** —
только `display_name` → `"🔍 Upscaler Advanced"` (смена id сломала бы уже сохранённые
пользователем workflow-файлы).

**Итерация 1** (первая версия): ноль виджетов, `upscale_factor` авто-выводился из
`upscale_model.scale`. **Итерация 2** (по факту, после уточнения пользователем со скриншотом): та
же виджет-панель, что у Advanced (Upscale factor, Full auto, Tile size/Overlap/Auto, Cols/Rows,
Auto-fix thin edges, Non-square tiles) — пользователь явно попросил перенести именно этот блок.
Осталось 2 отличия от Advanced: `upscale_model` **обязателен** (не optional) и выходы урезаны до
`image`+`tiles` (без 16 дополнительных числовых/строковых выходов).

**Реализация — `nodes/node_upscale_simple.py`, класс `FiLUpscaleSimple`:** схема виджетов 1-в-1
скопирована из `FiLUpscaleTileCalc.define_schema()`, `execute()` не дублирует ни строчки тайловой
математики — все виджет-значения прокидываются напрямую в `FiLUpscaleTileCalc.execute(...)`,
возвращаются только `(result[0], result[1])`. Один source of truth для геометрии.

**Frontend:** `frontend/src/nodes2/nodes/upscale_simple.ts` — та же схема hidden-widget +
DOM-host, что у `upscale.ts` (те же имена виджетов, те же дефолты), переиспользует тот же Vue-
компонент `UpscaleTileCalc.vue` (он читает/пишет `state.nodeState` по имени, не завязан на
конкретную ноду). `minSize` увеличен с `(280,120)` до `(320,320)` — под ту же панель, что у
Advanced.

**Регистрация** (полная карта, проверено разведкой): `__init__.py` (`get_node_list`),
`common/release_gate.py` (`RELEASE_NODES` — промоучена сразу, не ждёт отдельного прохода, т.к. на
100% делегирует уже отхарденную логику), `common/contracts/registry.py` (`_UPSCALE_SIMPLE` —
теперь с полным набором required/optional виджетов, зеркалящим `_UPSCALE` + hard-coded
assert-set), `common/node_registry.py` (не enforced, но держим в синхроне),
`frontend/src/nodes2/nodeRegistry.ts` (`modules[]`), локали `upl_image`/`upl_model` (en+ru) для
image/upscale_model — не переиспользовал `utc_image`/`utc_upscale_model`, т.к. их текст завязан на
optional/passthrough-семантику Advanced, для Simple она не верна (модель обязательна); остальные
10 виджетов переиспользуют те же `utc_*` ключи, что и Advanced (виджеты идентичны по смыслу).

- **Тесты:** `tests/test_upscale_simple.py` (5 тестов, обновлены под новую сигнатуру) — реальная
  model-инференс замокана (`monkeypatch` на `tile_calc.apply_upscale_model`, numpy/PIL-ресайз
  вместо реальной сети): совпадение геометрии с прямым вызовом Advanced при тех же виджет-
  значениях, вывод ровно 2 значений, `upscale_factor`∈{1,2,4} пропорционально меняет размер
  выхода, ручная сетка `manual_tile_cols/rows` прокидывается идентично Advanced, `upscale_model`
  обязателен на уровне Python-сигнатуры (`TypeError` без него).
- **Контракт/фронт:** `npm run gen:contracts` → 9 контрактов, `npm run build` (vue-tsc+vite)
  чисто, vitest зелёный. `frontend/src/stores/helpDefaults.ts` — справка для `FiLUpscaleSimple`
  обновлена под новый дизайн (тот же виджет-панель, что у Advanced).
- **Живой смоук:** прод перезапущен, `LiteGraph.createNode("FiLUpscaleSimple")` — нода в поиске,
  видна полная виджет-панель (идентична Advanced), подключена реальная upscale-модель + тестовое
  фото, `/prompt` → `execution_success`. Старый сохранённый граф с `FiLUpscaleTileCalc` продолжает
  грузиться без ошибок — заголовок ноды стал "🔍 Upscaler Advanced".

### Ручная сетка (Cols/Rows) с overlap>0 давала противоречивые выходы (вопрос пользователя)

Пользователь заметил: при `manual_tile_cols=3, manual_tile_rows=2` виджет `tile_overlap` визуально
"не влияет" на сетку. Разбор показал, что это ровно то поведение, специально введённое в предыдущем
фиксе ("Ещё один конфликт" выше) — явная ручная сетка фиксирует число тайлов, поэтому
`compute_layout(..., 0, 0)` вызывался с overlap=0, а не с реальным значением. Но при этом выходы
`overlap`/`mask_blur` **не обнулялись** — они по-прежнему считались из `tile_overlap` и уходили
даунстрим-сэмплеру как будто нахлёст есть. Итог: тайлы клались встык (0 общих пикселей), а сэмплеру
сообщалось "блендить с overlap=64" — блендить было нечего, реальный риск видимого шва при
раздельной генерации каждого тайла.

**Исправлено:** новая `tile_calc.tile_size_for_count(axis_len, count, overlap)` подбирает размер
тайла так, чтобы ровно `count` тайлов покрывали ось `axis_len`, **реально** делясь `overlap`
пикселями с соседом (решает `count*t - (count-1)*overlap == axis_len`, округляет до 8px, затем
итеративно сверяет с формулой `compute_layout` — до 32 шагов на случай, если округление на 8px
сдвинуло достигнутое число тайлов). При ручной сетке `tw`/`th` теперь растут относительно
edge-to-edge размера (напр. 960×608 → 1048×672 при overlap=128 на сетке 3×2), число тайлов
остаётся точно запрошенным, `compute_layout` больше не получает принудительный `(0, 0)` — вызывается
с реальным `sov`/`soh` во всех режимах одинаково. Предупреждение "non-standard tile" на ручной сетке
теперь гасится, когда `eff_ov > 0` (размер намеренно вырос под нахлёст, это не сюрприз).

- **Тесты:** `test_manual_grid_and_latent_dimensions_are_consistent` обновлён под новые tw/th
  (1048×672 вместо 960×608 при overlap=128). Переименован
  `test_manual_grid_ignores_overlap_for_tile_count` →
  `test_manual_grid_keeps_exact_count_while_growing_tile_for_overlap` (число тайлов по-прежнему точно
  запрошенное, но теперь честно объяснено, что overlap реально применяется через рост тайла). Новый
  `test_manual_grid_applies_real_overlap_between_tiles` — то же число колонок (3) при overlap=0 и
  overlap=64, но размер тайла реально больше (344→384px на 1024px изображении). Полный набор
  **321/321** pytest.
- **Живой смоук:** прод перезапущен, реальное фото 1296×2304, сетка 3×1: overlap=0 → тайл 448×2304
  (3 тайла), overlap=64 → тайл 496×2304 (448+64, тоже 3 тайла) — совпадает с ручным расчётом
  `tile_size_for_count` день в день, число тайлов в обоих случаях подтверждено через `/history`.

### `tile_size` по умолчанию 512 → 1024 (по запросу пользователя)

Изменён default в 6 местах, где он был захардкожен независимо (backend-схема Advanced/Simple,
contracts-реестр `_UPSCALE`/`_UPSCALE_SIMPLE`, frontend `numericDefaults` в `upscale.ts`/
`upscale_simple.ts`, Vue-фолбэк `UpscaleTileCalc.vue`) — только значение по умолчанию, min/max/step
(64–2048, шаг 64) не тронуты. `execute()` не имеет собственного Python-дефолта для `tile_size`
(ComfyUI всегда передаёt значение виджета явно), так что ни один тест, вызывающий `tile_size`
позиционно/именованно, не сломался — 321/321 pytest, `npm run gen:contracts && npm run build`
чисто, живой `/object_info` на проде подтвердил `default: 1024`.

### Добавлены `latent` вход и `latent`/`latent_tiles` выходы (запрос пользователя)

Пользователь спросил, можно ли завести `latent` на вход и получить `latent`+`latent_tiles` на
выходе — по аналогии с уже существующей парой `image`/`tiles`, чтобы тайловый даунстрим-сэмплер мог
работать в latent-пространстве 1:1 с уже посчитанной пиксельной сеткой. Решено через
AskUserQuestion: добавить в **обе** ноды (Advanced и Simple), `latent` — опциональный вход (как
`upscale_model` у Advanced), без подключения — пустая latent-заглушка на обоих новых выходах
(валидный граф, но бессмысленный результат при случайном использовании).

**Реализация — `common/tile_calc.py`:**
- `blank_latent()` — заглушка `{"samples": zeros(1,4,8,8)}` (numpy/torch, тот же паттерн, что у
  `blank_preview` для IMAGE).
- `apply_latent_resize(latent, target_lw, target_lh)` — `comfy.utils.common_upscale(..., "bislerp", ...)`;
  **bislerp**, не lanczos (тот используется для `image` — RGB-специфичная интерполяция, для
  latent-пространства стандарт — bislerp/nearest-exact, см. `_LATENT_METHODS` в `node_hiresfix.py`).
- `crop_latent_tiles(latent, target_lw, target_lh, layout, tile_lw, tile_lh)` — тот же цикл
  `layout.tile_rows × layout.tile_cols`, что и `crop_tiles` для картинки, координаты и размер тайла
  делённые на 8 (округление `round()`, а не floor — `step_w`/`step_h` не всегда кратны 8, хотя
  `tw`/`th` сами кратны 8 по построению везде в кодовой базе). Гарантирует **тот же tile_count**, что
  и у `tiles` — латент-тайл N соответствует картинка-тайлу N 1:1 для даунстрим per-tile KSampler.

**`nodes/node_upscale.py`:** новый опциональный `io.Latent.Input("latent", ...)`, `latent=None` в
`execute()`. Новые выходы **добавлены в конец** списка (индексы 18–19), а не рядом с `image`/`tiles`
— вставка в середину списка вывода в ComfyUI/V3 сдвинула бы позиционные индексы существующих
выходов, что молча переподключило бы связи в уже сохранённых пользовательских графах на неверные
сокеты при перезагрузке. Итог: `image..warnings` остаются на местах 0–17, `latent`/`latent_tiles` —
18/19.

**`nodes/node_upscale_simple.py`:** тот же опциональный `latent` вход, пробрасывается в
`FiLUpscaleTileCalc.execute(latent=latent, ...)`, `io.NodeOutput(result[0], result[1], result[18],
result[19])` — Simple теперь возвращает 4 значения (было 2).

**Контракты/локали:** `common/contracts/registry.py` — `latent`/`latent_tiles` (`type="LATENT"`,
уже разрешённый `Literal` в `schema.py`) добавлены в конец `outputs=[...]` для обоих контрактов.
Заодно почищен устаревший текст `upl_model` в `data/locales/{en,ru}.json` — с прошлой итерации
(авто-фактор из `.scale`) там остался кусок "фактор задавать не нужно", хотя `upscale_factor` давно
стал обычным виджетом; добавлен новый ключ `utc_latent`.

- **Тесты:** `_latent()`-хелпер (реальный `torch.zeros(1,4,H/8,W/8)`) в `test_upscale.py` — 3 новых
  теста: заглушка без подключения (`1×4×8×8`), ресайз под `latent_w/latent_h`, `latent_tiles`
  совпадает по count и размеру с `tiles`/`tile_width`/`tile_height`. В `test_upscale_simple.py` — 2
  новых теста: заглушка и форвардинг в Advanced (сравнение форм). `test_output_contract_has_stable_
  eighteen_values` → переименован и обновлён на 20 (`_twenty_values`). Полный набор **326/326**
  pytest, `npm run gen:contracts` (9 контрактов) + `npm run build` + vitest (37/37) чисто.
- **Живой смоук:** прод перезапущен, `/object_info` подтвердил обе схемы (Advanced — 20 выходов,
  latent последним двум; Simple — 4 выхода). Реальный `/prompt`: `EmptyLatentImage` → оба узла
  (Advanced и Simple параллельно) с реальной моделью `4x-UltraSharp.pth` и реальным фото —
  `execution_success`, без `node_errors` — `apply_latent_resize`/`crop_latent_tiles` отработали на
  настоящих torch-тензорах, не только в моках pytest.

### `image`/`upscale_model` стали опциональными — latent-only режим (запрос пользователя)

Пользователь: "мне не обязательно подключать модель или image если я подключил latent или наоборот"
— т.е. хочет работать чисто в latent-пространстве (без картинки вообще) либо чисто в
pixel-пространстве (без latent), не таская лишний неиспользуемый вход. До этой правки `image` был
единственным обязательным входом в обеих нодах (вся геометрия считалась из `image.shape`), а в
Simple ещё и `upscale_model` был обязателен.

**Реализовано (обе ноды):** `image` → `optional=True`; в Simple `upscale_model` тоже стал
`optional=True` (было required с прошлой итерации — сознательно отменено этим запросом). Источник
исходных `ow`/`oh` для геометрии теперь берётся из того, что подключено: `image.shape`, либо (если
image не подключён) `latent["samples"].shape[-2:]` × 8 (латент 8x меньше по каждой оси). Жёсткая
проверка на входе `execute()`: `if image is None and latent is None: raise ValueError(...)` — граф
без ни одного из двух входов не запустится, ошибка всплывает как `execution_error` с понятным
текстом, а не падает глубже в коде на `None.shape`.

Когда `image` не подключён — `image`/`tiles` выходы отдают ту же минимальную заглушку 8×8, что уже
использовалась для `latent`/`latent_tiles` без подключения латента (симметричный паттерн). Когда
`image` подключён, а `latent` — нет, поведение не изменилось. `upscale_model`, подключённый без
`image`, просто игнорируется (нечего апскейлить) — не падает.

**`node_upscale.py` execute():** сигнатура получила Python-дефолты для `image`/`upscale_factor`/
`tile_size`/`tile_overlap` (`=None`/`=2.0`/`=1024`/`=64`) — иначе `image=None` синтаксически
недопустим перед required-параметрами без дефолтов. Позиционные вызовы в тестах (`execute(image(...),
2.0, 512, 64)`) не сломались — `image` по-прежнему первый параметр.

- **Тесты:** переименован/заменён `test_upscale_model_is_required_at_call_level` (проверял старое
  обязательное поведение) → `test_upscale_model_is_optional_when_image_connected`. Новые:
  `test_raises_when_neither_image_nor_latent_connected` (оба файла),
  `test_latent_only_mode_derives_dimensions_from_latent_and_placeholders_image` /
  `test_latent_only_mode_works_without_image_or_model` (source-размеры из latent, image/tiles —
  заглушка 8×8), `test_upscale_model_ignored_without_image_in_latent_only_mode`. Полный набор
  **331/331** pytest, `npm run gen:contracts` (контракты не менялись — `image`/`upscale_model` не
  виджеты, в реестр не входят) + `npm run build` + vitest (37/37) чисто.
- **Живой смоук:** прод перезапущен. `/prompt` с `EmptyLatentImage → FiLUpscaleTileCalc`+
  `FiLUpscaleSimple` (latent, без image/model) → `execution_success` на обеих. `/prompt` с обоими
  узлами без единого входа (ни image, ни latent) → `status_str: "error"`, `exception_type:
  "ValueError"`, `exception_message: "FiL Upscale: connect at least one of \`image\` or \`latent\`."`
  — ровно ожидаемое поведение. `LiteGraph.createNode` для обеих нод в браузере: `image`/
  `upscale_model`/`latent` все три отрисованы как опциональные (пунктирные) сокеты, консоль чистая.

### `overlap`-выход: INT с обрезкой → FLOAT без округления (запрос пользователя)

Пользователь спросил, не должен ли `overlap` на выходе быть `FLOAT`. Первая правка (в предыдущей
итерации) заменила `int((sov+soh)/2)` на `round((sov+soh)/2)`, оставив тип `INT` — но пользователь
настоял, что тип должен быть именно `FLOAT`, и оказался прав: `eff_overlap` — это среднее двух
per-axis overlap'ов (`sov`, `soh`), которое при `non_square_tiles` (когда клэмпится только одна из
осей к `tw//2`/`th//2`) генуинно может быть дробным пикселем (напр. 209.5) — округление в любую
сторону теряет информацию, а `FLOAT`-выход честно её сохраняет и оставляет округление на усмотрение
даунстрим-ноды.

**Исправлено:** [nodes/node_upscale.py:52](nodes/node_upscale.py:52) `io.Int.Output("overlap")` →
`io.Float.Output`; `eff_overlap = round((sov + soh) / 2)` → `eff_overlap = (sov + soh) / 2` (без
округления вовсе). `common/contracts/registry.py` — `NodeOutput(name="overlap", type="INT")` →
`type="FLOAT"`. В `info`-строке добавлен формат `{eff_overlap:g}`, чтобы целые значения (обычный
случай, `sov == soh`) печатались как `64`, а не `64.0`.

- **Тест:** `test_overlap_output_is_float_and_preserves_fractional_average` (переименован из
  `..._rounds_instead_of_truncating`) — тот же 1200x800/`tile_size=512`/`tile_overlap=211`/
  `non_square_tiles=True` кейс, теперь проверяет `result[8] == 209.5` (точное дробное значение, не
  округлённое ни в одну сторону). Полный набор **332/332** pytest, `npm run gen:contracts`
  (9 контрактов) + `npm run build` + vitest (37/37) чисто.
- **Живой смоук:** прод перезапущен, `/object_info` подтвердил `overlap` тип `FLOAT` на индексе 8;
  тот же `tile_overlap=211`+`non_square_tiles=True` на реальном фото через `/prompt` →
  `execution_success`, без регрессий.

### Аудит по внешнему PDF ("как правильно использовать tile и overlap"): найден скрытый баг с предупреждением

Пользователь принёс PDF-гайд по тайловому апскейлу и спросил "а ты уверен что у нас всё верно?" —
повод перечитать `nodes/node_upscale.py`/`common/tile_calc.py` целиком заново, а не просто повторить
прошлые выводы. Сверка с документом: наш auto-overlap (~12.5% от tile_size: 512→64px, 768→96px,
1024→128px) шире, чем фиксированные 32-64px из документа для мелких тайлов, но это осознанный выбор
(масштабирование overlap с размером тайла), уже обоснованный исследованием в начале этой хардненинг-
серии — не баг, а другая (валидная) практика.

Реальная находка — в предупреждении `mg_act and not non_square_tiles and eff_ov <= 0 and not
is_standard_quality_tile(tw, th)` (добавленном в правке "Ручная сетка с overlap>0" ранее в этом
файле): условие `eff_ov <= 0` гасило warning не только для "тайл вырос под overlap" случая (для
которого оно и задумывалось), но и для **другого**, не связанного сценария — `mg_full` (заданы И
cols, И rows) считает `tw`/`th` **независимо по каждой оси** от своего count, полностью игнорируя
`non_square_tiles` (это так с самого начала, до всех правок этой сессии). Значит `cols=3, rows=2` на
`Square`-режиме молча давал прямоугольный тайл (напр. 1048×672) без единого предупреждения —
пользователь не узнавал, что "Square" не соблюдён.

**Исправлено:** [nodes/node_upscale.py:200](nodes/node_upscale.py:200) — условие разделено на два
независимых: `tw != th` (несовпадение осей) теперь **всегда** предупреждает в Square-режиме,
независимо от overlap; старая проверка "non-standard tile" (стало `elif`) по-прежнему гасится когда
overlap объясняет рост тайла.

- **Тест:** `test_full_manual_grid_warns_when_square_mode_yields_rectangular_tile` — cols=3/rows=2/
  Square на 2016x864/factor=1.4 → tw/th=1048x672, предупреждение "non-square tile ... despite Square
  mode" присутствует. Существующий `test_non_square_manual_grid_has_no_false_nonstandard_warning`
  дополнен проверкой отсутствия и нового текста при `non_square_tiles=True`. Полный набор **333/333**
  pytest, `npm run gen:contracts` + `npm run build` + vitest (37/37) чисто.
- **Живой смоук:** прод перезапущен, тот же cols=3/rows=2/factor=1.4 сценарий на реальном фото через
  `/prompt` → `execution_success`; точный текст предупреждения дополнительно проверен прямым вызовом
  `execute()` вне pytest (совпадает символ-в-символ с тестовым ожиданием).

### `minSize` не применялся вообще — найдено по скриншоту пользователя (Advanced/Simple выглядели тесно)

Пользователь прислал скриншот обеих Upscaler-нод и попросил задать разумный размер по умолчанию.
Разведка (`grep` по всему фронтенду) показала: `minSize` пишется **один раз**
([nodeStyle.ts:39](frontend/src/nodes2/nodeStyle.ts:39), `p.minSize = opts.minSize`) и **нигде не
читается** — ни в нашем коде, ни в вендоренном `litegraph.js` (0 вхождений). Это полностью мёртвый
проп: реальный размер узла с DOM-панелью целиком определяет `domWidgetHost.ts`'s `syncNodeHeight()`,
который явно **сохраняет** текущую ширину LiteGraph вместо применения минимума. Живой замер
подтвердил: у `FiLUpscaleTileCalc` при заявленном `minSize=[320,320]` реальный устоявшийся размер был
`[275, 838]` — почти вдвое уже задуманного, просто потому что 320 никогда никуда не применялось.

**Исправлено на уровне общего слоя** (не точечно на Upscaler, а для всех FiL-нод с DOM-панелью —
единая точка правды): [domWidgetHost.ts](frontend/src/nodes2/domWidgetHost.ts) — `syncNodeHeight()`
теперь читает `n.minSize` и применяет его как настоящий пол через `Math.max()` и для ширины, и для
высоты (раньше `Math.max` использовался только неявно через сравнение с текущим значением — теперь
явно). Логика "не доверять `computeSize()`'s ширине" (защита от сжатия при сворачивании секции)
сохранена — `minSize` только *добавляет* нижнюю границу, никогда не уменьшает то, что уже есть.

`nodes/upscale.ts`/`upscale_simple.ts` — `minSize` поднят с `[320, 320]` до реальных измеренных
значений с небольшим запасом: `[340, 840]` (Advanced, 20 выходов + полная панель) и `[340, 520]`
(Simple, 4 выхода + та же панель).

- **Тест:** `domWidgetHost.ts` тестами не покрыт (не было и раньше) — проверка только живая.
- **Живой смоук:** прод перезапущен. `LiteGraph.createNode` + `graph.add` для обеих нод: `node.size`
  сразу (без задержки на ResizeObserver/settle-цикл) равен заявленному `minSize` — `[340,840]` и
  `[340,520]` — вместо прежнего "прыжка" от `[320,320]` до устоявшегося значения. Панель внутри
  реально смонтирована (`contentClientHeight: 370px` у обеих — не пустая/сломанная), консоль чистая.
  Скриншот самого канваса не снялся (таймаут — известное ограничение окружения на тяжёлом ComfyUI-
  canvas), верификация велась через `node.size`/DOM-замеры вместо визуального снимка.

### Слайдер `🔍 Upscale factor` растягивался на всю ширину узла (запрос пользователя)

Уточнил через AskUserQuestion: проблема не в позиции ползунка относительно значения, а в том, что
трек слайдера растягивается на 100% ширины узла и не адаптируется — на широком узле (а Advanced
теперь минимум 340px из-за предыдущего фикса) простой десятичный слайдер выглядит непропорционально
длинным.

**Исправлено:** [FilSlider.vue](frontend/src/components/widgets/FilSlider.vue) — `.fil-w-slider-range`
получил `max-width: 220px` (было только `flex: 1`, растягивался без ограничений). `min-width: 0`
оставлен — сжатие на узких узлах по-прежнему работает. Правка в общем компоненте — затрагивает все
слайдеры пакета (CFG, Temperature, Denoise и т.д.), не только Upscale factor, что соответствует
архитектурному принципу "одна точка правды".

- **Тест:** `FilSlider.vue`/CSS не покрыт тестами (визуальная правка). `npm run build` + vitest
  (37/37) чисто.
- **Живой смоук:** блокирован тем же таймаутом скриншота на тяжёлом canvas, что и в правке `minSize`
  выше — верификация только через сборку/консоль (чисто), без визуального снимка.

### Соседние тайлы почти дублировались — весь "остаток" деления доставался ОДНОЙ границе (найдено пользователем по скриншотам)

Пользователь сравнил превью тайлов 7/24 и 8/24 (выглядели почти одинаковыми) с 9/24 и 10/24 (совсем
разные) и заподозрил, что правая часть будет "апскейлена дважды". Разбор её точного конфига (Tile
size=1024, Overlap=64, ручной sizing, фото 1520x2704, factor=2) на реальном пересчёте показал: сетка
4×6=24, но границы между колонками — `64px, 64px, 896px (87.5%!)`. Индексы 6,7 (7/24, 8/24 в
1-индексации) — это ровно граница col2→col3 с 896px перекрытием; 8,9 (9/24, 10/24) — граница
col0→col1 новой строки, обычные 64px. Причина: `compute_layout` считал `cols` через `ceil()`, что
почти всегда даёт грид, который "перебирает" ширину картинки — весь этот избыток (832px) целиком
доставался ОДНОЙ (последней) границе вместо распределения по всем, потому что последний тайл просто
клэмпился внутрь границ.

Задал пользователю выбор (AskUserQuestion): оставить как есть (стандартное поведение
`comfy.utils.tiled_scale`/Ultimate SD Upscale, корректность вывода не страдает — просто на этой
одной границе сэмплер посчитает почти тот же кусок дважды) или равномерно распределить overlap по
всем границам (weight overlap реально вырастет **везде**, а не только на проблемной границе). Выбран
второй вариант.

**Исправлено** в [common/tile_calc.py](common/tile_calc.py) `compute_layout()` — `cols`/`rows`
по-прежнему считаются через номинальный `ceil()`-шаг (`tw - overlap`), но реальный шаг ПОЗИЦИОНИРОВАНИЯ
пересчитывается как `(axis - tile) / (count - 1)` — равномерно на весь count. Единая точка правды:
работает сразу во всех режимах (Full Auto, ручной tile_size, `mg_partial_cols/rows`), т.к. все они
проходят через `compute_layout`. Для `mg_full` (явная сетка cols+rows) поведение не меняется — там
`tile_size_for_count` уже растил тайл так, чтобы номинальный шаг ровно совпадал с равномерным, эта
правка там математически no-op (проверено тестами).

Побочный фикс в [nodes/node_upscale.py:178](nodes/node_upscale.py:178): `eff_overlap` (выход
`overlap`, используется и в `mask_blur`, и в `info`) раньше считался ДО `compute_layout` из
номинальных `sov`/`soh` — теперь пересчитывается ПОСЛЕ, из фактического `layout.step_w`/`step_h`,
иначе репортился бы устаревший номинальный overlap, а не реально применённый (тот же класс
несоответствия "выход врёт о реальной геометрии", что чинился раньше в этой сессии).

- **Тесты:** `test_layout_redistributes_overlap_evenly_instead_of_dumping_it_on_last_tile` — тот же
  реальный кейс (1520x2704/factor=2/tile=1024/overlap=64), проверяет cols=4 и что overlap-выход
  далёк от старого 87.5%-худшего случая. Обновлены 2 теста, чьи точные ожидаемые значения `overlap`
  изменились из-за корректного пересчёта (`test_overlap_output_is_float_and_preserves_fractional_average`
  — новый кейс 800x1379/overlap=233 даёт 285.5, старый 209.5-кейс перестал быть дробным после фикса;
  `test_auto_overlap_ignores_manual_value_and_scales_with_tile_size` — на 2944x2944 auto теперь даёт
  384 не 128, т.к. запрошенный overlap заставляет добавить 4-ю колонку). Полный набор **334/334**
  pytest.
- **Живой смоук:** прод перезапущен, тот же реальный файл (`KSK_Krea2_HIRES3x_00061_.jpg`,
  1520×2704) и настройки из скриншота пользователя → `/prompt` дал те же 24 тайла; границы теперь
  `341px/342px/341px (~33% каждая)` вместо `64/64/896`. Пиксельная проверка тайлов 7↔8 (та самая
  проблемная пара): **96.9%** пикселей теперь заметно различаются (было визуально "почти
  одинаковые").

### Размер по умолчанию + минимальные рамки + адаптивность при resize — по всему пакету (запрос пользователя)

Пользователь расширил запрос с Upscaler-нод на **весь пакет**: 1) размер по умолчанию должен
вмещать весь контент, 2) рамки/отступы минимальны везде, 3) содержимое адаптируется при ручном
resize узла. Для проверки на живых нодах пришлось временно поднять `comfyui-test` (порт 8189) с
`FIL_RELEASE_ALL=1` в обход staging-gate — единственный способ увидеть 6 ещё не промоученных нод
(`todo` в этом ledger) вживую. Инстанс остановлен после замеров, продовый gate не менялся.

**Найден и исправлен реальный баг (не косметика):** `FiLNeuroCleaner` был намертво зажат на 522px
при реальной потребности в 738px — `node.computeSize()` уже правильно считал 738, но
`ResizeObserver` в `domWidgetHost.ts`, который обычно применяет это к `node.size`, для этой ноды
**молча переставал срабатывать** (ровно тот сценарий, что уже был описан комментарием в коде как
ранее наблюдавшийся баг, но не имел защиты). Добавлен belt-and-suspenders `setInterval(syncNodeHeight,
400)` на весь срок жизни DOM-виджета — дешёвый (early-return при отсутствии изменений), гарантирует
сходимость даже когда `ResizeObserver` не сработал.

**`minSize` пересчитан для всех 8 нод с DOM-панелью** по свежим замерам `computeSize()` (после
фикса выше, чтобы числа были правдивыми): `FiLProviderLoader` 300→360, `FiLOpticScanner` 340→680,
`FiLNeuroCleaner` 340→750, `FiLHighResFix` 420→440 (везде было МАЛО — маскировалось тем, что
content-driven рост высоты обычно и так работал, но без надёжного пола ширина всё равно могла
насильно зажиматься). `FiLUpscaleTileCalc`/`FiLUpscaleSimple`, наоборот, **уменьшены** (840→810,
520→490) — старые числа были взяты с запасом ещё до появления надёжного измерения, теперь лишние
~30px пустого места убраны. `FiLBeforeAfterCompare` не тронут — там высота под реальный превью
изображения, а не только под виджеты, замер без подключённой картинки не показателен.

**Адаптивность при resize:** `FilSlider.vue` (правка из прошлой сессии, `max-width:220px`) уже
чинит "слайдер растягивается на всю ширину". Аудит `grid-template-columns` по всем Vue-компонентам
нод показал, что колонки лейблов везде уже `minmax(auto, max-content)` (гибкие), а не жёсткий px —
дополнительных фиксов не потребовалось. Ширина узла при ручном resize сохраняется как выбрал
пользователь (виджеты используют освободившееся место), высота всегда подгоняется под реальный
контент — свободное пространство снизу не остаётся (соответствует "рамки минимальные").

**Побочная находка (не в этой правке, вынесена отдельной задачей):** `FiLNeuroCleaner`'s
`retry_times` — единственный backend-инпут, не спрятанный и не перенесённый в кастомную Vue-панель
(в отличие от всех остальных полей ноды) — торчит как нативный виджет. Не трогал, т.к. это
отдельная фича-доработка, а не размер/рамки/адаптивность.

- **Тест:** прямых unit-тестов на `domWidgetHost.ts`/CSS нет (визуальный слой). `npm run build` +
  vitest (37/37) чисто на каждом шаге.
- **Живой смоук:** для каждой из 8 нод — создание через `LiteGraph.createNode`, замер
  `node.size` vs `node.computeSize()` до и после правок (все 8 теперь либо совпадают, либо на
  10-20px запаса, ни одна не занижена и не имеет большого пустого хвоста). `FiLNeuroCleaner`
  отдельно проверен 10 замерами за 3.6 сек до фикса (стабильно зажат) и 1 замером после (сразу
  738/750, совпадает). Проверка пола `minSize`: принудительный `setSize([100,100])` на
  `FiLUpscaleTileCalc` — возвращается к `[340,810]` в течение polling-окна; принудительный
  `setSize([600,1200])` — ширина остаётся 600 (уважает выбор пользователя), высота возвращается к
  810 (не оставляет пустого места). Прод перезапущен на итоговой сборке, `FiLUpscaleTileCalc`
  подтверждён `[340,810]`.

## 2c. FiLTileAssembly — promoted (новая нода, не из исходного списка)

- **Статус:** promoted.
- **Файлы:** `nodes/node_tile_assembly.py`, `nodes2/nodes/tile_assembly.ts`,
  `common/tile_calc.py` (`assemble_tiles`/`_feather_ramp_1d`), `common/io_types.py`
  (новый сокет `FIL_TILE_LAYOUT`), contract, locale `tla_*`.
- **Происхождение:** запрошено пользователем после сравнения с ComfyUI_Eclipse
  (сторонний пакет) — его пара Tile Split/Tile Assembly делает split+recombine
  end-to-end, а наш `FiLUpscaleTileCalc` до этого считал грид и резал тайлы, но
  **не собирал их обратно** (`common/tile_calc.py:154`'s старый докстринг прямо
  говорил "the real recombine step stays downstream") — реальный пробел,
  раньше требовавший внешний пакет (Ultimate SD Upscale и т.п.) для финальной
  сборки.
- **Дизайн:** отдельная нода (не встроено в Advanced/Simple — другая
  ответственность, SoC), парой к Advanced/Simple как `FiLHighResFix`+`FiLKSampler`.
  Раскладка передаётся через новый bundled DICT-сокет `FIL_TILE_LAYOUT`
  (`{"rects": [...], "cols", "rows", "canvas_w", "canvas_h"}`) — по аналогии с
  `FilHiresScript`, вместо 4-5 отдельных скалярных проводов.
- **Реализация:** `assemble_tiles()` — чистый torch/float, без PIL round-trip
  (в отличие от Eclipse, который гоняет tensor→uint8 PIL→tensor и теряет
  точность). Блендинг — сепарабельная 2D feather-маска на тайл (accumulate +
  normalize по сумме весов), а не попарный blend "сначала по строкам, потом
  по столбцам" как у Eclipse — наш подход корректно обрабатывает угловой
  4-сторонний нахлёст без отдельной угловой логики. Рамп никогда не доходит
  ровно до 0 (мин. вес `1/(n+1)`), чтобы ни один пиксель не остался без веса
  до суммирования соседей.
- **`layout` output:** добавлен в конец списка выходов `FiLUpscaleTileCalc`
  (индекс 20) и `FiLUpscaleSimple` (индекс 4) — не трогает существующие
  индексы сохранённых воркфлоу. Всегда реальная посчитанная сетка, даже в
  latent-only режиме (геометрия не зависит от того, подключена ли картинка).
- **Ошибки:** несовпадение количества тайлов в батче и `layout["rects"]`
  → `ValueError` с понятным сообщением, а не молчаливое "додумывание"/чёрные
  области на канве.
- **Тесты:** `tests/test_tile_assembly.py` (схема, delegation, точная
  реконструкция плоского цвета, точное совпадение отдельно раскрашенных
  тайлов в глубине интерьера — вдали от реальной, после redistribution,
  зоны нахлёста, — ошибка на несовпадении батча) + новые тесты в
  `test_upscale.py`/`test_upscale_simple.py` на сам `layout` output
  (форма/значения, проброс через Simple, реальная сетка в latent-only режиме).
- **Живой смоук:** полный реальный прогон на `comfyui-test` через `/prompt`
  без обхода gate — `EmptyImage → FiLUpscaleTileCalc → FiLTileAssembly →
  PreviewImage`, `execution_success`, реальный PNG на выходе. В отличие от
  KSampler/HighResFix/NoiseControl этот путь не требует диффузионной модели,
  так что здесь получилось проверить по-настоящему end-to-end, а не только
  структурно.
- **UX-фикс (по запросу пользователя):** нода изначально не имела своей
  Vue-панели (у неё вообще нет виджетов — только 2 сокета), но и превью
  результата на самом узле тоже не было — визуально выпадала из интерфейса
  пакета. Добавлен встроенный превью результата по образцу `FiLKSampler`
  (`is_output_node=True` + `PreviewImage().save_images()`, best-effort —
  ошибка сохранения не роняет execute()): собранная картинка теперь видна
  прямо на узле, отдельный `PreviewImage` ниже по графу больше не обязателен.
  Перепроверено вживую: тот же `/prompt`, но с `FiLTileAssembly` как
  терминальной output-нодой (без `PreviewImage` после неё) —
  `execution_success`, `outputs["3"]["images"]` содержит реальный PNG.

## 3. FiLNeuroCleaner — promoted

- **Статус:** promoted (см. строку 5 в таблице промоута).
- **Файлы:** `nodes/node_cleaner.py`, `components/nodes/NeuroCleaner.vue`, `nodes2/nodes/cleaner.ts`, contract, locale `nc_*`.
- **Итог прохода:** схема упрощена — 14 чекбоксов и Windows-ctypes плацебо-код выкинуты, остались
  явные тумблеры VRAM/типов моделей; нода перестала рапортовать успех, когда чистка не выполнялась
  (коммит `0fd8a28`); панель переведена на общий `FilToggle`.

## 4. FiLBeforeAfterCompare — удалена из пакета

- **Статус:** снята с промоута — ноды больше нет.
- **Что удалено:** `nodes/node_compare.py`, `components/nodes/BeforeAfterCompare.vue`,
  `nodes2/nodes/compare.ts`, `nodes2/compareEngine.ts`, contract, locale `cmp_*`, HTTP-маршрут
  `/compare/save` и папка вывода `output/*/compare/`.
- **Хвосты подчищены при подготовке релиза:** `frontend/src/api/client.ts` держал мёртвые
  `saveCompareImage`/`CompareSaveResponse` (звали удалённый маршрут, не использовались нигде) —
  убраны; стереофраза про `fil_compare` в шапке `nodes2/filExtension.ts` приведена к реальности
  (`getCustomWidgets` возвращает пустой объект).

## 5. FiLProviderLoader — promoted

- **Статус:** promoted (перенесена вперёд по запросу пользователя, до NeuroCleaner/Compare).
- **Файлы:** `nodes/node_provider.py`, `components/nodes/ProviderLoader.vue`, `nodes2/nodes/provider.ts`, `common/models.py`, `common/provider_runtime.py`, contract, locale `prov_*`.
- **Находки и фиксы:**
  - [x] `max_tokens` не писался в `build_payload` ни одной стратегии (Ollama/OpenAI-совместимые/Google) —
    `ModelClient.generate()` принимал его и прокидывал в `kwargs`, но ни одна реализация его не читала.
    **Исправлено:** Ollama → `options.num_predict`, OpenAI-совместимые → `max_tokens`, Google →
    `generationConfig.maxOutputTokens`. Везде гейтится на truthy (`0` = "без явного лимита", как и
    задумано в тултипе виджета) — поле просто не добавляется в payload.
  - [x] `GoogleStrategy.build_payload` терял `seed` и `response_format` (только `temperature` доходил
    до API). **Исправлено:** `generationConfig.seed` (Gemini API поддерживает) и
    `generationConfig.responseMimeType="application/json"` для JSON-режима.
  - [x] `refresh_models` в `node_provider.py` глушил любую ошибку `except Exception: pass` без единого
    следа в логах — молчаливый сбой. **Дополнительно найдено по ходу:** он и не форсировал реальное
    обновление — `fetch_models_from_provider()` уважает 5-минутный TTL-кэш, так что "Refresh" внутри
    `execute()` чаще всего просто возвращал тот же кэш. **Исправлено:** `invalidate_model_cache(p_key)`
    перед фетчем + `logger.warning(..., exc_info=True)` на неудаче (реальный fetch-путь UI — отдельный
    REST `/models/{provider}?force=1`, не тронут, работал верно и раньше).
  - [x] `models.py:135-162` (`OpenAIStrategy`/`GoogleStrategy.parse_response`) — fallback на `str(data)`
    маскировал реальный parse-фейл, превращая сырой JSON-ответ провайдера (в т.ч. объект ошибки) в
    видимый пользователю "текст промпта". **Исправлено:** явная проверка `data["error"]` → `raise
    InferenceError`, затем строгий поиск ожидаемой формы ответа; если ничего не найдено — тоже
    `InferenceError` с телом payload, вместо тихой подмены.
- **Побочная находка (не в исходном списке, тот же файл):** `RateLimiter` создавался и передавался в
  каждую стратегию (`ModelClient.__init__`), но `wait_if_needed()` не вызывался НИГДЕ — весь виджет
  "Rate limit" был плацебо для всех провайдеров, не только Scanner'а. См. фикс в #8 (тот же корень —
  `common/models.py`), т.к. обнаружено при разборе находки Scanner'а про `rate_limit_ms`.
- **UX:** аудит панели показал, что у `seed` (реальный, теперь до конца прокинутый в провайдеры вход)
  не было своего поля в `ProviderLoader.vue` — виджет существовал в схеме, но был скрыт без
  Vue-замены (единственное расхождение с остальными 6 полями панели). Добавлено `FilNumberInput`
  (min=-1, max=999999999999, диапазон 64-битного seed) между Rate limit и Max image side; проводка
  через `nodeState.seed` идентична остальным полям (`provider.ts`: `widgetSpecs`/`initialValues`).
  Новый локаль-ключ `lbl_provider_seed` (en/ru), `tt_provider_seed` уже существовал.
- **Тесты:** `tests/test_models.py` (новый, 17 тестов) — max_tokens/seed/response_format wiring по
  всем 3 стратегиям, `parse_response` больше не маскирует ошибки/пустые ответы, rate-limiter реально
  вызывается с переданным `rate_limit_ms` (и корректно дефолтится на 100мс при `None`).
  `tests/test_node_provider.py` (новый, 4 теста) — `execute()` пакует все виджеты в `config`,
  `refresh_models=True` реально инвалидирует кэш перед фетчем, сбой логируется (не глушится),
  `refresh_models=False` не трогает кэш вообще. Полный набор **379/380** pytest (единственный красный —
  предсуществующий `test_noise_control_bypasses_common_ksampler`, не связан с этой правкой), vitest
  37/37, `npm run build` чисто.
- **Живой смоук:** временный байпас гейта на `comfyui-test` (порт занят другим чатом — перезапущен с
  явного разрешения пользователя). `/api/object_info/FiLProviderLoader` подтвердил полную схему
  (8 инпутов, включая `seed`). Панель на канвасе: `getComputedStyle`/DOM-обход подтвердил рендер
  лейбла "🎲 Seed" между Rate limit и Max image side; прямая запись в `nodeState.seed` (12345)
  корректно долетела до скрытого нативного виджета (то самое значение, что читает `execute()`).
  Gate возвращён в исходное состояние после проверки.

## 6. FiLKSampler — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_ksampler.py`, `nodes2/nodes/ksampler.ts`, `common/sampling.py`, contract, locale `ks_*`.
- **Аудит:** прочитан построчно вместе с `common/sampling.py` (общий с HighResFix) —
  логика чистая: checkpoint-кэш на 1 запись, ControlNet-хинт пайплайн, цикл
  `iterations`, ветвление pixel/latent/both. Новых багов не найдено сверх уже
  внесённых в этой сессии правок (кэш чекпоинта `load_hires_checkpoint`,
  `preprocessor` (canny), фикс стабильности same-seed кэша, проброс `tiled`
  через decode/encode/ControlNet).
- **UX:** нода намеренно оставляет нативные ComfyUI-виджеты вместо кастомной
  Vue-панели (см. комментарий в `ksampler.ts`) — `components/nodes/KSampler.vue`
  был полностью реализован, но нигде не монтировался (осиротевший компонент).
  По решению пользователя: **выкинуть** — файл удалён, `ksampler.ts` его и не
  использовал, других импортов не найдено (grep).
- **Contract drift:** `min_size` в `registry.py` (320,360) не совпадал с реальным
  фронтовым полом `ksampler.ts` (270,260) — не баг (это поле никем не читается в
  рантайме, только генерируется в `contracts.json/.ts`), но приведено в
  соответствие для консистентности с уже сделанным для Upscaler-нод.
- **Локаль:** `ks_*` ключи en/ru полностью синхронны, мёртвых/недостающих нет.
- **Тесты:** добавлены 3 — `vae_decode="false"` возвращает placeholder-картинку
  без вызова `_decode`; отсутствие `optional_vae` форсирует decode-off даже если
  виджет говорит `"true"`; `script` без ключа `"hiresfix"` — no-op, `apply_hiresfix`
  не вызывается.
- **Живой смоук:** `/object_info` на `comfyui-test` (обычный gate, без байпаса)
  подтвердил регистрацию обеих нод. Реальный `/prompt` с настоящей моделью
  **не прогнан** — на этом инстансе нет ни одного `CheckpointLoaderSimple`-
  чекпоинта, а единственные доступные `diffusion_models` (FLUX-класс) несовместимы
  с единственными text-encoder'ами в наличии (Qwen). Собирать заведомо нерабочую
  по чужой причине цепочку смысла не было — опирался на структурную регистрацию
  + существующее mock-based unit-покрытие `execute()`.
- **Output-названия:** позже в этой же сессии выходы `MODEL/CONDITIONING+/
  CONDITIONING-/LATENT/VAE/IMAGE` переименованы в `model/positive/negative/
  latent/vae/image` — чтобы совпадать с именами соответствующих входов (по
  запросу пользователя). Контракт и тест `test_output_contract_is_stable_six_values`
  обновлены синхронно.

## 7. FiLHighResFix — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_hiresfix.py`, `components/nodes/HiResFix.vue`, `nodes2/nodes/hiresfix.ts`, `common/sampling.py`, contract, locale `hrf_*`.
- **Аудит:** та же проверка, что и для #6 (общий `common/sampling.py`) — чисто.
- **Contract drift:** `min_size` (320,420) → (320,300), приведено в соответствие с
  `hiresfix.ts` (уже исправленным ранее в этой же сессии на низкий пол под
  `computeSize()`).
- **Локаль:** `hrf_*` ключи en/ru синхронны (включая `hrf_seed_*` для кастомного
  seed-picker'а в `HiResFix.vue`) — мёртвых ключей нет.
- **Живой смоук:** см. #6 (структурная регистрация; реальный `/prompt` не прогнан
  по той же причине — нет совместимой пары чекпоинт/CLIP на инстансе).
- **Output-название:** выход `SCRIPT` → `script` (та же причина, что у #6 —
  совпадает с именем входа `script` у FiLKSampler/FiLNoiseControl).

## 8. FiLOpticScanner — promoted

- **Статус:** promoted (перенесена вперёд по запросу пользователя, сразу после Provider Loader).
- **Файлы:** `nodes/node_scanner.py`, `components/nodes/OpticScanner.vue`, `nodes2/nodes/scanner.ts`, `common/models.py`, contract, locale `scn_*`.
- **Находки и фиксы:**
  - [x] `execute()`/`fingerprint_inputs()` объявляли `temperature=0.7, max_tokens=1024` как параметры
    функции, но у Scanner НЕТ собственных виджетов для них в схеме — эти значения физически никогда
    не приходили от ComfyUI, execute() всегда получал ровно свои Python-дефолты, а `config["temperature"]`/
    `config["max_tokens"]` от Provider Loader полностью игнорировались. **Исправлено:** убраны из
    сигнатур (были недостижимы), вместо этого `temperature = config.get("temperature", 0.7)`,
    `max_tokens = config.get("max_tokens") or 1024` считаются в начале `execute()` (явное `0` в конфиге
    — "нет лимита у провайдера" — намеренно остаётся 1024 у Scanner'а, т.к. ему нужен реальный кап для
    стабильного парсинга сгенерированного промпта). `rate_limit_ms` — та же история, добавлен как новый
    параметр `_run_one_pass`/`_hybrid_call`, прокидывается в оба места вызова.
  - [x] **Побочная находка, более серьёзная, чем формулировка в ledger:** `rate_limit_ms` не просто
    "игнорился Scanner'ом" — сам `RateLimiter` (`common/network.py`), создаваемый в `ModelClient.__init__`
    и переданный в КАЖДУЮ стратегию, нигде не вызывался (`wait_if_needed()` — 0 вызовов во всём
    `models.py`). Значит виджет "Rate limit" в Provider Loader был плацебо для всех провайдеров и всех
    нод, не только Scanner'а. **Исправлено:** `ModelClient.generate()` получил параметр `rate_limit_ms`,
    `_build_and_send()` вызывает `self.rate_limiter.wait_if_needed(rate_limit_ms)` перед каждым реальным
    HTTP-запросом (после cache-hit — не перед ним, кэш не должен тротлиться).
  - [x] import-time синглтоны (`_processor`/`_style_manager`/`_prompt_gen`/`_model_client`/
    `_style_enforcer`) и `_AGENT_KEYS = get_visible_agent_keys()` — **оценено, решение: оставить**.
    Синглтоны — намеренное переиспользование HTTP-сессии/промпт-кэша между запусками (тот же паттерн,
    что и `ModelClient`'s собственный `self.http_client`/`self._cache`), не race-condition (нет
    мутируемого общего состояния между вызовами `execute()`). `_AGENT_KEYS` в отличие от
    `get_visible_style_keys(...)` (вызывается заново внутри `define_schema()`) кэшируется на импорте —
    выглядит как несогласованность с style-паттерном, но `AGENTS` в `common/data.py:221` — статичный
    dict-литерал в коде, не файл на диске и не runtime-конфиг, так что оба подхода дают идентичный
    результат весь срок жизни процесса. Не бага, чисто стилистическое расхождение — трогать не стал.
  - Vue-панель (`OpticScanner.vue`) уже полностью покрывает свои собственные виджеты (`seed`,
    `response_format` и т.д.) — в отличие от Provider Loader, пробелов в UI не найдено.
- **Тесты:** `tests/test_scanner_metadata.py` — 2 новых теста (`config` с явными `temperature`/
  `max_tokens`/`rate_limit_ms` доходят до `_model_client.generate()` как есть; при их отсутствии в
  `config` используются прежние дефолты 0.7/1024/100 — поведение не регрессирует для старых
  сохранённых графов). `tests/test_models.py` — 3 новых теста на сам rate-limiter (см. #5). Полный
  набор **379/380** pytest (единственный красный — предсуществующий, не связан), vitest 37/37.
- **Живой смоук:** тот же временный байпас гейта, что и #5. `/api/object_info/FiLOpticScanner`
  подтвердил схему без изменений (temperature/max_tokens намеренно не входят в неё — идут только через
  `config`). `LiteGraph.createNode` для обеих нод (Provider Loader → Optic Scanner), реальное
  соединение `config`→`config` через `node.connect()`, консоль без ошибок. Полный `/prompt`-прогон
  через LLM не делался осознанно — на `comfyui-test` нет ни локального Ollama, ни облачных ключей
  (тот же класс ограничения окружения, что у KSampler/HighResFix — см. #6/#7); корректность payload
  подтверждена мок-тестами `_model_client.generate`, не живым вызовом сети.

### Полный функциональный аудит (по запросу пользователя "проверить абсолютно всё")

Прочитан весь prompt-pipeline построчно: `common/logic.py`, `common/style_engine/*`
(`enforcer.py`, `presets.py` — 2476 строк, `resolver.py`, `rules.py`, `text.py`),
`common/model_prompt_adapters.py`, `common/clean_output.py`, `common/data.py`,
плюс весь провайдерский слой (`models.py`, `provider_runtime.py`, `provider_accounts.py`,
`provider_resilience.py`, `network.py`, `config.py`, `base.py`) и фронтенд
(`ProviderLoader.vue`/`provider.ts`, `OpticScanner.vue`/`scanner.ts`, seed-preflight
в `filExtension.ts`).

**Найден и исправлен главный баг пайплайна — style enforcement терялся в Two-Stage режиме.**
`_style_enforcer.build_enforcement_block()` (FORBIDDEN WORDS/REQUIRED CUES/camera override)
добавлялся в `system_prompt` в `execute()`, но Two-Stage-ветка `_run_one_pass` пересобирала
`stage1_sys`/`stage2_sys` с нуля через `build_system_prompt_two_stage_bundle()` и никогда не
подмешивала enforcement обратно — хотя `nsfw_active`/`custom_style` там корректно дублировались.
Two-Stage — дефолтный режим при `prompt_mode="Auto"` + выбранном стиле (`effective_mode =
"Two-Stage" if style_block.strip() else "Hybrid"`), т.е. именно тогда, когда enforcement нужнее
всего, он не работал вообще. Hybrid-режим (без стиля) был не затронут — там `system_prompt` идёт
в `_model_client.generate()` как есть.

**Найдена и полностью подключена "мёртвая" preset-support система (75 пресетов).**
`resolve_style_contract()` умеет определять, поддерживает ли реальное описание сцены выбранный
пресет (`support_signals` vs `contradiction_signals` → режим `full`/`weak`/`blocked`, с отдельным
текстом-инструкцией для LLM на каждый режим — не выдумывать элементы стиля, которых нет в кадре).
В `common/style_engine/presets.py` под это заведено **75 пресетов** (Motion Blur, вся серия
Cyborg/Android, Anime Style, Concept Art, Game UI и др.) с полностью прописанными
`weak_mode_contract`/`blocked_mode_contract`/`fallback_behavior` — существенный объём проделанной
работы. Проблема: `resolve_style_contract()` вызывался в `execute()` ДО генерации stage-1
описания (`support_text` всегда `""` → `support_active=False` → режим всегда `"inert"`), и даже
если бы сработал — `build_preset_support_block()` нигде не вызывался, результат нигде не
использовался (ни в промпте, ни в metadata).

**Решение пользователя: подключить полностью.** `_run_one_pass()` (`nodes/node_scanner.py`)
теперь в Two-Stage-ветке, сразу после получения stage-1 `description`, повторно вызывает
`resolve_style_contract(style_block, style_key=style_key, support_text=description)` — с реальным
текстом сцены вместо пустого — и подмешивает в `stage2_sys`:
1. `build_enforcement_block(...)` (фикс главного бага выше);
2. `build_preset_support_block(..., support_text=description, support_mode=resolved.support_mode)`
   (реальный контракт weak/full/blocked для тех пресетов, у которых он определён).

Для этого `_run_one_pass`/`execute()` теперь возвращают/прокидывают `contract`/`enforcement`
дополнительным элементом кортежа (было `(text, fallback_reason)`, стало
`(text, fallback_reason, resolved_contract)`), а `meta_dict` получил новые поля
`preset_support_mode`/`preset_support_summary`. **Hybrid-режим осознанно не трогали** — там нет
отдельного stage-1 текста для анализа (единственный вызов LLM), так что `support_mode` там
остаётся `"inert"" — как и было, это не регрессия, а честная граница возможностей.

**Побочный найденный баг того же класса:** `post_convert_prompt()` (DiT-реструктуризация под
QWEN/SDXL/FLUX) принимает `style_enforcer`, который активирует `_style_cue_guard` — защиту от
потери обязательных cue стиля при реструктуризации (откат на безопасный вариант, если
реструктурированный текст потерял cue, которые были в исходном). Scanner никогда не передавал
свой `_style_enforcer`, так что guard был `None`-заглушкой (`survived` всегда `True`, откат
никогда не срабатывал). **Исправлено:** `post_convert_prompt(..., style_key=style_key,
style_enforcer=_style_enforcer)` в `execute()`.

**Мелкая находка, не влияющая на поведение (перенесена в общий backlog):**
`common/provider_accounts.py::get_api_key()` — ветка `hasattr(config_inst,
'get_provider_config')` всегда `False` (`get_provider_config` — функция модуля `config.py`, а не
метод `Config`). **Убрано** — итоговый fallback на `auth.json`/env-переменные покрывает то же самое.

**Dead-code чистка (по решению пользователя, разобрано по каждому пункту):**
- `get_agent_output_mode()`/`AGENT_OUTPUT_MODE_TAGS`/`AGENT_OUTPUT_MODE_PROSE` (`common/data.py`) —
  **выпилено**. Задумывалось как код-метка для агента "Professional Tagger" (просит тег-вывод
  вместо prose), нигде не вызывалось — агент и так управляет выводом через текст системного
  промпта, отдельная инфраструктура не нужна.
- `build_hybrid_artifact`/`build_two_stage_prompt_artifact` (`common/logic.py`) — **выпилено**.
  Собирали точный текст промпта, отправленного в LLM, но ни один caller их не читал.
- `OutputCleanConfig.strip_think` (`common/clean_output.py`) — **починено, не выпилено**.
  Поле объявлено, но `<think>`/`analysis_scratchpad`-стриппинг применялся безусловно, флаг ничего
  не гейтил. Теперь `<think>`-блоки реально сохраняются при `strip_think=False`;
  `analysis_scratchpad` по-прежнему убирается всегда (отдельный, не связанный со strip_think
  паттерн в `CLEANUP_PATTERNS`) — это осознанно, не баг.

**Тесты:** `tests/test_scanner_metadata.py` — 5 новых (enforcement реально доходит до stage2;
`support_mode` = `full` при наличии сигналов в stage-1 описании / `weak` при их отсутствии /
`inert` в Hybrid; `post_convert_prompt` реально получает `style_enforcer`+`style_key`).
`tests/test_clean_output.py` (новый, 3 теста) — `strip_think=True/False` поведение,
`analysis_scratchpad` всегда убирается. Полный набор **387/388** pytest (единственный красный —
предсуществующий `test_noise_control_bypasses_common_ksampler`, не по теме).
- **Живой смоук:** не повторялся отдельно для этого раунда — правки внутри уже проверенного
  структурно пайплайна (`execute()`/`_run_one_pass`), полностью покрыты новыми mock-тестами на
  реальном коде; для проверки настоящего LLM-вызова на этом окружении по-прежнему нет ни Ollama,
  ни облачных ключей (см. живой смоук выше).

### Второй проход по вопросу "что ещё недоделано/мертво" (по прямому запросу пользователя)

**Возрождена JSON-схема Ideogram 4 (решение пользователя: "JSON промптинг для Ideogram 4 мне
очень нужен").** `adapt_ideogram4_caption()` + 8 хелперов в `model_prompt_adapters.py` были
полностью реализованы и покрыты 13 тестами, но осиротели после решения прошлой сессии "Ideogram 4
больше не роутится на выдуманную JSON-схему, реальный API берёт plain text" — `data.py`'s
`MODEL_PROMPT_RULES["Ideogram 4"]["json_schema"]` стоял `None`, так что схема была недостижима
даже при явном `response_format="json"`.

**Исправлено точечно, без регресса text-режима:** `json_schema` вернули на `"ideogram4"` —
но диспатч в `convert_to_dit_format()` (`common/model_prompt_adapters.py`) теперь проверяет
`response_format == "json" and model_uses_ideogram_json_schema(model_type)` явно, поэтому JSON-
схема активируется **только** когда пользователь сам выбрал `response_format="json"` для
`model_type="Ideogram 4"` — в text-режиме (дефолт, соответствует реальному Ideogram API) поведение
не изменилось ни на бит. `build_response_format_instruction()` для этой комбинации теперь снова
возвращает инструкцию "IDEOGRAM 4 CANONICAL JSON" (было тоже недостижимо по той же причине).

- **Тесты:** обновлены 2 старых теста, закреплявших прошлое решение
  (`test_json_schema_helpers` в `test_model_prompt_rules.py`,
  `test_ideogram4_json_mode_generic` → `test_ideogram4_json_mode_uses_caption_schema` в
  `test_all_models_prompting.py`), переписан
  `test_response_format_instruction_ideogram4_no_longer_uses_json_schema` →
  `test_response_format_instruction_ideogram4_json_mode_uses_caption_schema`. Добавлены 2 новых:
  `test_dit_convert_ideogram4_json_mode_uses_caption_schema` (модульный уровень) и
  `test_ideogram4_json_mode_produces_canonical_caption_schema` (сквозной, через
  `FiLOpticScanner.execute()` — реальный путь пользователя, включая `clean_output()` после
  конвертации — подтверждено, что JSON не портится).

**Мёртвый параметр `has_image` в `_run_one_pass()`** (`nodes/node_scanner.py`) — объявлен в
сигнатуре, ни разу не читался в теле функции; оба вызова передавали `has_image=True` безусловно,
даже в чисто текстовом режиме без изображения. Убран из сигнатуры и обоих call-сайтов — поведение
не менялось (параметр был чистым мусором).

**Дочитан весь оставшийся стек до конца** (по прямому запросу "проверить абсолютно всё"):
`style_engine/resolver.py`, `style_engine/text.py`, `style_engine/rules.py` (3474 строки —
автоматически сверены все категории между `CATEGORY_PATTERNS`/`FORBIDDEN`/`REQUIRED_CUES`/
`PRIORITY_RULES`/`DRIFT_TARGETS`/`OUTPUT_OBLIGATIONS`/`STYLE_TRANSFORM_RULES` — расхождения есть
(часть категорий вроде `cyberpunk`/`noir`/`retro` не имеют required_cues/priority/drift/obligation),
но это осознанная многоуровневость (везде `.get(cat, [])`/`.get(cat, "")` fallback), не баг), и
весь `model_prompt_adapters.py` целиком. Новых находок сверх Ideogram4/`has_image` не выявлено.

- **Тесты:** полный набор **391/391** pytest — все зелёные (ранее нестабильный
  `test_noise_control_bypasses_common_ksampler` тоже теперь проходит стабильно и в изоляции;
  `common/sampling.py` в этой сессии не трогали, похоже на артефакт закэшированного состояния
  раннего запуска, а не реальный баг).

### Пересмотр всех вырезанных за сессию находок (по замечанию пользователя: "прежний функционал не значит не нужный")

Пользователь верно указал, что Ideogram4-эпизод (чуть не выпилил реально нужную фичу) — повод
перепроверить остальные удаления этой сессии тем же методом (git-история + реальные потребители),
а не полагаться на "не вызывается = не нужно".

**Подтверждено безопасным (реально расследовано, не просто грепом):**
- `common/node_registry.py` — `docs/architecture.md` утверждал, что `__init__.py` валидирует ноды
  через этот файл. Проверка по всей git-истории (с первого коммита) показала: `__init__.py`
  **никогда** этого не делал. `contracts/registry.py` уже дублирует title/category для всех 11 нод
  — сам `node_registry.py` на момент удаления знал только про 9 (без FiLTileAssembly/
  FiLNoiseControl), т.е. отставал от реальности ещё до удаления. `docs/architecture.md` поправлен
  (убрана ссылка на несуществующий файл и на устаревший "?" help badge момент).
- `__shortcutHooks` — реальные функции `openCheatsheet`/`focusSearch` работают напрямую, привязаны
  к клавишам `?`/`/`; `__shortcutHooks` был лишним ре-экспортом без единого потребителя (ни в коде,
  ни в тестах, ни разу за всю историю).
- Мёртвая ветка `hasattr` в `provider_accounts.get_api_key()` — оживление поменяло бы приоритет
  (config.yaml перебивал бы ключ, сохранённый пользователем через UI/`auth.json`) — была бы
  регрессия, не фича.

**Возвращены/подключены (пользователь оказался прав, что резать было рано):**

1. **`get_agent_output_mode()`/`AGENT_OUTPUT_MODE_TAGS`** (`common/data.py`) — возвращены и
   **подключены по-настоящему** (в прошлый раз просто удалил, не докопавшись до сути). Расследование
   вскрыло реальное противоречие: агент "Professional Tagger" в своём PURPOSE прямо говорит "flat
   comma-separated tokens... suitable for SDXL-style prompting", но SDXL-ветка `convert_to_dit_format`
   (`common/model_prompt_adapters.py`) безусловно реструктурирует ЛЮБОЙ текст под SDXL/QWEN в
   предложения — тег-вывод Tagger'а молча ломался в prose именно на той паре агент+модель, для
   которой он сам себя рекламирует. **Решение пользователя: теги остаются как есть.**
   `convert_to_dit_format()`/`post_convert_prompt()` получили параметр `agent_output_mode` —
   при `"tags"` реструктуризация (для ЛЮБОГО `model_type`, не только SDXL/QWEN) полностью
   пропускается, применяется только нормализация (whitespace/усечение по словам), новый `mode`
   в метаданных — `"tags_as_is"`. `node_scanner.py::execute()` прокидывает
   `get_agent_output_mode(agent_key)` в вызов.
   - **Тесты:** `test_professional_tagger_is_the_only_tags_output_agent` (`test_model_prompt_rules.py`),
     3 теста в `test_model_adapters.py` (tags-режим переживает SDXL/QWEN нетронутым, prose-режим
     реструктурирует как раньше), сквозной `test_professional_tagger_keeps_comma_tags_on_sdxl`
     (`test_scanner_metadata.py`, через реальный `FiLOpticScanner.execute()`).

2. **JSON-схема Ideogram 4** (`adapt_ideogram4_caption` + 8 хелперов) — возвращена в диспатч
   (`MODEL_PROMPT_RULES["Ideogram 4"]["json_schema"]` снова `"ideogram4"`), активна только при явном
   `response_format="json"` — text-режим (соответствует реальному API) не тронут. См. подробности
   выше (это решение принято раньше в этой же сессии, до общего пересмотра).

3. **`build_hybrid_artifact`/`build_two_stage_prompt_artifact`** (`common/logic.py`) — НЕ
   восстановлены дословно (устарели по структуре — не видят enforcement/preset-support блоки,
   добавленные позже в этой же сессии), но их суть реализована заново, правильно: `_run_one_pass()`
   теперь возвращает 4-й элемент — `sent_prompt = {"system": ..., "user": ...}`, точный текст
   последнего реального вызова LLM, который дал возвращённый результат (корректно учитывает все
   ветки: Hybrid, Two-Stage успех = stage2, timeout-фоллбэк = system_prompt/user_message,
   stage2-слишком-короткий = откат на stage1). Новое поле `meta_dict["sent_prompt"]` — точный
   промпт для отладки/аудита, без раздувания на каждый запуск сверх одного словаря из двух строк.
   - **Тесты:** `test_sent_prompt_reflects_hybrid_mode_system_and_user`,
     `test_sent_prompt_reflects_stage2_in_two_stage_mode`,
     `test_sent_prompt_falls_back_to_stage1_when_stage2_is_too_short` (`test_scanner_metadata.py`).

**Мёртвый параметр `has_image`** в `_run_one_pass()` — подтверждён нечитаемым внутри функции (это
не суждение, а факт: grep по телу функции — 0 совпадений), убран из сигнатуры и обоих call-сайтов.

- **Тесты:** полный набор **399/399** pytest, все зелёные. `npm run build`/vitest не требовались —
  правки этого раунда только backend (Python).

## 9. FiLNoiseControl — promoted (новая нода, не из исходного списка)

- **Статус:** promoted (добавлена и сразу промоутнута — написана с нуля с тестами,
  а не портирована из легаси-кода, поэтому не нуждалась в отдельной стадии "todo").
- **Файлы:** `nodes/node_noise_control.py`, `nodes2/nodes/noise_control.ts`,
  `common/sampling.py` (`_prepare_noise`/`_blend_noise`/`_sample_with_noise_control`),
  contract, locale `nsc_*`.
- **Происхождение:** запрошено пользователем по аналогии с efficiency-nodes'
  "Noise Control Script" — скрипт-нода, подключаемая в `script`-вход FiLKSampler
  (как и FiLHighResFix).
- **Сознательно урезано:** оригинальный `cfg_denoiser` (A1111-репликация от smZ)
  **не портирован** — он монтипатчит внутренности comfy'шного CFG-денойзера,
  ломается с ControlNet/GLIGEN и не обновлялся пару лет. Решение согласовано с
  пользователем явно (см. обсуждение перед реализацией).
- **Что перенесено:** `rng_source` (`cpu`/`gpu`, без legacy `nv`) и seed-вариация
  (`add_seed_noise`/`seed`/`weight`) — обе реализованы через публичный
  `comfy.sample`/`comfy.model_management` API, без патчинга внутренностей.
  `_sample_unified` при наличии `noise_control` вручную пересобирает
  `nodes.common_ksampler`'а логику (см. `nodes.py`), подставляя свой noise-тензор
  вместо генерируемого стоком; `apply_hiresfix` прокидывает тот же `noise_control`
  и в hires-проход (как в оригинале — один и тот же скрипт-набор применяется к
  обоим проходам).
- **Блендинг вариации:** `_blend_noise` использует sin/cos-поворот
  (`weight` → угол 0..90°), а не линейный lerp — сохраняет unit-variance при любом
  `weight`, тогда как lerp занижал бы амплитуду шума в середине диапазона и менял
  эффективную силу денойза.
- **UX:** нативные ComfyUI-виджеты (4 штуки — combo/bool/int/float), без кастомной
  Vue-панели, как у FiLKSampler.
- **Output-название:** выход назван `script` (совпадает с одноимённым входом
  FiLKSampler/FiLHighResFix) — сразу в едином стиле с фиксом из #6/#7.
- **Тесты:** `tests/test_noise_control.py` (схема, execute/merge script) +
  добавлено в `tests/test_sample_unified.py` (`_prepare_noise` cpu/gpu,
  `_blend_noise` крайние/средняя точки, диспетчеризация `sample_unified`) и
  `tests/test_hiresfix.py` (`noise_control` прокидывается в hires re-sample).
- **Живой смоук:** `/object_info` на `comfyui-test` подтвердил регистрацию и
  схему сокетов; реальный `/prompt` не прогнан по той же причине, что и #6/#7
  (нет совместимого чекпоинта/CLIP на инстансе).

## 10. FiLImageDecomposer — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_decomposer.py`, `nodes2/nodes/decomposer.ts` (нативные виджеты ComfyUI,
  своей Vue-панели нет — только стилизация узла), contract, locale.
- **Итог прохода:** раскладывает изображение/промпт на `subject`/`lighting`/`composition`/`style`/
  `full_prompt`; сделана None-resilience (пустой ответ провайдера больше не роняет ноду).
- **Тесты:** `tests/test_decomposer_and_mixer.py`.

## 11. FiLStyleMixer — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_style_mixer.py`, `components/nodes/StyleMixer.vue`,
  `components/widgets/FilStylePicker.vue`, `common/styles/*`, contract, locale.
- **Итог прохода:** смешивание стилей и референсов с весами + опциональный Vision-LLM fusion;
  тема активных плиток переведена на динамический `color-mix` (`b0afb6b`), поиск в style-picker
  локализован, за ним подчищены последствия в самой ноде (`163af37`).
- **Тесты:** `tests/test_decomposer_and_mixer.py`, `tests/test_multi_style.py`,
  `tests/test_style_contract.py`, `frontend/tests/components/styleMixer.test.ts`.

## 12. FiLColorWizard — promoted

- **Статус:** promoted.
- **Файлы:** `nodes/node_color_wizard.py`, `common/color_correction.py`,
  `components/nodes/ColorWizard.vue`, `nodes2/nodes/color_wizard.ts`, contract, locale `cw_*`.
- **Итог прохода:** авто-коррекция цвета (баланс белого, LAB-контраст, растяжка каналов,
  подбор по референсу, WB-пипетка) с защитой тонов кожи; логика лежит в `common/`, нода тонкая.
- **Тесты:** `tests/test_color_wizard.py`, `frontend/tests/components/colorWizard.test.ts`.

## 13. FiLSignalSwitch — promoted (новая нода, не из исходного списка)

- **Статус:** promoted (написана в параллельной сессии, коммит `a1d8ae4`).
- **Файлы:** `nodes/node_switch.py` (40 строк), `components/nodes/Switch.vue`,
  `nodes2/nodes/switch.ts`, contract, locale `tt_switch_*`.
- **Что делает:** `AnyType`-вход + булев `enable`; ON — проброс значения как есть, OFF — `None`.
  Задумана как глушилка ветки графа без перекоммутации проводов.
- **Тесты:** `tests/test_switch.py` (схема, pass-through на dict/str/int, блокировка на OFF).
- **Находка (закрыта):**
  - [x] В положении OFF в сокет уходил `None` любого типа — даунстрим-нода всё равно выполнялась и
    падала внутри себя (`'NoneType' object has no attribute ...`), т.е. ошибка называла постороннюю
    ноду, а не выключенный шлюз. → **исправлено:** OFF возвращает `ExecutionBlocker(None)`
    (`comfy_execution/graph_utils.py:140`) — штатный механизм ComfyUI: все потребители
    пропускаются, остальной граф считается. Молча: `execution_block_cb` (`execution.py:520`)
    шлёт `execution_error` только при непустом `message`, а глушение ветки — не ошибка.
    Неподключённый `input` (он optional) блокирует так же — иначе включённый, но не подключённый
    шлюз давал ровно тот же `None`.
  - Почему не `io.NodeOutput(block_execution=...)`: в V3-ветке `execution.py:389` блокер
    подставляется только при непустом сообщении, а `NodeOutput.result` пуст без args — блокер
    кладётся прямо в args (`io.NodeOutput(ExecutionBlocker(None))`), это тот же путь, что и у
    V1-нод (`execution.py:393`).
- **Тесты:** `tests/test_switch.py` 6/6 — блокировка на OFF, молчаливость (`message is None`),
  блокировка при пустом входе, и отдельный тест на то, что falsy-значения (`0`, `""`, `False`, `[]`)
  по-прежнему проходят как реальный сигнал.
- **Живой смоук:** прод перезапущен, реальная очередь на 8188. Граф
  `LoadImage → Switch → SaveImage(muted)` + контрольный `LoadImage → SaveImage(control)`:
  при `enable=True` сохранились оба файла; при `enable=False` — только контрольный,
  `status=success`, без `execution_error`. То есть ветка реально глушится, а граф досчитывается.

## 14. FiLDatasetForge — promoted (новая нода, добавлена после 1.0.0)

- **Статус:** promoted.
- **Задача:** собрать датасет для обучения LoRA за один прогон — привести батч к целевому
  разрешению, получить подпись на каждый кадр и разложить всё на диск в формате, который
  читает kohya_ss / sd-scripts.
- **Файлы:** `common/dataset/bucketing.py`, `common/dataset/captioning.py`,
  `common/dataset/writer.py`, `nodes/node_dataset.py` (тонкий: схема + оркестрация),
  contract `_DATASET_FORGE`, `nodes2/nodes/dataset.ts`, locale-ключи `ds_*`.
- **Решения по архитектуре:**
  - Апскейл внутри ноды не делается (решение пользователя): кадры меньше своего бакета
    записываются, но считаются в `upscaled_count` и попадают в предупреждение отчёта.
    Апскейлить заранее через 🔍 Upscaler Simple.
  - Обе раскладки (`kohya` | `flat`) — переключателем; `manifest.json` пишется всегда.
  - Бакеты kohya-совместимые: площадь ≈ `base²`, обе стороны кратны `bucket_step` (64).
    Вторая сторона округляется ВНИЗ, поэтому бакет никогда не больше целевой площади.
  - `pick_bucket` сравнивает аспекты в лог-пространстве — линейное `w/h` тянуло каждый
    ландшафтный исходник в самый широкий бакет.
- **Находки (закрыты):**
  - [x] `clean_output()` не снимает преамбулы вида «This image shows …» / «a photo of …»
    (в его списке только «The image shows» и «The picture shows»). В датасете это не
    косметика: «a photo of» во всех подписях учит медиум как часть концепта. →
    добавлен `_PREAMBLE_RE` в `common/dataset/captioning.py`, общий `clean_output`
    не трогали (на нём висят Scanner и post-conversion).
  - [x] Общий seed на весь батч отдавал бы подпись первого кадра всем остальным:
    `ModelClient.generate()` кэширует по `(system, user, image_hash, seed, temperature)`,
    а system/user у всех кадров идентичны. → `caption_batch` инкрементирует seed на кадр
    (при `-1` кэш и так выключен).
  - [x] `write_mode=overwrite` изначально просился как `rmtree(image_dir)`. → удаляются
    только пары изображение/подпись, которыми владеет нода; чужие файлы в папке остаются
    (тест `test_overwrite_removes_dataset_pairs_but_leaves_foreign_files_alone`).
  - [x] `dataset_name` уходит в путь на диске → allowlist `[A-Za-z0-9._-]` + отбрасывание
    ведущих точек, а не просто вырезание `..` (тесты на `../../etc/passwd`, `..`, `C:\...`).
- **Находки второго прохода (перепроверка кода, все закрыты):**
  - [x] Владение файлами определялось только по расширению, а в раскладке `flat` подписи
    лежат в папке пользователя → `overwrite` удалял чужой `readme.txt`. Ровно то, что
    докстринг `clear_dataset_files` обещал не делать. → владение требует ещё и числового
    стема `NNNNN` (`_OWNED_STEM`). `next_index` намеренно оставлен шире (префиксное
    совпадение): удаление не должно перебирать, нумерация — недобирать.
  - [x] Пустая подпись писалась пустым `.txt`. kohya подставляет имя папки-концепта только
    когда файла **нет**; пустой читается как пустая подпись, то есть `caption_mode=none`
    без триггер-слова давал молча необучаемый датасет. → пустая подпись не пишется, а при
    перенумеровании поверх старой пары её устаревший `.txt` удаляется.
  - [x] Холст превью брался равным тренировочному разрешению: 40 кадров на 1024² — это
    ~500 МБ float32 на выход, который нужен «глянуть на кропы». → `_PREVIEW_MAX_SIDE = 512`,
    файлы на диске сохраняют настоящий бакет.
  - [x] Панель: `Number(x) || fallback` (паттерн старых компонентов) превращал осознанный
    `seed = 0` в `-1`, то есть «пусть провайдер рандомит» — вопреки тултипу. → `Number.isFinite`.
  - [x] Ядро вешает на INT-виджет `seed` спутник `control_after_generate` со значением
    `"randomize"` (проверено живьём) — закреплённый seed перевыбирался после каждого запуска.
    У панели нет пилюли random/fixed (`-1` уже значит «провайдер сам»), → `pinSeedControl`
    жёстко ставит `"fixed"` в `onNodeCreated`/`onConfigure`.
  - [x] Превью пути показывало сырой ввод и врало (`my lora` → на диске `my_lora`). →
    `sanitizeName`/`sanitizeToken` в `DatasetForge.vue` повторяют бэкенд; сверено программно.
  - [x] `RESOLUTION_OPTIONS` собирался обычным `const` с вызовами `t()` на этапе setup, а
    локаль грузится асинхронно и `t()` читает реактивный объект → выпадашка разрешения
    навсегда застревала на английских фолбэках. → обёрнут в `computed`. Тот же дефект
    остался в `NeuroCleaner.vue:22-26` (чужой компонент, не трогал).
  - [x] Батч подписей нельзя было отменить: ComfyUI проверяет прерывание только **между**
    нодами, поэтому после Cancel узел продолжал слать платные запросы до конца батча. →
    `_raise_if_interrupted()` в колбэке прогресса. `InterruptProcessingException` наследует
    `BaseException`, поэтому широкий `except Exception` его не глотает — перехват не нужен.
  - Проверено и **не** является багом: `timeout=None` в `caption_image` штатно падает на
    таймаут провайдера (`models.py:262`), а не висит бесконечно.
- **Тесты:** `tests/test_dataset_bucketing.py` (9), `tests/test_dataset_writer.py` (25),
  `tests/test_dataset_captioning.py` (9), `tests/test_node_dataset.py` (18) — 61 всего.

- **Живой смоук:** реальная очередь на 8188 через `/prompt`, пять прогонов. Датасеты
  писались в `d:/AI/Outputs/datasets` (у пользователя переопределён output-каталог, не
  `ComfyUI/output`) и удалены после проверки.
  1. `dry_run` + `caption_mode=none`, 720x1280 → бакет 768x1344, кроп `[0,11,768,1355]`,
     `upscaled: true` (исходник меньше бакета) и предупреждение в отчёте. На диске после
     прогона **ничего** — каталог `datasets` даже не создался.
  2. Реальная запись, 2 кадра: раскладка `smoke_lora/img/10_ohwx bunny/`, оба PNG ровно
     768x1344, сайдкары `.txt` с `ohwx bunny`, `dataset.toml` с корректными `image_dir` /
     `num_repeats = 10` / `class_tokens`, `manifest.json` на месте.
  3. `caption_mode=natural` через `google / gemini-3.5-flash-lite`: подпись пришла с
     триггером впереди, `dont_caption = "her face"` соблюдён (лица в описании нет),
     описано только изменяемое — поза, одежда, фон, свет, стиль. Отчёт назвал источник
     `llm:google (gemini-3.5-flash-lite)`.
  4. `write_mode=overwrite` поверх п.2 с подложенными чужими файлами (`notes.txt`,
     `foreign_photo.png`, `foreign_photo.txt`): удалено ровно 4 своих файла, все три чужих
     целы — владение по «имя + числовой стем» работает как задумано.
  5. `layout=flat` + `image_format=jpg` (q92) + `caption_extension=.caption` +
     `crop_mode=entropy` + ручные `captions`: файлы в корне датасета без `img/` и без
     `dataset.toml` (он только для kohya), реальный JPEG, `caption_source=manual` — LLM
     не вызывался. При `base_resolution=768` кадр 1.78 ушёл в 1024x576, площадь ≈ 768².
- **Замечание по бакетингу (не баг):** один тензор `IMAGE` в ComfyUI хранит кадры
  одинакового размера, поэтому за один прогон все кадры попадают в один бакет — `ImageBatch`
  подгоняет второй кадр под первый. Разные бакеты в одном датасете набираются несколькими
  прогонами с `write_mode=append`, для чего этот режим и нужен.

## 15. FiLChannel — promoted (новая нода, добавлена после 1.1.0)

- **Статус:** promoted (в `RELEASE_NODES`). Запись в ledger добавлена постфактум: нода уже
  была зарегистрирована в гейте, но чек-лист и бэкенд-тесты записаны не были — этот пробел закрыт.
- **Задача:** передавать данные по графу без проводов. Что воткнуто во вход `value*`, становится
  именованным каналом; фронтенд переписывает граф непосредственно перед сборкой промпта, так что
  каждый подписанный (или авто-сматченный) вход получает значение напрямую от источника. К моменту,
  когда бэкенд видит промпт, каналы — уже обычные связи.
- **Файлы:** `nodes/node_channel.py` (маркерная нода, ~80 строк), contract,
  фронтенд-подсистема `nodes2/wireless/*` (15 модулей), `components/nodes/ChannelPanel.vue`,
  панель диагностики `FilWirelessDiagnostics.vue`, `nodes2/nodes/channel.ts`, locale `tt_channel_value`.
- **Решения по архитектуре:**
  - Нода **не имеет выходов намеренно**: от неё ничто не зависит, поэтому ComfyUI никогда не
    планирует её, и источник не вычисляется дважды. `execute()` оставлен только чтобы класс
    формально был нодой; на практике он не вызывается.
  - Входы растут по мере использования (`io.Autogrow`, префикс `value`, `min=1`, `max=32`) —
    одна нода несёт несколько каналов (model + VAE + CLIP) вместо трёх отдельных.
  - Канал именуется по типу данных (`MODEL`, `VAE`); чтобы задать имя самому, переименовывается
    слот (LiteGraph «Rename Slot» пишет label, который читает фронтенд). Виджета имени нет
    намеренно: при многих входах один виджет смог бы назвать лишь один из них.
  - `MAX_CHANNELS = 32` — ограничитель здравомыслия, не дизайна: ядро лимитирует шаблон 100
    именами, и каждое имя объявляется в схеме, используется оно или нет.
- **Находка (закрыта):**
  - [x] Не было бэкенд-поведенческих тестов вообще — только контрактный паритет
    (`tests/test_node_contracts.py`), wiring через `test_executor_contract.py` и фронтенд-тесты.
    → добавлен `tests/test_channel.py` (5 тестов), фиксирующий структурные инварианты:
    идентичность схемы, **ноль выходов** (это load-bearing: именно оно не даёт ComfyUI планировать
    ноду), единственный опциональный autogrow-вход `value` с границами `1..MAX_CHANNELS`,
    `MAX_CHANNELS == 32`, и безвредный no-op `execute()` (пустой `NodeOutput`, не падает,
    терпит вызов с подключёнными значениями).
- **Тесты:** `tests/test_channel.py` 5/5. Фронтенд: `frontend/tests/channelNode.test.ts`,
  `frontend/tests/wireless.test.ts`. Контрактный паритет и executor-wiring покрыты общими тестами.

## 16. FiLCinemaRig — promoted (новая нода, добавлена после 1.1.1)

- **Статус:** promoted (в `RELEASE_NODES`) — узел добавляется сразу с чек-листом и тестами.
- **Задача:** собирать кинематографический промпт по осям виртуального операторского цеха —
  тушка × объектив × фокусное × диафрагма × грейдинг. Style Mixer смешивает плоские
  стили-оверлеи; риг собирает кадр из ортогональных «железных» осей, которых в паке не было.
  Механика детерминированная (конкатенация, как Weighted Stack), опционально — LLM-полировка
  собранной строки в гладкую прозу через config провайдера.
- **Файлы:** `common/cinema_rig.py` (пресеты осей, обёртки film/digital, `assemble_rig()`),
  `nodes/node_cinema_rig.py`, контракт в `common/contracts/registry.py`, фронтенд
  `frontend/src/nodes2/nodes/cinema_rig.ts` + `components/nodes/CinemaRig.vue`,
  тесты `tests/test_cinema_rig.py`, локали `cr_*`.
- **Решения по архитектуре:**
  - Ось камеры несёт флаг `film`/`digital` и выбирает пару обёрток (префикс/суффикс):
    assembled-промпт всегда называет медиум, как того требует правило фото-библиотеки.
  - Режимы `Original Shot` (якорь медиума впереди, сцена сразу за ним в CLIP-видимом
    окне, железо и грейдинг закрывают) и `Reshoot` (лок идентичности референса,
    текст сцены не используется — её несёт изображение).
  - Пресеты написаны заново под конвенции пака (цепочки именных фраз, якорь захвата,
    без не-фото слов, без «пустой рамы»); структура осей вдохновлена внешним референсом,
    тексты — оригинальные.
  - LLM-полировка при любой ошибке молча откатывается на детерминированную сборку
    (прецедент Smart Fusion у миксера): риг уже полон, терять нечего.
- **Находка (закрыта):**
  - [x] Осям не нужны `style_engine`-guardrails: они описывают «как снято», а не сюжет, —
    тот же класс безопасности, что `⏱️ ЗАХВАТ`-техники. Проверено тестом, что ни одна
    ось не уезжает в анти-фотографическую категорию резолвера.
  - [x] Живой рендер (SDXL, bigLust) пришёл пустой улицей: сэндвич «железо-сцена-грейдинг»
    задвигал субъект за ~77-токенное окно CLIP-L, и модель его не увидела. Контроль тем же
    seed с коротким scene-first промптом вернул женщину в кадр. Порядок сборки исправлен:
    якорь медиума → сцена → железо+финиш; тест фиксирует, что сцена внутри CLIP-окна.
- **Тесты:** `tests/test_cinema_rig.py` — пресеты (якоря, не-фото слова, пустая рама,
  категории резолвера), сборка (обёртки по типу камеры, Reshoot-лок, тумблер грейдинга,
  pass-through сцены), LLM-полировка через мок `ModelClient`. Контрактный паритет,
  презентационный паритет и executor-wiring покрыты общими тестами.
