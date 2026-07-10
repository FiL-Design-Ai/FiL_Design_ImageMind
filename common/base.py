import hashlib
import logging
from typing import Any, Dict, Optional

from .brand import BRAND


DEFAULT_OLLAMA_URL = "http://localhost:11434"
DEFAULT_LMSTUDIO_URL = "http://localhost:1234"
DEFAULT_TIMEOUT = 120
DEFAULT_MAX_IMAGE_SIDE = 1024
DEFAULT_IMAGE_QUALITY = 85


def get_secret_fingerprint(secret: Optional[str]) -> str:
    if not secret:
        return "missing"
    return hashlib.sha256(secret.encode("utf-8")).hexdigest()[:12]


def describe_secret(secret: Optional[str]) -> Dict[str, Any]:
    clean = (secret or "").strip()
    return {"present": bool(clean), "length": len(clean), "fingerprint": get_secret_fingerprint(clean)}


class FiLError(Exception):
    def __init__(self, message: str, code: str = "UNKNOWN_ERROR", details: dict = None):
        self.message = message
        self.code = code
        self.details = details or {}
        super().__init__(self.message)

    def to_dict(self) -> dict:
        return {"error_type": self.__class__.__name__, "error_code": self.code, "message": self.message, "details": self.details}


class ConfigurationError(FiLError):
    def __init__(self, msg: str, field: str = None):
        super().__init__(msg, "CONFIG_ERROR", {"field": field} if field else {})


class ValidationError(FiLError):
    def __init__(self, msg: str, field: str = None, value: Any = None):
        super().__init__(msg, "VALIDATION_ERROR", {"field": field, "value": str(value)})


class ModelNotFoundError(FiLError):
    def __init__(self, model: str):
        super().__init__(f"Model '{model}' not found", "MODEL_NOT_FOUND")


class VisionNotAvailableError(FiLError):
    def __init__(self, model: str):
        super().__init__(f"Vision not available for model '{model}'", "VISION_NOT_AVAILABLE")


class ServerUnavailableError(FiLError):
    def __init__(self, url: str):
        super().__init__(f"Server at '{url}' is unavailable", "SERVER_UNAVAILABLE")


class RateLimitError(FiLError):
    def __init__(self, msg: str):
        super().__init__(msg, "RATE_LIMIT_ERROR")


class InferenceError(FiLError):
    def __init__(self, msg: str):
        super().__init__(msg, "INFERENCE_ERROR")


def get_logger(name: Optional[str] = None) -> logging.Logger:
    logger = logging.getLogger(f"{BRAND}.{name}" if name else BRAND)
    if not logger.handlers:
        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter("[%(name)s] %(levelname)s: %(message)s"))
        logger.addHandler(handler)
    logger.setLevel(logging.WARNING)
    return logger
