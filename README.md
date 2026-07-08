# ⚡ FiL_LLM

> **AI-powered ComfyUI nodes** for image analysis, prompt generation, and intelligent workflows

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-3776ab?style=flat-square&logo=python)](https://www.python.org/)
[![ComfyUI 0.3.60+](https://img.shields.io/badge/ComfyUI-0.3.60%2B-00cc00?style=flat-square)](https://github.com/comfyanonymous/ComfyUI)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[English](#english) · [Русский](#русский)

---

## English

### What is FiL_LLM?

A modern custom node pack for **ComfyUI** built on the V3 API. Seamlessly integrate LLM models (Ollama, LM Studio, Groq, Google AI, OpenRouter, Cloudflare) for:

- 📸 **Image Analysis** — describe or analyze images with vision models
- 💬 **Prompt Generation** — expand text prompts intelligently
- 🔧 **Workflow Utilities** — VRAM cleanup, image comparison, upscale planning
- 🎯 **Multiple Providers** — local or cloud-based, your choice

### Quick Start

1. **Install** via ComfyUI Manager (search "FiL_LLM") or manually:
   ```bash
   cd ComfyUI/custom_nodes/
   git clone https://github.com/FiL-Design-Ai/FiL_LLM.git
   pip install -r FiL_LLM/requirements.txt
   ```

2. **Configure** → Settings → FiL_LLM → add your API key or start Ollama locally

3. **Add nodes** → `FiL Provider Loader` → `FiL Optic Scanner` → connect image/text → Queue

### Available Nodes

| Node | Purpose |
|------|---------|
| **FiL Provider Loader** | Choose provider, model, and generation parameters |
| **FiL Optic Scanner** | Analyze images or expand text with LLM |
| **FiL Seed** | Fixed or randomized seed with copy/reuse |
| **FiL Neuro Cleaner** | Selective VRAM, RAM, and cache cleanup |
| **FiL Before/After Compare** | Side-by-side image preview with swap |
| **FiL Upscale Tile Calc** | Tile layout and denoise planning |
| **FiL Help** | Quick project info and links |

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

**Auth error?** → Re-enter the API key in FiL_LLM settings

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

### Что такое FiL_LLM?

Современный набор кастомных узлов для **ComfyUI** на V3 API. Интегрирует LLM-модели (Ollama, LM Studio, Groq, Google AI, OpenRouter, Cloudflare) для:

- 📸 **Анализа изображений** — опишите или проанализируйте изображение моделями зрения
- 💬 **Генерации промптов** — умное расширение текстовых подсказок
- 🔧 **Утилит рабочего процесса** — очистка VRAM, сравнение изображений, планирование апскейла
- 🎯 **Множества провайдеров** — локальные или облачные, ваш выбор

### Быстрый старт

1. **Установка** через ComfyUI Manager (поиск "FiL_LLM") или вручную:
   ```bash
   cd ComfyUI/custom_nodes/
   git clone https://github.com/FiL-Design-Ai/FiL_LLM.git
   pip install -r FiL_LLM/requirements.txt
   ```

2. **Настройка** → Settings → FiL_LLM → добавьте API ключ или запустите Ollama локально

3. **Добавьте узлы** → `FiL Provider Loader` → `FiL Optic Scanner` → подключите изображение/текст → Queue

### Доступные узлы

| Узел | Назначение |
|------|-----------|
| **FiL Provider Loader** | Выбор провайдера, модели и параметров генерации |
| **FiL Optic Scanner** | Анализ изображений или расширение текста |
| **FiL Seed** | Фиксированное или случайное значение seed |
| **FiL Neuro Cleaner** | Выборочная очистка VRAM, RAM и кэша |
| **FiL Before/After Compare** | Сравнение изображений бок-о-бок |
| **FiL Upscale Tile Calc** | Планирование тайлов и денойза |
| **FiL Help** | Информация о проекте и ссылки |

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

**Список моделей пуст?** → Перейдите в Settings → FiL_LLM, введите ключ, нажмите "Refresh models"

**Ошибка зрения?** → Используйте модель с поддержкой видения (claude-3.5-sonnet, gpt-4-vision)

**Ошибка аутентификации?** → Переведите API ключ в Settings → FiL_LLM

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
