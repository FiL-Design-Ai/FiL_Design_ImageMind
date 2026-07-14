from comfy_api.latest import io

from ..common.brand import CATEGORY_ROOT
from ..common.localization import t

try:
    from nodes import PreviewImage as _PreviewImageV1
    _preview_saver = _PreviewImageV1()
except Exception:
    _preview_saver = None


class FiLBeforeAfterCompare(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="FiLBeforeAfterCompare",
            display_name="🔄 Compare",
            category=f"{CATEGORY_ROOT}/Image/Compare",
            description="🖼️ FiL Before/After Compare — side-by-side image comparison with optional swap and resize controls.",
            inputs=[
                io.Image.Input("before", tooltip=t("cmp_before", "Image shown on the left side.")),
                io.Image.Input("after", tooltip=t("cmp_after", "Image shown on the right side.")),
                io.Boolean.Input("swap", default=False, label_on="Swap ON", label_off="Swap OFF",
                                  tooltip=t("cmp_swap", "Swap which image is shown as before/after.")),
                io.Combo.Input("resize_mode", options=["Off", "Preview only", "Preview + output"], default="Off",
                               tooltip=t("cmp_resize_mode", "Off keeps images untouched. Preview modes downscale for a lighter preview and, optionally, output.")),
                io.Int.Input("max_resolution", default=4096, min=256, max=8192, step=64,
                             tooltip=t("cmp_max_resolution", "Maximum width or height used when resizing is enabled.")),
            ],
            outputs=[
                io.Image.Output(display_name="before", tooltip="Left/before image."),
                io.Image.Output(display_name="after", tooltip="Right/after image."),
            ],
            search_aliases=["compare", "side by side", "before after", "diff", "comparison"],
            hidden=[io.Hidden.prompt, io.Hidden.extra_pnginfo],
            # The node's primary purpose is the in-node before/after viewer,
            # populated from the `ui` payload emitted by execute(). Without this
            # flag ComfyUI prunes a terminal Compare node (image outputs left
            # unconnected), so execute() never runs and the viewer stays on its
            # placeholder. The before/after outputs remain available for chaining.
            is_output_node=True,
        )

    @staticmethod
    def _first_frame(images):
        try:
            return images[:1]
        except Exception:
            return images

    @staticmethod
    def _resize(images, max_resolution):
        if images is None:
            return None
        try:
            limit = max(1, int(max_resolution))
        except Exception:
            return images
        try:
            shape = images.shape
            if len(shape) < 4:
                return images
            height = int(shape[1])
            width = int(shape[2])
            longest = max(width, height)
            if longest <= limit or width <= 0 or height <= 0:
                return images
            scale = limit / longest
            nw = max(1, round(width * scale))
            nh = max(1, round(height * scale))
            import torch.nn.functional as F
            resized = F.interpolate(
                images.movedim(-1, 1),
                size=(nh, nw),
                mode="bilinear",
                align_corners=False,
            )
            return resized.movedim(1, -1).clamp(0, 1)
        except Exception:
            return images

    @classmethod
    def execute(cls, before, after, swap=False, resize_mode="Off", max_resolution=4096,
                prompt=None, extra_pnginfo=None) -> io.NodeOutput:
        if swap:
            before, after = after, before
        normalized_resize = resize_mode or "Off"
        try:
            normalized_max = max(1, int(max_resolution))
        except Exception:
            normalized_max = 4096

        preview_before = before
        preview_after = after
        if normalized_resize in {"Preview only", "Preview + output"}:
            preview_before = cls._resize(before, normalized_max)
            preview_after = cls._resize(after, normalized_max)

        result_before = preview_before if normalized_resize == "Preview + output" else before
        result_after = preview_after if normalized_resize == "Preview + output" else after

        ui_data: dict = {"a_images": [], "b_images": []}
        if _preview_saver is not None and preview_before is not None:
            saver = _preview_saver
            try:
                ui_data["a_images"] = saver.save_images(cls._first_frame(preview_before), "fil.compare.before", prompt, extra_pnginfo)["ui"]["images"]
            except Exception:
                pass
        if _preview_saver is not None and preview_after is not None:
            saver = _preview_saver
            try:
                ui_data["b_images"] = saver.save_images(cls._first_frame(preview_after), "fil.compare.after", prompt, extra_pnginfo)["ui"]["images"]
            except Exception:
                pass

        return io.NodeOutput(result_before, result_after, ui=ui_data)
