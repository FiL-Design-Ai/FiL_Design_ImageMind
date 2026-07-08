# FiL_LLM

[English](../README.md) · [Быстрый старт](getting-started.md) · [Архитектура](architecture.md) · [Авторизация](auth.md)

FiL_LLM 2.0 — компактный набор узлов ComfyUI для преобразования изображений и текстовых идей в готовые prompts, а также для полезных операций с workflow. Новая сборка содержит шесть публичных узлов. Старые workflow из версии с девятью узлами автоматически не мигрируются.

## Первый запуск

1. После установки или обновления перезапусти ComfyUI.
2. Открой `Settings → FiL_LLM → Провайдеры и API-ключи`.
3. Настрой облачный API key или запусти Ollama/LM Studio.
4. Добавь `FiL Provider Loader` и выбери provider/model.
5. Подключи его выход `config` к `FiL Optic Scanner`.

Ключи остаются на backend и не сохраняются в workflow.

## Узлы

| Узел | Назначение |
|---|---|
| `FiLProviderLoader` | Выбор провайдера, модели и параметров запуска. |
| `FiLOpticScanner` | Анализ изображения или разворачивание текстовой идеи в prompt. |
| `FiLSeed` | Фиксированный или случайный seed. |
| `FiLNeuroCleaner` | Выборочная очистка моделей, VRAM, RAM и cache. |
| `FiLBeforeAfterCompare` | Preview до/после и необязательное изменение размера выходов. |
| `FiLUpscaleTileCalc` | Расчёт тайлов, сетки, denoise и latent-размеров. |

Все узлы находятся в категориях `FiL_LLM/...`. Команда `FiL_LLM: справка` в контекстном меню показывает краткое описание.

## Примеры workflow

- [Image to prompt](workflows/fil-image-to-prompt.json): `Load Image + FiL Provider Loader → FiL Optic Scanner`.
- [Text prompt studio](workflows/fil-text-prompt-studio.json): та же LLM-цепочка без изображения.

После загрузки примера выбери доступные provider и model. Примеры не содержат ключей, аккаунтов, абсолютных путей или платных моделей.

## Частые проблемы

- Список моделей пуст: настрой провайдера и нажми `Обновить модели`.
- Vision отклонён: выбери модель с поддержкой изображений.
- Ошибка авторизации: замени API key в настройках FiL_LLM.
- Старый frontend: перезапусти ComfyUI и сделай hard refresh.
- Ошибка запуска: выполни `python -m pytest tests -q` и `python tools/preflight_check.py`.

## Конфиденциальность

API-ключи хранятся локально в `data/auth.json` или переменных окружения. Они не должны попадать в ответы API, выходы узлов, логи, тесты и примеры workflow.
