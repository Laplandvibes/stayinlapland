"""
Batch-generate StayInLapland luxury editorial images via OpenAI gpt-image-1.

Saves PNG -> WebP (Pillow recompress, q=82, method=6) into public/images/.

Usage:  python scripts/generate-images.py [--dry-run] [--only NAME] [--workers 4]

Env:    OPENAI_API_KEY required.

Reference: laplandfood-new/scripts/generate-images.py (same pattern, this script
follows the LV ecosystem image-generation rule documented in
~/.claude/projects/.../memory/lv_image_generation_rule.md.
"""

from __future__ import annotations
import argparse, base64, concurrent.futures as cf, json, os, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. pip install Pillow", file=sys.stderr)
    sys.exit(2)

API_URL = "https://api.openai.com/v1/images/generations"
MODEL = "gpt-image-1"

# StayInLapland visual rule:
#   - editorial luxury hospitality (Conde Nast Traveler / Soho House / Aman aesthetic)
#   - cream + warm wood + linen palette inside; Arctic blue + soft golden hour outside
#   - daylight or golden hour (15:30 winter), NOT dark-sky aurora
#   - NO PEOPLE unless explicitly required (no human faces ever)
#   - real photograph aesthetic, not CGI/render
#   - composition leaves headroom for dark gradient overlay
NEGATIVES = (
    "no text, no logos, no watermarks, no people, no human faces, no UI elements, "
    "no oversaturated aurora, no neon green/pink sky, no fairytale glow, no obvious AI artefacts, "
    "no plastic stock-photo look, no holiday/Christmas decorations"
)
STYLE = (
    "Editorial luxury hospitality photography (Conde Nast Traveler / Aman aesthetic), "
    "natural daylight or soft golden-hour winter light, rich contrast, slightly warm white-balance, "
    "cream and oak wood textures, linen, brass and stone, "
    "real photograph aesthetic with subtle film grain. "
    f"{NEGATIVES}."
)

# (output filename, prompt, size) — gpt-image-1 sizes: 1024x1024, 1024x1536, 1536x1024
IMAGES: list[tuple[str, str, str]] = [
    # === HOME HERO === LCP — most important
    ("home-hero.webp",
     "Wide cinematic editorial photograph: a single luxury Finnish log cabin (hirsimökki) "
     "with floor-to-ceiling windows on the right third of frame, set on the snowy edge of "
     "a frozen lake. Daylight 13:00, low winter sun casting long blue shadows across "
     "pristine snow. Warm yellow-amber light spills from the cabin interior through windows. "
     "Single set of cross-country ski tracks leads from foreground toward the cabin. "
     "Distant pine ridge silhouette and pale blue sky with thin clouds. NO aurora, NO night sky. "
     "24mm wide composition leaving generous space for dark gradient overlay. " + STYLE,
     "1536x1024"),

    # === LONG STAYS HERO ===
    ("hero-long-stays.webp",
     "Editorial wide shot of a luxury multi-bedroom Finnish log cabin at golden hour 15:30 winter. "
     "Smoke ribbon from chimney, ample firewood stacked under eaves, warm window light, "
     "snow-covered roof. Cabin sits in a quiet pine clearing with no neighbouring buildings. "
     "Soft golden tones, no aurora, no night. Cabin is medium in frame with breathing room. " + STYLE,
     "1536x1024"),

    # === HOTELS HERO === interior shot, breaks visual repetition with other heroes
    ("hero-hotels.webp",
     "Editorial interior shot of a Nordic-minimal boutique hotel suite in Finnish Lapland: "
     "large floor-to-ceiling window facing pine forest in deep snow, bed dressed in cream "
     "linen with a single dark wool throw, oak floor, single brass reading lamp glowing, "
     "mid-afternoon natural daylight flooding the room. The room is empty and very still. "
     "Conde Nast Traveler interior aesthetic. " + STYLE,
     "1536x1024"),

    # === GLASS IGLOOS HERO ===
    ("hero-glass-igloos.webp",
     "Wide editorial daytime photograph of a row of glass-roofed igloo domes set on a "
     "snowy clearing in front of distant low pine forest. Bright midday Arctic light, "
     "pale blue sky, fresh snow catching the sun. The glass roofs reflect the sky. "
     "Domes are the clear subject — small to medium in frame with breathing room around. "
     "Wide-angle composition, scene reads bright and crisp, NOT dark, NOT a forest interior, "
     "NOT a log cabin from below. NO aurora, NO night, NO people. " + STYLE,
     "1536x1024"),

    # === WILDERNESS HERO ===
    ("hero-wilderness.webp",
     "Aerial editorial shot of a single architect-designed timber wilderness lodge on a private "
     "fjell ridge above the tree line in Finnish Lapland. Late afternoon golden winter light, "
     "vast empty pine forest in every direction, single ski track leading to the lodge. "
     "NO neighbouring buildings, NO people. Soft Nordic natural-light palette. " + STYLE,
     "1536x1024"),

    # === WHEN TO GO HERO ===
    ("hero-when-to-go.webp",
     "Editorial wide shot of a Lapland fell at 14:00 in late February: deep snow, low Arctic "
     "sun casting long blue shadows, single bare birch tree in foreground, distant pine forest. "
     "Pale blue sky, no aurora, no clouds, real-photo natural exposure. " + STYLE,
     "1536x1024"),

    # === BOOKING GUIDE HERO === flat-lay editorial detail
    ("hero-booking-guide.webp",
     "Editorial top-down flat-lay on dark oak: a paper map of Finnish Lapland with hand-marked "
     "destination dots, wool gloves, an enamel thermos, a vintage brass compass, a small "
     "leather notebook with hand-written notes in Finnish. Single soft window-light from "
     "upper-left, no people, very still. " + STYLE,
     "1536x1024"),

    # === EDITOR'S PICK — KAKSLAUTTANEN (Glass Igloos) ===
    ("pick-kakslauttanen.webp",
     "Editorial daytime photograph of a Kakslauttanen-style Kelo-Glass igloo cluster: "
     "a single dome in foreground, two more behind, pine forest backdrop, fresh snow, "
     "soft natural daylight. Architectural-magazine composition. NO aurora, NO night. " + STYLE,
     "1536x1024"),

    # === EDITOR'S PICK — AURORA PYRAMIDS (kept for reference) ===
    ("pick-aurora-pyramids.webp",
     "Editorial daytime view of a single triangular pyramid-shaped cabin with a full glass "
     "front wall facing across a frozen lake (Lake Inari). Cream-painted timber exterior, "
     "snow shore, soft afternoon light. NO people, NO aurora. " + STYLE,
     "1536x1024"),

    # === TRIP-TYPE CARDS (3 × 4:3) ===
    ("trip-first-timer.webp",
     "Editorial detail: hotel reception desk at a Nordic boutique hotel — a single brass "
     "lamp, a fresh-cut pine branch in a small ceramic vase on a wooden counter, soft natural "
     "daylight from a side window, no people. Interior luxury still life. " + STYLE,
     "1024x1024"),

    ("trip-repeat-visitor.webp",
     "Editorial: open kitchen of a luxury Lapland cabin — a black cast-iron pot on a wood "
     "stove, simple cream ceramic bowls stacked on a kelo-pine counter, fresh bread on a "
     "cutting board, a large window behind showing snowy fell. No people. Aman-aesthetic "
     "kitchen still life. " + STYLE,
     "1024x1024"),

    ("trip-luxury.webp",
     "Editorial: a hand pouring black coffee from a cast-iron coffee pot into a ceramic cup "
     "on a kelo-pine table, a large window behind showing snow-covered fjell at golden hour. "
     "Only the hand and pot are visible (no face). Quiet, warm, intimate. " + STYLE,
     "1024x1024"),

    # === CINEMATIC IMAGE-BREAK STRIPS (3:1 crop after gen) ===
    ("break-frozen-lake.webp",
     "Cinematic wide editorial photograph of an empty frozen Lapland lake stretching to the "
     "horizon at dawn, a single faint cross-country ski track in the snow. Pale dawn-pink to "
     "pale-blue sky gradient, no aurora, no people. Composition designed for a 3:1 ultra-wide "
     "crop with breathing room top and bottom. " + STYLE,
     "1536x1024"),

    ("break-boreal-forest.webp",
     "Cinematic wide editorial photograph of a snow-covered Finnish boreal pine forest at "
     "midday in winter, low Arctic sun casting long blue shadows across the snow. No path, "
     "no people. Composition for 3:1 ultra-wide crop. " + STYLE,
     "1536x1024"),
]

# === OPENAI gpt-image-1 sizes ============================================
# Supported sizes: 1024x1024, 1024x1536, 1536x1024
# We always request 1536x1024 for landscape and 1024x1024 for square,
# then resize/crop down with Pillow to the actual served width.

# Final resize widths after generation (px, longest dimension)
FINAL_WIDTHS = {
    "home-hero.webp":          1920,
    "hero-long-stays.webp":    2000,
    "hero-hotels.webp":        2000,
    "hero-glass-igloos.webp":  2000,
    "hero-wilderness.webp":    2000,
    "hero-when-to-go.webp":    2000,
    "hero-booking-guide.webp": 2000,
    "pick-kakslauttanen.webp": 1600,
    "pick-aurora-pyramids.webp": 1600,
    "trip-first-timer.webp":   800,
    "trip-repeat-visitor.webp": 800,
    "trip-luxury.webp":        800,
    "break-frozen-lake.webp":  2400,
    "break-boreal-forest.webp": 2400,
}

# Final-crop ratios — when set, resize then center-crop to this aspect.
# Empty = keep generated aspect.
CROP_RATIOS: dict[str, tuple[int, int]] = {
    "home-hero.webp": (16, 9),
    "hero-long-stays.webp": (16, 9),
    "hero-hotels.webp": (16, 9),
    "hero-glass-igloos.webp": (16, 9),
    "hero-wilderness.webp": (16, 9),
    "hero-when-to-go.webp": (16, 9),
    "hero-booking-guide.webp": (16, 9),
    "pick-kakslauttanen.webp": (16, 10),
    "pick-aurora-pyramids.webp": (16, 10),
    "trip-first-timer.webp": (4, 3),
    "trip-repeat-visitor.webp": (4, 3),
    "trip-luxury.webp": (4, 3),
    "break-frozen-lake.webp": (3, 1),
    "break-boreal-forest.webp": (3, 1),
}


def request_image(api_key: str, prompt: str, size: str) -> bytes:
    body = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "n": 1,
        "size": size,
        "quality": "high",
    }).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=body,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        payload = json.loads(resp.read())
    b64 = payload["data"][0]["b64_json"]
    return base64.b64decode(b64)


def save_webp(png_bytes: bytes, out_path: Path, target_w: int, ratio: tuple[int, int] | None) -> None:
    img = Image.open(BytesIO(png_bytes)).convert("RGB")
    if ratio is not None:
        rw, rh = ratio
        target_h = int(target_w * rh / rw)
        # First scale so the longer dimension matches target_w
        scale = max(target_w / img.width, target_h / img.height)
        new_w = int(img.width * scale)
        new_h = int(img.height * scale)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        # Center-crop
        left = (new_w - target_w) // 2
        top  = (new_h - target_h) // 2
        img = img.crop((left, top, left + target_w, top + target_h))
    else:
        if img.width > target_w:
            scale = target_w / img.width
            img = img.resize((target_w, int(img.height * scale)), Image.LANCZOS)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=82, method=6)


def generate_one(api_key: str, name: str, prompt: str, size: str, out_dir: Path) -> tuple[str, bool, str]:
    out_path = out_dir / name
    target_w = FINAL_WIDTHS.get(name, 1600)
    ratio = CROP_RATIOS.get(name)
    started = time.time()
    try:
        png_bytes = request_image(api_key, prompt, size)
        save_webp(png_bytes, out_path, target_w, ratio)
        size_kb = out_path.stat().st_size // 1024
        return name, True, f"{out_path.name}  {size_kb} kB in {time.time()-started:.1f} s"
    except Exception as e:
        return name, False, f"{type(e).__name__}: {e}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="Print prompts without calling API")
    ap.add_argument("--only", help="Generate only this filename (e.g. home-hero.webp)")
    ap.add_argument("--out", default=None, help="Output dir; defaults to ../public/images")
    ap.add_argument("--workers", type=int, default=3, help="Parallel API calls")
    args = ap.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    out_dir = Path(args.out) if args.out else repo_root / "public" / "images"

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key and not args.dry_run:
        print("ERROR: OPENAI_API_KEY not set", file=sys.stderr)
        return 2

    plan = [(n, p, s) for n, p, s in IMAGES if not args.only or args.only == n]
    if not plan:
        print(f"No image matches --only={args.only!r}", file=sys.stderr)
        return 1

    if args.dry_run:
        for name, prompt, size in plan:
            print(f"\n— {name} ({size}) —\n{prompt}")
        return 0

    out_dir.mkdir(parents=True, exist_ok=True)
    print(f"Generating {len(plan)} images via {MODEL} -> {out_dir}\n")

    failed: list[str] = []
    with cf.ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(generate_one, api_key, n, p, s, out_dir): n for n, p, s in plan}
        for fut in cf.as_completed(futures):
            name, ok, msg = fut.result()
            print(f"  {'OK' if ok else 'FAIL'}  {name:30s}  {msg}")
            if not ok:
                failed.append(name)

    if failed:
        print(f"\nFAILED: {', '.join(failed)}")
        return 1
    print("\nAll generated.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
