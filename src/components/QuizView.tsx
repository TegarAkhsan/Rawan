import React, { useState } from 'react';
import { 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Trophy, 
  Flame, 
  Waves, 
  Activity, 
  Compass, 
  ShieldAlert, 
  Wind, 
  Zap, 
  Lightbulb, 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen,
  Mountain
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DisasterId } from '../types/disaster';
import { getQuizQuestions } from '../data/quizData';
import { getDisastersData } from '../data/disasterData';
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
  const disastersData = getDisastersData(language);

  // Filter questions according to selected filter
  const filteredQuestions = questions.filter(q => 
    selectedDisaster === 'ALL' ? true : q.disasterId === selectedDisaster
  );

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const currentDisasterData = currentQ && currentQ.disasterId in disastersData 
    ? disastersData[currentQ.disasterId as DisasterId] 
    : null;

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

      const xpEarned = 15 + (streak * 5);
      onAddXp(xpEarned);

      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      soundEngine.playWrong();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    soundEngine.playClick();
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestartQuiz = () => {
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
    if (diff === 'Mudah' || diff === 'Easy') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          {t('quiz.diffEasy')}
        </span>
      );
    } else if (diff === 'Sedang' || diff === 'Medium') {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
          {t('quiz.diffMedium')}
        </span>
      );
    } else {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
          {t('quiz.diffHard')}
        </span>
      );
    }
  };

  const topics: { id: DisasterId | 'ALL'; label: string; icon: any }[] = [
    { id: 'ALL', label: t('quiz.filterAll'), icon: Award },
    { id: 'EARTHQUAKE', label: language === 'en' ? 'Earthquake' : 'Gempa Bumi', icon: Activity },
    { id: 'TSUNAMI', label: 'Tsunami', icon: Waves },
    { id: 'VOLCANO', label: language === 'en' ? 'Volcano' : 'Gunung Api', icon: Flame },
    { id: 'FLOOD', label: language === 'en' ? 'Flood' : 'Banjir', icon: Waves },
    { id: 'LANDSLIDE', label: language === 'en' ? 'Landslide' : 'Tanah Longsor', icon: Mountain },
    { id: 'TORNADO', label: language === 'en' ? 'Tornado' : 'Puting Beliung', icon: Wind },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 w-full flex-1 animate-in fade-in duration-300 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'DISASTER MITIGATION & STEM EVALUATION' : 'EVALUASI MITIGASI & SAINS KEBENCANAAN'}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          {t('quiz.title')}
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          {t('quiz.subtitle')}
        </p>
      </div>

      {/* Topics Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-3 mb-6">
        {topics.map((top) => {
          const Icon = top.icon;
          const isSel = selectedDisaster === top.id;
          return (
            <button
              key={top.id}
              onClick={() => handleSelectTopic(top.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                isSel
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{top.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Quiz Area / Completion Modal */}
      {!isQuizCompleted ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Card (Left 3 Cols) */}
          <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              {/* Question Header Status */}
              <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {t('quiz.question')} {currentIndex + 1} / {filteredQuestions.length}
                  </span>
                  {currentDisasterData && (
                    <span 
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                      style={{ 
                        backgroundColor: `${currentDisasterData.color}15`, 
                        borderColor: `${currentDisasterData.color}40`,
                        color: currentDisasterData.color 
                      }}
                    >
                      {language === 'en' ? currentDisasterData.name : currentDisasterData.indonesianName}
                    </span>
                  )}
                </div>
                {getDifficultyBadge(currentQ.difficulty)}
              </div>

              {/* Question Text */}
              <h2 className="text-base sm:text-xl font-bold text-white mb-6 leading-relaxed">
                {currentQ.question}
              </h2>

              {/* Options List */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  let optStyle = 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-600';
                  
                  if (selectedOption === idx && !isAnswerSubmitted) {
                    optStyle = 'bg-emerald-950/40 border-emerald-500 text-white shadow-sm';
                  } else if (isAnswerSubmitted) {
                    if (idx === currentQ.correctIndex) {
                      optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-md';
                    } else if (selectedOption === idx && idx !== currentQ.correctIndex) {
                      optStyle = 'bg-rose-950/60 border-rose-500 text-rose-300 shadow-md';
                    } else {
                      optStyle = 'bg-zinc-950/40 border-zinc-850 text-zinc-500 opacity-60';
                    }
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-xs sm:text-sm font-medium ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      
                      {isAnswerSubmitted && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Scientific Explanation Reveal */}
              {isAnswerSubmitted && (
                <div className="mt-6 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1.5">
                    <Lightbulb className="w-4 h-4" />
                    <span>{t('quiz.scientificExplanation')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">
                {streak > 1 && (
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-amber-400" />
                    {streak}x {t('quiz.streak')}!
                  </span>
                )}
              </span>

              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className={`px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md ${
                    selectedOption !== null
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer active:scale-98'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-750'
                  }`}
                >
                  {language === 'en' ? 'Submit Answer' : 'Kirim Jawaban'}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <span>{currentIndex < filteredQuestions.length - 1 ? t('quiz.btnNext') : t('quiz.btnFinish')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Stats & Matrix (Col 4) */}
          <div className="space-y-4">
            {/* Score Stats */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-zinc-400">{t('quiz.score')}</span>
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-black text-white mb-1">
                {score} <span className="text-base text-zinc-500 font-normal">/ {filteredQuestions.length}</span>
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {Math.round((score / Math.max(1, filteredQuestions.length)) * 100)}% {language === 'en' ? 'Accuracy' : 'Akurasi'}
              </div>
            </div>

            {/* Questions Matrix Grid */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">
              <span className="text-xs font-bold text-zinc-400 block mb-3">
                {language === 'en' ? 'Question Matrix' : 'Matriks Soal'}
              </span>
              <div className="grid grid-cols-5 gap-2">
                {filteredQuestions.map((_, i) => {
                  const ans = answersHistory[i];
                  let bg = 'bg-zinc-950 border-zinc-800 text-zinc-400';
                  if (i === currentIndex) {
                    bg = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
                  } else if (ans) {
                    bg = ans.isCorrect
                      ? 'bg-emerald-950/80 border-emerald-600 text-emerald-400'
                      : 'bg-rose-950/80 border-rose-600 text-rose-400';
                  }

                  return (
                    <div
                      key={i}
                      className={`h-8 rounded-lg border flex items-center justify-center text-xs font-mono transition-all ${bg}`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Finished View */
        <div className="max-w-2xl mx-auto w-full bg-zinc-900 border border-emerald-500/40 rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in-95">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <Award className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            {t('quiz.examComplete')}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
            {t('quiz.cadreBadgeDesc')}
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-8">
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <span className="text-xs text-zinc-400">{t('quiz.score')}</span>
              <div className="text-2xl font-black text-emerald-400 mt-1">
                {score} / {filteredQuestions.length}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <span className="text-xs text-zinc-400">{t('quiz.streak')}</span>
              <div className="text-2xl font-black text-amber-400 mt-1">
                {maxStreak}x
              </div>
            </div>
          </div>

          <button
            onClick={handleRestartQuiz}
            className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all active:scale-98"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('quiz.btnRestart')}</span>
          </button>
        </div>
      )}
    </section>
  );
};
