import { QuizQuestion } from '../types/disaster';
import { Language } from '../types/language';

export const QUIZ_QUESTIONS_ID: QuizQuestion[] = [
  // Earthquake
  {
    id: 'q_eq_1',
    disasterId: 'EARTHQUAKE',
    question: 'Saat gempa bumi mengguncang hebat saat Anda berada di dalam gedung, tindakan standar yang direkomendasikan adalah...',
    options: [
      'Berlari panik mencari pintu keluar darurat',
      'Drop, Cover, and Hold On (Merunduk, Berlindung di bawah meja kokoh, Bertahan)',
      'Segera masuk ke dalam lift agar cepat turun',
      'Berdiri bersandar di dekat jendela kaca besar'
    ],
    correctIndex: 1,
    explanation: 'Metode Drop, Cover, and Hold On melindungi organ vital (kepala dan leher) dari kejatuhan plafon, lampu, dan perabot.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_eq_2',
    disasterId: 'EARTHQUAKE',
    question: 'Fenomena hilangnya kekuatan tanah berpasir jenuh air akibat getaran gempa bumi sehingga tanah berubah menjadi lumpur cair disebut...',
    options: [
      'Sedimentasi',
      'Likuefaksi (Pencairan Tanah)',
      'Erosi Glasial',
      'Subsiden Tektonik'
    ],
    correctIndex: 1,
    explanation: 'Likuefaksi terjadi ketika tekanan air pori meningkat drastis saat gempa kuat, membuat tanah kehilangan daya dukungnya seperti yang terjadi di Palu 2018.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_eq_3',
    disasterId: 'EARTHQUAKE',
    question: 'Sesar geser aktif darat di pulau Jawa yang melewati wilayah Bandung bagian utara dan dipantau intensif oleh para ahli geologi adalah...',
    options: [
      'Sesar Semangko',
      'Sesar Palu-Koro',
      'Sesar Lembang',
      'Sesar Opak'
    ],
    correctIndex: 2,
    explanation: 'Sesar Lembang adalah patahan aktif sepanjang kurang lebih 29 km yang membentang dari Padalarang hingga Gunung Manglayang.',
    difficulty: 'Tantangan'
  },

  // Tsunami
  {
    id: 'q_ts_1',
    disasterId: 'TSUNAMI',
    question: 'Apa rumus keselamatan pesisir (rumus darurat) jika terjadi gempa bumi kuat di tepi pantai?',
    options: [
      '10-10-10: 10 menit gempa, lari 10 km, naik 10 meter',
      '20-20-20: Gempa 20 detik, waktu evakuasi 20 menit, lari ke ketinggian 20 meter',
      '30-30-30: Gempa 30 detik, tunggu 30 menit, naik 30 meter',
      '5-5-5: Gempa 5 detik, tunggu 5 menit, kumpul 5 orang'
    ],
    correctIndex: 1,
    explanation: 'Rumus 20-20-20 mengingatkan: jika gempa terasa lebih dari 20 detik, Anda punya waktu ~20 menit sebelum gelombang tiba untuk lari ke ketinggian minimal 20 meter.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_ts_2',
    disasterId: 'TSUNAMI',
    question: 'Mengapa hutan bakau (mangrove) sangat penting dalam mitigasi bencana tsunami di wilayah pesisir Indonesia?',
    options: [
      'Membuat pemandangan pantai lebih indah untuk pariwisata',
      'Akar rimpang mangrove yang rapat mampu mereduksi hingga 50-60% energi dan tinggi gelombang tsunami',
      'Menghalangi perahu nelayan agar tidak terbawa ke tengah laut',
      'Menyerap air laut hingga habis sebelum sampai ke daratan'
    ],
    correctIndex: 1,
    explanation: 'Sabuk hijau mangrove bertindak sebagai pemecah gelombang alami yang menyerap dan memecah momentum energi hidrolik tsunami.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_ts_3',
    disasterId: 'TSUNAMI',
    question: 'Jika Anda melihat air laut di bibir pantai tiba-tiba surut drastis hingga dasar laut terlihat, tindakan yang benar adalah...',
    options: [
      'Turun ke pantai memungut ikan segar yang terdampar',
      'Mengambil kamera untuk merekam fenomena langka tersebut dari dekat',
      'Segera lari secepatnya ke tempat tinggi atau bukit tanpa menunggu suara sirene',
      'Berdiam diri di pinggir pantai menunggu air laut kembali normal'
    ],
    correctIndex: 2,
    explanation: 'Surutnya air laut secara drastis adalah tanda hisapan hidrolik sebelum gelombang tsunami raksasa tiba. Segera evakuasi ke tempat tinggi!',
    difficulty: 'Mudah'
  },

  // Volcano
  {
    id: 'q_vol_1',
    disasterId: 'VOLCANO',
    question: 'Material awan gas dan debu vulkanik panas bersuhu ratusan derajat Celcius yang meluncur cepat di lereng gunung api dikenal di Merapi dengan istilah...',
    options: [
      'Lahar Dingin',
      'Wedhus Gembel (Awan Panas Guguran)',
      'Batu Apung',
      'Geiser Pijar'
    ],
    correctIndex: 1,
    explanation: 'Awan panas guguran atau wedhus gembel memiliki suhu antara 300°C hingga 700°C dan dapat meluncur menuruni lereng hingga 200 km/jam.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_vol_2',
    disasterId: 'VOLCANO',
    question: 'Mengapa saat terjadi hujan abu vulkanik kita sangat disarankan memakai masker khusus (seperti N95) dan kacamata?',
    options: [
      'Karena abu vulkanik mengandung parfum belerang yang harum',
      'Partikel abu vulkanik terdiri dari pecahan kristal silika mikroskopis yang tajam dan merusak alveolus paru-paru serta kornea mata',
      'Agar pakaian yang kita kenakan tidak kotor',
      'Untuk melindungi diri dari terik sinar matahari'
    ],
    correctIndex: 1,
    explanation: 'Abu vulkanik bukanlah abu pembakaran biasa melainkan serpihan batuan dan kaca silika yang tajam yang dapat menyebabkan penyakit ISPA dan abrasi mata.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_vol_3',
    disasterId: 'VOLCANO',
    question: 'Tingkatan status aktivitas gunung api di Indonesia oleh PVMBG secara berurutan dari yang paling rendah hingga paling tinggi adalah...',
    options: [
      'Normal, Waspada, Siaga, Awas',
      'Aman, Hati-hati, Bahaya, Kritis',
      'Waspada, Normal, Awas, Siaga',
      'Hijau, Kuning, Oranye, Merah'
    ],
    correctIndex: 0,
    explanation: 'Status resmi PVMBG: Level I (Normal), Level II (Waspada), Level III (Siaga), dan Level IV (Awas).',
    difficulty: 'Mudah'
  },

  // Flood
  {
    id: 'q_fl_1',
    disasterId: 'FLOOD',
    question: 'Tindakan pertama dan paling utama yang harus dilakukan saat air banjir mulai menggenangi rumah adalah...',
    options: [
      'Menghidupkan pompa air listrik',
      'Mematikan sakelar listrik utama (MCB) rumah untuk mencegah sengatan arus listrik',
      'Membuka semua pintu dan jendela selebar-lebarnya',
      'Mencuci perabotan yang kotor'
    ],
    correctIndex: 1,
    explanation: 'Sengatan arus listrik (electrocution) melalui air genangan banjir adalah salah satu penyebab kematian terbanyak dalam bencana banjir permukiman.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_fl_2',
    disasterId: 'FLOOD',
    question: 'Penyakit mematikan yang ditularkan melalui air kencing tikus yang bercampur dengan genangan air banjir dan masuk lewat luka terbuka adalah...',
    options: [
      'Leptospirosis',
      'Malaria',
      'Tuberkulosis',
      'Rabies'
    ],
    correctIndex: 0,
    explanation: 'Leptospirosis disebabkan oleh bakteri Leptospira yang menyebar lewat urine hewan pengerat dan dapat merusak ginjal bila tidak segera diobati.',
    difficulty: 'Sedang'
  },

  // Landslide
  {
    id: 'q_ls_1',
    disasterId: 'LANDSLIDE',
    question: 'Jenis tanaman berakar serabut kuat dan dalam (hingga 3-5 meter) yang sangat efektif mencegah erosi dan tanah longsor di lereng bukit adalah...',
    options: [
      'Pohon Pisang',
      'Rumput Vetiver (Akar Wangi)',
      'Tanaman Padi',
      'Kaktus Gurun'
    ],
    correctIndex: 1,
    explanation: 'Akar rumput Vetiver menembus lapisan tanah dalam seperti paku bumi yang mengikat partikel lereng dan terbukti direkomendasikan BNPB.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_ls_2',
    disasterId: 'LANDSLIDE',
    question: 'Jika tanah longsor meluncur deras ke arah Anda dari lereng atas, arah penyelamatan diri terbaik adalah...',
    options: [
      'Berlari lurus menuruni lereng searah jatuhnya tanah',
      'Berlari menyamping (tegak lurus) keluar dari jalur luncuran massa tanah',
      'Bersembunyi di bawah atap pondok kayu di tepi lereng',
      'Diam di tempat sambil berteriak'
    ],
    correctIndex: 1,
    explanation: 'Lari menyamping menjauhkan Anda dari koridor utama runtuhan batu dan tanah yang berkecepatan tinggi.',
    difficulty: 'Mudah'
  },

  // Tornado
  {
    id: 'q_to_1',
    disasterId: 'TORNADO',
    question: 'Awan badai berbentuk menjulang tinggi mirip bunga kol berwarna gelap pekat yang sering memicu angin puting beliung dan hujan es adalah...',
    options: [
      'Awan Cirrus',
      'Awan Cumulonimbus (CB)',
      'Awan Stratus',
      'Awan Altocumulus'
    ],
    correctIndex: 1,
    explanation: 'Awan Cumulonimbus adalah awan badai konvektif raksasa dengan arus udara vertikal kuat yang dapat menghasilkan puting beliung, petir, dan angin kencang.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_to_2',
    disasterId: 'TORNADO',
    question: 'Tempat teraman di dalam rumah bertingkat saat diterjang angin puting beliung adalah...',
    options: [
      'Balkon lantai atas dekat jendela kaca',
      'Ruangan paling dalam di lantai dasar tanpa jendela (kamar mandi / lorong tengah)',
      'Di garasi mobil dengan pintu terbuka',
      'Tepat di bawah genteng atap rumah'
    ],
    correctIndex: 1,
    explanation: 'Ruangan tengah di lantai dasar terlindung oleh dinding-dinding bagian luar dari terjangan angin kencang dan pecahan proyektil atap seng.',
    difficulty: 'Sedang'
  }
];

export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  // Earthquake
  {
    id: 'q_eq_1',
    disasterId: 'EARTHQUAKE',
    question: 'When a strong earthquake shakes while you are inside a multi-story building, what is the standard recommended safety action?',
    options: [
      'Panicking and sprinting toward the emergency exit',
      'Drop, Cover, and Hold On (Drop to hands & knees, Cover under a sturdy desk, Hold on)',
      'Immediately enter the elevator to descend quickly',
      'Stand leaning against large exterior glass windows'
    ],
    correctIndex: 1,
    explanation: 'The Drop, Cover, and Hold On protocol shields vital organs (head and neck) from falling ceiling tiles, light fixtures, and heavy furniture.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_eq_2',
    disasterId: 'EARTHQUAKE',
    question: 'The phenomenon where water-saturated sandy soil loses shear strength under seismic shaking and behaves like quicksand is called...',
    options: [
      'Sedimentation',
      'Soil Liquefaction',
      'Glacial Erosion',
      'Tectonic Subsidence'
    ],
    correctIndex: 1,
    explanation: 'Liquefaction occurs when pore water pressure surges dramatically during intense ground shaking, causing soil bearing capacity to collapse (as seen in Palu 2018).',
    difficulty: 'Sedang'
  },
  {
    id: 'q_eq_3',
    disasterId: 'EARTHQUAKE',
    question: 'An active strike-slip onshore fault in Java passing north of Bandung monitored closely by geoscientists is the...',
    options: [
      'Semangko Fault',
      'Palu-Koro Fault',
      'Lembang Fault',
      'Opak Fault'
    ],
    correctIndex: 2,
    explanation: 'The Lembang Fault is an active onshore fault spanning ~29 km from Padalarang to Mount Manglayang in West Java.',
    difficulty: 'Tantangan'
  },

  // Tsunami
  {
    id: 'q_ts_1',
    disasterId: 'TSUNAMI',
    question: 'What is the standard coastal emergency rule of thumb (20-20-20 rule) following strong coastal ground shaking?',
    options: [
      '10-10-10: 10 minutes shaking, run 10 km, climb 10 meters',
      '20-20-20: Shaking >20 seconds, ~20 mins evacuation window, flee to ≥20 meters elevation',
      '30-30-30: 30 seconds shaking, wait 30 minutes, climb 30 meters',
      '5-5-5: 5 seconds shaking, wait 5 minutes, gather 5 people'
    ],
    correctIndex: 1,
    explanation: 'The 20-20-20 rule reminds you: if an earthquake lasts over 20 seconds, you have roughly 20 minutes before tsunami waves arrive to reach at least 20 meters elevation.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_ts_2',
    disasterId: 'TSUNAMI',
    question: 'Why are coastal mangrove greenbelts vital for tsunami mitigation along Indonesian shorelines?',
    options: [
      'They make beaches look more attractive for tourism',
      'Dense mangrove root systems attenuate up to 50-60% of incoming tsunami wave energy and height',
      'They prevent fishing boats from drifting into the open ocean',
      'They absorb all seawater completely before reaching dry land'
    ],
    correctIndex: 1,
    explanation: 'Mangrove greenbelts act as natural biological breakwaters, absorbing and dispersing the hydraulic momentum of incoming tsunami surges.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_ts_3',
    disasterId: 'TSUNAMI',
    question: 'If you observe coastal seawater suddenly and drastically receding to expose the ocean floor, what is the correct immediate action?',
    options: [
      'Walk out onto the seabed to gather stranded fish',
      'Take out your camera to film close-up photos of the rare occurrence',
      'Immediately sprint to high ground or inland hills without waiting for official sirens',
      'Remain on the shoreline waiting for water levels to normalize'
    ],
    correctIndex: 2,
    explanation: 'Sudden coastal water recession is a hydraulic precursor indicating massive wave drawdown before a destructive tsunami crest arrives. Evacuate to high ground immediately!',
    difficulty: 'Mudah'
  },

  // Volcano
  {
    id: 'q_vol_1',
    disasterId: 'VOLCANO',
    question: 'A superheated avalanche of volcanic gas and rock debris traveling down mountain slopes at over 100 km/h is locally known in Java as...',
    options: [
      'Cold Lahar',
      'Wedhus Gembel (Pyroclastic Density Current)',
      'Pumice Floats',
      'Glowing Geyser'
    ],
    correctIndex: 1,
    explanation: 'Pyroclastic density currents (wedhus gembel) reach temperatures between 300°C and 700°C and can surge down slopes at speeds exceeding 200 km/h.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_vol_2',
    disasterId: 'VOLCANO',
    question: 'Why is it crucial to wear sealed goggles and specialized masks (such as N95) during volcanic ashfall?',
    options: [
      'Because volcanic ash contains fragrant sulfur perfumes',
      'Volcanic ash particles consist of microscopic sharp silica shards that abrade respiratory alveoli and corneal tissues',
      'To prevent our clothing from getting dusty',
      'To protect our skin from solar ultraviolet radiation'
    ],
    correctIndex: 1,
    explanation: 'Volcanic ash consists of pulverized glass and rock fragments with razor-sharp edges capable of causing acute respiratory distress and severe eye abrasion.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_vol_3',
    disasterId: 'VOLCANO',
    question: 'What is the official volcano alert hierarchy established by Indonesia PVMBG from lowest to highest?',
    options: [
      'Level I (Normal), Level II (Waspada/Advisory), Level III (Siaga/Watch), Level IV (Awas/Warning)',
      'Safe, Caution, Danger, Critical',
      'Advisory, Normal, Warning, Watch',
      'Green, Yellow, Orange, Red'
    ],
    correctIndex: 0,
    explanation: 'PVMBG official alert levels: Level I (Normal), Level II (Waspada), Level III (Siaga), and Level IV (Awas).',
    difficulty: 'Mudah'
  },

  // Flood
  {
    id: 'q_fl_1',
    disasterId: 'FLOOD',
    question: 'What is the primary and most urgent action to take when floodwaters begin entering your home?',
    options: [
      'Turn on electrical submersible water pumps',
      'Shut off the main electrical breaker (MCB) immediately to prevent electrocution hazards',
      'Open all doors and windows as wide as possible',
      'Begin washing dirty household furniture'
    ],
    correctIndex: 1,
    explanation: 'Electrocution through standing floodwaters is one of the leading causes of preventable fatalities during urban residential flooding.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_fl_2',
    disasterId: 'FLOOD',
    question: 'What life-threatening bacterial disease is transmitted through rodent urine in floodwaters entering via open skin cuts?',
    options: [
      'Leptospirosis',
      'Malaria',
      'Tuberculosis',
      'Rabies'
    ],
    correctIndex: 0,
    explanation: 'Leptospirosis is caused by Leptospira bacteria shed in rodent urine, which penetrates mucosal membranes or cuts, potentially causing acute kidney failure.',
    difficulty: 'Sedang'
  },

  // Landslide
  {
    id: 'q_ls_1',
    disasterId: 'LANDSLIDE',
    question: 'Which deep-rooting grass species (roots penetrating 3–5 meters deep) is recommended by BNPB to bind hillside soil and prevent slope failure?',
    options: [
      'Banana Tree',
      'Vetiver Grass (Akar Wangi)',
      'Paddy Rice',
      'Desert Cactus'
    ],
    correctIndex: 1,
    explanation: 'Vetiver grass root networks act as bio-engineered soil nails that anchor loose topsoil layers deep into bedrock.',
    difficulty: 'Sedang'
  },
  {
    id: 'q_ls_2',
    disasterId: 'LANDSLIDE',
    question: 'If a massive landslide rushes downhill toward you from an upper slope, which escape trajectory is the safest?',
    options: [
      'Running straight downhill along the debris fall path',
      'Sprinting laterally (perpendicular) out of the landslide debris flow corridor',
      'Hiding under a wooden shack roof on the slope edge',
      'Remaining stationary while calling for help'
    ],
    correctIndex: 1,
    explanation: 'Running perpendicular (sideways) removes you from the high-velocity debris avalanche corridor, which travels faster than human sprint speeds.',
    difficulty: 'Mudah'
  },

  // Tornado
  {
    id: 'q_to_1',
    disasterId: 'TORNADO',
    question: 'Which massive, dark, towering convective storm cloud frequently spawns tornadic whirlwinds, severe lightning, and hailstorms?',
    options: [
      'Cirrus Cloud',
      'Cumulonimbus (CB) Cloud',
      'Stratus Cloud',
      'Altocumulus Cloud'
    ],
    correctIndex: 1,
    explanation: 'Cumulonimbus clouds are towering thunderstorm systems with violent vertical updrafts capable of triggering tornadoes and microbursts.',
    difficulty: 'Mudah'
  },
  {
    id: 'q_to_2',
    disasterId: 'TORNADO',
    question: 'Where is the safest interior shelter location within a building during a severe whirlwind / tornado touchdown?',
    options: [
      'On an upper-floor balcony near large glass windows',
      'An interior ground-floor room without windows (bathroom, interior hallway, or under stairs)',
      'In an open car garage with outer doors unlocked',
      'Directly under the roof ceiling rafters'
    ],
    correctIndex: 1,
    explanation: 'An interior ground-floor room is buffered by surrounding structural walls, shielding occupants from high-speed wind pressure and flying debris.',
    difficulty: 'Sedang'
  }
];

export const getQuizQuestions = (lang: Language = 'id'): QuizQuestion[] => {
  return lang === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_ID;
};

export const QUIZ_QUESTIONS = QUIZ_QUESTIONS_ID;
