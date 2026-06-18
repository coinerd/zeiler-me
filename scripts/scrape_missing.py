#!/usr/bin/env python3
"""
Scrape missing pages from live zeiler.me site and create MDX files.
Reads the list of missing pages from comparison.md, scrapes each one,
extracts main content, and writes MDX files with proper frontmatter.
"""

import os
import re
import time
import json
import subprocess
import sys

# Base paths
CONTENT_BASE = "/home/user/src/zeiler-me/zeiler-me/content"
LIVE_BASE = "https://www.zeiler.me"

# All missing pages from comparison.md Section 2
MISSING_PAGES = [
    # Top-level / Navigation
    ("/detlef/impressum", "Impressum", "Detlef Zeiler", ["Impressum", "Kontakt"]),
    ("/detlef/jeremia", "Jeremia", "Detlef Zeiler", ["Jeremia", "Bibel", "Altes Testament"]),
    
    # Deutsch - Missing Subpages
    ("/detlef/deutsch/homo-faber", "Homo Faber", "Detlef Zeiler", ["Deutsch", "Homo Faber", "Literatur"]),
    ("/detlef/deutsch/fremdenfeindlichkeit/armer-und-reicher-teufel", "Armer und reicher Teufel", "Detlef Zeiler", ["Deutsch", "Textinterpretation"]),
    ("/detlef/deutsch/needful-things---in-einer-kleinen-stadt/in-einer-kleinen-stadt", "In einer kleinen Stadt", "Detlef Zeiler", ["Deutsch", "Literatur"]),
    ("/detlef/deutsch/textinterpretation-1", "Textinterpretation - Die manipulierte Masse", "Detlef Zeiler", ["Deutsch", "Textinterpretation"]),
    ("/detlef/deutsch/textinterpretation/das-eiserne-kreuz", "Das Eiserne Kreuz", "Detlef Zeiler", ["Deutsch", "Textinterpretation", "Heiner Müller"]),
    ("/detlef/deutsch/textinterpretation/einige-beispiele", "Einige Beispiele", "Detlef Zeiler", ["Deutsch", "Textinterpretation"]),
    ("/detlef/deutsch/textinterpretation/einige-beispiele/armer-und-reicher-teufel-ernst-bloch", "Armer und reicher Teufel - Ernst Bloch", "Detlef Zeiler", ["Deutsch", "Textinterpretation", "Ernst Bloch"]),
    ("/detlef/deutsch/textinterpretation/einige-beispiele/wie-ist-der-mensch-michel-de-montaigne", "Wie ist der Mensch - Michel de Montaigne", "Detlef Zeiler", ["Deutsch", "Textinterpretation", "Montaigne"]),
    ("/detlef/deutsch/textinterpretation/ein-netter-kerl", "Ein netter Kerl", "Detlef Zeiler", ["Deutsch", "Textinterpretation"]),
    ("/detlef/deutsch/textinterpretation/homo-faber", "Homo Faber - Interpretation", "Detlef Zeiler", ["Deutsch", "Textinterpretation", "Homo Faber"]),
    ("/detlef/deutsch/textinterpretation/wie-ist-der-mensch-michel-de-montaigne", "Wie ist der Mensch - Michel de Montaigne", "Detlef Zeiler", ["Deutsch", "Textinterpretation", "Montaigne"]),
    ("/detlef/deutsch/versuch-einer-kurzen-beschreibung-einer-menschlichen-moral", "Versuch einer kurzen Beschreibung einer menschlichen Moral", "Detlef Zeiler", ["Deutsch", "Moral"]),
    ("/detlef/deutsch/essay-themen", "Essay Themen", "Detlef Zeiler", ["Deutsch", "Essay"]),
    
    # Geschichte - Missing
    ("/detlef/geschichte/ber-die-grausamkeit", "Über die Grausamkeit", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/ber-die-pltzliche-grausamkeit-in-einer-unglcklichen-zeit", "Über die plötzliche Grausamkeit", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/berichte-aus-einer-deutschen-diktatur", "Berichte aus einer deutschen Diktatur", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/ceausescu/idylle-und-realitt-unter-ceaucescu", "Idylle und Realität unter Ceaucescu", "Detlef Zeiler", ["Geschichte", "Ceausescu"]),
    ("/detlef/geschichte/die-mittelschicht-diskussionsthemen", "Die Mittelschicht - Diskussionsthemen", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/faschismus-als-massenbewegung", "Faschismus als Massenbewegung", "Detlef Zeiler", ["Geschichte", "Faschismus"]),
    ("/detlef/geschichte/faschismus-als-massenbewegung-2", "Faschismus als Massenbewegung 2", "Detlef Zeiler", ["Geschichte", "Faschismus"]),
    ("/detlef/geschichte/faschismus-als-massenbewegung/gerusch", "Geräusch", "Detlef Zeiler", ["Geschichte", "Faschismus"]),
    ("/detlef/geschichte/geschichte-des-neckars-und-des-philosophenwegs-ludwig-merzotto-jger", "Geschichte des Neckars und des Philosophenwegs", "Detlef Zeiler", ["Geschichte", "Heidelberg", "Neckar"]),
    ("/detlef/geschichte/grenzen", "Grenzen", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/grenzen-ii", "Grenzen II", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/grenzen-iii", "Grenzen III", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/integration", "Integration", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/jeremia", "Jeremia", "Detlef Zeiler", ["Geschichte", "Jeremia"]),
    ("/detlef/geschichte/knstliche-feindschaften", "Künstliche Feindschaften", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/mein-grovater-rudolf-zeiler", "Mein Großvater Rudolf Zeiler", "Detlef Zeiler", ["Geschichte", "Familie"]),
    ("/detlef/geschichte/mein-grovater-rudolf-zeiler/rudolf-zeiler", "Rudolf Zeiler", "Detlef Zeiler", ["Geschichte", "Familie"]),
    ("/detlef/geschichte/nicht-tdliche-waffen", "Nicht tödliche Waffen", "Detlef Zeiler", ["Geschichte"]),
    ("/detlef/geschichte/thalmann", "Thalmann", "Detlef Zeiler", ["Geschichte"]),
    
    # Medien - Missing
    ("/detlef/medien/medienerziehung/altersgemaesse-schwerpunktsetzungen", "Altersgemäße Schwerpunktsetzungen", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/aufgabenbereiche-und-zielsetzungen", "Aufgabenbereiche und Zielsetzungen", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/erlebnis-und-handlungsorientierung-als-prinzipien", "Erlebnis- und Handlungsorientierung als Prinzipien", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/gestaltung-von-audiovisuellen-medien", "Gestaltung von audiovisuellen Medien", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/leseerziehung-und-hoererziehung", "Leseerziehung und Hörerziehung", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/medienerziehung-als-gesamtgesellschaftliche-aufgabe", "Medienerziehung als gesamtgesellschaftliche Aufgabe", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/medienerziehung-im-bereich-von-computerspielen-und-interaktiven-medien", "Medienerziehung im Bereich von Computerspielen", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/medienerziehung-im-erziehungs-und-bildungszusammenhang", "Medienerziehung im Erziehungs- und Bildungszusammenhang", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/medienerziehung/vorbemerkung", "Vorbemerkung", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/schuelerzeitschriften", "Schülerzeitschriften", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/spielfilme", "Spielfilme", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/veraenderung-der-bildungs-und-erziehungssituation", "Veränderung der Bildungs- und Erziehungssituation", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/verankerung-in-den-lehrplaenen", "Verankerung in den Lehrplänen", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/zukuenftige-ansatzpunkte", "Zukünftige Ansatzpunkte", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    ("/detlef/medien/medienerziehung/zum-begriff-medienkultur", "Zum Begriff Medienkultur", "Detlef Zeiler", ["Medien", "Medienerziehung"]),
    
    # Projekte - Die Elsenz missing
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/der-steinsberg", "Der Steinsberg", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/die-elsenz", "Die Elsenz", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/mhlen-an-der-elsenz", "Mühlen an der Elsenz", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/bauernunruhen", "Bauernunruhen", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/der-gaubegriff", "Der Gaubegriff", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/der-kraichgau-als-militaerisches-operationsgebiet", "Der Kraichgau als militärisches Operationsgebiet", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/die-burg-steinsberg", "Die Burg Steinsberg", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/friedrich-hecker", "Friedrich Hecker", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/joss-fritz-und-der-bundschuh", "Joss Fritz und der Bundschuh", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    ("/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik/renaissance-im-kraichgau", "Renaissance im Kraichgau", "Detlef Zeiler", ["Projekte", "Elsenz", "Kraichgau"]),
    
    # Projekte - Heidelberg im Mittelalter missing
    ("/detlef/projekte/heidelberg-im-mittelalter/dr-jochen-goetze", "Dr. Jochen Goetze", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/freizeit", "Freizeit", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/juden", "Juden", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/juden/phase-relativer-toleranz", "Phase relativer Toleranz", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/juden/spielball-fremder-interessen", "Spielball fremder Interessen", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/literaturverzeichnis", "Literaturverzeichnis", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/mopaed", "Mopaed", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung/entstehung-und-namensgebung", "Entstehung und Namensgebung", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung/stadtaufbau", "Stadtaufbau", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung/stadtverfassung", "Stadtverfassung", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/anmerkungen", "Anmerkungen zum Strafrecht", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/constitutio-criminalis-carolina", "Constitutio Criminalis Carolina", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/richtstaetten-und-gefaengnisse", "Richtstätten und Gefängnisse", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/strafordnung", "Strafordnung", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/prozeuge/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/triumph-des-guten", "Triumph des Guten", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug/verbrechen-und-strafen", "Verbrechen und Strafen", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/ausbau-der-universitaet-und-rueckschlaege", "Ausbau der Universität und Rückschläge", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/ausbau-und-finanzierung", "Ausbau und Finanzierung", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/die-anfaenge-stadt-hof-und-universitaet", "Die Anfänge - Stadt, Hof und Universität", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/die-universitaet-zwischen-mittelalter-und-neuzeit", "Die Universität zwischen Mittelalter und Neuzeit", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/einleitung", "Einleitung", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/konflikte-mit-hofbediensteten-buergern-und-juden", "Konflikte mit Hofbediensteten, Bürgern und Juden", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/motive-fuer-den-aufbau-einer-universitaet", "Motive für den Aufbau einer Universität", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    ("/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten/studentenunruhen", "Studentenunruhen", "Detlef Zeiler", ["Projekte", "Heidelberg", "Mittelalter"]),
    
    # Projekte - Neuenheim missing
    ("/detlef/projekte/neuenheim/judenfrei", "Judenfrei", "Detlef Zeiler", ["Projekte", "Neuenheim"]),
    ("/detlef/projekte/neuenheim/mopaed", "Mopaed - Neuenheim", "Detlef Zeiler", ["Projekte", "Neuenheim"]),
    ("/detlef/projekte/neuenheim/projekt", "Projekt Neuenheim", "Detlef Zeiler", ["Projekte", "Neuenheim"]),
    
    # Projekte - Old Providence missing
    ("/detlef/projekte/old-providence-die-insel-providencia/1817-1821-die-korsaren", "1817-1821 Die Korsaren", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/aktuell-1903-heute", "Aktuell 1903-Heute", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1629", "Jahr 1629", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1641", "Jahr 1641", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1666-1670", "Jahr 1666-1670", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1666-piraterie", "Jahr 1666 Piraterie", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1670", "Jahr 1670", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1670-1767", "Jahr 1670-1767", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1767", "Jahr 1767", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1790-1803", "Jahr 1790-1803", "Detlef Zeiler", ["Projekte", "Old Providence"]),
    ("/detlef/projekte/old-providence-die-insel-providencia/jahr-1822-die-republik", "Jahr 1822 Die Republik", "Detlef Zeiler", ["Projekte", "Old Providence"]),
]

def url_to_filepath(url_path):
    """Convert URL path to local MDX file path."""
    # Strip leading slash
    path = url_path.lstrip("/")
    return os.path.join(CONTENT_BASE, path + ".mdx")

def clean_content(raw_text):
    """Clean scraped content, removing Google Sites chrome."""
    lines = raw_text.split('\n')
    cleaned = []
    skip_patterns = [
        'Search this site',
        'Embedded Files',
        'Skip to main content',
        'Skip to navigation',
        'Copy heading link',
        'Page updated',
        'Google Sites',
        'Report abuse',
        'ZEILER .me',
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
            # Remove markdown link artifacts from Google Sites
            line = re.sub(r'\[Copy heading link\]\(.*?\)', '', line)
            line = re.sub(r'\(http://www\.google\.com/url\?q=.*?\)', '', line)
            cleaned.append(line)
    
    # Remove leading/trailing empty lines
    while cleaned and not cleaned[0].strip():
        cleaned.pop(0)
    while cleaned and not cleaned[-1].strip():
        cleaned.pop()
    
    return '\n'.join(cleaned)

def create_mdx(title, description, author, tags, content):
    """Create MDX file with frontmatter."""
    tags_str = json.dumps(tags, ensure_ascii=False)
    frontmatter = f"""---
title: "{title}"
description: "{description}"
author: "{author}"
tags: {tags_str}
---"""
    return frontmatter + "\n\n" + content

def scrape_page(url):
    """Scrape a page using curl and extract content."""
    try:
        result = subprocess.run(
            ['curl', '-sL', '-H', 'User-Agent: Mozilla/5.0', url],
            capture_output=True, text=True, timeout=30
        )
        html = result.stdout
        
        # Extract main content between body tags
        # Remove script and style tags
        html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
        
        # Try to find main content area
        # Google Sites uses specific structure
        main_match = re.search(r'<div[^>]*id="sites-canvas"[^>]*>(.*?)</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
        if main_match:
            content_html = main_match.group(1)
        else:
            # Fallback: try to find article or main content
            content_match = re.search(r'<td[^>]*id="sites-canvas-main"[^>]*>(.*?)</td>', html, re.DOTALL)
            if content_match:
                content_html = content_match.group(1)
            else:
                content_html = html
        
        # Convert HTML to simple text/markdown
        # Replace <br> with newlines
        content_html = re.sub(r'<br\s*/?>', '\n', content_html)
        # Replace <p> with double newlines
        content_html = re.sub(r'</p>', '\n\n', content_html)
        content_html = re.sub(r'<p[^>]*>', '', content_html)
        # Replace headings
        content_html = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1', content_html, flags=re.DOTALL)
        # Replace bold/italic
        content_html = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', content_html, flags=re.DOTALL)
        content_html = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', content_html, flags=re.DOTALL)
        # Replace links
        content_html = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', content_html, flags=re.DOTALL)
        # Replace list items
        content_html = re.sub(r'<li[^>]*>', '- ', content_html)
        content_html = re.sub(r'</li>', '', content_html)
        # Remove remaining HTML tags
        content_html = re.sub(r'<[^>]+>', '', content_html)
        # Clean up HTML entities
        content_html = content_html.replace('&amp;', '&')
        content_html = content_html.replace('&lt;', '<')
        content_html = content_html.replace('&gt;', '>')
        content_html = content_html.replace('&quot;', '"')
        content_html = content_html.replace('&#39;', "'")
        content_html = content_html.replace('&nbsp;', ' ')
        
        # Clean up whitespace
        content = clean_content(content_html)
        return content
    except Exception as e:
        return f"[Error scraping page: {e}]"

def main():
    # Filter out already-created files
    already_done = {
        "/detlef/impressum", "/detlef/jeremia", "/detlef/deutsch/homo-faber",
        "/detlef/deutsch/textinterpretation-1", "/detlef/deutsch/textinterpretation/das-eiserne-kreuz"
    }
    
    remaining = [(url, title, author, tags) for url, title, author, tags in MISSING_PAGES if url not in already_done]
    
    print(f"Total missing pages to process: {len(remaining)}")
    
    created = []
    failed = []
    
    for i, (url_path, title, author, tags) in enumerate(remaining):
        filepath = url_to_filepath(url_path)
        
        # Skip if file already exists
        if os.path.exists(filepath):
            print(f"[SKIP] {filepath} already exists")
            created.append(url_path)
            continue
        
        full_url = LIVE_BASE + url_path
        print(f"[{i+1}/{len(remaining)}] Scraping: {full_url}")
        
        content = scrape_page(full_url)
        
        if content and len(content.strip()) > 20:
            # Create directory if needed
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            
            mdx_content = create_mdx(title, title, author, tags, content)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            
            size = os.path.getsize(filepath)
            print(f"  -> Created: {filepath} ({size} bytes)")
            created.append(url_path)
        else:
            # Create a placeholder if scrape failed
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            mdx_content = create_mdx(title, title, author, tags, f"# {title}\n\n*Content from live site: {full_url}*\n\n[Content needs to be manually copied from the live site.]")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(mdx_content)
            print(f"  -> Created placeholder: {filepath}")
            failed.append(url_path)
        
        # Small delay to be polite
        time.sleep(0.5)
    
    print(f"\n=== RESULTS ===")
    print(f"Created: {len(created)} files")
    print(f"Failed/Placeholder: {len(failed)} files")
    if failed:
        print(f"Failed URLs:")
        for u in failed:
            print(f"  {u}")
    
    return created, failed

if __name__ == "__main__":
    main()
