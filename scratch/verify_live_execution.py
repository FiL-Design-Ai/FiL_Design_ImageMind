import urllib.request
import json
import os

BASE_URL = "http://127.0.0.1:8188"

print("--- [1] Checking Server API Endpoints ---")
try:
    req = urllib.request.urlopen(f"{BASE_URL}/fil/models_list/diffusion_models")
    data = json.loads(req.read().decode('utf-8'))
    print(f"✅ /fil/models_list/diffusion_models: found {len(data.get('models', []))} models.")
except Exception as e:
    print(f"❌ Failed to reach /fil/models_list/diffusion_models: {e}")

try:
    req = urllib.request.urlopen(f"{BASE_URL}/fil/models_list/loras")
    data = json.loads(req.read().decode('utf-8'))
    loras = data.get('models', [])
    print(f"✅ /fil/models_list/loras: found {len(loras)} loras.")
    if loras:
        sample_lora = loras[0]
        req_info = urllib.request.urlopen(f"{BASE_URL}/fil/model_info?mode=loras&path={urllib.parse.quote(sample_lora)}")
        info = json.loads(req_info.read().decode('utf-8'))
        print(f"✅ Sample LoRA Info for '{sample_lora}': keys = {list(info.keys())}")
        print(f"   arch={info.get('arch')}, size={info.get('size_str')}, trained_words={info.get('trained_words')}")
except Exception as e:
    print(f"❌ Failed to reach LoRA info endpoint: {e}")

print("\n--- [2] Checking Frontend Source Hash ---")
hash_file = r"d:\AI\ComfyUI-Easy-Install\ComfyUI\custom_nodes\FiL_Design_ImageMind\frontend\dist\.source-hash"
if os.path.exists(hash_file):
    with open(hash_file, "r") as f:
        print(f"✅ Current Built Source Hash: {f.read().strip()}")
else:
    print("❌ Source hash file not found!")
