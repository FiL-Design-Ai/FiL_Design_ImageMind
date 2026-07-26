# FiL_Design_ImageMind

[Полная документация (RU)](../README.md#русский) · [English](../README.md#english) ·
[Быстрый старт](getting-started.md) · [Архитектура](architecture.md) · [Авторизация](auth.md)

Краткая справка. Подробные таблицы параметров всех узлов, настройки, маршруты и решение проблем —
в [русском разделе README](../README.md#русский).

FiL_Design_ImageMind 1.0.0 — набор узлов ComfyUI (V3 API) для превращения изображений и текстовых
идей в готовые промпты, тайлового апскейла, сэмплинга и цветокоррекции. В релизе **14 узлов**.

## Первый запуск

1. После установки или обновления перезапусти ComfyUI.
2. Открой `Settings → FiL_Design_ImageMind → Providers`.
3. Настрой облачный API-ключ или запусти Ollama/LM Studio.
4. Добавь `🔌 Provider Loader` и выбери провайдера и модель.
5. Подключи его выход `config` к `🕵️ Optic Scanner`.

Ключи остаются на бэкенде и не сохраняются в workflow.

## Узлы

| Узел | Class ID | Категория | Назначение |
|---|---|---|---|
| 🔌 Provider Loader | `FiLProviderLoader` | LLM | Выбор провайдера, модели и параметров генерации. |
| 🕵️ Optic Scanner | `FiLOpticScanner` | LLM | Анализ изображения или разворачивание текстовой идеи в промпт. |
| 👁️‍🗨️ Image Decomposer | `FiLImageDecomposer` | Analysis | Разбор изображения/промпта на субъект, свет, композицию, стиль. |
| 🎛️ Style Mixer | `FiLStyleMixer` | Styling | Смешивание стилей и референсов с весами влияния. |
| ⚡ KSampler | `FiLKSampler` | Sampling | Полный сэмплер с passthrough-выходами, превью и скриптами. |
| 🔬 HighRes Fix | `FiLHighResFix` | Sampling | Скрипт латент/пиксельного апскейла и ре-сэмплинга для KSampler. |
| 🎛️ Noise Control | `FiLNoiseControl` | Sampling | Источник RNG и вариация seed как скрипт для KSampler. |
| 🔍 Upscaler Advanced | `FiLUpscaleTileCalc` | Image | Расчёт сетки тайлов, нахлёста, denoise и латент-размеров. |
| 🔍 Upscaler Simple | `FiLUpscaleSimple` | Image | Та же панель тайлинга: модель на входе, картинка и тайлы на выходе. |
| 🧩 Tile Assembly | `FiLTileAssembly` | Image | Сборка обработанных тайлов обратно с растушёвкой по нахлёсту. |
| 🎨 Color Wizard | `FiLColorWizard` | Image | Авто-цветокоррекция: баланс белого, LAB-контраст, растяжка каналов. |
| ♻️ Seed | `FiLSeed` | Values | Фиксированный или случайный seed с кнопками повтора. |
| 🧹 Cleaner | `FiLNeuroCleaner` | Tools | Выборочная очистка VRAM и выгрузка моделей. |
| 🔀 Cyber Switch | `FiLSignalSwitch` | Tools | Пропускной шлюз любого типа: глушит ветку графа без перекоммутации. |

Все узлы лежат в категориях `🎨 FiL Design/...`.

## Примеры workflow

- [Image to prompt](workflows/fil-image-to-prompt.json): `Load Image + Provider Loader → Optic Scanner`.
- [Text prompt studio](workflows/fil-text-prompt-studio.json): та же LLM-цепочка без изображения.

После загрузки примера выбери доступные provider и model. Примеры не содержат ключей, аккаунтов,
абсолютных путей или платных моделей.

## Частые проблемы

- Список моделей пуст: настрой провайдера и нажми `Обновить модели`.
- Vision отклонён: выбери модель с поддержкой изображений.
- Ошибка авторизации: замени API-ключ в настройках FiL_Design_ImageMind.
- Старый фронтенд: перезапусти ComfyUI и сделай hard refresh (`Ctrl+Shift+R`).
- Правка бэкенда не подхватилась: Python требует полного перезапуска ComfyUI.
- Ошибка запуска: выполни `python -m pytest tests -q` и `python tools/preflight_check.py`.

## Конфиденциальность

API-ключи хранятся локально в `data/auth.json`, переменных окружения или `API.env` — оба файла в
`.gitignore`. Они не попадают в ответы API, выходы узлов, логи, тесты и примеры workflow.
