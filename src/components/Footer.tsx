import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onSelectDisaster?: (id: any) => void;
  onOpenChecklist?: () => void;
  onOpenMap?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-6 px-6 mt-auto text-center text-xs font-medium">
      <div>© 2026 RAWAN ({t.brandTagline}) — {t.footerAttribution}</div>
    </footer>
  );
};
