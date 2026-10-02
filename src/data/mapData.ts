import { MapMarker } from '../types/disaster';
import { Language } from '../types/language';

export interface BmkgEarthquakeData {
  tanggal: string;
  jam: string;
  dateTime: string;
  coordinates: string;
  lat: number;
  lng: number;
  magnitude: string;
  depth: string;
  wilayah: string;
  potensi: string;
  dirasakan?: string;
  shakemap?: string;
}

export const INDONESIA_MAP_MARKERS: MapMarker[] = [
  // ==========================================
  // ZONA MEGATHRUST RESMI PUSGEN BMKG (13 Segmen Utama)
  // ==========================================
  {
    id: 'sub_aceh_andaman',
    title: 'Zona Megathrust Aceh - Andaman',
    type: 'subduction',
    location: 'Lepas Pantai Barat Aceh hingga Kepulauan Andaman',
    lat: 4.8,
    lng: 93.5,
    description: 'Segmen utara subduksi Sumatra yang memicu Gempa & Tsunami Aceh M 9.1+ pada tahun 2004.',
    riskLevel: 'Ekstrem',
    details: 'Diidentifikasi oleh PUSGEN & BMKG sebagai salah satu pemicu tsunami terbesar dalam sejarah peradaban modern.'
  },
  {
    id: 'sub_nias_simeulue',
    title: 'Zona Megathrust Nias - Simeulue',
    type: 'subduction',
    location: 'Lepas Pantai Nias, Simeulue, Sumatera Utara',
    lat: 1.5,
    lng: 96.8,
    description: 'Segmen subduksi aktif yang memicu Gempa Nias M 8.7 pada tahun 2005.',
    riskLevel: 'Ekstrem',
    details: 'Dipantau ketat oleh jaringan seismograf BMKG TEWS & GPS kontinu BIG.'
  },
  {
    id: 'sub_sunda',
    title: 'Zona Megathrust Mentawai - Selat Sunda',
    type: 'subduction',
    location: 'Lepas Pantai Barat Sumatra (Siberut, Pagai, Enggano) hingga Selat Sunda',
    lat: -4.5,
    lng: 101.5,
    description: 'Zona penunjaman Lempeng Indo-Australia di bawah Lempeng Eurasia. PUSGEN BMKG mencatat zona ini sebagai Seismic Gap dengan potensi Magnitudo hingga M 8.9+.',
    riskLevel: 'Ekstrem',
    details: 'Sumber utama pemicu gempa bumi megathrust dan gelombang tsunami dahsyat di pesisir barat Sumatra dan Selat Sunda.'
  },
  {
    id: 'sub_jawa_barat',
    title: 'Zona Megathrust Jawa Barat - Jawa Tengah',
    type: 'subduction',
    location: 'Lepas Pantai Selatan Jawa Barat hingga Cilacap Jawa Tengah',
    lat: -8.5,
    lng: 107.5,
    description: 'Sabuk subduksi aktif di Samudra Hindia selatan Jawa Barat yang menyimpan akumulasi energi besar.',
    riskLevel: 'Ekstrem',
    details: 'Pernah memicu Tsunami Pangandaran 2006 (M 7.7). Dipantau oleh sensor buoy DART & Tide Gauge BMKG.'
  },
  {
    id: 'sub_jawa_timur',
    title: 'Zona Megathrust Jawa Timur',
    type: 'subduction',
    location: 'Lepas Pantai Selatan Pacitan, Trenggalek, Malang, hingga Banyuwangi',
    lat: -9.5,
    lng: 112.5,
    description: 'Segmen subduksi selatan Jawa Timur dengan potensi magnitudo maks M 8.8+.',
    riskLevel: 'Ekstrem',
    details: 'Pernah memicu Tsunami Banyuwangi 1994 (M 7.8). BMKG memasang sistem Sirine Peringatan Dini Tsunami di sepanjang pesisir.'
  },
  {
    id: 'sub_bali_ntb',
    title: 'Zona Megathrust Bali, NTB, & NTT',
    type: 'subduction',
    location: 'Lepas Pantai Selatan Bali, Lombok, Sumbawa, Sumba, hingga Timor',
    lat: -10.2,
    lng: 118.5,
    description: 'Penunjaman lempeng samudra di selatan Kepulauan Nusa Tenggara yang membentang hingga Palung Sumba.',
    riskLevel: 'Ekstrem',
    details: 'Pemicu gempa tektonik dangkal & menengah berskala M 7.0+ di kawasan Nusa Tenggara.'
  },
  {
    id: 'sub_sulut',
    title: 'Zona Subduksi Minahasa / Laut Sulawesi',
    type: 'subduction',
    location: 'Laut Sulawesi - Semenanjung Utara Sulawesi & Kep. Sangihe',
    lat: 2.8,
    lng: 122.5,
    description: 'Zona penunjaman Lempeng Laut Sulawesi di bawah Semenanjung Minahasa.',
    riskLevel: 'Ekstrem',
    details: 'Pemicu rangkaian gempa bumi tektonik berpotensi tsunami di pesisir Manado, Gorontalo, dan Buol.'
  },
  {
    id: 'sub_banda',
    title: 'Zona Subduksi Busur Banda & Maluku',
    type: 'subduction',
    location: 'Laut Banda, Halmahera, & Kepulauan Maluku',
    lat: -5.2,
    lng: 129.5,
    description: 'Kompleksitas tektonik paling rumit di dunia tempat ditemukannya struktur palung laut dalam dan sesar naik Busur Banda.',
    riskLevel: 'Ekstrem',
    details: 'Sering memicu gempa bumi dalam berskala besar (M 7.5+) yang guncangannya terasa hingga Australia bagian utara.'
  },
  {
    id: 'sub_papua',
    title: 'Palung New Guinea & Sesar Tarera-Aiduna',
    type: 'subduction',
    location: 'Utara Teluk Cenderawasih & Pesisir Utara Papua',
    lat: -1.8,
    lng: 137.5,
    description: 'Zona benturan tektonik aktif antara Lempeng Pasifik/Laut Caroline dan lempeng mikro benua Papua.',
    riskLevel: 'Tinggi',
    details: 'Memiliki laju pergeseran tinggi yang memicu rangkaian gempa bumi tektonik dangkal di pesisir Jayapura & Biak.'
  },

  // ==========================================
  // SESAR AKTIF DARAT RESMI PUSGEN & BMKG
  // ==========================================
  {
    id: 'fault_semangko',
    title: 'Sesar Besar Sumatra (Great Sumatran Fault - 19 Segmen)',
    type: 'fault',
    location: 'Membentang 1.900 km sepanjang Pegunungan Bukit Barisan dari Banda Aceh ke Teluk Semangko',
    lat: -2.5,
    lng: 101.5,
    description: 'Patahan geser dextral raksasa yang terbagi menjadi 19 segmen aktif (Seulimeum, Aceh, Tripa, Renun, Toru, Angkola, Sianok, Sumani, Suliti, Siulak, Musi, Semangko).',
    riskLevel: 'Ekstrem',
    details: 'Memiliki laju geser 10-27 mm/tahun dan riwayat gempa merusak tinggi seperti Gempa Tarutung, Gempa Solok, dan Gempa Padang Panjang.'
  },
  {
    id: 'fault_baribis',
    title: 'Sesar Baribis - Kendeng Arc',
    type: 'fault',
    location: 'Purwakarta, Subang, Majalengka, Cirebon, hingga Semarang & Kendeng Jatim',
    lat: -6.65,
    lng: 108.15,
    description: 'Patahan naik aktif yang membentang di bagian utara Pulau Jawa melintasi kawasan padat penduduk Jawa Barat hingga Jawa Timur.',
    riskLevel: 'Ekstrem',
    details: 'Studi BMKG & PUSGEN mengidentifikasi segmen Jakarta-Bekasi-Purwakarta aktif bergerak dengan potensi M 6.5+.'
  },
  {
    id: 'fault_lembang',
    title: 'Sesar Lembang',
    type: 'fault',
    location: 'Bandung Utara, Jawa Barat',
    lat: -6.82,
    lng: 107.61,
    description: 'Patahan aktif sepanjang 29 km dengan laju geser 3-6 mm/tahun membentang dari Padalarang hingga Gunung Manglayang.',
    riskLevel: 'Tinggi',
    details: 'BMKG memasang 6 stasiun seismograf rapat untuk memantau aktivitas mikro-seismik sesar yang mengancam kawasan Cekungan Bandung.'
  },
  {
    id: 'fault_garsela',
    title: 'Sesar Garsela (Garut Selatan)',
    type: 'fault',
    location: 'Kabupaten Garut & Bandung Selatan, Jawa Barat',
    lat: -7.25,
    lng: 107.75,
    description: 'Sesar aktif dengan 2 struktur segmen utama (Segmen Rakutai & Segmen Kencana) yang sering memicu gempa dangkal beruntun (earthquake swarm).',
    riskLevel: 'Tinggi',
    details: 'Meskipun magnitudo relatif sedang (M 4.0 - 5.2), hiposenternya yang sangat dangkal (<10 km) menimbulkan guncangan destruktif lokal.'
  },
  {
    id: 'fault_opak',
    title: 'Sesar Opak Yogyakarta',
    type: 'fault',
    location: 'Bantul & Sleman, D.I. Yogyakarta',
    lat: -7.88,
    lng: 110.42,
    description: 'Sesar aktif yang membentang dari muara Sungai Opak hingga Prambanan, memicu Gempa Bantul M 6.3 pada tahun 2006.',
    riskLevel: 'Tinggi',
    details: 'Guncangan gempanya sangat merusak akibat tanah endapan aluvium vulkanik muda yang melipatgandakan gelombang seismik.'
  },
  {
    id: 'fault_flores_thrust',
    title: 'Sesar Naik Flores (Flores Back-Arc Thrust)',
    type: 'fault',
    location: 'Lepas Pantai Utara Bali, Lombok, Sumbawa, hingga Flores',
    lat: -7.95,
    lng: 117.8,
    description: 'Sesar naik raksasa di Laut Flores yang memicu rangkaian Gempa Lombok M 7.0 (2018) dan Gempa & Tsunami Flores 1992 (M 7.8).',
    riskLevel: 'Ekstrem',
    details: 'Merupakan sumber gempa utama di perairan utara Kepulauan Nusa Tenggara yang dipantau ketat oleh BMKG.'
  },
  {
    id: 'fault_palukoro',
    title: 'Sesar Geser Palu-Koro & Sesar Matano',
    type: 'fault',
    location: 'Teluk Palu - Lembah Koro - Danau Matano, Sulawesi Tengah & Selatan',
    lat: -1.5,
    lng: 120.2,
    description: 'Sesar geser aktif berkecapatan tinggi 35-45 mm/tahun yang memicu Gempa M 7.4 dan likuefaksi dahsyat Palu 2018.',
    riskLevel: 'Ekstrem',
    details: 'Salah satu patahan darat teraktif dan paling berbahaya di Asia Tenggara menurut penelitian BMKG & BRIN.'
  },
  {
    id: 'fault_sorong',
    title: 'Sesar Sorong',
    type: 'fault',
    location: 'Membentang dari Kepala Burung Papua, Laut Halmahera, hingga Sulawesi Tengah',
    lat: -1.2,
    lng: 131.5,
    description: 'Sesar geser sinistral terbesar di kawasan timur Indonesia yang memotong struktur geologi Maluku Utara dan Papua.',
    riskLevel: 'Ekstrem',
    details: 'Memiliki laju pergeseran 32 mm/tahun yang mengendalikan aktivitas tektonik regional Papua-Maluku.'
  },

  // ==========================================
  // GUNUNG API AKTIF MAGMA INDONESIA / PVMBG
  // ==========================================

  // --- SUMATRA ---
  {
    id: 'vol_sinabung',
    title: 'Gunung Sinabung (2.460 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Karo, Sumatera Utara',
    lat: 3.17,
    lng: 98.39,
    description: 'Gunung api aktif tipe strato yang bangun dari tidur panjang 400 tahun sejak 2010 dan sering melontarkan awan panas guguran.',
    riskLevel: 'Tinggi',
    details: 'Status PVMBG menetapkan Zona Merah Bahaya pada radius 3-5 km dari kawah aktif.'
  },
  {
    id: 'vol_marapi_sumbar',
    title: 'Gunung Marapi (2.891 mdpl)',
    type: 'volcano',
    location: 'Agam & Tanah Datar, Sumatera Barat',
    lat: -0.38,
    lng: 100.47,
    description: 'Gunung api teraktif di Pulau Sumatra yang sering mengalami erupsi freatik tiba-tiba tanpa sinyal seismik awal yang jelas.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level III (SIAGA) dengan radius rekomendasi aman 4.5 km dari Kawah Verbeek.'
  },
  {
    id: 'vol_kerinci',
    title: 'Gunung Kerinci (3.805 mdpl)',
    type: 'volcano',
    location: 'Kerinci (Jambi) & Solok Selatan (Sumbar)',
    lat: -1.69,
    lng: 101.26,
    description: 'Gunung api tertinggi di Indonesia dan puncak tertinggi di Sumatra dengan kawah aktif sedalam 600 meter.',
    riskLevel: 'Tinggi',
    details: 'PVMBG memantau rutin gumpalan asap kolom abu vulkanik hitam yang mengarah ke jalur penerbangan darurat.'
  },
  {
    id: 'vol_dempo',
    title: 'Gunung Dempo (3.173 mdpl)',
    type: 'volcano',
    location: 'Kota Pagar Alam, Sumatera Selatan',
    lat: -3.11,
    lng: 103.13,
    description: 'Gunung api aktif yang memiliki danau kawah bercorak hijau toska dengan riwayat erupsi freatik periodik.',
    riskLevel: 'Tinggi',
    details: 'Status PVMBG Level II (WASPADA). Dilarang mendekati danau kawah dalam radius 1 km.'
  },
  {
    id: 'vol_talang',
    title: 'Gunung Talang (2.597 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Solok, Sumatera Barat',
    lat: -0.97,
    lng: 100.67,
    description: 'Gunung api aktif yang dikelilingi danau kembar (Danau Diatas & Danau Dibawah) dengan sistem kawah celah (fissure).',
    riskLevel: 'Tinggi',
    details: 'Dipantau oleh pos pengamatan PVMBG Kampung Batu Dalam.'
  },
  {
    id: 'vol_kaba',
    title: 'Gunung Kaba (1.935 mdpl)',
    type: 'volcano',
    location: 'Rejang Lebong, Bengkulu',
    lat: -3.52,
    lng: 102.62,
    description: 'Gunung api dengan kompleks kawah ganda aktif yang memancarkan solfatara dan fumarola kuat.',
    riskLevel: 'Tinggi',
    details: 'PVMBG mengimbau pengunjung untuk tidak menginap di tepi kawah aktif.'
  },

  // --- JAWA & SELAT SUNDA ---
  {
    id: 'vol_krakatau',
    title: 'Gunung Anak Krakatau (157 mdpl)',
    type: 'volcano',
    location: 'Selat Sunda (Lampung - Banten)',
    lat: -6.10,
    lng: 105.42,
    description: 'Gunung api kaldera laut aktif. Runtuhan tubuh baratnya pada 22 Desember 2018 memicu tsunami dahsyat Selat Sunda.',
    riskLevel: 'Sangat Tinggi',
    details: 'Dipantau sistem peringatan dini tsunami BMKG TEWS & PVMBG dengan radius aman 5 km.'
  },
  {
    id: 'vol_gede',
    title: 'Gunung Gede (2.958 mdpl)',
    type: 'volcano',
    location: 'Cianjur, Sukabumi, Bogor (Jawa Barat)',
    lat: -6.78,
    lng: 106.98,
    description: 'Gunung api stratovulkano dekat kawasan metropolitan Jabodetabek yang memiliki Kawah Ratu aktif.',
    riskLevel: 'Tinggi',
    details: 'Dipantau pos PVMBG Gedepahala terhadap peningkatan kegempaan vulkanik dalam.'
  },
  {
    id: 'vol_salak',
    title: 'Gunung Salak (2.211 mdpl)',
    type: 'volcano',
    location: 'Bogor & Sukabumi, Jawa Barat',
    lat: -6.72,
    lng: 106.73,
    description: 'Gunung api tua dengan Kawah Ratu yang memancarkan gas beracun (CO2/H2S) berkonsentrasi tinggi.',
    riskLevel: 'Tinggi',
    details: 'PVMBG memperingatkan bahaya gas beracun tidak berbau di celah kawah saat cuaca mendung.'
  },
  {
    id: 'vol_tangkubanparahu',
    title: 'Gunung Tangkuban Parahu (2.084 mdpl)',
    type: 'volcano',
    location: 'Subang & Bandung Barat, Jawa Barat',
    lat: -6.77,
    lng: 107.60,
    description: 'Gunung api berbentuk perahu terbalik dengan Kawah Ratu & Kawah Upas yang sering erupsi phreatik mendadak.',
    riskLevel: 'Tinggi',
    details: 'Status PVMBG Level II (WASPADA). Evaluasi semburan lumpur dan gas vulkanik rutin.'
  },
  {
    id: 'vol_papandayan',
    title: 'Gunung Papandayan (2.665 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Garut, Jawa Barat',
    lat: -7.32,
    lng: 107.73,
    description: 'Gunung api dengan kompleks kawah terbuka unik (Kawah Mas, Kawah Baru) dan ladang gas belerang luas.',
    riskLevel: 'Tinggi',
    details: 'Dipantau ketat PVMBG pos Cisurupan terhadap potensi longsoran dinding kawah.'
  },
  {
    id: 'vol_slamet',
    title: 'Gunung Slamet (3.428 mdpl)',
    type: 'volcano',
    location: 'Pemalang, Banyumas, Brebes, Tegal, Purbalingga (Jateng)',
    lat: -7.24,
    lng: 109.20,
    description: 'Gunung api tertinggi di Jawa Tengah dengan tipe erupsi strombolian yang menghasilkan dentuman kuat.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level II (WASPADA). Radius aman 2 km dari kawah puncak.'
  },
  {
    id: 'vol_dieng',
    title: 'Kompleks Gunung Api Dieng',
    type: 'volcano',
    location: 'Wonosobo & Banjarnegara, Jawa Tengah',
    lat: -7.20,
    lng: 109.91,
    description: 'Dataran tinggi vulkanik aktif dengan ancaman semburan gas racun CO2 (Kawah Timbang) dan erupsi lumpur (Kawah Sileri).',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG memasang stasiun pemantau konsentrasi gas racun otomatis 24 jam.'
  },
  {
    id: 'vol_merapi',
    title: 'Gunung Merapi (2.930 mdpl)',
    type: 'volcano',
    location: 'Sleman (DIY), Magelang, Boyolali, Klaten (Jateng)',
    lat: -7.54,
    lng: 110.44,
    description: 'Gunung api teraktif di Pulau Jawa dengan kubah lava aktif dan awan panas guguran (Wedhus Gembel).',
    riskLevel: 'Ekstrem',
    details: 'Status PVMBG Level III (SIAGA). Pemantauan BPPTKG 24 jam dengan seismometer dan tiltmeter.'
  },
  {
    id: 'vol_kelud',
    title: 'Gunung Kelud (1.731 mdpl)',
    type: 'volcano',
    location: 'Kediri, Blitar, Malang (Jawa Timur)',
    lat: -7.93,
    lng: 112.30,
    description: 'Gunung api sangat berbahaya dengan riwayat letusan eksplosif dahsyat 2014 yang melontarkan abu sejauh 500 km.',
    riskLevel: 'Sangat Tinggi',
    details: 'Sistem saluran terowongan Ampera dibuat untuk mengontrol volume air danau kawah.'
  },
  {
    id: 'vol_bromo',
    title: 'Gunung Bromo (2.329 mdpl)',
    type: 'volcano',
    location: 'Probolinggo, Pasuruan, Malang, Lumajang (Jatim)',
    lat: -7.94,
    lng: 112.95,
    description: 'Gunung api aktif di tengah Kaldera Tengger dengan semburan asap belerang terus-menerus.',
    riskLevel: 'Tinggi',
    details: 'Status PVMBG Level II (WASPADA). Dilarang mendekati bibir kawah dalam radius 1 km.'
  },
  {
    id: 'vol_semeru',
    title: 'Gunung Semeru (Mahameru 3.676 mdpl)',
    type: 'volcano',
    location: 'Lumajang & Malang, Jawa Timur',
    lat: -8.11,
    lng: 112.92,
    description: 'Atap pulau Jawa yang sering mengalami erupsi vulkanian dengan ancaman awan panas guguran melintasi Besuk Kobokan.',
    riskLevel: 'Ekstrem',
    details: 'Status PVMBG Level III (SIAGA) dengan rekomendasi jarak aman 13 km di sektor tenggara.'
  },
  {
    id: 'vol_raung',
    title: 'Gunung Raung (3.332 mdpl)',
    type: 'volcano',
    location: 'Banyuwangi, Bondowoso, Jember (Jawa Timur)',
    lat: -8.12,
    lng: 114.04,
    description: 'Gunung api dengan kaldera terbesar kedua di Indonesia (diameter 2 km) dan suara gemuruh strombolian yang khas.',
    riskLevel: 'Tinggi',
    details: 'Sering mengganggu penerbangan di Bandara Banyuwangi & Bali saat erupsi abu.'
  },
  {
    id: 'vol_ijen',
    title: 'Gunung Ijen (2.769 mdpl)',
    type: 'volcano',
    location: 'Banyuwangi & Bondowoso, Jawa Timur',
    lat: -8.05,
    lng: 114.24,
    description: 'Gunung api terkenal dengan danau asam terbesar di dunia dan fenomena api biru (Blue Fire) Kawah Ijen.',
    riskLevel: 'Tinggi',
    details: 'PVMBG memantau ketat suhu danau kawah dan pelepasan gas asam sulfat.'
  },

  // --- BALI & NUSA TENGGARA ---
  {
    id: 'vol_agung',
    title: 'Gunung Agung (3.031 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Karangasem, Bali',
    lat: -8.34,
    lng: 115.50,
    description: 'Atap Pulau Bali yang mengalami erupsi magmatik eksplosif besar pada tahun 2017-2019.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level I (NORMAL/WASPADA). Dipantau pos Rendang Karangasem.'
  },
  {
    id: 'vol_batur',
    title: 'Gunung Batur (1.717 mdpl)',
    type: 'volcano',
    location: 'Bangli, Bali',
    lat: -8.24,
    lng: 115.37,
    description: 'Gunung api di dalam kaldera ganda purba yang indah dengan danau kawah Batur.',
    riskLevel: 'Tinggi',
    details: 'Dipantau pos PVMBG Kintamani terhadap aktivitas letusan basaltik.'
  },
  {
    id: 'vol_rinjani',
    title: 'Gunung Rinjani & Gunung Barujari (3.726 mdpl)',
    type: 'volcano',
    location: 'Lombok Utara, Nusa Tenggara Barat',
    lat: -8.41,
    lng: 116.46,
    description: 'Gunung api megah di Pulau Lombok dengan anak gunung aktif Barujari di tengah Danau Segara Anak.',
    riskLevel: 'Sangat Tinggi',
    details: 'Erupsi Barujari dapat memicu banjir bandang lahar di danau kaldera Segara Anak.'
  },
  {
    id: 'vol_tambora',
    title: 'Gunung Tambora (2.850 mdpl)',
    type: 'volcano',
    location: 'Sumbawa & Dompu, Nusa Tenggara Barat',
    lat: -8.25,
    lng: 118.00,
    description: 'Gunung api pemicu letusan terhebat dalam sejarah modern manusia pada tahun 1815 (VEI 7) yang mengubah iklim dunia.',
    riskLevel: 'Sangat Tinggi',
    details: 'Memiliki kaldera raksasa sedalam 1.100 meter yang dipantau PVMBG.'
  },
  {
    id: 'vol_lewotobi',
    title: 'Gunung Lewotobi Laki-laki (1.584 mdpl)',
    type: 'volcano',
    location: 'Flores Timur, Nusa Tenggara Timur',
    lat: -8.53,
    lng: 122.78,
    description: 'Gunung api kembar Flores yang mengalami peningkatan erupsi dahsyat pada 2024 dengan gumpalan abu melambung 10 km.',
    riskLevel: 'Ekstrem',
    details: 'Status PVMBG Level IV (AWAS) dengan rekomendasi zona bahaya 7 km dari pusat kawah.'
  },
  {
    id: 'vol_iya',
    title: 'Gunung Iya (637 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Ende, Nusa Tenggara Timur',
    lat: -8.88,
    lng: 121.64,
    description: 'Gunung api semenanjung di pantai selatan Flores yang mengalami peningkatan kegempaan signifikan pada 2024.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level III (SIAGA). Berpotensi memicu reruntuhan kawah ke laut.'
  },

  // --- SULAWESI & NORTH MALUKU ---
  {
    id: 'vol_ruang',
    title: 'Gunung Ruang (725 mdpl)',
    type: 'volcano',
    location: 'Kabupaten Kepulauan Sitaro, Sulawesi Utara',
    lat: 2.30,
    lng: 125.37,
    description: 'Gunung api pulau yang mengalami erupsi eksplosif paroksisma pada April 2024 hingga memicu petir vulkanik & ancaman tsunami laut.',
    riskLevel: 'Ekstrem',
    details: 'Status PVMBG menetapkan evakuasi total seluruh penduduk Pulau Ruang & pesisir Tagulandang.'
  },
  {
    id: 'vol_karangetang',
    title: 'Gunung Karangetang (1.784 mdpl)',
    type: 'volcano',
    location: 'Pulau Siau, Kepulauan Sitaro, Sulawesi Utara',
    lat: 2.78,
    lng: 125.40,
    description: 'Salah satu gunung api teraktif di Indonesia yang hampir tanpa henti meluncurkan lava pijar malam hari.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level III (SIAGA) dengan guguran lava pijar mengarah ke Kali Batang & Kiting.'
  },
  {
    id: 'vol_lokon',
    title: 'Gunung Lokon (1.580 mdpl)',
    type: 'volcano',
    location: 'Kota Tomohon, Sulawesi Utara',
    lat: 1.35,
    lng: 124.79,
    description: 'Gunung api dengan kawah aktif Tompaluan di celah antara Gunung Lokon dan Gunung Empung.',
    riskLevel: 'Tinggi',
    details: 'PVMBG memasang seismometer otomatis untuk memantau gempa vulkanik dangkal.'
  },
  {
    id: 'vol_ibu',
    title: 'Gunung Ibu (1.340 mdpl)',
    type: 'volcano',
    location: 'Halmahera Barat, Maluku Utara',
    lat: 1.48,
    lng: 127.63,
    description: 'Gunung api di Maluku Utara yang mengalami erupsi kontinu dengan lontaran abu vulkanik tinggi hingga 4.000 meter.',
    riskLevel: 'Ekstrem',
    details: 'Status PVMBG Level IV (AWAS) dengan zona steril 4 km dan sektoral 7 km ke arah pembukaan kawah.'
  },
  {
    id: 'vol_dukono',
    title: 'Gunung Dukono (1.335 mdpl)',
    type: 'volcano',
    location: 'Halmahera Utara, Maluku Utara',
    lat: 1.68,
    lng: 127.88,
    description: 'Gunung api yang meletus secara terus-menerus sejak 1933 dengan kolom abu tebal melintasi Tobelo.',
    riskLevel: 'Sangat Tinggi',
    details: 'Status PVMBG Level II (WASPADA). Masyarakat diimbau selalu menggunakan masker anti-abu.'
  },
  {
    id: 'vol_gamalama',
    title: 'Gunung Gamalama (1.715 mdpl)',
    type: 'volcano',
    location: 'Pulau Ternate, Maluku Utara',
    lat: 0.80,
    lng: 127.33,
    description: 'Gunung api pulau yang membentuk seluruh wilayah Pulau Ternate dengan riwayat erupsi freatik merusak.',
    riskLevel: 'Tinggi',
    details: 'Dipantau pos PVMBG Ternate 24 jam nonstop.'
  }
];

export const INDONESIA_MAP_MARKERS_EN: MapMarker[] = [
  // ==========================================
  // OFFICIAL PUSGEN BMKG MEGATHRUST ZONES (13 Major Segments)
  // ==========================================
  {
    id: 'sub_aceh_andaman',
    title: 'Aceh - Andaman Megathrust Zone',
    type: 'subduction',
    location: 'Off the Western Coast of Aceh to Andaman Islands',
    lat: 4.8,
    lng: 93.5,
    description: 'Northern segment of the Sumatra subduction that triggered the 2004 M 9.1+ Aceh Earthquake & Tsunami.',
    riskLevel: 'Ekstrem',
    details: 'Identified by PUSGEN & BMKG as one of the largest tsunami generators in modern human history.'
  },
  {
    id: 'sub_nias_simeulue',
    title: 'Nias - Simeulue Megathrust Zone',
    type: 'subduction',
    location: 'Off the Coast of Nias, Simeulue, North Sumatra',
    lat: 1.5,
    lng: 96.8,
    description: 'Active subduction segment that triggered the 2005 M 8.7 Nias Earthquake.',
    riskLevel: 'Ekstrem',
    details: 'Closely monitored by the BMKG TEWS seismograph network and BIG continuous GPS stations.'
  },
  {
    id: 'sub_sunda',
    title: 'Mentawai - Sunda Strait Megathrust Zone',
    type: 'subduction',
    location: 'Off the Western Coast of Sumatra (Siberut, Pagai, Enggano) to Sunda Strait',
    lat: -4.5,
    lng: 101.5,
    description: 'Subduction zone of the Indo-Australian Plate dipping beneath the Eurasian Plate. Recorded by PUSGEN BMKG as a prominent Seismic Gap with potential up to M 8.9+.',
    riskLevel: 'Ekstrem',
    details: 'Primary source of potential megathrust earthquakes and catastrophic tsunamis along Western Sumatra and Sunda Strait coastal lines.'
  },
  {
    id: 'sub_jawa_barat',
    title: 'West Java - Central Java Megathrust Zone',
    type: 'subduction',
    location: 'Off the Southern Coast of West Java to Cilacap, Central Java',
    lat: -8.5,
    lng: 107.5,
    description: 'Active subduction belt in the Indian Ocean south of Java harboring massive accumulated strain energy.',
    riskLevel: 'Ekstrem',
    details: 'Triggered the 2006 Pangandaran Tsunami (M 7.7). Continuously monitored by BMKG DART buoys and tide gauges.'
  },
  {
    id: 'sub_jawa_timur',
    title: 'East Java Megathrust Zone',
    type: 'subduction',
    location: 'Off the Southern Coast of Pacitan, Trenggalek, Malang, to Banyuwangi',
    lat: -9.5,
    lng: 112.5,
    description: 'Southern East Java subduction segment with a maximum potential magnitude of M 8.8+.',
    riskLevel: 'Ekstrem',
    details: 'Triggered the 1994 Banyuwangi Tsunami (M 7.8). Coastal areas are equipped with BMKG Tsunami Early Warning Sirens.'
  },
  {
    id: 'sub_bali_ntb',
    title: 'Bali, NTB, & NTT Megathrust Zone',
    type: 'subduction',
    location: 'Off the Southern Coast of Bali, Lombok, Sumbawa, Sumba, to Timor',
    lat: -10.2,
    lng: 118.5,
    description: 'Oceanic plate subduction south of the Lesser Sunda Islands extending into the Sumba Trench.',
    riskLevel: 'Ekstrem',
    details: 'Frequent source of shallow to intermediate tectonic earthquakes of M 7.0+ across the Nusa Tenggara region.'
  },
  {
    id: 'sub_sulut',
    title: 'Minahasa / Celebes Sea Subduction Zone',
    type: 'subduction',
    location: 'Celebes Sea - Northern Minahasa Peninsula & Sangihe Islands',
    lat: 2.8,
    lng: 122.5,
    description: 'Subduction zone of the Celebes Sea Plate beneath the northern Minahasa Peninsula.',
    riskLevel: 'Ekstrem',
    details: 'Generates recurrent tectonic earthquake sequences with tsunami potential affecting Manado, Gorontalo, and Buol coasts.'
  },
  {
    id: 'sub_banda',
    title: 'Banda Arc & Maluku Subduction Zone',
    type: 'subduction',
    location: 'Banda Sea, Halmahera, & Maluku Archipelago',
    lat: -5.2,
    lng: 129.5,
    description: 'One of the most complex tectonic convergence zones globally, featuring deep oceanic trenches and Banda Arc thrusts.',
    riskLevel: 'Ekstrem',
    details: 'Frequently generates large deep-focus earthquakes (M 7.5+) felt across Eastern Indonesia and Northern Australia.'
  },
  {
    id: 'sub_papua',
    title: 'New Guinea Trench & Tarera-Aiduna Fault',
    type: 'subduction',
    location: 'North of Cenderawasih Bay & Northern Papua Coast',
    lat: -1.8,
    lng: 137.5,
    description: 'Active tectonic collision zone between the Pacific/Caroline Plate and the Papuan micro-continental crust.',
    riskLevel: 'Tinggi',
    details: 'Exhibits high slip rates generating shallow crustal earthquakes along the Jayapura & Biak coastlines.'
  },

  // ==========================================
  // OFFICIAL PUSGEN & BMKG ACTIVE ONSHORE FAULT LINES
  // ==========================================
  {
    id: 'fault_semangko',
    title: 'Great Sumatran Fault (19 Segments)',
    type: 'fault',
    location: 'Extends 1,900 km along Bukit Barisan Range from Banda Aceh to Semangko Bay',
    lat: -2.5,
    lng: 101.5,
    description: 'Giant dextral strike-slip fault divided into 19 active segments (Seulimeum, Aceh, Tripa, Renun, Toru, Angkola, Sianok, Sumani, Suliti, Siulak, Musi, Semangko).',
    riskLevel: 'Ekstrem',
    details: 'Features a slip rate of 10-27 mm/yr with a historical record of damaging earthquakes such as Tarutung, Solok, and Padang Panjang.'
  },
  {
    id: 'fault_baribis',
    title: 'Baribis - Kendeng Arc Fault',
    type: 'fault',
    location: 'Purwakarta, Subang, Majalengka, Cirebon, through Semarang & East Java Kendeng',
    lat: -6.65,
    lng: 108.15,
    description: 'Active thrust fault traversing northern Java across densely populated urban corridors from West Java to East Java.',
    riskLevel: 'Ekstrem',
    details: 'BMKG & PUSGEN geodetic studies indicate active locking along the Jakarta-Bekasi-Purwakarta segments with M 6.5+ potential.'
  },
  {
    id: 'fault_lembang',
    title: 'Lembang Fault',
    type: 'fault',
    location: 'North Bandung, West Java',
    lat: -6.82,
    lng: 107.61,
    description: 'Active 29 km strike-slip fault with a slip rate of 3-6 mm/yr stretching from Padalarang to Mount Manglayang.',
    riskLevel: 'Tinggi',
    details: 'Monitored by a dense network of 6 BMKG seismic stations tracking micro-seismicity threatening the greater Bandung Basin.'
  },
  {
    id: 'fault_garsela',
    title: 'Garsela Fault (South Garut)',
    type: 'fault',
    location: 'Garut Regency & South Bandung, West Java',
    lat: -7.25,
    lng: 107.75,
    description: 'Active fault with 2 primary structural segments (Rakutai & Kencana Segments) frequently triggering shallow earthquake swarms.',
    riskLevel: 'Tinggi',
    details: 'Despite moderate magnitudes (M 4.0 - 5.2), its ultra-shallow focal depth (<10 km) induces strong localized surface shaking.'
  },
  {
    id: 'fault_opak',
    title: 'Opak River Fault (Yogyakarta)',
    type: 'fault',
    location: 'Bantul & Sleman, D.I. Yogyakarta',
    lat: -7.88,
    lng: 110.42,
    description: 'Active fault extending from the mouth of the Opak River to Prambanan, source of the 2006 M 6.3 Bantul Earthquake.',
    riskLevel: 'Tinggi',
    details: 'Shaking was heavily amplified by thick, unconsolidated young volcanic alluvium deposits in the Yogyakarta Basin.'
  },
  {
    id: 'fault_flores_thrust',
    title: 'Flores Back-Arc Thrust',
    type: 'fault',
    location: 'Off the Northern Coast of Bali, Lombok, Sumbawa, to Flores',
    lat: -7.95,
    lng: 117.8,
    description: 'Massive marine thrust fault system in the Flores Sea responsible for the 2018 Lombok Earthquake sequence (M 7.0) and the 1992 Flores Earthquake & Tsunami (M 7.8).',
    riskLevel: 'Ekstrem',
    details: 'Primary seismic hazard source for the northern coasts of the Lesser Sunda Islands, under intense BMKG monitoring.'
  },
  {
    id: 'fault_palukoro',
    title: 'Palu-Koro & Matano Strike-Slip Fault',
    type: 'fault',
    location: 'Palu Bay - Koro Valley - Lake Matano, Central & South Sulawesi',
    lat: -1.5,
    lng: 120.2,
    description: 'Fast-moving active strike-slip fault (35-45 mm/yr) that triggered the devastating 2018 M 7.4 Palu Earthquake and massive liquefaction.',
    riskLevel: 'Ekstrem',
    details: 'Ranked among the most active and hazardous onshore fault systems in Southeast Asia by BMKG & BRIN.'
  },
  {
    id: 'fault_sorong',
    title: 'Sorong Fault',
    type: 'fault',
    location: 'Extending from Bird\'s Head of Papua, Halmahera Sea, to Central Sulawesi',
    lat: -1.2,
    lng: 131.5,
    description: 'Largest sinistral strike-slip fault in Eastern Indonesia, accommodating oblique convergence between the Pacific and Australian plates.',
    riskLevel: 'Ekstrem',
    details: 'Features a slip rate of ~32 mm/yr governing regional tectonics across Papua and the Northern Maluku archipelago.'
  },

  // ==========================================
  // ACTIVE VOLCANOES (MAGMA INDONESIA / PVMBG)
  // ==========================================

  // --- SUMATRA ---
  {
    id: 'vol_sinabung',
    title: 'Mount Sinabung (2,460 m ASL)',
    type: 'volcano',
    location: 'Karo Regency, North Sumatra',
    lat: 3.17,
    lng: 98.39,
    description: 'Active stratovolcano that awakened from a 400-year dormancy in 2010, frequently producing pyroclastic flows.',
    riskLevel: 'Tinggi',
    details: 'PVMBG enforcement sets a high-hazard Red Zone within a 3-5 km radius of the active crater.'
  },
  {
    id: 'vol_marapi_sumbar',
    title: 'Mount Marapi (2,891 m ASL)',
    type: 'volcano',
    location: 'Agam & Tanah Datar, West Sumatra',
    lat: -0.38,
    lng: 100.47,
    description: 'Most active volcano in Sumatra, characterized by sudden phreatic eruptions without detectable precursor seismic signals.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level III (SIAGA) status with an exclusion safety radius of 4.5 km from the Verbeek Crater.'
  },
  {
    id: 'vol_kerinci',
    title: 'Mount Kerinci (3,805 m ASL)',
    type: 'volcano',
    location: 'Kerinci (Jambi) & South Solok (West Sumatra)',
    lat: -1.69,
    lng: 101.26,
    description: 'Highest volcano in Indonesia and the tallest peak on Sumatra, featuring a 600-meter-deep active summit crater.',
    riskLevel: 'Tinggi',
    details: 'PVMBG continuously monitors ash plume emissions that routinely affect high-altitude regional aviation corridors.'
  },
  {
    id: 'vol_dempo',
    title: 'Mount Dempo (3,173 m ASL)',
    type: 'volcano',
    location: 'Pagar Alam City, South Sumatra',
    lat: -3.11,
    lng: 103.13,
    description: 'Active stratovolcano with a vibrant turquoise crater lake subject to periodic phreatic eruptions.',
    riskLevel: 'Tinggi',
    details: 'PVMBG Level II (WASPADA) status. Access to the crater lake is prohibited within a 1 km radius.'
  },
  {
    id: 'vol_talang',
    title: 'Mount Talang (2,597 m ASL)',
    type: 'volcano',
    location: 'Solok Regency, West Sumatra',
    lat: -0.97,
    lng: 100.67,
    description: 'Active volcano flanked by twin lakes (Lake Diatas & Lake Dibawah) with an active fissure crater complex.',
    riskLevel: 'Tinggi',
    details: 'Monitored continuously by the PVMBG observation post in Kampung Batu Dalam.'
  },
  {
    id: 'vol_kaba',
    title: 'Mount Kaba (1,935 m ASL)',
    type: 'volcano',
    location: 'Rejang Lebong, Bengkulu',
    lat: -3.52,
    lng: 102.62,
    description: 'Volcano featuring active twin crater complexes venting vigorous solfatara and fumarolic gases.',
    riskLevel: 'Tinggi',
    details: 'PVMBG advises visitors not to linger or camp near the active crater rim.'
  },

  // --- JAVA & SUNDA STRAIT ---
  {
    id: 'vol_krakatau',
    title: 'Anak Krakatau (157 m ASL)',
    type: 'volcano',
    location: 'Sunda Strait (Lampung - Banten)',
    lat: -6.10,
    lng: 105.42,
    description: 'Active marine caldera volcano. The catastrophic collapse of its western flank on Dec 22, 2018 triggered the Sunda Strait tsunami.',
    riskLevel: 'Sangat Tinggi',
    details: 'Monitored 24/7 by BMKG TEWS and PVMBG with a strict 5 km exclusion zone.'
  },
  {
    id: 'vol_gede',
    title: 'Mount Gede (2,958 m ASL)',
    type: 'volcano',
    location: 'Cianjur, Sukabumi, Bogor (West Java)',
    lat: -6.78,
    lng: 106.98,
    description: 'Stratovolcano situated adjacent to the greater Jakarta metropolitan area featuring the active Ratu Crater.',
    riskLevel: 'Tinggi',
    details: 'Monitored by the PVMBG Gedepahala post for deep volcanic seismicity variations.'
  },
  {
    id: 'vol_salak',
    title: 'Mount Salak (2,211 m ASL)',
    type: 'volcano',
    location: 'Bogor & Sukabumi, West Java',
    lat: -6.72,
    lng: 106.73,
    description: 'Volcano with the active Ratu Crater known for venting hazardous high-concentration toxic gases (CO2/H2S).',
    riskLevel: 'Tinggi',
    details: 'PVMBG issues strict warnings against odorless toxic gas accumulations in low-lying crater depressions during overcast weather.'
  },
  {
    id: 'vol_tangkubanparahu',
    title: 'Mount Tangkuban Parahu (2,084 m ASL)',
    type: 'volcano',
    location: 'Subang & West Bandung, West Java',
    lat: -6.77,
    lng: 107.60,
    description: 'Inverted-boat-shaped volcano with Ratu and Upas craters known for sudden explosive phreatic bursts.',
    riskLevel: 'Tinggi',
    details: 'PVMBG Level II (WASPADA) status with continuous monitoring of mud spurts and volcanic gas emissions.'
  },
  {
    id: 'vol_papandayan',
    title: 'Mount Papandayan (2,665 m ASL)',
    type: 'volcano',
    location: 'Garut Regency, West Java',
    lat: -7.32,
    lng: 107.73,
    description: 'Volcano featuring extensive open crater fields (Mas & Baru Craters) and vast active sulfur vents.',
    riskLevel: 'Tinggi',
    details: 'Monitored closely by PVMBG Cisurupan post for crater wall instability and landslide risks.'
  },
  {
    id: 'vol_slamet',
    title: 'Mount Slamet (3,428 m ASL)',
    type: 'volcano',
    location: 'Pemalang, Banyumas, Brebes, Tegal, Purbalingga (Central Java)',
    lat: -7.24,
    lng: 109.20,
    description: 'Tallest peak in Central Java characterized by powerful Strombolian eruptions with loud acoustic detonations.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level II (WASPADA) status with a 2 km safety buffer around the summit crater.'
  },
  {
    id: 'vol_dieng',
    title: 'Dieng Volcanic Complex',
    type: 'volcano',
    location: 'Wonosobo & Banjarnegara, Central Java',
    lat: -7.20,
    lng: 109.91,
    description: 'Active volcanic plateau marked by toxic CO2 gas hazards (Timbang Crater) and hydrothermal mud eruptions (Sileri Crater).',
    riskLevel: 'Sangat Tinggi',
    details: 'Equipped with automatic 24-hour toxic gas concentration telemetry sensors installed by PVMBG.'
  },
  {
    id: 'vol_merapi',
    title: 'Mount Merapi (2,930 m ASL)',
    type: 'volcano',
    location: 'Sleman (DIY), Magelang, Boyolali, Klaten (Central Java)',
    lat: -7.54,
    lng: 110.44,
    description: 'Most active volcano in Java featuring an active lava dome and deadly pyroclastic block-and-ash flows (Wedhus Gembel).',
    riskLevel: 'Ekstrem',
    details: 'PVMBG Level III (SIAGA) status under 24/7 BPPTKG monitoring with seismometer and tiltmeter arrays.'
  },
  {
    id: 'vol_kelud',
    title: 'Mount Kelud (1,731 m ASL)',
    type: 'volcano',
    location: 'Kediri, Blitar, Malang (East Java)',
    lat: -7.93,
    lng: 112.30,
    description: 'Extremely dangerous volcano with a violent explosive eruption in 2014 that blanketed Java in volcanic ash up to 500 km away.',
    riskLevel: 'Sangat Tinggi',
    details: 'Engineered with the Ampera drainage tunnel system to regulate the hazardous crater lake water volume.'
  },
  {
    id: 'vol_bromo',
    title: 'Mount Bromo (2,329 m ASL)',
    type: 'volcano',
    location: 'Probolinggo, Pasuruan, Malang, Lumajang (East Java)',
    lat: -7.94,
    lng: 112.95,
    description: 'Iconic active volcano situated inside the ancient Tengger Sand Sea caldera venting continuous sulfur plumes.',
    riskLevel: 'Tinggi',
    details: 'PVMBG Level II (WASPADA) status. Access within 1 km of the crater rim is strictly prohibited.'
  },
  {
    id: 'vol_semeru',
    title: 'Mount Semeru (Mahameru 3,676 m ASL)',
    type: 'volcano',
    location: 'Lumajang & Malang, East Java',
    lat: -8.11,
    lng: 112.92,
    description: 'Highest peak on Java undergoing persistent Vulcanian activity with destructive pyroclastic flows cascading down the Besuk Kobokan drainage.',
    riskLevel: 'Ekstrem',
    details: 'PVMBG Level III (SIAGA) status with a 13 km sectoral exclusion zone in the south-eastern sector.'
  },
  {
    id: 'vol_raung',
    title: 'Mount Raung (3,332 m ASL)',
    type: 'volcano',
    location: 'Banyuwangi, Bondowoso, Jember (East Java)',
    lat: -8.12,
    lng: 114.04,
    description: 'Massive stratovolcano featuring the second largest caldera in Indonesia (2 km wide) with distinct deep Strombolian roaring.',
    riskLevel: 'Tinggi',
    details: 'Ash emissions frequently disrupt international aviation routes across Bali and Banyuwangi airports.'
  },
  {
    id: 'vol_ijen',
    title: 'Mount Ijen (2,769 m ASL)',
    type: 'volcano',
    location: 'Banyuwangi & Bondowoso, East Java',
    lat: -8.05,
    lng: 114.24,
    description: 'World-famous volcano hosting the largest hyper-acidic crater lake and rare natural electric-blue sulfur fire phenomena.',
    riskLevel: 'Tinggi',
    details: 'PVMBG maintains strict thermal and sulfuric gas monitoring over the crater lake surface.'
  },

  // --- BALI & LESSER SUNDA ---
  {
    id: 'vol_agung',
    title: 'Mount Agung (3,031 m ASL)',
    type: 'volcano',
    location: 'Karangasem Regency, Bali',
    lat: -8.34,
    lng: 115.50,
    description: 'Highest peak on Bali, which underwent a major explosive magmatic eruption cycle between 2017 and 2019.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level I (NORMAL/WASPADA) status monitored by the Rendang Karangasem observation post.'
  },
  {
    id: 'vol_batur',
    title: 'Mount Batur (1,717 m ASL)',
    type: 'volcano',
    location: 'Bangli, Bali',
    lat: -8.24,
    lng: 115.37,
    description: 'Caldera volcano nestled within a scenic ancient double caldera containing Lake Batur.',
    riskLevel: 'Tinggi',
    details: 'Monitored by the PVMBG Kintamani post for recurring basaltic effusive activity.'
  },
  {
    id: 'vol_rinjani',
    title: 'Mount Rinjani & Barujari Cone (3,726 m ASL)',
    type: 'volcano',
    location: 'North Lombok, West Nusa Tenggara',
    lat: -8.41,
    lng: 116.46,
    description: 'Majestic volcano on Lombok Island featuring the active post-caldera Barujari cone emerging within Lake Segara Anak.',
    riskLevel: 'Sangat Tinggi',
    details: 'Eruptions from Barujari can displace caldera lake waters, generating sudden volcanic debris flash floods (lahars).'
  },
  {
    id: 'vol_tambora',
    title: 'Mount Tambora (2,850 m ASL)',
    type: 'volcano',
    location: 'Sumbawa & Dompu, West Nusa Tenggara',
    lat: -8.25,
    lng: 118.00,
    description: 'Site of the colossal 1815 super-eruption (VEI 7)—the largest in recorded human history—causing the worldwide "Year Without a Summer".',
    riskLevel: 'Sangat Tinggi',
    details: 'Features an immense 1,100-meter-deep caldera under active geophysical monitoring by PVMBG.'
  },
  {
    id: 'vol_lewotobi',
    title: 'Mount Lewotobi Laki-laki (1,584 m ASL)',
    type: 'volcano',
    location: 'East Flores, East Nusa Tenggara',
    lat: -8.53,
    lng: 122.78,
    description: 'Active twin volcano in Flores that experienced severe explosive eruptions in 2024 sending ash columns up to 10 km high.',
    riskLevel: 'Ekstrem',
    details: 'PVMBG Level IV (AWAS) status with an enforced 7 km danger perimeter from the active vent.'
  },
  {
    id: 'vol_iya',
    title: 'Mount Iya (637 m ASL)',
    type: 'volcano',
    location: 'Ende Regency, East Nusa Tenggara',
    lat: -8.88,
    lng: 121.64,
    description: 'Peninsula volcano on the southern coast of Flores exhibiting elevated seismicity and flank deformation in 2024.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level III (SIAGA) status with risks of catastrophic crater flank collapse into the sea.'
  },

  // --- SULAWESI & NORTH MALUKU ---
  {
    id: 'vol_ruang',
    title: 'Mount Ruang (725 m ASL)',
    type: 'volcano',
    location: 'Sitaro Islands Regency, North Sulawesi',
    lat: 2.30,
    lng: 125.37,
    description: 'Island volcano that produced intense paroxysmal explosive eruptions in April 2024, generating volcanic lightning and marine tsunami alerts.',
    riskLevel: 'Ekstrem',
    details: 'PVMBG enforced a total evacuation of Ruang Island and coastal settlements of Tagulandang.'
  },
  {
    id: 'vol_karangetang',
    title: 'Mount Karangetang (1,784 m ASL)',
    type: 'volcano',
    location: 'Siau Island, Sitaro Islands, North Sulawesi',
    lat: 2.78,
    lng: 125.40,
    description: 'One of Indonesia\'s most persistently active volcanoes, regularly feeding incandescent lava avalanches.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level III (SIAGA) status with incandescent lava avalanches directed toward Batang & Kiting river channels.'
  },
  {
    id: 'vol_lokon',
    title: 'Mount Lokon (1,580 m ASL)',
    type: 'volcano',
    location: 'Tomohon City, North Sulawesi',
    lat: 1.35,
    lng: 124.79,
    description: 'Volcano featuring the active Tompaluan crater situated in the saddle between Mount Lokon and Mount Empung.',
    riskLevel: 'Tinggi',
    details: 'Equipped with automated PVMBG telemetry to detect shallow volcanic earthquake swarms.'
  },
  {
    id: 'vol_ibu',
    title: 'Mount Ibu (1,340 m ASL)',
    type: 'volcano',
    location: 'West Halmahera, North Maluku',
    lat: 1.48,
    lng: 127.63,
    description: 'North Maluku volcano undergoing continuous eruptive activity with dense ash plumes regularly reaching 4,000 meters.',
    riskLevel: 'Ekstrem',
    details: 'PVMBG Level IV (AWAS) status with a 4 km radius exclusion zone and a 7 km sectoral extension toward the crater opening.'
  },
  {
    id: 'vol_dukono',
    title: 'Mount Dukono (1,335 m ASL)',
    type: 'volcano',
    location: 'North Halmahera, North Maluku',
    lat: 1.68,
    lng: 127.88,
    description: 'Persistently erupting volcano active since 1933, dispersing heavy ash clouds over Tobelo and surrounding waters.',
    riskLevel: 'Sangat Tinggi',
    details: 'PVMBG Level II (WASPADA) status. Residents and travelers are advised to wear protective masks at all times.'
  },
  {
    id: 'vol_gamalama',
    title: 'Mount Gamalama (1,715 m ASL)',
    type: 'volcano',
    location: 'Ternate Island, North Maluku',
    lat: 0.80,
    lng: 127.33,
    description: 'Island volcano forming the entirety of Ternate Island with a long history of destructive phreatic and magmatic eruptions.',
    riskLevel: 'Tinggi',
    details: 'Monitored 24/7 by the PVMBG Ternate Volcano Observation Post.'
  }
];

export const getMapMarkers = (lang: Language = 'id'): MapMarker[] => {
  if (lang === 'en') {
    return INDONESIA_MAP_MARKERS_EN;
  }
  return INDONESIA_MAP_MARKERS;
};


