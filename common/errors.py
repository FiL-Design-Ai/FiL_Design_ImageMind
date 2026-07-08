import logging
import time
import traceback
from contextlib import contextmanager
from dataclasses import dataclass, field
from enum import Enum, auto
from functools import wraps
from typing import Any, Callable, Dict, Iterator, Optional, TypeVar

from .base import FiLLLMError

logger = logging.getLogger("FiL_LLM.Errors")
T = TypeVar("T")


class ErrorSeverity(Enum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"
    CRITICAL = "critical"


class ErrorCategory(Enum):
    NETWORK = auto()
    MODEL = auto()
    CONFIGURATION = auto()
    VALIDATION = auto()
    MEMORY = auto()
    RATE_LIMIT = auto()
    SECURITY = auto()
    INFERENCE = auto()
    UNKNOWN = auto()


class ErrorCode(Enum):
    CONFIG_INVALID = "CONFIG_001"
    MODEL_NOT_FOUND = "MODEL_001"
    VISION_NOT_AVAILABLE = "MODEL_004"
    SERVER_UNAVAILABLE = "SERVER_001"
    SERVER_TIMEOUT = "SERVER_002"
    SERVER_ERROR = "SERVER_003"
    API_AUTH_FAILED = "API_001"
    API_RATE_LIMIT = "API_002"
    VALIDATION_INVALID = "VALIDATION_001"
    UNKNOWN = "UNKNOWN_001"


ERROR_MESSAGES = {
    ErrorCode.VALIDATION_INVALID: {
        "en": "Bad Request (400)",
        "ru": "Ошибка запроса (400)",
        "suggestion_en": "Check your model name, parameters, or if the model supports vision/JSON.",
        "suggestion_ru": "Проверьте имя модели, параметры или поддерживает ли модель vision/JSON.",
    },
    ErrorCode.API_AUTH_FAILED: {
        "en": "Authentication failed (401)",
        "ru": "Ошибка аутентификации (401)",
        "suggestion_en": "Invalid API Key. Check your auth settings.",
        "suggestion_ru": "Неверный API ключ. Проверьте настройки auth.",
    },
    ErrorCode.API_RATE_LIMIT: {
        "en": "Rate limit exceeded (429)",
        "ru": "Лимит запросов исчерпан (429)",
        "suggestion_en": "Rate limit reached. Wait a bit or upgrade your API tier.",
        "suggestion_ru": "Слишком много запросов. Подождите или повысьте уровень API.",
    },
    ErrorCode.MODEL_NOT_FOUND: {
        "en": "Model not found (404)",
        "ru": "Модель не найдена (404)",
        "suggestion_en": "Check model name or provider availability.",
        "suggestion_ru": "Проверьте имя модели или доступность провайдера.",
    },
    ErrorCode.SERVER_UNAVAILABLE: {
        "en": "Server unavailable",
        "ru": "Сервер недоступен",
        "suggestion_en": "Is your local server (Ollama/LM Studio) running?",
        "suggestion_ru": "Запущен ли Ollama/LM Studio?",
    },
    ErrorCode.SERVER_ERROR: {
        "en": "AI Provider server error (500/503)",
        "ru": "Ошибка сервера AI (500/503)",
        "suggestion_en": "AI Provider is currently down. Try again later.",
        "suggestion_ru": "Сервер провайдера временно недоступен.",
    },
    ErrorCode.SERVER_TIMEOUT: {
        "en": "Connection timed out",
        "ru": "Превышено время ожидания",
        "suggestion_en": "The request took too long. Check your connection or increase timeout.",
        "suggestion_ru": "Запрос шёл слишком долго. Проверьте интернет или увеличьте таймаут.",
    },
}


@dataclass
class ErrorDetails:
    code: ErrorCode
    message: str
    severity: ErrorSeverity = ErrorSeverity.ERROR
    category: ErrorCategory = ErrorCategory.UNKNOWN
    user_message: str = ""
    suggestion: str = ""
    context: Dict[str, Any] = field(default_factory=dict)
    timestamp: float = field(default_factory=time.time)
    recoverable: bool = True

    def to_dict(self) -> Dict[str, Any]:
        return {
            "code": self.code.value,
            "message": self.message,
            "severity": self.severity.value,
            "category": self.category.name,
            "user_message": self.user_message,
            "suggestion": self.suggestion,
            "context": self.context,
            "timestamp": self.timestamp,
        }


class ErrorHandler:
    _instance: Optional["ErrorHandler"] = None

    def __new__(cls) -> "ErrorHandler":
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self) -> None:
        if hasattr(self, "_init"):
            return
        self._init = True
        self._history: list[ErrorDetails] = []
        self._lang_override: Optional[str] = None

    @property
    def lang(self) -> str:
        if self._lang_override:
            return self._lang_override
        try:
            from .localization import get_localization_manager
            return get_localization_manager().current_lang
        except Exception:
            return "ru"

    def handle(self, exception: Exception, context: Optional[Dict[str, Any]] = None) -> ErrorDetails:
        code = self._classify(exception)
        messages = ERROR_MESSAGES.get(code, {"en": str(exception), "ru": str(exception)})
        lang = self.lang
        details = ErrorDetails(
            code=code,
            message=str(exception),
            user_message=messages.get(lang, messages.get("en", str(exception))),
            suggestion=messages.get(f"suggestion_{lang}", messages.get("suggestion_en", "")),
            context=context or {},
            traceback=traceback.format_exc(),
        )
        self._history.append(details)
        if len(self._history) > 100:
            self._history.pop(0)
        return details

    def _classify(self, error: Exception) -> ErrorCode:
        msg = str(error).lower()
        if "ssl" in msg or "eof occurred" in msg:
            return ErrorCode.SERVER_TIMEOUT
        if "403" in msg or "forbidden" in msg:
            return ErrorCode.API_AUTH_FAILED
        if "400" in msg or "bad request" in msg:
            return ErrorCode.VALIDATION_INVALID
        if "401" in msg or "unauthorized" in msg:
            return ErrorCode.API_AUTH_FAILED
        if "404" in msg or "not found" in msg:
            return ErrorCode.MODEL_NOT_FOUND
        if "429" in msg or "rate limit" in msg:
            return ErrorCode.API_RATE_LIMIT
        if "500" in msg or "503" in msg:
            return ErrorCode.SERVER_ERROR
        if "timeout" in msg or "timed out" in msg:
            return ErrorCode.SERVER_TIMEOUT
        if "connection" in msg or "refused" in msg:
            return ErrorCode.SERVER_UNAVAILABLE
        return ErrorCode.UNKNOWN

    @contextmanager
    def context(self, operation: str, category: ErrorCategory = ErrorCategory.UNKNOWN):
        try:
            yield
        except Exception as exc:
            logger.error("Error in %s: %s", operation, exc)
            self.handle(exc, {"operation": operation, "category": category.name})
            raise


_handler = ErrorHandler()


def get_error_handler() -> ErrorHandler:
    return _handler


def handle_error(error: Exception, ctx: Optional[Dict[str, Any]] = None) -> ErrorDetails:
    return _handler.handle(error, ctx)


def set_error_language(lang: str) -> None:
    _handler._lang_override = lang


def retry_with_backoff(
    max_attempts: int = 3,
    delay: float = 1.0,
    exceptions: tuple = (Exception,),
):
    def decorator(func: Callable[..., T]) -> Callable[..., T]:
        @wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> T:
            import random
            last_err = None
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as exc:
                    last_err = exc
                    if attempt == max_attempts:
                        break
                    wait = delay * (2 ** (attempt - 1)) + (random.random() * 0.1)
                    logger.warning("Retry %s/%s for %s in %.1fs", attempt, max_attempts, func.__name__, wait)
                    time.sleep(wait)
            if last_err is None:
                raise RuntimeError("retry_with_backoff exhausted without capturing an error")
            raise last_err
        return wrapper
    return decorator
