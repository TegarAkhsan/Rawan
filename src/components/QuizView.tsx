import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Flame, 
  Waves, 
  Activity, 
  Compass, 
  ShieldAlert, 
  Wind, 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DisasterId } from '../types/disaster';
import { getQuizQuestions } from '../data/quizData';
import { getDisaster } from '../data/disasterData';
import { soundEngine } from '../audio/soundEngine';
import { useLanguage } from '../context/LanguageContext';

interface QuizViewProps {
  initialDisasterId?: DisasterId | 'ALL';
  onNavigate?: (view: any) => void;
  onAddXp: (amount: number) => void;
}

interface QuestionAnswerState {
  selectedOption: number;
  isCorrect: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  initialDisasterId = 'ALL',
  onNavigate,
  onAddXp
}) => {
  const { language, t } = useLanguage();
  const [selectedDisaster, setSelectedDisaster] = useState<DisasterId | 'ALL'>(initialDisasterId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<Record<number, QuestionAnswerState>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const questions = getQuizQuestions(language);

  // Filter questions according to selected filter
  const filteredQuestions = questions.filter(q => 
    selectedDisaster === 'ALL' ? true : q.disasterId === selectedDisaster
  );

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const currentDisasterData = currentQ && currentQ.disasterId !== 'ALL'
    ? getDisaster(currentQ.disasterId as DisasterId, language) 
    : null;

  const topics: { id: DisasterId | 'ALL'; label: string; icon: React.ReactNode }[] = [
    { id: 'ALL', label: t.quizFilterAll, icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'EARTHQUAKE', label: language === 'en' ? 'Earthquake' : 'Gempa Bumi', icon: <Activity className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'TSUNAMI', label: 'Tsunami', icon: <Waves className="w-3.5 h-3.5 text-cyan-400" /> },
    { id: 'VOLCANO', label: language === 'en' ? 'Volcano' : 'Gunung Api', icon: <Flame className="w-3.5 h-3.5 text-rose-400" /> },
    { id: 'FLOOD', label: language === 'en' ? 'Flood' : 'Banjir', icon: <Compass className="w-3.5 h-3.5 text-blue-400" /> },
    { id: 'LANDSLIDE', label: language === 'en' ? 'Landslide' : 'Tanah Longsor', icon: <ShieldAlert className="w-3.5 h-3.5 text-lime-400" /> },
    { id: 'TORNADO', label: language === 'en' ? 'Tornado' : 'Puting Beliung', icon: <Wind className="w-3.5 h-3.5 text-purple-400" /> }
  ];

  const handleSelectTopic = (topic: DisasterId | 'ALL') => {
    soundEngine.playClick();
    setSelectedDisaster(topic);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswersHistory({});
    setIsQuizCompleted(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    soundEngine.playClick();
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQ.correctIndex;
    setAnswersHistory(prev => ({
      ...prev,
      [currentIndex]: { selectedOption, isCorrect }
    }));

    if (isCorrect) {
      soundEngine.playCorrect();
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      onAddXp(25 + (newStreak > 2 ? 10 : 0));
    } else {
      soundEngine.playWrong();
      setStreak(0);
    }
  };

  const handleNext = () => {
    soundEngine.playClick();
    if (currentIndex + 1 < filteredQuestions.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const prevAnswer = answersHistory[nextIndex];
      if (prevAnswer) {
        setSelectedOption(prevAnswer.selectedOption);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    } else {
      setIsQuizCompleted(true);
      if (score >= Math.floor(filteredQuestions.length / 2)) {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleJumpToQuestion = (index: number) => {
    soundEngine.playClick();
    setCurrentIndex(index);
    const prevAnswer = answersHistory[index];
    if (prevAnswer) {
      setSelectedOption(prevAnswer.selectedOption);
      setIsAnswerSubmitted(true);
    } else {
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRestart = () => {
    soundEngine.playClick();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswersHistory({});
    setIsQuizCompleted(false);
  };

  const getDifficultyBadge = (diff: string) => {
    if (diff === 'Mudah') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          {t.quizDiffEasy}
        </span>
      );
    }
    if (diff === 'Sedang') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
          {t.quizDiffMedium}
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
        {t.quizDiffHard}
      </span>
    );
  };

  return (
    <section className="relative z-20 w-full h-[100dvh] pt-16 sm:pt-20 pb-2 px-3 sm:px-6 flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
      
      {/* Header Bar */}
      <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>{t.quizHeaderTitle}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          </h1>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="text-xs text-zinc-400 hidden md:inline">
            {t.quizHeaderSubtitle}
          </span>
        </div>

        {/* Global Streak / XP Status Badge */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          {streak > 1 && (
            <div className="px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5 animate-pulse">
              <span>🔥</span>
              <span>{streak}x {t.quizComboStreak}!</span>
            </div>
          )}
          <div className="px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono flex items-center gap-2">
            <span className="text-zinc-400">{t.quizQuestionCounter}:</span>
            <strong className="text-white">{currentIndex + 1}/{filteredQuestions.length}</strong>
          </div>
        </div>
      </div>

      {/* Main Single-Screen Arena Card */}
      <div className="flex-1 w-full relative min-h-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Disaster Topic Selection Tabs */}
        <div className="flex items-center gap-1.5 p-2 bg-zinc-900 border-b border-zinc-800 overflow-x-auto custom-scrollbar shrink-0">
          {topics.map(tOption => (
            <button
              key={tOption.id}
              onClick={() => handleSelectTopic(tOption.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                selectedDisaster === tOption.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {tOption.icon}
              {tOption.label}
            </button>
          ))}
        </div>

        {/* Question Viewport / Content Section */}
        {!isQuizCompleted ? (
          <div className="flex-1 flex flex-col md:flex-row min-h-0">
            
            {/* Left/Top Question Navigator Matrix */}
            <div className="w-full md:w-56 p-3 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950/60 shrink-0 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  {language === 'en' ? 'Question Matrix' : 'Matriks Soal'}
                </div>
                <div className="grid grid-cols-6 md:grid-cols-4 gap-1.5">
                  {filteredQuestions.map((_, i) => {
                    const ans = answersHistory[i];
                    let btnClass = 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800';
                    
                    if (i === currentIndex) {
                      btnClass = 'bg-emerald-600 text-white border-emerald-400 font-bold shadow-sm';
                    } else if (ans) {
                      btnClass = ans.isCorrect 
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-800' 
                        : 'bg-rose-950 text-rose-300 border-rose-800';
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleJumpToQuestion(i)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold border flex items-center justify-center transition-all ${btnClass}`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mini Stats in Side Panel */}
              <div className="mt-2 pt-2 border-t border-zinc-800 hidden md:block text-[11px] text-zinc-400 space-y-1">
                <div className="flex justify-between">
                  <span>{t.quizAccuracy}:</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    {Object.keys(answersHistory).length > 0
                      ? `${Math.round((score / Object.keys(answersHistory).length) * 100)}%`
                      : '0%'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t.quizXpScore}:</span>
                  <span className="text-emerald-400 font-mono font-bold">+{score * 25}</span>
                </div>
              </div>
            </div>

            {/* Right/Main Question & Options View */}
            <div className="flex-1 flex flex-col justify-between min-h-0 bg-zinc-950/80">
              
              {/* Question Header & Category Badge */}
              <div className="p-3.5 sm:px-6 sm:py-3 border-b border-zinc-800/80 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-300">
                    {currentDisasterData 
                      ? (language === 'en' ? currentDisasterData.name : currentDisasterData.indonesianName)
                      : 'Umum'}
                  </span>
                  {getDifficultyBadge(currentQ.difficulty)}
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  +25 XP {language === 'en' ? 'per answer' : 'tiap jawaban'}
                </span>
              </div>

              {/* Question Prompt & 4 Option Cards */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center min-h-0 overflow-y-auto custom-scrollbar">
                
                {/* Question Prompt */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Disaster Scenario Question' : 'Skenario Kebencanaan'}</span>
                  </div>
                  <h2 className="text-sm sm:text-base md:text-lg font-extrabold text-white leading-relaxed">
                    {currentQ.question}
                  </h2>
                </div>

                {/* 4 Interactive Option Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;

                    let optionClass = 'bg-zinc-900/90 border-zinc-800 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-850';
                    let badgeClass = 'bg-zinc-800 text-zinc-400 border border-zinc-700';

                    if (isSelected && !isAnswerSubmitted) {
                      optionClass = 'bg-emerald-950/80 border-emerald-500 text-white shadow-md shadow-emerald-950/50 ring-1 ring-emerald-500';
                      badgeClass = 'bg-emerald-600 text-white border border-emerald-400 font-bold';
                    } else if (isAnswerSubmitted) {
                      if (isCorrect) {
                        optionClass = 'bg-emerald-950 border-emerald-500 text-white shadow-md ring-1 ring-emerald-500';
                        badgeClass = 'bg-emerald-600 text-white border border-emerald-400 font-bold';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'bg-rose-950 border-rose-500 text-white shadow-md ring-1 ring-rose-500';
                        badgeClass = 'bg-rose-600 text-white border border-rose-400 font-bold';
                      } else {
                        optionClass = 'bg-zinc-950/60 border-zinc-900 text-zinc-500 opacity-40';
                        badgeClass = 'bg-zinc-900 text-zinc-600 border border-zinc-800';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all duration-200 ${optionClass} ${
                          !isAnswerSubmitted ? 'cursor-pointer hover:scale-[1.01]' : 'cursor-default'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 mt-0.5 transition-colors ${badgeClass}`}>
                          {isAnswerSubmitted && isCorrect ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : isAnswerSubmitted && isSelected && !isCorrect ? (
                            <XCircle className="w-3.5 h-3.5" />
                          ) : (
                            String.fromCharCode(65 + idx)
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium leading-snug flex-1">
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Banner */}
                {isAnswerSubmitted && (
                  <div className={`mt-3.5 p-3 rounded-xl border animate-in fade-in flex items-start gap-2.5 ${
                    selectedOption === currentQ.correctIndex 
                      ? 'bg-emerald-950/70 border-emerald-600/60 text-emerald-200' 
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300'
                  }`}>
                    <div className="w-6 h-6 rounded-md bg-zinc-950/80 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-white mb-0.5 flex items-center gap-1.5">
                        <span>{t.quizExplanationTitle}</span>
                        {selectedOption === currentQ.correctIndex ? (
                          <span className="text-[10px] text-emerald-400 font-bold px-1.5 py-0.2 rounded bg-emerald-900/50">{t.hudCorrect}</span>
                        ) : (
                          <span className="text-[10px] text-rose-400 font-bold px-1.5 py-0.2 rounded bg-rose-900/50">{t.hudIncorrect}</span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Bar */}
              <div className="shrink-0 px-4 sm:px-6 py-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {isAnswerSubmitted ? (
                    <div className="flex items-center gap-2 text-xs">
                      {selectedOption === currentQ.correctIndex ? (
                        <span className="flex items-center gap-1.5 text-emerald-400 font-bold truncate">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          {language === 'en' ? 'Correct Answer! (+25 XP)' : 'Jawaban Benar! (+25 XP)'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-rose-400 font-bold truncate">
                          <XCircle className="w-4 h-4 shrink-0" />
                          {language === 'en' 
                            ? `Correct answer is option ${String.fromCharCode(65 + currentQ.correctIndex)}`
                            : `Jawaban benar adalah opsi ${String.fromCharCode(65 + currentQ.correctIndex)}`}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-zinc-400 hidden sm:inline">
                      {language === 'en' ? 'Select an answer then click Submit Answer.' : 'Pilih jawaban lalu tekan Kunci Jawaban.'}
                    </span>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 ${
                        selectedOption !== null
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer hover:scale-105 shadow-emerald-950'
                          : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700'
                      }`}
                    >
                      <span>{language === 'en' ? 'Submit Answer' : 'Kunci Jawaban'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950 flex items-center gap-2 cursor-pointer hover:scale-105"
                    >
                      <span>{currentIndex + 1 < filteredQuestions.length ? t.quizNextBtn : t.quizFinishBtn}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Result Summary Arena */
          <div className="flex-1 p-6 sm:p-10 text-center flex flex-col items-center justify-center bg-radial from-emerald-950/20 to-zinc-950">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-zinc-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-4 shadow-xl shadow-emerald-950/40 animate-bounce">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.quizCompletedTitle}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {score === filteredQuestions.length 
                ? (language === 'en' ? 'Outstanding! 100% Perfect Score' : 'Luar Biasa! Skor Sempurna 100%')
                : score >= Math.floor(filteredQuestions.length * 0.7)
                ? (language === 'en' ? 'Great Job! High Preparedness Level' : 'Hebat! Kesiapsiagaan Sangat Baik')
                : (language === 'en' ? 'Good Effort! Keep Practicing Mitigation' : 'Bagus! Tingkatkan Latihan Mitigasi')}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-6 leading-relaxed">
              {language === 'en'
                ? `You correctly answered ${score} out of ${filteredQuestions.length} disaster scenarios and earned +${score * 25} XP.`
                : `Anda berhasil menjawab ${score} dari ${filteredQuestions.length} pertanyaan skenario dengan tepat dan mengumpulkan +${score * 25} XP.`}
            </p>

            {/* Score Stats Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-md w-full mb-6">
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400 uppercase font-bold">{t.quizAccuracy}</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  {Math.round((score / filteredQuestions.length) * 100)}%
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400 uppercase font-bold">{t.quizComboStreak}</div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">
                  🔥 {maxStreak}x
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-[10px] text-zinc-400 uppercase font-bold">{t.quizXpScore}</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  +{score * 25}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
              >
                <RotateCcw className="w-4 h-4" /> {t.quizRetakeBtn}
              </button>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('MODULES')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm transition-all border border-zinc-700 flex items-center justify-center gap-2 cursor-pointer hover:border-zinc-500"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  {t.quizExploreModulesBtn}
                </button>
              )}
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
