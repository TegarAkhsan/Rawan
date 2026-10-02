import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Activity, 
  Flame, 
  ShieldCheck, 
  Compass, 
  Play, 
  Volume2, 
  Sparkles,
  History,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { DisasterId } from '../types/disaster';
import { getDisaster } from '../data/disasterData';
import { soundEngine } from '../audio/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface DisasterDetailModalProps {
  disasterId: DisasterId | null;
  onClose: () => void;
  onStartSimulation: (id: DisasterId) => void;
  onStartQuiz: (id: DisasterId) => void;
}

type TabType = 'causes' | 'signs' | 'impacts' | 'prevention' | 'emergency' | 'evacuation';

export const DisasterDetailModal: React.FC<DisasterDetailModalProps> = ({
  disasterId,
  onClose,
  onStartSimulation,
  onStartQuiz
}) => {
  const { language, t } = useLanguage();
  if (!disasterId) return null;
  const data = getDisaster(disasterId, language);
  const [activeTab, setActiveTab] = useState<TabType>('causes');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'causes', label: t.modalTabCauses, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'signs', label: t.modalTabWarning, icon: <Activity className="w-4 h-4" /> },
    { id: 'impacts', label: t.modalTabImpacts, icon: <Flame className="w-4 h-4" /> },
    { id: 'prevention', label: t.modalTabPrevention, icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'emergency', label: t.modalTabEmergency, icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'evacuation', label: t.modalTabEvacuation, icon: <Compass className="w-4 h-4" /> },
  ];

  const handleSpeech = (text: string) => {
    if (isSpeaking) {
      soundEngine.stopSpeaking();
      setIsSpeaking(false);
    } else {
      soundEngine.speak(text, language);
      setIsSpeaking(true);
    }
  };

  const getCurrentSection = () => {
    switch (activeTab) {
      case 'causes': return data.causes;
      case 'signs': return data.warningSigns;
      case 'impacts': return data.impacts;
      case 'prevention': return data.prevention;
      case 'emergency': return data.emergencyProcedures;
      case 'evacuation': return data.evacuation;
    }
  };

  const currentSection = getCurrentSection();
  const displayName = language === 'en' ? data.name : data.indonesianName;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[92dvh] bg-zinc-950/95 border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl">
        
        {/* Header Bar */}
        <div 
          className="p-4 sm:p-6 border-b border-zinc-800 flex items-start justify-between relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${data.color}15 0%, #090d1f 100%)` }}
        >
          <div className="flex items-center gap-3 sm:gap-4 z-10 min-w-0">
            <div 
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0"
              style={{ backgroundColor: `${data.color}25`, border: `1.5px solid ${data.color}60` }}
            >
              <AlertTriangle className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: data.color }} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-zinc-900 text-slate-300 border border-zinc-700">
                  {language === 'en' ? (data.category === 'Geologi' ? 'Geology' : 'Hydrometeorology') : data.category}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-semibold hidden sm:inline">
                  {language === 'en' ? '3D EDUCATIONAL MODULE' : 'MODUL EDUKASI 3D'}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white truncate">{displayName}</h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-0.5 truncate">{data.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 z-10 shrink-0">
            {/* Audio Reader Button */}
            <button
              onClick={() => handleSpeech(`${displayName}. ${currentSection.title}. ${currentSection.summary}. ${currentSection.points.join('. ')}`)}
              className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
                isSpeaking 
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse' 
                  : 'bg-zinc-900/80 text-slate-300 border-zinc-700 hover:text-emerald-400'
              }`}
              title={isSpeaking ? t.modalStopNarration : t.modalListenNarration}
            >
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                soundEngine.stopSpeaking();
                soundEngine.playClick();
                onClose();
              }}
              className="p-2 sm:p-2.5 rounded-xl bg-zinc-900/80 text-slate-400 hover:text-white border border-zinc-700 hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 sm:px-6 py-2.5 border-b border-zinc-800 bg-zinc-900/60 overflow-x-auto custom-scrollbar shrink-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playClick();
                setActiveTab(tab.id);
                if (isSpeaking) {
                  soundEngine.stopSpeaking();
                  setIsSpeaking(false);
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-zinc-800'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4 sm:space-y-6">
          
          {/* Section Summary Box */}
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <h3 className="text-sm sm:text-base font-bold text-emerald-400 mb-1">{currentSection.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentSection.summary}</p>
          </div>

          {/* Key Points Checklist */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              {language === 'en' ? 'Core Scientific Takeaways & Directives:' : 'Poin Penting & Langkah Tindakan:'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {currentSection.points.map((pt, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-2.5 hover:border-zinc-700 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-normal">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Case Study in Indonesia */}
          {data.famousEventIndonesia && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/20 via-zinc-900/40 to-zinc-900/20 border border-amber-500/20 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <History className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                    {t.badgeHistorical}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">({data.famousEventIndonesia.year} - {data.famousEventIndonesia.location})</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-200">{data.famousEventIndonesia.title}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">{data.famousEventIndonesia.description}</p>
              </div>
            </div>
          )}

          {/* Fun Fact Badge */}
          {data.funFact && (
            <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-0.5">{t.badgeScientificFact}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{data.funFact}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-5 border-t border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-slate-400 hidden sm:block">
            {language === 'en' ? 'Interactive 3D real-time decision simulation' : 'Simulasi keputusan 3D interaktif real-time'}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                soundEngine.stopSpeaking();
                soundEngine.playClick();
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl border border-zinc-700 text-slate-300 hover:text-white hover:bg-zinc-800 text-xs font-semibold transition-all flex-1 sm:flex-none"
            >
              {language === 'en' ? 'Close' : 'Tutup'}
            </button>
            <button
              onClick={() => {
                soundEngine.stopSpeaking();
                soundEngine.playClick();
                onStartSimulation(disasterId);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <Play className="w-3.5 h-3.5" />
              {t.modalStartSimBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
