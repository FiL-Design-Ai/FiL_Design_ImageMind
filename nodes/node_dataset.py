"""📚 LoRA Dataset Forge — batch → bucketed images + captions on disk.

Thin schema wrapper. All the real work lives in `common/dataset/`:
bucketing math, caption prompts/calls, and the on-disk layout.
"""

import hashlib
from typing import Any

import numpy as np
import torch
from comfy_api.latest import io

from ..common.base import FiLError
from ..common.brand import CATEGORY_ROOT
from ..common.config import is_model_vision_capable
from ..common.data import LANGUAGES
from ..common.dataset import bucketing, captioning, writer
from ..common.io_types import FilDict, FilProviderConfig
from ..common.localization import t as _t
from ..common.processing import ImageProcessor, comfy_image_to_pil, is_valid_model_name, normalize_model_name
from ..common.progress import FilProgress
from ..common.provider_resilience import sanitize_sensitive_data
from ..common.provider_runtime import safe_provider_error, unload_local_model

_processor = ImageProcessor()
_model_client = None


def _client():
    """Lazily built `ModelClient` — importing it costs nothing until captioning runs."""
    global _model_client
    if _model_client is None:
        from ..common.models import ModelClient

        _model_client = ModelClient()
    return _model_client


def _empty_image() -> torch.Tensor:
    return torch.zeros((1, 64, 64, 3), dtype=torch.float32)


# Preview frames are capped well below the training resolution: this output
# exists to eyeball the crops, and a 40-image set at 1024² would hand ComfyUI
# ~500 MB of float32 for that glance. 512 stays useful for spotting a bad crop.
_PREVIEW_MAX_SIDE = 512


def _preview_tensor(images: list, size: int) -> torch.Tensor:
    """Letterbox every bucketed frame onto one square canvas so they can stack."""
    if not images:
        return _empty_image()
    side = max(64, min(int(size), _PREVIEW_MAX_SIDE))
    frames = [
        np.asarray(bucketing.pad_to_canvas(image, side), dtype=np.float32) / 255.0
        for image in images
    ]
    return torch.from_numpy(np.stack(frames, axis=0))


def _raise_if_interrupted() -> None:
    """Make Cancel actually stop a long caption batch.

    ComfyUI only tests for interrupts *between* nodes, so without this a
    40-image run keeps firing (billable) provider calls long after the user
    hit Cancel — this is the batch-heaviest node in the pack, so that wait is
    minutes, not seconds. The raised `InterruptProcessingException` derives
    from BaseException, so it travels past `execute()`'s broad `except
    Exception` on its own and stays a cancel rather than a provider error.
    Import stays lazy/defensive, matching `node_cleaner._get_model_management`,
    so the module still imports outside a ComfyUI process (tests, tooling).
    """
    try:
        import comfy.model_management as mm
    except Exception:
        return
    mm.throw_exception_if_processing_interrupted()


def _error(message: str, code: str = "DATASET_ERROR") -> io.NodeOutput:
    return io.NodeOutput(_empty_image(), f"❌ {message}", "", {"status": "error", "message": message, "error_code": code})


class FiLDatasetForge(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLDatasetForge",
            display_name="📚 LoRA Dataset Forge",
            category=f"{CATEGORY_ROOT}/Dataset",
            description=(
                "📚 FiL LoRA Dataset Forge — turns an image batch into a training-ready dataset: "
                "aspect-ratio buckets at the chosen resolution, one LLM caption per image, and a "
                "kohya_ss/sd-scripts (or flat) folder written to disk with a manifest."
            ),
            is_output_node=True,
            inputs=[
                io.Image.Input("image", tooltip=_t("ds_image", "Images to turn into a dataset. The whole batch is processed, one file per frame.")),
                FilProviderConfig.Input("config", optional=True,
                                        tooltip=_t("ds_config", "Provider Loader config. Required for LLM captioning — leave unconnected when captions come from the captions input or caption_mode is 'none'.")),
                io.String.Input("captions", default="", multiline=True, optional=True,
                                tooltip=_t("ds_captions", "Manual captions, one per image, separated by a line containing only '---'. Accepts Optic Scanner output as-is. When filled, no LLM call is made.")),
                io.String.Input("dataset_name", default="my_lora", tooltip=_t("ds_name", "Dataset folder name under ComfyUI/output/datasets. Sanitized to a safe path segment.")),
                io.String.Input("trigger_word", default="", tooltip=_t("ds_trigger", "Unique token that activates the LoRA, prepended to every caption (e.g. 'ohwx'). Leave empty for a style LoRA.")),
                io.String.Input("class_token", default="", tooltip=_t("ds_class", "Class the subject belongs to (e.g. 'woman', 'car'). Follows the trigger word in captions and in the kohya folder name.")),
                io.Combo.Input("base_resolution", options=[str(r) for r in bucketing.BASE_RESOLUTIONS], default="1024",
                               tooltip=_t("ds_resolution", "Training resolution. Buckets are built around this area — 1024 for SDXL/Flux, 512-768 for SD 1.5.")),
                io.Combo.Input("layout", options=list(writer.LAYOUTS), default="kohya",
                               tooltip=_t("ds_layout", "kohya: <name>/img/<repeats>_<trigger> <class>/ plus dataset.toml. flat: images and captions directly in <name>/.")),
                io.Int.Input("repeats", default=10, min=1, max=1000, step=1,
                             tooltip=_t("ds_repeats", "Repeats per image per epoch — encoded in the kohya folder name and dataset.toml. Fewer images means more repeats.")),
                io.Combo.Input("caption_mode", options=list(captioning.CAPTION_MODES), default="natural",
                               tooltip=_t("ds_caption_mode", "natural: prose for Flux/SDXL. tags: comma tags for SD 1.5/Pony. hybrid: short comma phrases. none: trigger word only, no LLM call.")),
                io.Combo.Input("crop_mode", options=list(bucketing.CROP_MODES), default="center",
                               tooltip=_t("ds_crop_mode", "How the frame is cropped into its bucket. entropy keeps the most detailed region instead of the middle.")),
                io.Boolean.Input("dry_run", default=False, label_on="Dry run", label_off="Write",
                                 tooltip=_t("ds_dry_run", "Compute buckets, captions and file names but write nothing. Read the report to check the plan first.")),
                io.Combo.Input("write_mode", options=list(writer.WRITE_MODES), default="append", advanced=True,
                               tooltip=_t("ds_write_mode", "append: keep existing files and continue numbering. overwrite: delete this node's image/caption pairs in the folder first (other files are left alone).")),
                io.Int.Input("caption_max_words", default=60, min=4, max=400, step=1, advanced=True,
                             tooltip=_t("ds_caption_words", "Hard word limit per caption. Captions longer than this are truncated.")),
                io.Combo.Input("caption_language", options=LANGUAGES, default="en", advanced=True,
                               tooltip=_t("ds_caption_lang", "Caption language. Trainers expect English unless the base model was trained otherwise.")),
                io.String.Input("dont_caption", default="", multiline=True, optional=True, advanced=True,
                                tooltip=_t("ds_dont_caption", "Invariants the captions must never mention (e.g. 'her face, red hair'). These belong to the trigger word — describing them stops the LoRA from learning them.")),
                io.String.Input("caption_instruction", default="", multiline=True, optional=True, advanced=True,
                                tooltip=_t("ds_caption_instruction", "Extra instruction appended to every caption request.")),
                io.Int.Input("bucket_step", default=64, min=8, max=256, step=8, advanced=True,
                             tooltip=_t("ds_bucket_step", "Bucket side divisor. 64 is the kohya default and fits SD/SDXL/Flux latents.")),
                io.Combo.Input("caption_extension", options=list(writer.CAPTION_EXTENSIONS), default=".txt", advanced=True,
                               tooltip=_t("ds_caption_ext", "Extension of the caption sidecar files. kohya defaults to .txt.")),
                io.Combo.Input("image_format", options=list(writer.IMAGE_FORMATS), default="png", advanced=True,
                               tooltip=_t("ds_image_format", "png keeps the crop lossless; jpg saves disk space on large sets.")),
                io.Int.Input("jpg_quality", default=95, min=50, max=100, step=1, advanced=True,
                             tooltip=_t("ds_jpg_quality", "JPEG quality when image_format is jpg. Below ~90 the artifacts start training too.")),
                io.Int.Input("seed", default=-1, min=-1, max=999999999999, advanced=True,
                             tooltip=_t("ds_seed", "Provider-side caption seed. -1 lets the provider pick one; a fixed value makes captions reproducible.")),
            ],
            outputs=[
                io.Image.Output(display_name="preview", tooltip="Bucketed frames letterboxed onto a square canvas so the batch can be previewed. The files on disk keep their real bucket size."),
                io.String.Output(display_name="report", tooltip="Human-readable summary: buckets, captions, warnings, target path."),
                io.String.Output(display_name="dataset_path", tooltip="Absolute path of the dataset folder that was written."),
                FilDict.Output(display_name="manifest", tooltip="Full manifest dict — per-image bucket, crop, caption and hash."),
            ],
            search_aliases=["lora", "dataset", "training", "caption", "bucket", "kohya"],
            # Captioning reports progress per image, which needs the node's own
            # id. It has to be declared to be there at all.
            hidden=[io.Hidden.unique_id],
        )

    @classmethod
    def validate_inputs(cls, config=None, **_kwargs):
        if config is None:
            return True
        if not isinstance(config, dict):
            return "Config must be a dict from Provider Loader."
        if not is_valid_model_name(config.get("model", "")):
            return "Invalid or placeholder model in config. Select a valid model in Provider Loader."
        return True

    @classmethod
    def fingerprint_inputs(cls, image=None, config=None, captions="", **kwargs) -> Any:
        image_key: Any = None
        if image is not None:
            try:
                digest = hashlib.md5(usedforsecurity=False)
                for frame in range(image.shape[0]):
                    digest.update(image[frame].flatten()[:256].cpu().numpy().tobytes())
                image_key = (tuple(image.shape), digest.hexdigest())
            except Exception:
                image_key = id(image)
        widgets = tuple(sorted((key, str(value)) for key, value in kwargs.items() if key != "unique_id"))
        return hash((str(config), captions, widgets, image_key))

    @classmethod
    def execute(cls, image=None, config=None, captions="", dataset_name="my_lora",
                trigger_word="", class_token="", base_resolution="1024", layout="kohya",
                repeats=10, caption_mode="natural", crop_mode="center", dry_run=False,
                write_mode="append", caption_max_words=60, caption_language="en",
                dont_caption="", caption_instruction="", bucket_step=64,
                caption_extension=".txt", image_format="png", jpg_quality=95, seed=-1,
                **kwargs) -> io.NodeOutput:
        if image is None or getattr(image, "shape", (0,))[0] == 0:
            return _error("подключи изображения — датасет строится из батча.", "NO_IMAGE")

        try:
            base = int(base_resolution)
        except (TypeError, ValueError):
            base = 1024

        frames = [comfy_image_to_pil(image[i:i + 1]) for i in range(image.shape[0])]
        buckets = bucketing.generate_buckets(base, step=int(bucket_step))

        cropped, crop_meta = [], []
        for frame in frames:
            bucket = bucketing.pick_bucket(frame.width, frame.height, buckets)
            fitted, meta = bucketing.fit_to_bucket(frame, bucket, crop_mode)
            cropped.append(fitted)
            crop_meta.append(meta)

        manual = captioning.split_manual_captions(captions, len(frames))
        has_manual = any(part for part in manual)

        if has_manual:
            caption_source, raw_captions = "manual", manual
        elif caption_mode == "none":
            caption_source, raw_captions = "trigger_only", [""] * len(frames)
        else:
            error = cls._caption_preflight(config)
            if error is not None:
                return error
            try:
                raw_captions = cls._caption_all(
                    cropped, config,
                    mode=caption_mode, language=caption_language,
                    max_words=int(caption_max_words), class_token=class_token,
                    dont_caption=dont_caption, extra_instruction=caption_instruction,
                    # Hidden inputs never arrive as execute() arguments on V3
                    # nodes — the executor fills `cls.hidden` on the class
                    # clone it runs, so that is where the node id lives.
                    seed=int(seed), unique_id=cls.hidden.unique_id,
                )
            except FiLError as exc:
                return _error(sanitize_sensitive_data(exc.message), exc.code)
            except Exception as exc:
                return _error(safe_provider_error(exc), "UNKNOWN_ERROR")
            caption_source = f"llm:{config.get('provider', '')}"

        final_captions = [
            captioning.apply_trigger(caption, trigger_word, class_token)
            for caption in raw_captions
        ]

        dataset_dir, image_dir = writer.resolve_dirs(
            dataset_name, layout=layout, repeats=int(repeats),
            trigger_word=trigger_word, class_token=class_token,
        )

        removed: list[str] = []
        if write_mode == "overwrite":
            removed = (
                writer.existing_dataset_files(image_dir, caption_extension)
                if dry_run
                else writer.clear_dataset_files(image_dir, caption_extension)
            )
            removed = [getattr(item, "name", item) for item in removed]
        start_index = 1 if write_mode == "overwrite" else writer.next_index(image_dir)

        items = [
            writer.DatasetItem(image=img, caption=caption, bucket=img.size, meta=meta)
            for img, caption, meta in zip(cropped, final_captions, crop_meta)
        ]
        records = writer.write_dataset(
            items, image_dir,
            caption_extension=caption_extension, image_format=image_format,
            jpg_quality=int(jpg_quality), start_index=start_index, dry_run=dry_run,
        )

        # `append` keeps earlier runs in the folder, so the manifest has to
        # describe the whole dataset, not just this batch.
        previous = (
            []
            if write_mode == "overwrite"
            else writer.load_previous_records(dataset_dir, image_dir, {r["file"] for r in records})
        )
        manifest = writer.build_manifest(
            previous + records, dataset_dir=dataset_dir, image_dir=image_dir, layout=layout,
            base_resolution=base, buckets=buckets, repeats=int(repeats),
            trigger_word=trigger_word, class_token=class_token,
            caption_source=caption_source,
            provider=(config or {}).get("provider", ""), model=(config or {}).get("model", ""),
        )
        manifest["dry_run"] = bool(dry_run)
        if removed:
            manifest["removed_files"] = removed

        if not dry_run:
            toml_text = ""
            if layout == "kohya":
                toml_text = writer.build_dataset_toml(
                    image_dir, resolution=base, repeats=int(repeats),
                    caption_extension=caption_extension,
                    class_tokens=" ".join(
                        part for part in (writer.sanitize_token(trigger_word), writer.sanitize_token(class_token)) if part
                    ),
                )
            manifest["sidecars"] = writer.write_sidecars(dataset_dir, manifest, toml_text)

        report = cls._build_report(manifest, records, dry_run=dry_run, removed=removed, added=len(records))
        return io.NodeOutput(_preview_tensor(cropped, base), report, dataset_dir.as_posix(), manifest)

    # ── internals ──────────────────────────────────────────────────────────

    @classmethod
    def _caption_preflight(cls, config) -> io.NodeOutput | None:
        if not isinstance(config, dict) or not config.get("provider"):
            return _error("для каптионинга подключи 🔌 Provider Loader (или заполни captions / выбери caption_mode = none).", "NO_CONFIG")
        model = normalize_model_name(config.get("model", ""))
        if not is_valid_model_name(model):
            return _error("в Provider Loader не выбрана действующая модель.", "INVALID_MODEL")
        if not is_model_vision_capable(config.get("provider", ""), model):
            return _error(f"модель '{model}' не поддерживает анализ изображений.", "VISION_NOT_AVAILABLE")
        return None

    @classmethod
    def _caption_all(cls, images, config, *, mode, language, max_words, class_token,
                     dont_caption, extra_instruction, seed, unique_id) -> list[str]:
        with _processor.with_max_side(config.get("max_image_side", 1024)) as processor:
            images_b64 = [processor.to_base64(image) for image in images]

        raw_max_tokens = config.get("max_tokens")
        max_tokens = None if raw_max_tokens in (0, None) else raw_max_tokens

        # The V3 backend (common.progress) carries the frame the caption LLM
        # is looking at right now to the UI alongside the bar; on hosts old
        # enough to only have the legacy ProgressBar the preview is dropped.
        progress = FilProgress(len(images_b64), unique_id)

        def on_progress(index: int, total: int) -> None:
            _raise_if_interrupted()
            progress.update(index, preview=images[index])

        provider = config.get("provider", "ollama")
        model = normalize_model_name(config.get("model", ""))
        captions = captioning.caption_batch(
            _client(), images_b64,
            provider=provider,
            model=model,
            on_progress=on_progress,
            mode=mode, language=language, max_words=max_words,
            class_token=class_token, dont_caption=dont_caption,
            extra_instruction=extra_instruction,
            temperature=config.get("temperature", 0.4),
            seed=seed, max_tokens=max_tokens,
            rate_limit_ms=config.get("rate_limit_ms", 100),
        )
        # Provider Loader's unload switch: the batch above is every LLM call
        # captioning makes, so a local model may leave memory once it ends.
        if bool(config.get("unload_llm", False)):
            unload_local_model(provider, model)
        return captions

    @classmethod
    def _build_report(cls, manifest: dict, records: list[dict], *, dry_run: bool,
                      removed: list[str], added: int) -> str:
        histogram = manifest["bucket_histogram"]
        total = manifest["image_count"]
        written = f"{added}" if added == total else f"{added} (всего в датасете: {total})"
        lines = [
            ("🧪 DRY RUN — на диск ничего не записано" if dry_run else "✅ Датасет записан"),
            f"📁 {manifest['image_dir']}",
            f"🖼 Кадров: {written} · разрешение {manifest['base_resolution']} · раскладка {manifest['layout']}",
            "📐 Бакеты: " + ", ".join(f"{size}×{count}" for size, count in sorted(histogram.items())),
            f"✍️ Подписи: {manifest['caption_source']}"
            + (f" ({manifest['model']})" if manifest.get("model") else ""),
        ]
        if manifest["layout"] == "kohya":
            lines.append(f"🔁 Повторы: {manifest['repeats']} → шагов за эпоху: {manifest['repeats'] * manifest['image_count']}")
        if removed:
            lines.append(f"🧹 {'Будет удалено' if dry_run else 'Удалено'} старых файлов: {len(removed)}")

        upscaled = manifest["upscaled_count"]
        if upscaled:
            lines.append(f"⚠️ Растянуто из меньшего исходника: {upscaled} — апскейльни их заранее через 🔍 Upscaler Simple")
        empty = sum(1 for record in records if not record["caption"].strip())
        if empty:
            lines.append(f"⚠️ Без подписи: {empty}")
        if manifest["image_count"] < 10:
            lines.append("⚠️ Меньше 10 кадров — для устойчивой LoRA обычно нужно 15-30")

        if records:
            lines.append("")
            lines.append("— пример —")
            first = records[0]
            lines.append(f"{first['file']}: {first['caption'] or '(пусто)'}")
        return "\n".join(lines)
