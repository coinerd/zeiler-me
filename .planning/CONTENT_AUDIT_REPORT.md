# Website Content Audit Report: Live (zeiler.me) vs Local Re-design

**Date:** $(date +%Y-%m-%d)
**Status:** AUDIT COMPLETE — Issues Found

---

## Summary

| Category          | Live Site         | Local Re-design | Status                      |
| ----------------- | ----------------- | --------------- | --------------------------- |
| Navigation URLs   | 189               | 194+ MDX pages  | ✅ Local has MORE content   |
| Images            | ~73 referenced    | 71 of 72 exist  | ⚠️ 1 missing image          |
| YouTube links     | 1 (homepage)      | 0               | ❌ Missing                  |
| Nested navigation | 5 levels deep     | 2 levels        | ⚠️ Limited nav depth        |
| Impressum page    | /detlef/impressum | /impressum      | ✅ Present (different path) |

---

## 1. PAGE COVERAGE

### ✅ All live pages have local equivalents

Every single page from the live Google Sites website (189 navigation URLs) has been migrated to the local Next.js re-design. The local site actually has **8 additional pages** not in the live navigation.

### ⚠️ Pages with different URL paths (2)

| Live URL                                                      | Local URL                                                     | Note              |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ----------------- |
| `/detlef/medien/medienerziehung/medienkompetenz-vorbemerkung` | `/detlef/medien/medienerziehung/medienerziehung/vorbemerkung` | Different slug    |
| `/detlef/geschichte/das-eiserne-kreuz`                        | `/detlef/deutsch/textinterpretation/das-eiserne-kreuz`        | Different section |

### ✅ Landing pages

- `/detlef` → exists via `app/detlef/page.tsx`
- `/home` (Google Sites) → local uses `/`
- `/julian` → exists via `app/julian/page.tsx`
- `/impressum` → exists at root level

---

## 2. IMAGE COVERAGE

### ✅ 71 of 72 images present

- Total unique image references: 73
- Found on disk: 71
- False positive (code reference): 1 (`/images/og/default.png` in json-ld.ts)

### ❌ 1 Missing Image

- **`/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-2.jpg`**
  - Only `image-1.jpg` exists in this directory
  - The MDX frontmatter references `image-1.jpg` only
  - No `image-2.jpg` reference found in the MDX body

---

## 3. YOUTUBE / VIDEO LINKS

### ❌ CRITICAL: YouTube video link missing

- **Live site homepage** has: `https://www.youtube.com/watch?v=B8ozX05lG50` (Heidelberg-Rohrbach video)
- **Local site**: NO YouTube or video links found anywhere in content or source files
- **Action needed**: Add YouTube video embed/link to the homepage or /detlef landing page

---

## 4. NAVIGATION & SUB-PAGE LINKING

### ⚠️ Navigation depth limited

- **Live site**: Full nested navigation up to 5 levels deep (hierarchical menu)
- **Local site**: Only 2 levels in the main navigation:
  - Detlef Zeiler → (Geschichte, Projekte, Deutsch, Medien)
  - Julian Zeiler → (Artikel)
- **Impact**: Many sub-pages (e.g., individual articles, sub-sections) are NOT directly accessible from the main navigation

### ✅ Internal linking in content

- 110 internal links found across MDX content files
- Parent pages like `/detlef/projekte/heidelberg-im-mittelalter` link to child pages

### ⚠️ Sitemap coverage

- `sitemap.ts` includes major sections but hardcoded
- All 194 pages should be dynamically generated from content

---

## 5. REMAINING BLOCKERS

| #   | Issue                | Severity   | Details                                                       |
| --- | -------------------- | ---------- | ------------------------------------------------------------- |
| 1   | Missing YouTube link | **HIGH**   | `youtube.com/watch?v=B8ozX05lG50` not included locally        |
| 2   | Missing image file   | **LOW**    | `hexenglauben-und-hexenprozesse/image-2.jpg`                  |
| 3   | Navigation depth     | **MEDIUM** | Only 2-level nav vs live's 5-level; many sub-pages not in nav |
| 4   | URL path differences | **LOW**    | 2 pages have different slugs than live site                   |
| 5   | OG default image     | **LOW**    | `/images/og/default.png` referenced but doesn't exist         |

---

## 6. GOAL ASSESSMENT

**Goal**: Check if all pages of the live website are also on the local re-design including images and other linked documents (like YouTube videos) and that all sub-pages are linked to so the user can easily access them.

**Status**: ⚠️ NOT FULLY ACHIEVED

- ✅ All pages from live site are present locally
- ✅ Almost all images are present (71/72)
- ❌ YouTube video link from homepage is missing
- ⚠️ Sub-page navigation is significantly less deep than the live site (2 levels vs 5 levels)
