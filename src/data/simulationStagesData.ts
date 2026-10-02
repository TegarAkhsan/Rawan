import { LucideIcon, Wind, CloudLightning, AlertTriangle, Zap, AlertOctagon, ShieldCheck, Mountain, Waves, Activity, Flame, Radio } from 'lucide-react';
import { DisasterId } from '../types/disaster';
import { Language } from '../types/language';

export interface ProcessStage {
  id: string;
  title: string;
  subtitle: string;
  pvmbgLevel: string;
  pvmbgColor: string;
  icon: LucideIcon;
  description: string;
  visualHint: string;
}

// ── TORNADO STAGES ─────────────────────────────────────────────
const TORNADO_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Kondisi Cuaca Cerah',
    subtitle: 'Atmosfer Stabil & Angin Normal',
    pvmbgLevel: 'Normal (Skala EF-0)',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Kondisi atmosfer pemukiman dalam keadaan tenang dan stabil. Kecepatan angin rendah (< 15 km/jam), langit cerah berawan, dan warga beraktivitas seperti biasa.',
    visualHint: 'Perhatikan lingkungan pemukiman yang asri, pepohonan berdiri tegak, dan cuaca cerah.'
  },
  {
    id: 'SUPERCELL_INFLOW',
    title: 'Awan Supercell & Inflow Panas',
    subtitle: 'Konvergensi Udara Panas-Dingin',
    pvmbgLevel: 'Waspada Cuaca Ekstrem',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Udara hangat lembap naik drastis (updraft) bertemu massa udara dingin. Terbentuk awan badai Cumulonimbus supercell gelap kehijauan disertai kilatan petir dan hujan deras berangin.',
    visualHint: 'Langit menggelap mendung badai, kilatan petir menyala di langit, dan hujan deras mulai mengguyur.'
  },
  {
    id: 'MESOCYCLONE_ROTATION',
    title: 'Rotasi Mesosiklon (Wall Cloud)',
    subtitle: 'Pusaran Udara Vertikal Berputar',
    pvmbgLevel: 'Siaga Puting Beliung',
    pvmbgColor: '#f97316',
    icon: AlertTriangle,
    description: 'Terbentuk pusaran udara berputar vertikal (mesosiklon) di dalam awan badai. Dinding awan berputar (rotating wall cloud) mulai turun mendekati atap pemukiman. Pohon-pohon mulai membungkuk tertiup angin kencang.',
    visualHint: 'Perhatikan cakram dinding awan gelap (wall cloud) berputar turun dari kanopi awan badai!'
  },
  {
    id: 'CONDENSATION_FUNNEL',
    title: 'Turunnya Corong Pusaran (Funnel)',
    subtitle: 'Condensation Funnel Descending',
    pvmbgLevel: 'Peringatan Dini Tornado (EF-2)',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'Tekanan udara di pusat pusaran anjlok drastis menyebabkan uap air mengembun menjadi corong pusaran (funnel cloud) yang memanjang turun dari awan ke arah pemukiman. Segera cari perlindungan!',
    visualHint: 'Corong pusaran memanjang turun dari awan menuju jalanan pemukiman, pohon miring tajam!'
  },
  {
    id: 'TOUCHDOWN_VIOLENT',
    title: 'Hantaman Puting Beliung (Touchdown)',
    subtitle: 'Touchdown & Debris Vortex EF-3',
    pvmbgLevel: 'BAHAYA KRITIS / TORNADO TOUCHDOWN',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'TORNADO MENYENTUH TANAH! Pusaran berkecepatan > 150 km/jam menerjang pemukiman. Puing seng, dahan pohon, dan debu berputar hebat dalam spiral heliks. Kabel listrik putus mengeluarkan percikan!',
    visualHint: 'Hantaman dahsyat! Corong menyentuh tanah, atap seng beterbangan, percikan listrik di tiang PLN!'
  },
  {
    id: 'SAFE_ROOM_MITIGATION',
    title: 'Mitigasi Ruang Aman Tengah / Bunker',
    subtitle: 'Lindungi Kepala di Ruang Tanpa Jendela',
    pvmbgLevel: 'Tindakan Penyelamatan Diri',
    pvmbgColor: '#38bdf8',
    icon: ShieldCheck,
    description: 'JANGAN BERADA DI DEKAT JENDELA! Masuklah ke ruangan paling tengah rumah di lantai dasar tanpa jendela (kamar mandi/lorong dalam) atau bunker bawah tanah. Lindungi kepala di bawah meja kokoh dengan kasur/helm.',
    visualHint: 'Lihat potongan rumah: warga berlindung aman di dalam ruang tengah terlindung dari serpihan kaca!'
  },
  {
    id: 'AFTERMATH_RECOVERY',
    title: 'Pasca Badai & Tanggap Darurat',
    subtitle: 'Evakuasi Tim SAR & Amankan Jalur Listrik',
    pvmbgLevel: 'Pemulihan Pasca Bencana',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Pusaran angin puting beliung telah terangkat dan menghilang. Waspadai bahaya sekunder seperti kabel listrik terbuka dan serpihan kaca tajam. Tim BPBD dan relawan medis membantu pemulihan.',
    visualHint: 'Cuaca kembali cerah, tim penanggulangan bencana mendata kerusakan dan mengamankan lokasi.'
  }
];

const TORNADO_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Clear Weather Conditions',
    subtitle: 'Stable Atmosphere & Normal Breeze',
    pvmbgLevel: 'Normal (EF-0 Scale)',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Atmospheric conditions across the settlement are calm and stable. Wind speed is gentle (< 15 km/h), skies are partly cloudy, and residents carry out daily activities normally.',
    visualHint: 'Observe the calm neighborhood environment, upright trees, and clear peaceful weather.'
  },
  {
    id: 'SUPERCELL_INFLOW',
    title: 'Supercell Cloud & Warm Inflow',
    subtitle: 'Warm-Cold Air Mass Convergence',
    pvmbgLevel: 'Severe Weather Watch',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Warm humid air surges upward (updraft) meeting dense cold downdrafts. A towering dark-greenish Cumulonimbus supercell forms accompanied by frequent lightning and driving rain.',
    visualHint: 'The sky turns dark and ominous, lightning flashes illuminate the horizon, and gusty downpours begin.'
  },
  {
    id: 'MESOCYCLONE_ROTATION',
    title: 'Mesocyclone Rotation (Wall Cloud)',
    subtitle: 'Vertical Rotating Vortex Core',
    pvmbgLevel: 'Tornado Warning Alert',
    pvmbgColor: '#f97316',
    icon: AlertTriangle,
    description: 'A vertically rotating column of air (mesocyclone) develops inside the storm cloud. A rotating wall cloud lowers toward rooftops. Trees bend heavily under increasing wind shear.',
    visualHint: 'Watch the ominous rotating wall cloud disc descending rapidly from the supercell cloud base!'
  },
  {
    id: 'CONDENSATION_FUNNEL',
    title: 'Condensation Funnel Descending',
    subtitle: 'Rapid Atmospheric Pressure Drop',
    pvmbgLevel: 'Tornado Warning (EF-2)',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'Central atmospheric pressure plummets, causing water vapor to condense into a visible funnel cloud stretching down from cloud base toward the ground. Take shelter immediately!',
    visualHint: 'A violent funnel stretches downward toward the neighborhood streets; trees tilt severely!'
  },
  {
    id: 'TOUCHDOWN_VIOLENT',
    title: 'Tornado Touchdown & Debris Vortex',
    subtitle: 'Violent Vortex Impact EF-3',
    pvmbgLevel: 'CRITICAL HAZARD / TOUCHDOWN',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'TORNADO TOUCHDOWN! The vortex exceeds 150 km/h, tearing across the settlement. Metal roofing, tree limbs, and structural debris spiral in a violent helical vortex. Severed power lines spark violently!',
    visualHint: 'Violent impact! The funnel connects with ground, roofs tear away, and electrical transformers spark!'
  },
  {
    id: 'SAFE_ROOM_MITIGATION',
    title: 'Interior Safe Room / Bunker Mitigation',
    subtitle: 'Protect Head in Windowless Core',
    pvmbgLevel: 'Life-Saving Emergency Action',
    pvmbgColor: '#38bdf8',
    icon: ShieldCheck,
    description: 'STAY CLEAR OF WINDOWS! Move immediately to the innermost ground-floor room without exterior windows (interior bathroom/hallway) or an underground storm shelter. Cover head under a sturdy table.',
    visualHint: 'View building interior: residents safely sheltered in the windowless inner core protected from flying glass!'
  },
  {
    id: 'AFTERMATH_RECOVERY',
    title: 'Post-Storm Response & Recovery',
    subtitle: 'SAR Operations & Utility Hazard Mitigation',
    pvmbgLevel: 'Post-Disaster Recovery',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'The tornado vortex has lifted and dissipated. Watch for secondary hazards such as live downed power lines and scattered glass shards. Emergency teams and medical volunteers assist with recovery.',
    visualHint: 'Weather clears up; disaster mitigation teams survey structural damage and secure the area.'
  }
];

// ── LANDSLIDE STAGES ─────────────────────────────────────────────
const LANDSLIDE_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Kondisi Lereng Stabil',
    subtitle: 'Keseimbangan Alami Lereng Pegunungan',
    pvmbgLevel: 'Zona Stabil / Aman',
    pvmbgColor: '#22c55e',
    icon: Mountain,
    description: 'Lereng pegunungan dalam kondisi stabil dengan tegangan geser seimbang. Pepohonan lebat mengikat tanah permukaan, aliran air tanah normal, dan jalan raya lembah beroperasi aman.',
    visualHint: 'Perhatikan lereng hijau yang subur, lapisan tanah kokoh di atas batuan dasar, serta vegetasi yang lebat.'
  },
  {
    id: 'HEAVY_RAIN',
    title: 'Hujan Badai Ekstrem',
    subtitle: 'Curah Hujan Tinggi Terus-Menerus',
    pvmbgLevel: 'Peringatan Dini Cuaca Ekstrem',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Hujan lebat berdurasi panjang mengguyur kawasan perbukitan. Air hujan mulai meresap ke dalam pori-pori tanah (infiltrasi), menambah beban massa tanah di bagian atas lereng.',
    visualHint: 'Hujan deras mengguyur lereng, langit menggelap mendung, air mulai meresap membasahi tanah.'
  },
  {
    id: 'SOIL_SATURATION',
    title: 'Saturasi Air & Tekanan Pori',
    subtitle: 'Pore Water Pressure & Akuifer Jenuh',
    pvmbgLevel: 'Waspada Longsor (Level 2)',
    pvmbgColor: '#38bdf8',
    icon: Zap,
    description: 'Lapisan tanah mencapai titik jenuh air (saturated). Tekanan air pori (pore water pressure) meningkat drastis, mengurangi daya ikat partikel tanah dan menurunkan kuat geser batuan.',
    visualHint: 'Lihat potongan geologi: lapisan akuifer jenuh air memancarkan tekanan air pori (panah biru) ke atas!'
  },
  {
    id: 'TENSION_CRACKING',
    title: 'Retakan Mahkota Lereng',
    subtitle: 'Crown Tension Cracks & Pohon Miring',
    pvmbgLevel: 'Siaga Bencana (Level 3)',
    pvmbgColor: '#f97316',
    icon: AlertTriangle,
    description: 'Tanda awal longsor! Terbentuk retakan tapal kuda (tension cracks) di puncak lereng (crown). Batang pohon dan tiang listrik mulai miring kehilangan pijakan. Suara gemuruh rekahan tanah terdengar!',
    visualHint: 'Perhatikan retakan mahkota merekah di puncak bukit dan pohon-pohon mulai miring condong ke depan!'
  },
  {
    id: 'SLOPE_FAILURE',
    title: 'Guguran Massa & Longsoran Debris',
    subtitle: 'Slope Failure, Mudflow & Debris Avalanche',
    pvmbgLevel: 'Awas Longsor / Bahaya Kritis',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'LONGSOR TERJADI! Bidang gelincir (slip surface) runtuh seketika. Ratusan ton massa tanah, batuan besar, dan lumpur meluncur deras menuruni lereng dengan kecepatan tinggi menyapu jalan dan pepohonan!',
    visualHint: 'Longsoran masif! Lumpur, bebatuan, dan pohon tumbang meluncur deras menuruni bidang gelincir lereng!'
  },
  {
    id: 'VALLEY_IMPACT_MITIGATION',
    title: 'Mitigasi & Evakuasi Lateral',
    subtitle: 'Lari Tegak Lurus Menjauhi Jalur Longsor',
    pvmbgLevel: 'Tanggap Darurat Evakuasi',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'JANGAN BERLARI KE ARAH BAWAH LEMBAH! Lakukan EVAKUASI LATERAL: lari menyamping tegak lurus dari arah luncuran longsor menuju dataran tinggi dan Titik Kumpul (Assembly Point) di area aman!',
    visualHint: 'Warga bergerak cepat ke kanan (Titik Kumpul Lembah Aman) menjauhi alur luncuran debris longsor!'
  },
  {
    id: 'AFTERMATH',
    title: 'Pasca Bencana & Stabilisasi Lereng',
    subtitle: 'SAR, Bronjong Kawat & Revegetasi Akar Kuat',
    pvmbgLevel: 'Pemulihan & Stabilisasi Lereng',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Alur longsor terhenti di dinding penahan (retaining wall/bronjong). Tim SAR BNPB dan relawan medis mengevakuasi korban di posko darurat. Upaya mitigasi struktural dan penanaman rumput vetiver dimulai.',
    visualHint: 'Posko BPBD dan ambulans aktif di titik kumpul, dinding penahan menahan endapan tanah longsor.'
  }
];

const LANDSLIDE_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Stable Hillside Slope',
    subtitle: 'Natural Mountain Slope Equilibrium',
    pvmbgLevel: 'Stable Zone / Safe',
    pvmbgColor: '#22c55e',
    icon: Mountain,
    description: 'Mountain slope in stable equilibrium with balanced shear stresses. Dense tree root systems anchor the topsoil, groundwater drainage flows normally, and valley roads operate safely.',
    visualHint: 'Observe the lush green hillside, cohesive soil profile over bedrock, and dense vegetation.'
  },
  {
    id: 'HEAVY_RAIN',
    title: 'Prolonged Torrential Rainfall',
    subtitle: 'Continuous Extreme Precipitation',
    pvmbgLevel: 'Severe Weather Warning',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Continuous torrential downpours saturate the mountain ridge. Rainwater infiltrates deeply into porous topsoil, significantly increasing the overburden mass on upper slope angles.',
    visualHint: 'Heavy rain pours over the slope, dark storm clouds gather, and water infiltrates the soil strata.'
  },
  {
    id: 'SOIL_SATURATION',
    title: 'Water Saturation & Pore Pressure',
    subtitle: 'Pore Water Pressure & Aquifer Saturation',
    pvmbgLevel: 'Landslide Watch (Level 2)',
    pvmbgColor: '#38bdf8',
    icon: Zap,
    description: 'Soil strata reaches 100% saturation. Rising pore water pressure drastically reduces inter-particle friction and degrades rock shear strength along potential slip planes.',
    visualHint: 'Look at the subterranean cutaway: saturated aquifer layers exert upward hydrostatic pore pressure (blue arrows)!'
  },
  {
    id: 'TENSION_CRACKING',
    title: 'Crown Tension Cracking',
    subtitle: 'Crescent Tension Cracks & Tilting Trees',
    pvmbgLevel: 'Landslide Alert (Level 3)',
    pvmbgColor: '#f97316',
    icon: AlertTriangle,
    description: 'Early warning signs! Crescent tension cracks open along the hill crest (crown). Trees and utility poles tilt outward losing foundation support. Subterranean rumbling echoes!',
    visualHint: 'Notice prominent crown fissures opening on the summit and trees leaning precariously forward!'
  },
  {
    id: 'SLOPE_FAILURE',
    title: 'Mass Slope Failure & Debris Avalanche',
    subtitle: 'Slip Surface Rupture & High-Speed Mudflow',
    pvmbgLevel: 'CRITICAL HAZARD / SLOPE FAILURE',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'SLOPE FAILURE OCCURS! The basal slip plane shears completely. Hundreds of tons of saturated soil, rock boulders, and mud surge down the hillside at devastating speeds, sweeping away roads and forests!',
    visualHint: 'Massive avalanche! Mud, boulders, and uprooted trees slide violently down the shear failure plane!'
  },
  {
    id: 'VALLEY_IMPACT_MITIGATION',
    title: 'Lateral Evacuation Mitigation',
    subtitle: 'Sprint Perpendicular to Slide Path',
    pvmbgLevel: 'Emergency Evacuation Action',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'DO NOT RUN DOWNHILL ALONG THE PATH! Perform LATERAL EVACUATION: sprint sideways perpendicular to the debris slide trajectory toward elevated ground and the designated Safe Assembly Point!',
    visualHint: 'Residents rapidly move sideways to the right (Safe Valley Assembly Point) away from the debris flow chute!'
  },
  {
    id: 'AFTERMATH',
    title: 'Post-Disaster Slope Stabilization',
    subtitle: 'SAR Relief, Gabion Walls & Vetiver Planting',
    pvmbgLevel: 'Recovery & Bio-Engineering',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'The debris flow arrests against retaining gabion walls. Emergency SAR and medical teams triage casualties at the field clinic. Structural bio-engineering and deep-rooted vetiver planting commence.',
    visualHint: 'Emergency field post and ambulance active at assembly point, retaining walls holding back settled mud deposits.'
  }
];

// ── EARTHQUAKE STAGES ─────────────────────────────────────────────
const EARTHQUAKE_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Kondisi Normal & Stabil',
    subtitle: 'Keseimbangan Lempeng Tektonik',
    pvmbgLevel: 'Skala I MMI (Normal)',
    pvmbgColor: '#22c55e',
    icon: Activity,
    description: 'Lempeng tektonik bumi dalam keadaan stabil dan seimbang. Aktivitas seismik sangat rendah. Bangunan gedung, sekolah, jalan raya, dan warga kota beraktivitas aman tanpa getaran.',
    visualHint: 'Perhatikan kota yang tenang dan potongan lapisan kerak bumi bawah tanah yang kokoh.'
  },
  {
    id: 'STRESS_ACCUMULATION',
    title: 'Akumulasi Tekanan Tektonik',
    subtitle: 'Tectonic Stress & Locked Fault',
    pvmbgLevel: 'Skala II MMI (Waspada)',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Pergerakan lempeng tektonik saling bertumbukan dan terkunci akibat gesekan batuan. Energi elastis mulai terakumulasi secara masif di sepanjang bidang sesar (fault plane) di kedalaman bumi.',
    visualHint: 'Perhatikan zona patahan sesar bawah tanah mulai menyala kuning karena akumulasi tekanan tinggi.'
  },
  {
    id: 'FAULT_RUPTURE',
    title: 'Pelepasan Energi Hiposentrum',
    subtitle: 'Fault Rupture & Hypocenter Focus',
    pvmbgLevel: 'Skala III-IV MMI (Siaga)',
    pvmbgColor: '#f97316',
    icon: Zap,
    description: 'BATUAN PATAH MENDADAK! Gesekan batuan tidak lagi mampu menahan tegangan lempeng. Terjadi rekahan sesar (fault rupture) di titik Hiposentrum yang melepaskan energi seismik raksasa seketika.',
    visualHint: 'Lihat kilatan energi menyala terang di titik fokus hiposentrum bawah tanah saat sesar patah!'
  },
  {
    id: 'P_WAVE',
    title: 'Gelombang Primer (P-Wave)',
    subtitle: 'Compressional Wave Arrival (V ≈ 6-8 km/s)',
    pvmbgLevel: 'Peringatan Dini Gempa (EEW)',
    pvmbgColor: '#38bdf8',
    icon: Radio,
    description: 'Gelombang seismik longitudinal tercepat (Gelombang P) merambat naik dari hiposentrum ke permukaan (Episentrum). Menghasilkan getaran vertikal awal dan suara gemuruh bumi. Sistem Peringatan Dini BMKG berbunyi!',
    visualHint: 'Lihat cincin gelombang P biru melesat cepat ke permukaan dan getaran awal terasa di permukaan.'
  },
  {
    id: 'S_WAVE_SURFACE',
    title: 'Guncangan Dahsyat Gelombang S',
    subtitle: 'Shear & Surface Waves Destructive Phase',
    pvmbgLevel: 'Skala VI-VIII MMI (Awas Bahaya)',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'GELOMBANG S & GELOMBANG PERMUKAAN MENGHANTAM! Gelombang transversal lambat namun bertenaga destruktif mengguncang tanah ke segala arah. Gedung bergoyang hebat, retakan tanah terbuka, dan trafo tiang listrik memercikkan api!',
    visualHint: 'Guncangan dahsyat! Gedung-gedung bergoyang kencang, retakan tanah terbuka di sepanjang sesar!'
  },
  {
    id: 'STRUCTURAL_DAMAGE_MITIGATION',
    title: 'Tindakan Mitigasi Darurat',
    subtitle: 'Drop, Cover, Hold On & Evakuasi Lapangan',
    pvmbgLevel: 'Tanggap Darurat Evakuasi',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'DI DALAM RUANGAN: Lakukan DROP (berlutut), COVER (lindungi kepala di bawah meja kokoh), HOLD ON (pegang kaki meja). DI LUAR RUANGAN: Segera evakuasi ke Titik Kumpul (Assembly Point) di lapangan terbuka!',
    visualHint: 'Lihat potongan gedung: warga berlindung di bawah meja dan berkumpul aman di Titik Kumpul lapangan!'
  },
  {
    id: 'AFTERMATH',
    title: 'Pasca Gempa & Gempa Susulan',
    subtitle: 'Aftershocks, SAR & Damage Assessment',
    pvmbgLevel: 'Pemulihan & Waspada Susulan',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Guncangan utama mereda namun waspadai gempa susulan (aftershocks). Jangan masuk gedung yang retak miring. Tim SAR BNPB dan relawan medis tiba di Titik Kumpul untuk evakuasi dan pertolongan pertama.',
    visualHint: 'Posko darurat dan ambulans SAR aktif dengan lampu sirine di titik kumpul, jalur evakuasi aman.'
  }
];

const EARTHQUAKE_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Normal & Stable Conditions',
    subtitle: 'Tectonic Plate Equilibrium',
    pvmbgLevel: 'MMI Scale I (Normal)',
    pvmbgColor: '#22c55e',
    icon: Activity,
    description: 'Tectonic plates are in stable mechanical equilibrium with baseline micro-seismic activity. Buildings, schools, roads, and citizens conduct daily routines in complete safety.',
    visualHint: 'Observe the calm cityscape and solid subterranean geological bedrock strata below.'
  },
  {
    id: 'STRESS_ACCUMULATION',
    title: 'Tectonic Stress Accumulation',
    subtitle: 'Locked Fault Plane & Elastic Strain',
    pvmbgLevel: 'MMI Scale II (Watch)',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Converging tectonic plates lock together due to frictional resistance. Gigantic amounts of elastic strain energy build up progressively along the subterranean fault zone.',
    visualHint: 'Observe the subterranean locked fault plane glowing amber as tectonic stress accumulates.'
  },
  {
    id: 'FAULT_RUPTURE',
    title: 'Hypocenter Energy Release',
    subtitle: 'Fault Rupture & Hypocenter Focus',
    pvmbgLevel: 'MMI Scale III-IV (Alert)',
    pvmbgColor: '#f97316',
    icon: Zap,
    description: 'SUDDEN ROCK FRACTURE! Tectonic stress overcomes frictional resistance. The fault ruptures violently at the Hypocenter focus point, instantly releasing massive seismic shockwaves.',
    visualHint: 'Watch the brilliant energy burst radiating from the subterranean hypocenter focus upon fault rupture!'
  },
  {
    id: 'P_WAVE',
    title: 'Primary Compressional Wave (P-Wave)',
    subtitle: 'Compressional Wave Arrival (V ≈ 6-8 km/s)',
    pvmbgLevel: 'Earthquake Early Warning (EEW)',
    pvmbgColor: '#38bdf8',
    icon: Radio,
    description: 'The fastest longitudinal seismic waves (P-waves) propagate vertically to the surface epicenter, causing initial upward ground jolt and deep acoustic rumbling. Early warning sirens sound!',
    visualHint: 'See high-speed blue compressional P-wave rings radiating upward, causing initial ground vibration.'
  },
  {
    id: 'S_WAVE_SURFACE',
    title: 'Violent Shear & Surface Waves',
    subtitle: 'Destructive Rayleigh & Love Wave Phase',
    pvmbgLevel: 'MMI Scale VI-VIII (Critical)',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'SHEAR S-WAVES & SURFACE WAVES STRIKE! Slower yet immensely destructive transverse ground motions rock buildings multi-directionally. Surface fissures open and utility poles spark violently!',
    visualHint: 'Violent shaking! Buildings sway intensely, ground fissures rupture along fault lines!'
  },
  {
    id: 'STRUCTURAL_DAMAGE_MITIGATION',
    title: 'Emergency Life-Saving Mitigation',
    subtitle: 'Drop, Cover, Hold On & Open-Air Evacuation',
    pvmbgLevel: 'Emergency Response Action',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'INDOORS: Execute DROP (to hands & knees), COVER (under sturdy desk protecting head/neck), HOLD ON (to table legs). OUTDOORS: Move immediately to an open-field designated Assembly Point!',
    visualHint: 'Building cutaway: occupants taking cover beneath sturdy tables and assembling safely on the sports field!'
  },
  {
    id: 'AFTERMATH',
    title: 'Post-Quake SAR & Aftershocks',
    subtitle: 'Aftershocks, Rescue & Triage Assessment',
    pvmbgLevel: 'Recovery & Aftershock Alert',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Primary tremors subside, but strong aftershocks remain hazardous. Do not enter damaged or tilted structures. Emergency SAR and medical teams mobilize at the Assembly Point.',
    visualHint: 'Emergency triage clinic and rescue ambulances active with flashing beacons at the assembly zone.'
  }
];

// ── VOLCANO STAGES ─────────────────────────────────────────────
const ERUPTION_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Gunung Normal',
    subtitle: 'Fase Dormant',
    pvmbgLevel: 'Level I — Normal',
    pvmbgColor: '#22c55e',
    icon: Mountain,
    description: 'Gunung api dalam keadaan tenang. Aktivitas vulkanik sangat rendah. Danau kawah stabil dan tidak ada emisi gas berbahaya yang signifikan. Masyarakat dapat beraktivitas normal di sekitar gunung.',
    visualHint: 'Perhatikan gunung yang tenang — tidak ada asap, lava redup, suasana damai.'
  },
  {
    id: 'UNREST',
    title: 'Keresahan Vulkanik',
    subtitle: 'Volcanic Unrest',
    pvmbgLevel: 'Level II — Waspada',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Magma mulai bergerak naik dari dapur magma. Terjadi gempa-gempa vulkanik dangkal (tremor). Suhu danau kawah meningkat dan muncul asap solfatara tipis. PVMBG menaikkan status ke Level II Waspada.',
    visualHint: 'Lihat getaran halus pada gunung dan asap tipis mulai keluar dari kawah.'
  },
  {
    id: 'PHREATIC',
    title: 'Erupsi Freatik',
    subtitle: 'Phreatic Eruption',
    pvmbgLevel: 'Level II — Waspada',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Air tanah bertemu magma panas dan berubah menjadi uap bertekanan tinggi. Ledakan uap menyemburkan material dari kawah tanpa magma baru mencapai permukaan. Kolom abu tipis mulai terlihat.',
    visualHint: 'Perhatikan semburan abu dari kawah dan zona KRB mulai terlihat.'
  },
  {
    id: 'MAGMATIC_RISE',
    title: 'Kubah Lava Tumbuh',
    subtitle: 'Lava Dome Growth',
    pvmbgLevel: 'Level III — Siaga',
    pvmbgColor: '#f97316',
    icon: Flame,
    description: 'Magma kental (andesit-dasit) mencapai permukaan dan membentuk kubah lava di kawah. Kubah ini sangat tidak stabil — bisa runtuh kapan saja menghasilkan awan panas guguran. Status dinaikkan ke Level III Siaga.',
    visualHint: 'Kubah lava merah menyala terbentuk di kawah. Asap semakin pekat. Zona KRB aktif!'
  },
  {
    id: 'ERUPTION',
    title: 'Erupsi Eksplosif',
    subtitle: 'Klimaks — Plinian Eruption',
    pvmbgLevel: 'Level IV — Awas',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'LETUSAN BESAR! Kolom erupsi menjulang ke troposfer, awan jamur terbentuk, bom vulkanik terlontar, awan panas (wedhus gembel) menerjang lereng, petir vulkanik menyambar di dalam awan abu. EVAKUASI TOTAL!',
    visualHint: 'Semua elemen erupsi aktif — kolom abu, awan panas, lava, petir vulkanik di awan abu!'
  },
  {
    id: 'LAVA_FLOW',
    title: 'Aliran Lava ke Dataran Rendah',
    subtitle: 'Lava Flow & Lahar',
    pvmbgLevel: 'Level IV — Awas',
    pvmbgColor: '#ef4444',
    icon: Flame,
    description: 'Lava cair mengalir deras menuruni lereng gunung, membentuk aliran lava (lava flow) yang membakar dan menghancurkan segalanya. Lava mencapai dataran rendah, membakar hutan dan pemukiman. Lahar panas juga mengalir di sepanjang sungai. EVAKUASI TOTAL masih berlaku!',
    visualHint: 'Lihat sisi kanan gunung — aliran lava merah menyala mengalir jauh ke dataran, membentuk kolam lava di lembah.'
  },
  {
    id: 'POST_ERUPTION',
    title: 'Pasca Erupsi',
    subtitle: 'Post-Eruption Phase',
    pvmbgLevel: 'Level III — Siaga',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Aktivitas vulkanik mulai mereda namun ancaman belum berakhir. Hujan abu tebal menutupi wilayah sekitar, lahar dingin mengancam saat hujan turun. Tim SAR dan BPBD melaksanakan operasi penyelamatan korban. Korban perlu waspada ancaman gas beracun (SO2, H2S).',
    visualHint: 'Abu jatuh dari langit, asap mereda, pohon-pohon menghitam tertutup abu. Posko evakuasi aktif penuh.'
  }
];

const ERUPTION_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Normal Volcano Conditions',
    subtitle: 'Dormant Phase',
    pvmbgLevel: 'Level I — Normal',
    pvmbgColor: '#22c55e',
    icon: Mountain,
    description: 'The volcano is in a calm, dormant state. Volcanic seismicity is at baseline. Crater lake temperatures are stable with negligible gas emissions. Residents carry out normal life around the slopes.',
    visualHint: 'Observe the peaceful volcano cone — no eruptive plumes, dormant lava vents, calm environment.'
  },
  {
    id: 'UNREST',
    title: 'Volcanic Unrest',
    subtitle: 'Magmatic Inflation & Micro-Tremors',
    pvmbgLevel: 'Level II — Advisory / Waspada',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Magma rises from the deep chamber. Shallow volcanic tremors accelerate. Crater lake temperatures rise and white solfatara fumarole plumes emerge. PVMBG raises alert status to Level II.',
    visualHint: 'Notice subtle ground tremors on slopes and white steam plumes venting from crater vents.'
  },
  {
    id: 'PHREATIC',
    title: 'Phreatic Steam Eruption',
    subtitle: 'Hydrothermal Steam Explosion',
    pvmbgLevel: 'Level II — Advisory / Waspada',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Groundwater contacts superheated magmatic conduits, flashing into high-pressure steam. Steam explosions eject pulverized rock from the crater vent. Gray ash plumes become visible.',
    visualHint: 'Watch ash ejection clouds from the summit crater as Disaster Hazard Zones (KRB) activate.'
  },
  {
    id: 'MAGMATIC_RISE',
    title: 'Viscous Lava Dome Growth',
    subtitle: 'Extrusive Andesitic Dome Swell',
    pvmbgLevel: 'Level III — Watch / Siaga',
    pvmbgColor: '#f97316',
    icon: Flame,
    description: 'Viscous andesitic-dacitic magma reaches summit vents, forming a glowing lava dome. The dome is gravitationally unstable and liable to collapse into devastating pyroclastic flows. Alert Level III.',
    visualHint: 'Incandescent red lava dome glowing atop crater rim. Dense sulfur plumes billow upward.'
  },
  {
    id: 'ERUPTION',
    title: 'Violent Explosive Plinian Eruption',
    subtitle: 'Climax — Plinian Eruption Column',
    pvmbgLevel: 'Level IV — Warning / Awas',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'MAJOR EXPLOSIVE ERUPTION! Towering umbrella ash column reaches the stratosphere, pyroclastic surges (wedhus gembel) cascade down ravines at 300 km/h, volcanic lightning discharges violently. TOTAL EVACUATION!',
    visualHint: 'All eruptive phenomena active — stratospheric ash column, pyroclastic flows, volcanic lightning!'
  },
  {
    id: 'LAVA_FLOW',
    title: 'Basaltic Lava Inundation',
    subtitle: 'Lava Chute & Valley Lahars',
    pvmbgLevel: 'Level IV — Warning / Awas',
    pvmbgColor: '#ef4444',
    icon: Flame,
    description: 'Fluid incandescent lava streams down slope channels, incinerating structural obstacles in its path. Hot lahars channel through riverbanks. Full exclusion zone strictly enforced!',
    visualHint: 'Look at the right volcanic flank — glowing incandescent lava channels pooling in the valley floor.'
  },
  {
    id: 'POST_ERUPTION',
    title: 'Post-Eruption Secondary Hazards',
    subtitle: 'Cold Lahars & Toxic Gas Protocols',
    pvmbgLevel: 'Level III — Watch / Siaga',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Explosive activity subsides, but heavy ash fallout covers roofs and cold lahars threaten downstream river valleys during monsoons. Emergency teams triage evacuees and monitor toxic gas levels (SO2/H2S).',
    visualHint: 'Heavy tephra ash blanket over terrain, evacuation field base operating at full capacity.'
  }
];

// ── TSUNAMI STAGES ─────────────────────────────────────────────
const TSUNAMI_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Kondisi Normal',
    subtitle: 'Laut Tenang & Pesisir Pantai',
    pvmbgLevel: 'Status Normal',
    pvmbgColor: '#22c55e',
    icon: Waves,
    description: 'Lautan dalam keadaan tenang, gelombang laut normal, kapal nelayan jukung berlayar damai, rumah panggung pesisir aman.',
    visualHint: 'Permukaan laut tenang, air tidak surut, ombak pantai kecil normal.'
  },
  {
    id: 'UNDERSEA_QUAKE',
    title: 'Gempa Bumi Bawah Laut',
    subtitle: 'Dislokasi Lempeng Tektonik (M > 7.0)',
    pvmbgLevel: 'Peringatan Gempa Laut',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Pergeseran lempeng tektonik bawah laut secara vertikal menimbulkan gempa bumi megathrust ber-magnitudo besar di kedalaman laut. Kamera guncang, kerak dasar laut patah dan mendorong kolom air laut secara masif ke atas.',
    visualHint: 'Lihat getaran gempa, retakan patahan di dasar laut, dan air laut mulai terganggu.'
  },
  {
    id: 'SEA_DRAWBACK',
    title: 'Air Laut Surut Tiba-tiba',
    subtitle: 'Peringatan Dini Tsunami (TEWS)',
    pvmbgLevel: 'Waspada / Siaga Tsunami',
    pvmbgColor: '#f97316',
    icon: Radio,
    description: 'Air laut di garis pantai mendadak surut ratusan meter secara drastis hingga dasar laut dan terumbu karang terlihat. Sirine BMKG TEWS berbunyi nyaring! SEGERA LARI KE BUKIT TINGGI!',
    visualHint: 'Air laut surut jauh ke tengah laut secara mendadak, sirine peringatan TEWS menyala!'
  },
  {
    id: 'WAVE_APPROACH',
    title: 'Gelombang Tsunami Mendekat',
    subtitle: 'Towering Wave Approach',
    pvmbgLevel: 'Awas Tsunami Datang',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'Gelombang tsunami raksasa terbentuk dari tengah laut dan bergerak cepat mendekati daratan. Saat memasuki perairan dangkal, tingginya menjulang tinggi (efek shoaling).',
    visualHint: 'Ombak raksasa dengan puncak busa putih tinggi terbentuk menjulang mendekati pesisir pantai!'
  },
  {
    id: 'COASTAL_IMPACT',
    title: 'Terjangan Tsunami ke Pantai',
    subtitle: 'Coastal Inundation & Impact',
    pvmbgLevel: 'Awas Terjangan Gelombang',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'Gelombang tsunami menghantam pantai, melompati pemecah gelombang (tetrapod), dan menerjang pemukiman rumah panggung dengan kekuatan destruktif. Sabuk hijau bakau (mangrove) meredam sebagian energi gelombang.',
    visualHint: 'Gelombang meluap menerjang pemukiman pantai, perahu tersapu air!'
  },
  {
    id: 'EVACUATION',
    title: 'Evakuasi Darurat ke Bukit',
    subtitle: 'High Ground Evacuation (>20m)',
    pvmbgLevel: 'Proses Evakuasi',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'Warga pesisir melarikan diri mengikuti jalur evakuasi menuju Tempat Evakuasi Sementara (TES) di bukit tinggi dengan elevasi lebih dari 20 meter di atas permukaan laut. Hindari sungai dan muara!',
    visualHint: 'Posko evakuasi di atas bukit menyala terang, jalur evakuasi aman dari genangan!'
  },
  {
    id: 'POST_TSUNAMI',
    title: 'Pasca Tsunami',
    subtitle: 'Receding Water & Relief',
    pvmbgLevel: 'Tanggap Darurat',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Air tsunami mulai surut kembali ke laut membawa puing-puing. Waspadai gelombang susulan yang bisa terjadi hingga beberapa jam kemudian. Tetap di bukit sampai instruksi resmi BMKG/BPBD mencabut status peringatan.',
    visualHint: 'Air surut kembali, bendera Merah Putih di puncak bukit berkibar tegak, tim penanggulangan bencana aktif.'
  }
];

const TSUNAMI_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Calm Baseline Coastline',
    subtitle: 'Peaceful Waters & Coastal Settlement',
    pvmbgLevel: 'Normal Status',
    pvmbgColor: '#22c55e',
    icon: Waves,
    description: 'The ocean remains tranquil with gentle swell waves. Fishing outrigger boats sail peacefully and coastal stilt homes stand secure along the shoreline.',
    visualHint: 'Ocean surface is serene, water line is normal, shoreline waves are gentle.'
  },
  {
    id: 'UNDERSEA_QUAKE',
    title: 'Submarine Megathrust Rupture',
    subtitle: 'Vertical Tectonic Displacement (M > 7.0)',
    pvmbgLevel: 'Undersea Quake Warning',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Sudden vertical fault rupture on the subduction megathrust uplifts the overlying water column. Strong shaking rocks the seabed and generates high-velocity tsunami wave trains.',
    visualHint: 'Camera shakes, deep submarine trench ruptures, water column displaced violently upward.'
  },
  {
    id: 'SEA_DRAWBACK',
    title: 'Sudden Coastal Ocean Drawback',
    subtitle: 'Tsunami Early Warning Sirens (TEWS)',
    pvmbgLevel: 'Tsunami Advisory / Alert',
    pvmbgColor: '#f97316',
    icon: Radio,
    description: 'Shoreline water drastically recedes hundreds of meters within minutes, exposing reefs and seafloor. BMKG TEWS sirens blare loudly! RUN IMMEDIATELY TO HIGH GROUND!',
    visualHint: 'Ocean recedes dramatically outward exposing reefs; TEWS warning sirens flash urgently!'
  },
  {
    id: 'WAVE_APPROACH',
    title: 'Shoaling Wave Wall Approach',
    subtitle: 'Kinetic Shoaling in Shallow Waters',
    pvmbgLevel: 'Tsunami Inundation Warning',
    pvmbgColor: '#ef4444',
    icon: Zap,
    description: 'Tsunami wave trains slow down in shallow coastal bathymetry, compressing energy and amplifying into a towering vertical water wall (shoaling effect).',
    visualHint: 'Towering white-crested hydraulic bore forms rapidly approaching the coastline!'
  },
  {
    id: 'COASTAL_IMPACT',
    title: 'Violent Coastal Inundation',
    subtitle: 'Breaching Tetrapod Barriers & Stilt Homes',
    pvmbgLevel: 'CRITICAL INUNDATION IMPACT',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'The tsunami wave wall breaches tetrapod seawalls and inundates the coastal settlement with overwhelming kinetic momentum. Mangrove greenbelts dissipate a portion of surge energy.',
    visualHint: 'Surging wave crest crashes through shoreline houses, sweeping boats inland!'
  },
  {
    id: 'EVACUATION',
    title: 'High Ground Hill Evacuation',
    subtitle: 'Elevated Refuge Shelter (> 20m)',
    pvmbgLevel: 'Active Evacuation Phase',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'Coastal citizens follow designated evacuation routes to High-Ground Shelters at elevations greater than 20 meters above sea level. Stay clear of river estuaries!',
    visualHint: 'High-ground hill shelter illuminates brightly; evacuation pathways remain safe above floodlines.'
  },
  {
    id: 'POST_TSUNAMI',
    title: 'Backwash & Secondary Wave Vigilance',
    subtitle: 'Receding Debris Flow & SAR Triage',
    pvmbgLevel: 'Emergency Response & Relief',
    pvmbgColor: '#f97316',
    icon: Wind,
    description: 'Floodwaters recede as powerful backwash carries structural debris back out to sea. Remain vigilant against secondary wave trains for several hours until official all-clear advisories.',
    visualHint: 'Backwash recedes, hill summit flag stands tall, emergency rescue units conduct relief operations.'
  }
];

// ── FLOOD STAGES ─────────────────────────────────────────────
const FLOOD_STAGES_ID: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Kondisi Normal',
    subtitle: 'Aliran Sungai & Drainase Lancar',
    pvmbgLevel: 'Status Aman',
    pvmbgColor: '#22c55e',
    icon: Waves,
    description: 'Cuaca cerah, debit air sungai dalam batas normal, saluran drainase perkotaan bersih tanpa sumbatan sampah, pemukiman aman beraktivitas.',
    visualHint: 'Permukaan air sungai normal di dalam palung sungai, jalanan dan rumah kering bersih.'
  },
  {
    id: 'HEAVY_RAIN',
    title: 'Hujan Monsun Lebat',
    subtitle: 'Curah Hujan Ekstrem (>100 mm/hari)',
    pvmbgLevel: 'Peringatan Dini Cuaca',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Awan kumulonimbus tebal mengguyur hulu sungai dan kawasan pemukiman dengan curah hujan lebat berdurasi panjang. Laju infiltrasi tanah mulai mencapai batas jenuh.',
    visualHint: 'Hujan deras mengguyur pemukiman, langit meredup berawan, debit air sungai mulai naik.'
  },
  {
    id: 'DRAINAGE_CLOG',
    title: 'Penyumbatan Saluran Air',
    subtitle: 'Sedimentasi & Sampah Menumpuk',
    pvmbgLevel: 'Waspada Genangan Air',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Tumpukan sampah plastik dan endapan lumpur menyumbat gorong-gorong drainase kota. Air hujan tidak dapat mengalir dan mulai menggenangi jalanan setinggi mata kaki (10-30 cm).',
    visualHint: 'Genangan air mulai naik di jalan raya dan trotoar, tumpukan sampah terlihat di saluran air.'
  },
  {
    id: 'RIVER_OVERFLOW',
    title: 'Luapan Debit Sungai',
    subtitle: 'Banjir Kiriman dari Hulu',
    pvmbgLevel: 'Pintu Air Siaga 2',
    pvmbgColor: '#f97316',
    icon: Zap,
    description: 'Volume air kiriman dari hulu meluap melebihi kapasitas penampang sungai. Tanggul sungai mulai merembes dan air melimpas deras ke jalanan pemukiman warga.',
    visualHint: 'Sungai meluap melompati tanggul pembatas, arus air cokelat deras mulai menggenangi halaman rumah!'
  },
  {
    id: 'URBAN_INUNDATION',
    title: 'Banjir Merendam Pemukiman',
    subtitle: 'Ketinggian Air 1.0 - 1.8 Meter',
    pvmbgLevel: 'Awas Banjir / Siaga 1',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'Air banjir keruh merendam seluruh lantai 1 pemukiman dan jalanan. Kendaraan mogok dan terseret arus. Bahaya sengatan listrik dari tiang PLN! Segera matikan sekering MCB!',
    visualHint: 'Air banjir tinggi merendam lantai 1 rumah, mobil terapung hanyut, percikan korsleting listrik di tiang PLN!'
  },
  {
    id: 'EMERGENCY_EVACUATION',
    title: 'Evakuasi Vertikal & SAR',
    subtitle: 'Penyelamatan Perahu Karet SAR',
    pvmbgLevel: 'Tanggap Darurat Evakuasi',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'Warga melakukan evakuasi vertikal ke Lantai 2 rumah yang aman. Tim SAR BNPB dan relawan mengerahkan perahu karet untuk mengevakuasi lansia dan anak-anak ke posko pengungsian.',
    visualHint: 'Warga berkumpul aman di balkon lantai 2, perahu karet BNPB beroperasi menjemput korban banjir.'
  },
  {
    id: 'RECEDING_WATER',
    title: 'Air Surut & Pemulihan',
    subtitle: 'Pembersihan Lumpur & Sanitasi',
    pvmbgLevel: 'Pasca Bencana / Pemulihan',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Pompa drainase beroperasi dan air banjir mulai surut menyisakan endapan lumpur tebal. Warga membersihkan sisa banjir, waspadai hewan berbisa dan penyakit leptospirosis.',
    visualHint: 'Genangan air menyusut kembali ke saluran, endapan lumpur tersisa, pemulihan lingkungan dimulai.'
  }
];

const FLOOD_STAGES_EN: ProcessStage[] = [
  {
    id: 'NORMAL',
    title: 'Normal River Conditions',
    subtitle: 'Unobstructed River Flow & Urban Drainage',
    pvmbgLevel: 'Safe Status',
    pvmbgColor: '#22c55e',
    icon: Waves,
    description: 'Clear weather conditions, river discharge within safe baseline capacity, urban stormwater culverts unblocked, settlement operating peacefully.',
    visualHint: 'River water level is safely contained within channel banks; streets and residences dry.'
  },
  {
    id: 'HEAVY_RAIN',
    title: 'Intense Monsoon Downpours',
    subtitle: 'Extreme Precipitation (> 100 mm/day)',
    pvmbgLevel: 'Severe Weather Advisory',
    pvmbgColor: '#eab308',
    icon: CloudLightning,
    description: 'Dense cumulonimbus storm clouds drench upstream watersheds and urban areas with high-volume rainfall. Soil infiltration reaches maximum saturation limits.',
    visualHint: 'Heavy rainfall pelts the neighborhood, overcast skies darken, and river levels begin rising.'
  },
  {
    id: 'DRAINAGE_CLOG',
    title: 'Stormwater Culvert Blockage',
    subtitle: 'Solid Waste & Sediment Clogging',
    pvmbgLevel: 'Urban Waterlogging Watch',
    pvmbgColor: '#eab308',
    icon: AlertTriangle,
    description: 'Accumulated plastic debris and sediment deposits block municipal culverts. Surface runoff cannot drain and begins ponding along curbs (10-30 cm deep).',
    visualHint: 'Water puddles pool along asphalt and sidewalks; debris accumulation visible at drain inlets.'
  },
  {
    id: 'RIVER_OVERFLOW',
    title: 'River Discharge Overtopping',
    subtitle: 'Upstream Flood Surge Arrival',
    pvmbgLevel: 'Sluice Gate Alert Level 2',
    pvmbgColor: '#f97316',
    icon: Zap,
    description: 'High-volume upstream discharge exceeds river embankment holding capacity. Floodwaters overtop retaining levees and spill rapidly across streets and driveways.',
    visualHint: 'Turbid brown flood currents breach levee walls and inundate residential front yards!'
  },
  {
    id: 'URBAN_INUNDATION',
    title: 'Severe Urban Inundation',
    subtitle: 'Water Depths Reach 1.0 - 1.8 Meters',
    pvmbgLevel: 'CRITICAL FLOOD / ALERT LEVEL 1',
    pvmbgColor: '#ef4444',
    icon: AlertOctagon,
    description: 'Turbid floodwaters completely submerge the first floor of homes and roadways. Submerged vehicles stall and drift. Severe electrocution hazard from power poles! Disconnect electrical breakers immediately!',
    visualHint: 'Deep floodwaters engulf ground-floor structures, vehicles float, electrical arcs spark on utility poles!'
  },
  {
    id: 'EMERGENCY_EVACUATION',
    title: 'Vertical Evacuation & Inflatable Boat SAR',
    subtitle: 'Emergency Second-Floor Refuge',
    pvmbgLevel: 'Emergency SAR Evacuation',
    pvmbgColor: '#38bdf8',
    icon: Mountain,
    description: 'Occupants perform vertical evacuation to structural 2nd floors. Disaster relief SAR teams deploy motorized rubber boats to evacuate elderly citizens and children to designated shelters.',
    visualHint: 'Residents assemble safely on upper balconies as rescue boats triage and extract families.'
  },
  {
    id: 'RECEDING_WATER',
    title: 'Receding Floodwaters & Sanitation',
    subtitle: 'Mud Silt Cleanup & Health Protocols',
    pvmbgLevel: 'Post-Flood Recovery',
    pvmbgColor: '#22c55e',
    icon: Wind,
    description: 'Municipal drainage pumps engage and flood levels subside leaving thick silt deposits. Neighborhood cleanups begin; watch for venomous animals and leptospirosis waterborne infections.',
    visualHint: 'Standing water drains away, silt deposits settle, community environmental rehabilitation begins.'
  }
];

export const getDisasterStages = (disasterId: DisasterId, lang: Language = 'id'): ProcessStage[] => {
  switch (disasterId) {
    case 'TORNADO':
      return lang === 'en' ? TORNADO_STAGES_EN : TORNADO_STAGES_ID;
    case 'LANDSLIDE':
      return lang === 'en' ? LANDSLIDE_STAGES_EN : LANDSLIDE_STAGES_ID;
    case 'EARTHQUAKE':
      return lang === 'en' ? EARTHQUAKE_STAGES_EN : EARTHQUAKE_STAGES_ID;
    case 'VOLCANO':
      return lang === 'en' ? ERUPTION_STAGES_EN : ERUPTION_STAGES_ID;
    case 'TSUNAMI':
      return lang === 'en' ? TSUNAMI_STAGES_EN : TSUNAMI_STAGES_ID;
    case 'FLOOD':
      return lang === 'en' ? FLOOD_STAGES_EN : FLOOD_STAGES_ID;
    default:
      return [];
  }
};
