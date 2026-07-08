"""Preset-specific style support rules."""

from __future__ import annotations

from typing import Any, Dict, List

PRESET_STYLE_RULES: Dict[str, Dict[str, Any]] = {
    "⏱️ ЗАХВАТ/💫 Motion Blur": {
        "forbidden": ["parked product shot wording", "totally static clean frame", "invented chase action"],
        "required_cues": [
            "shutter behavior or exposure logic",
            "kinetic residue in highlights, reflections, dust, or background drag",
            "edge smear only where the frame supports real motion",
        ],
        "support_signals": [
            "visible motion",
            "wheel rotation",
            "body movement",
            "streaked light",
            "camera pan",
            "specular trails",
        ],
        "contradiction_signals": ["parked product shot", "static studio object", "catalog still life"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the subject physically static and move the kinetic feel into shutter timing, specular drag, reflections, dust, or background residue only."
        ),
        "blocked_mode_contract": (
            "Do not describe object-edge blur or chase action. Keep only minimal camera-timing language and preserve the clean static frame truth."
        ),
        "drift_targets": ["generic static catalog prose", "invented action spectacle"],
        "output_obligation": (
            "The final output must preserve truth while still sounding motion-aware through shutter logic, light streak residue, or justified edge drag."
        ),
        "transform": (
            "MOTION-BLUR GUARDRAIL: If the subject is static, keep the subject static and shift the kinetic read into shutter behavior, "
            "specular streaks, reflections, drifting dust, or background residue. Only describe wheel, limb, or body-edge blur when the frame visibly supports motion."
        ),
        "fallback_behavior": (
            "If the frame is static, degrade to kinetic camera language and localized streak residue instead of inventing motion."
        ),
    },
    "📐 МОДИФИКАТОРЫ/📹 GoPro POV Action": {
        "forbidden": ["telephoto compression", "tripod-still framing", "clean rectilinear lens language"],
        "required_cues": [
            "GoPro or action-camera perspective logic",
            "ultra-wide peripheral exaggeration or curved-edge distortion",
            "body-near immediacy or impact-adjacent framing without invented stunts",
        ],
        "support_signals": [
            "low angle",
            "wide-angle",
            "fisheye",
            "distortion",
            "close perspective",
            "action",
            "foreground pressure",
        ],
        "contradiction_signals": ["telephoto", "tripod portrait", "orthographic", "studio product shot"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the GoPro read in action-camera optics, peripheral stretch, and body-near framing only. Do not invent stunts, crashes, or violent motion if the frame is static."
        ),
        "blocked_mode_contract": (
            "Do not force helmet-cam action or synthetic impact blur onto a calm rectilinear frame. Keep only minimal ultra-wide action-camera wording."
        ),
        "drift_targets": ["generic fisheye skate-video shorthand", "telephoto cinematic prose", "tripod-clean framing"],
        "output_obligation": (
            "The final output must read as GoPro/action-camera capture, not a conventional wide photo or generic fisheye gimmick."
        ),
        "transform": (
            "GOPRO POV GUARDRAIL: Keep the lens body-near, ultra-wide, and impact-adjacent. Favor action-camera color, peripheral stretch, and close physical immediacy where the frame supports them. "
            "Do not invent stunts, collisions, or synthetic motion blur."
        ),
        "fallback_behavior": (
            "If the frame is calm, keep the style in lens behavior, body-near framing, and action-camera optics rather than invented movement."
        ),
    },
    "🏙️ СРЕДА/☔ Rain Monsoon Puddle": {
        "forbidden": ["sun-baked dry ground", "dusty drought street", "clean dry curb", "arid outdoor prose"],
        "required_cues": [
            "wet-ground or puddle reflection logic",
            "rain residue, ripple rings, or splash pattern on real surfaces",
            "storm-weighted atmosphere tied to asphalt, curb, or ground texture",
        ],
        "support_signals": [
            "wet ground",
            "wet asphalt",
            "puddle",
            "reflection",
            "rain",
            "soaked",
            "splash",
            "overcast",
            "curb",
        ],
        "contradiction_signals": ["dry dust", "sun-baked", "powder-dry", "indoor studio"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "If standing water is weak, keep the style in damp ground sheen, rain residue, overcast heaviness, and localized surface reflections only. Do not invent active rainfall or mirror-deep puddles."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the frame into hard rain or puddle-heavy asphalt if the ground clearly reads dry. Keep only minimal damp-weather trace when moisture evidence exists."
        ),
        "drift_targets": ["generic outdoor environment prose", "dry-ground rewrite", "weatherless location filler"],
        "output_obligation": (
            "The final output must read as rain-soaked ground reality with puddle or wet-surface logic, not generic outdoor environment prose."
        ),
        "transform": (
            "RAIN MONSOON PUDDLE GUARDRAIL: Treat wet ground, curb-edge splash residue, ripple logic, and soaked-surface reflections as the style anchors. "
            "Intensify only real moisture evidence; if rain is not visible, shift the style into damp asphalt sheen, reflected light, and storm-weighted air without inventing rainfall."
        ),
        "fallback_behavior": (
            "If obvious puddles are absent, degrade to damp-surface sheen, reflected highlights, and overcast storm weight instead of inventing rain impact."
        ),
    },
    "🕰️ РЕТРО/🪞 Daguerreotype": {
        "forbidden": ["film strip", "contact sheet", "paper print", "albumen print"],
        "required_cues": [
            "silvered copper plate object logic",
            "mirror sheen or mercurial highlight behavior",
            "long-exposure sitter stillness with formal studio discipline",
        ],
        "support_signals": [
            "formal portrait",
            "still sitter",
            "studio",
            "plate object",
            "mirror sheen",
            "archive",
        ],
        "contradiction_signals": ["film strip", "contact sheet", "triptych", "paper print"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the interpretation singular and plate-specific: mirror sheen, silvered surface, and archival stillness without turning the frame into film-strip or triptych logic."
        ),
        "blocked_mode_contract": (
            "Do not use strip, triptych, contact-sheet, or paper-print wording unless the source itself is explicitly multi-panel."
        ),
        "drift_targets": ["contact-sheet shorthand", "generic sepia analog prose", "paper-print logic"],
        "output_obligation": (
            "The final output must read as a daguerreotype plate object, not a generic vintage strip, paper print, or contact sheet."
        ),
        "transform": (
            "DAGUERREOTYPE GUARDRAIL: Keep this process plate-specific. Favor mirror sheen, silvered surface behavior, hand-cased archive object logic, "
            "and long-exposure stillness. Do not rewrite the frame as a film strip, contact sheet, or generic sepia paper print."
        ),
        "fallback_behavior": (
            "If the frame is multi-panel or strip-like, keep the plate-object interpretation dominant and mention multiple exposures only as source layout, never as film-strip logic."
        ),
    },
    "🧪 ЭФФЕКТЫ/🕯️ Candlelit Mood": {
        "forbidden": ["window light", "daylight fill", "ambient daylight", "sunlit room"],
        "required_cues": [
            "single candle or near-candle point-source logic",
            "rapid falloff into deep shadow pockets",
            "wax sheen or flame-edge glow on nearby surfaces",
        ],
        "support_signals": [
            "single warm source",
            "point light",
            "deep shadow",
            "localized glow",
            "reflective surface",
        ],
        "contradiction_signals": ["window light", "daylight", "sunlit", "broad ambient room"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Use only candle-like local practical warmth, fast falloff, and tight shadow pooling. Do not claim a literal candle if the frame reads as another light source."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the room as candle-driven if daylight or window light clearly dominates. Keep only minimal warm practical-light phrasing."
        ),
        "drift_targets": ["window-lit interior prose", "generic moody room language"],
        "output_obligation": (
            "The final output must clearly read as candle-driven illumination, not daylight or window-lit ambience."
        ),
        "transform": (
            "CANDLELIGHT GUARDRAIL: Keep the light source local, warm, and fragile. Anchor the scene in point-flame falloff, wax sheen, nearby glow, "
            "and deep shadow pockets. Do not let daylight, windows, or broad ambient fill replace the candle logic."
        ),
        "fallback_behavior": (
            "If no candle is visible, degrade to candle-like local practical warmth with tight falloff, never to daylight or broad window illumination."
        ),
    },
    "🗺️ СЦЕНЫ/🔦 Flashlight Beam": {
        "forbidden": ["city skyline", "urban sprawl", "panoramic city view", "general night city prose"],
        "required_cues": [
            "single hard directional beam geometry",
            "suspended dust or haze visible in the beam path",
            "hard falloff with surfaces revealed only where the beam lands",
        ],
        "support_signals": [
            "single beam",
            "flashlight",
            "hard light",
            "dust",
            "haze",
            "corridor",
            "storage",
            "localized illumination",
        ],
        "contradiction_signals": [
            "city skyline",
            "hillside settlement",
            "urban sprawl",
            "panoramic night city",
            "wide skyline",
        ],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "blocked",
        "weak_mode_contract": (
            "Reduce the style to a narrow hard-light cone or directional hotspot touching only local surfaces. Do not rewrite the whole frame into surveillance noir or a night city panorama."
        ),
        "blocked_mode_contract": (
            "Do not force flashlight-beam geometry onto the frame. Keep only minimal localized hard-light wording and suppress all city-night reinterpretation."
        ),
        "drift_targets": ["generic city-night rewrite", "wide urban panorama"],
        "output_obligation": (
            "The final output must read as beam-through-space navigation, not as a generic dark urban landscape."
        ),
        "transform": (
            "FLASHLIGHT-BEAM GUARDRAIL: Treat the beam itself as the focal structure. Keep the scene narrow, directional, and surface-revealing. "
            "Emphasize dust, haze, corridor/storage geometry, and hard falloff instead of broad skyline or panoramic night-city language."
        ),
        "fallback_behavior": (
            "If a true beam path is missing, degrade to localized hard-light navigation language instead of rewriting the whole image as a night-city panorama."
        ),
    },
    "🗺️ СЦЕНЫ/🏗️ Skyscraper Edge": {
        "forbidden": ["postcard skyline", "calm skyline panorama", "tourist cityscape"],
        "required_cues": [
            "ledge, parapet, rail, or edge geometry",
            "visible drop or depth pressure below the frame edge",
            "wind and glare grounded in exposed architecture",
        ],
        "support_signals": ["ledge", "parapet", "roof edge", "drop", "height", "exposure", "rail"],
        "contradiction_signals": ["postcard skyline", "tourist panorama", "riverfront postcard"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the liveliness in architectural exposure, parapet geometry, and depth pressure rather than inventing vertigo drama or human peril."
        ),
        "blocked_mode_contract": (
            "Do not force ledge peril or vertical drop if the frame is just a broad skyline or waterfront panorama."
        ),
        "drift_targets": ["generic skyline postcard", "detached city panorama"],
        "output_obligation": (
            "The final output must convey real edge exposure and architectural drop, not just a distant skyline view."
        ),
        "transform": (
            "SKYSCRAPER-EDGE GUARDRAIL: Keep the viewer at the exposed edge of architecture. Prioritize parapet, ledge, railing, wind pressure, "
            "and the vertical drop before generic skyline description."
        ),
        "fallback_behavior": (
            "If no person is present, move liveliness into architectural exposure, depth pressure, and wind against the built environment."
        ),
    },
    "🗺️ СЦЕНЫ/🛁 Rainy Window": {
        "forbidden": ["void", "abstract light mass", "gaseous form", "ethereal luminous mass"],
        "required_cues": [
            "wet glass as the foreground plane",
            "raindrops, rivulets, or condensation streaks on the pane",
            "soft interior reflections with blurred exterior shapes beyond the glass",
        ],
        "support_signals": [
            "window",
            "glass",
            "pane",
            "raindrops",
            "condensation",
            "reflections",
            "wet surface",
        ],
        "contradiction_signals": [
            "abstract light mass",
            "void",
            "gaseous form",
            "amorphous light",
            "floating luminous mass",
        ],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "blocked",
        "weak_mode_contract": (
            "Only use localized wet-glass phrasing, moisture on a foreground surface, and soft reflected highlights. Keep the scene physically grounded and do not force a full weather-window rewrite."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the frame as a rainy window at all unless real glass/surface separation is supported. Suppress all abstract glow and void language completely."
        ),
        "drift_targets": ["abstract luminous mass", "void imagery", "gaseous light-form language"],
        "output_obligation": (
            "The final output must keep the wet window as a physical foreground surface with interior/exterior separation, never an abstract glowing shape."
        ),
        "transform": (
            "RAINY-WINDOW GUARDRAIL: Treat the glass pane as a tactile foreground surface. Keep raindrops, rivulets, condensation, interior reflections, "
            "and blurred exterior depth. Never collapse the frame into abstract light, void imagery, or gaseous luminous form language."
        ),
        "fallback_behavior": (
            "If the frame lacks readable glass or spatial separation, degrade to weak weather-glass phrasing and never to a floating luminous mass."
        ),
    },
    "🦾 КИБЕРПАНК/📱 Sleek White Android": {
        "forbidden": ["plain human glamour", "generic editorial fashion", "latex fetish glamour", "lingerie shorthand"],
        "required_cues": [
            "white polymer shell or synthetic dermis boundary",
            "ocular hardware or luminous eye-tech cue",
            "mandibular/facial seam logic",
            "neck service ports or wrist actuator precision",
        ],
        "support_signals": [
            "white polymer",
            "synthetic dermis",
            "ocular hardware",
            "service ports",
            "mandibular panel seams",
            "wrist actuators",
        ],
        "contradiction_signals": ["plain human glamour", "fashion editorial", "latex bodysuit", "lingerie"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the android read in white polymer/synthetic-dermis surface logic, ocular hardware, seam architecture, and sterile corpo light without inventing extra implants that the frame does not show."
        ),
        "blocked_mode_contract": (
            "Do not force a full android rewrite onto a plainly organic frame. Keep only compatible premium cyberware/material vocabulary and suppress fetish/editorial drift."
        ),
        "drift_targets": ["plain human glamour", "generic editorial fashion", "latex fetish shorthand"],
        "output_obligation": (
            "When android augmentation cues are visible, the final output must foreground white-shell / synthetic-dermis boundaries, ocular hardware, seam logic, or service-port precision rather than generic glamour prose."
        ),
        "transform": (
            "ANDROID GUARDRAIL: Keep the read premium, clinical, and transhuman. Favor white polymer shell, synthetic dermis boundaries, ocular hardware, panel seams, service ports, and actuator precision only where the frame supports them. "
            "If the frame is weaker, keep the android identity in material language and sterile corpo light rather than inventing implants."
        ),
        "fallback_behavior": (
            "If explicit android hardware is weak, keep the preset in premium polymer, sterile clinic/showroom light, and restrained transhuman material language instead of inventing new prosthetics."
        ),
    },
    "🦾 КИБЕРПАНК/🏢 Corpo-Cyborg": {
        "forbidden": [
            "plain fantasy glamour",
            "generic editorial fashion",
            "latex fetish glamour",
            "lingerie shorthand",
        ],
        "required_cues": [
            "ocular implant or gold-trimmed eye-tech cue",
            "neck ports or clavicle plating",
            "subdermal conduit or ceramic facial seam cue",
            "executive techwear or corpo cyberware hierarchy",
        ],
        "support_signals": [
            "ocular implants",
            "neck ports",
            "clavicle plating",
            "data conduits",
            "facial seams",
            "executive techwear",
        ],
        "contradiction_signals": ["plain fantasy costume", "fashion editorial", "latex bodysuit", "lingerie"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the corpo-cyborg read in ocular/neck/clavicle interface language, ceramic seam logic, executive techwear, and premium corporate cyberware mood without inventing unsupported implants."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the frame as explicit body-hardware spectacle when the image reads plainly organic. Keep only compatible corpo-techwear, material, and atmosphere language while suppressing fashion/fetish drift."
        ),
        "drift_targets": ["plain fantasy glamour", "generic editorial fashion", "latex fetish shorthand"],
        "output_obligation": (
            "When corpo-cyborg augmentation cues are visible, the final output must foreground ocular/neck/clavicle integration, seam logic, or executive cyberware dominance rather than generic luxury-fantasy prose."
        ),
        "transform": (
            "CORPO-CYBORG GUARDRAIL: Favor ocular implants, surgical neck ports, clavicle plating, subdermal conduit logic, ceramic facial seams, and executive techwear only when the frame supports them. "
            "If augmentation is weaker, keep the style in premium corporate cyberware language, technical garments, and cold boardroom/clinic light rather than inventing body hardware."
        ),
        "fallback_behavior": (
            "If explicit body-tech cues are weak, keep the preset in executive techwear, premium cyberware material language, and cold corporate light instead of forcing invented implants."
        ),
    },
    "🦾 КИБЕРПАНК/🤖 Chrome Cyborg Hyperrealism": {
        "forbidden": ["plain human portrait", "generic robot", "soft glamour retouch", "plastic cosplay armor"],
        "required_cues": [
            "mirror chrome or polished metal body surface",
            "exposed mechanical joints or synthetic seam logic",
            "hard specular highlights and cold rim light",
            "precision engineering detail rather than generic neon",
        ],
        "support_signals": ["chrome", "metal body", "mechanical joints", "synthetic seams", "specular", "robotics"],
        "contradiction_signals": ["plain human", "cotton outfit", "soft boudoir", "natural skin only"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the chrome-cyborg read in reflective material, seam, joint, and rim-light language without inventing unsupported full-body robot anatomy."
        ),
        "blocked_mode_contract": (
            "Do not turn a plainly organic subject into a full chrome robot. Preserve the base subject and keep only compatible reflective cybernetic finish cues."
        ),
        "drift_targets": ["generic cyberpunk neon", "plain glamour portrait", "plastic cosplay armor"],
        "output_obligation": (
            "The final output must read as chrome cyborg hyperrealism through polished metal, synthetic seams, mechanical joints, and specular engineering detail."
        ),
        "transform": (
            "CHROME CYBORG GUARDRAIL: Front-load chrome surface physics, reflective plating, synthetic seam logic, mechanical joints, and cold rim highlights. "
            "Do not collapse into generic neon cyberpunk or soft glamour retouching."
        ),
        "fallback_behavior": (
            "If cyborg hardware is weak, keep the style in chrome/specular material treatment and restrained interface details instead of adding new limbs or implants."
        ),
    },
    "🦾 КИБЕРПАНК/🦾 Cybernetic Arm Concept Art": {
        "forbidden": ["smooth fashion arm", "plain glove", "generic robot arm", "weapon-only rewrite"],
        "required_cues": [
            "mechanical prosthetic arm construction",
            "layered armor plates, cables, servo motors, or hydraulics",
            "industrial design paneling and worn metal edges",
            "technical concept-art close-up readability",
        ],
        "support_signals": ["prosthetic", "arm", "cables", "servo", "hydraulic", "armor plates", "paneling"],
        "contradiction_signals": ["bare arm", "soft sleeve", "plain glove", "organic arm only"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the preset in industrial prosthetic detail, panel seams, cables, and actuator language only where the frame supports arm hardware."
        ),
        "blocked_mode_contract": (
            "Do not invent a cybernetic arm if the base prompt clearly has no visible limb or prosthetic anchor."
        ),
        "drift_targets": ["generic sci-fi armor", "weapon-only rewrite", "smooth fashion styling"],
        "output_obligation": (
            "The final output must foreground prosthetic arm engineering, not generic cyberpunk atmosphere."
        ),
        "transform": (
            "CYBERNETIC ARM GUARDRAIL: Treat the visible limb as an industrial design object with plates, cables, servos, hydraulics, and worn metal edges. Preserve the locked pose and subject inventory."
        ),
        "fallback_behavior": (
            "If arm hardware is not supported, degrade to technical paneling and small cybernetic interface cues rather than adding a new prosthetic limb."
        ),
    },
    "🦾 КИБЕРПАНК/🧠 Biomechanical Body Horror": {
        "forbidden": ["clean android glamour", "heroic superhero armor", "cute anime gloss", "random gore"],
        "required_cues": [
            "organic-machine fusion surface logic",
            "synthetic muscles, cables, translucent layers, or wet reflective textures",
            "cold medical sci-fi lighting",
            "unsettling anatomy without random gore invention",
        ],
        "support_signals": [
            "biomechanical",
            "organic machine",
            "synthetic muscles",
            "cables",
            "translucent skin",
            "wet reflective",
        ],
        "contradiction_signals": ["clean glamour", "pastel cute", "soft fashion", "plain human"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep body-horror pressure in surface fusion, cables, translucent layers, and medical coldness without adding unsupported wounds or organs."
        ),
        "blocked_mode_contract": (
            "Do not invent gore, exposed organs, or new anatomy. Preserve locked body truth and use only compatible biomechanical texture language."
        ),
        "drift_targets": ["generic monster horror", "clean android glamour", "random gore"],
        "output_obligation": (
            "The final output must read as cyber-organic biomechanical fusion, not generic horror or clean robot design."
        ),
        "transform": (
            "BIOMECHANICAL HORROR GUARDRAIL: Favor organic-machine seams, synthetic muscle texture, cables, translucent material layers, wet specular surfaces, and cold surgical light. No unsupported gore or anatomy changes."
        ),
        "fallback_behavior": (
            "If explicit body fusion is weak, keep the mood in cold medical lighting, wet synthetic material, and seam/cable hints rather than invented body horror."
        ),
    },
    "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Portrait": {
        "forbidden": ["plain beauty portrait", "human-only skin", "generic porcelain doll", "fashion glamour only"],
        "required_cues": [
            "humanlike android face with synthetic skin texture",
            "subtle facial seams or micro mechanical detail under skin",
            "glassy artificial eyes or uncanny expression",
            "futuristic lab ambience or cool cinematic light",
        ],
        "support_signals": [
            "synthetic skin",
            "android face",
            "facial seams",
            "mechanical details",
            "glassy eyes",
            "lab",
        ],
        "contradiction_signals": ["plain beauty", "natural skin only", "fashion editorial", "organic portrait"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep android identity subtle: synthetic skin, tiny seams, glassy eyes, and lab-like cool light without inventing major hardware."
        ),
        "blocked_mode_contract": (
            "Do not force visible robotics onto a purely human face. Keep compatible synthetic finish and controlled cool light only."
        ),
        "drift_targets": ["plain beauty portrait", "generic fashion portrait", "porcelain doll shorthand"],
        "output_obligation": (
            "The final output must preserve portrait truth while making synthetic skin and subtle android facial seams explicit."
        ),
        "transform": (
            "SYNTHETIC SKIN ANDROID GUARDRAIL: Favor subtle facial seams, artificial skin texture, glassy eyes, under-skin micro mechanisms, shallow depth, and cool lab ambience without changing facial identity."
        ),
        "fallback_behavior": (
            "If visible hardware is weak, keep the style in synthetic skin finish, uncanny eye glass, and controlled cool lighting."
        ),
    },
    "🦾 КИБЕРПАНК/🧬 Android Anatomy Cutaway": {
        "forbidden": ["generic robot portrait", "random gore", "medical gore", "flat diagram only"],
        "required_cues": [
            "partially exposed robotic internals",
            "synthetic body cross-section or layered engineering detail",
            "medical-mechanical hybrid visualization",
            "precise sci-fi anatomy study",
        ],
        "support_signals": [
            "cutaway",
            "exposed internals",
            "cross-section",
            "robotic internals",
            "mechanical anatomy",
            "engineering detail",
        ],
        "contradiction_signals": ["fully covered", "plain portrait", "organic anatomy only", "gore"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep cutaway language in visible panels, cross-section edges, and layered internals only where supported. No gore or new anatomy."
        ),
        "blocked_mode_contract": (
            "Do not invent a cutaway if the base prompt has no exposed structure. Keep only subtle technical diagram or panel-seam wording."
        ),
        "drift_targets": ["random gore", "generic robot portrait", "flat infographic"],
        "output_obligation": (
            "The final output must read as android anatomy/cutaway visualization with layered robotic internals when supported."
        ),
        "transform": (
            "ANDROID CUTAWAY GUARDRAIL: Use exposed robotic internals, synthetic cross-section structure, precise layered engineering, and medical-mechanical visualization. Preserve locked anatomy and never add gore."
        ),
        "fallback_behavior": (
            "If cutaway support is weak, use technical seam/cross-section hints and diagram-clean lighting rather than adding exposed internals."
        ),
    },
    "🦾 КИБЕРПАНК/🩻 X-Ray Skeleton Cyber Anime": {
        "forbidden": ["plain skeleton horror", "medical gore", "random bones", "generic x-ray filter"],
        "required_cues": [
            "x-ray or radiographic skeleton visibility",
            "cyber-anime anatomy with glowing bone or metal structure",
            "black background or sharp graphic contrast",
            "eerie elegant sci-fi silhouette",
        ],
        "support_signals": [
            "x-ray",
            "skeleton",
            "bone",
            "radiograph",
            "black background",
            "glowing anatomy",
            "metal anatomy",
        ],
        "contradiction_signals": ["soft pastel", "plain fashion", "full daylight", "no anatomy"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the x-ray read as transparent/radiographic contrast and glowing anatomical lines without adding unsupported bones or gore."
        ),
        "blocked_mode_contract": (
            "Do not invent skeleton visibility if the frame gives no anatomical or transparent support. Keep only high-contrast sci-fi radiograph mood."
        ),
        "drift_targets": ["generic skeleton horror", "medical gore", "flat x-ray filter"],
        "output_obligation": (
            "The final output must read as cyber-anime radiographic anatomy, not plain horror skeleton imagery."
        ),
        "transform": (
            "X-RAY CYBER ANIME GUARDRAIL: Favor radiographic contrast, visible bone/metal anatomy lines, black negative space, glowing skeletal structure, and elegant sci-fi silhouette. No gore."
        ),
        "fallback_behavior": (
            "If anatomy visibility is weak, keep the preset in radiographic lighting, black contrast, and subtle glowing internal-line cues."
        ),
    },
    "💥 КОМИКС/🕷️ Symbiote Venom Comic Ink": {
        "forbidden": ["soft anime romance", "generic monster render", "plain black bodysuit", "low-contrast gray mush"],
        "required_cues": [
            "glossy black organic symbiote surface",
            "heavy ink outlines and high contrast comic shading",
            "jagged silhouette or aggressive close crop",
            "splatter, teeth, or graphic action energy only when supported",
        ],
        "support_signals": ["symbiote", "glossy black", "ink outlines", "teeth", "splatter", "jagged", "comic shading"],
        "contradiction_signals": ["soft pastel", "romantic", "plain suit", "low contrast"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the style in black organic gloss, ink contour, and aggressive crop without inventing teeth, tongue, or violence when unsupported."
        ),
        "blocked_mode_contract": (
            "Do not rewrite a calm non-creature subject into Venom. Keep only compatible comic-ink contrast and black organic surface language."
        ),
        "drift_targets": ["generic monster render", "soft anime", "plain black suit"],
        "output_obligation": (
            "The final output must read as symbiote comic ink through glossy black organic material, hard outlines, and graphic contrast."
        ),
        "transform": (
            "SYMBIOTE COMIC GUARDRAIL: Front-load glossy black organic surface, heavy ink lines, high-contrast comic shading, jagged silhouette, and supported action crop. Do not invent creature anatomy unsupported by the base prompt."
        ),
        "fallback_behavior": (
            "If creature cues are weak, keep the preset as black organic comic-ink material and aggressive graphic contrast."
        ),
    },
    "💥 КОМИКС/⚡ Aggressive Comic Ink Splash": {
        "forbidden": ["soft painterly realism", "flat cute anime", "muted low contrast", "photoreal polish"],
        "required_cues": [
            "heavy black ink lines and bold outlines",
            "ink splatter, jagged contours, or motion-line energy",
            "extreme high contrast with deep blacks",
            "frame-breaking splash-art composition when supported",
        ],
        "support_signals": [
            "ink",
            "bold outlines",
            "splatter",
            "jagged",
            "motion lines",
            "high contrast",
            "splash art",
        ],
        "contradiction_signals": ["soft realistic", "pastel", "minimal", "muted"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep aggression in ink line weight, splatter texture, jagged silhouette, and contrast without inventing new impact events."
        ),
        "blocked_mode_contract": (
            "Do not add explosions or violence; use only graphic ink, outline, and high-contrast splash treatment."
        ),
        "drift_targets": ["soft painterly rendering", "generic anime gloss", "photoreal polish"],
        "output_obligation": (
            "The final output must visibly read as aggressive comic ink splash art, not soft illustration."
        ),
        "transform": (
            "AGGRESSIVE COMIC INK GUARDRAIL: Make bold outlines, black ink mass, splatter marks, jagged contours, and high contrast the dominant render language while preserving base action truth."
        ),
        "fallback_behavior": (
            "If the frame is calm, keep the splash energy in composition, line weight, and contrast instead of invented action."
        ),
    },
    "💥 КОМИКС/🧨 Dynamic Superhero Splash": {
        "forbidden": ["static catalog pose", "plain portrait", "soft fashion editorial", "generic fantasy hero"],
        "required_cues": [
            "heroic foreshortening or powerful silhouette",
            "comic-book impact and splash-art composition",
            "saturated highlights or dramatic rim light",
            "high-energy framing without inventing unsupported action",
        ],
        "support_signals": [
            "hero",
            "foreshortening",
            "dynamic pose",
            "rim light",
            "splash",
            "powerful silhouette",
            "action",
        ],
        "contradiction_signals": ["static catalog", "plain standing", "minimal portrait", "soft fashion"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep superhero energy in crop, foreshortening, rim light, and silhouette pressure, not invented explosions or powers."
        ),
        "blocked_mode_contract": (
            "Do not force superhero action onto a still subject. Use only splash-art composition and heroic graphic weighting."
        ),
        "drift_targets": ["static portrait", "generic fantasy hero", "soft editorial"],
        "output_obligation": (
            "The final output must read as dynamic superhero splash art through silhouette, foreshortening, rim light, and comic impact."
        ),
        "transform": (
            "SUPERHERO SPLASH GUARDRAIL: Bias composition toward bold silhouette, foreshortening, comic impact, saturated highlights, and rim-lit action framing while keeping the locked pose and visible action intact."
        ),
        "fallback_behavior": (
            "If action is weak, keep the dynamic read in heroic crop, silhouette, and lighting rather than inventing motion or powers."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/🕯️ Occult Black Magic Anime": {
        "forbidden": ["generic horror clutter", "random demons", "unrelated gore", "bright cheerful fantasy"],
        "required_cues": [
            "dark ritual symbol or occult design language",
            "candlelit shadows or black-and-gold palette",
            "mysterious anime figure or elegant mystical composition",
            "controlled magical energy without new story objects",
        ],
        "support_signals": ["occult", "ritual", "candle", "black and gold", "sigils", "mystical", "anime"],
        "contradiction_signals": ["cheerful daylight", "pastel cute", "plain realism", "random gore"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the occult read in palette, candle-shadow, sigil-like design, and controlled mystic atmosphere without inventing demons or props."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the scene into a ritual if no support exists. Keep only compatible black-gold atmosphere and anime mystical styling."
        ),
        "drift_targets": ["generic horror clutter", "random demons", "bright fantasy"],
        "output_obligation": (
            "The final output must read as occult black-magic anime through ritual graphic language, candle-shadow, and black-gold mystical atmosphere."
        ),
        "transform": (
            "OCCULT ANIME GUARDRAIL: Use black-gold palette, candlelit shadow, sigil-like graphic accents, elegant anime rendering, and controlled mystical energy. No unsupported demons, gore, or story props."
        ),
        "fallback_behavior": (
            "If ritual evidence is weak, keep the style in palette, shadow, and occult-inspired graphic atmosphere rather than invented ritual objects."
        ),
    },
    "💻 ЦИФРОВАЯ/🌃 Neon Cyberpunk City Rain": {
        "forbidden": ["daylight countryside", "dry clean street", "pastel cozy city", "flat office lighting"],
        "required_cues": [
            "rain-soaked street or wet reflective asphalt",
            "teal-magenta neon or holographic signage",
            "volumetric fog, haze, or lens bloom",
            "dense futuristic urban depth with noir contrast",
        ],
        "support_signals": ["rain", "wet asphalt", "neon", "holographic", "teal", "magenta", "fog", "city"],
        "contradiction_signals": ["daylight countryside", "dry desert", "pastel cozy", "minimal white studio"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep cyberpunk rain in reflected neon, wet-surface sheen, fog, and signage language without inventing new city objects or weather if unsupported."
        ),
        "blocked_mode_contract": (
            "Do not replace a non-urban frame with a rainy city. Keep only compatible neon color grade, wet reflection, or noir contrast cues."
        ),
        "drift_targets": ["generic cyberpunk", "dry clean city", "flat neon wallpaper"],
        "output_obligation": (
            "The final output must read as rain-soaked neon cyberpunk city atmosphere, not generic sci-fi color grading."
        ),
        "transform": (
            "NEON RAIN CITY GUARDRAIL: Anchor the style in wet asphalt reflections, teal-magenta signage, dark noir contrast, volumetric fog, and dense urban depth while preserving the locked scene."
        ),
        "fallback_behavior": (
            "If urban rain is weak, degrade to neon reflection, haze, and noir contrast rather than inventing new streets or weather."
        ),
    },
    "💻 ЦИФРОВАЯ/🛰️ Holographic Interface Portrait": {
        "forbidden": [
            "floating random icons",
            "busy unreadable UI clutter",
            "fantasy magic runes",
            "flat blue overlay",
        ],
        "required_cues": [
            "holographic UI overlays or facial scan graphics",
            "digital reflections on glasses, skin, or nearby surfaces",
            "crisp cyber data streams or interface typography effects",
            "close-up portrait focus with futuristic intelligence mood",
        ],
        "support_signals": ["holographic", "interface", "UI", "scan", "glasses", "data", "digital reflections"],
        "contradiction_signals": ["medieval magic", "plain portrait", "no screen", "rural daylight"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep holographic read in reflected interface light, scan lines, and sparse readable UI elements without cluttering the face."
        ),
        "blocked_mode_contract": (
            "Do not cover the frame in random UI. Use only minimal screen-light or facial-scan accents if the frame lacks interface support."
        ),
        "drift_targets": ["random sci-fi icons", "magic rune overlay", "unreadable HUD clutter"],
        "output_obligation": (
            "The final output must read as a controlled holographic interface portrait with scan/interface logic, not generic blue tech glow."
        ),
        "transform": (
            "HOLOGRAPHIC PORTRAIT GUARDRAIL: Use clean facial-scan graphics, readable UI panes, digital reflections, data-stream light, and close-up portrait focus. No random icon clutter or magic rune drift."
        ),
        "fallback_behavior": (
            "If interface support is weak, keep the style as subtle reflected UI light and scan-line accents rather than adding new screens."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/🕳️ Black Void High Contrast": {
        "forbidden": ["busy detailed background", "soft gray ambience", "pastel haze", "environment clutter"],
        "required_cues": [
            "deep black negative space",
            "isolated subject with razor-edged rim light",
            "stark silhouette readability",
            "minimal but dramatic high-contrast composition",
        ],
        "support_signals": ["black", "void", "negative space", "rim light", "silhouette", "high contrast", "isolated"],
        "contradiction_signals": ["busy background", "pastel", "soft daylight", "crowded environment"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Reduce background detail and push contrast, rim edge, and negative space without deleting visible subject facts."
        ),
        "blocked_mode_contract": (
            "Do not erase a clearly important environment. Use selective black falloff and silhouette control instead."
        ),
        "drift_targets": ["generic dark mood", "busy gothic background", "flat black fill"],
        "output_obligation": (
            "The final output must read as black-void high contrast through negative space, rim light, and silhouette clarity."
        ),
        "transform": (
            "BLACK VOID GUARDRAIL: Prioritize negative space, razor rim light, isolated subject silhouette, and severe contrast. Suppress background clutter without changing locked scene identity."
        ),
        "fallback_behavior": (
            "If the scene needs its environment, keep void treatment in falloff, edge light, and simplified dark background planes."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/💎 Prismatic Neon Reflections": {
        "forbidden": ["flat rainbow wash", "muddy colors", "matte dry surfaces", "generic neon glow"],
        "required_cues": [
            "rainbow-split specular highlights",
            "glossy or glass-like reflective surfaces",
            "iridescent refraction or prismatic light shards",
            "dark cyber backdrop with controlled high contrast",
        ],
        "support_signals": ["prismatic", "rainbow", "reflections", "glossy", "iridescent", "refraction", "neon"],
        "contradiction_signals": ["matte dry", "flat pastel", "muddy", "low contrast"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep prism effects on existing highlights, glass, metal, wet, or glossy surfaces. Do not paint the whole frame with rainbow haze."
        ),
        "blocked_mode_contract": (
            "Do not invent glass shards or neon objects. Use only subtle chromatic highlight splitting on supported reflective edges."
        ),
        "drift_targets": ["generic neon", "rainbow filter", "muddy color wash"],
        "output_obligation": (
            "The final output must show prismatic reflection physics through split highlights and glossy surfaces, not a generic neon rainbow filter."
        ),
        "transform": (
            "PRISMATIC NEON GUARDRAIL: Put rainbow splitting into specular highlights, glossy surfaces, glass edges, and refracted light shards. Preserve subject/object count and focal anchor, avoid flat all-over color wash."
        ),
        "fallback_behavior": (
            "If reflective surfaces are weak, use restrained chromatic edge highlights and neon color separation rather than invented glass or crystals."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/🌸 Bloom Soft Girl Aesthetic": {
        "forbidden": ["hard horror contrast", "gritty cyber grime", "sexualized glamour", "over-sharpened skin"],
        "required_cues": [
            "soft natural light and pastel highlights",
            "gentle hair strands or delicate facial rendering",
            "dreamy background with subtle sparkle or bloom",
            "emotional warmth with clean composition",
        ],
        "support_signals": ["soft", "pastel", "bloom", "gentle", "dreamy", "natural light", "sparkle"],
        "contradiction_signals": ["hard horror", "grime", "violent", "harsh red smoke"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep softness in light, bloom, pastel edge color, and gentle rendering without changing age, identity, or pose."
        ),
        "blocked_mode_contract": (
            "Do not sexualize or infantilize the subject. Keep only soft lighting, clean composition, and pastel glow."
        ),
        "drift_targets": ["generic beauty glamour", "childlike kawaii rewrite", "hard cyber grit"],
        "output_obligation": (
            "The final output must read as soft bloom aesthetic through light, pastel highlights, gentle detail, and warmth."
        ),
        "transform": (
            "BLOOM SOFT AESTHETIC GUARDRAIL: Use soft natural light, pastel bloom, gentle hair/facial detail, dreamy background, and clean warmth. Do not sexualize, infantilize, or replace the subject."
        ),
        "fallback_behavior": (
            "If the frame is not portrait-oriented, keep the style in soft bloom, pastel color, and gentle atmospheric light."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/🪞 Glossy Black Latex Cyber": {
        "forbidden": ["explicit nudity", "lingerie rewrite", "plain black clothing", "matte fabric"],
        "required_cues": [
            "glossy black reflective material",
            "body-contour highlight logic without explicit rewrite",
            "neon accents or dark editorial atmosphere",
            "polished high-contrast sci-fi fashion styling",
        ],
        "support_signals": ["glossy", "latex", "black", "reflective", "neon", "contour", "editorial"],
        "contradiction_signals": ["matte cotton", "loose wool", "daylight casual", "explicit nude"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep latex cyber in reflective black material, contour highlights, and neon editorial atmosphere without adding explicit content."
        ),
        "blocked_mode_contract": (
            "Do not replace visible clothing or anatomy with latex. Use only compatible glossy black surface and lighting language."
        ),
        "drift_targets": ["explicit fetish rewrite", "plain black outfit", "matte fabric prose"],
        "output_obligation": (
            "The final output must read as glossy black latex cyber through material reflections and contour highlights while staying scene-truthful."
        ),
        "transform": (
            "GLOSSY LATEX CYBER GUARDRAIL: Focus on reflective black material, neon edge accents, contour highlight physics, and dark editorial contrast. Do not add explicit nudity, lingerie, or unsupported outfit changes."
        ),
        "fallback_behavior": (
            "If latex material is unsupported, degrade to glossy black sci-fi material accents and high-contrast neon edge light."
        ),
    },
    "🔬 СТИЛИЗАЦИЯ/🔥 Red Smoke Dark Character": {
        "forbidden": [
            "bright cheerful palette",
            "clean daylight portrait",
            "random fire explosion",
            "generic horror gore",
        ],
        "required_cues": [
            "black-red palette with dense smoke plumes",
            "glowing ember atmosphere or red rim light",
            "ominous expression or dramatic face lighting when supported",
            "aggressive cinematic mood without invented violence",
        ],
        "support_signals": ["red", "smoke", "embers", "black", "ominous", "dramatic lighting", "rim light"],
        "contradiction_signals": ["cheerful", "pastel", "daylight", "clean white studio"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep red-smoke energy in palette, smoke, ember glow, and face-light drama without adding fire or violence."
        ),
        "blocked_mode_contract": (
            "Do not invent smoke plumes if unsupported; use black-red grading and localized red rim light only."
        ),
        "drift_targets": ["generic horror gore", "random explosion", "flat red filter"],
        "output_obligation": (
            "The final output must read as red-smoke dark character styling through black-red atmosphere, smoke, ember glow, and cinematic menace."
        ),
        "transform": (
            "RED SMOKE CHARACTER GUARDRAIL: Use black-red palette, dense smoke, ember glow, red rim/face lighting, and ominous cinematic mood. No invented fire blasts, violence, or gore."
        ),
        "fallback_behavior": (
            "If smoke is unsupported, keep the style in red rim light, ember haze, and black-red grading."
        ),
    },
    "💻 ЦИФРОВАЯ/🏮 Anime Style": {
        "forbidden": ["photoreal portrait", "generic glossy AI render", "muddy painterly blur", "western comic ink"],
        "required_cues": [
            "clean cel shading",
            "crisp contour lines",
            "expressive eye and face design",
            "polished key-animation finish",
        ],
        "support_signals": ["anime", "cel shading", "contour", "expressive eye", "key-animation"],
        "contradiction_signals": ["photoreal", "oil paint", "western comic", "muddy blur"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the anime read in cel-shaded edges, clean contours, expressive facial design, and controlled highlight shapes without changing identity or pose."
        ),
        "blocked_mode_contract": (
            "Do not force anime anatomy changes onto a factual frame; keep only compatible cel-shading and line-art wording."
        ),
        "drift_targets": ["generic glossy AI", "photorealism", "western comic ink"],
        "output_obligation": (
            "The final output must read as clean anime illustration, not generic colorful digital art."
        ),
        "transform": (
            "ANIME STYLE GUARDRAIL: Front-load cel shading, crisp contour lines, expressive eye/face design, controlled highlights, and key-animation polish. Avoid photoreal or generic AI gloss."
        ),
        "fallback_behavior": (
            "If character anatomy is not anime-like, keep the style in cel-shading, line clarity, and controlled highlights rather than changing subject structure."
        ),
    },
    "💻 ЦИФРОВАЯ/🌆 Concept Art": {
        "forbidden": [
            "random decorative clutter",
            "flat poster graphic",
            "generic pretty render",
            "unclear focal point",
        ],
        "required_cues": [
            "production concept-art keyframe",
            "design-first silhouette",
            "matte-painting depth layers",
            "clear focal anchor and value grouping",
        ],
        "support_signals": ["concept", "keyframe", "silhouette", "matte", "environment", "prop", "value grouping"],
        "contradiction_signals": ["flat icon", "random clutter", "no focal point", "catalog photo"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the concept-art read in silhouette design, value grouping, cinematic depth, and development-paintover finish without inventing worldbuilding props."
        ),
        "blocked_mode_contract": (
            "Do not replace the scene with an unrelated concept environment; preserve subject and environment identity."
        ),
        "drift_targets": ["generic digital painting", "decorative clutter", "flat poster"],
        "output_obligation": (
            "The final output must read as production concept art with design clarity and focal hierarchy."
        ),
        "transform": (
            "CONCEPT ART GUARDRAIL: Use design-first silhouettes, matte depth layers, readable prop/environment logic, cinematic atmosphere, and value grouping. No random decoration or scene replacement."
        ),
        "fallback_behavior": (
            "If environment detail is weak, keep concept-art language in silhouette, value structure, and cinematic development finish."
        ),
    },
    "💻 ЦИФРОВАЯ/🎮 Game UI": {
        "forbidden": [
            "random sci-fi icon clutter",
            "illegible HUD noise",
            "fantasy rune overlay",
            "flat spreadsheet layout",
        ],
        "required_cues": [
            "layered HUD modules",
            "readable icon hierarchy",
            "crisp vector panels",
            "diegetic interface or screen-space logic",
        ],
        "support_signals": ["HUD", "UI", "interface", "icon", "panel", "screen", "data"],
        "contradiction_signals": ["plain portrait", "no screen", "handmade paper", "medieval parchment"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep UI styling readable and sparse: panels, icons, data glow, and screen-space layout without covering the scene."
        ),
        "blocked_mode_contract": (
            "Do not add a full HUD if no interface support exists; use only minimal screen/design language."
        ),
        "drift_targets": ["random HUD clutter", "magic runes", "unreadable tech noise"],
        "output_obligation": "The final output must read as game UI design with clear interface hierarchy.",
        "transform": (
            "GAME UI GUARDRAIL: Favor layered HUD panels, readable icon hierarchy, vector-clean modules, emissive data accents, and player-readable information architecture. Avoid random icon clutter."
        ),
        "fallback_behavior": (
            "If interface support is weak, keep the style in clean layout, panel framing, and subtle UI light accents."
        ),
    },
    "💥 КОМИКС/💥 Action Comic": {
        "forbidden": ["photoreal polish", "soft anime blending", "static catalog pose", "muted gray realism"],
        "required_cues": [
            "heavy black ink outlines",
            "explosive foreshortening or motion lines",
            "saturated four-color palette",
            "splash-panel energy",
        ],
        "support_signals": ["comic", "ink", "foreshortening", "motion lines", "four-color", "splash"],
        "contradiction_signals": ["photoreal", "soft pastel", "static catalog", "muted"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep action-comic force in ink weight, shadow blocks, crop, and motion graphics without inventing new action."
        ),
        "blocked_mode_contract": (
            "Do not add explosions or superhero powers; use only comic rendering and composition pressure."
        ),
        "drift_targets": ["photorealism", "soft anime", "static portrait"],
        "output_obligation": (
            "The final output must read as western action comic art with ink, impact, and cover-ready readability."
        ),
        "transform": (
            "ACTION COMIC GUARDRAIL: Use heavy ink outlines, bold shadow blocks, four-color punch, foreshortening, motion lines, and splash-panel energy while preserving visible action truth."
        ),
        "fallback_behavior": (
            "If action is weak, keep comic energy in crop, line weight, and high-contrast shadow shapes."
        ),
    },
    "💥 КОМИКС/📜 Comic Cover": {
        "forbidden": ["multi-panel page clutter", "tiny unreadable subject", "photoreal poster", "random title text"],
        "required_cues": [
            "central high-impact figure grouping",
            "logo-ready negative space",
            "heavy inked silhouette",
            "single decisive cover composition",
        ],
        "support_signals": ["cover", "central", "silhouette", "title-space", "logo", "splash"],
        "contradiction_signals": ["contact sheet", "multi-panel", "small subject", "photoreal"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep cover logic in centralized composition, title-space, and iconic silhouette without adding actual text or logos."
        ),
        "blocked_mode_contract": (
            "Do not add fake titles or panels; use cover composition and negative-space discipline only."
        ),
        "drift_targets": ["panel clutter", "generic poster", "fake typography"],
        "output_obligation": (
            "The final output must read as a single comic cover image, not a page layout or photo poster."
        ),
        "transform": (
            "COMIC COVER GUARDRAIL: Center the focal grouping, reserve bold title-space, sharpen inked silhouette, and keep one iconic cover composition. Do not invent text."
        ),
        "fallback_behavior": "If cover layout is weak, use iconic crop, negative space, and collector-cover polish.",
    },
    "💥 КОМИКС/⚫ Блэк-энд-уайт": {
        "forbidden": ["soft grayscale wash", "full-color accents", "painterly blending", "photographic monochrome"],
        "required_cues": [
            "brutal black-and-white value separation",
            "ink-dominant silhouette design",
            "dry-brush black masses",
            "stark white cuts",
        ],
        "support_signals": ["black and white", "ink", "silhouette", "dry-brush", "high contrast", "stark"],
        "contradiction_signals": ["colorful", "soft grayscale", "photographic", "pastel"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the style in hard black/white value design and ink massing without soft grayscale blending."
        ),
        "blocked_mode_contract": (
            "Do not add color accents; preserve subject truth using only ink, negative space, and stark value cuts."
        ),
        "drift_targets": ["soft grayscale", "photographic monochrome", "color accent drift"],
        "output_obligation": "The final output must read as black-and-white comic ink with brutal value separation.",
        "transform": (
            "BLACK-AND-WHITE COMIC GUARDRAIL: Use ink-dominant silhouettes, carved black masses, dry-brush edges, and stark white cuts. No color or soft photographic grayscale."
        ),
        "fallback_behavior": (
            "If detail is dense, simplify into graphic black masses and white cuts while preserving focal identity."
        ),
    },
    "🦾 КИБЕРПАНК/🤖 Flesh-to-Steel Fusion": {
        "forbidden": ["clean chrome android", "pin-up gloss", "generic armor", "random gore"],
        "required_cues": [
            "scar-bound alloy plating",
            "titanium bone-integration cues",
            "mandibular armor seams",
            "invasive flesh-to-chrome transition",
        ],
        "support_signals": ["flesh", "steel", "alloy", "plating", "bone integration", "seams", "graft"],
        "contradiction_signals": ["clean android", "plain glamour", "soft fashion", "random gore"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep fusion in seam, graft, alloy, and transition language without inventing unsupported anatomy."
        ),
        "blocked_mode_contract": (
            "Do not add gore or replace a human body with full armor; use compatible flesh-metal boundary cues only."
        ),
        "drift_targets": ["clean robot", "generic armor", "pin-up gloss"],
        "output_obligation": (
            "The final output must foreground flesh-to-steel boundary logic rather than generic cyberpunk styling."
        ),
        "transform": (
            "FLESH-TO-STEEL GUARDRAIL: Favor scar-bound alloy, titanium integration, graft borders, mandibular seams, and invasive flesh-to-chrome transitions. No random gore or clean glamour drift."
        ),
        "fallback_behavior": (
            "If body hardware is weak, keep material transition cues subtle and supported at visible edges or seams."
        ),
    },
    "🦾 КИБЕРПАНК/💊 Neuro-Interface": {
        "forbidden": ["generic neon city", "plain headphones", "fashion techwear only", "magic aura"],
        "required_cues": [
            "cranial jack fields",
            "fiber-optic uplinks",
            "subdermal electrode routes",
            "spine-mounted or cerebral hardware dominance",
        ],
        "support_signals": ["neural", "cranial", "jack", "fiber-optic", "electrode", "spine", "interface"],
        "contradiction_signals": ["plain headphones", "no hardware", "magic", "organic portrait"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep neuro-interface read in ports, cables, electrodes, monitor glow, and cerebral hardware cues without adding unsupported headgear."
        ),
        "blocked_mode_contract": (
            "Do not invent cranial hardware; keep only subtle interface light and data-cable language if unsupported."
        ),
        "drift_targets": ["generic cyberpunk neon", "headphone portrait", "magic aura"],
        "output_obligation": "The final output must read as neural interface body-tech, not generic cyberpunk mood.",
        "transform": (
            "NEURO-INTERFACE GUARDRAIL: Front-load cranial jacks, fiber-optic uplinks, subdermal electrodes, spine hardware, blue monitor glow, and mind-machine geometry. Preserve subject truth."
        ),
        "fallback_behavior": (
            "If hardware support is weak, use restrained interface glow, subtle electrode routing, and data-port hints."
        ),
    },
    "🦾 КИБЕРПАНК/🩸 Bio-Corroded Tech": {
        "forbidden": ["clean sci-fi polish", "new gore wounds", "fashion cyber glamour", "sterile chrome"],
        "required_cues": [
            "oxidized prosthetic housings",
            "leaking seal lines",
            "infection-red rejection zones",
            "damaged implant mechanics",
        ],
        "support_signals": [
            "corroded",
            "oxidized",
            "prosthetic",
            "seal lines",
            "rejection",
            "damaged implant",
            "ripperdoc",
        ],
        "contradiction_signals": ["clean chrome", "sterile", "glamour", "new gore"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep decay in implant housings, seal lines, corrosion, and rejection-color zones without adding new wounds."
        ),
        "blocked_mode_contract": (
            "Do not invent damaged body parts; use only supported worn metal, corrosion, and failure-state surface cues."
        ),
        "drift_targets": ["clean android polish", "random gore", "fashion cyber glamour"],
        "output_obligation": (
            "The final output must read as failed/corroded cyberware rather than clean sci-fi or horror gore."
        ),
        "transform": (
            "BIO-CORRODED TECH GUARDRAIL: Use oxidized housings, leaking seals, red rejection zones, damaged implant mechanics, and wet corroded body-tech borders. No unsupported wounds or clean chrome glamour."
        ),
        "fallback_behavior": (
            "If body-tech damage is weak, keep corrosion as surface patina and failure-state material language."
        ),
    },
    "👾 ДИДЖИТАЛ/💧 Molten Liquid Chrome": {
        "forbidden": ["flat silver paint", "solid metal block", "generic chrome filter", "muddy reflections"],
        "required_cues": [
            "mercurial mirror reflectivity",
            "viscous surface simulation",
            "stretched specular bands",
            "fluid sculptural forms",
        ],
        "support_signals": ["liquid chrome", "molten", "mercurial", "specular", "fluid", "mirror", "viscous"],
        "contradiction_signals": ["matte", "flat", "dry stone", "painted silver"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep liquid chrome as reflective surface behavior on existing forms without turning all objects into metal."
        ),
        "blocked_mode_contract": (
            "Do not replace subject material wholesale; use restrained specular bands and fluid reflection accents."
        ),
        "drift_targets": ["generic chrome filter", "flat silver", "solid metal object"],
        "output_obligation": (
            "The final output must read as molten liquid chrome material physics, not a flat metallic filter."
        ),
        "transform": (
            "MOLTEN LIQUID CHROME GUARDRAIL: Use mercurial reflections, viscous flow, stretched specular bands, and fluid sculptural surfaces on supported forms. Preserve scene facts."
        ),
        "fallback_behavior": (
            "If chrome support is weak, keep subtle mirror bands and liquid highlights rather than material replacement."
        ),
    },
    "👾 ДИДЖИТАЛ/🖥️ Holographic UI": {
        "forbidden": ["random unreadable icons", "magic symbols", "opaque screen clutter", "flat blue glow"],
        "required_cues": [
            "layered translucent HUD panes",
            "cyan-magenta emissive graphics",
            "crisp data windows",
            "readable information hierarchy",
        ],
        "support_signals": ["holographic", "HUD", "UI", "translucent", "data", "cyan", "magenta"],
        "contradiction_signals": ["opaque clutter", "magic rune", "plain analog paper", "no screen"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep UI overlays translucent, readable, and surface-attached without covering the scene."
        ),
        "blocked_mode_contract": (
            "Do not add a full interface if unsupported; keep only minimal emissive screen or glass reflections."
        ),
        "drift_targets": ["random sci-fi icon clutter", "magic rune overlay", "flat blue tech glow"],
        "output_obligation": (
            "The final output must read as holographic UI design with readable layered interface logic."
        ),
        "transform": (
            "HOLOGRAPHIC UI GUARDRAIL: Use translucent HUD panes, cyan-magenta emissive data, crisp windows, glass reflections, and readable interface hierarchy. No random icon clutter."
        ),
        "fallback_behavior": (
            "If UI support is weak, use subtle interface light, pane edges, and data reflections only."
        ),
    },
    "👾 ДИДЖИТАЛ/🌅 Synthwave Art": {
        "forbidden": ["generic cyberpunk darkness", "muddy purple wash", "body-tech anatomy", "flat sunset photo"],
        "required_cues": [
            "sunset grid horizon",
            "magenta-cobalt neon spectrum",
            "laser-lit silhouettes",
            "1980s retro-future poster geometry",
        ],
        "support_signals": ["synthwave", "sunset", "grid", "magenta", "cobalt", "laser", "retro-future"],
        "contradiction_signals": ["daylight realism", "body-tech", "muddy", "gothic"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep synthwave identity in palette, horizon geometry, neon glow, and silhouette structure without adding new 80s props."
        ),
        "blocked_mode_contract": (
            "Do not replace the scene with a grid landscape; use compatible magenta-cobalt light and retro-future geometry only."
        ),
        "drift_targets": ["generic cyberpunk", "flat sunset", "body-tech anatomy"],
        "output_obligation": (
            "The final output must read as synthwave through horizon geometry, neon palette, and retro-future poster clarity."
        ),
        "transform": (
            "SYNTHWAVE GUARDRAIL: Favor sunset grid horizon, magenta-cobalt neon, laser silhouettes, chrome reflections, and 1980s poster geometry. Avoid generic dark cyberpunk or body-tech drift."
        ),
        "fallback_behavior": (
            "If horizon/grid support is weak, keep synthwave in palette, silhouette, and neon retro-future lighting."
        ),
    },
    "🎨 ЖИВОПИСЬ/🌸 Ghibli Inspired": {
        "forbidden": ["generic glossy anime", "photoreal render", "hard cyberpunk neon", "flat cartoon sticker"],
        "required_cues": [
            "watercolor-and-gouache layering",
            "storybook foliage shapes",
            "luminous air perspective",
            "warm cel-ready color separation",
        ],
        "support_signals": ["ghibli", "watercolor", "gouache", "storybook", "foliage", "luminous air", "cel-ready"],
        "contradiction_signals": ["photoreal", "glossy AI", "hard neon", "dark cyberpunk"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep Ghibli influence in hand-painted background texture, warm color separation, soft contours, and air perspective without copying characters or changing scene facts."
        ),
        "blocked_mode_contract": (
            "Do not force anime character redesign. Use only compatible painterly background, color, and atmosphere cues."
        ),
        "drift_targets": ["generic anime", "glossy AI render", "photoreal scene"],
        "output_obligation": (
            "The final output must read as hand-painted Ghibli-inspired background art, not generic anime gloss."
        ),
        "transform": (
            "GHIBLI INSPIRED GUARDRAIL: Favor watercolor/gouache layering, storybook foliage, luminous air, warm cel-ready color, soft contour, and tender world harmony. Preserve the locked scene."
        ),
        "fallback_behavior": (
            "If characters dominate, keep Ghibli influence in environment, color separation, and soft background painting rather than character redesign."
        ),
    },
    "🎨 ЖИВОПИСЬ/🎭 Baroque Drama": {
        "forbidden": ["generic cinematic noir", "flat dark filter", "modern studio glamour", "minimalism"],
        "required_cues": [
            "tenebrist light falloff",
            "focal illumination carved from shadow",
            "layered glaze depth",
            "velvet-black masses or gilded richness",
        ],
        "support_signals": ["baroque", "tenebrist", "chiaroscuro", "glaze", "gilded", "velvet", "candle"],
        "contradiction_signals": ["flat daylight", "minimal", "neon", "plain studio"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep baroque read in oil-paint light hierarchy, glaze depth, theatrical shadow, and ornament without inventing religious props."
        ),
        "blocked_mode_contract": (
            "Do not rewrite the scene as a chapel or altar. Use only compatible tenebrist light and painterly richness."
        ),
        "drift_targets": ["generic dark cinematic", "film noir", "flat black background"],
        "output_obligation": "The final output must read as baroque oil drama with painterly light hierarchy.",
        "transform": (
            "BAROQUE DRAMA GUARDRAIL: Use tenebrist falloff, focal illumination, layered glaze, velvet-black masses, gilded warmth, and theatrical gesture hierarchy without scene replacement."
        ),
        "fallback_behavior": (
            "If ornament is weak, keep baroque identity in light falloff, oil glaze, and theatrical value hierarchy."
        ),
    },
    "🎨 ЖИВОПИСЬ/🖌️ Sumi-e": {
        "forbidden": ["graphite sketch", "comic ink", "full-color painting", "busy background clutter"],
        "required_cues": [
            "restrained monochrome wash",
            "dry-brush fiber texture",
            "single-breath brush decisions",
            "disciplined empty space",
        ],
        "support_signals": ["sumi-e", "ink wash", "dry-brush", "monochrome", "empty space", "rice paper"],
        "contradiction_signals": ["full color", "comic", "graphite", "busy"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep sumi-e sparse: wash density, brush pressure, and negative space rather than detailed linework."
        ),
        "blocked_mode_contract": (
            "Do not turn it into pencil sketch or black-and-white comic; use ink wash restraint only."
        ),
        "drift_targets": ["graphite sketch", "comic ink", "detailed monochrome render"],
        "output_obligation": (
            "The final output must read as Japanese sumi-e brush painting with disciplined empty space."
        ),
        "transform": (
            "SUMI-E GUARDRAIL: Favor restrained monochrome wash, dry-brush fibers, rice-paper breathing room, single-breath strokes, and zen austerity. Avoid graphite or comic-ink drift."
        ),
        "fallback_behavior": (
            "If detail is high, simplify into wash fields, brush pressure, and negative space while preserving subject identity."
        ),
    },
    "✏️ ГРАФИКА/✒️ Pencil Sketch": {
        "forbidden": ["polished digital render", "inked comic outline", "oil painting", "smooth airbrush"],
        "required_cues": [
            "graphite pencil on toothy paper",
            "visible construction lines",
            "layered cross-hatching",
            "eraser-lift highlights or smudge grain",
        ],
        "support_signals": ["graphite", "pencil", "construction lines", "cross-hatching", "eraser", "paper tooth"],
        "contradiction_signals": ["digital render", "ink outline", "oil paint", "airbrush"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the sketch read in graphite grain, construction marks, cross-hatching, and paper texture without over-polishing."
        ),
        "blocked_mode_contract": "Do not convert to ink or paint; keep only compatible pencil study cues.",
        "drift_targets": ["digital render", "ink illustration", "finished painting"],
        "output_obligation": "The final output must read as graphite pencil sketch on paper, not a polished render.",
        "transform": (
            "PENCIL SKETCH GUARDRAIL: Use toothy paper, graphite grain, construction lines, cross-hatching, eraser lifts, and hand-drawn study energy. No inked comic or digital polish."
        ),
        "fallback_behavior": (
            "If the frame is clean, add pencil texture and construction logic while keeping the visible subject intact."
        ),
    },
    "✏️ ГРАФИКА/🖋️ Pen & Ink": {
        "forbidden": ["soft graphite", "watercolor wash", "painterly blending", "digital airbrush"],
        "required_cues": [
            "technical pen line weight",
            "disciplined crosshatch density",
            "nib-scratch texture",
            "diagram-clean perspective",
        ],
        "support_signals": ["pen", "ink", "crosshatch", "nib", "line weight", "diagram", "perspective"],
        "contradiction_signals": ["graphite", "watercolor", "airbrush", "soft blending"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep pen-and-ink precise through line weight, hatching, and black-white construction without soft tonal smudge."
        ),
        "blocked_mode_contract": "Do not turn into sketch graphite or watercolor; preserve crisp ink-line logic.",
        "drift_targets": ["pencil sketch", "watercolor", "digital painting"],
        "output_obligation": "The final output must read as technical pen-and-ink drawing with crisp line systems.",
        "transform": (
            "PEN AND INK GUARDRAIL: Favor crisp architectural line weight, crosshatch density, nib scratches, diagram-clean perspective, and high legibility from line systems. No soft smudge or painterly blend."
        ),
        "fallback_behavior": "If tonal shading dominates, translate it into hatching density and line hierarchy.",
    },
    "🏛️ ИСТОРИЯ/🖼️ Medieval Icon": {
        "forbidden": ["Renaissance perspective", "photoreal saint", "modern fantasy poster", "naturalistic depth"],
        "required_cues": [
            "gold ground",
            "frontal saintly stillness",
            "flattened sacred drapery",
            "halo geometry and devotional hierarchy",
        ],
        "support_signals": ["medieval", "icon", "gold ground", "halo", "tempera", "frontal", "devotional"],
        "contradiction_signals": ["renaissance", "photoreal", "deep perspective", "modern poster"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep icon logic in flat gold ground, halo geometry, frontal pose, and symbolic scale without inventing religious identity."
        ),
        "blocked_mode_contract": (
            "Do not add saints, halos, or religious symbols when unsupported; use only icon-panel surface and flattened hierarchy."
        ),
        "drift_targets": ["Renaissance realism", "photoreal portrait", "fantasy poster"],
        "output_obligation": "The final output must read as medieval icon panel language, not Renaissance naturalism.",
        "transform": (
            "MEDIEVAL ICON GUARDRAIL: Use gold ground, frontal stillness, flattened drapery, tempera panel surface, halo geometry when supported, and symbolic hierarchy over natural perspective."
        ),
        "fallback_behavior": (
            "If icon symbols are weak, keep the style in panel surface, gold field, and flattened sacred composition."
        ),
    },
    "🏛️ ИСТОРИЯ/🏰 Art Nouveau": {
        "forbidden": ["Art Deco geometry", "hard machine-age angles", "generic floral wallpaper", "photoreal fashion"],
        "required_cues": [
            "flowing whiplash curves",
            "botanical arabesques",
            "decorative border integration",
            "Mucha-like lithographic flatness",
        ],
        "support_signals": ["art nouveau", "whiplash", "botanical", "arabesque", "Mucha", "lithographic", "border"],
        "contradiction_signals": ["art deco", "stepped geometry", "machine-age", "hard angular"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep Art Nouveau in flowing contour, botanical border, and lithographic flatness without adding random flowers everywhere."
        ),
        "blocked_mode_contract": (
            "Do not replace subject or environment with ornament; integrate curves and borders around existing forms."
        ),
        "drift_targets": ["Art Deco", "generic floral", "photoreal fashion"],
        "output_obligation": "The final output must read as Art Nouveau ornament, not Art Deco geometry.",
        "transform": (
            "ART NOUVEAU GUARDRAIL: Use whiplash curves, botanical arabesques, elegant contour rhythm, decorative borders, and Mucha-like lithographic flatness. Avoid stepped machine-age Art Deco forms."
        ),
        "fallback_behavior": (
            "If ornament support is weak, use flowing contour rhythm and muted jewel palette rather than adding new motifs."
        ),
    },
    "🏛️ ИСТОРИЯ/🎭 Art Deco": {
        "forbidden": ["Art Nouveau floral curves", "organic whiplash lines", "rustic craft texture", "baroque clutter"],
        "required_cues": [
            "stepped geometry",
            "streamlined symmetry",
            "gold-and-onyx palette",
            "machine-age ornament precision",
        ],
        "support_signals": ["art deco", "stepped", "streamlined", "symmetry", "gold", "onyx", "machine-age"],
        "contradiction_signals": ["art nouveau", "floral curves", "rustic", "baroque"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep Deco identity in symmetry, stepped motifs, angular luxury, and gold-black palette without cluttering the scene."
        ),
        "blocked_mode_contract": (
            "Do not force architecture or props; use angular framing, palette, and streamlined ornament around locked content."
        ),
        "drift_targets": ["Art Nouveau", "baroque ornament", "rustic craft"],
        "output_obligation": (
            "The final output must read as Art Deco graphic discipline with stepped machine-age luxury."
        ),
        "transform": (
            "ART DECO GUARDRAIL: Favor stepped geometry, streamlined symmetry, gold-and-onyx palette, angular motifs, and machine-age poster luxury. Avoid floral Art Nouveau curves."
        ),
        "fallback_behavior": (
            "If Deco forms are weak, keep the style in angular framing, symmetric layout, and gold-black palette."
        ),
    },
    "🌑 НУАР/⛓️ Fetish Noir": {
        "forbidden": ["safe glamour", "plain fashion catalog", "comic goth", "non-consensual wording", "underage"],
        "required_cues": [
            "low-key hard light",
            "latex or leather specular response",
            "shadow-carved body planes",
            "consensual adult fetish-noir styling",
        ],
        "support_signals": ["fetish", "latex", "leather", "restraint", "low-key", "noir", "adult"],
        "contradiction_signals": ["safe glamour", "daylight catalog", "underage", "comic goth"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the style adult-only and photographic through low-key light, specular latex/leather, and consensual noir atmosphere without adding unsupported acts or props."
        ),
        "blocked_mode_contract": (
            "Do not force fetish staging when the Base Prompt does not support wardrobe, room, or material cues. Keep only compatible noir lighting and adult editorial restraint."
        ),
        "drift_targets": ["safe fashion catalog", "comic goth", "non-consensual thriller"],
        "output_obligation": (
            "The final output must read as consensual adult fetish-noir photography with tactile material and hard low-key light."
        ),
        "transform": (
            "FETISH NOIR PHOTO GUARDRAIL: Use adult-only framing, low-key hard light, latex/leather speculars, shadow-carved body planes, and consensual private-room noir context. No non-consensual, underage, or comic-goth drift."
        ),
        "fallback_behavior": (
            "If fetish material is weak, keep the style in adult noir lighting, hard shadows, and restrained tactile wardrobe language."
        ),
    },
    "🛀 ТЕКСТУРЫ/💦 Wet Skin": {
        "forbidden": ["dry matte skin", "generic sensual", "painted water effect", "plastic gloss"],
        "required_cues": [
            "water droplets tracking over skin",
            "shower or pool context",
            "glossy highlight rolloff",
            "pore-and-hair moisture detail",
        ],
        "support_signals": ["wet", "water droplets", "shower", "pool", "moisture", "glossy highlights"],
        "contradiction_signals": ["dry skin", "matte", "desert dust", "painted water"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep wet-skin style in droplet scale, moisture tracks, and specular highlight behavior without inventing a full shower or pool scene."
        ),
        "blocked_mode_contract": (
            "Do not add water context when unsupported; use only subtle skin gloss and localized moisture-like highlights."
        ),
        "drift_targets": ["generic sensual wording", "plastic gloss", "painted wet look"],
        "output_obligation": (
            "The final output must read as adult wet-skin photography through real droplet and highlight physics."
        ),
        "transform": (
            "WET SKIN PHOTO GUARDRAIL: Anchor the style in water droplets, glossy rolloff, pores/hair under moisture, and real shower/pool context when supported. Avoid generic sensual filler."
        ),
        "fallback_behavior": (
            "If water evidence is weak, degrade to localized damp sheen and realistic highlight rolloff."
        ),
    },
    "🛀 ТЕКСТУРЫ/🚿 Frosted Glass Shower": {
        "forbidden": [
            "clear explicit glass",
            "voyeur wording",
            "sharp full anatomy through glass",
            "dry transparent window",
        ],
        "required_cues": [
            "frosted glass privacy layer",
            "condensation and water rivulets",
            "diffused bathroom light",
            "silhouette only where glass truth supports it",
        ],
        "support_signals": ["frosted glass", "condensation", "rivulets", "shower", "diffused light", "silhouette"],
        "contradiction_signals": ["clear glass", "dry window", "sharp full detail", "outdoor street"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the figure softened behind condensation and frosted glass; do not sharpen body detail beyond what the glass layer supports."
        ),
        "blocked_mode_contract": (
            "Do not force shower-glass framing without glass or bathroom support. Use only diffused moisture-light language."
        ),
        "drift_targets": ["voyeur framing", "clear explicit glass", "generic wet look"],
        "output_obligation": (
            "The final output must read as frosted-glass shower photography with privacy-layer optics and moisture texture."
        ),
        "transform": (
            "FROSTED GLASS SHOWER GUARDRAIL: Use condensation, water rivulets, diffused bathroom light, and silhouette separation through frosted glass. Keep detail limited by the glass truth."
        ),
        "fallback_behavior": (
            "If glass support is weak, use diffused wet bathroom light and condensation cues without inventing a full glass pane."
        ),
    },
    "🏙️ ЛОКАЦИИ/☔ Neon Rain Cyberpunk": {
        "forbidden": ["generic sci-fi skyline", "dry street", "safe fashion editorial", "cartoon cyberpunk"],
        "required_cues": [
            "soaked clothing or skin",
            "colored signage reflections",
            "wet asphalt",
            "urban-night steam or magenta-cyan practical spill",
        ],
        "support_signals": ["neon", "rain", "wet asphalt", "soaked", "signage", "magenta", "cyan", "steam"],
        "contradiction_signals": ["dry street", "daylight", "rural", "cartoon"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep cyberpunk adult photo style in wet reflections, colored signage, soaked surfaces, and urban steam without replacing the scene with a skyline."
        ),
        "blocked_mode_contract": (
            "Do not add rain or cyberpunk city if unsupported; use only compatible neon color spill and wet-reflection language."
        ),
        "drift_targets": ["generic cyberpunk skyline", "safe fashion", "cartoon sci-fi"],
        "output_obligation": (
            "The final output must read as adult neon-rain cyberpunk photography grounded in wet urban surfaces."
        ),
        "transform": (
            "NEON RAIN NSFW PHOTO GUARDRAIL: Use adult photographic body presence, wet asphalt, soaked surfaces, magenta-cyan signage reflections, and urban steam. No generic sci-fi skyline rewrite."
        ),
        "fallback_behavior": "If rain is weak, keep neon spill, damp sheen, and urban-night photographic contrast.",
    },
    "🦾 КИБЕРПАНК/🌃 Neon Alley Exposure": {
        "forbidden": [
            "dry daylight street",
            "safe fashion editorial",
            "generic skyline",
            "cartoon cyberpunk",
            "non-consensual framing",
        ],
        "required_cues": [
            "adult cyberpunk nude street photography",
            "wet alley asphalt",
            "magenta-cyan signage spill",
            "exposed adult body truth",
        ],
        "support_signals": ["neon", "alley", "rain", "wet asphalt", "signage", "steam", "puddle", "street"],
        "contradiction_signals": ["daylight", "dry street", "rural", "clean studio", "cartoon"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the cyberpunk read in neon spill, damp alley reflections, steam, and adult photographic body presence without replacing the scene with a generic skyline."
        ),
        "blocked_mode_contract": (
            "Do not invent a neon alley if the Base truth conflicts; keep only compatible colored spill and explicit adult photo realism."
        ),
        "drift_targets": ["safe glamour editorial", "generic city skyline", "cartoon neon"],
        "output_obligation": (
            "The final output must read as explicit adult cyberpunk street photography grounded in wet alley surfaces and real neon light."
        ),
        "transform": (
            "NEON ALLEY NSFW PHOTO GUARDRAIL: Anchor in adult nude street photography, wet alley asphalt, magenta-cyan signage spill, steam, puddle reflections, and real night exposure. No safe fashion dilution or generic skyline rewrite."
        ),
        "fallback_behavior": (
            "If alley/rain support is weak, use neon spill, damp surface sheen, and adult photographic realism without inventing location props."
        ),
    },
    "🦾 КИБЕРПАНК/🤖 Chrome Implant Nude": {
        "forbidden": ["plastic robot toy", "illustration drift", "safe techwear", "generic chrome filter", "underage"],
        "required_cues": [
            "chrome prosthetic limbs",
            "real skin-to-metal contact",
            "visible adult anatomy",
            "hard specular photographic highlights",
        ],
        "support_signals": ["chrome", "implant", "prosthetic", "cybernetic", "metal", "skin", "studio", "rim light"],
        "contradiction_signals": ["no body tech", "soft fabric only", "cartoon", "child", "teen"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep chrome/body contrast, hard speculars, and explicit adult nude photography without adding unsupported robotics."
        ),
        "blocked_mode_contract": (
            "Do not add prosthetics or implants when unsupported; preserve adult photo realism and only use metallic light accents."
        ),
        "drift_targets": ["safe techwear", "robot toy aesthetic", "digital illustration drift"],
        "output_obligation": (
            "The final output must read as explicit adult cybernetic nude photography with real skin/metal material response."
        ),
        "transform": (
            "CHROME IMPLANT NUDE GUARDRAIL: Use chrome prosthetics, skin-to-metal contact, visible adult anatomy, hard specular highlights, and photographic studio realism. Avoid safe techwear and illustration drift."
        ),
        "fallback_behavior": (
            "If implant evidence is weak, reduce to chrome accessories, rim light, and adult photographic body truth without inventing prosthetics."
        ),
    },
    "🦾 КИБЕРПАНК/🧬 Synthetic Skin Android Nude": {
        "forbidden": [
            "anime android",
            "porcelain doll censorship",
            "safe fashion robot",
            "sexless anatomy",
            "childlike synthetic body",
        ],
        "required_cues": [
            "synthetic skin panels",
            "service ports or seam detail",
            "explicit adult android anatomy",
            "clean laboratory photographic light",
        ],
        "support_signals": ["android", "synthetic skin", "seams", "service ports", "lab", "ceramic", "silicone"],
        "contradiction_signals": ["organic-only portrait", "childlike", "cartoon", "outdoor nature"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep adult synthetic-skin photography in seam detail, lab light, silicone/ceramic surface response, and explicit adult anatomy without doll-like censorship."
        ),
        "blocked_mode_contract": (
            "Do not turn a normal person into an android if unsupported; keep only subtle synthetic surface and lab-light cues."
        ),
        "drift_targets": ["sexless mannequin", "safe robot fashion", "anime android"],
        "output_obligation": (
            "The final output must read as explicit adult synthetic-android nude photography, not safe mannequin styling."
        ),
        "transform": (
            "SYNTHETIC SKIN ANDROID NUDE GUARDRAIL: Emphasize synthetic skin panels, service-port seams, explicit adult anatomy, silicone/ceramic material response, and clean lab photo light. No sexless doll censorship."
        ),
        "fallback_behavior": (
            "If android evidence is weak, use subtle seam/synthetic-surface cues and adult photo realism without changing the subject identity."
        ),
    },
    "🦾 КИБЕРПАНК/🪩 Holographic Strip Club": {
        "forbidden": [
            "safe nightclub fashion",
            "empty stage",
            "generic concert lighting",
            "underage performer",
            "cartoon club",
        ],
        "required_cues": [
            "adult strip-club photography",
            "hologram stage spill",
            "glossy sweat and neon haze",
            "explicit nude dancer body visibility",
        ],
        "support_signals": ["club", "stage", "pole", "hologram", "smoke", "strobe", "neon", "dance"],
        "contradiction_signals": ["daylight", "office", "street only", "no stage", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep the style in adult club light, holographic spill, sweat sheen, and explicit performer body presence without inventing crowd or choreography."
        ),
        "blocked_mode_contract": (
            "Do not create a strip-club stage if unsupported; keep only compatible neon club light and adult photographic explicitness."
        ),
        "drift_targets": ["safe nightlife editorial", "generic concert", "cartoon club"],
        "output_obligation": (
            "The final output must read as explicit adult holographic strip-club photography with real stage-light physics."
        ),
        "transform": (
            "HOLOGRAPHIC STRIP CLUB GUARDRAIL: Use adult strip-club photography, hologram stage spill, glossy sweat, neon smoke haze, mirrored floor reflections, and explicit nude performer visibility. No safe nightclub fashion drift."
        ),
        "fallback_behavior": (
            "If stage support is weak, keep holographic color spill, nightclub haze, and adult photo realism without adding stage hardware."
        ),
    },
    "🦾 КИБЕРПАНК/🩺 Ripperdoc Aftercare": {
        "forbidden": [
            "gore horror",
            "cartoon surgery",
            "safe clinic fashion",
            "random blood",
            "non-consensual medical framing",
        ],
        "required_cues": [
            "ripperdoc clinic photography",
            "surgical chair or sterile sheets",
            "fresh cyberware seams",
            "adult clinical-erotic vulnerability",
        ],
        "support_signals": ["clinic", "surgical", "chair", "LED", "cyberware", "seams", "gloves", "sterile"],
        "contradiction_signals": ["outdoor nature", "bedroom only", "no medical cues", "gore spectacle"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep clinical cyber-erotic tension in sterile light, seams, chair/sheet surfaces, and adult vulnerability without gore spectacle."
        ),
        "blocked_mode_contract": (
            "Do not invent medical procedures or gore; use only clean LED clinical light and subtle cyberware recovery cues."
        ),
        "drift_targets": ["gore horror", "safe clinic fashion", "random surgery props"],
        "output_obligation": (
            "The final output must read as adult ripperdoc-clinic photography, clinical and explicit without horror-gore excess."
        ),
        "transform": (
            "RIPPERDOC AFTERCARE GUARDRAIL: Anchor in surgical chair surfaces, sterile sheets, medical LED panels, fresh cyberware seams, adult clinical-erotic vulnerability, and realistic clinic photo light. No gore-horror escalation."
        ),
        "fallback_behavior": (
            "If medical support is weak, keep sterile LED light and subtle cyberware seam language without inventing procedures."
        ),
    },
    "🦾 КИБЕРПАНК/⛓️ Cyber Latex Dungeon": {
        "forbidden": [
            "non-consensual framing",
            "safe fashion latex",
            "comic dungeon",
            "random torture props",
            "underage",
        ],
        "required_cues": [
            "adult cyber-latex dungeon photography",
            "black latex specular shine",
            "restraint hardware where supported",
            "neon edge light and explicit adult body tension",
        ],
        "support_signals": ["latex", "restraint", "hardware", "dungeon", "neon", "black", "fetish", "chains"],
        "contradiction_signals": ["cotton casual", "daylight beach", "no fetish cues", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep consensual adult fetish photography in latex shine, hardware, dark room geometry, and neon edge light without adding unsupported acts or props."
        ),
        "blocked_mode_contract": (
            "Do not add restraints or dungeon props if unsupported; use only black latex material response and adult neon fetish lighting."
        ),
        "drift_targets": ["safe latex fashion", "coercive wording", "comic kink fantasy"],
        "output_obligation": (
            "The final output must read as consensual explicit adult cyber-latex dungeon photography with real specular material physics."
        ),
        "transform": (
            "CYBER LATEX DUNGEON GUARDRAIL: Use consensual adult cyber-fetish photography, black latex shine, restraint hardware only when supported, neon edge light, explicit adult body tension, and dark room geometry. Avoid coercive wording."
        ),
        "fallback_behavior": (
            "If dungeon/restraint support is weak, keep latex speculars and neon fetish light without inventing restraints."
        ),
    },
    "🦾 КИБЕРПАНК/📹 Backroom Neon POV": {
        "forbidden": [
            "voyeur surveillance tone",
            "distant fashion shoot",
            "clean studio",
            "non-consensual framing",
            "generic neon room",
        ],
        "required_cues": [
            "adult cyberpunk POV photography",
            "handheld imperfect framing",
            "close consensual body proximity",
            "LED strip color cast",
        ],
        "support_signals": ["POV", "handheld", "backroom", "neon", "LED", "couch", "bedding", "close"],
        "contradiction_signals": ["tripod studio", "distant skyline", "public crowd", "surveillance"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep POV style intimate and consensual through handheld crop, close distance, LED color cast, and adult photographic explicitness without voyeur wording."
        ),
        "blocked_mode_contract": (
            "Do not force POV/backroom logic if unsupported; keep only handheld-neon intimacy and adult photo realism."
        ),
        "drift_targets": ["voyeur tone", "generic neon room", "clean fashion studio"],
        "output_obligation": (
            "The final output must read as explicit consensual adult cyberpunk POV photography, not surveillance or generic neon décor."
        ),
        "transform": (
            "BACKROOM NEON POV GUARDRAIL: Use consensual adult POV photography, handheld imperfect framing, close body proximity, LED strip color cast, rumpled synthetic surfaces, and explicit cyber intimacy. No voyeur surveillance tone."
        ),
        "fallback_behavior": (
            "If POV support is weak, use handheld immediacy and LED color cast without changing composition truth."
        ),
    },
    "🦾 КИБЕРПАНК/🚿 Wet Chrome Shower Pod": {
        "forbidden": [
            "dry studio glamour",
            "illustrated wet look",
            "impossible anatomy through steam",
            "generic bathroom",
            "underage",
        ],
        "required_cues": [
            "chrome shower-pod photography",
            "water-beaded nude skin",
            "condensation trails",
            "cyan LED strips and curved reflective walls",
        ],
        "support_signals": ["shower", "chrome", "water", "condensation", "steam", "LED", "reflective", "wet"],
        "contradiction_signals": ["dry room", "outdoor desert", "no water", "cartoon"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep explicit adult shower-pod style in wet skin, chrome reflections, condensation, steam-softened visibility, and cyan LED light without inventing unsupported anatomy detail."
        ),
        "blocked_mode_contract": (
            "Do not create a shower pod without water/bathroom support; use only wet highlight rolloff and chrome-cyan light cues."
        ),
        "drift_targets": ["dry glamour", "generic bathroom", "painted wet look"],
        "output_obligation": (
            "The final output must read as explicit adult chrome shower-pod photography with real water, steam, and reflective-surface physics."
        ),
        "transform": (
            "WET CHROME SHOWER POD GUARDRAIL: Anchor in curved chrome stall walls, water-beaded nude skin, condensation trails, steam-limited visibility, cyan LED strips, and realistic wet surface physics. Avoid dry glamour or painted wet-look drift."
        ),
        "fallback_behavior": (
            "If shower support is weak, keep localized wet sheen, chrome reflections, and cyan LED spill without inventing the pod."
        ),
    },
    "🏙️ ЛОКАЦИИ/🔧 Garage Oil & Chrome": {
        "forbidden": ["clean fashion studio", "generic warehouse", "cartoon mechanic", "oil invented on skin"],
        "required_cues": [
            "oil-slick reflections",
            "chrome part highlights",
            "leather or denim texture",
            "industrial workbench or garage surface evidence",
        ],
        "support_signals": ["garage", "oil", "chrome", "workbench", "metal", "denim", "leather", "shop light"],
        "contradiction_signals": ["clean studio", "bedroom", "beach", "no tools"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep garage style in real surfaces: chrome, oil-slick reflection, workbench texture, hard shop light, and adult mechanic-editorial mood."
        ),
        "blocked_mode_contract": (
            "Do not invent mechanic props or oil on the body; use only supported industrial material and lighting cues."
        ),
        "drift_targets": ["generic warehouse", "clean glamour studio", "cartoon mechanic"],
        "output_obligation": (
            "The final output must read as adult garage photography grounded in oil, chrome, workbench texture, and shop light."
        ),
        "transform": (
            "GARAGE OIL CHROME GUARDRAIL: Anchor in oil-slick reflections, chrome highlights, denim/leather texture, industrial workbench surfaces, grease residue, and hard shop-light contrast. Preserve scene facts."
        ),
        "fallback_behavior": (
            "If garage evidence is weak, keep only industrial light, metal/chrome accents, and tactile wardrobe texture."
        ),
    },
    "🎨 ИЛЛЮСТРАЦИЯ/⭐ Pro Hentai": {
        "forbidden": ["safe anime", "photoreal photo", "western comic style", "underage", "minor"],
        "required_cues": [
            "explicit adult anime illustration",
            "doujinshi page finish",
            "Clip Studio line control",
            "cel-shaded body planes and panel readability",
        ],
        "support_signals": ["adult anime", "doujinshi", "hentai", "cel-shaded", "manga", "panel"],
        "contradiction_signals": ["safe anime", "photoreal", "western comic", "underage", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep adult anime style in line control, cel shading, manga palette, and explicit adult framing while preserving age-safe adult identity."
        ),
        "blocked_mode_contract": (
            "Do not apply erotic anime cues to underage/ambiguous subjects; suppress adult styling if adult context is not clear."
        ),
        "drift_targets": ["safe anime", "photoreal photo", "generic pin-up"],
        "output_obligation": (
            "The final output must read as explicit adult anime illustration with doujinshi craft, never safe anime filler."
        ),
        "transform": (
            "PRO HENTAI GUARDRAIL: Adult-only anime illustration with doujinshi finish, Clip Studio line control, cel-shaded body planes, manga palette, and panel readability. Suppress underage or ambiguous-age drift."
        ),
        "fallback_behavior": (
            "If adult context is ambiguous, keep only non-explicit anime line/cel style and avoid erotic intensification."
        ),
    },
    "🎨 ИЛЛЮСТРАЦИЯ/🦸 Western Adult": {
        "forbidden": ["soft anime gloss", "photoreal pin-up", "safe superhero poster", "underage"],
        "required_cues": [
            "bold ink contour",
            "halftone-ready shadow masses",
            "muscular anatomy discipline",
            "pulp-cover adult staging",
        ],
        "support_signals": ["western comic", "bold ink", "halftone", "pulp", "muscular", "adult"],
        "contradiction_signals": ["anime gloss", "photoreal", "safe poster", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep western adult art in ink, halftone shadow, pulp staging, and mature figure rendering without drifting to anime."
        ),
        "blocked_mode_contract": (
            "Do not add explicit adult emphasis when adult context is unsupported; keep mature comic rendering only."
        ),
        "drift_targets": ["soft anime", "photoreal glamour", "safe superhero poster"],
        "output_obligation": (
            "The final output must read as mature western-comic adult illustration with ink and pulp-cover structure."
        ),
        "transform": (
            "WESTERN ADULT COMIC GUARDRAIL: Use bold contour, halftone shadow masses, muscular anatomy discipline, pulp-cover staging, and mature comic rendering. Avoid anime gloss and photoreal drift."
        ),
        "fallback_behavior": (
            "If explicit context is weak, retain western comic medium and mature styling without adding unsupported adult detail."
        ),
    },
    "📜 КЛАССИКА/🖼️ Baroque Nude": {
        "forbidden": ["modern glamour photo", "safe museum neutral", "flat dark filter", "anime body"],
        "required_cues": [
            "adult baroque nude painting",
            "Caravaggio-like chiaroscuro",
            "warm varnished flesh tones",
            "oil-glaze depth and theatrical drapery",
        ],
        "support_signals": ["baroque", "nude", "chiaroscuro", "glaze", "drapery", "old-master"],
        "contradiction_signals": ["photoreal", "anime", "safe museum", "flat filter"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep adult baroque read in oil glaze, chiaroscuro, drapery, and old-master body modeling without safe desexualization."
        ),
        "blocked_mode_contract": (
            "Do not force nudity or adult emphasis if not supported; keep baroque painterly light only."
        ),
        "drift_targets": ["modern glamour", "museum-safe neutral", "generic dark cinematic"],
        "output_obligation": (
            "The final output must read as adult baroque nude painting through old-master light and oil-glaze craft."
        ),
        "transform": (
            "BAROQUE NUDE GUARDRAIL: Use adult old-master framing, Caravaggio chiaroscuro, varnished flesh tones, oil-glaze depth, dark architecture, and theatrical drapery. Avoid photo glamour and safe museum dilution."
        ),
        "fallback_behavior": (
            "If nude context is unsupported, keep baroque oil and chiaroscuro without adding body exposure."
        ),
    },
    "🚀 SCI-FI/🤖 Cyberpunk NSFW": {
        "forbidden": ["plain city-night cyberpunk", "safe techwear", "generic neon", "underage"],
        "required_cues": [
            "explicit adult cyberpunk illustration",
            "neon-magenta and cyan contrast",
            "chrome-against-skin rendering",
            "implanted anatomy cues or body-machine tension",
        ],
        "support_signals": ["adult cyberpunk", "neon", "chrome", "implant", "body-machine", "magenta", "cyan"],
        "contradiction_signals": ["safe techwear", "city only", "plain skyline", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep adult cyberpunk art in chrome/skin contrast, implanted cues, neon light, and body-machine tension without adding unsupported hardware or explicit acts."
        ),
        "blocked_mode_contract": (
            "Do not force adult cyberpunk content onto safe or ambiguous subjects; keep only non-explicit neon sci-fi rendering."
        ),
        "drift_targets": ["generic city cyberpunk", "safe techwear", "plain neon glamour"],
        "output_obligation": (
            "The final output must read as explicit adult cyberpunk illustration, not generic city-night cyberpunk."
        ),
        "transform": (
            "CYBERPUNK NSFW GUARDRAIL: Adult-only sci-fi illustration with magenta-cyan neon, chrome-against-skin material, wet tech-noir surfaces, implanted cues, and body-machine tension. Preserve Base truth."
        ),
        "fallback_behavior": (
            "If adult body-machine support is weak, keep only neon sci-fi material and non-explicit cyberpunk rendering."
        ),
    },
    "🦾 КИБЕРПАНК/💡 Glowing Fiber Optics": {
        "forbidden": ["generic neon tattoo", "safe body paint", "plain cyberpunk glow", "random wires"],
        "required_cues": [
            "subdermal fiber-optic lines",
            "RGB pulse glow under skin",
            "translucent tissue effects",
            "dark tech background and luminous synthetic anatomy",
        ],
        "support_signals": ["fiber optic", "subdermal", "RGB", "under skin", "translucent", "glowing anatomy"],
        "contradiction_signals": ["painted tattoo", "no body tech", "plain fabric", "daylight realism"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep fiber optics as under-skin luminous linework and synthetic anatomy cues without inventing external wires or new anatomy."
        ),
        "blocked_mode_contract": (
            "Do not add subdermal tech if unsupported; use only subtle RGB edge light and luminous line accents."
        ),
        "drift_targets": ["generic neon tattoo", "random wires", "safe body paint"],
        "output_obligation": (
            "The final output must read as adult cyber-body fiber-optic illustration with subdermal glow and synthetic anatomy."
        ),
        "transform": (
            "GLOWING FIBER OPTICS GUARDRAIL: Use subdermal fiber-optic lines, RGB pulse glow, translucent tissue effects, dark tech backdrop, and controlled luminous anatomy. No random wires or generic neon tattoo drift."
        ),
        "fallback_behavior": (
            "If body-tech support is weak, keep subtle glowing line accents and dark tech atmosphere without adding implants."
        ),
    },
    "📸 СТУДИЯ/🛋️ Boudoir": {
        "forbidden": ["catalog fashion", "public voyeur framing", "harsh interrogation light", "underage"],
        "required_cues": [
            "soft window wrap",
            "rumpled bedding or chaise texture",
            "private-room residue",
            "adult boudoir photographic intimacy",
        ],
        "support_signals": ["boudoir", "bed", "window", "rumpled", "lingerie", "private room", "adult"],
        "contradiction_signals": ["public street", "catalog", "underage", "harsh fluorescent"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep boudoir in soft private-room light, bedding texture, and tactile adult wardrobe cues without inventing explicit acts."
        ),
        "blocked_mode_contract": (
            "Do not force bedroom intimacy onto a non-bedroom scene; keep only soft adult portrait light and textile warmth."
        ),
        "drift_targets": ["fashion catalog", "public voyeur", "safe glamour filler"],
        "output_obligation": (
            "The final output must read as adult boudoir photography grounded in private-room light and tactile bedding/garment truth."
        ),
        "transform": (
            "BOUDOIR PHOTO GUARDRAIL: Use adult-only boudoir framing, soft window wrap, rumpled bedding or chaise texture, skin-to-fabric contact, and private-room realism. No voyeur or underage drift."
        ),
        "fallback_behavior": "If room support is weak, keep only soft private-light and textile intimacy cues.",
    },
    "🌑 НУАР/🧛 Vampire Gothic": {
        "forbidden": ["campy monster parody", "random gore", "safe gothic fashion", "underage"],
        "required_cues": [
            "red-accent practical light",
            "pale skin against black textile",
            "coffin-or-crypt material cues",
            "deep chiaroscuro gothic seduction",
        ],
        "support_signals": ["vampire", "gothic", "red light", "black textile", "coffin", "crypt", "chiaroscuro"],
        "contradiction_signals": ["campy", "daylight beach", "safe fashion", "gore"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep vampire-gothic style in red/black light, textile contrast, crypt material, and adult gothic mood without adding gore or monster action."
        ),
        "blocked_mode_contract": (
            "Do not invent fangs, coffin, or crypt if unsupported; keep only red-accent gothic chiaroscuro."
        ),
        "drift_targets": ["campy monster", "generic gothic fashion", "random gore"],
        "output_obligation": (
            "The final output must read as adult vampire-gothic photography through red-accent light and photographic gothic material."
        ),
        "transform": (
            "VAMPIRE GOTHIC PHOTO GUARDRAIL: Use adult photographic gothic seduction, red practical accents, pale-vs-black textile contrast, crypt/coffin material only when supported, and deep chiaroscuro. No camp or gore drift."
        ),
        "fallback_behavior": "If vampire cues are weak, keep red-black gothic light and textile contrast only.",
    },
    "🛀 ТЕКСТУРЫ/🌊 Underwater Weightless": {
        "forbidden": ["dry studio pose", "fake floating filter", "murky low-detail water", "new props"],
        "required_cues": [
            "full-submersion buoyancy",
            "floating hair and fabric",
            "refracted blue light",
            "water distortion on skin edges",
        ],
        "support_signals": ["underwater", "submerged", "buoyancy", "floating hair", "refracted", "water distortion"],
        "contradiction_signals": ["dry studio", "desert", "solid ground", "no water"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep underwater style in buoyancy, blue refraction, suspended hair/fabric, and edge distortion without inventing sea life or props."
        ),
        "blocked_mode_contract": (
            "Do not force underwater setting if unsupported; use only subtle blue refraction and weightless posing language."
        ),
        "drift_targets": ["fake floating filter", "dry studio", "generic blue haze"],
        "output_obligation": (
            "The final output must read as adult underwater photography through buoyancy and real water optics."
        ),
        "transform": (
            "UNDERWATER WEIGHTLESS GUARDRAIL: Use full-submersion buoyancy, floating hair/fabric, refracted blue light, suspended limbs, and water edge distortion. No invented aquatic props."
        ),
        "fallback_behavior": (
            "If water support is weak, keep restrained blue refraction and weightless softness without scene replacement."
        ),
    },
    "🏙️ ЛОКАЦИИ/🤳 Amateur POV": {
        "forbidden": ["exploitative voyeur wording", "polished studio glamour", "surveillance tone", "underage"],
        "required_cues": [
            "handheld framing",
            "smartphone-grade directness",
            "close personal distance",
            "consensual adult amateur realism",
        ],
        "support_signals": ["POV", "handheld", "smartphone", "close personal", "amateur", "adult"],
        "contradiction_signals": ["surveillance", "polished studio", "underage", "distant telephoto"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep amateur POV in handheld closeness, imperfect exposure, and consensual adult framing without voyeur language."
        ),
        "blocked_mode_contract": "Do not force POV framing if unsupported; keep only handheld domestic directness.",
        "drift_targets": ["voyeur wording", "surveillance", "polished glamour"],
        "output_obligation": (
            "The final output must read as consensual adult amateur POV photography, not exploitative surveillance."
        ),
        "transform": (
            "AMATEUR POV GUARDRAIL: Use handheld framing, smartphone directness, close personal distance, imperfect home-room exposure, and consensual adult framing. Avoid voyeur or surveillance language."
        ),
        "fallback_behavior": "If POV support is weak, keep amateur handheld texture and imperfect exposure only.",
    },
    "💻 ЦИФРОВАЯ/🎮 3D Render": {
        "forbidden": ["photographic capture", "flat AI painting", "bad mesh anatomy", "uncanny broken shader"],
        "required_cues": [
            "DAZ or Blender surface logic",
            "subsurface skin shading",
            "studio-grade key and rim setup",
            "precise mesh anatomy",
        ],
        "support_signals": ["3D", "render", "DAZ", "Blender", "subsurface", "shader", "mesh"],
        "contradiction_signals": ["photograph", "watercolor", "flat anime", "sketch"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep 3D identity in shader, mesh, subsurface, and studio render language without pretending it is a photograph."
        ),
        "blocked_mode_contract": "Do not collapse to photo wording; keep visible CGI/render finish.",
        "drift_targets": ["photographic wording", "flat AI painting", "bad mesh anatomy"],
        "output_obligation": "The final output must read as adult 3D character render with shader and mesh clarity.",
        "transform": (
            "NSFW 3D RENDER GUARDRAIL: Use DAZ/Blender surface logic, subsurface skin shaders, studio key/rim lighting, glossy shader response, and precise mesh anatomy. Keep it visibly rendered, not photographic."
        ),
        "fallback_behavior": (
            "If 3D support is weak, keep shader/material/render terminology instead of photo camera language."
        ),
    },
    "🎯 ЖАНРЫ/🎭 Sensual Art": {
        "forbidden": ["safe romance poster", "plain glamour", "photographic wording", "underage"],
        "required_cues": [
            "adult sensual illustration",
            "erotic body language",
            "soft deliberate painterly light",
            "gallery-grade NSFW art framing",
        ],
        "support_signals": ["sensual", "adult", "illustration", "painterly", "gallery", "body language"],
        "contradiction_signals": ["safe romance", "photo", "underage", "plain glamour"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep sensual art in adult body language, painterly gradients, and controlled composition without safe-romance dilution."
        ),
        "blocked_mode_contract": (
            "Do not add explicit detail when adult context is unsupported; keep non-explicit painterly sensuality."
        ),
        "drift_targets": ["safe romance", "generic glamour", "photo wording"],
        "output_obligation": (
            "The final output must read as adult sensual illustration, not safe romance or plain glamour."
        ),
        "transform": (
            "SENSUAL ART GUARDRAIL: Use adult sensual illustration language, deliberate painterly light, intimate surface gradients, controlled composition, and NSFW art framing. Preserve medium identity."
        ),
        "fallback_behavior": "If explicit context is weak, keep sensual painterly mood without intensifying content.",
    },
    "✒️ СКЕТЧ/🦴 Raw Anatomy": {
        "forbidden": ["glossy render", "beauty pin-up", "medical gore", "comic ink exaggeration"],
        "required_cues": [
            "graphite construction lines",
            "tendon and muscle insertion mapping",
            "life-drawing realism",
            "paper tooth and smudged tonal blocking",
        ],
        "support_signals": [
            "anatomy",
            "graphite",
            "construction lines",
            "tendon",
            "muscle",
            "paper tooth",
            "life-drawing",
        ],
        "contradiction_signals": ["glossy", "pin-up", "gore", "comic"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep raw anatomy in study-sheet graphite, construction marks, muscle mapping, and smudged tonal blocks without glamorizing."
        ),
        "blocked_mode_contract": "Do not invent anatomical exposure or gore; use life-drawing draftsmanship only.",
        "drift_targets": ["glossy pin-up", "medical gore", "comic exaggeration"],
        "output_obligation": "The final output must read as adult anatomical sketch with graphite study discipline.",
        "transform": (
            "RAW ANATOMY GUARDRAIL: Use graphite construction lines, tendon/muscle mapping, paper tooth, smudged tonal blocking, and life-drawing realism. No gore or glossy glamour drift."
        ),
        "fallback_behavior": "If anatomy support is weak, keep graphite study structure and paper texture only.",
    },
    "🏰 ФЭНТЕЗИ/🌊 Aquatic Erotic": {
        "forbidden": [
            "photographic underwater",
            "generic mermaid cliché",
            "dry desert fantasy",
            "random sea creatures",
        ],
        "required_cues": [
            "submerged body arcs",
            "refracted aqua light",
            "coral ornament",
            "fluid hair motion and painterly fantasy rendering",
        ],
        "support_signals": ["aquatic", "underwater", "refracted", "aqua", "coral", "fluid hair"],
        "contradiction_signals": ["desert", "dry", "photographic", "generic mermaid"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep aquatic fantasy in refraction, fluid motion, coral ornament, and painterly body arcs without adding random sea life."
        ),
        "blocked_mode_contract": (
            "Do not force underwater scene if unsupported; use only aqua light and flowing fantasy motion cues."
        ),
        "drift_targets": ["photo underwater", "mermaid cliché", "random sea creatures"],
        "output_obligation": (
            "The final output must read as adult aquatic fantasy illustration, not photographic underwater or generic mermaid cliché."
        ),
        "transform": (
            "AQUATIC EROTIC GUARDRAIL: Use submerged arcs, refracted aqua light, coral ornament, translucent fabric/fins only when supported, fluid hair, and painterly fantasy rendering. Avoid photo drift."
        ),
        "fallback_behavior": (
            "If underwater support is weak, keep aqua refraction and flowing painterly motion without scene replacement."
        ),
    },
    "🚀 SCI-FI/💎 Crystal Anatomy": {
        "forbidden": ["plain gemstone jewelry", "generic crystal fantasy", "photoreal mineral macro", "random shards"],
        "required_cues": [
            "translucent anatomy planes",
            "internal gemstone light",
            "prismatic edge highlights",
            "mineral fracture surfaces",
        ],
        "support_signals": ["crystal", "anatomy", "translucent", "prismatic", "gemstone", "fracture", "mineral"],
        "contradiction_signals": ["jewelry only", "photoreal macro", "opaque skin", "random shards"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep crystal anatomy in translucent planes, internal light, and prismatic edges without inventing broken shards everywhere."
        ),
        "blocked_mode_contract": (
            "Do not replace anatomy with crystal if unsupported; use subtle prismatic surface cues only."
        ),
        "drift_targets": ["generic crystal fantasy", "jewelry macro", "random shard clutter"],
        "output_obligation": (
            "The final output must read as adult crystalline-body sci-fi illustration with luminous anatomy planes."
        ),
        "transform": (
            "CRYSTAL ANATOMY GUARDRAIL: Use translucent anatomy planes, internal gemstone light, prismatic edges, mineral fracture surfaces, and alien-body concept rendering. No random shard clutter."
        ),
        "fallback_behavior": (
            "If crystal anatomy support is weak, use restrained prismatic highlights and translucent surface hints."
        ),
    },
    "🕰️ РЕТРО/📼 80s Anime OVA": {
        "forbidden": ["modern glossy anime", "photoreal render", "clean vector style", "underage"],
        "required_cues": [
            "1980s anime OVA cel-painted color blocks",
            "VHS chroma bleed",
            "sharp line hierarchy",
            "retro hand-painted frame craft",
        ],
        "support_signals": ["80s", "OVA", "cel", "VHS", "chroma", "retro anime", "hand-painted"],
        "contradiction_signals": ["modern glossy", "photoreal", "vector", "minor"],
        "support_thresholds": {"full": 2, "weak": 1},
        "default_support_mode": "weak",
        "no_signal_mode": "weak",
        "weak_mode_contract": (
            "Keep 80s OVA identity in cel blocks, VHS bleed, sharp line hierarchy, and retro palette without modern gloss."
        ),
        "blocked_mode_contract": (
            "Do not intensify adult cues if age context is ambiguous; keep retro anime craft only."
        ),
        "drift_targets": ["modern glossy anime", "photoreal render", "clean vector"],
        "output_obligation": "The final output must read as adult 1980s anime OVA illustration with cel/VHS craft.",
        "transform": (
            "80S ANIME OVA GUARDRAIL: Use cel-painted color blocks, VHS chroma bleed, sharp line hierarchy, retro character design, and hand-painted frame craft. Adult-only; suppress ambiguous-age drift."
        ),
        "fallback_behavior": "If adult context is weak, keep only non-explicit retro OVA rendering cues.",
    },
}


LEGACY_STYLE_SPECIFIC_RULES: List[Dict[str, Any]] = [
    {
        "match_all": ["180° shutter at 24fps", "kinetic readiness even in a static frame"],
        **PRESET_STYLE_RULES["⏱️ ЗАХВАТ/💫 Motion Blur"],
    },
    {
        "match_all": ["1840s daguerreotype", "silvered copper plate"],
        **PRESET_STYLE_RULES["🕰️ РЕТРО/🪞 Daguerreotype"],
    },
    {
        "match_all": ["practical candle-only source", "single point-flame logic"],
        **PRESET_STYLE_RULES["🧪 ЭФФЕКТЫ/🕯️ Candlelit Mood"],
    },
    {
        "match_all": ["single hard flashlight beam", "brutal falloff outside the beam"],
        **PRESET_STYLE_RULES["🗺️ СЦЕНЫ/🔦 Flashlight Beam"],
    },
    {
        "match_all": ["exposed rooftop ledge or parapet", "visible drop to the city grid below"],
        **PRESET_STYLE_RULES["🗺️ СЦЕНЫ/🏗️ Skyscraper Edge"],
    },
    {
        "match_all": [
            "rain-beaded glass as the foreground plane",
            "interior-exterior separation grounded in weathered glass realism",
        ],
        **PRESET_STYLE_RULES["🗺️ СЦЕНЫ/🛁 Rainy Window"],
    },
]


def get_style_specific_rules(style_text: str, style_key: str = "") -> List[Dict[str, Any]]:
    matched: List[Dict[str, Any]] = []
    if style_key and style_key in PRESET_STYLE_RULES:
        matched.append(PRESET_STYLE_RULES[style_key])
        return matched

    style_lower = (style_text or "").lower()
    for rule in LEGACY_STYLE_SPECIFIC_RULES:
        tokens = [token.lower() for token in rule.get("match_all", [])]
        if tokens and all(token in style_lower for token in tokens):
            matched.append(rule)
    return matched
