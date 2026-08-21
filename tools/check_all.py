"""Run what CI runs, here, before pushing.

CI is five jobs and a dozen commands. Reproducing that by hand means
remembering all of them in the right interpreter, so in practice nobody does,
and the first news of a break arrives ten minutes after a push — from a log,
about a commit you have already moved on from.

    python tools/check_all.py            # everything
    python tools/check_all.py --fast     # everything that does not need a browser
    python tools/check_all.py --list     # what would run

Use ComfyUI's own interpreter: the system Python collects only part of the
suite, because `tests/conftest.py` imports `comfy`.

    E:/AI/ComfyUI-Easy-Install/python_embeded/python.exe tools/check_all.py --fast

Every check runs even after one fails — a run that stops at the first error
tells you one thing per invocation, and the whole point is to learn everything
that is wrong in a single pass. The exit code is non-zero if any failed.

`tests/test_ci_workflow.py` checks that no CI step is missing from the table
below, so the two cannot drift.
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FRONTEND = ROOT / "frontend"

# The interpreter this script is running under — the one that could import
# whatever it needed to get here, which is the one the suite should use too.
PYTHON = sys.executable


@dataclass
class Check:
    name: str
    command: list[str]
    cwd: Path = ROOT
    #: Needs a browser or a live ComfyUI; excluded by `--fast`.
    slow: bool = False
    #: Skipped, with a reason, when the tool is not installed locally.
    requires: str | None = None
    env: dict[str, str] = field(default_factory=dict)
    #: `name:` of the ci.yml step(s) this stands in for. Claimed steps are how
    #: `tests/test_ci_workflow.py` proves this file has not fallen behind CI.
    ci_steps: tuple[str, ...] = ()


CHECKS: list[Check] = [
    # --- what CI's `test-python` job runs -----------------------------------
    Check("compile", [PYTHON, "-m", "compileall", "-q", "__init__.py", "server_routes.py",
                      "common", "nodes", "tests", "tools"]),
    Check("pytest", [PYTHON, "-m", "pytest", "tests/", "-q"], ci_steps=("Run Python tests",)),
    Check("preflight", [PYTHON, "tools/preflight_check.py"], ci_steps=("Release preflight",)),
    Check("node-conflicts", [PYTHON, "tools/scan_node_conflicts.py"], ci_steps=("Scan for node-id conflicts",)),

    # --- `lint-python` ------------------------------------------------------
    # Pinned `ruff>=0.4.10` in CI; a much newer ruff installed locally reports
    # rules that version never had, so a local failure here is worth reading
    # before believing.
    Check("ruff", [PYTHON, "-m", "ruff", "check", "."], requires="ruff", ci_steps=("Ruff",)),
    Check("bandit", [PYTHON, "-m", "bandit", "-r", "common", "nodes", "-ll"], requires="bandit", ci_steps=("Bandit",)),

    # --- `test-frontend` ----------------------------------------------------
    Check("npm lint", ["npm", "run", "lint"], cwd=FRONTEND, ci_steps=("Lint",)),
    # Before check:bundle, for the reason ci.yml gives: regenerating changes
    # `frontend/src`, which would then invalidate the bundle hash.
    Check("check:contracts", ["npm", "run", "check:contracts"], cwd=FRONTEND,
          env={"PYTHON": PYTHON},
          ci_steps=("Check the committed contracts match common/contracts/",)),
    Check("check:bundle", ["npm", "run", "check:bundle"], cwd=FRONTEND,
          ci_steps=("Check the committed bundle was built from the committed sources",)),
    # `npm run build` is vue-tsc + vite build + `sourceHash --write`. Split in two
    # here and the hash-writing dropped: rewriting dist/.source-hash as a side
    # effect of a *check* would paper over exactly what check:bundle exists to
    # catch. Rebuild deliberately with `npm run build` when dist should change.
    Check("typecheck", ["npm", "run", "typecheck"], cwd=FRONTEND,
          ci_steps=("Type check & build",)),
    Check("vitest", ["npx", "vitest", "run"], cwd=FRONTEND, ci_steps=("Run frontend tests",)),
    Check("build", ["npx", "vite", "build"], cwd=FRONTEND, slow=True,
          ci_steps=("Type check & build",)),
    Check("playwright", ["npx", "playwright", "test"], cwd=FRONTEND, slow=True,
          ci_steps=("Run end-to-end tests",)),

    # --- `smoke-comfyui` ----------------------------------------------------
    # Starts a real ComfyUI through the config's `webServer`, or reuses one
    # already listening. `COMFY_PYTHON` is what makes that work on a portable
    # install, where the system `python` has none of ComfyUI's dependencies.
    Check("smoke", ["npx", "playwright", "test", "-c", "playwright.comfy.config.ts"],
          cwd=FRONTEND, slow=True, env={"COMFY_PYTHON": PYTHON},
          ci_steps=("Run the ComfyUI smoke suite",)),
]


def _resolve(command: list[str]) -> list[str]:
    """Absolute path for the program, so Windows shims can be found.

    On Windows `npm` and `npx` are `npm.cmd` / `npx.cmd`, which
    `subprocess.run(..., shell=False)` will not find by bare name — it raises
    `FileNotFoundError` before the check ever starts. `shutil.which` resolves
    the shim; running it directly rather than through a shell keeps the
    argument list intact.
    """
    found = shutil.which(command[0])
    return [found, *command[1:]] if found else command


def _runnable(check: Check) -> str | None:
    """Reason this check cannot run here, or None."""
    if check.requires:
        probe = subprocess.run(
            [PYTHON, "-m", check.requires, "--version"],
            capture_output=True, cwd=ROOT,
        )
        if probe.returncode != 0:
            return f"{check.requires} is not installed for this interpreter"
    if check.command[0] in {"npm", "npx"} and shutil.which(check.command[0]) is None:
        return f"{check.command[0]} is not on PATH"
    if check.cwd == FRONTEND and not (FRONTEND / "node_modules").is_dir():
        return "frontend/node_modules is missing — run `npm ci` in frontend/"
    return None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fast", action="store_true",
                        help="skip the checks that need a browser or a live ComfyUI")
    parser.add_argument("--list", action="store_true", help="print the checks and exit")
    args = parser.parse_args()

    selected = [c for c in CHECKS if not (args.fast and c.slow)]

    if args.list:
        for check in CHECKS:
            mark = "fast" if not check.slow else "slow"
            print(f"  [{mark}] {check.name:<16} {' '.join(check.command)}")
        return 0

    print(f"Running {len(selected)} checks with {PYTHON}\n")
    failed: list[str] = []
    skipped: list[tuple[str, str]] = []

    for check in selected:
        reason = _runnable(check)
        if reason:
            print(f"  SKIP  {check.name:<16} {reason}")
            skipped.append((check.name, reason))
            continue

        started = time.monotonic()
        # Output goes straight to this terminal: the reason to run checks
        # locally is to read the failure, not a summary of it.
        print(f"  ----  {check.name}")
        env = {**os.environ, **check.env} if check.env else None
        try:
            result = subprocess.run(_resolve(check.command), cwd=check.cwd, env=env, shell=False)
            code = result.returncode
        except OSError as exc:
            # One check that cannot start must not end the run — the point of
            # running these together is to learn everything at once.
            print(f"  ERROR {check.name}: {exc}")
            code = 127
        elapsed = time.monotonic() - started
        if code == 0:
            print(f"  ok    {check.name:<16} {elapsed:5.1f}s\n")
        else:
            print(f"  FAIL  {check.name:<16} {elapsed:5.1f}s (exit {code})\n")
            failed.append(check.name)

    print("-" * 60)
    if skipped:
        print(f"skipped: {', '.join(name for name, _ in skipped)}")
    if failed:
        print(f"FAILED: {', '.join(failed)}")
        return 1
    print(f"all {len(selected) - len(skipped)} checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
