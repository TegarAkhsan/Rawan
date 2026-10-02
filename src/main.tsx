import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ── PWA Service Worker Registration ──────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((reg) => {
        console.log('[RAWAN SW] Registered, scope:', reg.scope);

        // Check for updates every 60 seconds
        setInterval(() => reg.update(), 60_000);

        // Notify user when a new version is available
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // New version available — show toast via custom event
              window.dispatchEvent(new CustomEvent('rawan:sw-update'));
            }
          });
        });
      })
      .catch((err) => {
        console.warn('[RAWAN SW] Registration failed:', err);
      });
  });
}
