import hashlib
import json
import logging
from abc import ABC, abstractmethod
from typing import Any, Callable, Dict, List, Optional

from .base import FiLError, InferenceError, ServerUnavailableError
from .brand import BRAND
from .config import PROVIDERS, get_config, is_known_vision_model_name
from .network import HTTPClient, RateLimiter
from .processing import normalize_model_name
from .provider_accounts import get_api_key, get_provider_base_url
from .provider_resilience import (
    classify_cloudflare_error,
    get_openrouter_candidates,
    get_retry_policy,
    is_timeout_error,
    normalize_cloud_error,
)
from .storage import get_prompt_cache

logger = logging.getLogger(f"{BRAND}.Models")


class ModelStrategy(ABC):
    def __init__(self, http_client: HTTPClient, rate_limiter: RateLimiter):
        self.http_client = http_client
        self.rate_limiter = rate_limiter

    @abstractmethod
    def get_chat_url(self, config: Dict[str, Any]) -> str:
        ...

    @abstractmethod
    def build_payload(self, config: Dict[str, Any], system: str, user: str, img: Optional[str] = None, **kwargs) -> Dict[str, Any]:
        ...

    @abstractmethod
    def parse_response(self, data: Any) -> str:
        ...

    @abstractmethod
    def get_headers(self, config: Dict[str, Any]) -> Dict[str, str]:
        ...


class OllamaStrategy(ModelStrategy):
    def get_chat_url(self, config):
        return f"{config.get('url', 'http://127.0.0.1:11434').rstrip('/')}/api/chat"

    def get_headers(self, config):
        return {}

    def build_payload(self, config, system, user, img=None, **kwargs):
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ]
        if img:
            clean = img.split(",", 1)[1] if "," in img else img
            messages[-1]["images"] = [clean]
        payload = {
            "model": config["model"],
            "messages": messages,
            "stream": kwargs.get("stream", False),
            "options": {
                "temperature": kwargs.get("temperature", 0.7),
            },
        }
        seed = kwargs.get("seed", -1)
        if seed is not None and seed >= 0:
            payload["options"]["seed"] = int(seed)
        if kwargs.get("response_format") == "json":
            payload["format"] = "json"
        return payload

    def parse_response(self, data):
        return data.get("message", {}).get("content", "").strip()


class OpenAIStrategy(ModelStrategy):
    def get_chat_url(self, config):
        provider = config.get("provider", "openrouter")
        base_url = config.get("url") or config.get("base_url") or ""
        if not base_url:
            fallbacks = {
                "openrouter": "https://openrouter.ai/api/v1",
                "openai": "https://api.openai.com/v1",
                "cloudflare": "",
            }
            base_url = fallbacks.get(provider, "https://api.openrouter.ai/api/v1")
        if provider == "cloudflare" and base_url:
            return base_url.rstrip("/") + "/chat/completions"
        return base_url.rstrip("/") + "/chat/completions"

    def get_headers(self, config):
        provider = config.get("provider", "openrouter")
        api_key = config.get("api_key") or get_api_key(provider) or ""
        prov = PROVIDERS.get(provider)
        if prov:
            key_part = f"{prov.header_prefix}{api_key}".strip()
            return {prov.header_name: key_part} if prov.header_name else {}
        return {"Authorization": f"Bearer {api_key}"} if api_key else {}

    def build_payload(self, config, system, user, img=None, **kwargs):
        provider = config.get("provider", "openrouter")
        model_name = normalize_model_name(config["model"])

        if system and user:
            merged = f"[SYSTEM]\n{system}\n\n[USER]\n{user}"
        else:
            merged = user or system

        messages = [{"role": "user", "content": merged}]
        if img:
            clean_img = img.split(",", 1)[1] if "," in img else img
            content = [
                {"type": "text", "text": merged},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{clean_img}"}},
            ]
            messages = [{"role": "user", "content": content}]

        payload = {
            "model": model_name,
            "messages": messages,
            "stream": kwargs.get("stream", False),
            "temperature": kwargs.get("temperature", 0.7),
        }
        seed = kwargs.get("seed", -1)
        if seed is not None and seed >= 0:
            payload["seed"] = int(seed)
        if kwargs.get("response_format") == "json":
            payload["response_format"] = {"type": "json_object"}
        return payload

    def parse_response(self, data):
        try:
            choices = data.get("choices", [])
            if choices:
                return choices[0].get("message", {}).get("content", "").strip()
        except Exception:
            pass
        return data.get("content") or data.get("response") or str(data)


class GoogleStrategy(ModelStrategy):
    def get_chat_url(self, config):
        base_url = config.get("url", "https://generativelanguage.googleapis.com/v1beta").rstrip("/")
        model_name = normalize_model_name(config.get("model", "gemini-2.0-flash"))
        api_key = config.get("api_key") or get_api_key("google") or ""
        return f"{base_url}/models/{model_name}:generateContent?key={api_key}"

    def get_headers(self, config):
        return {"Content-Type": "application/json"}

    def build_payload(self, config, system, user, img=None, **kwargs):
        parts = [{"text": f"{system}\n\n{user}" if system else user}]
        if img:
            clean_img = img.split(",", 1)[1] if "," in img else img
            parts.insert(0, {"inline_data": {"mime_type": "image/jpeg", "data": clean_img}})
        return {"contents": [{"parts": parts}], "generationConfig": {"temperature": kwargs.get("temperature", 0.7)}}

    def parse_response(self, data):
        try:
            candidates = data.get("candidates", [])
            if candidates:
                parts = candidates[0].get("content", {}).get("parts", [])
                return "".join(p.get("text", "") for p in parts)
        except Exception:
            pass
        return str(data)


class ModelClient:
    def __init__(self):
        self.config = get_config()
        self.http_client = HTTPClient()
        self.rate_limiter = RateLimiter()
        self._cache = get_prompt_cache()
        self._strategies = {
            "ollama": OllamaStrategy(self.http_client, self.rate_limiter),
            "lmstudio": OpenAIStrategy(self.http_client, self.rate_limiter),
            "openai": OpenAIStrategy(self.http_client, self.rate_limiter),
            "groq": OpenAIStrategy(self.http_client, self.rate_limiter),
            "openrouter": OpenAIStrategy(self.http_client, self.rate_limiter),
            "cloudflare": OpenAIStrategy(self.http_client, self.rate_limiter),
            "google": GoogleStrategy(self.http_client, self.rate_limiter),
        }

    def _image_hash(self, images: Optional[List[str]]) -> str:
        if not images:
            return ""
        return hashlib.md5("".join(images).encode()).hexdigest()[:16]

    def generate(
        self,
        provider: str,
        model: str,
        system_prompt: str = "",
        user_prompt: str = "",
        images: Optional[List[str]] = None,
        temperature: float = 0.7,
        seed: Optional[int] = None,
        max_tokens: int = 0,
        response_format: str = "text",
        stream: bool = False,
        stream_callback: Optional[Callable[[str], None]] = None,
        timeout: Optional[int] = None,
    ) -> str:
        provider = provider.strip().lower()
        strategy = self._strategies.get(provider)
        if not strategy:
            raise FiLError(f"Unknown provider: {provider}", code="UNKNOWN_PROVIDER")

        model_name = normalize_model_name(model)
        if not model_name:
            raise FiLError("Model name is required", code="MISSING_MODEL")

        img_hash = self._image_hash(images)
        use_cache = not stream and seed is not None and seed >= 0
        if use_cache:
            cached = self._cache.get(provider, model_name, system_prompt, user_prompt, img_hash, seed, temperature)
            if cached is not None:
                logger.debug("[CACHE] Hit %s/%s seed=%s", provider, model_name, seed)
                return cached

        resolved_timeout = timeout or self.config.get_timeout(provider)
        retry_policy = get_retry_policy(provider)

        def _build_and_send(current_model: str):
            cfg = {
                "provider": provider,
                "model": current_model,
                "url": get_provider_base_url(provider),
                "api_key": get_api_key(provider),
            }
            api_prov_config = PROVIDERS.get(provider)
            if api_prov_config:
                cfg["models_endpoint"] = api_prov_config.models_endpoint
                cfg["chat_endpoint"] = api_prov_config.chat_endpoint
            img = images[0] if images else None
            pl = strategy.build_payload(
                cfg, system_prompt, user_prompt, img=img,
                temperature=temperature, seed=seed, max_tokens=max_tokens,
                response_format=response_format, stream=stream or stream_callback is not None,
            )
            chat_url = strategy.get_chat_url(cfg)
            hdrs = strategy.get_headers(cfg)
            req_kwargs = {"json": pl, "timeout": resolved_timeout, "headers": hdrs}
            if retry_policy:
                req_kwargs.update(retry_policy.as_kwargs())
            if stream and stream_callback:
                resp = self.http_client.post(chat_url, stream=True, **req_kwargs)
                resp.raise_for_status()
                return self._handle_stream_response(resp, provider, stream_callback)
            resp = self.http_client.post(chat_url, **req_kwargs)
            resp.raise_for_status()
            result = strategy.parse_response(resp.json())
            if use_cache:
                self._cache.set(provider, model_name, system_prompt, user_prompt, result, img_hash, seed, temperature)
            return result

        # OpenRouter free-model vision fallback: when an image is present and the
        # selected model fails, try up to 3 free vision candidates. Only 429
        # errors advance to the next candidate; any other error raises.
        if (
            provider == "openrouter"
            and images
            and not self.config.get_bool("providers.openrouter.disable_vision_fallback", False)
        ):
            candidates = get_openrouter_candidates(
                {"provider": provider, "model": model_name}, model_name, require_vision=True
            )[:3]
            if not candidates:
                raise FiLError(
                    "No free OpenRouter vision candidates available from /models.",
                    code="OPENROUTER_NO_VISION_CANDIDATES",
                )
            last_error: Optional[BaseException] = None
            last_rate_limit_error: Optional[BaseException] = None
            for i, candidate in enumerate(candidates, 1):
                logger.info("[OPENROUTER] Vision attempt %s/%s using '%s'", i, len(candidates), candidate)
                try:
                    return _build_and_send(candidate)
                except FiLError:
                    raise
                except Exception as exc:
                    err_str = str(exc)
                    is_429 = "429" in err_str or "rate" in err_str.lower()
                    if is_429:
                        last_rate_limit_error = exc
                        last_error = exc
                        logger.warning("[OPENROUTER] '%s' rate-limited, trying next candidate.", candidate)
                        continue
                    # Non-429 error: raise immediately (matches backup behavior).
                    self._log_cloud_failure(provider, candidate, exc)
                    raise InferenceError(f"API call to {provider}/{candidate} failed: {exc}") from exc
            if last_rate_limit_error is not None:
                raise FiLError(
                    "Все бесплатные vision-модели OpenRouter сейчас перегружены.",
                    code="OPENROUTER_ALL_RATE_LIMITED",
                )
            raise InferenceError(f"API call to {provider}/{model_name} failed: {last_error}") from last_error

        # Non-OpenRouter path (and OpenRouter without images).
        try:
            return _build_and_send(model_name)
        except FiLError:
            raise
        except Exception as exc:
            # Groq 404 -> append "-preview" and retry once.
            if (
                provider == "groq"
                and ("404" in str(exc) or "not found" in str(exc).lower())
                and not model_name.endswith("-preview")
            ):
                fallback_model = f"{model_name}-preview"
                logger.warning("[GROQ] Model '%s' not found. Falling back to '%s'.", model_name, fallback_model)
                try:
                    return _build_and_send(fallback_model)
                except Exception as fallback_exc:
                    logger.error("[GROQ] Fallback to '%s' also failed: %s", fallback_model, fallback_exc)
                    self._log_cloud_failure(provider, model_name, exc)
                    raise InferenceError(f"API call to {provider}/{model_name} failed: {exc}") from exc
            self._log_cloud_failure(provider, model_name, exc)
            raise InferenceError(f"API call to {provider}/{model_name} failed: {exc}") from exc

    def _log_cloud_failure(self, provider: str, model: str, exc: BaseException) -> None:
        """Classify and log a cloud provider failure without changing control flow."""
        try:
            if provider == "cloudflare":
                # Best-effort error_details extraction.
                status = None
                code = None
                body = str(exc)
                resp = getattr(exc, "response", None)
                if resp is not None:
                    status = resp.status_code
                    try:
                        parsed = resp.json()
                        code = parsed.get("error", {}).get("code") if isinstance(parsed, dict) else None
                        body = parsed.get("error", {}).get("message", body) if isinstance(parsed, dict) else body
                    except Exception:
                        pass
                category, message = classify_cloudflare_error(
                    {"status": status, "provider_code": code, "provider_message": body, "body": body}
                )
                logger.warning("[CLOUDFLARE FAILURE] model=%s category=%s message=%s", model, category, message)
            else:
                normalized = normalize_cloud_error(exc, provider, model)
                logger.warning(
                    "[CLOUD FAILURE] provider=%s model=%s status=%s category=%s retryable=%s",
                    provider, model, normalized["http_status"], normalized["error_category"], normalized["retryable"],
                )
        except Exception:
            pass

    def _handle_stream_response(self, response, provider: str, callback: Callable[[str], None]) -> str:
        full_text = []
        for line in response.iter_lines():
            if not line:
                continue
            line_str = line.decode("utf-8")
            chunk = ""
            if provider == "ollama":
                try:
                    chunk = json.loads(line_str).get("message", {}).get("content", "")
                except (json.JSONDecodeError, KeyError):
                    pass
            else:
                if line_str.startswith("data: ") and line_str != "data: [DONE]":
                    try:
                        chunk = json.loads(line_str[6:]).get("choices", [{}])[0].get("delta", {}).get("content", "")
                    except (json.JSONDecodeError, KeyError):
                        pass
            if chunk:
                full_text.append(chunk)
                callback(chunk)
        return "".join(full_text)

    def check_vision(self, provider: str, model: str) -> bool:
        return is_known_vision_model_name(model) or provider == "google"

    def list_models(self, provider: str) -> List[str]:
        from .provider_runtime import fetch_models_from_provider
        return fetch_models_from_provider(provider)
