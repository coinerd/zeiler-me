#!/usr/bin/env python3
"""
Extract Detlef article content to MDX files.
Reads each page.tsx, extracts metadata and text content, writes .mdx files.
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
    """Extract metadata from the metadata export."""
    title = ""
    description = ""
    
    # Title
    m = re.search(r'title:\s*"([^"]+)"', content)
    if m:
        title = m.group(1)
        # Remove site suffix
        title = re.sub(r'\s*\|\s*(zeiler\.me|ZEILER\.me)\s*$', '', title)
    
    # Description
    m = re.search(r'description:\s*"([^"]+)"', content)
    if m:
        description = m.group(1)
    
    return title, description

def clean_jsx_to_markdown(text):
    """Convert JSX inline markup to Markdown."""
    # Handle nested elements first
    # <strong>text</strong> -> **text**
    for _ in range(3):  # Multiple passes for nesting
        text = re.sub(r'<strong(?:\s[^>]*)?>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
        text = re.sub(r'<b(?:\s[^>]*)?>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
        text = re.sub(r'<em(?:\s[^>]*)?>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
        text = re.sub(r'<i(?:\s[^>]*)?>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    
    # <a href="url">text</a> -> [text](url)
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    
    # <br/> -> newline
    text = re.sub(r'<br\s*/?>', '  \n', text)
    
    # Remove remaining JSX tags (but keep their text content)
    text = re.sub(r'<[^>]+/?>', '', text)
    
    # Remove JSX expressions like {variable}
    text = re.sub(r'\{[^}]*\}', '', text)
    
    # Clean whitespace
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n\s*\n', '\n\n', text)
    
    return text.strip()

def extract_prose_text(content):
    """
    Extract the main article text from JSX and convert to Markdown.
    
    Strategy: Parse the JSX looking for content-bearing elements
    (headings, paragraphs, lists, blockquotes, etc.) in the prose section.
    """
    result_parts = []
    
    # Find where the main content begins
    # Look for the prose div, the ArticleLayout children, or the main content area
    prose_marker = content.find('prose prose-lg')
    if prose_marker == -1:
        prose_marker = content.find('prose dark')
    if prose_marker == -1:
        prose_marker = content.find('prose max-w')
    if prose_marker == -1:
        prose_marker = content.find('ArticleLayout')
    
    # If we found a prose section, start from there
    if prose_marker > 0:
        # Back up to find the enclosing div
        content_section = content[prose_marker:]
    else:
        # Try after the return statement
        ret = content.find('return (')
        if ret > 0:
            content_section = content[ret:]
        else:
            return ""
    
    # Now extract structured content
    
    # 1. Headings: <h1> through <h6>
    for m in re.finditer(
        r'<(h[1-6])(?:\s[^>]*)?>\s*(.*?)\s*</\1>',
        content_section, re.DOTALL
    ):
        level = int(m.group(1)[1])
        inner = clean_jsx_to_markdown(m.group(2))
        if inner and len(inner) > 1:
            result_parts.append(f"\n{'#' * level} {inner}\n")
    
    # 2. Paragraphs: <p>...</p> (but skip className-only ones in cards/badges)
    for m in re.finditer(
        r'<p(?:\s[^>]*)?>(.*?)</p>',
        content_section, re.DOTALL
    ):
        inner = m.group(1).strip()
        text = clean_jsx_to_markdown(inner)
        # Skip very short texts (likely labels/badges)
        if text and len(text) > 20:
            result_parts.append(f"\n{text}\n")
    
    # 3. List items (group them)
    list_items = []
    for m in re.finditer(
        r'<li(?:\s[^>]*)?>(.*?)</li>',
        content_section, re.DOTALL
    ):
        inner = m.group(1).strip()
        text = clean_jsx_to_markdown(inner)
        if text:
            list_items.append(f"- {text}")
    
    if list_items:
        result_parts.append("\n" + "\n".join(list_items) + "\n")
    
    # 4. Blockquotes
    for m in re.finditer(
        r'<blockquote(?:\s[^>]*)?>(.*?)</blockquote>',
        content_section, re.DOTALL
    ):
        inner = m.group(1).strip()
        text = clean_jsx_to_markdown(inner)
        if text:
            lines = text.split('\n')
            result_parts.append("\n" + "\n".join(f"> {l}" for l in lines) + "\n")
    
    return '\n'.join(result_parts)

def extract_subtitle(content):
    """Try to extract subtitle / lead text."""
    # Look for common subtitle patterns
    m = re.search(r'text-xl text-muted-foreground[^>]*>\s*(.*?)\s*</p>', content, re.DOTALL)
    if m:
        return clean_jsx_to_markdown(m.group(1))
    
    m = re.search(r'className="lead"[^>]*>\s*(.*?)\s*</p>', content, re.DOTALL)
    if m:
        return clean_jsx_to_markdown(m.group(1))
    
    return ""

def get_url_slug(filepath):
    """Get URL slug from filepath."""
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    # Remove 'page.tsx' from the end
    parts = [p for p in parts if p != 'page.tsx']
    return '/'.join(parts)

def determine_collection(filepath):
    """Determine the MDX collection (directory) from filepath."""
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    
    # detlef/deutsch/ceausescu -> collection is "deutsch"
    # detlef/projekte/heiligenberg/geschichte -> collection is "projekte/heiligenberg"
    if len(parts) >= 2:
        # For projekte sub-projects, we use the full sub-path
        if parts[0] == 'projekte' and len(parts) > 2:
            return 'projekte/' + '/'.join(parts[1:-1])
        return parts[0] if parts[0] != 'page.tsx' else ''
    return ''

def get_mdx_path(filepath):
    """Get the output MDX filepath."""
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    
    # Remove 'page.tsx'
    parts = [p for p in parts if p != 'page.tsx']
    
    # The slug is the last component
    if parts:
        slug = parts[-1]
        collection = '/'.join(parts[:-1])
    else:
        return None
    
    if collection:
        return os.path.join(CONTENT_BASE, collection, f"{slug}.mdx")
    else:
        return os.path.join(CONTENT_BASE, f"{slug}.mdx")

def generate_tags_from_path(filepath, title):
    """Generate tags based on path and title."""
    rel = os.path.relpath(filepath, SRC_BASE)
    parts = rel.replace(os.sep, '/').split('/')
    tags = []
    
    # Category-based tags
    if 'deutsch' in parts:
        tags.append("Deutsch")
        tags.append("Literatur")
    elif 'geschichte' in parts:
        tags.append("Geschichte")
    elif 'medien' in parts:
        tags.append("Medien")
    
    # Project-specific tags
    if 'heidelberg' in '/'.join(parts).lower():
        tags.append("Heidelberg")
    if 'mittelalter' in '/'.join(parts).lower():
        tags.append("Mittelalter")
    if 'heiligenberg' in '/'.join(parts).lower():
        tags.append("Heiligenberg")
    if 'neuenheim' in '/'.join(parts).lower():
        tags.append("Neuenheim")
    if 'elsenz' in '/'.join(parts).lower() or 'kraichgau' in '/'.join(parts).lower():
        tags.append("Kraichgau")
    if 'strafvollzug' in '/'.join(parts).lower():
        tags.append("Strafvollzug")
    if 'schulgeschichten' in '/'.join(parts).lower():
        tags.append("Schulgeschichte")
    if 'providencia' in '/'.join(parts).lower() or 'providence' in '/'.join(parts).lower():
        tags.append("Providencia")
    
    return list(set(tags))

def process_file(filepath):
    """Process a single page.tsx and return MDX content."""
    content = read_file(filepath)
    title, description = extract_metadata(content)
    body = extract_prose_text(content)
    subtitle = extract_subtitle(content)
    tags = generate_tags_from_path(filepath, title)
    
    if not title:
        return None
    
    # Build frontmatter
    tags_str = ", ".join(f'"{t}"' for t in tags)
    fm = f"""---
title: "{title}"
description: "{description}"
author: "Detlef Zeiler"
tags: [{tags_str}]
---"""
    
    # Build body with optional subtitle
    mdx_body = ""
    if subtitle and not body.startswith(subtitle[:30]):
        mdx_body = f"\n\n{subtitle}"
    
    mdx_body += f"\n\n{body}"
    
    return fm + mdx_body

def main():
    # Find all page.tsx files
    pages = []
    for root, dirs, files in os.walk(SRC_BASE):
        if 'page.tsx' in files:
            pages.append(os.path.join(root, 'page.tsx'))
    
    pages.sort()
    
    print(f"Found {len(pages)} page files")
    
    created = 0
    skipped = 0
    errors = 0
    
    for filepath in pages:
        mdx_path = get_mdx_path(filepath)
        if not mdx_path:
            skipped += 1
            continue
        
        try:
            mdx_content = process_file(filepath)
            if mdx_content and len(mdx_content.strip()) > 100:
                write_file(mdx_path, mdx_content)
                rel = os.path.relpath(mdx_path, BASE_DIR)
                print(f"  ✓ {rel} ({len(mdx_content)} bytes)")
                created += 1
            else:
                print(f"  ✗ {os.path.relpath(filepath, BASE_DIR)} — too short or empty")
                skipped += 1
        except Exception as e:
            print(f"  ✗ {os.path.relpath(filepath, BASE_DIR)} — ERROR: {e}")
            errors += 1
    
    print(f"\nDone: {created} created, {skipped} skipped, {errors} errors")

if __name__ == '__main__':
    main()
