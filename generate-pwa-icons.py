"""
Generate PWA icons from the existing favicon.
Run: python generate-pwa-icons.py
Requires Pillow: pip install Pillow
"""
import os

try:
    from PIL import Image
except ImportError:
    print("Pillow not installed. Run: pip install Pillow")
    exit(1)

ICON_DIR = os.path.join(os.path.dirname(__file__), "public", "icons")
FAVICON = os.path.join(os.path.dirname(__file__), "public", "favicon.ico")

os.makedirs(ICON_DIR, exist_ok=True)

# Create icons from favicon or generate placeholder
try:
    img = Image.open(FAVICON)
    img = img.convert("RGBA")
except Exception:
    # Generate a simple placeholder icon
    img = Image.new("RGBA", (512, 512), (30, 120, 215, 255))

for size in [192, 512]:
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    path = os.path.join(ICON_DIR, f"icon-{size}.png")
    resized.save(path, "PNG")
    print(f"Created {path} ({size}x{size})")

# Apple touch icon
apple = img.resize((180, 180), Image.Resampling.LANCZOS)
apple_path = os.path.join(ICON_DIR, "apple-touch-icon.png")
apple.save(apple_path, "PNG")
print(f"Created {apple_path} (180x180)")

print("\n✅ PWA icons generated successfully!")
