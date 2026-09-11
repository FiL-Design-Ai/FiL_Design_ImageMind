@echo off
setlocal enabledelayedexpansion
title FiL Design ImageMind - Test Suite

echo =======================================================
echo    FiL Design ImageMind - Backend Test Runner
echo =======================================================
echo.

cd /d "%~dp0"

:: Detect portable ComfyUI site-packages
set "EMBEDDED_PACKAGES=%~dp0..\..\..\python_embeded\Lib\site-packages"
if exist "%EMBEDDED_PACKAGES%" (
    echo [*] Found ComfyUI embedded packages: %EMBEDDED_PACKAGES%
    set "PYTHONPATH=%EMBEDDED_PACKAGES%;%PYTHONPATH%"
) else (
    echo [!] ComfyUI embedded packages not found at default relative path. Using system environment.
)

:: If arguments passed, run with them, otherwise run all tests
if "%~1"=="" (
    echo [*] Running full test suite...
    echo.
    python -m pytest tests/ -v --tb=short
) else (
    echo [*] Running custom test query: %*
    echo.
    python -m pytest %*
)

set TEST_EXIT_CODE=%ERRORLEVEL%
echo.
echo =======================================================
if %TEST_EXIT_CODE% EQU 0 (
    echo [SUCCESS] All tests passed cleanly!
) else (
    echo [FAILED] Tests failed with exit code: %TEST_EXIT_CODE%
)
echo =======================================================
echo.

pause
exit /b %TEST_EXIT_CODE%
