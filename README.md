# ⚡ FiL_Design_ImageMind

> **AI-powered ComfyUI nodes** for image analysis, prompt generation, and intelligent workflows

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-3776ab?style=flat-square&logo=python)](https://www.python.org/)
[![ComfyUI 0.3.60+](https://img.shields.io/badge/ComfyUI-0.3.60%2B-00cc00?style=flat-square)](https://github.com/comfyanonymous/ComfyUI)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[English](#english) · [Русский](#русский)

---

## English

### What is FiL_Design_ImageMind?

A modern custom node pack for **ComfyUI** built on the V3 API. Seamlessly integrate LLM models (Ollama, LM Studio, Groq, Google AI, OpenRouter, Cloudflare) for:

- 📸 **Image Analysis** — describe or analyze images with vision models
- 💬 **Prompt Generation** — expand text prompts intelligently
- 🔧 **Workflow Utilities** — VRAM cleanup, tiled upscale planning, colour correction
- 🎯 **Multiple Providers** — local or cloud-based, your choice

<!-- TODO: drop fresh screenshots into docs/images/ and reference them here, e.g.:
![Optic Scanner](docs/images/optic-scanner.png)
The previous screenshots were removed for the 1.0.0 rename — they showed the old FiL_LLM
branding and a "Prompt Chat" node that no longer exists in this node pack. -->

### Quick Start

1. **Install** via ComfyUI Manager (search "FiL_Design_ImageMind") or manually:
   ```bash
   cd ComfyUI/custom_nodes/
   git clone https://github.com/FiL-Design-Ai/FiL_Design_ImageMind.git
   pip install -r FiL_Design_ImageMind/requirements.txt
   ```

2. **Configure** → Settings → FiL_Design_ImageMind → add your API key or start Ollama locally

3. **Add nodes** → `Provider Loader` → `Optic Scanner` → connect image/text → Queue

### Available Nodes

| Node | Class ID | Purpose |
|------|----------|---------|
| **🔌 Provider Loader** | `FiLProviderLoader` | Choose provider, model, and generation parameters |
| **🕵️ Optic Scanner** | `FiLOpticScanner` | Analyze images or expand text with LLM |
| **👁️‍🗨️ Image Decomposer** | `FiLImageDecomposer` | Split an image or prompt into subject, lighting, composition, style |
| **🎛️ Style Mixer** | `FiLStyleMixer` | Blend visual styles and reference images with weighted influence |
| **⚡ KSampler** | `FiLKSampler` | Full sampler — every sampler/scheduler, passthrough, preview, HighRes-fix script |
| **🔬 HighRes Fix** | `FiLHighResFix` | Latent/pixel upscale + re-sample script for KSampler |
| **🎛️ Noise Control** | `FiLNoiseControl` | RNG source + seed-variation script for KSampler |
| **🔍 Upscaler Advanced** | `FiLUpscaleTileCalc` | Tile layout, overlap, and denoise planning for tiled upscale |
| **🔍 Upscaler Simple** | `FiLUpscaleSimple` | Same tiling panel, model upscale in, image + tiles out |
| **🧩 Tile Assembly** | `FiLTileAssembly` | Assemble processed image tiles back into full resolution |
| **🎨 Color Wizard** | `FiLColorWizard` | Auto colour correction — white balance, LAB contrast, channel stretch |
| **♻️ Seed** | `FiLSeed` | Fixed or randomized seed with reuse buttons |
| **🧹 Cleaner** | `FiLNeuroCleaner` | Selective VRAM, RAM, and cache cleanup |
| **🔀 Cyber Switch** | `FiLSignalSwitch` | Any-type pass-through gate — mute a branch without rewiring |

### Supported Providers

| Provider | Type | Setup |
|----------|------|-------|
| 🦙 **Ollama** | Local | Free, no API key needed |
| 🤖 **LM Studio** | Local | Free, no API key needed |
| ⚡ **Groq** | Cloud | API key required |
| 🔵 **Google AI** | Cloud | API key required |
| 🌐 **OpenRouter** | Cloud | API key required |
| ☁️ **Cloudflare** | Cloud | Account ID + API key |

### Documentation

- [Getting Started](docs/getting-started.md) — detailed setup guide
- [Architecture](docs/architecture.md) — how it works under the hood
- [Prompt Contract](docs/prompting.md) — effective prompting strategies
- [Workflows](docs/workflows/) — ready-to-use examples

### Troubleshooting

**Empty model list?** → Go to Provider settings, enter credentials, click "Refresh models"

**Vision error?** → Switch to a model that supports vision (e.g., claude-3.5-sonnet, gpt-4-vision)

**Auth error?** → Re-enter the API key in FiL_Design_ImageMind settings

**Stale frontend?** → Restart ComfyUI and hard-refresh the browser (Ctrl+Shift+R)

### Development

```bash
# Run backend tests
python -m pytest tests/ -q

# Frontend (from frontend/ directory)
npm ci
npm run build
npx vitest run
```

### Privacy & Security

- API keys stored locally in `data/auth.json` or environment variables
- Never logged or exposed in workflows
- All communication validated and encrypted per provider

---

## Русский

### Что такое FiL_Design_ImageMind?

Современный набор кастомных узлов для **ComfyUI** на V3 API. Интегрирует LLM-модели (Ollama, LM Studio, Groq, Google AI, OpenRouter, Cloudflare) для:

- 📸 **Анализа изображений** — опишите или проанализируйте изображение моделями зрения
- 💬 **Генерации промптов** — умное расширение текстовых подсказок
- 🔧 **Утилит рабочего процесса** — очистка VRAM, планирование тайлового апскейла, цветокоррекция
- 🎯 **Множества провайдеров** — локальные или облачные, ваш выбор

### Быстрый старт

1. **Установка** через ComfyUI Manager (поиск "FiL_Design_ImageMind") или вручную:
   ```bash
   cd ComfyUI/custom_nodes/
   git clone https://github.com/FiL-Design-Ai/FiL_Design_ImageMind.git
   pip install -r FiL_Design_ImageMind/requirements.txt
   ```

2. **Настройка** → Settings → FiL_Design_ImageMind → добавьте API ключ или запустите Ollama локально

3. **Добавьте узлы** → `Provider Loader` → `Optic Scanner` → подключите изображение/текст → Queue

### Доступные узлы

| Узел | Class ID | Назначение |
|------|----------|-----------|
| **🔌 Provider Loader** | `FiLProviderLoader` | Выбор провайдера, модели и параметров генерации |
| **🕵️ Optic Scanner** | `FiLOpticScanner` | Анализ изображений или расширение текста |
| **👁️‍🗨️ Image Decomposer** | `FiLImageDecomposer` | Разбор изображения или промпта на субъект, свет, композицию, стиль |
| **🎛️ Style Mixer** | `FiLStyleMixer` | Смешивание стилей и референсных изображений с весами влияния |
| **⚡ KSampler** | `FiLKSampler` | Полный сэмплер — все сэмплеры/планировщики, passthrough, превью, HighRes-скрипт |
| **🔬 HighRes Fix** | `FiLHighResFix` | Скрипт латент/пиксельного апскейла и ре-сэмплинга для KSampler |
| **🎛️ Noise Control** | `FiLNoiseControl` | Источник RNG + скрипт вариаций seed для KSampler |
| **🔍 Upscaler Advanced** | `FiLUpscaleTileCalc` | Планирование сетки тайлов, нахлёста и денойза для тайлового апскейла |
| **🔍 Upscaler Simple** | `FiLUpscaleSimple` | Та же панель тайлинга, на входе модель апскейла, на выходе картинка и тайлы |
| **🧩 Tile Assembly** | `FiLTileAssembly` | Сборка обработанных тайлов обратно в полноразмерное изображение |
| **🎨 Color Wizard** | `FiLColorWizard` | Авто-коррекция цвета — баланс белого, LAB-контраст, растяжка каналов |
| **♻️ Seed** | `FiLSeed` | Фиксированное или случайное значение seed |
| **🧹 Cleaner** | `FiLNeuroCleaner` | Выборочная очистка VRAM, RAM и кэша |
| **🔀 Cyber Switch** | `FiLSignalSwitch` | Пропускной шлюз любого типа — глушит ветку графа без перекоммутации |

### Поддерживаемые провайдеры

| Провайдер | Тип | Установка |
|-----------|-----|-----------|
| 🦙 **Ollama** | Локальный | Бесплатно, без API ключа |
| 🤖 **LM Studio** | Локальный | Бесплатно, без API ключа |
| ⚡ **Groq** | Облачный | Требуется API ключ |
| 🔵 **Google AI** | Облачный | Требуется API ключ |
| 🌐 **OpenRouter** | Облачный | Требуется API ключ |
| ☁️ **Cloudflare** | Облачный | ID аккаунта + API ключ |

### Документация

- [С чего начать](docs/README.ru.md) — подробное руководство установки
- [Архитектура](docs/architecture.md) — как это устроено
- [Контракт промптов](docs/prompting.md) — эффективные стратегии
- [Примеры](docs/workflows/) — готовые к использованию рабочие процессы

### Решение проблем

**Список моделей пуст?** → Перейдите в Settings → FiL_Design_ImageMind, введите ключ, нажмите "Refresh models"

**Ошибка зрения?** → Используйте модель с поддержкой видения (claude-3.5-sonnet, gpt-4-vision)

**Ошибка аутентификации?** → Переведите API ключ в Settings → FiL_Design_ImageMind

**Старый интерфейс?** → Перезагрузите ComfyUI и обновите браузер (Ctrl+Shift+R)

### Разработка

```bash
# Запуск тестов бэкенда
python -m pytest tests/ -q

# Фронтенд (из директории frontend/)
npm ci
npm run build
npx vitest run
```

### Приватность и безопасность

- API ключи хранятся локально в `data/auth.json` или переменных окружения
- Никогда не логируются или не выходят в рабочих процессах
- Вся коммуникация валидируется и зашифрована по стандартам провайдера

---

## License

MIT License — see [LICENSE](LICENSE) for details

---

**Built with ⚡ for ComfyUI**
