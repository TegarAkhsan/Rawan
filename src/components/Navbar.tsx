import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Settings, 
  MapPin, 
  PackageCheck, 
  Award, 
  Layers,
  Menu,
  X,
  Home,
  Languages
} from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenAccessibility: () => void;
  userXp?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  soundEnabled,
  onToggleSound,
  onOpenAccessibility,
  userXp = 0
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handleNav = (view: string) => {
    soundEngine.playClick();
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundEngine.setVolume(val);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-2 h-14 flex items-center justify-between backdrop-blur-xl bg-black/95 border-b border-zinc-800">
      {/* Brand / Logo */}
      <div 
        className="flex items-center gap-2.5 cursor-pointer group"
        onClick={() => handleNav('HOME')}
      >
        <img 
          src="/logo_rawan.png" 
          alt="Logo RAWAN" 
          className="w-7 h-7 object-contain group-hover:scale-105 transition-transform" 
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-base sm:text-lg font-black tracking-tight text-white">RAWAN</span>
          </div>
          <p className="text-[9px] text-zinc-400 tracking-wide hidden sm:block leading-none">
            {t('nav.brandTagline')}
          </p>
        </div>
      </div>

      {/* Main Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-1 bg-zinc-950 p-0.5 rounded-lg border border-zinc-800 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <button
          onClick={() => handleNav('HOME')}
          className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentView === 'HOME' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <Home className="w-3.5 h-3.5" /> {t('nav.home')}
        </button>

        <button
          onClick={() => handleNav('MODULES')}
          className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentView === 'MODULES' || currentView === 'SIMULATION' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> {t('nav.modules')}
        </button>

        <button
          onClick={() => handleNav('MAP')}
          className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentView === 'MAP' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" /> {t('nav.map')}
        </button>

        <button
          onClick={() => handleNav('CHECKLIST')}
          className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentView === 'CHECKLIST' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <PackageCheck className="w-3.5 h-3.5" /> {t('nav.checklist')}
        </button>

        <button
          onClick={() => handleNav('QUIZ')}
          className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentView === 'QUIZ' ? 'bg-emerald-600 text-white shadow-sm' : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          }`}
        >
          <Award className="w-3.5 h-3.5" /> {t('nav.quiz')}
        </button>
      </nav>

      {/* Right Controls: Language Switcher, Sound, Accessibility & Mobile Menu Toggle */}
      <div className="flex items-center gap-2">
        
        {/* Language Switcher Pill Toggle */}
        <button
          onClick={() => {
            soundEngine.playClick();
            toggleLanguage();
          }}
          className="h-8 px-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/60 text-xs font-bold text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
        >
          <Languages className="w-3.5 h-3.5 text-emerald-400" />
          <span className="flex items-center gap-1">
            <span className={language === 'id' ? 'text-emerald-400 font-extrabold' : 'text-zinc-500'}>ID</span>
            <span className="text-zinc-600 font-normal">|</span>
            <span className={language === 'en' ? 'text-emerald-400 font-extrabold' : 'text-zinc-500'}>EN</span>
          </span>
        </button>

        {/* Sound Toggle with Volume Popover */}
        <div className="relative">
          <button
            onClick={() => {
              soundEngine.playClick();
              onToggleSound();
            }}
            onMouseEnter={() => setShowVolumeSlider(true)}
            className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
              soundEnabled
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
            title={soundEnabled ? t('nav.soundOff') : t('nav.soundOn')}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mini Volume Slider on Hover */}
          {showVolumeSlider && soundEnabled && (
            <div 
              onMouseLeave={() => setShowVolumeSlider(false)}
              className="absolute right-0 top-10 p-2.5 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl flex flex-col gap-1 w-32 animate-in fade-in z-50"
            >
              <div className="flex justify-between text-[10px] text-zinc-400 font-medium">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-zinc-800 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Accessibility Modal Trigger */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenAccessibility();
          }}
          className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all flex items-center justify-center"
          title={t('nav.accessibility')}
        >
          <Settings className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs flex items-center justify-center transition-all"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 text-rose-400" /> : <Menu className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay & Dropdown Menu */}
      {mobileMenuOpen && (
        <>
          {/* Click-outside backdrop */}
          <div 
            className="lg:hidden fixed inset-0 top-14 bg-black/70 backdrop-blur-sm z-30 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Navigation Drawer */}
          <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950/95 border-b border-zinc-800 p-3 sm:p-4 flex flex-col gap-1.5 shadow-2xl animate-in slide-in-from-top-2 z-40 backdrop-blur-xl">
            <button
              onClick={() => handleNav('HOME')}
              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                currentView === 'HOME' ? 'bg-emerald-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800'
              }`}
            >
              <Home className="w-4 h-4" /> {t('nav.home')}
            </button>

            <button
              onClick={() => handleNav('MODULES')}
              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                currentView === 'MODULES' || currentView === 'SIMULATION' ? 'bg-emerald-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800'
              }`}
            >
              <Layers className="w-4 h-4" /> {t('nav.modules')}
            </button>

            <button
              onClick={() => handleNav('MAP')}
              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                currentView === 'MAP' ? 'bg-emerald-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800'
              }`}
            >
              <MapPin className="w-4 h-4" /> {t('nav.map')}
            </button>

            <button
              onClick={() => handleNav('CHECKLIST')}
              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                currentView === 'CHECKLIST' ? 'bg-emerald-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800'
              }`}
            >
              <PackageCheck className="w-4 h-4" /> {t('nav.checklist')}
            </button>

            <button
              onClick={() => handleNav('QUIZ')}
              className={`min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                currentView === 'QUIZ' ? 'bg-emerald-600 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900 active:bg-zinc-800'
              }`}
            >
              <Award className="w-4 h-4" /> {t('nav.quiz')}
            </button>

            {/* Mobile Language Switcher */}
            <div className="pt-2 mt-2 border-t border-zinc-800 flex items-center justify-between px-2">
              <span className="text-xs font-medium text-zinc-400 flex items-center gap-2">
                <Languages className="w-4 h-4 text-emerald-400" />
                {t('accessibility.languageSection')}
              </span>
              <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    if (language !== 'id') toggleLanguage();
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    language === 'id' ? 'bg-emerald-600 text-white' : 'text-zinc-400'
                  }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    if (language !== 'en') toggleLanguage();
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    language === 'en' ? 'bg-emerald-600 text-white' : 'text-zinc-400'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
