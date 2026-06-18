#!/usr/bin/env python3
"""
Auto-assign hero images to MDX articles that lack them.
"""
import os
import sys
from pathlib import Path

ROOT = Path("/home/user/src/zeiler-me/zeiler-me")
CONTENT_DIR = ROOT / "content/detlef"
IMAGES_DIR = ROOT / "public/images/detlef"

def find_image_for_slug(slug_path: str) -> str | None:
    """Find the best matching image for an article slug."""
    parts = slug_path.split("/")
    
    # 1. Exact match: images in the article's own directory
    article_img_dir = IMAGES_DIR / slug_path
    if article_img_dir.exists():
        for ext in ("*.jpg", "*.jpeg", "*.png"):
            for f in sorted(article_img_dir.glob(ext)):
                return "/" + str(f.relative_to(ROOT / "public"))
    
    # 2. Sibling images: another article in same parent directory
    if len(parts) >= 2:
        parent_dir = IMAGES_DIR / "/".join(parts[:-1])
        if parent_dir.exists():
            # Direct images in parent
            for ext in ("*.jpg", "*.jpeg", "*.png"):
                for f in sorted(parent_dir.glob(ext)):
                    return "/" + str(f.relative_to(ROOT / "public"))
    
    # 3. Category-level: first image in same top-level category
    if parts:
        category_dir = IMAGES_DIR / parts[0]
        if category_dir.exists():
            for ext in ("*.jpg", "*.jpeg", "*.png"):
                for f in sorted(category_dir.rglob(ext)):
                    return "/" + str(f.relative_to(ROOT / "public"))
    
    # 4. Global fallback
    global_fb = IMAGES_DIR / "image-1.jpg"
    if global_fb.exists():
        return "/images/detlef/image-1.jpg"
    
    return None

def has_image_frontmatter(content: str) -> bool:
    if not content.startswith("---"):
        return False
    end = content.find("---", 3)
    if end == -1:
        return False
    fm = content[3:end]
    for line in fm.split("\n"):
        stripped = line.strip()
        if stripped.startswith("image:"):
            val = stripped[6:].strip().strip('"').strip("'")
            if val:
                return True
    return False

def add_image_to_frontmatter(content: str, image_path: str) -> str:
    if not content.startswith("---"):
        return f'---\nimage: "{image_path}"\n---\n{content}'
    
    end = content.find("---", 3)
    if end == -1:
        return content
    
    fm = content[3:end].strip()
    body = content[end + 3:]
    
    lines = fm.split("\n")
    new_lines = []
    inserted = False
    for line in lines:
        new_lines.append(line)
        if not inserted and line.startswith("title:"):
            new_lines.append(f'image: "{image_path}"')
            inserted = True
    
    if not inserted:
        new_lines.append(f'image: "{image_path}"')
    
    return "---\n" + "\n".join(new_lines) + "\n---" + body

def main():
    mdx_files = sorted(CONTENT_DIR.rglob("*.mdx"))
    
    assigned = 0
    skipped = 0
    no_image = 0
    
    for mdx_file in mdx_files:
        rel_path = mdx_file.relative_to(CONTENT_DIR)
        slug_path = str(rel_path.with_suffix(""))
        content = mdx_file.read_text(encoding="utf-8")
        
        if has_image_frontmatter(content):
            skipped += 1
            continue
        
        image = find_image_for_slug(slug_path)
        
        if image:
            new_content = add_image_to_frontmatter(content, image)
            mdx_file.write_text(new_content, encoding="utf-8")
            assigned += 1
        else:
            no_image += 1
            print(f"  ❌ No image for: {slug_path}")
    
    print(f"\nResults: Skipped={skipped} Assigned={assigned} NoImage={no_image}")

if __name__ == "__main__":
    main()
