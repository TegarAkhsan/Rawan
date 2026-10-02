import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types/language';

export interface Translations {
  // Navigation
  brandName: string;
  brandTagline: string;
  navHome: string;
  navModules: string;
  navMap: string;
  navChecklist: string;
  navQuiz: string;
  soundMute: string;
  soundUnmute: string;
  accessibilitySettings: string;
  volume: string;
  toggleMenu: string;

  // Hero Section
  heroBadge: string;
  heroTitleMain: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroCtaSimulation: string;
  heroCtaMap: string;
  heroCtaChecklist: string;
  
  // Hero Stats/Feature Badges
  featModulesTitle: string;
  featModulesDesc: string;
  featBmkgTitle: string;
  featBmkgDesc: string;
  featChecklistTitle: string;
  featChecklistDesc: string;
  featQuizTitle: string;
  featQuizDesc: string;

  // Module Catalog Section
  catalogTitle: string;
  catalogSubtitle: string;
  filterAll: string;
  filterGeology: string;
  filterHydrometeorology: string;
  btnLearnScience: string;
  btnStartSimulation: string;
  badgeStages: string;
  badgeInteractive: string;
  badgeHistorical: string;
  badgeScientificFact: string;

  // Simulation Overlay HUD
  hudStage: string;
  hudOf: string;
  hudObjective: string;
  hudCutawayOn: string;
  hudCutawayOff: string;
  hudCutawayBtn: string;
  hudResetCamera: string;
  hudNextStage: string;
  hudBackToCatalog: string;
  hudCompletedTitle: string;
  hudCompletedDesc: string;
  hudRestart: string;
  hudGoToQuiz: string;
  hudXpReward: string;
  hudCorrect: string;
  hudIncorrect: string;
  hudTimeLimit: string;

  // Disaster Detail Modal
  modalTabCauses: string;
  modalTabWarning: string;
  modalTabImpacts: string;
  modalTabPrevention: string;
  modalTabEmergency: string;
  modalTabEvacuation: string;
  modalListenNarration: string;
  modalStopNarration: string;
  modalStartSimBtn: string;

  // Emergency Checklist View
  checkHeaderTitle: string;
  checkHeaderSubtitle: string;
  checkStatTotal: string;
  checkStatWeight: string;
  checkStatReadiness: string;
  checkCatAll: string;
  checkCatBasic: string;
  checkCatMedical: string;
  checkCatComm: string;
  checkCatDocs: string;
  checkImportanceHigh: string;
  checkImportanceMedium: string;
  checkImportanceLow: string;
  checkResetBtn: string;
  checkPrintBtn: string;
  checkPacked: string;
  checkUnpacked: string;

  // Map View
  mapHeaderTitle: string;
  mapHeaderSubtitle: string;
  mapFilterAll: string;
  mapFilterSubduction: string;
  mapFilterFault: string;
  mapFilterVolcano: string;
  mapFilterLiveBmkg: string;
  mapRiskLevel: string;
  mapRiskHigh: string;
  mapRiskVeryHigh: string;
  mapRiskExtreme: string;
  mapBmkgLiveBadge: string;
  mapMagnitude: string;
  mapDepth: string;
  mapTime: string;
  mapTsunamiPotential: string;
  mapNoLiveAlert: string;
  mapLoadingBmkg: string;
  mapLegendTitle: string;
  mapLegendSubduction: string;
  mapLegendFault: string;
  mapLegendVolcano: string;
  mapLegendBmkg: string;

  // Quiz View
  quizHeaderTitle: string;
  quizHeaderSubtitle: string;
  quizFilterAll: string;
  quizDiffEasy: string;
  quizDiffMedium: string;
  quizDiffHard: string;
  quizQuestionCounter: string;
  quizComboStreak: string;
  quizXpScore: string;
  quizAccuracy: string;
  quizNextBtn: string;
  quizFinishBtn: string;
  quizExplanationTitle: string;
  quizCompletedTitle: string;
  quizCompletedSubtitle: string;
  quizCadreBadgeTitle: string;
  quizCadreBadgeDesc: string;
  quizRetakeBtn: string;
  quizExploreModulesBtn: string;

  // Accessibility Modal
  accTitle: string;
  accSubtitle: string;
  accLanguageLabel: string;
  accTextSizeLabel: string;
  accSizeNormal: string;
  accSizeLarge: string;
  accSizeXLarge: string;
  accNarrationLabel: string;
  accNarrationDesc: string;
  accContrastLabel: string;
  accContrastDesc: string;
  accMotionLabel: string;
  accMotionDesc: string;
  accLanguageId: string;
  accLanguageEn: string;

  // Footer
  footerAbout: string;
  footerQuickLinks: string;
  footerDataSources: string;
  footerDisasterModules: string;
  footerRights: string;
  footerAttribution: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  id: {
    brandName: "RAWAN",
    brandTagline: "Ruang Antisipasi Waspada Anak Nusantara",
    navHome: "Beranda",
    navModules: "Modul Bencana",
    navMap: "Peta Bencana",
    navChecklist: "Tas Siaga",
    navQuiz: "Kuis & Ujian",
    soundMute: "Nonaktifkan Suara",
    soundUnmute: "Aktifkan Suara",
    accessibilitySettings: "Pengaturan Aksesibilitas",
    volume: "Volume",
    toggleMenu: "Buka/Tutup Menu",

    heroBadge: "Platform Edukasi Mitigasi Bencana Indonesia",
    heroTitleMain: "Simulasi 3D Interaktif &",
    heroTitleAccent: "Kesiapsiagaan Bencana",
    heroSubtitle: "Eksplorasi sains bencana alam Indonesia secara visual, pelajari langkah mitigasi darurat, dan uji kesiapsiagaan Anda bersama platform edukasi berbasis 3D real-time.",
    heroCtaSimulation: "Mulai Simulasi 3D",
    heroCtaMap: "Jelajahi Peta Bencana",
    heroCtaChecklist: "Buka Tas Siaga",

    featModulesTitle: "6 Modul Bencana 3D",
    featModulesDesc: "Simulasi real-time interaktif multi-tahap",
    featBmkgTitle: "Live Feed BMKG",
    featBmkgDesc: "Terintegrasi data seismik nasional real-time",
    featChecklistTitle: "72-Jam Tas Siaga",
    featChecklistDesc: "Panduan perlengkapan evakuasi darurat BNPB",
    featQuizTitle: "Kuis Gamifikasi",
    featQuizDesc: "Uji pemahaman dan kumpulkan poin XP",

    catalogTitle: "Pilih Modul Simulasi Bencana 3D",
    catalogSubtitle: "Setiap modul dilengkapi penjelasan sains geologi, visualisasi 3D mendalam, serta skenario interaktif penyelamatan diri.",
    filterAll: "Semua Kategori",
    filterGeology: "Geologi",
    filterHydrometeorology: "Hidrometeorologi",
    btnLearnScience: "Pelajari Sains",
    btnStartSimulation: "Mulai Simulasi",
    badgeStages: "7 Tahap Interaktif",
    badgeInteractive: "Skenario Respon Cepat",
    badgeHistorical: "Peristiwa Bersejarah di Indonesia",
    badgeScientificFact: "Fakta Ilmiah Menarik",

    hudStage: "Tahap",
    hudOf: "dari",
    hudObjective: "Tujuan Keselamatan",
    hudCutawayOn: "Potongan Aktif",
    hudCutawayOff: "Potongan Lapisan Bumi",
    hudCutawayBtn: "Potongan Lapisan Bumi",
    hudResetCamera: "Reset Kamera",
    hudNextStage: "Lanjut ke Tahap Berikutnya",
    hudBackToCatalog: "Kembali ke Katalog",
    hudCompletedTitle: "Simulasi Selesai!",
    hudCompletedDesc: "Anda telah menyelesaikan seluruh skenario penyelamatan darurat untuk bencana ini.",
    hudRestart: "Ulangi Simulasi",
    hudGoToQuiz: "Uji Pengetahuan di Kuis",
    hudXpReward: "Bonus XP",
    hudCorrect: "Pilihan Tepat!",
    hudIncorrect: "Pilihan Kurang Tepat",
    hudTimeLimit: "Waktu Tersisa",

    modalTabCauses: "Penyebab & Sains",
    modalTabWarning: "Tanda Peringatan",
    modalTabImpacts: "Dampak Bencana",
    modalTabPrevention: "Pencegahan & Mitigasi",
    modalTabEmergency: "Prosedur Darurat",
    modalTabEvacuation: "Jalur Evakuasi",
    modalListenNarration: "Dengarkan Narasi",
    modalStopNarration: "Hentikan Narasi",
    modalStartSimBtn: "Masuk ke Arena Simulasi 3D",

    checkHeaderTitle: "Panduan Tas Siaga Bencana (TSB) 72 Jam",
    checkHeaderSubtitle: "Perlengkapan esensial mandiri untuk bertahan hidup selama 3 hari pertama pascabencana sebelum bantuan tiba, sesuai acuan resmi BNPB.",
    checkStatTotal: "Total Barang Disiapkan",
    checkStatWeight: "Estimasi Berat Ransel",
    checkStatReadiness: "Tingkat Kesiapan",
    checkCatAll: "Semua Kategori",
    checkCatBasic: "Kebutuhan Pokok",
    checkCatMedical: "Pertolongan & Medis",
    checkCatComm: "Komunikasi & Penerangan",
    checkCatDocs: "Dokumen & Perlindungan",
    checkImportanceHigh: "Sangat Wajib",
    checkImportanceMedium: "Penting",
    checkImportanceLow: "Pelengkap",
    checkResetBtn: "Reset Checklist",
    checkPrintBtn: "Cetak / Simpan PDF",
    checkPacked: "Siap",
    checkUnpacked: "Belum",

    mapHeaderTitle: "Geoportal & Peta Bahaya Bencana Indonesia",
    mapHeaderSubtitle: "Pantau zona subduksi lempeng megathrust, sesar darat aktif, sebaran gunung api, dan pembaruan data gempa bumi terkini BMKG secara real-time.",
    mapFilterAll: "Semua Titik Bahaya",
    mapFilterSubduction: "Zona Megathrust",
    mapFilterFault: "Sesar Aktif Darat",
    mapFilterVolcano: "Gunung Api Aktif",
    mapFilterLiveBmkg: "Live Gempa BMKG",
    mapRiskLevel: "Tingkat Risiko",
    mapRiskHigh: "Tinggi",
    mapRiskVeryHigh: "Sangat Tinggi",
    mapRiskExtreme: "Ekstrem",
    mapBmkgLiveBadge: "Update Terkini BMKG",
    mapMagnitude: "Magnitudo",
    mapDepth: "Kedalaman",
    mapTime: "Waktu Gempa",
    mapTsunamiPotential: "Potensi",
    mapNoLiveAlert: "Sedang menghubungkan ke server TEWS BMKG...",
    mapLoadingBmkg: "Memuat data gempa terkini BMKG...",
    mapLegendTitle: "Legenda Peta",
    mapLegendSubduction: "Zona Subduksi Megathrust",
    mapLegendFault: "Sesar Geser / Patahan Darat",
    mapLegendVolcano: "Gunung Berapi Aktif Tipe A",
    mapLegendBmkg: "Episentrum Gempa BMKG Terkini",

    quizHeaderTitle: "Kuis & Uji Kesiapsiagaan Bencana",
    quizHeaderSubtitle: "Uji pemahaman mitigasi Anda, kumpulkan poin XP, dan raih predikat lencana Kader Siaga Bencana!",
    quizFilterAll: "Semua Bencana",
    quizDiffEasy: "Mudah",
    quizDiffMedium: "Sedang",
    quizDiffHard: "Tantangan",
    quizQuestionCounter: "Soal",
    quizComboStreak: "Kombo Streak",
    quizXpScore: "Total XP",
    quizAccuracy: "Akurasi Jawaban",
    quizNextBtn: "Soal Berikutnya",
    quizFinishBtn: "Selesaikan Ujian",
    quizExplanationTitle: "Penjelasan Ilmiah:",
    quizCompletedTitle: "Ujian Kesiapsiagaan Selesai!",
    quizCompletedSubtitle: "Berikut hasil evaluasi pemahaman mitigasi kebencanaan Anda:",
    quizCadreBadgeTitle: "Lencana Kader Siaga Bencana",
    quizCadreBadgeDesc: "Selamat! Anda berhasil membuktikan pemahaman mitigasi yang sangat tinggi.",
    quizRetakeBtn: "Ulangi Kuis",
    quizExploreModulesBtn: "Jelajahi Modul Bencana",

    accTitle: "Pengaturan Aksesibilitas",
    accSubtitle: "Kenyamanan belajar untuk semua siswa",
    accLanguageLabel: "Bahasa Tampilan (Language)",
    accTextSizeLabel: "Ukuran Teks Tampilan",
    accSizeNormal: "Normal",
    accSizeLarge: "Besar",
    accSizeXLarge: "Ekstra",
    accNarrationLabel: "Narasi Suara Otomatis",
    accNarrationDesc: "Bacakan materi edukasi dengan suara narator",
    accContrastLabel: "Mode Kontras Tinggi",
    accContrastDesc: "Pertajam kontras teks dan batas kartu informasi",
    accMotionLabel: "Pengurangan Gerakan (Reduced Motion)",
    accMotionDesc: "Nonaktifkan rotasi bumi otomatis dan getaran kamera",
    accLanguageId: "Bahasa Indonesia",
    accLanguageEn: "English",

    footerAbout: "Platform edukasi kesiapsiagaan dan simulasi bencana 3D interaktif real-time untuk generasi muda Indonesia.",
    footerQuickLinks: "Navigasi Cepat",
    footerDataSources: "Sumber Data Resmi",
    footerDisasterModules: "6 Modul Bencana",
    footerRights: "Hak Cipta Dilindungi.",
    footerAttribution: "Dikembangkan untuk memajukan literasi kebencanaan Indonesia."
  },
  en: {
    brandName: "RAWAN",
    brandTagline: "Indonesian Youth Disaster Anticipation & Awareness",
    navHome: "Home",
    navModules: "Disaster Modules",
    navMap: "Hazard Map",
    navChecklist: "Emergency Kit",
    navQuiz: "Quiz & Exam",
    soundMute: "Mute Sound",
    soundUnmute: "Unmute Sound",
    accessibilitySettings: "Accessibility Settings",
    volume: "Volume",
    toggleMenu: "Toggle Menu",

    heroBadge: "Indonesian Disaster Mitigation Education Platform",
    heroTitleMain: "Interactive 3D Simulation &",
    heroTitleAccent: "Disaster Preparedness",
    heroSubtitle: "Explore the science of natural disasters across Indonesia visually, master emergency protocols, and test your readiness through our real-time 3D educational platform.",
    heroCtaSimulation: "Start 3D Simulation",
    heroCtaMap: "Explore Hazard Map",
    heroCtaChecklist: "Open Emergency Kit",

    featModulesTitle: "6 3D Disaster Modules",
    featModulesDesc: "Multi-stage interactive real-time simulations",
    featBmkgTitle: "Live BMKG Feed",
    featBmkgDesc: "Integrated real-time national seismic data",
    featChecklistTitle: "72-Hour Emergency Kit",
    featChecklistDesc: "BNPB emergency evacuation packing guide",
    featQuizTitle: "Gamified Quiz",
    featQuizDesc: "Test your knowledge & collect XP points",

    catalogTitle: "Select 3D Disaster Simulation Module",
    catalogSubtitle: "Each module includes geological science explanations, in-depth 3D visuals, and interactive self-rescue decision scenarios.",
    filterAll: "All Categories",
    filterGeology: "Geology",
    filterHydrometeorology: "Hydrometeorology",
    btnLearnScience: "Learn Science",
    btnStartSimulation: "Start Simulation",
    badgeStages: "7 Interactive Stages",
    badgeInteractive: "Rapid Response Scenarios",
    badgeHistorical: "Historical Event in Indonesia",
    badgeScientificFact: "Scientific Fact",

    hudStage: "Stage",
    hudOf: "of",
    hudObjective: "Safety Objective",
    hudCutawayOn: "Cutaway Active",
    hudCutawayOff: "Subterranean Cutaway",
    hudCutawayBtn: "Subterranean Cutaway",
    hudResetCamera: "Reset Camera",
    hudNextStage: "Proceed to Next Stage",
    hudBackToCatalog: "Back to Catalog",
    hudCompletedTitle: "Simulation Completed!",
    hudCompletedDesc: "You have successfully completed all emergency response scenarios for this disaster.",
    hudRestart: "Restart Simulation",
    hudGoToQuiz: "Test Knowledge in Quiz",
    hudXpReward: "XP Reward",
    hudCorrect: "Correct Decision!",
    hudIncorrect: "Incorrect Decision",
    hudTimeLimit: "Time Left",

    modalTabCauses: "Causes & Science",
    modalTabWarning: "Warning Signs",
    modalTabImpacts: "Disaster Impacts",
    modalTabPrevention: "Prevention & Mitigation",
    modalTabEmergency: "Emergency Procedures",
    modalTabEvacuation: "Evacuation Routes",
    modalListenNarration: "Listen to Narration",
    modalStopNarration: "Stop Narration",
    modalStartSimBtn: "Enter 3D Simulation Arena",

    checkHeaderTitle: "72-Hour Emergency Disaster Kit (TSB) Guide",
    checkHeaderSubtitle: "Essential survival supplies to sustain autonomy during the first 3 days after a disaster before rescue teams arrive, aligned with BNPB standards.",
    checkStatTotal: "Items Packed",
    checkStatWeight: "Estimated Pack Weight",
    checkStatReadiness: "Preparedness Level",
    checkCatAll: "All Categories",
    checkCatBasic: "Basic Survival",
    checkCatMedical: "First Aid & Medical",
    checkCatComm: "Lighting & Communication",
    checkCatDocs: "Documents & Protection",
    checkImportanceHigh: "Essential",
    checkImportanceMedium: "Important",
    checkImportanceLow: "Complementary",
    checkResetBtn: "Reset Checklist",
    checkPrintBtn: "Print / Save PDF",
    checkPacked: "Packed",
    checkUnpacked: "Needed",

    mapHeaderTitle: "Indonesian Hazard Geoportal & Seismic Map",
    mapHeaderSubtitle: "Monitor megathrust subduction zones, active onshore fault lines, volcanic distribution, and live BMKG earthquake feeds in real-time.",
    mapFilterAll: "All Hazard Points",
    mapFilterSubduction: "Megathrust Zones",
    mapFilterFault: "Active Fault Lines",
    mapFilterVolcano: "Active Volcanoes",
    mapFilterLiveBmkg: "Live BMKG Earthquakes",
    mapRiskLevel: "Risk Level",
    mapRiskHigh: "High",
    mapRiskVeryHigh: "Very High",
    mapRiskExtreme: "Extreme",
    mapBmkgLiveBadge: "Live BMKG Telemetry",
    mapMagnitude: "Magnitude",
    mapDepth: "Depth",
    mapTime: "Event Time",
    mapTsunamiPotential: "Potential",
    mapNoLiveAlert: "Connecting to BMKG TEWS telemetry server...",
    mapLoadingBmkg: "Loading live BMKG earthquake data...",
    mapLegendTitle: "Map Legend",
    mapLegendSubduction: "Megathrust Subduction Zone",
    mapLegendFault: "Active Onshore Fault Line",
    mapLegendVolcano: "Active Type-A Volcano",
    mapLegendBmkg: "Latest BMKG Epicenter",

    quizHeaderTitle: "Disaster Preparedness Quiz & Assessment",
    quizHeaderSubtitle: "Test your mitigation knowledge, accumulate XP points, and achieve the Disaster Preparedness Cadre rank!",
    quizFilterAll: "All Disasters",
    quizDiffEasy: "Easy",
    quizDiffMedium: "Medium",
    quizDiffHard: "Challenge",
    quizQuestionCounter: "Question",
    quizComboStreak: "Combo Streak",
    quizXpScore: "Total XP",
    quizAccuracy: "Accuracy Rate",
    quizNextBtn: "Next Question",
    quizFinishBtn: "Finish Assessment",
    quizExplanationTitle: "Scientific Explanation:",
    quizCompletedTitle: "Assessment Completed!",
    quizCompletedSubtitle: "Here is your disaster preparedness evaluation summary:",
    quizCadreBadgeTitle: "Disaster Preparedness Cadre Badge",
    quizCadreBadgeDesc: "Congratulations! You have demonstrated exceptional disaster mitigation literacy.",
    quizRetakeBtn: "Retake Quiz",
    quizExploreModulesBtn: "Explore Disaster Modules",

    accTitle: "Accessibility Settings",
    accSubtitle: "Comfortable learning tailored for every student",
    accLanguageLabel: "Display Language (Bahasa)",
    accTextSizeLabel: "Display Text Size",
    accSizeNormal: "Normal",
    accSizeLarge: "Large",
    accSizeXLarge: "Extra",
    accNarrationLabel: "Automated Voice Narration",
    accNarrationDesc: "Read educational material aloud with voice narration",
    accContrastLabel: "High Contrast Mode",
    accContrastDesc: "Enhance text contrast and information borders",
    accMotionLabel: "Reduced Motion",
    accMotionDesc: "Disable automatic planetary rotation and camera tremors",
    accLanguageId: "Bahasa Indonesia",
    accLanguageEn: "English",

    footerAbout: "Interactive real-time 3D disaster simulation and preparedness platform for Indonesian youth.",
    footerQuickLinks: "Quick Links",
    footerDataSources: "Official Data Sources",
    footerDisasterModules: "6 Disaster Modules",
    footerRights: "All Rights Reserved.",
    footerAttribution: "Engineered to advance youth disaster literacy in Indonesia."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('rawan_language') as Language;
      return (saved === 'en' || saved === 'id') ? saved : 'id';
    } catch {
      return 'id';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('rawan_language', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      t: TRANSLATIONS[language]
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
