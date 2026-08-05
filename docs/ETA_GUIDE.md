# ⚡ Eta Parameter Guide / Руководство по параметру Eta
*(FiL KSampler + ancestral/SDE samplers, incl. RES4LYF)*

---

## 🇷🇺 Русская версия / Russian Version

### 1. Что такое Eta (η)?

**Eta (η)** — это параметр, определяющий **масштаб подмешивания случайного шума** (stochastic noise injection) во время денойзинга на каждом шаге сэмплирования.

В процессах диффузии существует два основных математических режима:
- **ODE (Ordinary Differential Equation)** — полностью детерминированный путь без подмешивания нового шума во время шагов.
- **SDE (Stochastic Differential Equation)** — вероятностный путь, где на каждом шаге часть шума убирается, но одновременно подмешивается свежий случайный шум.

Параметр **Eta** регулирует баланс между этими двумя режимами в предковых (**Ancestral**) и **SDE** сэмплерах. В ноде ⚡ KSampler это FLOAT-виджет: дефолт `1.0`, диапазон `0.0–100.0`, шаг `0.01` (в advanced-секции панели).

> [!NOTE]
> Для классических ODE сэмплеров (`euler`, `heun`, `dpmpp_2m`, `lms`, `uni_pc`…) параметр `eta` **не имеет эффекта** — они по своей природе не подмешивают шум на промежуточных шагах. FiL KSampler таким сэмплерам eta просто не передаёт, а виджет в панели сереет.

---

### 2. Как это работает (механика шага)

Каждый шаг ancestral/SDE сэмплера разбивает спуск по сигме на две части — детерминированную (`sigma_down`) и стохастическую (`sigma_up`). Функция `get_ancestral_step` из `comfy/k_diffusion/sampling.py`:

```python
sigma_up   = min(sigma_to, eta * sqrt(sigma_to² · (sigma_from² − sigma_to²) / sigma_from²))
sigma_down = sqrt(sigma_to² − sigma_up²)

x = x + d · dt + noise · s_noise · sigma_up   # обновление латента на шаге
```

- **`eta = 0`** → `sigma_up = 0`: шум не добавляется вовсе, траектория становится чисто детерминированной (ODE).
- **`eta = 1`** → стандартная DDPM-подобная стохастика (дефолт k_diffusion и ноды).
- **`eta > 1`** → `sigma_up` растёт, но **зажат сверху** `sigma_to` (тот самый `min` в формуле): полезная часть спуска `sigma_down` при этом уменьшается. Эффект насыщается, а на экстремальных значениях шаг практически перестаёт денойзить.
- **`s_noise`** масштабирует вкатываемый шум независимо от eta (произведение в формуле шага).

Важно про воспроизводимость: вкатываемый шум генерится **сидированным** генератором, поэтому одна и та же пара seed + eta всегда даёт одинаковый результат. Eta меняет траекторию, но не ломает детерминизм в рамках одного сида.

---

### 3. Поддерживаемые сэмплеры

Параметр `eta` читают только стохастические сэмплеры. Актуальный список (allowlist `_ETA_SAMPLERS` в `common/sampling.py`, сверяется drift-тестами с установленным ComfyUI):

| Категория | Сэмплеры |
| :--- | :--- |
| **Ancestral** | `euler_ancestral`, `euler_ancestral_cfg_pp`, `dpm_2_ancestral`, `dpmpp_2s_ancestral`, `dpmpp_2s_ancestral_cfg_pp`, `res_multistep_ancestral`, `res_multistep_ancestral_cfg_pp` |
| **SDE** | `dpmpp_sde`, `dpmpp_2m_sde`, `dpmpp_2m_sde_heun`, `dpmpp_3m_sde` (все — также в `_gpu` вариантах), `exp_heun_2_x0_sde`, `dpm_adaptive` |
| **Special** | `seeds_2`, `seeds_3` |
| **RES4LYF** | `rk_beta` (собственный дефолт RES4LYF — **eta = 0.5**) и другие RES4LYF SDE-сэмплеры, обнаруживаются по сигнатуре в рантайме |

Как определяется поддержка:

1. Быстрый allowlist `_ETA_SAMPLERS` для стоковых сэмплеров — зафиксирован drift-тестами в `tests/test_sample_unified.py` против реальных сигнатур установленного ComfyUI.
2. Fallback через `inspect.signature` для кастомных паков (RES4LYF и др.): если у зарегистрированной функции сэмплера есть именованный параметр `eta` — она его читает.

Задокументированные грабли (см. комментарии в `common/sampling.py`):
- `er_sde`, `sa_solver`, `sa_solver_pece` — стохастические, но читают `s_noise`/`tau_func` вместо `eta`, поэтому в списке их **нет**.
- `dpm_fast` — у k_diffusion-функции `eta` в сигнатуре есть, но зарегистрированная обёртка выбрасывает `extra_options` целиком; его в списке тоже **нет**.

---

### 4. Значения Eta и их влияние

| Значение `eta` | Режим | Эффект |
| :---: | :--- | :--- |
| **`0.0`** | **Полный ODE** | Шум на шагах отключён. `euler_ancestral` с `eta=0` ведёт себя почти как `euler`. Траектория полностью детерминированная. |
| **`0.1 – 0.5`** | **Низкая стохастика** | Сохраняет структуру и детали, снижает микро-размытие и зернистость. Хорошо для второго прохода HiRes-Fix. Для `rk_beta` это родной режим: дефолт RES4LYF — `0.5`. |
| **`1.0`** | **Стандарт (Default)** | Стандартное математическое поведение SDE/Ancestral сэмплеров. Дефолт виджета. |
| **`1.1 – 2.0+`** | **Высокая стохастика** | Больше изменчивости и микро-текстуры. Эффект насыщается из-за клампа `sigma_up ≤ sigma_to`; на экстремальных значениях `sigma_down` стремится к нулю и шаг деградирует. |

---

### 5. Практические сценарии использования

#### 🎨 1. Стабилизация композиции (Eta = 0.0)
* **Зачем:** В `euler_ancestral` и `dpmpp_2s_ancestral` шум на каждом шаге может «уводить» детали лица или мелкую анатомию.
* **Решение:** Поставьте `eta = 0.0`. Композиция и мелкие элементы станут зафиксированными и предсказуемыми.

#### 🔍 2. Идеальный HiRes-Fix / Upscaling (Eta = 0.2 – 0.4)
* **Зачем:** При повторном сэмплировании (втором проходе HiRes-fix) стандартный `eta = 1.0` в SDE сэмплерах может замыливать мелкие детали или добавлять избыточный шум.
* **Решение:** Для второго прохода используйте `eta = 0.2 – 0.4`. Это даст высокую чёткость и сохранит детализацию первого прохода.

#### ⚡ 3. Усиление детальности и текстуры (Eta = 1.2 – 1.5)
* **Зачем:** Картинка кажется слипшейся или не хватает микро-рельефа (поры кожи, ткани, кибернетические детали).
* **Решение:** Поднимите `eta` до `1.2 – 1.4` на сэмплерах `dpmpp_2m_sde`. Это добавит резких текстурных вариаций. Выше ~2 поднимать смысла нет — эффект упирается в кламп.

#### 🦈 4. RES4LYF `rk_beta` (Eta ≈ 0.5)
* **Зачем:** RK-сэмплеры RES4LYF спроектированы под свою SDE-стохастику; их родной дефолт — `0.5`, а не `1.0`.
* **Решение:** Начните с `eta = 0.5` и крутите от него. Учтите: виджет FiL KSampler всегда переопределяет внутренний дефолт сэмплера своим значением.

---

### 6. Как FiL KSampler передаёт eta

- Eta попадает в `extra_options` сэмплера **только** если сэмплер её читает (`_sampler_accepts_eta`). Для всех остальных значений параметр молча не отправляется — передача `eta` детерминированному сэмплеру убила бы генерацию `TypeError` внутри k_diffusion, нода это предотвращает.
- Панель KSampler получает список поддерживающих сэмплеров от бэкенда (`sampler_option_support()` → `server_routes.py`) и **гасит виджет Eta серым** для сэмплеров, которые его игнорируют.
- Виджет можно безопасно держать на дефолте `1.0`: на детерминированных сэмплерах он ни на что не влияет, на стохастических — даёт стандартное поведение.

---

### 7. Шпаргалка по выбору Eta

```
[0.0] ------------------- [0.3] ------------------- [1.0] ------------------- [1.5+]
 ODE Mode             HiRes Fix Sharp           Default SDE             High Texture / Saturation
 (No extra noise)    (Controlled noise)     (Standard balance)       (Clamped extra noise)
```

---
---

## 🇬🇧 English Version / Руководство на английском

### 1. What is Eta (η)?

**Eta (η)** is a scaling factor that controls **how much stochastic noise is injected** back into the latent representation during each denoising step of the sampling process.

Diffusion sampling processes fall into two main mathematical models:
- **ODE (Ordinary Differential Equation)**: Completely deterministic paths where no new noise is introduced during steps.
- **SDE (Stochastic Differential Equation)**: Probabilistic paths where noise is removed and fresh random noise is re-injected at each iteration.

The **Eta** parameter balances these two modes in **Ancestral** and **SDE** samplers. In the ⚡ KSampler node it is a FLOAT widget: default `1.0`, range `0.0–100.0`, step `0.01` (in the panel's advanced section).

> [!NOTE]
> For standard ODE samplers (`euler`, `heun`, `dpmpp_2m`, `lms`, `uni_pc`…), `eta` has **no effect** — these algorithms do not inject step-wise stochastic noise by design. FiL KSampler does not send eta to such samplers at all, and the panel grays the widget out for them.

---

### 2. How It Works (Step Mechanics)

Each ancestral/SDE sampler step splits the sigma descent into a deterministic part (`sigma_down`) and a stochastic part (`sigma_up`). From `get_ancestral_step` in `comfy/k_diffusion/sampling.py`:

```python
sigma_up   = min(sigma_to, eta * sqrt(sigma_to² · (sigma_from² − sigma_to²) / sigma_from²))
sigma_down = sqrt(sigma_to² − sigma_up²)

x = x + d · dt + noise · s_noise · sigma_up   # latent update per step
```

- **`eta = 0`** → `sigma_up = 0`: no noise is added at all, the trajectory becomes purely deterministic (ODE).
- **`eta = 1`** → standard DDPM-like stochasticity (the k_diffusion and node default).
- **`eta > 1`** → `sigma_up` grows but is **clamped from above** by `sigma_to` (the `min` in the formula): the useful descent part `sigma_down` shrinks accordingly. The effect saturates, and at extreme values a step barely denoises anymore.
- **`s_noise`** scales the injected noise independently of eta (a separate multiplier in the step update).

Reproducibility note: the injected noise comes from a **seeded** generator, so the same seed + eta pair always reproduces the same result. Eta changes the trajectory but does not break seed determinism within a run.

---

### 3. Supported Samplers

Only stochastic samplers read `eta`. Current list (the `_ETA_SAMPLERS` allowlist in `common/sampling.py`, drift-checked against the installed ComfyUI):

| Category | Samplers |
| :--- | :--- |
| **Ancestral** | `euler_ancestral`, `euler_ancestral_cfg_pp`, `dpm_2_ancestral`, `dpmpp_2s_ancestral`, `dpmpp_2s_ancestral_cfg_pp`, `res_multistep_ancestral`, `res_multistep_ancestral_cfg_pp` |
| **SDE** | `dpmpp_sde`, `dpmpp_2m_sde`, `dpmpp_2m_sde_heun`, `dpmpp_3m_sde` (all also in `_gpu` variants), `exp_heun_2_x0_sde`, `dpm_adaptive` |
| **Special** | `seeds_2`, `seeds_3` |
| **RES4LYF** | `rk_beta` (RES4LYF's own default is **eta = 0.5**) and other RES4LYF SDE samplers, detected by signature at runtime |

How support is determined:

1. A fast `_ETA_SAMPLERS` allowlist for the stock samplers — pinned by drift tests in `tests/test_sample_unified.py` against the real signatures of the installed ComfyUI.
2. An `inspect.signature` fallback for custom packs (RES4LYF etc.): if the registered sampler function has a named `eta` parameter, it reads it.

Documented traps (see comments in `common/sampling.py`):
- `er_sde`, `sa_solver`, `sa_solver_pece` — stochastic, but read `s_noise`/`tau_func` instead of `eta`, so they are intentionally **excluded**.
- `dpm_fast` — its k_diffusion function has `eta` in the signature, but the registered wrapper drops `extra_options` entirely; it is **excluded** too.

---

### 4. How Eta Values Affect Sampling

| `eta` Value | Mode | Visual & Mathematical Effect |
| :---: | :--- | :--- |
| **`0.0`** | **Pure ODE** | Mid-step noise injection disabled. `euler_ancestral` at `eta=0` behaves similarly to `euler`. Fully deterministic trajectory. |
| **`0.1 – 0.5`** | **Low stochasticity** | Retains sharp structure, minimizes micro-blur and grain. Good for HiRes-Fix second passes. This is `rk_beta`'s home turf: RES4LYF's own default is `0.5`. |
| **`1.0`** | **Default** | Standard theoretical SDE/Ancestral behavior. Widget default. |
| **`1.1 – 2.0+`** | **High stochasticity** | More variability and micro-texture. The effect saturates because of the `sigma_up ≤ sigma_to` clamp; at extreme values `sigma_down` approaches zero and the step degrades. |

---

### 5. Practical Use Cases

#### 🎨 1. Composition Locking (Eta = 0.0)
* **Goal:** Avoid random composition shifts or facial drift across different runs in ancestral samplers.
* **Setting:** Set `eta = 0.0`. Ancestral noise drift is disabled, locking structural consistency.

#### 🔍 2. Crisp HiRes-Fix / Upscaling (Eta = 0.2 – 0.4)
* **Goal:** Prevent SDE samplers from washing out fine line art or introducing noise blur during upscale passes.
* **Setting:** Use `eta = 0.2 – 0.4` on the second pass for sharp, detailed upscales.

#### ⚡ 3. Texture Enhancement (Eta = 1.2 – 1.5)
* **Goal:** Add extra micro-details (skin pores, fabric weaves, metallic surfaces) to flat generations.
* **Setting:** Increase `eta` to `1.2 – 1.4` with `dpmpp_2m_sde`. Going beyond ~2 buys nothing — the clamp saturates the effect.

#### 🦈 4. RES4LYF `rk_beta` (Eta ≈ 0.5)
* **Goal:** RES4LYF's RK samplers are designed around their own SDE stochasticity; their native default is `0.5`, not `1.0`.
* **Setting:** Start from `eta = 0.5` and tune from there. Note: the FiL KSampler widget always overrides the sampler's internal default with its own value.

---

### 6. How FiL KSampler Routes eta

- Eta is placed into the sampler's `extra_options` **only** if the sampler reads it (`_sampler_accepts_eta`). Otherwise the parameter is silently not sent — passing `eta` to a deterministic sampler would kill the generation with a `TypeError` inside k_diffusion, and the node prevents that.
- The KSampler panel fetches the list of supporting samplers from the backend (`sampler_option_support()` → `server_routes.py`) and **grays the Eta widget out** for samplers that ignore it.
- The widget is safe to leave at the `1.0` default: it has no effect on deterministic samplers and gives standard behavior on stochastic ones.

---

### 7. Quick Reference Cheatsheet

```
[0.0] ------------------- [0.3] ------------------- [1.0] ------------------- [1.5+]
 ODE Mode             HiRes Fix Sharp           Default SDE             High Texture / Saturation
 (No extra noise)    (Controlled noise)     (Standard balance)       (Clamped extra noise)
```
