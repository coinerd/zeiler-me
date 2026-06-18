#!/usr/bin/env python3
"""
Scrape images from live zeiler.me site.
Downloads images from Google Sites CDN and saves them locally.
"""

import os
import re
import time
import subprocess
import json

CONTENT_BASE = "/home/user/src/zeiler-me/zeiler-me/content"
PUBLIC_BASE = "/home/user/src/zeiler-me/zeiler-me/public/images"
LIVE_BASE = "https://www.zeiler.me"

# Pages known to have images on live site
PAGES_WITH_IMAGES = [
    "/detlef",
    "/detlef/geschichte/besuch-in-simferopol-2018",
    "/detlef/geschichte/thalmann",
    "/detlef/medien/geruechte-rumores-drehbuch",
    "/detlef/projekte/heiligenberg/geschichte",
    "/detlef/projekte/heiligenberg/der-unheimliche-berg",
    "/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz",
    "/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde",
    "/detlef/projekte/heidelberger-schulgeschichten/schuelerunruhen-am-kfg",
    "/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/die-elsenz",
    "/detlef/geschichte/alexander-von-humboldts-sdamerikareise",
    "/detlef/geschichte/hooligans---angry-young-men",
    "/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse",
    "/detlef/projekte/heidelberg-im-mittelalter/das-aelteste-gewerbe",
    "/detlef/projekte/heidelberg-im-mittelalter/armenpflege-und-soziale-einrichtungen",
    "/detlef/projekte/heidelberg-im-mittelalter/sittenstrafordnung-fuer-dirnen",
    "/detlef/projekte/heidelberger-schulgeschichten/anfaenge",
    "/detlef/projekte/heidelberger-schulgeschichten/buerger-und-bauern",
    "/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert",
    "/detlef/projekte/heidelberger-schulgeschichten/das-19te-jahrhundert",
    "/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert",
    "/detlef/projekte/heidelberger-schulgeschichten/lehrerschaft-kfg-3tes-reich",
    "/detlef/projekte/heiligenberg/mopaed",
    "/detlef/projekte/neuenheim/eingemeindung",
    "/detlef/projekte/neuenheim/interview-krauch",
    "/detlef/projekte/neuenheim/ist-halb-europa",
    "/detlef/projekte/neuenheim/ueberblick",
    "/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage",
    "/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik",
    "/detlef/projekte/die-elsenz-und-der-kraichgau/kultur-religion",
    "/detlef/projekte/dritte-gewalt-strafvollzug/anmerkungen",
    "/detlef/projekte/dritte-gewalt-strafvollzug/beispiel-fuer-ein-projekt",
    "/detlef/projekte/dritte-gewalt-strafvollzug/gymnasium",
    "/detlef/projekte/dritte-gewalt-strafvollzug/hauptschule",
    "/detlef/projekte/dritte-gewalt-strafvollzug/medienforum-heidelberg-ev",
    "/detlef/projekte/dritte-gewalt-strafvollzug/realschule",
    "/detlef/projekte/old-providence-die-insel-providencia",
    "/detlef/geschichte/ceausescu",
    "/detlef/geschichte/zeit-der-intrigen",
    "/detlef/geschichte/berthold-von-rohrbach",
    "/detlef/geschichte/besuch-in-simferopol-2018",
]

def scrape_images_from_page(url):
    """Scrape a page and extract all image URLs."""
    try:
        result = subprocess.run(
            ['curl', '-sL', '-H', 'User-Agent: Mozilla/5.0', url],
            capture_output=True, text=True, timeout=30
        )
        html = result.stdout
        
        # Find all image URLs
        image_urls = []
        
        # Google Sites uses lh3.googleusercontent.com
        for match in re.finditer(r'(https://lh3\.googleusercontent\.com/[^"\'>\s]+)', html):
            url = match.group(1)
            # Clean up URL (remove size params for getting original)
            url = re.sub(r'=w\d+.*$', '=w800', url)  # Get 800px wide version
            if url not in image_urls:
                image_urls.append(url)
        
        # Also find ssl.gstatic.com images
        for match in re.finditer(r'(https://ssl\.gstatic\.com/[^"\'>\s]+)', html):
            url = match.group(1)
            if url not in image_urls:
                image_urls.append(url)
        
        # Find sites.google.com image references
        for match in re.finditer(r'(https://sites\.google\.com/[^"\'>\s]+\.(?:png|jpg|jpeg|gif|webp))', html, re.IGNORECASE):
            url = match.group(1)
            if url not in image_urls:
                image_urls.append(url)
        
        return image_urls
    except Exception as e:
        print(f"  Error scraping images: {e}")
        return []

def download_image(url, save_path):
    """Download an image to a local file."""
    try:
        os.makedirs(os.path.dirname(save_path), exist_ok=True)
        result = subprocess.run(
            ['curl', '-sL', '-o', save_path, url],
            capture_output=True, timeout=30
        )
        if os.path.exists(save_path) and os.path.getsize(save_path) > 100:
            return True
        return False
    except Exception as e:
        print(f"  Error downloading: {e}")
        return False

def main():
    all_images = {}  # page_url -> [(image_url, local_path)]
    total_downloaded = 0
    total_failed = 0
    
    for i, page_path in enumerate(PAGES_WITH_IMAGES):
        full_url = LIVE_BASE + page_path
        print(f"[{i+1}/{len(PAGES_WITH_IMAGES)}] Checking images: {full_url}")
        
        image_urls = scrape_images_from_page(full_url)
        
        if not image_urls:
            print(f"  No images found")
            continue
        
        # Create a directory for this page's images
        page_dir = page_path.lstrip("/")
        local_img_dir = os.path.join(PUBLIC_BASE, page_dir)
        
        page_images = []
        for j, img_url in enumerate(image_urls):
            # Determine extension
            ext = '.jpg'
            if '.png' in img_url:
                ext = '.png'
            elif '.gif' in img_url:
                ext = '.gif'
            elif '.webp' in img_url:
                ext = '.webp'
            
            filename = f"image-{j+1}{ext}"
            save_path = os.path.join(local_img_dir, filename)
            
            print(f"  Downloading image {j+1}/{len(image_urls)}: {img_url[:80]}...")
            
            if download_image(img_url, save_path):
                size = os.path.getsize(save_path)
                print(f"    -> Saved: {save_path} ({size} bytes)")
                page_images.append((img_url, save_path))
                total_downloaded += 1
            else:
                print(f"    -> FAILED")
                total_failed += 1
            
            time.sleep(0.2)
        
        all_images[page_path] = page_images
        time.sleep(0.3)
    
    print(f"\n=== IMAGE RESULTS ===")
    print(f"Downloaded: {total_downloaded}")
    print(f"Failed: {total_failed}")
    print(f"Pages with images: {len([p for p in all_images if all_images[p]])}")
    
    # Save image manifest
    manifest = {}
    for page, imgs in all_images.items():
        if imgs:
            manifest[page] = [
                {"url": url, "local": path.replace(PUBLIC_BASE + "/", "/images/")}
                for url, path in imgs
            ]
    
    manifest_path = os.path.join(PUBLIC_BASE, "manifest.json")
    os.makedirs(PUBLIC_BASE, exist_ok=True)
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    print(f"Manifest saved to: {manifest_path}")

if __name__ == "__main__":
    main()
