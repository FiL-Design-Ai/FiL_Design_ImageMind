"""Where ComfyUI keeps models, and what counts as being inside it.

Three files carried their own copy of the `extra_model_paths.yaml` scan —
`server_routes.py` and both new nodes — and every one of them ran it on every
listing. Loading those configs is idempotent (`add_model_folder_path` skips a
directory it already holds), so the repetition never showed up as a wrong
answer; it just re-read the yaml files and defeated the host's own cache once
per panel open.
"""

from __future__ import annotations

import logging
import os

from .brand import BRAND

logger = logging.getLogger(f"{BRAND}.ModelFolders")

_EXTRA_PATHS_LOADED = False


def ensure_extra_model_paths() -> None:
    """Fold any `extra_model_paths.yaml` into `folder_paths`, once per process.

    ComfyUI itself reads these at startup and never again, so re-reading them
    per request bought nothing. A file added after launch still shows up: the
    host re-scans a folder whose mtime moved (`cached_filename_list_`).
    """
    global _EXTRA_PATHS_LOADED
    if _EXTRA_PATHS_LOADED:
        return

    try:
        import sys

        import folder_paths
        import utils.extra_config

        base = getattr(folder_paths, "base_path", None) or os.getcwd()
        if os.path.isdir(base):
            for name in os.listdir(base):
                if (name.startswith("extra_") or "model_paths" in name) and name.endswith(
                    (".yaml", ".yml")
                ):
                    full_path = os.path.join(base, name)
                    if os.path.isfile(full_path):
                        utils.extra_config.load_extra_path_config(full_path)

        for index, arg in enumerate(sys.argv):
            if arg == "--extra-model-paths-config" and index + 1 < len(sys.argv):
                config_path = sys.argv[index + 1]
                if os.path.isfile(config_path):
                    utils.extra_config.load_extra_path_config(config_path)
    except Exception as err:
        logger.debug("Could not load extra model paths: %s", err)

    _EXTRA_PATHS_LOADED = True


def model_roots() -> list[str]:
    """Every directory ComfyUI itself calls a model folder, fully resolved."""
    try:
        import folder_paths
    except ImportError:
        return []

    roots: list[str] = []
    for folder_name in list(folder_paths.folder_names_and_paths):
        for directory in folder_paths.get_folder_paths(folder_name) or []:
            if directory:
                roots.append(os.path.normcase(os.path.realpath(directory)))
    return roots


def inside_model_roots(path: str) -> bool:
    """True when *path* really sits inside one of the model folders.

    `folder_paths.get_full_path` normalises `..` away before joining, but the
    fallbacks that resolve subfolder names join the caller's string onto a
    model directory as it stands. A `path=../../..` query walked straight out
    of the models tree and reported the size, date and absolute location of any
    file on the drive — the endpoint is unauthenticated, so this is the one
    check that has to hold.
    """
    if not path:
        return False
    real = os.path.normcase(os.path.realpath(path))
    for root in model_roots():
        try:
            if os.path.commonpath([real, root]) == root:
                return True
        except ValueError:
            # Different drives — no common path, so certainly not inside.
            continue
    return False
