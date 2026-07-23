# ⚡ Eta Parameter Guide / Руководство по параметру Eta
*(FiL KSampler & ClownsharKSampler / RES4LYF)*

---

## 🇷🇺 Русская версия / Russian Version

### 1. Что такое Eta (η)?

**Eta (η)** — это параметр, определяющий **масштаб подмешивания случайного шума** (stochastic noise injection) во время денойзинга на каждом шаге сэмплирования.

В процессах диффузии существует два основных математических режима:
- **ODE (Ordinary Differential Equation)** — полностью детерминированный путь без подмешивания нового шума во время шагов.
- **SDE (Stochastic Differential Equation)** — вероятностный путь, где на каждом шаге часть шума убирается, но одновременно подмешивается свежий случайный шум.

Параметр **Eta** регулирует баланс между этими двумя режимами в предковых (**Ancestral**) и **SDE** сэмплерах:

$$\text{Noise Added per Step} = \eta \times \text{Standard Noise Factor}$$

> [!NOTE]
> Для классических ODE сэмплеров (`euler`, `dpmpp_2m`, `heun`) параметр `eta` **не имеет эффекта**, так как они по своей природе не подмешивают случайный шум на промежуточных шагах.

---

### 2. Поддерживаемые сэмплеры

Параметр `eta` работает **только** со следующими типами сэмплеров:

| Категория | Сэмплеры |
| :--- | :--- |
| **Ancestral Samplers** | `euler_ancestral`, `dpm_2_ancestral`, `dpmpp_2s_ancestral`, `res_multistep_ancestral` |
| **SDE Samplers** | `dpmpp_sde`, `dpmpp_2m_sde`, `dpmpp_3m_sde`, `dpmpp_2m_sde_heun`, `exp_heun_2_x0_sde` |
| **Special & Custom** | `seeds_2`, `seeds_3`, `rk_beta` (RES4LYF) |

---

### 3. Значения Eta и их влияние

| Значение `eta` | Режим | Эффект |
| :---: | :--- | :--- |
| **`0.0`** | **Полный ODE** | Отключает случайный шум на шагах. Сэмплер `euler_a` с `eta=0` ведет себя почти как `euler`. Выход становится детерминированным. |
| **`0.1 – 0.5`** | **Низкий шум (Low SDE)** | Сохраняет структуру и детали, снижает микро-размытие и зернистость. Идеально для HiRes-Fix и четких деталей. |
| **`1.0`** | **Стандарт (Default)** | Стандартное математическое поведение SDE/Ancestral сэмплеров. |
| **`1.1 – 2.0+`** | **Высокий шум (High SDE)** | Увеличивает изменчивость, микро-текстуру и контраст шума. При слишком высоких значениях может приводить к пережженным артефактам. |

---

### 4. Практические сценарии использования

#### 🎨 1. Стабилизация композиции (Eta = 0.0)
* **Зачем:** В `euler_ancestral` и `dpmpp_2s_ancestral` шум на каждом шаге может "уводить" детали лица или мелкую анатомию.
* **Решение:** Поставьте `eta = 0.0`. Композиция и мелкие элементы станут зафиксированными и предсказуемыми.

#### 🔍 2. Идеальный HiRes-Fix / Upscaling (Eta = 0.2 - 0.4)
* **Зачем:** При повторном сэмплировании (втором проходе HiRes-fix) стандартный `eta = 1.0` в SDE сэмплерах может замыливать мелкие детали или добавлять избыточный шум.
* **Решение:** Для второго прохода используйте `eta = 0.2` - `0.3`. Это даст высокую чёткость и сохранит файн-тюн детализацию первого прохода.

#### ⚡ 3. Усиление детальности и текстуры (Eta = 1.2 - 1.5)
* **Зачем:** Картинка кажется слипшейся или не хватает микро-рельефа (поры кожи, ткани, кибернетические детали).
* **Решение:** Поднимите `eta` до `1.2 - 1.4` на сэмплерах `dpmpp_2m_sde`. Это добавит резких текстурных вариаций.

---

### 5. Шпаргалка по выбору Eta

```
[0.0] ------------------- [0.3] ------------------- [1.0] ------------------- [1.5+]
 ODE Mode             HiRes Fix Sharp           Default SDE             High Texture / Chaos
 (No extra noise)    (Controlled noise)     (Standard balance)        (Heavy noise variation)
```

---
---

## 🇬🇧 English Version / Руководство на английском

### 1. What is Eta (η)?

**Eta (η)** is a scaling factor that controls **how much stochastic noise is injected** back into the latent representation during each denoising step of the sampling process.

Diffusion sampling processes fall into two main mathematical models:
- **ODE (Ordinary Differential Equation)**: Completely deterministic paths where no new noise is introduced during steps.
- **SDE (Stochastic Differential Equation)**: Probabilistic paths where noise is removed and fresh random noise is re-injected at each iteration.

The **Eta** parameter scales this re-injected noise in **Ancestral** and **SDE** samplers:

$$\text{Noise Added per Step} = \eta \times \text{Standard Noise Factor}$$

> [!NOTE]
> For standard ODE samplers (like `euler`, `dpmpp_2m`, or `heun`), `eta` has **no effect** because these algorithms do not inject step-wise stochastic noise by design.

---

### 2. Supported Samplers

The `eta` parameter applies **only** to the following sampler types:

| Category | Samplers |
| :--- | :--- |
| **Ancestral Samplers** | `euler_ancestral`, `dpm_2_ancestral`, `dpmpp_2s_ancestral`, `res_multistep_ancestral` |
| **SDE Samplers** | `dpmpp_sde`, `dpmpp_2m_sde`, `dpmpp_3m_sde`, `dpmpp_2m_sde_heun`, `exp_heun_2_x0_sde` |
| **Special & Custom** | `seeds_2`, `seeds_3`, `rk_beta` (RES4LYF) |

---

### 3. How Eta Values Affect Sampling

| `eta` Value | Mode | Visual & Mathematical Effect |
| :---: | :--- | :--- |
| **`0.0`** | **Pure ODE** | Disables mid-step noise injection. Ancestral samplers like `euler_a` behave similarly to `euler`. Output becomes deterministic. |
| **`0.1 – 0.5`** | **Low SDE** | Retains sharp structural features, minimizes micro-blur and grain. Excellent for HiRes-Fix and upscale passes. |
| **`1.0`** | **Default** | Standard theoretical SDE/Ancestral behavior. |
| **`1.1 – 2.0+`** | **High SDE** | Increases randomness, micro-textures, and noise contrast. Excessively high values may cause grain artifacts or over-saturation. |

---

### 4. Practical Use Cases

#### 🎨 1. Composition Locking (Eta = 0.0)
* **Goal:** Avoid random composition shifts or facial drift across different runs in ancestral samplers.
* **Setting:** Set `eta = 0.0`. Ancestral noise drift is disabled, locking structural consistency.

#### 🔍 2. Crisp HiRes-Fix / Upscaling (Eta = 0.2 - 0.4)
* **Goal:** Prevent SDE samplers from washing out fine line art or introducing noise blur during upscale passes.
* **Setting:** Use `eta = 0.2 - 0.3` on the second pass for sharp, detailed upscales.

#### ⚡ 3. Texture Enhancement (Eta = 1.2 - 1.5)
* **Goal:** Add extra micro-details (skin pores, fabric weaves, metallic surfaces) to flat generations.
* **Setting:** Increase `eta` to `1.2 - 1.4` with `dpmpp_2m_sde`.

---

### 5. Quick Reference Cheatsheet

```
[0.0] ------------------- [0.3] ------------------- [1.0] ------------------- [1.5+]
 ODE Mode             HiRes Fix Sharp           Default SDE             High Texture / Chaos
 (No extra noise)    (Controlled noise)     (Standard balance)        (Heavy noise variation)
```
