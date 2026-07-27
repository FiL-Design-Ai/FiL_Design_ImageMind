@echo off
setlocal enabledelayedexpansion

set "SCRIPT_DIR=%~dp0"
set "REQUIREMENTS_FILE=%SCRIPT_DIR%requirements.txt"
set "PYTHON_EXE="
set "PYTHON_ARGS="

echo ====================================================
echo   FiL_Design_ImageMind - Dependency Installer
echo ====================================================

rem This folder is custom_nodes\FiL_Design_ImageMind, so ..\.. is ComfyUI and
rem ..\..\.. is the portable root (ComfyUI_windows_portable, ComfyUI-Easy-Install).
rem Installing into any other interpreter leaves ComfyUI unable to import these.
if exist "%SCRIPT_DIR%..\..\..\python_embeded\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\..\python_embeded\python.exe"
) else if exist "%SCRIPT_DIR%..\..\python_embeded\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\python_embeded\python.exe"
) else if exist "%SCRIPT_DIR%..\..\venv\Scripts\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\venv\Scripts\python.exe"
) else if exist "%SCRIPT_DIR%..\..\.venv\Scripts\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\.venv\Scripts\python.exe"
) else if exist "%SCRIPT_DIR%..\..\..\venv\Scripts\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\..\venv\Scripts\python.exe"
) else if exist "%SCRIPT_DIR%..\..\..\.venv\Scripts\python.exe" (
    set "PYTHON_EXE=%SCRIPT_DIR%..\..\..\.venv\Scripts\python.exe"
) else (
    py -3 --version >nul 2>&1
    if !ERRORLEVEL! EQU 0 (
        set "PYTHON_EXE=py"
        set "PYTHON_ARGS=-3"
    ) else (
        set "PYTHON_EXE=python"
    )
    echo [^^!] No ComfyUI Python found next to this folder ^(python_embeded, venv, .venv^).
    echo [?] Falling back to Python from PATH. If ComfyUI runs on a different
    echo     interpreter, it will not see anything installed here.
)

echo [*] Using Python: !PYTHON_EXE! !PYTHON_ARGS!

if not exist "%REQUIREMENTS_FILE%" (
    echo [^^!] requirements.txt not found: %REQUIREMENTS_FILE%
    pause
    exit /b 1
)

echo [*] Installing requirements from %REQUIREMENTS_FILE%...
call "!PYTHON_EXE!" !PYTHON_ARGS! -m pip install -r "%REQUIREMENTS_FILE%"
if !ERRORLEVEL! NEQ 0 (
    echo [^^!] Dependency installation failed.
    pause
    exit /b 1
)

echo [*] Verifying runtime libraries...
call "!PYTHON_EXE!" !PYTHON_ARGS! -c "import requests, aiohttp, yaml, PIL, numpy, pydantic; print('SUCCESS: Runtime libraries verified')"
if !ERRORLEVEL! NEQ 0 (
    echo [^^!] Verification failed. Please check the errors above.
    pause
    exit /b 1
)

echo ====================================================
echo   SUCCESS: FiL_Design_ImageMind runtime dependencies are ready^^!
echo ====================================================
echo [i] Test dependencies, if needed: pip install -r "%SCRIPT_DIR%requirements-dev.txt"
pause
