import { ChecklistItem } from '../types/disaster';
import { Language } from '../types/language';

export const CHECKLIST_ITEMS_ID: ChecklistItem[] = [
  {
    id: 'tsb_water',
    name: 'Air Minum Bersih (Minimal 3 Liter)',
    category: 'Kebutuhan Pokok',
    description: 'Kebutuhan mutlak bertahan hidup untuk 72 jam pertama pascabencana.',
    importance: 'Sangat Wajib',
    icon: 'Droplet',
    weightKg: 3.0
  },
  {
    id: 'tsb_food',
    name: 'Makanan Siap Saji / Kaleng / Biskuit Energi',
    category: 'Kebutuhan Pokok',
    description: 'Makanan berkalori tinggi yang tidak mudah basi dan tidak butuh dimasak (kurma, biskuit gandum, kornet).',
    importance: 'Sangat Wajib',
    icon: 'Apple',
    weightKg: 1.5
  },
  {
    id: 'tsb_p3k',
    name: 'Kotak P3K & Obat-obatan Pribadi',
    category: 'Pertolongan & Medis',
    description: 'Plester luka, kasa steril, antiseptik (betadine), parasetamol, oralit, dan obat resep pribadi.',
    importance: 'Sangat Wajib',
    icon: 'Cross',
    weightKg: 0.6
  },
  {
    id: 'tsb_flashlight',
    name: 'Senter Kepala / Senter LED & Baterai Cadangan',
    category: 'Komunikasi & Penerangan',
    description: 'Penerangan darurat saat jaringan listrik PLN padam total di malam hari.',
    importance: 'Sangat Wajib',
    icon: 'Flashlight',
    weightKg: 0.4
  },
  {
    id: 'tsb_whistle',
    name: 'Peluit Darurat (Rescue Whistle)',
    category: 'Komunikasi & Penerangan',
    description: 'Alat paling efektif memanggil tim penolong SAR saat tertimbun reruntuhan tanpa menguras tenaga bersuara.',
    importance: 'Sangat Wajib',
    icon: 'Volume2',
    weightKg: 0.1
  },
  {
    id: 'tsb_powerbank',
    name: 'Power Bank & Kabel Charger Terisi Penuh',
    category: 'Komunikasi & Penerangan',
    description: 'Menjaga baterai ponsel tetap aktif untuk mengabari keluarga dan memanggil tim penyelamat.',
    importance: 'Penting',
    icon: 'BatteryCharging',
    weightKg: 0.5
  },
  {
    id: 'tsb_documents',
    name: 'Dokumen Penting dalam Kantong Kedap Air',
    category: 'Dokumen & Perlindungan',
    description: 'Salinan KTP, Kartu Keluarga, ijazah, polis asuransi, dan sertifikat dalam plastik ziplock tahan air.',
    importance: 'Sangat Wajib',
    icon: 'FileText',
    weightKg: 0.3
  },
  {
    id: 'tsb_cash',
    name: 'Uang Tunai Pecahan Kecil',
    category: 'Dokumen & Perlindungan',
    description: 'Saat mesin ATM mati dan sinyal internet down, uang tunai adalah alat transaksi satu-satunya.',
    importance: 'Penting',
    icon: 'Coins',
    weightKg: 0.2
  },
  {
    id: 'tsb_clothes',
    name: 'Pakaian Ganti, Selimut Hangat & Jas Hujan',
    category: 'Dokumen & Perlindungan',
    description: 'Melindungi tubuh dari hipotermia saat cuaca dingin dan hujan di tenda pengungsian.',
    importance: 'Penting',
    icon: 'Shirt',
    weightKg: 1.2
  },
  {
    id: 'tsb_mask',
    name: 'Masker N95 / Medis & Kacamata Pelindung',
    category: 'Pertolongan & Medis',
    description: 'Melindungi dari debu reruntuhan bangunan, abu vulkanik tajam, dan bau tak sedap.',
    importance: 'Penting',
    icon: 'Shield',
    weightKg: 0.2
  },
  {
    id: 'tsb_radio',
    name: 'Radio Saku Portabel (FM/AM)',
    category: 'Komunikasi & Penerangan',
    description: 'Mendengarkan instruksi dan pembaruan darurat dari pemerintah saat menara sinyal seluler roboh.',
    importance: 'Pelengkap',
    icon: 'Radio',
    weightKg: 0.3
  },
  {
    id: 'tsb_hygiene',
    name: 'Perlengkapan Higienis & Sanitasi Pribadi',
    category: 'Pertolongan & Medis',
    description: 'Sabun cair, sikat gigi, pasta gigi, tisu basah antiseptik, dan pembalut wanita.',
    importance: 'Penting',
    icon: 'Heart',
    weightKg: 0.4
  }
];

export const CHECKLIST_ITEMS_EN: ChecklistItem[] = [
  {
    id: 'tsb_water',
    name: 'Potable Drinking Water (Min. 3 Liters)',
    category: 'Kebutuhan Pokok',
    description: 'Essential survival sustenance for the first 72 hours post-disaster.',
    importance: 'Sangat Wajib',
    icon: 'Droplet',
    weightKg: 3.0
  },
  {
    id: 'tsb_food',
    name: 'Ready-to-Eat Food / Canned Meals / Energy Biscuits',
    category: 'Kebutuhan Pokok',
    description: 'High-calorie, non-perishable foods requiring no cooking (dates, wheat biscuits, canned meat).',
    importance: 'Sangat Wajib',
    icon: 'Apple',
    weightKg: 1.5
  },
  {
    id: 'tsb_p3k',
    name: 'First Aid Kit (P3K) & Prescription Medicines',
    category: 'Pertolongan & Medis',
    description: 'Bandages, sterile gauze, antiseptic solution, paracetamol, oral rehydration salts, and personal medications.',
    importance: 'Sangat Wajib',
    icon: 'Cross',
    weightKg: 0.6
  },
  {
    id: 'tsb_flashlight',
    name: 'Headlamp / LED Flashlight & Spare Batteries',
    category: 'Komunikasi & Penerangan',
    description: 'Critical emergency lighting during complete electrical grid blackouts at night.',
    importance: 'Sangat Wajib',
    icon: 'Flashlight',
    weightKg: 0.4
  },
  {
    id: 'tsb_whistle',
    name: 'High-Decibel Rescue Whistle',
    category: 'Komunikasi & Penerangan',
    description: 'The most energy-efficient tool to alert SAR rescue teams if trapped under rubble.',
    importance: 'Sangat Wajib',
    icon: 'Volume2',
    weightKg: 0.1
  },
  {
    id: 'tsb_powerbank',
    name: 'Fully Charged Power Bank & Multi-Cable',
    category: 'Komunikasi & Penerangan',
    description: 'Maintains smartphone power to communicate with family and emergency services.',
    importance: 'Penting',
    icon: 'BatteryCharging',
    weightKg: 0.5
  },
  {
    id: 'tsb_documents',
    name: 'Vital Documents in Waterproof Pouch',
    category: 'Dokumen & Perlindungan',
    description: 'Copies of ID cards, family registry, diplomas, insurance policies in airtight ziplock bags.',
    importance: 'Sangat Wajib',
    icon: 'FileText',
    weightKg: 0.3
  },
  {
    id: 'tsb_cash',
    name: 'Emergency Cash in Small Denominations',
    category: 'Dokumen & Perlindungan',
    description: 'When ATMs lose power and cellular internet drops, cash remains the sole medium of transaction.',
    importance: 'Penting',
    icon: 'Coins',
    weightKg: 0.2
  },
  {
    id: 'tsb_clothes',
    name: 'Change of Clothes, Thermal Blanket & Raincoat',
    category: 'Dokumen & Perlindungan',
    description: 'Protects against hypothermia and wet conditions in emergency evacuation shelters.',
    importance: 'Penting',
    icon: 'Shirt',
    weightKg: 1.2
  },
  {
    id: 'tsb_mask',
    name: 'N95 / Medical Masks & Protective Goggles',
    category: 'Pertolongan & Medis',
    description: 'Shields respiratory tracts and eyes from building debris, sharp volcanic ash, and smoke.',
    importance: 'Penting',
    icon: 'Shield',
    weightKg: 0.2
  },
  {
    id: 'tsb_radio',
    name: 'Compact Portable FM/AM Radio Receiver',
    category: 'Komunikasi & Penerangan',
    description: 'Receives government broadcasts and emergency instructions if cellular towers collapse.',
    importance: 'Pelengkap',
    icon: 'Radio',
    weightKg: 0.3
  },
  {
    id: 'tsb_hygiene',
    name: 'Personal Hygiene & Sanitation Supplies',
    category: 'Pertolongan & Medis',
    description: 'Liquid soap, toothbrush, toothpaste, antiseptic wet wipes, and sanitary pads.',
    importance: 'Penting',
    icon: 'Heart',
    weightKg: 0.4
  }
];

export const getChecklistItems = (lang: Language = 'id'): ChecklistItem[] => {
  return lang === 'en' ? CHECKLIST_ITEMS_EN : CHECKLIST_ITEMS_ID;
};

export const CHECKLIST_ITEMS = CHECKLIST_ITEMS_ID;
