import React, { useState, useRef, useEffect } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Apa itu RAWAN?',
    a: 'RAWAN (Ruang Antisipasi Waspada Anak Nusantara) adalah platform edukasi bencana alam berbasis web 3D interaktif yang dirancang khusus untuk siswa dan anak-anak Indonesia. RAWAN menyediakan simulasi bencana, modul pembelajaran, peta risiko, dan kuis evaluasi mitigasi.'
  },
  {
    q: 'Apakah RAWAN gratis digunakan?',
    a: 'Ya, RAWAN sepenuhnya gratis. Tidak ada biaya berlangganan, tidak ada akun yang diperlukan, dan semua fitur dapat diakses langsung dari browser tanpa instalasi apapun.'
  },
  {
    q: 'Bencana apa saja yang tersedia di RAWAN?',
    a: 'RAWAN saat ini mencakup 6 modul bencana utama yang relevan dengan Indonesia: Gempa Bumi, Tsunami, Gunung Api, Banjir, Tanah Longsor, dan Puting Beliung. Setiap modul dilengkapi simulasi 3D, penjelasan ilmiah, dan kuis evaluasi.'
  },
  {
    q: 'Bagaimana cara menggunakan simulasi 3D?',
    a: 'Pilih modul bencana dari halaman "Modul Bencana", lalu klik tombol "Simulasi 3D". Di dalam simulasi, kamu bisa memutar kamera dengan klik-drag, zoom dengan scroll, dan mengikuti tahapan bencana melalui panel kontrol di sebelah kiri layar.'
  },
  {
    q: 'Apa itu sistem XP di RAWAN?',
    a: 'XP (Experience Points) adalah poin yang kamu kumpulkan setiap menjawab soal kuis dengan benar. Setiap jawaban benar memberikan +25 XP, dengan bonus streak jika menjawab berturut-turut dengan benar. XP tersimpan di browser dan mencerminkan tingkat pemahaman mitigasi bencana kamu.'
  },
  {
    q: 'Apakah data lokasi atau informasi pribadi saya dikumpulkan?',
    a: 'Tidak. RAWAN tidak mengumpulkan data pribadi apapun. Peta Bencana Indonesia menggunakan data publik dari BMKG, PVMBG, dan sumber terbuka lainnya. Progress XP disimpan hanya di browser lokal kamu (localStorage) dan tidak dikirim ke server manapun.'
  },
  {
    q: 'Apakah RAWAN bisa digunakan di smartphone?',
    a: 'Ya, RAWAN dirancang responsif dan dapat diakses dari smartphone maupun tablet. Namun untuk pengalaman simulasi 3D terbaik, disarankan menggunakan laptop atau komputer dengan browser modern (Chrome, Edge, Firefox terbaru).'
  },
  {
    q: 'Siapa yang membuat RAWAN?',
    a: 'RAWAN dikembangkan sebagai proyek edukasi kebencanaan untuk pelajar Indonesia, terinspirasi dari program kesiapsiagaan BNPB dan data ilmiah BMKG & PVMBG. Platform ini dibuat dengan teknologi React, Three.js, dan WebGL.'
  },
];

/* ── Animated accordion item ── */
const FaqRow: React.FC<{ item: FaqItem; index: number; isOpen: boolean; onToggle: () => void }> = ({
  item,
  index,
  isOpen,
  onToggle
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  // Entrance animation: stagger by index
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 60 + 80);
    return () => clearTimeout(t);
  }, [index]);

  // Height animation for accordion
  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="border-b border-zinc-800/60"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group cursor-pointer"
      >
        <span
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: isOpen ? '#fff' : '#d4d4d8' }}
        >
          {item.q}
        </span>

        {/* Animated chevron */}
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-zinc-700 transition-all duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            borderColor: isOpen ? '#10b981' : '',
            color: isOpen ? '#10b981' : '#71717a',
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Smooth height-animated answer */}
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={bodyRef} className="pb-5">
          <p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
};

interface FaqViewProps {
  onNavigate?: (view: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeadingVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className="relative z-20 w-full min-h-[100dvh] pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Animated heading */}
        <div
          className="text-center mb-12"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Pertanyaan yang sering ditanyakan
          </h1>
          <p className="text-sm text-zinc-500">
            Semua yang perlu kamu ketahui tentang RAWAN
          </p>
        </div>

        {/* Accordion list */}
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FaqRow
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center"
          style={{
            opacity: headingVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.5s',
          }}
        >
          <p className="text-sm text-zinc-500 mb-1">Masih ada pertanyaan?</p>
          <p className="text-xs text-zinc-600">
            Jelajahi langsung platform RAWAN untuk merasakan sendiri pengalaman belajar bencana 3D interaktif.
          </p>
        </div>

      </div>
    </section>
  );
};
