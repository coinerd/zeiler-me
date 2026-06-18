'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FeedbackWidget() {
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null);

  return (
    <div className="mt-12 border-t pt-8">
      <p className="mb-3 text-sm text-muted-foreground">War dieser Artikel hilfreich?</p>
      <div className="flex items-center gap-2">
        <Button
          variant={feedback === 'positive' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFeedback('positive')}
          aria-label="Ja, hilfreich"
        >
          <ThumbsUp className="mr-1 h-4 w-4" />
          Ja
        </Button>
        <Button
          variant={feedback === 'negative' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFeedback('negative')}
          aria-label="Nein, nicht hilfreich"
        >
          <ThumbsDown className="mr-1 h-4 w-4" />
          Nein
        </Button>
        {feedback && (
          <span className="ml-2 text-sm text-muted-foreground">Danke für Ihr Feedback!</span>
        )}
      </div>
    </div>
  );
}
