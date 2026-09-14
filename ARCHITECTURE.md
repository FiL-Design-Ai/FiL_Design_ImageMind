# Архитектура FiL Design ImageMind

## Обзор проекта
**FiL Design ImageMind** — пакет кастомных узлов для ComfyUI на базе современного **V3 Node API** (`io.ComfyNode`, декларативный `define_schema()`, асинхронный `execute()`).
Включает единую модульную систему ИИ-анализа изображений, режиссуры промптов, тайлового апскейла, циклического тестирования моделей и тонкой цветокоррекции с кастомным интерфейсом на Vue 3 + TypeScript.

---

## Структура директорий

```
FiL_Design_ImageMind/
├── common/                  # Ядро бэкенда и бизнес-логика
│   ├── contracts/           # Спецификации контрактов ComfyUI V3 для каждой ноды
│   │   └── nodes/           # Схемы входов, выходов и типов (scanner, tile_assembly, etc.)
│   ├── styles/              # Каталог библиотек стилей (396+ пресетов)
│   │   ├── photo.py         # Фотографические стили
│   │   ├── art.py           # Художественные стили
│   │   ├── nsfw_photo.py    # 18+ фотостили (включая хардкор-пресеты)
│   │   └── nsfw_art.py      # 18+ арт-стили
│   ├── data.py              # Таксономия агентов, фокусов, стилей и миграции легаси
│   ├── decensor.py          # Семантическая нормализация сленга и антицензурные дескрипторы
│   ├── tile_calc.py         # Алгоритмы нарезки и бесшовной сборки тайлов (блендинг, веса, цвет)
│   ├── models.py            # Клиенты LLM/Vision провайдеров (OpenAI, Anthropic, Gemini, Groq, etc.)
│   ├── model_capabilities.py# Матрица возможностей моделей (NSFW, vision, thinking)
│   ├── director_assist.py   # Помощник режиссёра и инъекции стилей/жизни
│   ├── localization.py      # Бэкенд-движок локализации
│   └── processing.py        # Обработка тензоров изображений, масок и цветовых пространств
├── nodes/                   # Точки входа ComfyUI узлов (V3 io.ComfyNode)
│   ├── node_scanner.py      # FiLOpticScanner (мультимодальное зрение, автоописание, тегирование)
│   ├── node_prompt_director.py # FiLPromptDirector (режиссура и трансформация промптов)
│   ├── node_tile_assembly.py# FiLTileAssembly (высокоточная сборка тайлов с блендингом)
│   ├── node_style_mixer.py  # FiLStyleMixer (смешивание и взвешивание стилей)
│   ├── node_krea2_diffusion.py # FiLKrea2TiledDiffusion (тайловый диффузионный апскейл)
│   └── ...                  # Дополнительные специализированные ноды (всего 24)
├── frontend/                # Vue 3 + TypeScript интерфейс узлов ComfyUI
│   ├── src/
│   │   ├── api/             # Сгенерированные контракты бэкенда (contracts.ts, contracts.json)
│   │   ├── components/      # Vue-компоненты панелей нод (TileAssemblyPanel, ScannerPanel, etc.)
│   │   ├── constants/       # Категории стилей, темы оформления, списки провайдеров
│   │   ├── nodes2/          # Модули расширений для холста ComfyUI
│   │   └── stores/          # Реактивное состояние Pinia
│   ├── scripts/             # Скрипты генерации контрактов и подсчёта sourceHash
│   ├── dist/                # Собранный бандл (fil_design_imagemind.js) и .source-hash
│   └── tests/               # Vitest модульные и компонентные тесты
├── data/
│   └── locales/             # Словари локализации (ru.json, en.json)
├── tests/                   # Набор тестов бэкенда Pytest (1750+ тестов)
│   ├── test_agent_taxonomy.py
│   ├── test_contract_generation.py
│   ├── test_documentation.py
│   ├── test_tile_assembly.py
│   └── ...
├── run_tests.bat            # Скрипт быстрого запуска тестов бэкенда
└── pyproject.toml / pytest.ini # Конфигурация сборки и тестирования
```

---

## Ключевые архитектурные принципы

1. **Single Source of Truth (SSOT)**:
   - Контракты узлов ComfyUI определяются декларативно в `common/contracts/`.
   - Фронтенд синхронизируется через `npm run gen:contracts`, что гарантирует полное совпадение параметров, дефолтов и допустимых значений.
2. **Изоляция и стабильность воркфлоу**:
   - Любое изменение ключей агентов или стилей защищено таблицами миграции (`LEGACY_AGENT_MIGRATION`).
   - Старые сохранённые воркфлоу открываются без потери настроек и без тихого сброса на дефолты.
3. **Строгая типизация и двухуровневая верификация**:
   - Бэкенд: строгая валидация типов Python/Pydantic, полный набор pytest (1750+ тестов), проверка ruff.
   - Фронтенд: TypeScript `vue-tsc --noEmit`, ESLint 10, Vitest (850+ тестов), sourceHash проверка целостности бандла.

