import React, { useState, useEffect } from 'react';
import { Download, X, RefreshCw, WifiOff } from 'lucide-react';

/**
 * PWAPrompt
 * Handles three UI states:
 *  1. Install banner  — shown when browser fires 'beforeinstallprompt'
 *  2. Update toast    — shown when SW detects a new version
 *  3. Offline badge   — shown when navigator.onLine === false
 */
export const PWAPrompt: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstall, setShowInstall]   = useState(false);
  const [showUpdate, setShowUpdate]     = useState(false);
  const [isOffline, setIsOffline]       = useState(!navigator.onLine);

  useEffect(() => {
    // ── Install prompt ──
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // ── App installed ──
    window.addEventListener('appinstalled', () => setShowInstall(false));

    // ── SW update available ──
    const handleSwUpdate = () => setShowUpdate(true);
    window.addEventListener('rawan:sw-update', handleSwUpdate);

    // ── Offline/Online detection ──
    const goOffline = () => setIsOffline(true);
    const goOnline  = () => setIsOffline(false);
    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('rawan:sw-update', handleSwUpdate);
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setShowInstall(false);
    setInstallPrompt(null);
  };

  const handleUpdate = () => {
    window.location.reload();
  };

  return (
    <>
      {/* ── Offline Badge (top-center) ── */}
      {isOffline && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-300 shadow-lg animate-in slide-in-from-top-2 duration-300">
          <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          Mode Offline — konten tersimpan tersedia
        </div>
      )}

      {/* ── Update Toast (bottom-right) ── */}
      {showUpdate && (
        <div className="fixed bottom-6 right-4 z-[9999] max-w-xs bg-zinc-900 border border-emerald-600/50 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-600/40 flex items-center justify-center shrink-0">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white mb-0.5">Versi baru tersedia!</p>
              <p className="text-[11px] text-zinc-400 leading-snug">Muat ulang untuk mendapatkan pembaruan terbaru RAWAN.</p>
            </div>
            <button onClick={() => setShowUpdate(false)} className="text-zinc-500 hover:text-zinc-300 shrink-0 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={handleUpdate}
            className="mt-3 w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Muat Ulang Sekarang
          </button>
        </div>
      )}

      {/* ── Install Banner (bottom-center) ── */}
      {showInstall && !showUpdate && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm bg-zinc-900/95 backdrop-blur-md border border-zinc-700 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-400">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo_rawan.png" alt="RAWAN" className="w-10 h-10 rounded-xl object-contain" />
            <div>
              <p className="text-sm font-bold text-white leading-tight">Pasang RAWAN di HP kamu</p>
              <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">Akses tanpa browser, layar penuh, & bisa offline</p>
            </div>
            <button onClick={() => setShowInstall(false)} className="ml-auto text-zinc-500 hover:text-zinc-300 shrink-0 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowInstall(false)}
              className="flex-1 py-2 rounded-xl border border-zinc-700 text-zinc-400 text-xs font-semibold hover:border-zinc-500 transition-colors cursor-pointer"
            >
              Nanti saja
            </button>
            <button
              onClick={handleInstall}
              className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Pasang Sekarang
            </button>
          </div>
        </div>
      )}
    </>
  );
};
