import React, { useState } from 'react';
import { 
  PackageCheck, 
  Info, 
  Scale, 
  Clock, 
  MapPin, 
  Droplet, 
  Apple, 
  Cross, 
  Flashlight, 
  Volume2, 
  BatteryCharging, 
  FileText, 
  Coins, 
  Shirt, 
  Shield, 
  Radio, 
  Wrench,
  Sparkles,
  AlertTriangle,
  HeartHandshake,
  Baby,
  Users,
  ShieldCheck,
  CalendarCheck,
  Luggage,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { getChecklistItems } from '../data/checklistData';
import { soundEngine } from '../audio/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface EmergencyChecklistViewProps {
  onNavigate?: (view: any) => void;
}

export const EmergencyChecklistView: React.FC<EmergencyChecklistViewProps> = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('dv3d_checklist_ids');
    return saved ? JSON.parse(saved) : ['tsb_water', 'tsb_food', 'tsb_p3k', 'tsb_flashlight'];
  });

  const items = getChecklistItems(language);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplet': return <Droplet className="w-5 h-5 text-cyan-400" />;
      case 'Apple': return <Apple className="w-5 h-5 text-emerald-400" />;
      case 'Cross': return <Cross className="w-5 h-5 text-rose-400" />;
      case 'Flashlight': return <Flashlight className="w-5 h-5 text-amber-400" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-yellow-400" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-blue-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-indigo-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-amber-300" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-teal-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-violet-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-orange-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-slate-300" />;
      case 'Heart': return <Heart className="w-5 h-5 text-pink-400" />;
      default: return <PackageCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = [
    { id: 'ALL', label: t('checklist.filterAll') },
    { id: 'Kebutuhan Pokok', label: t('checklist.catBasic') },
    { id: 'Pertolongan & Medis', label: t('checklist.catMedical') },
    { id: 'Komunikasi & Penerangan', label: t('checklist.catComms') },
    { id: 'Dokumen & Perlindungan', label: t('checklist.catDocs') }
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? items
    : items.filter(it => it.category === selectedCategory);

  const toggleItem = (id: string) => {
    soundEngine.playClick();
    setCheckedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('dv3d_checklist_ids', JSON.stringify(next));
      return next;
    });
  };

  const resetChecklist = () => {
    soundEngine.playClick();
    setCheckedIds([]);
    localStorage.removeItem('dv3d_checklist_ids');
  };

  const totalCheckedWeight = items
    .filter(it => checkedIds.includes(it.id))
    .reduce((sum, it) => sum + it.weightKg, 0);

  const completionRate = Math.round((checkedIds.length / items.length) * 100);

  const getImportanceBadge = (importance: string) => {
    if (importance === 'Sangat Wajib') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
          {t('checklist.mustHave')}
        </span>
      );
    } else if (importance === 'Penting') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
          {t('checklist.important')}
        </span>
      );
    } else {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
          {t('checklist.supplementary')}
        </span>
      );
    }
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 w-full flex-1 animate-in fade-in duration-300 flex flex-col">
      {/* Page Title Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'BNPB INDONESIA DISASTER PREPAREDNESS STANDARD' : 'STANDAR MITIGASI KESIAPSIAGAAN BNPB INDONESIA'}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          {t('checklist.title')}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          {t('checklist.subtitle')}
        </p>
      </div>

      {/* Progress & Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Progress Bar Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-zinc-400">{t('checklist.readyProgress')}</span>
            <span className="text-sm font-black text-emerald-400">{completionRate}%</span>
          </div>
          <div className="w-full bg-zinc-950 h-3 rounded-full overflow-hidden border border-zinc-800">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500 rounded-full"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <div className="text-[11px] text-zinc-400 mt-2">
            {checkedIds.length} {t('checklist.of')} {items.length} {t('checklist.itemsPacked')}
          </div>
        </div>

        {/* Total Weight Estimate */}
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400">{t('checklist.totalWeight')}</span>
            <div className="text-2xl font-black text-white mt-1">
              {totalCheckedWeight.toFixed(1)} <span className="text-sm font-normal text-zinc-400">kg</span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              {language === 'en' ? 'Ideal max weight for adults: ≤ 10-12 kg' : 'Batas ideal tas evakuasi dewasa: ≤ 10-12 kg'}
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Scale className="w-6 h-6" />
          </div>
        </div>

        {/* Reset / Actions Card */}
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-zinc-400">{t('checklist.itemsPacked')}</span>
            <div className="text-sm font-bold text-white mt-1">
              {completionRate === 100 ? (
                <span className="text-emerald-400 font-extrabold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> {t('checklist.readyBadge')}
                </span>
              ) : (
                <span>{items.length - checkedIds.length} {language === 'en' ? 'items remaining' : 'barang belum siap'}</span>
              )}
            </div>
          </div>
          <button
            onClick={resetChecklist}
            className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-bold border border-zinc-700 flex items-center gap-1.5 transition-all"
            title={t('checklist.resetAll')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('checklist.resetAll')}</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundEngine.playClick();
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Checklist Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isChecked
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-sm'
                  : 'bg-zinc-900 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {/* Checkbox box */}
              <div className={`w-6 h-6 rounded-lg border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                isChecked
                  ? 'bg-emerald-600 border-emerald-500 text-white'
                  : 'bg-zinc-950 border-zinc-700 text-transparent'
              }`}>
                <CheckCircle2 className="w-4 h-4 fill-white text-emerald-600" />
              </div>

              {/* Icon Container */}
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className={`text-sm font-bold truncate ${isChecked ? 'text-emerald-300' : 'text-white'}`}>
                    {item.name}
                  </h4>
                  {getImportanceBadge(item.importance)}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="text-[10px] text-zinc-400 mt-2 font-mono">
                  {language === 'en' ? 'Est. weight:' : 'Est. berat:'} <span className="text-zinc-200 font-bold">{item.weightKg} kg</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
