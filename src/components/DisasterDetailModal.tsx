import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Activity, 
  Flame, 
  ShieldCheck, 
  HelpCircle, 
  Compass, 
  Play, 
  Volume2, 
  Sparkles,
  History,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { DisasterId } from '../types/disaster';
import { DISASTERS_DATA } from '../data/disasterData';
import { soundEngine } from '../audio/soundEngine';

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
  if (!disasterId) return null;
  const data = DISASTERS_DATA[disasterId];
  const [activeTab, setActiveTab] = useState<TabType>('causes');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'causes',     label: 'Penyebab'        },
    { id: 'signs',      label: 'Tanda Peringatan' },
    { id: 'impacts',    label: 'Dampak Bahaya'    },
    { id: 'prevention', label: 'Mitigasi & Solusi' },
    { id: 'emergency',  label: 'Prosedur Darurat' },
    { id: 'evacuation', label: 'Jalur Evakuasi'   },
  ];

  const handleSpeech = (text: string) => {
    if (isSpeaking) {
      soundEngine.stopSpeaking();
      setIsSpeaking(false);
    } else {
      soundEngine.speakIndonesian(text);
      setIsSpeaking(true);
    }
  };

  const getCurrentSection = () => {
    switch (activeTab) {
      case 'causes':     return data.causes;
      case 'signs':      return data.warningSigns;
      case 'impacts':    return data.impacts;
      case 'prevention': return data.prevention;
      case 'emergency':  return data.emergencyProcedures;
      case 'evacuation': return data.evacuation;
    }
  };

  const currentSection = getCurrentSection();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-3xl max-h-[90dvh] bg-[#0a0a0a] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ border: `1px solid ${data.color}22` }}
      >

        {/* ── Header ── */}
        <div className="px-6 pt-6 pb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${data.color}18` }}
            >
              <AlertTriangle className="w-5 h-5" style={{ color: data.color }} />
            </div>

            {/* Title group */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ color: data.color, backgroundColor: `${data.color}15` }}
                >
                  {data.category}
                </span>
                <span className="text-[10px] text-zinc-500 tracking-wider uppercase hidden sm:inline">Modul Edukasi 3D</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{data.indonesianName}</h2>
              <p className="text-xs text-zinc-500 mt-0.5 leading-snug">{data.subtitle}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleSpeech(`${data.indonesianName}. ${currentSection.title}. ${currentSection.summary}. ${currentSection.points.join('. ')}`)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                isSpeaking
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-white'
              }`}
              style={isSpeaking ? { backgroundColor: data.color } : {}}
              title={isSpeaking ? 'Hentikan Suara' : 'Dengarkan Narasi'}
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => { soundEngine.stopSpeaking(); soundEngine.playClick(); onClose(); }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Tab bar — underline style ── */}
        <div className="px-6 flex items-center gap-1 overflow-x-auto border-b border-zinc-800/60" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { soundEngine.playClick(); setActiveTab(tab.id); }}
                className={`flex items-center px-3 py-3 text-xs font-medium whitespace-nowrap transition-all relative cursor-pointer ${
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
                {/* underline indicator */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: data.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Scrollable content ── */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#333 transparent' }}>

          {/* Section header */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3">{currentSection.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{currentSection.summary}</p>
          </div>

          {/* Points list */}
          <div className="space-y-2.5">
            {currentSection.points.map((pt, i) => (
              <div key={i} className="flex items-start gap-3 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: data.color }} />
                <span className="text-sm text-zinc-300 leading-relaxed">{pt}</span>
              </div>
            ))}
          </div>

          {/* Bottom cards: History + Fun Fact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Historical event */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <div className="flex items-center gap-2 mb-3">
                <History className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400">
                  Kilas Sejarah · {data.famousEventIndonesia.year}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">{data.famousEventIndonesia.title}</h4>
              <p className="text-[11px] text-zinc-500 mb-2">{data.famousEventIndonesia.location}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{data.famousEventIndonesia.description}</p>
            </div>

            {/* Fun fact */}
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5" style={{ color: data.color }} />
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: data.color }}>
                  Fakta Sains
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed italic">"{data.funFact}"</p>
            </div>
          </div>
        </div>

        {/* ── Footer action bar ── */}
        <div className="px-6 py-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={() => { soundEngine.playClick(); onStartQuiz(disasterId); }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white border border-zinc-700/60 hover:border-zinc-500 transition-all"
          >
            <HelpCircle className="w-4 h-4 text-zinc-400" />
            Uji Pengetahuan (Kuis)
          </button>

          <button
            onClick={() => { soundEngine.stopSpeaking(); soundEngine.playClick(); onStartSimulation(disasterId); }}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: data.color }}
          >
            <Play className="w-4 h-4 fill-white" />
            Masuk Mode Simulasi 3D
          </button>
        </div>

      </div>
    </div>
  );
};
