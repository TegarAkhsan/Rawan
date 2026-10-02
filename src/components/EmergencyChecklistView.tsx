import React, { useState } from 'react';
import { 
  PackageCheck, 
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
  ShieldCheck,
  Luggage
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
      default: return <PackageCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const rawCategories = [
    { id: 'ALL', label: t.checkCatAll },
    { id: 'Kebutuhan Pokok', label: t.checkCatBasic },
    { id: 'Pertolongan & Medis', label: t.checkCatMedical },
    { id: 'Komunikasi & Penerangan', label: t.checkCatComm },
    { id: 'Dokumen & Perlindungan', label: t.checkCatDocs }
  ];

  const items = getChecklistItems(language);

  const filteredItems = selectedCategory === 'ALL'
    ? items
    : items.filter(it => it.category === selectedCategory);

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'Sangat Wajib':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            {t.checkImportanceHigh}
          </span>
        );
      case 'Penting':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
            {t.checkImportanceMedium}
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            {t.checkImportanceLow}
          </span>
        );
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'Kebutuhan Pokok': return t.checkCatBasic;
      case 'Pertolongan & Medis': return t.checkCatMedical;
      case 'Komunikasi & Penerangan': return t.checkCatComm;
      case 'Dokumen & Perlindungan': return t.checkCatDocs;
      default: return cat;
    }
  };

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 w-full flex-1 animate-in fade-in duration-300 flex flex-col">
      {/* Page Title Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'BNPB INDONESIA DISASTER MITIGATION PREPAREDNESS STANDARD' : 'STANDAR MITIGASI KESIAPSIAGAAN BNPB INDONESIA'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{t.checkHeaderTitle}</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          {t.checkHeaderSubtitle}
        </p>
      </div>

      {/* 4 Core Standard Principles Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="p-5 rounded-3xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
              {language === 'en' ? 'Survival Principle' : 'Prinsip Bertahan'}
            </div>
            <h4 className="text-sm font-bold text-amber-300 mb-1">
              {language === 'en' ? '72-Hour Golden Period' : '72 Jam Golden Period'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'en' 
                ? 'Sustains individual nutrition, hydration, and first aid before emergency relief networks deploy.' 
                : 'Memenuhi nutrisi, hidrasi, dan medis mandiri sebelum posko penampungan darurat beroperasi penuh.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
              {language === 'en' ? 'Weight Capacity' : 'Kapasitas Beban'}
            </div>
            <h4 className="text-sm font-bold text-emerald-300 mb-1">
              {language === 'en' ? '15 - 20% Body Weight' : '15 - 20% Bobot Tubuh'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Packs must not exceed mobility thresholds so individuals can sprint, crouch, and move quickly.'
                : 'Ransel tidak boleh terlalu berat agar pengguna tetap dapat berlari, merunduk, dan bergerak lincah.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
              {language === 'en' ? 'Placement Location' : 'Titik Penempatan'}
            </div>
            <h4 className="text-sm font-bold text-emerald-300 mb-1">
              {language === 'en' ? 'Near Exit Door' : 'Dekat Pintu Keluar'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Store in an unobstructed area easily accessible to family members during acute evacuation.'
                : 'Diletakkan di area yang mudah dijangkau seluruh keluarga tanpa terhalang pintu atau lemari saat gempa.'}
            </p>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
            <Luggage className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
              {language === 'en' ? 'Pack Specifications' : 'Spesifikasi Tas'}
            </div>
            <h4 className="text-sm font-bold text-purple-300 mb-1">
              {language === 'en' ? 'Waterproof & High-Vis' : 'Ransel Tahan Air & Terang'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'Opt for reflective, waterproof ripstop backpacks (dry-bags) to keep survival contents dry and visible.'
                : 'Gunakan tas ransel bergaris reflektor dan berbahan kedap air (waterproof / dry-bag) agar isi tetap kering.'}
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            {language === 'en' ? 'Essential Supply Checklist' : 'Daftar Barang & Kebutuhan Esensial'}
          </h2>
          <p className="text-xs text-slate-400">
            {language === 'en' ? 'Itemized specifications and functional breakdown' : 'Rincian spesifikasi dan fungsi barang perlengkapan evakuasi'}
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {rawCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white border border-emerald-500 shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Informative Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-3xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group backdrop-blur-xl hover:-translate-y-0.5 shadow-lg"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {getCategoryLabel(item.category)}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h4>
                  </div>
                </div>

                <div className="shrink-0">
                  {getImportanceBadge(item.importance)}
                </div>
              </div>

              <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-zinc-500" />
                {language === 'en' ? `Est. Weight: ~${item.weightKg} kg` : `Estimasi: ~${item.weightKg} kg`}
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">
                {language === 'en' ? 'BNPB 72H STANDARD' : 'STANDAR 72H BNPB'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
