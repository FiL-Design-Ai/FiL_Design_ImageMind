@echo off
setlocal enabledelayedexpansion

set "SCRIPT_DIR=%~dp0"
set "REQUIREMENTS_FILE=%SCRIPT_DIR%requirements.txt"
set "PYTHON_EXE="

echo ====================================================
echo   FiL_LLM - Dependency Installer
echo ====================================================

if exist "%SCRIPT_DIR%..\..\..\python_embeded\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\..\python_embeded\python.exe"
) else if exist "%SCRIPT_DIR%..\..\python_embeded\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\python_embeded\python.exe"
) else (
    py -3 --version >nul 2>&1
    if !ERRORLEVEL! EQU 0 (
        set "PYTHON_EXE=py -3"
    ) else (
        echo [!] Embedded Python not found in parent folders.
        echo [?] Falling back to system python from PATH...
        set "PYTHON_EXE=python"
    )
)

echo [*] Using Python: !PYTHON_EXE!

if not exist "%REQUIREMENTS_FILE%" (
    echo [!] requirements.txt not found: %REQUIREMENTS_FILE%
    pause
    exit /b 1
)

echo [*] Installing requirements from %REQUIREMENTS_FILE%...
call !PYTHON_EXE! -m pip install -r "%REQUIREMENTS_FILE%"
if !ERRORLEVEL! NEQ 0 (
    echo [!] Dependency installation failed.
    pause
    exit /b 1
)

echo [*] Verifying runtime libraries...
call !PYTHON_EXE! -c "import requests; import aiohttp; import yaml; import PIL; import numpy; import psutil; print('SUCCESS: Runtime libraries verified')"
if !ERRORLEVEL! NEQ 0 (
    echo [!] Verification failed. Please check the errors above.
    pause
    exit /b 1
)

echo [*] Checking optional Codex CLI runtime...
codex --version >nul 2>&1
if !ERRORLEVEL! EQU 0 (
    echo [i] Codex CLI detected.
) else (
    echo [i] Codex CLI not found. For OpenAI Codex subscription runtime, install/login Codex CLI separately: codex login
)

echo ====================================================
echo   SUCCESS: FiL_LLM runtime dependencies are ready!
echo ====================================================
echo [i] Test dependencies, if needed: pip install -r "%SCRIPT_DIR%requirements-dev.txt"
pause
