'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Search, X, FileText } from 'lucide-react';

interface SearchResult {
  url: string;
  title: string;
  tags: string[];
  excerpt: string;
}

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<any>(null);

  // Load Pagefind on first open
  useEffect(() => {
    if (!isOpen) return;
    if (pagefindRef.current) return;

    async function loadPagefind() {
      try {
        // Use script tag injection to avoid bundler resolution issues
        if (typeof window !== 'undefined' && (window as any).pagefind) {
          const pf = (window as any).pagefind;
          await pf.init();
          pagefindRef.current = pf;
          return;
        }
        // Dynamically load pagefind via script tag
        const script = document.createElement('script');
        script.src = '/pagefind/pagefind.js';
        script.onload = async () => {
          try {
            const pf = (window as any).pagefind;
            if (pf) {
              await pf.init();
              pagefindRef.current = pf;
            }
          } catch {
            // Pagefind init failed
          }
        };
        script.onerror = () => {
          // Pagefind not available (dev mode or not built yet)
        };
        document.head.appendChild(script);
      } catch {
        // Pagefind not available (dev mode or not built yet)
      }
    }
    loadPagefind();
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const search = useCallback(async (value: string) => {
    setQuery(value);
    if (!pagefindRef.current || value.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const search = await pagefindRef.current.search(value);
      const data = await Promise.all(search.results.slice(0, 8).map((r: any) => r.data()));
      setResults(
        data.map((d: any) => ({
          url: d.url,
          title: d.meta?.title || d.url,
          tags: d.meta?.tags ? String(d.meta.tags).split(',') : [],
          excerpt: d.excerpt || '',
        }))
      );
    } catch {
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Keyboard: close on Escape
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[6px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="relative z-50 w-full max-w-lg overflow-hidden rounded-xl border bg-background shadow-2xl"
        role="dialog"
        aria-label="Suche"
        aria-modal="true"
      >
        {/* Search Input */}
        <div className="flex items-center border-b px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => search(e.target.value)}
            placeholder="Artikel durchsuchen..."
            className="flex-1 border-0 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Suchbegriff eingeben"
          />
          {isLoading && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
          )}
          <button
            onClick={onClose}
            className="rounded-sm p-1 hover:bg-accent"
            aria-label="Suche schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
            {results.map((result) => (
              <li key={result.url} role="option" aria-selected={false}>
                <a
                  href={result.url}
                  onClick={onClose}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
                >
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium leading-tight">{result.title}</div>
                    {result.tags.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {result.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-primary/10 px-1.5 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    {result.excerpt && (
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {result.excerpt}
                      </p>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        {query.length >= 2 && results.length === 0 && !isLoading && (
          <div className="px-4 py-8 text-center text-sm text-muted-foreground">
            Keine Ergebnisse für &quot;{query}&quot;
          </div>
        )}

        {query.length < 2 && (
          <div className="px-4 py-6 text-center text-xs text-muted-foreground">
            Mindestens 2 Zeichen eingeben zum Suchen
          </div>
        )}

        {/* Footer hint */}
        <div className="border-t px-4 py-2 text-xs text-muted-foreground">
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">ESC</kbd> zum
          Schließen
        </div>
      </div>
    </div>
  );
}
