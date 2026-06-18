'use client';

import { Mail, Link as LinkIcon, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareButtons({ title, url, className = '' }: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="mr-1 text-sm text-muted-foreground">Teilen:</span>
      <Button variant="ghost" size="icon" aria-label="Per E-Mail teilen" asChild>
        <a href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
          <Mail className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" aria-label="Per WhatsApp teilen" asChild>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" aria-label="Link kopieren" onClick={copyLink}>
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
