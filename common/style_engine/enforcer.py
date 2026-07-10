"""Public StyleEnforcer implementation for FiL_Design_ImageMind."""

from __future__ import annotations

import re
from typing import Any, Dict, List

from .presets import get_style_specific_rules
from .resolver import detect_style_category, resolve_style_policy
from .rules import (
    CATEGORY_DRIFT_TARGETS,
    CATEGORY_EXAMPLES,
    CATEGORY_FORBIDDEN,
    CATEGORY_OUTPUT_OBLIGATIONS,
    CATEGORY_PRIORITY_RULES,
    CATEGORY_REPLACEMENTS,
    CATEGORY_REQUIRED_CUES,
    STYLE_TRANSFORM_RULES,
    UNIVERSAL_FORBIDDEN,
)
from .text import (
    _SUPPORT_SIGNAL_STOPWORDS,
    _get_required_cue_eval_aliases,
    _support_signal_hit,
)


class StyleEnforcer:
    """Generates aggressive style enforcement blocks for LLM prompts.

    Creates FORBIDDEN WORDS, REQUIRED REPLACEMENTS, and EXAMPLE TRANSFORMATIONS
    dynamically based on the selected style text.
    """

    def __init__(self):
        self._category_cache: Dict[str, str] = {}
        self._policy_cache: Dict[str, Dict[str, Any]] = {}

    def detect_category(self, style_text: str) -> str:
        """Detect which style category the style text belongs to."""
        return detect_style_category(style_text, self._category_cache)

    def get_forbidden_words(self, style_text: str, style_key: str = "") -> List[str]:
        """Get forbidden words list for the detected style category."""
        category = self.detect_category(style_text)
        forbidden = list(UNIVERSAL_FORBIDDEN)
        style_lower = (style_text or "").lower()
        style_rules = get_style_specific_rules(style_text, style_key)

        if category in CATEGORY_FORBIDDEN:
            cat_forbidden = CATEGORY_FORBIDDEN[category]
            if isinstance(cat_forbidden, list):
                forbidden.extend(cat_forbidden)
            elif isinstance(cat_forbidden, dict):
                forbidden.extend(cat_forbidden.keys())

        for rule in style_rules:
            forbidden.extend(rule.get("forbidden", []))

        explicitly_allowed = {
            token
            for token in [
                "latex",
                "pvc",
                "fetish",
                "lingerie",
                "bondage",
                "fashion editorial",
                "editorial glamour",
            ]
            if token in style_lower
        }

        forbidden = [word for word in forbidden if word not in explicitly_allowed]
        return list(set(forbidden))  # unique

    def get_replacements(self, style_text: str) -> Dict[str, str]:
        """Get word replacement dictionary for the detected style."""
        category = self.detect_category(style_text)

        if category in CATEGORY_REPLACEMENTS:
            replacements = CATEGORY_REPLACEMENTS[category]
            if isinstance(replacements, dict):
                return replacements

        return {}

    def get_example_transformations(self, style_text: str) -> List[str]:
        """Get example transformation strings for the detected style."""
        category = self.detect_category(style_text)

        if category in CATEGORY_EXAMPLES:
            return CATEGORY_EXAMPLES[category]

        return []

    def get_required_cues(self, style_text: str, style_key: str = "") -> List[str]:
        """Get mandatory style cues that must survive into the final output."""
        category = self.detect_category(style_text)
        cues = list(CATEGORY_REQUIRED_CUES.get(category, []))
        for rule in get_style_specific_rules(style_text, style_key):
            cues.extend(rule.get("required_cues", []))
        return list(dict.fromkeys(cues))

    def get_priority_rule(self, style_text: str) -> str:
        """Return the style hierarchy for the detected category."""
        category = self.detect_category(style_text)
        return CATEGORY_PRIORITY_RULES.get(category, "")

    def get_drift_targets(self, style_text: str, style_key: str = "") -> List[str]:
        """Return the neighbor aesthetics this style must actively suppress."""
        category = self.detect_category(style_text)
        targets = list(CATEGORY_DRIFT_TARGETS.get(category, []))
        for rule in get_style_specific_rules(style_text, style_key):
            targets.extend(rule.get("drift_targets", []))
        return list(dict.fromkeys(targets))

    def get_output_obligation(self, style_text: str, style_key: str = "") -> str:
        """Return the required result shape for the detected category."""
        category = self.detect_category(style_text)
        base = CATEGORY_OUTPUT_OBLIGATIONS.get(category, "")
        extras = [rule.get("output_obligation", "") for rule in get_style_specific_rules(style_text, style_key)]
        extras = [extra for extra in extras if extra]
        if extras and base:
            return base + " " + " ".join(extras)
        if extras:
            return " ".join(extras)
        return base

    def summarize_style_text(
        self,
        style_text: str,
        *,
        max_cues: int = 6,
        max_words_per_cue: int = 8,
    ) -> str:
        """Compress verbose preset text into a short cue summary for prompt assembly."""
        normalized = re.sub(r"\s+", " ", str(style_text or "")).strip(" ,.;:-")
        if not normalized:
            return ""
        if len(normalized) <= 120 and normalized.count(",") <= max_cues:
            return normalized

        raw_parts = re.split(r"[;,\.]\s*", normalized)
        cues: List[str] = []
        seen = set()
        for part in raw_parts:
            cue = re.sub(r"\s+", " ", (part or "")).strip(" ,.;:-")
            if not cue:
                continue
            words = cue.split()
            if len(words) > max_words_per_cue:
                cue = " ".join(words[:max_words_per_cue]).rstrip(" ,.;:-")
            key = cue.lower()
            if key in seen:
                continue
            seen.add(key)
            cues.append(cue)
            if len(cues) >= max_cues:
                break

        return ", ".join(cues) if cues else normalized

    def get_preset_profile(self, style_text: str, style_key: str = "") -> Dict[str, Any]:
        rules = get_style_specific_rules(style_text, style_key)
        if not rules:
            return {}
        profile: Dict[str, Any] = {}
        for field in ("required_cues", "forbidden", "drift_targets", "support_signals", "contradiction_signals"):
            merged: List[str] = []
            for rule in rules:
                merged.extend(rule.get(field, []))
            if merged:
                profile[field] = list(dict.fromkeys(merged))
        for field in (
            "transform",
            "output_obligation",
            "fallback_behavior",
            "weak_mode_contract",
            "blocked_mode_contract",
            "default_support_mode",
            "no_signal_mode",
        ):
            merged_values = [rule.get(field, "").strip() for rule in rules if rule.get(field)]
            if merged_values:
                profile[field] = merged_values[0] if len(set(merged_values)) == 1 else " ".join(merged_values)
        merged_thresholds: Dict[str, int] = {}
        for rule in rules:
            for key, value in (rule.get("support_thresholds") or {}).items():
                merged_thresholds[key] = max(int(value), merged_thresholds.get(key, 0))
        if merged_thresholds:
            profile["support_thresholds"] = merged_thresholds
        return profile

    def analyze_preset_support(self, style_text: str, support_text: str = "", style_key: str = "") -> Dict[str, Any]:
        profile = self.get_preset_profile(style_text, style_key)
        if not profile:
            return {"mode": "", "hits": 0, "total": 0, "contradictions": 0}

        support_signals = profile.get("support_signals", [])
        contradiction_signals = profile.get("contradiction_signals", [])
        thresholds = profile.get("support_thresholds", {})
        full_threshold = max(int(thresholds.get("full", 2)), 1)
        weak_threshold = max(int(thresholds.get("weak", 1)), 1)
        default_mode = profile.get("default_support_mode", "weak")
        no_signal_mode = profile.get("no_signal_mode", default_mode)
        normalized_support_text = support_text or ""

        if not normalized_support_text.strip():
            return {
                "mode": default_mode,
                "hits": 0,
                "total": len(support_signals),
                "contradictions": 0,
            }

        hits = sum(1 for signal in support_signals if _support_signal_hit(normalized_support_text, signal))
        contradictions = sum(
            1 for signal in contradiction_signals if _support_signal_hit(normalized_support_text, signal)
        )

        if contradictions > 0 and hits < weak_threshold:
            mode = "blocked"
        elif hits >= full_threshold:
            mode = "full"
        elif hits >= weak_threshold:
            mode = "weak"
        else:
            mode = no_signal_mode

        return {
            "mode": mode,
            "hits": hits,
            "total": len(support_signals),
            "contradictions": contradictions,
        }

    def get_preset_support_mode(self, style_text: str, support_text: str = "", style_key: str = "") -> str:
        return self.analyze_preset_support(style_text, support_text, style_key).get("mode", "")

    def get_style_policy(self, style_text: str) -> Dict[str, Any]:
        """Return runtime style policy for prompt assembly and logging."""
        return resolve_style_policy(style_text, self._policy_cache, self.detect_category)

    def get_evaluable_required_cues(self, cues: List[str]) -> List[str]:
        evaluable: List[str] = []
        for cue in cues or []:
            cue_text = str(cue or "").strip()
            if not cue_text:
                continue
            if _get_required_cue_eval_aliases(cue_text):
                evaluable.append(cue_text)
                continue
            if any(sep in cue_text for sep in [",", ";", " or ", " and/or ", "/"]):
                continue
            token_count = len(
                [
                    token
                    for token in re.findall(r"[a-z0-9]+", cue_text.lower())
                    if token and token not in _SUPPORT_SIGNAL_STOPWORDS
                ]
            )
            if 0 < token_count <= 4:
                evaluable.append(cue_text)
        return evaluable

    def count_required_cue_hits(self, text: str, cues: List[str]) -> int:
        evaluable_cues = self.get_evaluable_required_cues(cues)
        if not text or not evaluable_cues:
            return 0

        hits = 0
        for cue in evaluable_cues:
            aliases = _get_required_cue_eval_aliases(cue)
            if aliases:
                if any(_support_signal_hit(text, alias) for alias in aliases):
                    hits += 1
                continue
            if _support_signal_hit(text, cue):
                hits += 1
        return hits

    def resolve_style_contract(
        self,
        style_text: str,
        style_key: str = "",
        support_text: str = "",
        *,
        support_mode: str = "",
    ) -> Dict[str, Any]:
        """Normalize all style steering into one runtime contract."""
        if not style_text or not style_text.strip():
            return {
                "style_applied": False,
                "category": "general",
                "style_identity": "",
                "allowed_transforms": "",
                "required_cues": [],
                "forbidden_drift": [],
                "output_obligation": "",
                "support_mode": "none",
                "support_active": False,
                "support_summary": "",
                "support_hits": 0,
                "support_total": 0,
                "support_contradictions": 0,
                "camera_override_allowed": False,
                "camera_override_profile": None,
                "camera_override_contract": "",
            }

        policy = self.get_style_policy(style_text)
        profile = self.get_preset_profile(style_text, style_key)
        required_cues = self.get_required_cues(style_text, style_key)
        drift_targets = self.get_drift_targets(style_text, style_key)
        forbidden = self.get_forbidden_words(style_text, style_key)
        output_obligation = self.get_output_obligation(style_text, style_key).strip()
        priority_rule = self.get_priority_rule(style_text).strip()

        analyzed_support = {
            "mode": "",
            "hits": 0,
            "total": 0,
            "contradictions": 0,
        }
        support_active = bool(profile) and bool((support_text or "").strip())
        if profile:
            analyzed_support = self.analyze_preset_support(style_text, support_text, style_key)
        resolved_support_mode = ""
        if profile:
            if support_active:
                resolved_support_mode = support_mode or analyzed_support.get("mode", "")
            else:
                resolved_support_mode = "inert"
        support_summary = ""
        if profile and resolved_support_mode and resolved_support_mode != "inert":
            support_summary = (
                f"Preset support mode: {resolved_support_mode}. "
                f"Signals={analyzed_support.get('hits', 0)}/{analyzed_support.get('total', 0)}, "
                f"contradictions={analyzed_support.get('contradictions', 0)}."
            )
        elif profile and resolved_support_mode == "inert":
            support_summary = "Preset support is inert in this pass because no locked support description is available."

        allowed_transform_parts: List[str] = [
            "Rename visible render, materials, atmosphere, and generation density through the selected style while preserving locked Base Prompt truth."
        ]
        profile_transform = (profile.get("transform") or "").strip()
        if profile_transform:
            allowed_transform_parts.append(profile_transform)
        if priority_rule:
            allowed_transform_parts.append(f"Priority order: {priority_rule}.")
        if policy["camera_override_allowed"] and policy["camera_override_contract"]:
            allowed_transform_parts.append(
                "Camera override may change only framing, composition, and lens wording in the final generation layer."
            )

        style_identity = output_obligation
        if not style_identity:
            if style_key:
                style_identity = (
                    f"Make the selected preset style '{style_key}' visibly recognizable in the final output."
                )
            else:
                style_identity = f"Make the {policy['category']} style visibly recognizable in the final output."

        return {
            "style_applied": True,
            "category": policy["category"],
            "style_identity": style_identity,
            "allowed_transforms": " ".join(part.strip() for part in allowed_transform_parts if part and part.strip()),
            "required_cues": required_cues[:6],
            "forbidden_drift": list(dict.fromkeys((drift_targets or []) + (forbidden or [])))[:12],
            "output_obligation": output_obligation,
            "support_mode": resolved_support_mode or "none",
            "support_active": support_active,
            "support_summary": support_summary,
            "support_hits": analyzed_support.get("hits", 0),
            "support_total": analyzed_support.get("total", 0),
            "support_contradictions": analyzed_support.get("contradictions", 0),
            "camera_override_allowed": policy["camera_override_allowed"],
            "camera_override_profile": policy["camera_override_profile"],
            "camera_override_contract": policy["camera_override_contract"],
        }

    def build_enforcement_block(self, style_text: str, style_key: str = "") -> str:
        """Build the complete enforcement block for the prompt.

        Returns formatted string with FORBIDDEN WORDS, REQUIRED REPLACEMENTS,
        and EXAMPLE TRANSFORMATIONS.
        """
        if not style_text or not style_text.strip():
            return ""

        policy = self.get_style_policy(style_text)
        category = policy["category"]
        forbidden = self.get_forbidden_words(style_text, style_key)
        replacements = self.get_replacements(style_text)
        examples = self.get_example_transformations(style_text)
        required_cues = self.get_required_cues(style_text, style_key)
        priority_rule = self.get_priority_rule(style_text)
        drift_targets = self.get_drift_targets(style_text, style_key)
        output_obligation = self.get_output_obligation(style_text, style_key)

        contract_block = ""
        if required_cues or priority_rule or drift_targets or output_obligation:
            contract_lines = []
            if required_cues:
                contract_lines.append("- REQUIRED CUES: " + "; ".join(required_cues[:4]) + ".")
            if priority_rule:
                contract_lines.append(f"- PRIORITY ORDER: {priority_rule}.")
            if drift_targets:
                contract_lines.append("- BLOCK DRIFT TOWARD: " + ", ".join(drift_targets[:4]) + ".")
            if output_obligation:
                contract_lines.append(f"- OUTPUT OBLIGATION: {output_obligation}")
            contract_block = f"[STYLE CONTRACT — {category.upper()}]\n" + "\n".join(contract_lines) + "\n"

        # Build forbidden block
        forbidden_line = ""
        if forbidden:
            forbidden_str = ", ".join(sorted(forbidden)[:18])
            forbidden_line = f"- AVOID THIS VOCABULARY: {forbidden_str}.\n"

        # Build vocabulary block (positive language)
        vocabulary_line = ""
        if replacements:
            replacement_list = [f"{k} → {v}" for k, v in list(replacements.items())[:15]]
            replacements_str = ", ".join(replacement_list)
            vocabulary_line = f"- USE THIS VOCABULARY: {replacements_str}.\n"

        # Build examples block
        examples_block = ""
        if examples:
            examples_str = "\n".join(f"  - {ex}" for ex in examples[:6])
            examples_block = f"- EXAMPLE TRANSFORMATIONS:\n{examples_str}\n"

        # Build the full vocabulary block (positive language)
        if not (contract_block or forbidden_line or vocabulary_line or examples_block):
            return ""

        block = (
            f"\n"
            f"{contract_block}"
            f"[⚡ STYLE VOCABULARY — {category.upper()}]\n"
            f"Follow these guidelines for accurate style adaptation:\n"
            f"{forbidden_line}"
            f"{vocabulary_line}"
            f"{examples_block}\n"
            "Apply the category contract before aesthetic flourish.\n"
            "Required cues must survive into the final output as visibly recognizable style signals.\n"
            "When one cue conflicts with the locked core, keep the core and choose a different compatible cue.\n"
            f"Transform materials using the style-specific terms above.\n"
        )

        if policy["camera_override_allowed"]:
            block += (
                "Camera-critical style: let the selected camera/framing/composition wording lead the final generation prompt "
                "while preserving the locked core: main subject, count, action, pose, composition essence, focal anchor, relationships, and age readability.\n"
            )

        return block

    def build_compact_enforcement_block(self, style_text: str, style_key: str = "") -> str:
        """Build a compact hard-enforcement block for prompt assembly."""
        if not style_text or not style_text.strip():
            return ""

        category = self.detect_category(style_text)
        forbidden = sorted(self.get_forbidden_words(style_text, style_key))[:12]
        replacements = self.get_replacements(style_text)
        required_cues = self.get_required_cues(style_text, style_key)
        priority_rule = self.get_priority_rule(style_text)
        output_obligation = self.get_output_obligation(style_text, style_key)

        if not forbidden and not replacements and not required_cues and not output_obligation:
            return ""

        lines = ["[STYLE ENFORCEMENT]"]
        if required_cues:
            lines.append("- REQUIRED CUES: " + "; ".join(required_cues[:4]) + ".")
        if priority_rule:
            lines.append(f"- PRIORITY ORDER: {priority_rule}.")
        if forbidden:
            lines.append("- AVOID VOCABULARY: " + ", ".join(forbidden) + ".")
        if replacements:
            preferred = ", ".join(f"{k} → {v}" for k, v in list(replacements.items())[:10])
            lines.append("- PREFER VOCABULARY: " + preferred + ".")
        if output_obligation:
            lines.append(f"- OUTPUT OBLIGATION: {output_obligation}")
        if category in {"cyborg", "cyborg_art"}:
            lines.append(
                "- If explicit augmentation cues are weak or absent, keep the transhuman read in compatible material, interface, or techwear language rather than inventing unsupported implants."
            )
        lines.append(
            "- Make the selected style unmistakable early in the final wording through supported medium, finish, palette, atmosphere, and technical cues without changing locked Base Prompt facts."
        )
        return "\n".join(lines)

    def build_preset_steering_block(self, style_text: str, style_key: str = "", *, compact: bool = False) -> str:
        profile = self.get_preset_profile(style_text, style_key)
        if not profile:
            return ""

        lines: List[str] = []
        if profile.get("required_cues"):
            cues = "; ".join(profile["required_cues"][:4])
            lines.append(f"- PRESET REQUIRED CUES: {cues}.")
            lines.append(
                "- PRESET DOMINANCE: front-load 2-3 supported preset cues early so the preset is unmistakable in the first clause or early tags."
            )
        if profile.get("forbidden"):
            forbidden = ", ".join(profile["forbidden"][:8])
            lines.append(f"- PRESET FORBIDDEN DRIFT: {forbidden}.")
        if profile.get("fallback_behavior"):
            lines.append(f"- FRAME-WEAK FALLBACK: {profile['fallback_behavior']}")
        if profile.get("output_obligation"):
            lines.append(f"- PRESET OUTPUT OBLIGATION: {profile['output_obligation']}")

        if not lines:
            return ""

        header = "[PRESET STEERING]" if compact else "\n[PRESET STEERING]"
        return header + "\n" + "\n".join(lines) + "\n"

    def build_preset_support_block(
        self,
        style_text: str,
        style_key: str = "",
        *,
        support_text: str = "",
        support_mode: str = "",
        compact: bool = False,
    ) -> str:
        profile = self.get_preset_profile(style_text, style_key)
        if not profile:
            return ""

        analysis = self.analyze_preset_support(style_text, support_text, style_key)
        resolved_mode = support_mode or analysis.get("mode", "")
        if not resolved_mode:
            return ""

        mode_contract = ""
        if resolved_mode == "weak":
            mode_contract = profile.get("weak_mode_contract", "")
        elif resolved_mode == "blocked":
            mode_contract = profile.get("blocked_mode_contract", "")
        else:
            mode_contract = (
                "Apply the full preset-specific steering because the locked frame supports the required cues."
            )

        mode_label = {
            "full": "FULL PRESET MODE",
            "weak": "WEAK PRESET MODE",
            "blocked": "BLOCKED PRESET MODE",
        }.get(resolved_mode, resolved_mode.upper())

        support_lines = [f"- PRESET SUPPORT MODE: {mode_label}."]
        if analysis.get("total"):
            support_lines.append(
                f"- SUPPORT SIGNALS: {analysis.get('hits', 0)}/{analysis['total']} matched; contradictions={analysis.get('contradictions', 0)}."
            )
        support_lines.append(
            "- STYLE READ: keep surviving preset cues explicit and early instead of leaving the preset as weak background flavor."
        )
        steering_lines = [f"- {mode_contract}"] if mode_contract else []

        support_header = "[PRESET SUPPORT]" if compact else "\n[PRESET SUPPORT]"
        steering_header = "[PRESET STEERING MODE]" if compact else "\n[PRESET STEERING MODE]"
        block = support_header + "\n" + "\n".join(support_lines) + "\n"
        if steering_lines:
            block += steering_header + "\n" + "\n".join(steering_lines) + "\n"
        return block

    def get_transform_instructions(self, style_text: str, style_key: str = "") -> str:
        """Get style-specific transform rules (additional to the enforcement block)."""
        policy = self.get_style_policy(style_text)
        category = policy["category"]
        required_cues = self.get_required_cues(style_text, style_key)
        priority_rule = self.get_priority_rule(style_text)
        drift_targets = self.get_drift_targets(style_text, style_key)
        output_obligation = self.get_output_obligation(style_text, style_key)
        style_rules = get_style_specific_rules(style_text, style_key)

        base_rule = STYLE_TRANSFORM_RULES.get(category, "")
        contract_prefix_parts: List[str] = []
        if required_cues:
            contract_prefix_parts.append("REQUIRED STYLE CUES: " + "; ".join(required_cues[:4]) + ".")
        if priority_rule:
            contract_prefix_parts.append(f"STYLE PRIORITY: {priority_rule}.")
        if drift_targets:
            contract_prefix_parts.append("ANTI-DRIFT: actively suppress " + ", ".join(drift_targets[:4]) + ".")
        if output_obligation:
            contract_prefix_parts.append(f"OUTPUT OBLIGATION: {output_obligation}")

        contract_prefix = " ".join(contract_prefix_parts).strip()
        if not base_rule and not contract_prefix:
            return ""

        camera_rule = ""
        if policy["camera_override_allowed"] and policy["camera_override_contract"]:
            camera_rule = f" FINAL CAMERA OVERRIDE: {policy['camera_override_contract']}"

        guardrail = (
            " STYLE GUARDRAIL: Preserve locked core only: main subject, subject/object count, main action, main pose, composition essence, focal anchor, object relationships, and age readability. "
            "STYLE STRENGTH TARGET: strong_balanced with 2-4 compatible style cues in the final wording when supported. "
            "Everything outside the locked core may be restyled, including environment, materials, wardrobe/coverage, light, weather, era, props, anatomy visibility, and explicitness when appropriate."
        )
        style_specific_transform = " ".join(
            rule.get("transform", "").strip() for rule in style_rules if rule.get("transform")
        ).strip()
        joined = " ".join(part for part in [contract_prefix, base_rule, style_specific_transform] if part).strip()
        return joined + camera_rule + guardrail
