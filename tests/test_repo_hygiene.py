"""The working copy must not contain a second copy of itself.

A `.kilo/worktrees/efficacious-kingfisher/` checkout sat inside this repository
holding a full, stale duplicate of every source file — 75 MB of it, ignored by
git and therefore invisible to every check in the suite. Nothing was wrong with
the repository; the damage was to every search run against it. `grep` for
`gen_contracts.mjs` answered with the duplicate's copies first, and an edit or a
reading made against those is an edit made to a file nothing loads.

Git worktrees are the mechanism (`git worktree add` places a real checkout
wherever it is told), and they are useful — the two that remain live in
`../FiL_Design_ImageMind.worktrees/`, outside this tree, where they cost
nothing. This test does not object to worktrees. It objects to one living
*inside* the directory it is a copy of.
"""

from __future__ import annotations

from pathlib import Path

PACKAGE_ROOT = Path(__file__).resolve().parents[1]

# Directory names never worth descending into. `node_modules` is the only one
# large enough to matter for the walk's cost; `.git` holds object files whose
# names can coincide with anything.
PRUNED = {"node_modules", ".git", "__pycache__"}

# What identifies this package rather than any other Python project. Both are
# checked: a copy could be partial, and the contract registry is the file the
# duplicate actually cost time on.
MARKERS = (
    Path("common") / "contracts" / "registry.py",
    Path("__init__.py"),
)


def _walk() -> list[Path]:
    """Every directory under the package root, minus the pruned names.

    Deliberately includes git-ignored directories — `.kilo/`, `.qwen/`,
    `_archive/`. Being ignored is what let the duplicate go unnoticed, so
    skipping them here would skip the only place the defect has ever appeared.
    """
    found = [PACKAGE_ROOT]
    stack = [PACKAGE_ROOT]
    while stack:
        for entry in stack.pop().iterdir():
            if not entry.is_dir() or entry.is_symlink() or entry.name in PRUNED:
                continue
            found.append(entry)
            stack.append(entry)
    return found


def _looks_like_this_package(directory: Path) -> bool:
    """True when `directory` is a copy of this package's root."""
    registry, init = (directory / marker for marker in MARKERS)
    if not registry.is_file() or not init.is_file():
        return False
    # `__init__.py` alone is far too common; the extension class is not.
    return "class FiLExtension" in init.read_text(encoding="utf-8", errors="ignore")


def test_no_nested_copy_of_the_repo():
    nested = [
        directory.relative_to(PACKAGE_ROOT).as_posix()
        for directory in _walk()
        if directory != PACKAGE_ROOT and _looks_like_this_package(directory)
    ]
    assert not nested, (
        "a copy of this package lives inside the working copy:\n  "
        + "\n  ".join(nested)
        + "\n\nEvery search run against this tree will find both, and an edit made to "
        "the copy changes nothing that loads. If it is a git worktree, move it out:\n"
        "  git worktree remove <path>\n"
        "and re-add it beside the repository rather than inside it."
    )
