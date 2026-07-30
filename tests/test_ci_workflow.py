"""The CI workflow, checked against the repository it runs on.

A workflow is only exercised by pushing, and a typo in a path costs a full
round trip to find — longer if it only breaks the one job that takes ten
minutes. Everything here is what can be settled without a runner: that the
paths a step names exist, that the scripts it calls exist, and that the actions
it uses are pinned.

What this cannot check is the runner itself: whether ComfyUI starts inside the
time allowed, and whether a Linux build of the frontend reproduces the bundle
committed from Windows. The first is why the smoke suite lets Playwright start
and wait for the server instead of a step doing it in the background; the
second has no local answer without a Linux toolchain, and is called out in
`ci.yml` where it matters.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest
import yaml


PACKAGE_ROOT = Path(__file__).resolve().parents[1]
WORKFLOW = PACKAGE_ROOT / ".github" / "workflows" / "ci.yml"

# Where a job's paths sit relative to this repository. The Python and smoke jobs
# check the pack out under a temporary name and move it into a ComfyUI tree, so
# the same file is addressed three different ways across the file.
PREFIXES = (
    "ComfyUI/custom_nodes/FiL_Design_ImageMind/",
    "fil-design-imagemind-temp/",
)

# Checked out by the workflow, not part of this repository.
FOREIGN = ("ComfyUI", "ComfyUI/")


def repo_path(raw: str) -> Path | None:
    """Resolve a path as written in the workflow to one in this repo.

    Returns None for paths belonging to the ComfyUI checkout.
    """
    path = raw.strip().strip("\"'")
    if path in FOREIGN:
        return None
    for prefix in PREFIXES:
        if path.startswith(prefix):
            return PACKAGE_ROOT / path[len(prefix):]
    if path.startswith("ComfyUI/"):
        return None
    return PACKAGE_ROOT / path


def workflow() -> dict:
    return yaml.safe_load(WORKFLOW.read_text(encoding="utf-8"))


def steps() -> list[tuple[str, dict]]:
    """Every step, labelled with the job it belongs to."""
    return [
        (job_name, step)
        for job_name, job in workflow()["jobs"].items()
        for step in job["steps"]
    ]


def test_the_workflow_has_the_jobs_it_is_meant_to():
    """Named rather than counted, so a job cannot quietly disappear.

    Deleting a job is a decision; making the list agree with reality afterwards
    is how that decision gets recorded.
    """
    jobs = workflow()["jobs"]
    assert set(jobs) == {
        "test-python",
        "test-frontend",
        # Added 2026-07-30. The quality tools were configured and never invoked
        # from anywhere, which is how they drifted into all failing at once.
        "lint-python",
        "smoke-comfyui",
        "smoke-with-neighbours",
    }
    for name, job in jobs.items():
        assert job["steps"], f"{name} has no steps"


def test_only_the_neighbours_job_is_allowed_to_fail():
    """`continue-on-error` on anything else would hide a real break.

    The neighbours are cloned unpinned, so they can break on their own schedule
    and must not block a release. Every other job is a gate.
    """
    tolerated = {
        name for name, job in workflow()["jobs"].items()
        if job.get("continue-on-error")
    }
    assert tolerated == {"smoke-with-neighbours"}


def test_every_working_directory_exists():
    """A wrong `working-directory` fails the step with a bare shell error."""
    missing = []
    for job_name, step in steps():
        raw = step.get("working-directory")
        if not raw:
            continue
        resolved = repo_path(raw)
        if resolved is not None and not resolved.is_dir():
            missing.append(f"{job_name} / {step.get('name', '?')}: {raw}")
    assert not missing, "working-directory that does not exist:\n" + "\n".join(missing)


def test_every_cached_dependency_file_exists():
    """A missing `cache-dependency-path` is a warning, then a silent cache miss.

    Nothing fails, the job just gets slower every run — the kind of rot nobody
    goes looking for.
    """
    missing = []
    for job_name, step in steps():
        raw = (step.get("with") or {}).get("cache-dependency-path")
        if not raw:
            continue
        for line in str(raw).splitlines():
            if not line.strip():
                continue
            resolved = repo_path(line)
            if resolved is not None and not resolved.is_file():
                missing.append(f"{job_name}: {line.strip()}")
    assert not missing, "cache-dependency-path that does not exist:\n" + "\n".join(missing)


def test_every_script_a_step_runs_exists():
    """The files steps invoke by name: requirements, tools, playwright configs."""
    patterns = (
        re.compile(r"-r\s+(\S+\.txt)"),
        re.compile(r"python\s+(tools/\S+\.py)"),
        re.compile(r"-c\s+(\S+\.config\.ts)"),
    )
    missing = []
    for job_name, step in steps():
        script = step.get("run")
        if not script:
            continue
        base = step.get("working-directory", "")
        for pattern in patterns:
            for match in pattern.findall(script):
                # A bare name resolves against the step's working directory.
                candidate = match if "/" in match and not base else f"{base}/{match}" if base else match
                resolved = repo_path(candidate)
                if resolved is not None and not resolved.is_file():
                    missing.append(f"{job_name} / {step.get('name', '?')}: {match}")
    assert not missing, "script referenced but not present:\n" + "\n".join(missing)


def test_every_npm_script_a_step_runs_is_declared():
    """`npm run <name>` fails only when the job reaches it, minutes in."""
    import json

    package = json.loads((PACKAGE_ROOT / "frontend" / "package.json").read_text(encoding="utf-8"))
    declared = set(package["scripts"])

    missing = []
    for job_name, step in steps():
        script = step.get("run")
        if not script:
            continue
        for name in re.findall(r"npm run ([\w:-]+)", script):
            if name not in declared:
                missing.append(f"{job_name}: npm run {name}")
    assert not missing, "npm script referenced but not in package.json:\n" + "\n".join(missing)


def test_every_action_is_pinned_to_a_major_version():
    """An unpinned action changes under the workflow without a commit."""
    unpinned = [
        f"{job_name}: {step['uses']}"
        for job_name, step in steps()
        if "uses" in step and "@" not in step["uses"]
    ]
    assert not unpinned, "action without a version:\n" + "\n".join(unpinned)


@pytest.mark.parametrize("job_name", ["test-python", "smoke-comfyui", "smoke-with-neighbours"])
def test_the_pack_is_moved_into_a_comfyui_tree_before_it_is_used(job_name):
    """The pack has to import as `FiL_Design_ImageMind` under `custom_nodes`.

    Both jobs check it out under a temporary name first, because `actions/
    checkout` cannot place a repository inside a directory it also creates.
    Every later step addresses the moved location, so the move has to come
    before any of them.
    """
    job_steps = workflow()["jobs"][job_name]["steps"]
    move_index = next(
        (i for i, step in enumerate(job_steps) if "mv " in (step.get("run") or "")),
        None,
    )
    assert move_index is not None, f"{job_name} never moves the pack into custom_nodes"

    for step in job_steps[:move_index]:
        working_directory = step.get("working-directory", "")
        assert not working_directory.startswith("ComfyUI/custom_nodes"), (
            f"{job_name} / {step.get('name', '?')} uses the moved path before the move"
        )
