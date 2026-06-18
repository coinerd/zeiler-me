'use client';

import { useEffect } from 'react';

/**
 * In development mode, unregister any existing service workers to prevent
 * stale production SWs from intercepting requests and causing chunk load errors.
 */
export function SWUnregister() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister().then((success) => {
            if (success) {
              console.log('[PWA] Unregistered stale service worker in dev mode');
            }
          });
        }
      });

      // Also clear all caches in dev mode
      if ('caches' in window) {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }
    }
  }, []);

  return null;
}
