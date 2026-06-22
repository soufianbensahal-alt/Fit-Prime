"""Genera los iconos de Fit Prime desde el logotipo maestro transparente."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ICON_DIR = ROOT / "public" / "icons"
SOURCE = ICON_DIR / "fit-prime-logo.png"

def make_app_icon(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), "#0b0e0c")
    mark = Image.open(SOURCE).convert("RGBA")
    mark.thumbnail((int(size * 0.78), int(size * 0.78)), Image.Resampling.LANCZOS)
    canvas.alpha_composite(mark, ((size - mark.width) // 2, (size - mark.height) // 2))
    return canvas

def main() -> None:
    for size in (16, 32, 48, 180, 192, 512):
        make_app_icon(size).save(ICON_DIR / f"icon-{size}x{size}.png", optimize=True)
    master = Image.open(SOURCE).convert("RGBA")
    for size in (180, 192, 512):
        transparent = master.copy()
        transparent.thumbnail((size, size), Image.Resampling.LANCZOS)
        transparent.save(ICON_DIR / f"logo-{size}x{size}.png", optimize=True)
    make_app_icon(48).save(ICON_DIR / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

if __name__ == "__main__":
    main()
