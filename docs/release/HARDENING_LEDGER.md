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
| 3 | FiLNeuroCleaner | todo | VRAM/RAM, 8 широких except |
| 4 | FiLBeforeAfterCompare | todo | вьювер, 7 except |
| 5 | FiLProviderLoader | todo | фиксы max_tokens, тихого refresh_models |
| 6 | FiLKSampler | promoted | сэмплинг |
| 7 | FiLHighResFix | promoted | script для KSampler (пара с #6) |
| 8 | FiLOpticScanner | todo | ядро; passthrough temperature/config |
| 9 | FiLNoiseControl | promoted | новая нода (не из исходного списка), см. секцию ниже |

## Общий backlog (не привязан к одной ноде)

- [ ] `common/processing.py:88` — баг приоритета тернарника (`h if batch else ...`), fallback недостижим. → **изменить**. (до Scanner)
- [ ] `common/node_registry.py` — мёртвый модуль, нигде не импортируется. → **выкинуть**.
- [ ] `useShortcuts.ts:167` `__shortcutHooks` — мёртвый экспорт. → **выкинуть**.
- [ ] `styles/brand.ts:180` — комментарий про несуществующий `installTheme.ts`. → **изменить** (коммент).
- [ ] `scripts/gen_contracts.mjs` — мёртвый `?? "null"` после `JSON.stringify`. → **выкинуть**.
- [ ] WIP `scrollGuard` (2 новых файла + правки) — довести и закоммитить или откатить.
- [ ] `NeuroCleaner.vue:97` `background: rgba(246,138,69,0.12)` и `FilStylePicker.vue:204`
  `rgba(246,138,69,0.14)` — активное состояние захардкожено в RGB старого оранжевого акцента,
  не подстраивается ни под одну тему (default/cyberpunk/fallout/travelmate). Найдено при добавлении
  темы Travelmate. → **изменить**: завести `--fil-accent-rgb` или `color-mix(in srgb, var(--fil-accent) 12%, transparent)`
  (паттерн уже используется в `FilChipGrid.vue:85`). Отложено на пер-нодный проход (NeuroCleaner/Scanner).

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
  - [ ] Контракт `FiLSeed` в `registry.py:111-117` объявляет входы `mode` (segmented) и
    `copy_to_clipboard` (bool), которых НЕТ в реальной `node_seed.py` (только `seed`); «copy»-кнопки
    в `Seed.vue` тоже нет. Контракт не потребляется UI (только OpticScanner читает контракты),
    поэтому не блокер. → **изменить**: привести контракт FiLSeed к реальной схеме.
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

## 3. FiLNeuroCleaner

- **Статус:** todo
- **Файлы:** `nodes/node_cleaner.py`, `components/nodes/NeuroCleaner.vue`, `nodes2/nodes/cleaner.ts`, contract, locale `nc_*`.
- **Аудит:** разметить 8 `except` — оправданные best-effort vs маскирующие реальные ошибки.
- **Находки:**

## 4. FiLBeforeAfterCompare

- **Статус:** todo
- **Файлы:** `nodes/node_compare.py`, `components/nodes/BeforeAfterCompare.vue`, `nodes2/nodes/compare.ts`, `nodes2/compareEngine.ts`, contract, locale `cmp_*`.
- **Аудит:** path-traversal guard уже покрыт `test_api_security.py`.
- **Находки:**

## 5. FiLProviderLoader

- **Статус:** todo
- **Файлы:** `nodes/node_provider.py`, `components/nodes/ProviderLoader.vue`, `nodes2/nodes/provider.ts`, `common/models.py`, `common/provider_*`, contract, locale `prov_*`.
- **Находки:**
  - [ ] `max_tokens` не пишется в `build_payload` ни одной стратегии → **доработать или выкинуть**.
  - [ ] `GoogleStrategy.build_payload` теряет `seed` и `response_format` → **доработать**.
  - [ ] `refresh_models` глушит ошибки fetch без обратной связи → **изменить** (toast/лог).
  - [ ] `models.py:135-162` fall-through к `str(data)` маскирует parse-фейл → **изменить**.

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

## 8. FiLOpticScanner

- **Статус:** todo
- **Файлы:** `nodes/node_scanner.py`, `components/nodes/OpticScanner.vue`, `nodes2/nodes/scanner.ts`, `common/logic.py`/`data.py`/`models.py`/`style_engine/`, contract, locale `scn_*`.
- **Находки:**
  - [ ] `execute` игнорит `config["temperature"]` (хардкод 0.7), а также `max_tokens/rate_limit_ms/seed` из конфига → **изменить**.
  - [ ] import-time синглтоны (5 шт) + `get_visible_agent_keys()` → оценить, оставлять ли.

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
