import React, { useState, useEffect } from 'react';
import { 
  AlertOctagon, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  Info,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Minimize2,
  Maximize2,
  Waves
} from 'lucide-react';
import { DisasterId } from '../types/disaster';
import { getSimulationScenario, getDisaster } from '../data/disasterData';
import { getDisasterStages } from '../data/simulationStagesData';
import { useLanguage } from '../context/LanguageContext';
import { soundEngine } from '../audio/soundEngine';
import type { EruptionStage } from '../scenes/VolcanoScene';
import type { TsunamiStage } from '../scenes/TsunamiScene';
import type { FloodStage } from '../scenes/FloodScene';
import type { EarthquakeStage } from '../scenes/EarthquakeScene';
import type { LandslideStage } from '../scenes/LandslideScene';
import type { TornadoStage } from '../scenes/TornadoScene';

interface SimulationOverlayProps {
  disasterId: DisasterId;
  isSimulating: boolean;
  onToggleSimulate: () => void;
  onExit: () => void;
  onAddXp: (amount: number) => void;
  onOpenDetails: () => void;
  volcanoStage?: EruptionStage;
  onSetVolcanoStage?: (stage: EruptionStage) => void;
  tsunamiStage?: TsunamiStage;
  onSetTsunamiStage?: (stage: TsunamiStage) => void;
  floodStage?: FloodStage;
  onSetFloodStage?: (stage: FloodStage) => void;
  earthquakeStage?: EarthquakeStage;
  onSetEarthquakeStage?: (stage: EarthquakeStage) => void;
  landslideStage?: LandslideStage;
  onSetLandslideStage?: (stage: LandslideStage) => void;
  tornadoStage?: TornadoStage;
  onSetTornadoStage?: (stage: TornadoStage) => void;
  showCutaway?: boolean;
  onToggleCutaway?: () => void;
}

export const SimulationOverlay: React.FC<SimulationOverlayProps> = ({
  disasterId,
  isSimulating,
  onExit,
  onAddXp,
  onOpenDetails,
  volcanoStage,
  onSetVolcanoStage,
  tsunamiStage,
  onSetTsunamiStage,
  floodStage,
  onSetFloodStage,
  earthquakeStage,
  onSetEarthquakeStage,
  landslideStage,
  onSetLandslideStage,
  tornadoStage,
  onSetTornadoStage,
  showCutaway = true,
  onToggleCutaway
}) => {
  const { language } = useLanguage();
  const scenario = getSimulationScenario(disasterId, language);
  const data = getDisaster(disasterId, language);
  const stagesList = getDisasterStages(disasterId, language);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showBriefing, setShowBriefing] = useState(true);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isStageMinimized, setIsStageMinimized] = useState(true);

  // Reset scenario dialog and stages when switching disaster
  useEffect(() => {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setIsCompleted(false);
    setShowBriefing(true);
    setIsMinimized(true);
    setIsStageMinimized(true);
  }, [disasterId]);

  // Play atmospheric procedural sound when entering simulation
  useEffect(() => {
    if (isSimulating) {
      if (disasterId === 'EARTHQUAKE') {
        soundEngine.playEarthquakeRumble(5);
      } else if (disasterId === 'TSUNAMI') {
        soundEngine.playTsunamiSurge();
      } else if (disasterId === 'VOLCANO') {
        soundEngine.playVolcanoExplosion();
      } else if (disasterId === 'FLOOD') {
        soundEngine.playWaterSplash();
      } else if (disasterId === 'LANDSLIDE') {
        soundEngine.playEarthquakeRumble(3);
      } else if (disasterId === 'TORNADO') {
        soundEngine.playTornadoWind(5);
      }
    }
  }, [disasterId, isSimulating]);

  const currentStep = scenario.steps[currentStepIndex];

  const handleSelectOption = (option: { id: string; isCorrect: boolean; feedback: string; xp: number }) => {
    if (selectedOptionId) return;

    setSelectedOptionId(option.id);
    if (option.isCorrect) {
      soundEngine.playCorrect();
      onAddXp(option.xp);
    } else {
      soundEngine.playWrong();
    }
  };

  const handleNextStep = () => {
    soundEngine.playClick();
    if (currentStepIndex + 1 < scenario.steps.length) {
      setCurrentStepIndex(prev => prev + 1);
      setSelectedOptionId(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    soundEngine.playClick();
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setIsCompleted(false);
    setShowBriefing(true);
    setIsMinimized(false);
  };

  const selectedOption = currentStep?.options.find(o => o.id === selectedOptionId);

  // Active Stage Index & Setter
  const isLandslide = disasterId === 'LANDSLIDE';
  const isEarthquake = disasterId === 'EARTHQUAKE';
  const isVolcano = disasterId === 'VOLCANO';
  const isTsunami = disasterId === 'TSUNAMI';
  const isFlood = disasterId === 'FLOOD';
  const isTornado = disasterId === 'TORNADO';

  const activeStageIndex = isLandslide
    ? landslideStage
    : isEarthquake
    ? earthquakeStage
    : isVolcano 
    ? volcanoStage 
    : isTsunami 
    ? tsunamiStage 
    : isFlood 
    ? floodStage 
    : isTornado
    ? tornadoStage
    : undefined;

  const handleSetStage = isLandslide
    ? onSetLandslideStage
    : isEarthquake
    ? onSetEarthquakeStage
    : isVolcano 
    ? onSetVolcanoStage 
    : isTsunami 
    ? onSetTsunamiStage 
    : isFlood
    ? onSetFloodStage
    : onSetTornadoStage;

  const activeStageData = activeStageIndex !== undefined && stagesList[activeStageIndex] ? stagesList[activeStageIndex] : null;

  const handleStagePrev = () => {
    if (activeStageIndex === undefined || activeStageIndex <= 0 || !handleSetStage) return;
    soundEngine.playClick();
    handleSetStage((activeStageIndex - 1) as any);
  };

  const handleStageNext = () => {
    if (activeStageIndex === undefined || activeStageIndex >= stagesList.length - 1 || !handleSetStage) return;
    soundEngine.playClick();
    handleSetStage((activeStageIndex + 1) as any);
  };

  const isEn = language === 'en';

  return (
    <div className="absolute inset-0 pointer-events-none pt-16 px-3 pb-3 sm:pt-16 sm:px-4 sm:pb-4 z-30 overflow-hidden">
      
      {/* Top Bar HUD */}
      <div className="relative flex items-center justify-between gap-2 pointer-events-auto w-full min-h-[36px]">
        {/* Left Control Buttons */}
        <div className="flex items-center gap-1.5 z-10">
          <button
            onClick={() => {
              soundEngine.playClick();
              onExit();
            }}
            className="px-2.5 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold transition-all shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>{isEn ? 'Disaster Menu' : 'Menu Bencana'}</span>
          </button>

          {/* Fixed 2D HUD Button: Tampilkan / Sembunyikan Proses (Cutaway / X-Ray) */}
          {onToggleCutaway && (
            <button
              onClick={() => {
                soundEngine.playClick();
                onToggleCutaway();
              }}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer ${
                showCutaway
                  ? 'bg-amber-600 text-white border-amber-500 hover:bg-amber-500'
                  : 'bg-zinc-900/90 text-zinc-300 hover:text-white border-zinc-700 hover:bg-zinc-800'
              }`}
              title={
                isEn
                  ? (showCutaway ? 'Hide internal geological process / 3D cutaway' : 'Show internal geological process / 3D cutaway')
                  : (showCutaway ? 'Sembunyikan visualisasi proses internal/cutaway 3D' : 'Tampilkan visualisasi proses internal/cutaway 3D')
              }
            >
              {showCutaway ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isEn ? 'Hide Process' : 'Sembunyikan Proses'}</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{isEn ? 'Show Process' : 'Tampilkan Proses'}</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Hazard Level Badge (Perfect Center Alignment on Viewport) */}
        <div className="static md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-md z-0 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeStageData ? activeStageData.pvmbgColor : data.color }} />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
            STATUS: <span style={{ color: activeStageData ? activeStageData.pvmbgColor : data.color }}>
              {activeStageData ? activeStageData.pvmbgLevel : scenario.hazardLevel}
            </span>
          </span>
        </div>

        {/* Simulation Controls (Right) */}
        <div className="flex items-center gap-1.5 z-10">
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenDetails();
            }}
            className="w-8 h-8 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-emerald-400 border border-zinc-700 backdrop-blur-md transition-colors shadow-sm flex items-center justify-center cursor-pointer"
            title={isEn ? 'Open Full Educational Material' : 'Buka Materi Edukasi Lengkap'}
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PROCESS STAGE NAVIGATOR — Bottom Left Panel                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {stagesList.length > 0 && activeStageData && (
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-[calc(100%-1.5rem)] sm:max-w-[320px] z-30 pointer-events-auto">
          {isStageMinimized ? (
            <button
              onClick={() => {
                soundEngine.playClick();
                setIsStageMinimized(false);
              }}
              className="px-3 py-2 rounded-xl bg-zinc-950/95 border border-zinc-800 text-white shadow-xl backdrop-blur-xl flex items-center gap-2 text-xs font-bold hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div 
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeStageData.pvmbgColor }}
              />
              <span className="truncate max-w-[190px]">
                {isEn ? 'Stage' : 'Tahap'} {activeStageIndex !== undefined ? activeStageIndex + 1 : 1}: {activeStageData.title}
              </span>
              <Maximize2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            </button>
          ) : (
            <div className="bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95">
              
              {/* Stage Header with Status Badge */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {/* Stage Icon */}
                    <div 
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ 
                        backgroundColor: `${activeStageData.pvmbgColor}20`, 
                        border: `1px solid ${activeStageData.pvmbgColor}60`
                      }}
                    >
                      {React.createElement(activeStageData.icon, { 
                        className: 'w-3.5 h-3.5',
                        style: { color: activeStageData.pvmbgColor }
                      })}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-400">
                        {isEn ? `Stage ${activeStageIndex !== undefined ? activeStageIndex + 1 : 1} of ${stagesList.length}` : `Tahap ${activeStageIndex !== undefined ? activeStageIndex + 1 : 1} dari ${stagesList.length}`}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight truncate">
                        {activeStageData.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* Status Badge */}
                    <span 
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full border tracking-wide"
                      style={{
                        backgroundColor: `${activeStageData.pvmbgColor}20`,
                        borderColor: `${activeStageData.pvmbgColor}60`,
                        color: activeStageData.pvmbgColor
                      }}
                    >
                      {activeStageData.pvmbgLevel}
                    </span>

                    {/* Minimize Button */}
                    <button
                      onClick={() => {
                        soundEngine.playClick();
                        setIsStageMinimized(true);
                      }}
                      className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                      title={isEn ? 'Minimize Stage Panel' : 'Sembunyikan Panel Tahap'}
                    >
                      <Minimize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="text-[10px] font-semibold text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStageData.pvmbgColor }} />
                  <span className="truncate">{activeStageData.subtitle}</span>
                </div>

                {/* Scientific Description */}
                <p className="text-[10.5px] text-zinc-300 leading-relaxed bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800 mb-2 max-h-24 overflow-y-auto custom-scrollbar">
                  {activeStageData.description}
                </p>

                {/* Visual Hint */}
                <div className="text-[9.5px] text-amber-300 bg-zinc-900/90 px-2 py-1 rounded-lg border border-zinc-800 flex items-start gap-1.5">
                  <Sparkles className="w-3 h-3 shrink-0 text-amber-400 mt-0.5" />
                  <span className="leading-snug">{activeStageData.visualHint}</span>
                </div>
              </div>

              {/* Stage Stepper Progress Dots & Prev/Next Controls */}
              <div className="px-3 py-2 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between gap-1.5">
                
                {/* Previous Button */}
                <button
                  onClick={handleStagePrev}
                  disabled={activeStageIndex === undefined || activeStageIndex <= 0}
                  className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-[11px] font-bold text-zinc-300 hover:text-white border border-zinc-700 transition-all flex items-center gap-1 cursor-pointer"
                  title={isEn ? 'Previous Stage' : 'Tahap Sebelumnya'}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isEn ? 'Previous' : 'Sebelumnya'}</span>
                </button>

                {/* Progress Stage Dots */}
                <div className="flex items-center gap-1">
                  {stagesList.map((stg, idx) => {
                    const isActive = idx === activeStageIndex;
                    const isPassed = activeStageIndex !== undefined && idx < activeStageIndex;
                    return (
                      <button
                        key={stg.id}
                        onClick={() => {
                          soundEngine.playClick();
                          if (handleSetStage) handleSetStage(idx as any);
                        }}
                        className={`transition-all duration-200 cursor-pointer rounded-full ${
                          isActive
                            ? 'w-4 h-1.5 rounded-full shadow-sm'
                            : isPassed
                            ? 'w-1.5 h-1.5 bg-zinc-500 hover:bg-zinc-400'
                            : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-600'
                        }`}
                        style={isActive ? { backgroundColor: activeStageData.pvmbgColor } : {}}
                        title={isEn ? `Jump to Stage ${idx + 1}: ${stg.title}` : `Pindah ke Tahap ${idx + 1}: ${stg.title}`}
                      />
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleStageNext}
                  disabled={activeStageIndex === undefined || activeStageIndex >= stagesList.length - 1}
                  className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-[11px] font-bold text-zinc-300 hover:text-white border border-zinc-700 transition-all flex items-center gap-1 cursor-pointer"
                  title={isEn ? 'Next Stage' : 'Tahap Selanjutnya'}
                >
                  <span className="hidden sm:inline">{isEn ? 'Next' : 'Selanjutnya'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bottom Floating Card Dock — Mission Questions Panel (right side) */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 pointer-events-auto">
        
        {/* Minimized Pill Bar */}
        {isMinimized ? (
          <div 
            onClick={() => {
              soundEngine.playClick();
              setIsMinimized(false);
            }}
            className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500 rounded-xl px-3 py-2 shadow-xl backdrop-blur-xl cursor-pointer flex items-center gap-2.5 text-white transition-all group animate-in fade-in"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-[9px] uppercase font-bold text-emerald-400 tracking-wider">
                  {isEn ? 'Ongoing Mission' : 'Misi Berlangsung'}
                </div>
                <div className="text-[11px] font-bold text-zinc-200 group-hover:text-white truncate max-w-[180px] sm:max-w-[220px]">
                  {scenario.title}
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center justify-center shrink-0" title={isEn ? 'Open Questions' : 'Buka Pertanyaan'}>
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ) : showBriefing ? (
          /* Initial Briefing Dialog - Compact & Non-Intrusive */
          <div className="bg-zinc-950/90 border border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 max-h-[75vh] overflow-y-auto custom-scrollbar">
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4" />
                <span>{isEn ? 'Emergency Scenario Brief' : 'Skenario Tanggap Darurat'}</span>
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsMinimized(true);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                title={isEn ? 'Minimize panel to view full 3D environment' : 'Minimalkan panel untuk melihat 3D penuh'}
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug">{scenario.title}</h3>
            
            <p className="text-xs text-slate-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 mb-3 leading-relaxed">
              {scenario.briefing}
            </p>
            
            <div className="text-[11px] font-semibold text-amber-300 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{isEn ? 'Objective' : 'Misi'}: {scenario.objective}</span>
            </div>

            {/* Stages hint */}
            {stagesList.length > 0 && (
              <div className="text-[11px] text-emerald-300/80 bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/20 mb-4 flex items-start gap-2">
                <Waves className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  {isEn 
                    ? <>Use the <strong>Disaster Stages</strong> panel on the bottom-left to observe step-by-step physical processes.</>
                    : <>Gunakan panel <strong>Tahap Bencana</strong> di kiri bawah untuk melihat proses terjadinya bencana secara bertahap.</>
                  }
                </span>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsMinimized(true);
                }}
                className="px-3 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-slate-300 text-xs font-bold border border-zinc-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isEn ? 'View 3D Scene' : 'Lihat Lingkungan 3D'}</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  setShowBriefing(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{isEn ? 'Start Decision Steps' : 'Mulai Pertanyaan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : isCompleted ? (
          /* Completion Card */
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl text-center animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-emerald-500 flex items-center justify-center mx-auto mb-3 text-emerald-400 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white mb-1">
              {isEn ? 'Simulation Completed!' : 'Simulasi Selesai!'}
            </h3>
            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              {isEn
                ? `Your emergency mitigation responses for ${data.name} have been successfully evaluated.`
                : `Respon tanggap darurat Anda untuk bencana ${data.indonesianName} telah dievaluasi dengan baik.`
              }
            </p>
            <div className="flex gap-2.5 justify-center">
              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-zinc-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isEn ? 'Restart' : 'Ulangi'}</span>
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onExit();
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                {isEn ? 'Choose Another Module' : 'Pilih Modul Lain'}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-950/95 border border-zinc-800 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-xl max-h-[75vh] overflow-y-auto custom-scrollbar">
            {/* Step Question & Action Options */}
            <div className="flex items-center justify-between mb-1.5 text-xs font-semibold text-zinc-400">
              <span className="text-emerald-400 font-mono text-[10px]">
                {isEn ? `STEP ${currentStepIndex + 1} OF ${scenario.steps.length}` : `LANGKAH ${currentStepIndex + 1} DARI ${scenario.steps.length}`}
              </span>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsMinimized(true);
                }}
                className="p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-[10px] cursor-pointer"
                title={isEn ? 'Minimize question to inspect 3D objects' : 'Minimalkan pertanyaan untuk melihat objek 3D'}
              >
                <Minimize2 className="w-3 h-3" />
                <span>{isEn ? 'Hide' : 'Sembunyikan'}</span>
              </button>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5 leading-snug">
              {currentStep.instruction}
            </h4>

            {/* Option Buttons */}
            <div className="space-y-1.5 mb-2.5">
              {currentStep.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const showValidation = selectedOptionId !== null;

                let btnStyle = 'border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800';
                if (showValidation) {
                  if (option.isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-950 text-white';
                  } else if (isSelected) {
                    btnStyle = 'border-rose-500 bg-rose-950 text-white';
                  } else {
                    btnStyle = 'border-zinc-900 bg-zinc-950 text-zinc-600 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    disabled={selectedOptionId !== null}
                    onClick={() => handleSelectOption(option)}
                    className={`w-full p-2 rounded-xl border text-left text-[11px] font-medium transition-all flex items-start gap-2 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                      {isSelected ? (option.isCorrect ? '✓' : '✕') : '•'}
                    </span>
                    <span className="leading-snug">{option.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback Banner upon answering */}
            {selectedOption && (
              <div className={`p-2.5 rounded-xl border mb-2.5 animate-in fade-in flex items-start gap-2 ${
                selectedOption.isCorrect 
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-200' 
                  : 'bg-rose-950 border-rose-500 text-rose-200'
              }`}>
                {selectedOption.isCorrect ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-[10px] font-bold mb-0.5">
                    {selectedOption.isCorrect 
                      ? (isEn ? 'Correct Decision! (+50 XP)' : 'Keputusan Tepat! (+50 XP)') 
                      : (isEn ? 'Hazard Warning!' : 'Peringatan Bahaya!')
                    }
                  </div>
                  <p className="text-[10px] leading-relaxed text-zinc-300">
                    {selectedOption.feedback}
                  </p>
                </div>
              </div>
            )}

            {/* Next / Continue Button */}
            {selectedOptionId && (
              <button
                onClick={handleNextStep}
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>
                  {currentStepIndex + 1 < scenario.steps.length 
                    ? (isEn ? 'Proceed to Next Step' : 'Lanjut Langkah Berikutnya') 
                    : (isEn ? 'Complete Simulation' : 'Selesaikan Simulasi')
                  }
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom Center Navigation Helper */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block">
        <span className="text-[10px] text-slate-400 bg-slate-950/75 px-3 py-1 rounded-full border border-slate-800/80 backdrop-blur-md">
          {isEn ? 'Click & drag mouse to rotate 3D camera • Scroll to zoom' : 'Klik & seret mouse untuk memutar kamera 3D • Scroll untuk zoom'}
        </span>
      </div>
    </div>
  );
};
