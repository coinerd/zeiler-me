#!/usr/bin/env python3
"""
Improved extraction: properly interleaves headings and body text in document order.
"""
import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_BASE = os.path.join(BASE_DIR, "src/app/detlef")
CONTENT_BASE = os.path.join(BASE_DIR, "content/detlef")

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def extract_metadata(content):
    title = ""
    description = ""
    m = re.search(r'title:\s*"([^"]+)"', content)
    if m:
        title = m.group(1)
        title = re.sub(r'\s*\|\s*(zeiler\.me|ZEILER\.me)\s*$', '', title)
    m = re.search(r'description:\s*"([^"]+)"', content)
    if m:
        description = m.group(1)
    return title, description

def clean(text):
    """Clean JSX to plain text/markdown."""
    for _ in range(3):
        text = re.sub(r'<strong(?:\s[^>]*)?>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
        text = re.sub(r'<b(?:\s[^>]*)?>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
        text = re.sub(r'<em(?:\s[^>]*)?>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
        text = re.sub(r'<i(?:\s[^>]*)?>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '  \n', text)
    text = re.sub(r'<[^>]+/?>', '', text)
    text = re.sub(r'\{[^}]*\}', '', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def extract_body_ordered(content):
    """Extract body content in document order, interleaving headings and paragraphs."""
    # Find prose section
    idx = content.find('prose')
    if idx == -1:
        idx = content.find('ArticleLayout')
    if idx == -1:
        idx = content.find('return (')
    if idx == -1:
        return ""
    
    section = content[idx:]
    
    # Collect all content elements with their positions
    elements = []
    
    # Headings
    for m in re.finditer(r'<(h[1-6])(?:\s[^>]*)?>([\s\S]*?)</\1>', section):
        level = int(m.group(1)[1])
        text = clean(m.group(2))
        if text:
            elements.append((m.start(), 'heading', level, text))
    
    # Paragraphs
    for m in re.finditer(r'<p(?:\s[^>]*)?>([\s\S]*?)</p>', section):
        text = clean(m.group(1))
        if text and len(text) > 15:
            elements.append((m.start(), 'paragraph', 0, text))
    
    # List items (group consecutive ones)
    list_items = []
    last_list_pos = -100
    for m in re.finditer(r'<li(?:\s[^>]*)?>([\s\S]*?)</li>', section):
        text = clean(m.group(1))
        if text:
            if m.start() - last_list_pos > 500:
                # New list group
                if list_items:
                    items_text = '\n'.join(f'- {item}' for item in list_items)
                    elements.append((last_list_pos, 'list', 0, items_text))
                    list_items = []
            list_items.append(text)
            last_list_pos = m.start()
    if list_items:
        items_text = '\n'.join(f'- {item}' for item in list_items)
        elements.append((last_list_pos, 'list', 0, items_text))
    
    # Blockquotes
    for m in re.finditer(r'<blockquote(?:\s[^>]*)?>([\s\S]*?)</blockquote>', section):
        text = clean(m.group(1))
        if text and len(text) > 15:
            quoted = '\n'.join(f'> {line}' for line in text.split('\n'))
            elements.append((m.start(), 'quote', 0, quoted))
    
    # Sort by position
    elements.sort(key=lambda x: x[0])
    
    # Build markdown
    lines = []
    for pos, etype, level, text in elements:
        if etype == 'heading':
            lines.append(f"\n{'#' * level} {text}\n")
        elif etype == 'paragraph':
            lines.append(f"\n{text}\n")
        elif etype == 'list':
            lines.append(f"\n{text}\n")
        elif etype == 'quote':
            lines.append(f"\n{text}\n")
    
    return '\n'.join(lines)

def get_url_slug(filepath):
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    parts = [p for p in parts if p != 'page.tsx']
    return '/'.join(parts)

def get_mdx_path(filepath):
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    parts = [p for p in parts if p != 'page.tsx']
    if not parts:
        return None
    slug = parts[-1]
    collection = '/'.join(parts[:-1])
    if collection:
        return os.path.join(CONTENT_BASE, collection, f"{slug}.mdx")
    else:
        return os.path.join(CONTENT_BASE, f"{slug}.mdx")

def generate_tags(filepath):
    rel = os.path.relpath(filepath, SRC_BASE)
    path_str = rel.replace(os.sep, '/').lower()
    tags = []
    
    if 'deutsch' in path_str:
        tags += ["Deutsch", "Literatur"]
    if 'geschichte' in path_str.split('/')[0]:
        tags += ["Geschichte"]
    if 'medien' in path_str.split('/')[0]:
        tags += ["Medien"]
    if 'heidelberg' in path_str:
        tags.append("Heidelberg")
    if 'mittelalter' in path_str:
        tags.append("Mittelalter")
    if 'heiligenberg' in path_str:
        tags.append("Heiligenberg")
    if 'neuenheim' in path_str:
        tags.append("Neuenheim")
    if 'elsenz' in path_str or 'kraichgau' in path_str:
        tags.append("Kraichgau")
    if 'strafvollzug' in path_str:
        tags.append("Strafvollzug")
    if 'schulgeschichten' in path_str:
        tags.append("Schulgeschichte")
    if 'providencia' in path_str or 'providence' in path_str:
        tags.append("Providencia")
    
    return list(set(tags))

def process_file(filepath):
    content = read_file(filepath)
    title, description = extract_metadata(content)
    body = extract_body_ordered(content)
    tags = generate_tags(filepath)
    
    if not title:
        return None
    
    tags_str = ", ".join(f'"{t}"' for t in tags)
    fm = f"""---
title: "{title}"
description: "{description}"
author: "Detlef Zeiler"
tags: [{tags_str}]
---"""
    
    return fm + "\n\n" + body

def main():
    pages = []
    for root, dirs, files in os.walk(SRC_BASE):
        if 'page.tsx' in files:
            pages.append(os.path.join(root, 'page.tsx'))
    pages.sort()
    
    print(f"Found {len(pages)} page files")
    
    created = 0
    skipped = 0
    
    for filepath in pages:
        mdx_path = get_mdx_path(filepath)
        if not mdx_path:
            skipped += 1
            continue
        
        try:
            mdx_content = process_file(filepath)
            if mdx_content and len(mdx_content.strip()) > 80:
                write_file(mdx_path, mdx_content)
                rel = os.path.relpath(mdx_path, BASE_DIR)
                print(f"  ✓ {rel} ({len(mdx_content)} bytes)")
                created += 1
            else:
                print(f"  ✗ {os.path.relpath(filepath, BASE_DIR)} — too short")
                skipped += 1
        except Exception as e:
            print(f"  ✗ {os.path.relpath(filepath, BASE_DIR)} — ERROR: {e}")
            skipped += 1
    
    print(f"\nDone: {created} created, {skipped} skipped")

if __name__ == '__main__':
    main()
