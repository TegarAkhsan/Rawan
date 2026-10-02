import { Language } from '../types/language';

export const UI_TRANSLATIONS = {
  // Navigation
  nav: {
    home: { id: 'Beranda', en: 'Home' },
    modules: { id: 'Modul Bencana', en: 'Disaster Modules' },
    map: { id: 'Peta Bencana', en: 'Hazard Map' },
    checklist: { id: 'Tas Siaga', en: '72h Prep Kit' },
    quiz: { id: 'Kuis & Ujian', en: 'Quiz & Exam' },
    brandTagline: { 
      id: 'Ruang Antisipasi Waspada Anak Nusantara', 
      en: 'Disaster Simulation & Geospatial Monitoring Platform' 
    },
    soundOn: { id: 'Aktifkan Suara', en: 'Enable Audio' },
    soundOff: { id: 'Nonaktifkan Suara', en: 'Mute Audio' },
    accessibility: { id: 'Pengaturan Aksesibilitas', en: 'Accessibility Settings' },
    language: { id: 'Bahasa', en: 'Language' },
    xp: { id: 'XP', en: 'XP' }
  },

  // Home Hero & Features
  home: {
    badge: { id: 'PLATFORM EDUKASI 3D REAL-TIME', en: 'REAL-TIME 3D DISASTER PLATFORM' },
    titlePrefix: { id: 'Ruang Antisipasi Waspada', en: 'Youth Disaster Preparedness' },
    titleHighlight: { id: 'Anak Nusantara', en: 'Interactive 3D Arena' },
    description: { 
      id: 'Pelajari sains mitigasi bencana alam di Indonesia melalui simulasi 3D interaktif real-time, potongan bumi penampang ilmiah, peta bahaya seismik BMKG, dan kuis gamifikasi.', 
      en: 'Master natural disaster mitigation and STEM science across Indonesia through interactive real-time 3D simulations, geological cutaways, live BMKG telemetry, and gamified scenarios.' 
    },
    btnStartSim: { id: 'Mulai Simulasi 3D', en: 'Launch 3D Simulation' },
    btnExploreMap: { id: 'Jelajahi Geoportal BMKG', en: 'Explore BMKG Hazard Map' },
    btnChecklist: { id: 'Tas Siaga 72 Jam', en: '72-Hour Prep Kit' },
    btnQuiz: { id: 'Ujian Kesiapsiagaan', en: 'Preparedness Exam' },

    // Features Section
    featuresHeading: { id: 'Fitur Unggulan Platform', en: 'Core Platform Features' },
    featuresSubheading: { id: 'Edukasi modern berbasis sains dan standar BNPB', en: 'Science-grounded education following standard BNPB guidelines' },
    feature1Title: { id: 'Simulasi 3D Interaktif', en: 'Interactive 3D Simulation' },
    feature1Desc: { id: '6 modul bencana dengan kontrol rotasi 360°, zoom bebas, dan 7 tahapan eskalasi bencana.', en: '6 disaster modules with 360° rotation, free zoom, and 7 sequential disaster escalation stages.' },
    feature2Title: { id: 'Potongan Penampang Bumi', en: 'Subterranean Cutaways' },
    feature2Desc: { id: 'Lihat dapur magma, sesar patahan lempeng, dan bidang gelincir tanah di bawah permukaan.', en: 'Inspect subterranean magma chambers, tectonic fault slip planes, and groundwater saturation zones.' },
    feature3Title: { id: 'Geoportal BMKG Real-Time', en: 'Real-Time BMKG Geoportal' },
    feature3Desc: { id: 'Integrasi langsung dengan feed data gempa bumi terkini BMKG di seluruh kepulauan Indonesia.', en: 'Direct integration with real-time earthquake feeds across the Indonesian archipelago.' },
    feature4Title: { id: 'Aksesibilitas & Audio Prosedural', en: 'Accessibility & Procedural Audio' },
    feature4Desc: { id: 'Narator suara otomatis, kontras tinggi, reduced motion, dan sound FX Web Audio sintetis.', en: 'Voice narration, high contrast, reduced motion, and procedural Web Audio synthesis.' },

    // Disaster Modules Preview
    catalogHeading: { id: '6 Modul Simulasi Bencana', en: '6 Disaster Simulation Modules' },
    catalogSubheading: { id: 'Pilih modul untuk memulai simulasi 3D dan skenario keputusan', en: 'Select a module to launch 3D simulations and decision-making scenarios' },
    btnSimulate: { id: 'Simulasi', en: 'Simulate' },
    btnLearn: { id: 'Pelajari', en: 'Learn More' },
    viewAllModules: { id: 'Lihat Semua Modul & Materi Lengkap', en: 'View All Modules & Detailed Curriculum' }
  },

  // Modules Catalog View
  modules: {
    title: { id: 'Katalog Modul Pembelajaran 3D', en: '3D Disaster Learning Catalog' },
    subtitle: { id: 'Pilih jenis bencana untuk melihat materi sains mendalam atau masuk ke simulasi 3D interaktif', en: 'Select a disaster hazard to explore in-depth STEM science or launch the interactive 3D simulation' },
    allCategory: { id: 'Semua Kategori', en: 'All Categories' },
    geologyCategory: { id: 'Geologi', en: 'Geological' },
    hydroCategory: { id: 'Hidrometeorologi', en: 'Hydrometeorological' },
    btnLaunch3D: { id: 'Mulai Simulasi 3D', en: 'Launch 3D Simulation' },
    btnReadScience: { id: 'Baca Materi Sains', en: 'Read Scientific Guide' },
    btnTakeQuiz: { id: 'Kuis Modul Ini', en: 'Quiz This Hazard' }
  },

  // Simulation Overlay HUD
  simulation: {
    stageLabel: { id: 'Tahap', en: 'Stage' },
    of: { id: 'dari', en: 'of' },
    pvmbgStatus: { id: 'Status Mitigasi / Bahaya', en: 'Mitigation / Hazard Status' },
    objective: { id: 'Misi & Tujuan', en: 'Objective & Briefing' },
    instruction: { id: 'Instruksi Tindakan', en: 'Action Instructions' },
    chooseAction: { id: 'Pilih Tindakan Tanggap Darurat:', en: 'Select Emergency Protective Action:' },
    correctAnswer: { id: 'TINDAKAN TEPAT!', en: 'EXCELLENT DECISION!' },
    wrongAnswer: { id: 'TINDAKAN KURANG TEPAT', en: 'UNSAFE DECISION' },
    nextStage: { id: 'Lanjut ke Tahap Berikutnya', en: 'Proceed to Next Stage' },
    restartSim: { id: 'Ulangi Simulasi', en: 'Restart Simulation' },
    exitSim: { id: 'Kembali ke Katalog', en: 'Exit to Catalog' },
    cutawayOn: { id: 'Tutup Potongan Tanah', en: 'Close Cutaway View' },
    cutawayOff: { id: 'Buka Potongan Tanah (Cutaway)', en: 'Open Cutaway View' },
    emergencyHotline: { id: 'Panggilan Darurat BNPB: 117', en: 'BNPB Emergency Hotline: 117' },
    voiceRead: { id: 'Bacakan Instruksi', en: 'Voice Narration' },
    voiceStop: { id: 'Hentikan Suara', en: 'Stop Narration' },
    congratulations: { id: 'SELAMAT! SIMULASI BERHASIL DISELESAIKAN', en: 'CONGRATULATIONS! SIMULATION COMPLETED' },
    congratsDesc: { id: 'Anda telah berhasil menyelesaikan seluruh skenario keputusan mitigasi bencana dengan baik.', en: 'You have successfully mastered all decision checkpoints and emergency response protocols.' }
  },

  // Disaster Detail Modal (Educational Guide)
  detailModal: {
    scientificGuide: { id: 'Panduan Sains & Literasi Mitigasi', en: 'Scientific & Mitigation Guide' },
    tabCauses: { id: 'Penyebab', en: 'Causes' },
    tabSigns: { id: 'Tanda & Gejala', en: 'Warning Signs' },
    tabImpacts: { id: 'Dampak Kerusakan', en: 'Impacts' },
    tabEmergency: { id: 'Prosedur Darurat', en: 'Emergency Protocols' },
    tabEvacuation: { id: 'Jalur Evakuasi', en: 'Evacuation Routes' },
    tabCaseStudy: { id: 'Studi Kasus Indonesia', en: 'Indonesian Case Study' },
    funFactTitle: { id: 'Fakta Menarik Sains', en: 'STEM Science Fun Fact' },
    btnClose: { id: 'Tutup', en: 'Close' },
    btnStartSim: { id: 'Masuk Simulasi 3D', en: 'Enter 3D Simulation' },
    readAloud: { id: 'Dengarkan Materi (TTS)', en: 'Listen (Audio TTS)' }
  },

  // Map / Geoportal View
  map: {
    title: { id: 'Geoportal Bahaya Seismik & Vulkanik Indonesia', en: 'Indonesian Seismic & Volcanic Hazard Geoportal' },
    subtitle: { id: 'Pemantauan titik rawan gempa, jalur sesar aktif, zona subduksi megathrust, dan status gunung api Indonesia', en: 'Geospatial monitoring of seismic faults, megathrust subduction zones, and active volcanoes across Indonesia' },
    liveBMKG: { id: 'LIVE FEED BMKG TEWS', en: 'LIVE BMKG TEWS FEED' },
    filterAll: { id: 'Semua Titik', en: 'All Coordinates' },
    filterFaults: { id: 'Patahan Sesar Aktif', en: 'Active Fault Lines' },
    filterVolcanoes: { id: 'Gunung Api Aktif', en: 'Active Volcanoes' },
    filterSubduction: { id: 'Zona Megathrust', en: 'Megathrust Zones' },
    latestQuakeTitle: { id: 'Gempa Bumi Terkini (M ≥ 5.0 / Berpotensi Tsunami)', en: 'Latest Major Earthquake (M ≥ 5.0 / Tsunami Alert)' },
    recentQuakesTitle: { id: 'Daftar 15 Gempa Bumi Terkini Indonesia', en: 'Recent Earthquakes Across Indonesia' },
    magnitude: { id: 'Magnitudo', en: 'Magnitude' },
    depth: { id: 'Kedalaman', en: 'Depth' },
    coordinates: { id: 'Koordinat', en: 'Coordinates' },
    riskLevel: { id: 'Tingkat Risiko:', en: 'Hazard Level:' },
    viewDetails: { id: 'Rincian Geologis', en: 'Geological Details' },
    legendTitle: { id: 'Legenda Peta Geospasial', en: 'Geospatial Map Legend' }
  },

  // Checklist View (72-Hour Emergency Kit)
  checklist: {
    title: { id: 'Tas Siaga Bencana (TSB) Digital 72 Jam', en: '72-Hour Emergency Supply Kit (TSB)' },
    subtitle: { id: 'Panduan perlengkapan darurat standar BNPB untuk bertahan hidup mandiri 72 jam pertama saat evakuasi bencana', en: 'Standard BNPB emergency kit checklist for autonomous 72-hour survival during post-disaster evacuations' },
    readyProgress: { id: 'Kesiapan Tas Siaga Anda', en: 'Emergency Kit Preparedness' },
    totalWeight: { id: 'Estimasi Berat Total', en: 'Estimated Total Weight' },
    itemsPacked: { id: 'Barang Siap', en: 'Items Packed' },
    resetAll: { id: 'Reset Checklist', en: 'Reset Checklist' },
    filterAll: { id: 'Semua Barang', en: 'All Supplies' },
    catBasic: { id: 'Kebutuhan Pokok', en: 'Basic Sustenance' },
    catMedical: { id: 'Pertolongan & Medis', en: 'First Aid & Medical' },
    catComms: { id: 'Komunikasi & Penerangan', en: 'Comms & Lighting' },
    catDocs: { id: 'Dokumen & Perlindungan', en: 'Documents & Protection' },
    mustHave: { id: 'Sangat Wajib', en: 'Critical / Mandatory' },
    important: { id: 'Penting', en: 'Important' },
    supplementary: { id: 'Pelengkap', en: 'Supplementary' },
    readyBadge: { id: 'TAS SIAGA LENGKAP & SIAP EVAKUASI!', en: 'EMERGENCY KIT 100% PREPARED!' }
  },

  // Quiz View
  quiz: {
    title: { id: 'Ujian Kesiapsiagaan & Kuis Sains Kebencanaan', en: 'Disaster Preparedness & STEM Quiz Arena' },
    subtitle: { id: 'Uji pengetahuan mitigasi, mekanisme sains alam, dan respon darurat dengan sistem gamifikasi XP', en: 'Test your mitigation knowledge, natural physics concepts, and emergency reflexes with XP progression' },
    filterAll: { id: 'Semua Soal Bencana', en: 'All Disaster Scenarios' },
    diffEasy: { id: 'Tingkat Mudah', en: 'Easy Tier' },
    diffMedium: { id: 'Tingkat Sedang', en: 'Medium Tier' },
    diffHard: { id: 'Tingkat Tantangan', en: 'Hard Tier' },
    question: { id: 'Soal', en: 'Question' },
    score: { id: 'Skor Akurasi', en: 'Accuracy Score' },
    streak: { id: 'Streak Kombo', en: 'Streak Combo' },
    scientificExplanation: { id: 'Penjelasan Ilmiah Sains:', en: 'Scientific Explanation:' },
    btnNext: { id: 'Soal Selanjutnya', en: 'Next Question' },
    btnFinish: { id: 'Selesaikan Ujian', en: 'Finish Assessment' },
    btnRestart: { id: 'Ulangi Ujian', en: 'Restart Quiz' },
    examComplete: { id: 'EVALUASI KUIS SELESAI!', en: 'ASSESSMENT COMPLETED!' },
    cadreBadge: { id: 'KADER SIAGA BENCANA NASIONAL', en: 'NATIONAL DISASTER CADRE BADGE' },
    cadreBadgeDesc: { id: 'Selamat! Anda telah menguasai literasi sains mitigasi dan tanggap darurat bencana Indonesia.', en: 'Congratulations! You have mastered disaster mitigation and emergency protocols.' }
  },

  // Accessibility Modal
  accessibility: {
    title: { id: 'Pengaturan Aksesibilitas & Tampilan', en: 'Accessibility & Display Preferences' },
    subtitle: { id: 'Kenyamanan dan inklusivitas belajar untuk seluruh pengguna', en: 'Inclusive learning customization for all students' },
    languageSection: { id: 'Pilihan Bahasa (Language)', en: 'Language Selection' },
    langId: { id: 'Bahasa Indonesia (ID)', en: 'Indonesian (ID)' },
    langEn: { id: 'English (EN)', en: 'English (EN)' },
    textSize: { id: 'Ukuran Teks Tampilan', en: 'Typography Sizing' },
    sizeNormal: { id: 'Normal (100%)', en: 'Normal (100%)' },
    sizeLarge: { id: 'Besar (110%)', en: 'Large (110%)' },
    sizeXLarge: { id: 'Ekstra (125%)', en: 'Extra Large (125%)' },
    highContrast: { id: 'Mode Kontras Tinggi', en: 'High Contrast Mode' },
    highContrastDesc: { id: 'Meningkatkan ketajaman warna dan border elemen untuk keterbacaan optimal', en: 'Enhance color distinction and component borders for high visibility' },
    reducedMotion: { id: 'Mode Pengurangan Animasi (Reduced Motion)', en: 'Reduced Motion Mode' },
    reducedMotionDesc: { id: 'Mematikan rotasi otomatis bumi, goyangan kamera gempa, dan efek gerak cepat', en: 'Subdue automatic camera shakes, planetary rotations, and fast particle loops' },
    tts: { id: 'Narator Suara Otomatis (Text-to-Speech)', en: 'Automated Voice Narration (TTS)' },
    ttsDesc: { id: 'Membacakan instruksi dan ringkasan materi secara bersuara', en: 'Read aloud scenario instructions and educational summaries' },
    resetDefault: { id: 'Kembalikan Pengaturan Standar', en: 'Reset to Default Settings' }
  },

  // Footer
  footer: {
    platformInfo: { 
      id: 'RAWAN — Ruang Antisipasi Waspada Anak Nusantara. Platform edukasi interaktif 3D & mitigasi kebencanaan nasional Indonesia.', 
      en: 'RAWAN — Disaster Simulation & Geospatial Monitoring Platform. Interactive 3D disaster education for youth.' 
    },
    copyright: { id: '© 2026 RAWAN. Dikembangkan untuk Kesiapsiagaan Bencana Indonesia.', en: '© 2026 RAWAN. Built for Indonesian Youth Disaster Preparedness & STEM Education.' }
  }
};

export const getTranslation = (path: string, lang: Language): string => {
  const keys = path.split('.');
  let current: any = UI_TRANSLATIONS;
  for (const key of keys) {
    if (current[key] === undefined) return path;
    current = current[key];
  }
  return current[lang] || current['id'] || path;
};
