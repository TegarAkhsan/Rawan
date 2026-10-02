import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Ear, 
  Eye, 
  Accessibility, 
  Volume2, 
  Smartphone, 
  Radio, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Layers, 
  X,
  Play,
  ChevronRight
} from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';
import { DisasterId } from '../types/disaster';

interface InclusiveModeViewProps {
  onNavigate?: (view: any) => void;
  onStartSimulation?: (id: DisasterId) => void;
}

type DisabilityCategory = 'deaf' | 'blind' | 'wheelchair';

export const InclusiveModeView: React.FC<InclusiveModeViewProps> = ({
  onNavigate,
  onStartSimulation
}) => {
  const [activeTab, setActiveTab] = useState<DisabilityCategory>('deaf');
  const [isVibrating, setIsVibrating] = useState(false);
  const [vibrateSuccess, setVibrateSuccess] = useState<string | null>(null);
  const [showStrobeAlert, setShowStrobeAlert] = useState(false);
  const [isSpeakingNarration, setIsSpeakingNarration] = useState(false);
  const [isAudioBeaconPlaying, setIsAudioBeaconPlaying] = useState(false);
  const [fullscreenCard, setFullscreenCard] = useState<string | null>(null);

  // Stop any active audio/speech when component unmounts
  useEffect(() => {
    return () => {
      soundEngine.stopSpeaking();
      if (typeof window !== 'undefined' && window.navigator?.vibrate) {
        window.navigator.vibrate(0);
      }
    };
  }, []);

  // 1. Haptic Vibration Trigger
  const handleTriggerVibrate = () => {
    soundEngine.playClick();
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        // SOS Emergency Vibration Pattern: 3 short, 3 long, 3 short
        const pattern = [250, 100, 250, 100, 250, 250, 500, 100, 500, 100, 500, 250, 250, 100, 250, 100, 250];
        const success = navigator.vibrate(pattern);
        if (success) {
          setVibrateSuccess('Getaran darurat aktif di perangkat Anda!');
        } else {
          setVibrateSuccess('Izin getar tidak didukung atau dibatasi oleh browser.');
        }
      } catch {
        setVibrateSuccess('Fitur getar tidak tersedia pada perangkat ini.');
      }
    } else {
      setVibrateSuccess('Perangkat ini tidak mendukung Web Vibration API (biasanya hanya di ponsel/tablet).');
    }

    setIsVibrating(true);
    setTimeout(() => {
      setIsVibrating(false);
    }, 3200);
  };

  // 2. Emergency Descriptive Audio Narration
  const handleToggleNarration = (text: string) => {
    soundEngine.playClick();
    if (isSpeakingNarration) {
      soundEngine.stopSpeaking();
      setIsSpeakingNarration(false);
    } else {
      soundEngine.speakIndonesian(text);
      setIsSpeakingNarration(true);
    }
  };

  // 3. Audio Beacon Generator (Web Audio Frequency Pulse)
  const handleToggleAudioBeacon = () => {
    soundEngine.playClick();
    if (isAudioBeaconPlaying) {
      setIsAudioBeaconPlaying(false);
    } else {
      setIsAudioBeaconPlaying(true);
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      } catch {}
      setTimeout(() => setIsAudioBeaconPlaying(false), 800);
    }
  };

  const categories = [
    {
      id: 'deaf' as const,
      label: 'Siswa Tuli / Rungu',
      sublabel: 'Peringatan Visual & Getar',
      icon: <Ear className="w-4 h-4 text-sky-400" />,
      color: '#38bdf8'
    },
    {
      id: 'blind' as const,
      label: 'Siswa Netra',
      sublabel: 'Narasi Audio & Jalur Pemandu',
      icon: <Eye className="w-4 h-4 text-emerald-400" />,
      color: '#34d399'
    },
    {
      id: 'wheelchair' as const,
      label: 'Pengguna Kursi Roda',
      sublabel: 'Ramp, Pintu & Area Aman',
      icon: <Accessibility className="w-4 h-4 text-amber-400" />,
      color: '#fbbf24'
    }
  ];

  const deafNarrationText = 
    "Perhatian untuk teman Tuli. Jika terjadi gempa atau bencana, segera perhatikan isyarat lampu darurat berkedip dan alarm getar di ponsel Anda. Jangan panik. Segera berlindung di bawah meja yang kokoh. Jauhi jendela kaca. Selalu berpasangan dengan rekan pendamping Anda, lalu ikuti rambu arah evakuasi menuju titik kumpul.";

  const blindNarrationText = 
    "Perhatian untuk teman Netra. Saat sirine atau getaran gempa terdeteksi, segera lakukan Drop, Cover, and Hold On. Lindungi kepala dengan kedua lengan atau tas siaga Anda. Jangan gunakan lift. Jika evakuasi dimulai, gunakan teknik pendamping awas dengan memegang siku teman Anda dan ikuti ubin pemandu taktil menuju pintu darurat terdekat.";

  const wheelchairNarrationText = 
    "Panduan untuk pengguna kursi roda. Saat gempa terjadi, segera kunci kedua rem kursi roda Anda. Bungkukkan badan ke depan untuk melindungi organ vital, dan lindungi kepala dengan tas atau tangan. Jangan mencoba menggunakan lift. Setelah guncangan selesai, minta bantuan menuju Jalur Ramp Landai atau tunggu di Area Perlindungan Sementara tahan api di dekat tangga darurat.";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 pt-16 sm:pt-20 pb-16 px-3 sm:px-6 max-w-6xl mx-auto flex flex-col gap-6 animate-in fade-in duration-300">
      
      {/* ── Emergency Visual Strobe Simulation Overlay ── */}
      {showStrobeAlert && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 bg-red-600/90 text-white animate-pulse">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-2xl animate-bounce">
            <AlertTriangle className="w-14 h-14 text-red-600" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-center tracking-tight mb-3">
            PERINGATAN VISUAL DARURAT!
          </h2>
          <p className="text-lg sm:text-xl font-bold text-center max-w-xl mb-8">
            Lampu Strobo Visual Berkedip: Tanda Bahaya Aktif untuk Siswa Tuli. Segera Lakukan Prosedur Evakuasi!
          </p>
          <button
            onClick={() => {
              soundEngine.playClick();
              setShowStrobeAlert(false);
            }}
            className="px-8 py-3.5 rounded-2xl bg-white text-red-600 font-extrabold text-base hover:bg-zinc-100 transition-all shadow-2xl cursor-pointer"
          >
            Hentikan Simulasi Lampu Strobo
          </button>
        </div>
      )}

      {/* ── Quick Emergency Fullscreen Communication Card Modal ── */}
      {fullscreenCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-lg bg-zinc-900 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 text-center relative shadow-2xl">
            <button
              onClick={() => {
                soundEngine.playClick();
                setFullscreenCard(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <X className="w-6 h-6" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">
              Kartu Komunikasi Darurat Cepat (Tunjukkan ke Penolong)
            </span>
            <div className="my-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-700">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                {fullscreenCard}
              </h3>
            </div>
            <p className="text-xs text-zinc-400">
              Tunjukkan layar ini langsung kepada teman sekelas, guru, atau petugas SAR / BPBD di sekitar Anda.
            </p>
          </div>
        </div>
      )}

      {/* ── Top Header ── */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5" />
              Pedoman Inklusi & Kesetaraan BNPB
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">Aksesibilitas Universal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <span>Mode Inklusif: Panduan Siswa Disabilitas</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-3xl leading-relaxed">
            Panduan kesiapsiagaan bencana yang dirancang khusus untuk siswa dengan disabilitas pendengaran (Tuli), penglihatan (Netra), dan mobilitas fisik (Pengguna Kursi Roda).
          </p>
        </div>

        {/* Quick Emergency Action Demo Bar */}
        <div className="flex items-center gap-2 flex-wrap self-stretch sm:self-auto shrink-0">
          <button
            onClick={handleTriggerVibrate}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 shadow-md cursor-pointer ${
              isVibrating 
                ? 'bg-sky-500 text-white border-sky-400 animate-pulse' 
                : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white hover:border-sky-500'
            }`}
            title="Uji getaran darurat perangkat"
          >
            <Smartphone className={`w-4 h-4 text-sky-400 ${isVibrating ? 'animate-bounce' : ''}`} />
            <span>{isVibrating ? 'Bergetar (SOS)...' : 'Tes Peringatan Getar'}</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setShowStrobeAlert(true);
            }}
            className="px-3.5 py-2 rounded-xl text-xs font-bold border border-rose-800/80 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 transition-all flex items-center gap-2 shadow-md cursor-pointer"
            title="Simulasi lampu darurat visual"
          >
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Tes Strobo Visual</span>
          </button>
        </div>
      </div>

      {vibrateSuccess && (
        <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800 text-xs text-sky-200 flex items-center justify-between">
          <span>{vibrateSuccess}</span>
          <button onClick={() => setVibrateSuccess(null)} className="text-sky-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── Category Tabs ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-1.5 bg-zinc-950/80 border border-zinc-800 rounded-2xl">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClick();
                soundEngine.stopSpeaking();
                setIsSpeakingNarration(false);
                setActiveTab(cat.id);
              }}
              className={`p-3.5 rounded-xl text-left transition-all flex items-center gap-3 border cursor-pointer ${
                isActive 
                  ? 'bg-zinc-900 border-zinc-600 shadow-md text-white' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
              }`}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                style={{ 
                  backgroundColor: `${cat.color}15`, 
                  borderColor: `${cat.color}40` 
                }}
              >
                {cat.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {cat.label}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {cat.sublabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Tab 1: SISWA TULI / RUNGU ── */}
      {activeTab === 'deaf' && (
        <div className="space-y-6 animate-in fade-in">
          
          {/* Hero Feature Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-sky-950/30 via-zinc-900/50 to-zinc-950 border border-sky-500/30 relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-400">
                  <Ear className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-sky-400">
                    Fokus Mitigasi Siswa Tuli
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Peringatan Sensorik Visual & Pola Getar
                  </h2>
                </div>
              </div>

              <button
                onClick={() => handleToggleNarration(deafNarrationText)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  isSpeakingNarration 
                    ? 'bg-sky-500 text-white border-sky-400' 
                    : 'bg-zinc-900 text-sky-300 border-sky-500/40 hover:bg-sky-950'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isSpeakingNarration ? 'Hentikan Audio' : 'Dengarkan Narasi Panduan'}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Ketika sirine darurat berbunyi, siswa Tuli mengandalkan <strong>peringatan visual berkedip (lampu strobo)</strong>, <strong>getaran ponsel cerdas</strong>, serta sistem kemitraan siswa (*Buddy System*).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-sky-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" /> Peringatan Lampu Strobo
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Lampu berkedip intensitas tinggi di sudut kelas dan lorong sebagai pengganti sirine audio.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-sky-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" /> Haptic Alert (Getar HP)
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Pola getar ritmis pada smartphone mengindikasikan level bahaya dan instruksi evakuasi segera.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-sky-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" /> Buddy System (Rekan Sahabat)
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Teman sebangku atau guru bertugas memberikan isyarat visual tepukan pundak saat alarm aktif.
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-400" />
              Prosedur Langkah demi Langkah Saat Terjadi Bencana
            </h3>

            <div className="space-y-3">
              {[
                {
                  step: '01',
                  title: 'Waspada Perubahan Gerakan & Lampu',
                  desc: 'Jika Anda merasakan lantai bergetar atau melihat lampu darurat berkedip di kelas, segera hentikan aktivitas belajar tanpa menunggu aba-aba suara.'
                },
                {
                  step: '02',
                  title: 'Lakukan Perlindungan Diri (Drop, Cover, Hold On)',
                  desc: 'Merunduk di bawah meja yang kuat. Lindungi kepala dan tengkuk dengan kedua tangan atau buku tebal. Jauhi jendela kaca yang rentan pecah.'
                },
                {
                  step: '03',
                  title: 'Cari Kontak Visual dengan Guru & Pendamping (Buddy)',
                  desc: 'Lihat isyarat tangan guru atau pendamping. Guru akan mengarahkan menggunakan gestur visual tangan mengarah ke pintu keluar.'
                },
                {
                  step: '04',
                  title: 'Ikuti Rambu Panah Evakuasi Fosfor (Glow in the Dark)',
                  desc: 'Berjalan cepat tanpa panik mengikuti tanda panah hijau neon di dinding koridor menuju titik kumpul terbuka di lapangan sekolah.'
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 font-mono text-xs font-black shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Communication Cards */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white">Kartu Komunikasi Darurat Visual Siswa Tuli</h3>
                <p className="text-xs text-zinc-400">Klik salah satu kartu di bawah ini untuk menampilkannya layar penuh dalam ukuran besar</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'SAYA TULI — TOLONG TUNJUKKAN ARAH EVAKUASI DENGAN TANGAN / TULISAN',
                'DI MANA LOKASI TITIK KUMPUL / LAPANGAN SEKOLAH TERDEKAT?',
                'SAYA TERPISAH DARI REKAN PENDAMPING SAYA',
                'SAYA BUTUH AIR BERSIH / PERTOLONGAN PERTAMA P3K',
                'APAKAH KONDISI SUDAH AMAN UNTUK KELUAR DARI RUANGAN?',
                'TOLONG HUBUNGI NOMOR DARURAT KELUARGA SAYA'
              ].map((text, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundEngine.playClick();
                    setFullscreenCard(text);
                  }}
                  className="p-4 rounded-2xl bg-zinc-900 border border-zinc-700/60 hover:border-sky-400 text-left transition-all hover:scale-[1.02] flex flex-col justify-between min-h-[110px] cursor-pointer"
                >
                  <span className="text-xs font-black text-white leading-snug line-clamp-3">{text}</span>
                  <span className="text-[10px] font-bold text-sky-400 mt-3 flex items-center gap-1">
                    Buka Ukuran Penuh <ChevronRight className="w-3 h-3" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 2: SISWA NETRA ── */}
      {activeTab === 'blind' && (
        <div className="space-y-6 animate-in fade-in">
          
          {/* Hero Feature Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-zinc-900/50 to-zinc-950 border border-emerald-500/30 relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-400">
                    Fokus Mitigasi Siswa Netra
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Narasi Audio Deskriptif & Jalur Taktil
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleAudioBeacon}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isAudioBeaconPlaying 
                      ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse' 
                      : 'bg-zinc-900 text-amber-300 border-amber-500/40 hover:bg-amber-950'
                  }`}
                  title="Simulasi sinyal pemandu akustik"
                >
                  <Radio className="w-4 h-4" />
                  <span>{isAudioBeaconPlaying ? 'Beacon Aktif...' : 'Tes Audio Beacon'}</span>
                </button>

                <button
                  onClick={() => handleToggleNarration(blindNarrationText)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                    isSpeakingNarration 
                      ? 'bg-emerald-500 text-white border-emerald-400' 
                      : 'bg-zinc-900 text-emerald-300 border-emerald-500/40 hover:bg-emerald-950'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isSpeakingNarration ? 'Hentikan Narasi' : 'Dengarkan Panduan Suara'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Bagi siswa Netra, pengenalan audio yang terarah, orientasi ruang taktil, dan teknik pendamping awas (*Sighted Guide Technique*) adalah kunci penyelamatan nyawa saat visibilitas nol akibat debu atau asap.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-emerald-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Narasi Suara Terperinci
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Mendeskripsikan situasi darurat dengan instruksi langkah konkret tanpa istilah visual abstrak.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-emerald-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Ubin Pemandu (Guiding Block)
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Ubin garis memandu arah lurus; ubin titik memperingatkan persimpangan, turunan tangga, atau bahaya.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-emerald-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Teknik Sighted Guide
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Siswa memegang bagian atas siku pemandu, berjalan setengah langkah di belakang secara sinkron.
                </p>
              </div>
            </div>
          </div>

          {/* Guiding Block Explanation Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              Sistem Navigasi Taktil Koridor & Ubin Pemandu
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Setiap sekolah dan gedung publik wajib memiliki ubin pemandu bertekstur yang dapat dirasakan melalui tongkat putih (*white cane*) maupun sol sepatu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-emerald-500/30 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex flex-col justify-center items-center gap-1 shrink-0">
                  <div className="w-6 h-1 bg-emerald-400 rounded-full" />
                  <div className="w-6 h-1 bg-emerald-400 rounded-full" />
                  <div className="w-6 h-1 bg-emerald-400 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubin Garis Lurus (Line Pattern)</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Menandakan <strong>JALUR AMAN BERJALAN TERUS</strong>. Ikuti alur garis ini untuk menuju koridor utama dan pintu keluar evakuasi.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900 border border-amber-500/30 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/50 grid grid-cols-3 gap-1 p-2 shrink-0">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubin Bintik / Titik (Dot Pattern)</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Menandakan <strong>PERINGATAN BAHAYA / BERHENTI</strong>. Ada anak tangga, turunan curam, belokan tajam, atau pintu darurat di depan Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sighted Guide Protocol */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Protokol Pendampingan Teman Awas (Sighted Guide)
            </h3>
            
            <div className="space-y-3">
              {[
                {
                  rule: 'Tawarkan Bantuan dengan Suara Jelas',
                  desc: 'Pendamping menyapa: "Halo [Nama], saya [Nama Pendamping], apakah kamu ingin saya pandu ke titik kumpul lapangan sekarang?" Jangan menarik tangan siswa netra secara mendadak.'
                },
                {
                  rule: 'Pegang Bagian Atas Siku Pendamping',
                  desc: 'Siswa netra memegang lengan pendamping tepat di atas siku dengan ibu jari di luar dan jari-jari lain di dalam. Posisi ini memungkinkan siswa netra membaca gerakan pundak pendamping.'
                },
                {
                  rule: 'Berjalan Setengah Langkah di Belakang',
                  desc: 'Siswa netra berjalan setengah langkah di belakang pendamping. Ketika pendamping melangkah naik atau turun tangga, siswa netra otomatis merasakannya.'
                },
                {
                  rule: 'Berikan Informasi Spasial Konkret',
                  desc: 'Hindari kata "ke sana" atau "awas itu". Sebutkan: "Ada dua anak tangga turun di depan", "Kita berbelok 90 derajat ke kanan", atau "Di depan ada lantai licin".'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.rule}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 3: PENGGUNA KURSI RODA / HAMBATAN MOBILITAS ── */}
      {activeTab === 'wheelchair' && (
        <div className="space-y-6 animate-in fade-in">
          
          {/* Hero Feature Box */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-950/30 via-zinc-900/50 to-zinc-950 border border-amber-500/30 relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400">
                  <Accessibility className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-amber-400">
                    Fokus Mitigasi Kursi Roda & Mobilitas
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Jalur Evakuasi Ramp & Area Perlindungan
                  </h2>
                </div>
              </div>

              <button
                onClick={() => handleToggleNarration(wheelchairNarrationText)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  isSpeakingNarration 
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black' 
                    : 'bg-zinc-900 text-amber-300 border-amber-500/40 hover:bg-amber-950'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isSpeakingNarration ? 'Hentikan Audio' : 'Dengarkan Narasi Panduan'}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              Saat gempa atau kebakaran, lift gedung sekolah dilarang digunakan karena risiko kabel putus atau terjebak. Pengguna kursi roda memerlukan <strong>Jalur Landai (Ramp)</strong> atau menunggu di <strong>Area Perlindungan Sementara (Refuge Area)</strong> tahan api.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-amber-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Kunci Rem Seketika (Lock)
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Begitu guncangan terasa, rem kedua roda harus dikunci agar kursi tidak bergulir tak terkendali.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-amber-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Jalur Ramp Maks 8%
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Kemiringan landai maksimal rasio 1:12 agar tidak terbalik saat meluncur turun dalam keadaan darurat.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <div className="text-amber-400 font-bold text-xs mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Refuge Area (Bordes Tangga)
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Ruang aman bertekanan positif dekat tangga darurat untuk menunggu kursi evakuasi khusus.
                </p>
              </div>
            </div>
          </div>

          {/* Ramp Architecture Standards */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              Spesifikasi Arsitektur Jalur Evakuasi Ramah Kursi Roda
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Berdasarkan Pedoman Fasilitas Ramah Disabilitas Kementerian PUPR dan BNPB:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-2xl font-black text-amber-400 mb-1">1 : 12</div>
                <div className="text-xs font-bold text-white mb-1">Kemiringan Ramp Maksimal</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Tidak boleh lebih curam dari 8 derajat agar kursi roda tidak terbalik ke belakang atau meluncur lepas kendali.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-2xl font-black text-amber-400 mb-1">≥ 120 cm</div>
                <div className="text-xs font-bold text-white mb-1">Lebar Bebas Jalur Ramp</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Lebar jalur bersih minimal 120 cm (ideal 140 cm) dengan ruang putar 180° berdiameter 150 cm di setiap bordes.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-2xl font-black text-amber-400 mb-1">Ganda</div>
                <div className="text-xs font-bold text-white mb-1">Handrail Pegangan Tangan</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Dipasang setinggi 70 cm (untuk anak/kursi roda) dan 90 cm (untuk dewasa/pendamping) di kedua sisi ramp.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-2xl font-black text-amber-400 mb-1">60 Menit</div>
                <div className="text-xs font-bold text-white mb-1">Ketahanan Api Refuge Area</div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Dinding dan pintu darurat mampu menahan panas dan asap selama minimal 60 menit hingga regu evakuasi tiba.
                </p>
              </div>
            </div>
          </div>

          {/* Evacuation Protocol for Wheelchair Users & Responders */}
          <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              Prosedur Penyelamatan Diri & Teknik Bantuan Tim Relawan
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: '1. Kunci Rem & Lindungi Diri Saat Getaran Terjadi',
                  desc: 'Kunci kedua rem roda seketika. Bungkukkan badan ke depan di atas paha untuk melindungi dada dan perut. Gunakan tas atau ransel siaga untuk melindungi leher dan kepala.'
                },
                {
                  title: '2. Hindari Penggunaan Lift Konvensional',
                  desc: 'Jangan sekali-kali menggunakan lift saat alarm gempa atau kebakaran berbunyi. Sensor otomatis lift dapat memutus daya dan menjebak Anda di antara dua lantai.'
                },
                {
                  title: '3. Menuju Refuge Area Jika Berada di Lantai Atas',
                  desc: 'Jika Anda berada di lantai atas dan tidak ada ramp landai keluar gedung, segera menuju Area Perlindungan Sementara di dekat pintu tangga darurat. Rekan Anda harus memberi tahu regu evakuasi di bawah.'
                },
                {
                  title: '4. Penggunaan Kursi Evakuasi Tangga (Evac Stair Chair)',
                  desc: 'Regu evakuasi terlatih akan memindahkan Anda ke kursi evakuasi beroda ski karet khusus yang dapat menuruni anak tangga secara mulus tanpa guncangan berbahaya.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Inclusive Emergency Preparedness Kit Checklist (Tas Siaga Disabilitas) ── */}
      <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-emerald-400" />
              Checklist Perlengkapan Ekstra Tas Siaga Bencana Inklusif
            </h3>
            <p className="text-xs text-zinc-400">
              Barang vital tambahan yang wajib disiapkan siswa disabilitas di dalam tas siaga sekolah
            </p>
          </div>

          <button
            onClick={() => onNavigate?.('CHECKLIST')}
            className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-emerald-400 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Buka Tas Siaga Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            {
              item: 'Baterai Cadangan Alat Bantu Dengar',
              note: 'Minimal 2 pasang baterai tersegel tahan air untuk siswa Tuli.'
            },
            {
              item: 'Tongkat Lipat Putih Cadangan',
              note: 'Disimpan di tas siaga jika tongkat utama patah saat evakuasi gempa.'
            },
            {
              item: 'Kartu Identitas Medis & Kontak Darurat',
              note: 'Mencantumkan jenis disabilitas, riwayat alergi, golongan darah, dan nomor orang tua.'
            },
            {
              item: 'Peluit Frekuensi Tinggi & Senter Mini',
              note: 'Untuk meminta bantuan saat terjebak atau terisolasi di bawah reruntuhan.'
            },
            {
              item: 'Ban Dalam Cadangan & Pompa Portable',
              note: 'Perbaikan cepat roda kursi roda dari puing tajam atau serpihan kaca.'
            },
            {
              item: 'Obat Pribadi & Lembar Resep Dokter (7 Hari)',
              note: 'Persediaan obat rutin antikejang, pereda nyeri, atau terapi fisik.'
            }
          ].map((c, i) => (
            <div key={i} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">{c.item}</div>
                <div className="text-[11px] text-zinc-400 leading-snug mt-0.5">{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer Link to Modules or Simulation ── */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-sky-950/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">Ingin Menguji Simulasi Bencana 3D?</h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Pelajari fenomena gempa, tsunami, gunung api, dan banjir dalam visualisasi interaktif 3D.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate?.('MODULES')}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-white transition-colors cursor-pointer"
          >
            Modul Bencana
          </button>
          <button
            onClick={() => onStartSimulation?.('EARTHQUAKE')}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Mulai Simulasi Gempa</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default InclusiveModeView;

