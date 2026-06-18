#!/usr/bin/env python3
"""Scrape Julian pages and remaining landing pages from live zeiler.me"""

import os
import re
import time
import json
import subprocess

CONTENT_BASE = "/home/user/src/zeiler-me/zeiler-me/content"
LIVE_BASE = "https://www.zeiler.me"

# Julian pages + landing pages + remaining
PAGES = [
    # Julian pages
    ("/julian", "Julian Zeiler", "Julian Zeiler", ["Julian", "Überblick"]),
    ("/julian/about-me", "About Me - Julian Zeiler", "Julian Zeiler", ["Julian", "About"]),
    ("/julian/artikel", "Artikel - Julian Zeiler", "Julian Zeiler", ["Julian", "Artikel"]),
    ("/julian/contact", "Kontakt - Julian Zeiler", "Julian Zeiler", ["Julian", "Kontakt"]),
    ("/julian/work", "Work - Julian Zeiler", "Julian Zeiler", ["Julian", "Work"]),
    ("/julian/work/projects", "Projects - Julian Zeiler", "Julian Zeiler", ["Julian", "Projects"]),
    ("/julian/work/selfmade", "Selfmade - Julian Zeiler", "Julian Zeiler", ["Julian", "Selfmade"]),
    # Julian Techzap
    ("/julian/techzap", "Techzap - Julian Zeiler", "Julian Zeiler", ["Julian", "Techzap"]),
    ("/julian/techzap/design", "Design - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Design"]),
    ("/julian/techzap/design/microsoft-paint", "Microsoft Paint", "Julian Zeiler", ["Julian", "Techzap", "Design", "Paint"]),
    ("/julian/techzap/design/microsoft-paint/favicon-ico-mit-ms-paint-und-bmp2ico-erstellen", "Favicon ICO mit MS Paint und BMP2ICO erstellen", "Julian Zeiler", ["Julian", "Techzap", "Favicon"]),
    ("/julian/techzap/programmierung", "Programmierung - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Programmierung"]),
    ("/julian/techzap/programmierung/einfuehrung-in-das-programmieren", "Einführung in das Programmieren", "Julian Zeiler", ["Julian", "Techzap", "Programmierung"]),
    ("/julian/techzap/programmierung/einfuehrung-in-das-programmieren/grundlagen-variablen-operatoren-funktionen", "Grundlagen: Variablen, Operatoren, Funktionen", "Julian Zeiler", ["Julian", "Techzap", "Programmierung"]),
    ("/julian/techzap/programmierung/perl", "Perl - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Perl"]),
    ("/julian/techzap/programmierung/perl/perl-einzeiler-suchen-und-ersetzen-in-dateien", "Perl Einzeiler: Suchen und Ersetzen in Dateien", "Julian Zeiler", ["Julian", "Techzap", "Perl"]),
    ("/julian/techzap/server", "Server - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Server"]),
    ("/julian/techzap/server/unix-linux", "Unix/Linux - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Server", "Linux"]),
    ("/julian/techzap/server/unix-linux/grep-in-zwei-dateien-vorkommende-zeilen-entfernen", "Grep: In zwei Dateien vorkommende Zeilen entfernen", "Julian Zeiler", ["Julian", "Techzap", "Grep"]),
    ("/julian/techzap/server/windows", "Windows - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Windows"]),
    ("/julian/techzap/server/windows/iis-und-apache-auf-einem-server-parallel-betreiben", "IIS und Apache auf einem Server parallel betreiben", "Julian Zeiler", ["Julian", "Techzap", "IIS", "Apache"]),
    ("/julian/techzap/server/windows/listenonlylist-registry-werte-iis-an-ip-binden", "ListenOnlyList Registry: IIS an IP binden", "Julian Zeiler", ["Julian", "Techzap", "IIS"]),
    ("/julian/techzap/technik", "Technik - Techzap", "Julian Zeiler", ["Julian", "Techzap", "Technik"]),
    ("/julian/techzap/technik/vmware", "VMware - Techzap", "Julian Zeiler", ["Julian", "Techzap", "VMware"]),
    ("/julian/techzap/technik/vmware/strg-alt-f1-bzw-ctrl-alt-f1-an-vmware-senden", "Strg+Alt+F1 an VMware senden", "Julian Zeiler", ["Julian", "Techzap", "VMware"]),
    # Julian Articles
    ("/julian/artikel/agile-methoden-in-der-softwareentwicklung", "Agile Methoden in der Softwareentwicklung", "Julian Zeiler", ["Julian", "Artikel", "Agile"]),
    ("/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen", "Auswirkungen von Ideologien der Open Source Lizenzen", "Julian Zeiler", ["Julian", "Artikel", "Open Source"]),
    ("/julian/artikel/was-ist-das-web-20", "Was ist das Web 2.0", "Julian Zeiler", ["Julian", "Artikel", "Web"]),
    # Detlef landing pages
    ("/detlef/deutsch", "Deutsch", "Detlef Zeiler", ["Deutsch"]),
    ("/detlef/geschichte", "Geschichte", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/medien", "Medien", "Detlef Zeiler", ["Medien"]),
    ("/detlef/projekte", "Projekte", "Detlef Zeiler", ["Projekte"]),
    # Additional projekt landing pages
    ("/detlef/projekte/die-elsenz-und-der-kraichgau", "Die Elsenz und der Kraichgau", "Detlef Zeiler", ["Projekte", "Elsenz"]),
    ("/detlef/projekte/heidelberg-im-mittelalter", "Heidelberg im Mittelalter", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heiligenberg", "Heiligenberg", "Detlef Zeiler", ["Projekte", "Heiligenberg"]),
    ("/detlef/projekte/neuenheim", "Neuenheim", "Detlef Zeiler", ["Projekte", "Neuenheim"]),
    ("/detlef/projekte/dritte-gewalt-strafvollzug", "Dritte Gewalt Strafvollzug", "Detlef Zeiler", ["Projekte", "Strafvollzug"]),
    ("/detlef/projekte/heidelberger-schulgeschichten", "Heidelberger Schulgeschichten", "Detlef Zeiler", ["Projekte", "Schulgeschichten"]),
    # Missing deep subpages
    ("/detlef/deutsch/needful-things---in-einer-kleinen-stadt/in-einer-kleinen-stadt/in-einer-kleinen-stadt", "In einer kleinen Stadt (Detail)", "Detlef Zeiler", ["Deutsch", "Literatur"]),
]

def clean_content(raw_text):
    lines = raw_text.split('\n')
    cleaned = []
    skip_patterns = [
        'Search this site', 'Embedded Files', 'Skip to main content',
        'Skip to navigation', 'Copy heading link', 'Page updated',
        'Google Sites', 'Report abuse', 'ZEILER .me',
    ]
    for line in lines:
        line = line.strip()
        if not line:
            cleaned.append('')
            continue
        skip = False
        for pattern in skip_patterns:
            if pattern.lower() in line.lower():
                skip = True
                break
        if not skip:
            line = re.sub(r'\[Copy heading link\]\(.*?\)', '', line)
            cleaned.append(line)
    while cleaned and not cleaned[0].strip():
        cleaned.pop(0)
    while cleaned and not cleaned[-1].strip():
        cleaned.pop()
    return '\n'.join(cleaned)

def create_mdx(title, description, author, tags, content):
    tags_str = json.dumps(tags, ensure_ascii=False)
    frontmatter = f"""---
title: "{title}"
description: "{description}"
author: "{author}"
tags: {tags_str}
---"""
    return frontmatter + "\n\n" + content

def scrape_page(url):
    try:
        result = subprocess.run(
            ['curl', '-sL', '-H', 'User-Agent: Mozilla/5.0', url],
            capture_output=True, text=True, timeout=30
        )
        html = result.stdout
        html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
        main_match = re.search(r'<div[^>]*id="sites-canvas"[^>]*>(.*?)</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
        if main_match:
            content_html = main_match.group(1)
        else:
            content_match = re.search(r'<td[^>]*id="sites-canvas-main"[^>]*>(.*?)</td>', html, re.DOTALL)
            if content_match:
                content_html = content_match.group(1)
            else:
                content_html = html
        content_html = re.sub(r'<br\s*/?>', '\n', content_html)
        content_html = re.sub(r'</p>', '\n\n', content_html)
        content_html = re.sub(r'<p[^>]*>', '', content_html)
        content_html = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<li[^>]*>', '- ', content_html)
        content_html = re.sub(r'</li>', '', content_html)
        content_html = re.sub(r'<[^>]+>', '', content_html)
        content_html = content_html.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
        content_html = content_html.replace('&quot;', '"').replace('&#39;', "'").replace('&nbsp;', ' ')
        return clean_content(content_html)
    except Exception as e:
        return f"[Error: {e}]"

def main():
    created = []
    failed = []
    skipped = []
    
    for i, (url_path, title, author, tags) in enumerate(PAGES):
        filepath = os.path.join(CONTENT_BASE, url_path.lstrip("/") + ".mdx")
        
        if os.path.exists(filepath):
            size = os.path.getsize(filepath)
            if size > 200:  # Has real content
                print(f"[SKIP] {filepath} exists ({size} bytes)")
                skipped.append(url_path)
                continue
        
        full_url = LIVE_BASE + url_path
        print(f"[{i+1}/{len(PAGES)}] Scraping: {full_url}")
        
        content = scrape_page(full_url)
        
        if content and len(content.strip()) > 20:
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            mdx_content = create_mdx(title, title, author, tags, content)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            size = os.path.getsize(filepath)
            print(f"  -> Created: {filepath} ({size} bytes)")
            created.append(url_path)
        else:
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            mdx_content = create_mdx(title, title, author, tags, f"# {title}\n\n*Content needs manual copy from: {full_url}*")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            print(f"  -> Placeholder: {filepath}")
            failed.append(url_path)
        
        time.sleep(0.3)
    
    print(f"\n=== RESULTS ===")
    print(f"Created: {len(created)}, Skipped (already exist): {len(skipped)}, Failed/Placeholder: {len(failed)}")

if __name__ == "__main__":
    main()
