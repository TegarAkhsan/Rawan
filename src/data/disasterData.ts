import { DisasterId, DisasterInfo, SimulationScenario } from '../types/disaster';
import { Language } from '../types/language';

export const DISASTERS_DATA_ID: Record<DisasterId, DisasterInfo> = {
  EARTHQUAKE: {
    id: 'EARTHQUAKE',
    name: 'Earthquake',
    indonesianName: 'Gempa Bumi',
    subtitle: 'Getaran Kerak Bumi Akibat Pelepasan Energi Seismik',
    tagline: 'Drop, Cover, and Hold On! Langkah cepat menyelamatkan nyawa.',
    category: 'Geologi',
    color: '#f59e0b',
    accentColor: '#fbbf24',
    ringColor: '#d97706',
    bgGradient: 'from-amber-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Terjadinya Gempa Bumi',
      summary: 'Indonesia terletak di pertemuan 3 lempeng tektonik utama dunia: Indo-Australia, Eurasia, dan Pasifik.',
      points: [
        'Pergeseran Lempeng Tektonik: Subduksi lempeng menumpuk tegangan hingga batuan patah dan melepaskan energi getaran seismik.',
        'Aktivitas Sesar Aktif Darat: Pergerakan patahan kerak bumi lokal seperti Sesar Semangko di Sumatra, Sesar Lembang di Jawa Barat, dan Sesar Palu-Koro di Sulawesi.',
        'Aktivitas Vulkanik: Pergerakan magma bertekanan tinggi di bawah gunung api aktif memicu gempa vulkanik berkala.',
        'Runtuhan Gua Bawah Tanah atau Aktivitas Peledakan Tambang (Gempa Runtuhan).'
      ]
    },
    warningSigns: {
      title: 'Tanda & Gejala Datangnya Gempa',
      summary: 'Gempa bumi tektonik terjadi sangat cepat tanpa jeda panjang, namun ada indikator yang dapat diamati.',
      points: [
        'Suara gemuruh mendalam dari perut bumi sesaat sebelum guncangan hebat terasa.',
        'Lampu gantung, kipas angin, atau benda gantung mulai berayun secara tiba-tiba.',
        'Perilaku gelisah atau panik pada hewan peliharaan (kucing, anjing, burung) sesaat sebelum gempa karena kepekaan terhadap gelombang P (primer).',
        'Gempa pendahuluan (foreshock) berskala kecil sebelum guncangan utama (mainshock).'
      ]
    },
    impacts: {
      title: 'Dampak Kerusakan Gempa Bumi',
      summary: 'Kerugian fisik dan non-fisik akibat keruntuhan infrastruktur dan goncangan tanah.',
      points: [
        'Kerusakan Struktural: Gedung bertingkat, sekolah, dan rumah yang tidak tahan gempa runtuh menimpa penghuni.',
        'Likuefaksi (Pencairan Tanah): Tanah berpasir jenuh air kehilangan kekuatannya dan berubah seperti lumpur cair (seperti di Petobo, Palu 2018).',
        'Pemicu Bencana Sekunder: Kebakaran akibat korsleting listrik / kebocoran pipa gas, tanah longsor di perbukitan, serta tsunami bila episentrum di laut dangkal.'
      ]
    },
    prevention: {
      title: 'Mitigasi & Pencegahan',
      summary: 'Langkah persiapan sebelum bencana terjadi untuk meminimalisir risiko korban jiwa.',
      points: [
        'Membangun rumah dengan standar tahan gempa (struktur beton bertulang dan atap ringan).',
        'Mengikat lemari buku dan perabot berat ke dinding agar tidak roboh saat guncangan.',
        'Menyiapkan Tas Siaga Bencana (TSB) di dekat pintu keluar rumah.',
        'Rutin mengadakan simulasi evakuasi mandiri bersama keluarga dan sekolah.'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Gempa Terjadi)',
      summary: 'Tiga langkah emas bertahan hidup di dalam ruangan: DROP, COVER, HOLD ON!',
      points: [
        'DROP (Merunduk): Segera jatuhkan tubuh ke lantai sebelum guncangan menjatuhkan Anda.',
        'COVER (Berlindung): Masuk ke bawah meja yang kokoh dan lindungi kepala serta leher dengan tangan.',
        'HOLD ON (Bertahan): Pegang erat kaki meja hingga guncangan benar-benar berhenti.',
        'JANGAN gunakan lift! Gunakan tangga darurat setelah guncangan berhenti.',
        'Jika berada di luar ruangan, jauhi gedung tinggi, papan reklame, dan tiang listrik.'
      ]
    },
    evacuation: {
      title: 'Jalur & Prosedur Evakuasi',
      summary: 'Langkah aman keluar gedung menuju titik kumpul aman (Assembly Point).',
      points: [
        'Tunggu hingga guncangan gempa selesai sebelum bergerak keluar.',
        'Keluar dengan tertib tanpa saling dorong, lindungi kepala dengan tas atau helm.',
        'Berkumpul di lapangan terbuka yang bebas dari bahaya runtuhan atap dan kaca.',
        'Matikan sekring listrik utama dan keran kompor gas jika situasi memungkinkan.'
      ]
    },
    funFact: 'Indonesia mencatat rata-rata lebih dari 5.000 hingga 10.000 gempa bumi setiap tahunnya karena letak geografisnya di Cincin Api Pasifik (Ring of Fire).',
    famousEventIndonesia: {
      title: 'Gempa Palu & Donggala',
      year: '2018',
      location: 'Sulawesi Tengah',
      description: 'Gempa M 7.4 yang disertai fenomena likuefaksi masif di Petobo dan Balaroa serta tsunami di Teluk Palu.'
    },
    hotspots: [
      { title: 'Zona Meja Pelindung', description: 'Area aman terbaik untuk berlindung (Drop, Cover, Hold on).', position: [0, -0.8, -1] },
      { title: 'Jendela Kaca', description: 'Bahaya pecahan kaca tajam! Segera jauhi jendela saat gempa.', position: [3, 1, -4] },
      { title: 'Pintu Darurat', description: 'Jalur evakuasi setelah guncangan mereda.', position: [-3.8, 0, -2] }
    ]
  },

  TSUNAMI: {
    id: 'TSUNAMI',
    name: 'Tsunami',
    indonesianName: 'Tsunami',
    subtitle: 'Gelombang Raksasa Berkecepatan Jet Akibat Deformasi Bawah Laut',
    tagline: 'Air laut surut mendadak? Jangan tonton! Lari secepatnya ke tempat tinggi!',
    category: 'Geologi',
    color: '#06b6d4',
    accentColor: '#38bdf8',
    ringColor: '#0284c7',
    bgGradient: 'from-cyan-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Terjadinya Tsunami',
      summary: 'Perpindahan volume air laut dalam jumlah masif secara tiba-tiba akibat deformasi vertikal dasar laut.',
      points: [
        'Gempa Megathrust Bawah Laut: Patahan lempeng naik (thrust fault) dengan kedalaman dangkal (< 60 km) dan magnitudo M > 7.0.',
        'Letusan Gunung Api Bawah Laut / Pulau Vulkanik: Runtuhnya kaldera atau kubah lava ke dalam laut (seperti letusan Gunung Anak Krakatau 2018).',
        'Longsoran Tebing Bawah Laut (Submarine Landslide): Runtuhnya massa sedimen palung laut ke kedalaman.',
        'Hantaman Meteorit di Samudra (sangat jarang).'
      ]
    },
    warningSigns: {
      title: 'Tanda & Gejala Datangnya Tsunami',
      summary: 'Kenali tanda alam 20-20-20: Gempa 20 detik, evakuasi dalam 20 menit, lari ke ketinggian 20 meter.',
      points: [
        'Guncangan gempa bumi kuat atau berdurasi lama (> 20 detik) di daerah pesisir pantai.',
        'Air laut di bibir pantai mendadak surut drastis hingga karang dan ikan terdampar terlihat.',
        'Suara gemuruh dahsyat seperti deru pesawat jet atau dentuman keras dari arah laut lepas.',
        'Bau belerang atau garam pekat yang terbawa angin laut yang kencang.',
        'Bunyi sirene Peringatan Dini Tsunami (InaTEWS BMKG) dari menara sirene pantai.'
      ]
    },
    impacts: {
      title: 'Dampak Kerusakan Tsunami',
      summary: 'Daya hancur hidrolik raksasa yang menyapu pemukiman pesisir pantai hingga kilometer ke daratan.',
      points: [
        'Hantaman Dinding Air Bertekanan Tinggi: Menghancurkan bangunan, jembatan, pelabuhan, dan infrastruktur pelabuhan.',
        'Gelombang Balik (Backwash): Menyeret puing bangunan, kendaraan, dan manusia ke tengah laut lepas.',
        'Salinisasi Lahan Pertanian & Sumber Air Tawar: Tanah subur dan sumur tercemar air asin berkepanjangan.'
      ]
    },
    prevention: {
      title: 'Mitigasi & Perlindungan Pesisir',
      summary: 'Pengurangan risiko bencana melalui benteng alami dan sistem peringatan dini canggih.',
      points: [
        'Menanam dan merawat hutan bakau (mangrove) dan cemara udang sebagai pemecah gelombang alami.',
        'Pembangunan tanggul laut (seawall) dan pemecah ombak (breakwater) di zona berpopulasi padat.',
        'Pemasangan sirine InaTEWS BMKG dan rambu jalur evakuasi vertikal di setiap pantai wisata.',
        'Edukasi kearifan lokal seperti budaya "Smong" di Pulau Simeulue, Aceh.'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Peringatan Tsunami)',
      summary: 'Setiap detik sangat berharga! Segera lakukan evakuasi vertikal ke tempat tinggi.',
      points: [
        'JANGAN pernah pergi ke pantai untuk menonton air laut yang surut atau mengambil ikan!',
        'Segera lari menjauhi pantai menuju perbukitan atau bangunan penyelamatan tsunami (TES - Temporary Evacuation Shelter).',
        'Gunakan jalur evakuasi resmi dan utamakan jalan kaki untuk menghindari macet total di jalan raya.',
        'Jika terjebak dan tidak sempat ke bukit, naiklah ke lantai 3 atau 4 gedung beton bertulang yang kokoh.',
        'Waspadai gelombang susulan! Gelombang kedua dan ketiga sering kali jauh lebih tinggi dari gelombang pertama.'
      ]
    },
    evacuation: {
      title: 'Prosedur Evakuasi Tsunami',
      summary: 'Prinsip evakuasi mandiri cepat tanpa menunggu konfirmasi bila gempa pantai terasa sangat kuat.',
      points: [
        'Bawa Tas Siaga Bencana yang mudah dibawa sambil berlari.',
        'Bantu anak-anak, lansia, dan penyandang disabilitas terlebih dahulu.',
        'Tetap berada di tempat tinggi minimal selama 2-3 jam hingga BMKG secara resmi mencabut status ancaman tsunami.'
      ]
    },
    funFact: 'Di laut dalam, gelombang tsunami merambat dengan kecepatan pesawat jet komersial (700-900 km/jam), namun tingginya hanya kurang dari 1 meter sehingga tidak dirasakan kapal di tengah laut.',
    famousEventIndonesia: {
      title: 'Tsunami Samudra Hindia (Aceh)',
      year: '2004',
      location: 'Aceh & Pesisir Samudra Hindia',
      description: 'Gempa Megathrust M 9.1 yang memicu tsunami setinggi hingga 30 meter, menjadi salah satu bencana terbesar dalam sejarah modern.'
    },
    hotspots: [
      { title: 'Garis Pantai Terbuka', description: 'Zona merah bahaya gelombang! Jangan dekati pantai saat air surut.', position: [0, 0, 4] },
      { title: 'Bukit Evakuasi Vertikal', description: 'Titik aman tertinggi (minimal elevasi 20 meter di atas permukaan laut).', position: [-4, 3, -3] },
      { title: 'Hutan Mangrove Pesisir', description: 'Sabuk hijau peredam energi gelombang alami.', position: [3, 0.5, 1] }
    ]
  },

  VOLCANO: {
    id: 'VOLCANO',
    name: 'Volcano Eruption',
    indonesianName: 'Letusan Gunung Api',
    subtitle: 'Erupsi Magma, Gas Beracun, dan Awan Panas Mematikan',
    tagline: 'Wedhus Gembel berkecepatan 200 km/jam! Patuhi zona Kawasan Rawan Bencana (KRB).',
    category: 'Geologi',
    color: '#ef4444',
    accentColor: '#f87171',
    ringColor: '#dc2626',
    bgGradient: 'from-rose-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Letusan Gunung Berapi',
      summary: 'Dinamika magma cair dan akumulasi gas vulkanik bertekanan tinggi di dalam kerak bumi.',
      points: [
        'Akumulasi Tekanan Gas Magma: Magma yang kaya silika dan gas terperangkap di dapur magma bawah tanah hingga tekanannya melebihi kekuatan batuan penutup.',
        'Pencampuran Magma Baru: Intrusi magma basaltik panas dari mantel bumi memicu reaksi ekspansi gas secara mendadak.',
        'Erupsi Freatik: Kontak langsung antara air tanah dengan tubuh magma panas menghasilkan ledakan uap air bertekanan tinggi.'
      ]
    },
    warningSigns: {
      title: 'Tanda Peringatan Gunung Api Aktif',
      summary: 'Status PVMBG: Level I (Normal) -> Level II (Waspada) -> Level III (Siaga) -> Level IV (Awas).',
      points: [
        'Peningkatan frekuensi gempa vulkanik dangkal dan dalam yang terekam seismograf.',
        'Kenaikan suhu kawah, mata air panas sekitar mengering atau mendidih.',
        'Hewan-hewan liar di puncak gunung turun berbondong-bondong ke pemukiman kaki gunung karena panas tanah.',
        'Terlihat asap solfatara/fumarol pekat membubung tinggi dari kawah dan tercium bau belerang menyengat.',
        'Deformasi tanah: Menggelembungnya tubuh gunung (tampak lewat pengukuran tiltmeter dan GPS geodesi).'
      ]
    },
    impacts: {
      title: 'Bahaya & Dampak Letusan',
      summary: 'Kombinasi bahaya primer (saat erupsi) dan bahaya sekunder (setelah erupsi).',
      points: [
        'Awan Panas Guguran (Wedhus Gembel / Pyroclastic Flow): Campuran gas vulkanik dan bebatuan bersuhu 300°C - 700°C yang meluncur hingga 200 km/jam.',
        'Hujan Abu Vulkanik & Kerikil Pijar: Menyebabkan penyakit ISPA, merusak atap rumah, dan menghentikan penerbangan pesawat.',
        'Lahar Dingin / Lahar Hujan: Aliran lumpur dan batu besar di sungai yang terpicu hujan lebat di puncak gunung pascaerupsi.',
        'Gas Beracun (CO, CO2, SO2, H2S) yang tidak berwarna dan dapat mematikan seketika di sekitar kawah.'
      ]
    },
    prevention: {
      title: 'Mitigasi Bencana Vulkanik',
      summary: 'Pemantauan geofisika berkelanjutan oleh PVMBG dan penataan ruang Kawasan Rawan Bencana (KRB).',
      points: [
        'Mematuhi peta Kawasan Rawan Bencana (KRB III, KRB II, KRB I) yang ditetapkan pemerintah.',
        'Pembangunan Sabo Dam di sepanjang sungai lereng gunung untuk menahan aliran lahar dingin.',
        'Menyiapkan kacamata pelindung dan masker N95 untuk menghadapi hujan abu vulkanik.',
        'Mengikuti arahan BPBD dan relawan tanggap darurat saat status naik menjadi Level IV (Awas).'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Erupsi Terjadi)',
      summary: 'Langkah cepat evakuasi keluar dari radius bahaya KRB yang ditetapkan.',
      points: [
        'Segera tinggalkan radius bahaya (biasanya 5 hingga 15 km dari puncak kawah aktif).',
        'Gunakan pakaian lengan panjang, celana panjang, topi, masker basah / N95, dan kacamata (jangan pakai lensa kontak!).',
        'Tutup semua ventilasi rumah, pintu, dan jendela jika berada di dalam ruang perlindungan sementara.',
        'Jauhi lembah sungai yang berhulu di puncak gunung untuk menghindari awan panas dan lahar.',
        'Bersihkan endapan abu tebal dari atap rumah agar tidak roboh menimpa penghuni.'
      ]
    },
    evacuation: {
      title: 'Prosedur Evakuasi Pengungsian',
      summary: 'Evakuasi terkoordinasi menuju posko pengungsian resmi di luar zona bahaya.',
      points: [
        'Gunakan jalur evakuasi resmi yang telah dipasang rambu oleh BPBD.',
        'Bawa surat berharga, obat pribadi, dan hewan ternak ke tempat aman jika waktu mencukupi.',
        'Tetap di posko pengungsian hingga PVMBG menyatakan kondisi gunung berapi telah kembali aman.'
      ]
    },
    funFact: 'Indonesia memiliki 127 gunung api aktif—terbanyak di dunia—dengan Gunung Merapi di Yogyakarta sebagai salah satu gunung api paling aktif dan paling padat penduduk di sekitarnya.',
    famousEventIndonesia: {
      title: 'Erupsi Akbar Gunung Merapi',
      year: '2010',
      location: 'Yogyakarta & Jawa Tengah',
      description: 'Erupsi eksplosif berskala VEI 4 yang meluncurkan awan panas hingga radius lebih dari 15 km di Kali Gendol.'
    },
    hotspots: [
      { title: 'Kubah Lava & Kawah Aktif', description: 'Pusat letusan dan akumulasi magma bertemperatur ekstrem.', position: [0, 2.5, 0] },
      { title: 'Lembah Alur Awan Panas', description: 'Jalur luncuran wedhus gembel berkecepatan tinggi.', position: [2, 0.5, 1] },
      { title: 'Pos Pengamatan Gunung Api (PGA)', description: 'Pusat monitoring seismik dan deformasi 24 jam oleh PVMBG.', position: [-4, -0.5, 3] }
    ]
  },

  FLOOD: {
    id: 'FLOOD',
    name: 'Flood',
    indonesianName: 'Banjir',
    subtitle: 'Luapan Debit Air Ekstrem Akibat Presipitasi dan Kerusakan DAS',
    tagline: 'Air mulai naik? Segera matikan sekring listrik dan amankan dokumen penting ke tempat tinggi!',
    category: 'Hidrometeorologi',
    color: '#3b82f6',
    accentColor: '#60a5fa',
    ringColor: '#2563eb',
    bgGradient: 'from-blue-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Terjadinya Banjir',
      summary: 'Ketidakmampuan saluran drainase dan Daerah Aliran Sungai (DAS) menampung volume limpasan air.',
      points: [
        'Curah Hujan Ekstrem (Presipitasi Tinggi): Hujan lebat berkepanjangan akibat fenomena cuaca monsun atau La Niña.',
        'Alih Fungsi Lahan & Deforestasi: Hilangnya tutupan hutan di hulu sungai sehingga tanah kehilangan daya resapan air.',
        'Penyempitan & Pendangkalan Sungai: Tumpukan sampah dan sedimentasi lumpur di hilir perkotaan.',
        'Banjir Rob: Naiknya air laut pasang ke daratan pesisir pantai yang mengalami penurunan muka tanah (subsidence).'
      ]
    },
    warningSigns: {
      title: 'Tanda-Tanda Datangnya Banjir',
      summary: 'Indikator hidrologis yang dapat dipantau sebelum genangan meluas.',
      points: [
        'Hujan lebat tidak berhenti selama lebih dari 3-6 jam berturut-turut di wilayah hulu.',
        'Kenaikan tinggi muka air (TMA) di pos pantau pintu air sungai (status Siaga 3, 2, 1).',
        'Air selokan pemukiman meluap dan berubah warna menjadi cokelat keruh berlumpur.',
        'Peringatan dini cuaca ekstrem dari BMKG tentang potensi hujan lebat disertai angin kencang.'
      ]
    },
    impacts: {
      title: 'Dampak Kerusakan Banjir',
      summary: 'Kerugian ekonomi, kerusakan infrastruktur, dan ancaman penyakit menular pascabanjir.',
      points: [
        'Korban Jiwa & Tersengat Listrik: Terjebak arus deras atau tersengat kabel listrik yang terendam air.',
        'Kerusakan Rumah & Harta Benda: Perabot rusak, lumpur mengendap, dan kendaraan mogok/rusak total.',
        'Wabah Penyakit Menular: Leptospirosis (kencing tikus), diare, kolera, demam berdarah, dan penyakit kulit.'
      ]
    },
    prevention: {
      title: 'Pencegahan & Pengendalian Banjir',
      summary: 'Upaya struktural dan non-struktural untuk menjaga kelestarian lingkungan resapan air.',
      points: [
        'Tidak membuang sampah ke sungai, kali, atau saluran drainase.',
        'Membuat sumur resapan dan lubang biopori di halaman rumah.',
        'Menjaga kelestarian hutan lindung di kawasan hulu pegunungan.',
        'Normalisasi sungai dan pembangunan kolam retensi (waduk pengendali banjir).'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Banjir Terjadi)',
      summary: 'Langkah pengamanan keselamatan jiwa dan aset keluarga.',
      points: [
        'SEGERA MATIKAN SEKRING LISTRIK UTAMA (MCB) rumah untuk mencegah bahaya korsleting mematikan!',
        'Amankan Tas Siaga Bencana dan barang berharga ke lantai atas atau tempat tertinggi.',
        'Pindahkan anak-anak dan lansia ke tempat yang aman lebih awal.',
        'Hindari berjalan atau berkendara di arus banjir deras (arus setinggi 15 cm dapat menjatuhkan orang dewasa!).',
        'Gunakan sepatu bot karet untuk melindungi kaki dari pecahan kaca tajam dan paku di bawah genangan air.'
      ]
    },
    evacuation: {
      title: 'Prosedur Evakuasi Mandiri',
      summary: 'Menuju tempat penampungan pengungsi yang telah disiapkan pemerintah.',
      points: [
        'Ikuti instruksi petugas BPBD dan aparat desa menuju posko pengungsian di dataran tinggi.',
        'Jangan kembali ke rumah sebelum air benar-benar surut dan listrik dinyatakan aman oleh PLN.',
        'Konsumsi hanya air minum yang telah dimasak mendidih untuk mencegah wabah penyakit perut.'
      ]
    },
    funFact: 'Arus banjir sedalam 30 cm (setinggi lutut) memiliki daya dorong yang cukup kuat untuk menghanyutkan sebagian besar mobil keluarga!',
    famousEventIndonesia: {
      title: 'Banjir Bandang Wasior & Sentani',
      year: '2010 & 2019',
      location: 'Papua & Papua Barat',
      description: 'Banjir bandang dahsyat yang membawa gelondongan kayu dan batu besar akibat kerusakan tangkapan air pegunungan Cycloop.'
    },
    hotspots: [
      { title: 'Tanggul Sungai Kritis', description: 'Titik rawan jebol saat debit air puncak tiba.', position: [0, 0.5, -2] },
      { title: 'Pemukiman Dataran Rendah', description: 'Area cekungan yang paling cepat tergenang banjir.', position: [2, 0.2, 1] },
      { title: 'Posko Evakuasi Dataran Tinggi', description: 'Gedung serbaguna aman di atas bukit bebas banjir.', position: [-3.5, 2, -2] }
    ]
  },

  LANDSLIDE: {
    id: 'LANDSLIDE',
    name: 'Landslide',
    indonesianName: 'Tanah Longsor',
    subtitle: 'Runtuhan Massa Batuan dan Tanah di Lereng Curam',
    tagline: 'Muncul retakan di lereng bukit? Pohon mulai miring? Evakuasi lateral segera!',
    category: 'Geologi',
    color: '#84cc16',
    accentColor: '#a3e635',
    ringColor: '#65a30d',
    bgGradient: 'from-lime-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Terjadinya Tanah Longsor',
      summary: 'Gaya pendorong pada lereng melebihi gaya penahan akibat gravitasi, saturasi air, dan erosi.',
      points: [
        'Hujan Lebat Berkepanjangan: Air meresap dan menjenuhkan tanah, meningkatkan beban massa dan tekanan pori air.',
        'Lereng Terjal & Ketiadaan Vegetasi: Penebangan pohon berakar kuat di lereng bukit menghilangkan jangkar alami tanah.',
        'Getaran Gempa Bumi: Guncangan tektonik meretakkan batuan dasar dan memicu longsoran seketika.',
        'Pemotongan Tebing Secara Tegak: Pembangunan jalan atau pemukiman di kaki tebing tanpa terasering atau dinding penahan (retaining wall).'
      ]
    },
    warningSigns: {
      title: 'Tanda Peringatan Tanah Longsor',
      summary: 'Gejala deformasi fisik pada lereng yang dapat diamati dengan kasat mata.',
      points: [
        'Munculnya retakan tapal kuda (tension cracks) pada tanah lereng atau lantai/dinding rumah di perbukitan.',
        'Pohon, tiang listrik, atau pagar di lereng mulai miring condong ke arah bawah bukit.',
        'Pintu dan jendela rumah di lereng mendadak macet atau sulit dibuka akibat pergeseran pondasi.',
        'Mata air baru mendadak muncul atau air sumur di lereng tiba-tiba berubah menjadi sangat keruh kecokelatan.',
        'Terdengar suara gemuruh runtuhan batu kecil atau dentuman patahan tanah dari atas tebing.'
      ]
    },
    impacts: {
      title: 'Dampak Kerusakan Tanah Longsor',
      summary: 'Kecepatan luncuran yang sangat tinggi sering kali menimbun pemukiman tanpa sempat menyelamatkan harta benda.',
      points: [
        'Korban Jiwa Tertimbun Material: Massa tanah dan batu raksasa menimbun rumah dalam hitungan detik.',
        'Terputusnya Akses Transportasi: Jalan raya antarkota di pegunungan tertutup material longsor, mengisolasi warga.',
        'Penyumbatan Aliran Sungai (Bendung Alami): Membentuk tampungan air liar yang berpotensi jebol menjadi banjir bandang susulan.'
      ]
    },
    prevention: {
      title: 'Mitigasi & Penstabilan Lereng',
      summary: 'Penataan drainase lereng dan rekayasa vegetasi pelindung tanah.',
      points: [
        'Menanam tanaman berakar serabut dalam seperti Rumput Vetiver (Akar Wangi) dan pohon beringin/bambu di lereng rawan.',
        'Membuat sistem terasering (sengkedan) dan saluran drainase air hujan agar tidak meresap liar ke dalam lereng.',
        'Membangun dinding penahan tanah (retaining wall / bronjong kawat batu kali) di kaki lereng rawan.',
        'Menghindari membangun rumah permanen tepat di bawah tebing terjal atau di tepi jurang.'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Longsor Terjadi)',
      summary: 'Lakukan evakuasi lateral—lari menyamping tegak lurus dari arah luncuran longsor!',
      points: [
        'JANGAN BERLARI KE BAWAH LEMBAH searah jatuhnya tanah!',
        'Lari secepatnya MENYAMPING (tegak lurus) keluar dari jalur koridor longsoran.',
        'Jika tidak sempat melarikan diri, segera meringkuk seperti bola (fetal position) dan lindungi kepala dengan kedua tangan rapat.',
        'Waspadai longsor susulan yang sering terjadi saat hujan masih terus mengguyur.',
        'Bunyikan peluit darurat dari Tas Siaga jika Anda terjebak atau tertimbun puing untuk memandu tim SAR.'
      ]
    },
    evacuation: {
      title: 'Prosedur Evakuasi Warga Lereng',
      summary: 'Mengungsi sementara ke posko aman saat hujan deras berdurasi panjang melanda lereng bukit.',
      points: [
        'Segera mengungsi jika hujan deras telah berlangsung lebih dari 2 jam di wilayah zona merah lereng curam.',
        'Patuhi sistem peringatan dini Early Warning System (EWS) longsor berbasis sirine kabel ekstensometer BPBD.'
      ]
    },
    funFact: 'Rumput Vetiver memiliki akar yang dapat menembus tanah hingga kedalaman 3 sampai 5 meter dan memiliki kekuatan tarik setara dengan kawat baja ringan untuk mengikat lereng bukit!',
    famousEventIndonesia: {
      title: 'Longsor Banjarnegara & Cisolok',
      year: '2014 & 2019',
      location: 'Jawa Tengah & Jawa Barat',
      description: 'Longsoran lereng terjal perbukitan yang dipicu hujan ekstrem berkepanjangan menimbun puluhan rumah warga.'
    },
    hotspots: [
      { title: 'Mahkota Retakan Lereng', description: 'Zona awal bidang gelincir longsor yang merekah.', position: [0, 2.8, -2] },
      { title: 'Jalur Luncuran Debris', description: 'Koridor aliran massa lumpur dan batu berkecepatan tinggi.', position: [1, 0.5, 0] },
      { title: 'Dinding Penahan Bronjong', description: 'Struktur rekayasa penahan tanah di kaki tebing.', position: [-2.5, -0.5, 2] }
    ]
  },

  TORNADO: {
    id: 'TORNADO',
    name: 'Tornado / Whirlwind',
    indonesianName: 'Puting Beliung',
    subtitle: 'Pusaran Angin Kolom Vertikal Berkekuatan Ekstrem',
    tagline: 'Awan badai hitam menggulung? Jauhi jendela kaca dan berlindung di ruang paling dalam!',
    category: 'Hidrometeorologi',
    color: '#8b5cf6',
    accentColor: '#a78bfa',
    ringColor: '#7c3aed',
    bgGradient: 'from-purple-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Penyebab Terjadinya Puting Beliung',
      summary: 'Perbedaan suhu dan tekanan udara yang sangat kontras di dalam awan badai konvektif supercell.',
      points: [
        'Awan Cumulonimbus (CB) Raksasa: Pertemuan massa udara panas lembap dari permukaan bumi dengan udara dingin kering di atmosfer atas.',
        'Arus Udara Naik (Updraft) Kuat: Perputaran angin vertikal yang membentuk pusaran corong (funnel cloud) hingga menyentuh tanah.',
        'Peralihan Musim (Pancaroba): Sering terjadi pada siang menjelang sore hari di wilayah dataran terbuka tropis.'
      ]
    },
    warningSigns: {
      title: 'Tanda Datangnya Puting Beliung',
      summary: 'Fase atmosferik 15-30 menit sebelum corong angin menyentuh pemukiman.',
      points: [
        'Udara siang hari terasa sangat gerah dan panas menyengat tidak wajar.',
        'Di langit muncul awan gelap pekat menjulang tinggi seperti bunga kol (Awan Cumulonimbus) dengan tepian hitam keabu-abuan.',
        'Ranting pohon bergoyang cepat tertiup angin kencang berputar yang mendadak dingin.',
        'Terdengar suara gemuruh keras mendengung seperti raungan pesawat jet dari arah langit.',
        'Terlihat corong awan pusaran hitam menggantung dari dasar awan badai turun ke arah daratan.'
      ]
    },
    impacts: {
      title: 'Dampak Kerusakan Puting Beliung',
      summary: 'Kerusakan terkonsentrasi di sepanjang jalur lintas corong pusaran angin.',
      points: [
        'Kerusakan Atap Rumah: Atap seng dan genteng beterbangan tersedot tekanan udara rendah di pusat pusaran.',
        'Pohon Tumbang & Tiang Listrik Roboh: Memutus jaringan listrik dan menimpa kendaraan/pengguna jalan.',
        'Bahaya Serpihan Beterbangan (Flying Debris): Seng, kayu, dan kaca yang terbang dengan kecepatan tinggi menjadi proyektil mematikan.'
      ]
    },
    prevention: {
      title: 'Mitigasi Bahaya Angin Kencang',
      summary: 'Penguatan struktur atap bangunan dan pemangkasan dahan pohon rawan tumbang.',
      points: [
        'Memperkuat sambungan konstruksi atap rumah dengan paku/baut pengunci ekstra ke rangka kuda-kuda.',
        'Rutin memangkas dahan pohon besar dan rapuh di sekitar rumah sebelum musim pancaroba.',
        'Menghindari berlindung di bawah pohon besar, baliho reklame, atau jembatan penyeberangan saat badai.',
        'Memasang aplikasi peringatan cuaca BMKG di ponsel pintar untuk memantau radar awan badai.'
      ]
    },
    emergencyProcedures: {
      title: 'Prosedur Darurat (Saat Puting Beliung Menerjang)',
      summary: 'Cari ruangan terdalam tanpa jendela di lantai dasar!',
      points: [
        'JANGAN BERDIRI DI DEKAT JENDELA KACA! Pecahan kaca dapat melesat seperti peluru akibat tekanan angin.',
        'Masuklah ke ruangan paling dalam di lantai dasar tanpa jendela (kamar mandi, lorong tengah rumah, atau bawah tangga).',
        'Merunduk dan lindungi kepala serta leher dengan bantal, kasur lipat, atau tangan.',
        'Jika sedang berkendara di mobil, segera keluar dan cari bangunan kokoh; jangan pernah berlindung di dalam mobil!',
        'Jika berada di lapangan terbuka tanpa gedung, tiaraplah di saluran air/parit rendah dan lindungi kepala.'
      ]
    },
    evacuation: {
      title: 'Prosedur Pasca Badai Angin',
      summary: 'Kewaspadaan terhadap bahaya kabel listrik terbuka dan puing tajam.',
      points: [
        'Tunggu hingga pusaran angin benar-benar reda dan menjauh sebelum keluar dari ruang perlindungan.',
        'Waspadai kabel listrik PLN yang putus menjuntai di tanah berair—jangan disentuh!',
        'Gunakan alas kaki tebal untuk melindungi kaki dari paku dan seng yang berserakan.'
      ]
    },
    funFact: 'Durasi terjangan puting beliung di Indonesia umumnya hanya berlangsung sekitar 5 hingga 10 menit, namun dapat melesat merusak area selebar beberapa ratus meter dengan kecepatan angin lebih dari 100-150 km/jam!',
    famousEventIndonesia: {
      title: 'Puting Beliung Rancaekek & Sumedang',
      year: '2024',
      location: 'Jawa Barat',
      description: 'Pusaran angin tornado skala kuat yang merusak ratusan atap pabrik dan rumah di kawasan Rancaekek.'
    },
    hotspots: [
      { title: 'Pusaran Corong Awan (Funnel)', description: 'Kolom rotasi angin bertekanan sangat rendah di langit.', position: [0, 2.5, 0] },
      { title: 'Atap Rumah Terbuka', description: 'Zona paling rentan terangkat oleh daya hisap angin.', position: [-2, 0.2, 1] },
      { title: 'Ruang Tengah Aman (Safe Room)', description: 'Kamar mandi / ruang dalam lantai dasar tanpa jendela untuk berlindung.', position: [2.5, -0.4, -1] }
    ]
  }
};

export const DISASTERS_DATA_EN: Record<DisasterId, DisasterInfo> = {
  EARTHQUAKE: {
    id: 'EARTHQUAKE',
    name: 'Earthquake',
    indonesianName: 'Gempa Bumi',
    subtitle: 'Crustal Shaking from Sudden Seismic Energy Release',
    tagline: 'Drop, Cover, and Hold On! Quick reflexes save lives during tremors.',
    category: 'Geologi',
    color: '#f59e0b',
    accentColor: '#fbbf24',
    ringColor: '#d97706',
    bgGradient: 'from-amber-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Earthquakes',
      summary: 'Indonesia sits at the convergence of 3 major tectonic plates: Indo-Australian, Eurasian, and Pacific.',
      points: [
        'Tectonic Plate Subduction: Converging plates accumulate elastic strain until crustal rocks rupture, releasing seismic wave energy.',
        'Active Inland Faults: Shallow crustal fault ruptures such as the Semangko Fault in Sumatra, Lembang Fault in West Java, and Palu-Koro Fault in Sulawesi.',
        'Volcanic Magma Ascent: High-pressure magma movement beneath active volcanoes triggers periodic volcanic earthquake swarms.',
        'Underground Cave Collapses or Mining Explosions (Collapse Earthquakes).'
      ]
    },
    warningSigns: {
      title: 'Warning Signs & Physical Precursors',
      summary: 'Tectonic earthquakes strike suddenly with minimal warning, yet key sensory indicators can be identified.',
      points: [
        'Deep subterranean rumbling vibrations moments prior to violent ground shaking.',
        'Ceiling lamps, fans, or hanging objects begin swinging back and forth abruptly.',
        'Restless behavior in domestic pets (cats, dogs, birds) due to high sensitivity to early P-waves (compressional waves).',
        'Minor foreshock tremors preceding the catastrophic mainshock.'
      ]
    },
    impacts: {
      title: 'Structural Damage & Hazards',
      summary: 'Widespread physical and economic damage from structural collapse and ground failure.',
      points: [
        'Structural Collapse: Multi-story buildings, schools, and non-engineered homes collapse onto occupants.',
        'Soil Liquefaction: Saturated sandy soils lose load-bearing shear strength and behave like liquid mud (as in Petobo, Palu 2018).',
        'Secondary Cascading Hazards: Electrical fires, ruptured gas lines, hillside landslides, and tsunamis if the rupture occurs under shallow seas.'
      ]
    },
    prevention: {
      title: 'Mitigation & Pre-Disaster Preparedness',
      summary: 'Proactive preparations to safeguard life and reduce vulnerability before shaking occurs.',
      points: [
        'Construct buildings adhering to seismic safety standards (reinforced concrete frames and lightweight roofs).',
        'Anchor tall bookshelves and heavy appliances securely to wall studs to prevent tipping.',
        'Keep a 72-Hour Emergency Kit (Tas Siaga Bencana) near the main entrance.',
        'Conduct regular family and classroom evacuation drills.'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Shaking)',
      summary: 'The golden survival rule indoors: DROP, COVER, HOLD ON!',
      points: [
        'DROP: Drop to your hands and knees immediately before the shaking knocks you down.',
        'COVER: Cover your head and neck under a sturdy table or desk.',
        'HOLD ON: Hold on to table legs firmly until ground shaking completely stops.',
        'NEVER use elevators! Use emergency stairs only after shaking ceases.',
        'If outdoors, stay in open areas away from high-rises, billboards, and power lines.'
      ]
    },
    evacuation: {
      title: 'Evacuation Procedures & Assembly Points',
      summary: 'Safe building egress protocols toward designated open-air assembly zones.',
      points: [
        'Wait until all shaking has stopped before attempting to exit the building.',
        'Evacuate calmly without pushing, shielding your head with a backpack or helmet.',
        'Gather at an open field free from falling roof tiles, glass shards, and power lines.',
        'Shut off the main electrical breaker and gas valve if safe to do so.'
      ]
    },
    funFact: 'Indonesia records an average of 5,000 to 10,000 earthquakes annually due to its location on the Pacific Ring of Fire.',
    famousEventIndonesia: {
      title: '2018 Palu & Donggala Earthquake',
      year: '2018',
      location: 'Central Sulawesi',
      description: 'An M 7.4 strike-slip earthquake triggering catastrophic liquefaction in Petobo and Balaroa and a localized tsunami in Palu Bay.'
    },
    hotspots: [
      { title: 'Sturdy Table Zone', description: 'Safest indoor shelter location (Drop, Cover, Hold on).', position: [0, -0.8, -1] },
      { title: 'Glass Windows', description: 'Hazardous shattered glass! Stay far away from windows during tremors.', position: [3, 1, -4] },
      { title: 'Emergency Exit', description: 'Designated evacuation route once shaking stops.', position: [-3.8, 0, -2] }
    ]
  },

  TSUNAMI: {
    id: 'TSUNAMI',
    name: 'Tsunami',
    indonesianName: 'Tsunami',
    subtitle: 'High-Velocity Oceanic Waves Triggered by Seafloor Displacement',
    tagline: 'Ocean recedes abruptly? Never watch! Run immediately to high ground!',
    category: 'Geologi',
    color: '#06b6d4',
    accentColor: '#38bdf8',
    ringColor: '#0284c7',
    bgGradient: 'from-cyan-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Tsunamis',
      summary: 'Sudden displacement of massive water volumes caused by vertical seafloor deformation.',
      points: [
        'Undersea Megathrust Earthquakes: Shallow (< 60 km) thrust fault ruptures with magnitudes exceeding M 7.0.',
        'Volcanic Island / Flank Collapses: Sudden caldera or lava dome collapse into the sea (e.g., Mount Anak Krakatoa 2018).',
        'Submarine Landslides: Massive sediment slumps cascading down oceanic trenches.',
        'Oceanic Meteorite Impacts (extremely rare).'
      ]
    },
    warningSigns: {
      title: 'Tsunami Warning Signs & 20-20-20 Rule',
      summary: 'Remember the 20-20-20 rule: 20 seconds shaking, 20 minutes to evacuate, climb 20 meters high.',
      points: [
        'Violent or prolonged earthquake shaking (> 20 seconds) felt near coastal areas.',
        'Sudden, drastic recession of seawater exposing the seabed and stranded fish.',
        'Loud roaring sound resembling a jet aircraft or explosive detonations from the open sea.',
        'Strong sulfur or pungent marine odor carried inland by rapid wind gusts.',
        'InaTEWS BMKG siren alarms sounding across coastal towers.'
      ]
    },
    impacts: {
      title: 'Tsunami Destruction & Hydraulic Inundation',
      summary: 'Immense hydraulic momentum demolishing coastal infrastructure kilometers inland.',
      points: [
        'High-Pressure Water Wall: Destroys concrete buildings, bridges, and seaport facilities.',
        'Destructive Backwash: Pulls debris, crushed vehicles, and casualties out into the open sea.',
        'Soil Salinization: Farmland and freshwater aquifers contaminated by saline seawater for years.'
      ]
    },
    prevention: {
      title: 'Coastal Protection & Natural Defenses',
      summary: 'Risk reduction through natural bio-shields and advanced early warning sensor buoys.',
      points: [
        'Preserving and planting coastal mangrove forests as natural hydrodynamic wave absorbers.',
        'Constructing seawalls and offshore breakwaters near dense coastal urban zones.',
        'Installing BMKG InaTEWS siren towers and clear vertical evacuation route markers.',
        'Transmitting indigenous disaster wisdom such as the "Smong" cultural tradition in Simeulue, Aceh.'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Tsunami Alerts)',
      summary: 'Every second counts! Execute vertical evacuation to high ground immediately.',
      points: [
        'NEVER walk to the beach to inspect receding water or collect stranded fish!',
        'Run immediately away from the coast toward nearby hills or designated tsunami evacuation towers (TES).',
        'Evacuate on foot to avoid catastrophic vehicular traffic gridlocks.',
        'If trapped with no hills nearby, climb to the 3rd or 4th floor of a reinforced concrete building.',
        'Beware of consecutive wave surges! The 2nd and 3rd waves are frequently higher than the initial crest.'
      ]
    },
    evacuation: {
      title: 'Tsunami Evacuation Procedures',
      summary: 'Autonomous evacuation principle: move to high ground immediately without waiting for confirmation.',
      points: [
        'Carry a compact 72-hour emergency bag that allows unhindered running.',
        'Assist children, elderly, and individuals with disabilities first.',
        'Remain on high ground for at least 2-3 hours until BMKG officially terminates the tsunami warning.'
      ]
    },
    funFact: 'In deep ocean water, tsunami waves travel at jet airliner speeds (700-900 km/h) with wave heights under 1 meter, passing completely unnoticed under deep-sea ships.',
    famousEventIndonesia: {
      title: '2004 Indian Ocean Tsunami (Aceh)',
      year: '2004',
      location: 'Aceh & Indian Ocean Rim',
      description: 'An M 9.1 megathrust earthquake unleashing tsunami waves up to 30 meters high, among the deadliest events in recorded modern history.'
    },
    hotspots: [
      { title: 'Open Coastal Beach', description: 'Red hazard zone! Flee the shoreline when ocean water recedes.', position: [0, 0, 4] },
      { title: 'Vertical Evacuation Hill', description: 'Safe elevation point (minimum 20 meters above sea level).', position: [-4, 3, -3] },
      { title: 'Mangrove Coastal Buffer', description: 'Natural green belt mitigating wave surge impact.', position: [3, 0.5, 1] }
    ]
  },

  VOLCANO: {
    id: 'VOLCANO',
    name: 'Volcano Eruption',
    indonesianName: 'Letusan Gunung Api',
    subtitle: 'Explosive Magma Eruptions, Toxic Gases, and Pyroclastic Flows',
    tagline: 'Pyroclastic flows travel at 200 km/h! Obey all PVMBG Hazard Zones (KRB).',
    category: 'Geologi',
    color: '#ef4444',
    accentColor: '#f87171',
    ringColor: '#dc2626',
    bgGradient: 'from-rose-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Volcanic Eruptions',
      summary: 'Dynamics of buoyant magma and high-pressure dissolved volatile gases within the crust.',
      points: [
        'Magmatic Gas Pressure Buildup: Silica-rich viscous magma traps dissolved gases until chamber pressure exceeds overlying rock strength.',
        'Magma Chamber Recharging: Influx of hot basaltic magma from the mantle triggers rapid gas exsolution and expansion.',
        'Phreatic Steam Explosions: Groundwater flash-boiling upon contact with hot magma bodies, blasting rock debris.'
      ]
    },
    warningSigns: {
      title: 'Volcanic Precursors & PVMBG Alert Levels',
      summary: 'PVMBG Alert Levels: Level I (Normal) -> Level II (Waspada) -> Level III (Siaga) -> Level IV (Awas).',
      points: [
        'Sharp increase in harmonic tremors and volcanic earthquakes detected on seismographs.',
        'Crater summit temperatures rise; mountain thermal springs dry up or boil.',
        'Wildlife flee mountain summits toward foothills due to subterranean ground heating.',
        'Dense fumarole and solfatara plumes billow high with heavy sulfur odors.',
        'Ground deformation: Inflation and swelling of the volcanic dome recorded via tiltmeters and GPS geodesy.'
      ]
    },
    impacts: {
      title: 'Volcanic Hazards & Destruction',
      summary: 'Combination of primary eruptive hazards and secondary post-eruption lahar flows.',
      points: [
        'Pyroclastic Density Currents (Wedhus Gembel): Superheated gas and rock avalanches (300°C–700°C) racing at 200 km/h.',
        'Volcanic Ashfall & Incandescent Ballistics: Causes severe respiratory trauma, roof collapse, and airspace shutdowns.',
        'Cold Lahar Mudflows: Debris floods rushing down river valleys triggered by heavy rainfall on summit ash deposits.',
        'Lethal Toxic Gases (CO, CO2, SO2, H2S) pooling in valleys and depressions near craters.'
      ]
    },
    prevention: {
      title: 'Volcanic Mitigation & Hazard Mapping',
      summary: 'Continuous PVMBG geophysical telemetry and strict zoning of Disaster Prone Areas (KRB).',
      points: [
        'Adhering to official Hazard Zone Maps (KRB III, KRB II, KRB I) designated by PVMBG.',
        'Constructing Sabo Dams across mountain river channels to capture and slow down lahar flows.',
        'Stocking N95 particulate respirators and protective goggles against abrasive ashfall.',
        'Evacuating proactively when PVMBG raises status to Level IV (Awas).'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Eruptions)',
      summary: 'Rapid evacuation beyond the designated KRB danger radius.',
      points: [
        'Evacuate immediately beyond the designated hazard radius (typically 5 to 15 km from the active vent).',
        'Wear long-sleeved clothing, pants, hats, damp N95 masks, and goggles (never wear contact lenses!).',
        'Seal doors, windows, and roof vents if sheltering temporarily from ashfall.',
        'Stay far away from river valleys originating on volcanic slopes to avoid pyroclastic surges and lahars.',
        'Sweep accumulated heavy ash off rooftops to prevent structural collapse.'
      ]
    },
    evacuation: {
      title: 'Evacuation Shelter Procedures',
      summary: 'Coordinated relocation to official emergency shelters outside the danger zone.',
      points: [
        'Follow designated BPBD evacuation routes with clear road signs.',
        'Secure essential documents, medications, and livestock if time permits.',
        'Remain in official shelters until PVMBG formally downgrades the volcanic alert level.'
      ]
    },
    funFact: 'Indonesia hosts 127 active volcanoes—the highest count in the world—with Mount Merapi in Yogyakarta ranking among the most active and densely populated.',
    famousEventIndonesia: {
      title: '2010 Mount Merapi Eruption',
      year: '2010',
      location: 'Yogyakarta & Central Java',
      description: 'A major VEI 4 explosive eruption launching pyroclastic density currents over 15 km down the Gendol River basin.'
    },
    hotspots: [
      { title: 'Lava Dome & Summit Vent', description: 'Center of explosive activity and extreme magma temperatures.', position: [0, 2.5, 0] },
      { title: 'Pyroclastic Valley Corridor', description: 'High-speed path of incandescent gas surges.', position: [2, 0.5, 1] },
      { title: 'Volcano Observatory (PGA)', description: '24/7 seismic and deformation monitoring station by PVMBG.', position: [-4, -0.5, 3] }
    ]
  },

  FLOOD: {
    id: 'FLOOD',
    name: 'Flood',
    indonesianName: 'Banjir',
    subtitle: 'Extreme River Overtopping & Surface Inundation from Watershed Stress',
    tagline: 'Floodwaters rising? Switch off the main electrical breaker and secure documents on high ground!',
    category: 'Hidrometeorologi',
    color: '#3b82f6',
    accentColor: '#60a5fa',
    ringColor: '#2563eb',
    bgGradient: 'from-blue-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Floods',
      summary: 'Inability of drainage systems and river catchments to convey excessive stormwater runoff.',
      points: [
        'Extreme Precipitation: Prolonged torrential rains driven by monsoon troughs or La Niña weather anomalies.',
        'Land Use Change & Deforestation: Loss of forest canopy in upstream watersheds, reducing soil water infiltration.',
        'River Siltation & Encroachment: Debris accumulation and sediment siltation constricting downstream urban riverbanks.',
        'Coastal Tidal Flooding (Rob): High astronomical tides inundating sinking coastal terrain (land subsidence).'
      ]
    },
    warningSigns: {
      title: 'Flood Precursors & Hydrological Warnings',
      summary: 'Key indicators to monitor before floodwaters inundate neighborhoods.',
      points: [
        'Unrelenting heavy rainfall persisting for over 3 to 6 hours in upstream catchment mountains.',
        'Rapid water level rise at river gauging stations (Alert Status: Siaga 3, 2, 1).',
        'Drainage culverts backing up with turbid, muddy brown runoff water.',
        'BMKG extreme weather warnings alerting of heavy precipitation and thunderstorm squalls.'
      ]
    },
    impacts: {
      title: 'Flood Destruction & Waterborne Diseases',
      summary: 'Extensive property devastation, electrocution risks, and post-flood epidemics.',
      points: [
        'Fatalities & Electrocution: Submerged electrical wiring and swift water currents posing lethal risks.',
        'Household & Infrastructure Damage: Silt deposition, ruined furniture, damaged appliances, and structural erosion.',
        'Epidemic Outbreaks: Leptospirosis (rat urine), cholera, dysentery, dengue fever, and fungal skin infections.'
      ]
    },
    prevention: {
      title: 'Flood Prevention & Watershed Management',
      summary: 'Structural and environmental interventions to sustain soil water absorption.',
      points: [
        'Strictly avoid dumping solid waste into rivers, canals, or municipal drainage pipes.',
        'Constructing absorption recharge wells and biopore holes in residential yards.',
        'Protecting and reforesting headwater conservation forests.',
        'Normalizing river channels and building retention reservoirs (polder systems).'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Floods)',
      summary: 'Critical measures to protect life and preserve essential assets.',
      points: [
        'IMMEDIATELY SHUT OFF THE MAIN ELECTRICAL BREAKER (MCB) to prevent lethal electrocution!',
        'Move your 72-Hour Emergency Kit and valuables to the upper floor or highest furniture level.',
        'Evacuate young children, the elderly, and disabled family members early before waters deepen.',
        'Never walk or drive through swift flood currents (15 cm of moving water can sweep an adult off balance!).',
        'Wear rubber safety boots to protect feet against submerged nails, glass shards, and debris.'
      ]
    },
    evacuation: {
      title: 'Autonomous Evacuation Protocols',
      summary: 'Navigating to designated high-ground public evacuation shelters.',
      points: [
        'Follow instructions from BPBD and community officials to reach upland relief shelters.',
        'Do not return home until floodwaters have fully receded and PLN has verified electrical safety.',
        'Drink only boiled or sealed bottled water to prevent severe gastrointestinal infections.'
      ]
    },
    funFact: 'Moving floodwaters just 30 cm deep (knee height) generate sufficient hydrodynamic buoyant force to float and sweep away most family sedans!',
    famousEventIndonesia: {
      title: 'Wasior & Sentani Flash Floods',
      year: '2010 & 2019',
      location: 'Papua & West Papua',
      description: 'Devastating flash floods carrying boulders and massive timber logs due to watershed degradation in the Cycloop Mountains.'
    },
    hotspots: [
      { title: 'Critical River Embankment', description: 'Vulnerable levee section at risk of breach during peak flows.', position: [0, 0.5, -2] },
      { title: 'Lowland Basin Settlement', description: 'Lowest geographical depression subject to rapid inundation.', position: [2, 0.2, 1] },
      { title: 'Highland Evacuation Center', description: 'Upland safe multi-purpose shelter above maximum flood levels.', position: [-3.5, 2, -2] }
    ]
  },

  LANDSLIDE: {
    id: 'LANDSLIDE',
    name: 'Landslide',
    indonesianName: 'Tanah Longsor',
    subtitle: 'Mass Downslope Movement of Soil and Rock on Steep Terrains',
    tagline: 'Tension cracks appearing on the slope? Trees tilting? Execute lateral evacuation immediately!',
    category: 'Geologi',
    color: '#84cc16',
    accentColor: '#a3e635',
    ringColor: '#65a30d',
    bgGradient: 'from-lime-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Landslides',
      summary: 'Downslope shear stress exceeding the internal shear strength of hillside soil and rock.',
      points: [
        'Prolonged Heavy Rainfall: Water saturates soil pores, increasing overburden weight while reducing frictional cohesion.',
        'Steep Slopes & Deforestation: Removal of deep-rooted trees destabilizes the topsoil layer on mountain slopes.',
        'Seismic Shaking: Earthquake tremors fracture rock joints and instantly trigger massive slope failures.',
        'Toe Excavation & Overloading: Undercutting slope bases for roads or building heavy homes without retaining structures.'
      ]
    },
    warningSigns: {
      title: 'Landslide Warning Signs & Physical Indicators',
      summary: 'Visible geological deformations occurring on hillside terrain.',
      points: [
        'Horseshoe-shaped tension cracks developing across hillside soil or residential foundations.',
        'Trees, utility poles, or fences progressively leaning downslope.',
        'Doors and window frames suddenly jamming or sticking due to structural foundation shifts.',
        'New seeps of water emerging or clear well water suddenly turning heavily silted and muddy.',
        'Subterranean rumbling sounds or crackling noises of breaking tree roots uphill.'
      ]
    },
    impacts: {
      title: 'Landslide Destruction & Velocity',
      summary: 'High-velocity debris avalanches bury settlements with zero warning time for asset recovery.',
      points: [
        'Casualties from Burial: Thousands of tons of rock and mud overwhelm buildings in seconds.',
        'Transportation Severance: Mountain highways severed by debris, cutting off supply lines to remote communities.',
        'River Damming (Quake Lakes): Landslide dams creating temporary lakes that threaten downstream flash floods upon breach.'
      ]
    },
    prevention: {
      title: 'Mitigation & Slope Stabilization',
      summary: 'Surface water drainage management and bio-engineering slope reinforcement.',
      points: [
        'Planting deep-rooted stabilizing plants such as Vetiver grass, bamboo, and banyan trees on vulnerable slopes.',
        'Constructing terracing steps and lined drainage channels to divert rainfall runoff away from slope faces.',
        'Erecting retaining walls, gabion wire cages (bronjong), and soil nails at slope toes.',
        'Refraining from constructing permanent buildings directly below steep cliffs or atop ravine edges.'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Slope Failure)',
      summary: 'Execute LATERAL EVACUATION—run perpendicular away from the debris flow path!',
      points: [
        'NEVER RUN STRAIGHT DOWNSLOPE in the direction of falling debris!',
        'Sprint LATERNALLY (perpendicular) out of the landslide corridor toward stable high ground.',
        'If escape is impossible, curl into a tight ball (fetal position) and protect your head with your arms.',
        'Beware of secondary slide surges while rainfall continues.',
        'Blow your rescue whistle if trapped under debris to signal emergency SAR teams without exhausting vocal energy.'
      ]
    },
    evacuation: {
      title: 'Hillside Evacuation Procedures',
      summary: 'Preemptive relocation to safety when heavy rains persist in high-risk zones.',
      points: [
        'Evacuate immediately if torrential rains exceed 2 consecutive hours in designated red-zone slopes.',
        'Heed wire extensometer Early Warning System (EWS) siren alarms deployed by BPBD.'
      ]
    },
    funFact: 'Vetiver grass features dense fibrous root networks growing 3 to 5 meters deep with a tensile strength comparable to mild steel wire, binding hillside soils together!',
    famousEventIndonesia: {
      title: 'Banjarnegara & Cisolok Landslides',
      year: '2014 & 2019',
      location: 'Central Java & West Java',
      description: 'Catastrophic slope failures triggered by prolonged monsoon rainfall burying dozens of hillside homes.'
    },
    hotspots: [
      { title: 'Slope Crown Tension Cracks', description: 'Initial rupture zone along the upper slip surface.', position: [0, 2.8, -2] },
      { title: 'Debris Avalanche Chute', description: 'High-velocity flow corridor of rock, mud, and timber.', position: [1, 0.5, 0] },
      { title: 'Gabion Retaining Wall', description: 'Engineered rock-filled wire cage stabilizing the slope toe.', position: [-2.5, -0.5, 2] }
    ]
  },

  TORNADO: {
    id: 'TORNADO',
    name: 'Tornado / Whirlwind',
    indonesianName: 'Puting Beliung',
    subtitle: 'Violent Rotating Columns of High-Velocity Air',
    tagline: 'Dark rotating clouds descending? Stay away from glass windows and take shelter in the innermost room!',
    category: 'Hidrometeorologi',
    color: '#8b5cf6',
    accentColor: '#a78bfa',
    ringColor: '#7c3aed',
    bgGradient: 'from-purple-950/40 via-slate-900/60 to-slate-950/90',
    causes: {
      title: 'Causes of Tornadoes & Puting Beliung',
      summary: 'Extreme temperature and pressure gradients inside convective supercell thunderstorms.',
      points: [
        'Massive Cumulonimbus (CB) Storm Clouds: Collision between warm, humid surface air and cold, dry upper atmospheric winds.',
        'Intense Thermal Updrafts: Vertical wind shear creating rotating mesocyclone funnels descending to the ground.',
        'Seasonal Transitions (Pancaroba): Most frequent during afternoon hours in open tropical plains.'
      ]
    },
    warningSigns: {
      title: 'Tornado Warning Signs & Precursors',
      summary: 'Atmospheric precursors occurring 15-30 minutes before a funnel cloud touches ground.',
      points: [
        'Oppressively hot, humid, and stagnant midday air.',
        'Towering dark anvil-shaped clouds (Cumulonimbus) developing with greenish-black bases.',
        'Tree branches violently swaying under sudden, cold shifting wind gusts.',
        'Loud roaring drone resembling a freight train or jet aircraft from the storm core.',
        'A dark condensation funnel cloud descending from the cloud base toward the ground.'
      ]
    },
    impacts: {
      title: 'Tornado Destruction & Airborne Debris',
      summary: 'Severe structural destruction concentrated along the vortex track corridor.',
      points: [
        'Roof Destruction: Metal roofing sheets and tiles lifted and shredded by extreme low-pressure suction.',
        'Uprooted Trees & Toppled Utility Poles: Severed power lines causing localized blackouts and crushing vehicles.',
        'Airborne Missile Hazards: Flying timber, galvanized iron sheets, and glass shards acting as deadly high-speed projectiles.'
      ]
    },
    prevention: {
      title: 'Severe Wind Mitigation & Reinforcement',
      summary: 'Structural roof tie-downs and vegetative hazard management.',
      points: [
        'Reinforcing roof trusses with heavy-duty anchor bolts and hurricane ties.',
        'Regularly trimming hazardous tree limbs near residential structures before transition seasons.',
        'Refraining from seeking shelter under large trees, billboards, or pedestrian bridges during storms.',
        'Monitoring BMKG severe weather radar notifications on mobile devices.'
      ]
    },
    emergencyProcedures: {
      title: 'Emergency Protocols (During Severe Whirlwinds)',
      summary: 'Seek shelter in the innermost, windowless room on the lowest floor!',
      points: [
        'STAY AWAY FROM GLASS WINDOWS! High-pressure wind bursts can shatter glass inward like shrapnel.',
        'Move to the innermost ground-floor room without windows (bathroom, interior hallway, or under a reinforced stairwell).',
        'Crouch low and protect your head and neck with a mattress, thick blanket, or your hands.',
        'If in a vehicle, exit immediately and enter a sturdy building; never stay inside a car during a tornado!',
        'If caught in an open field with no shelter, lie flat in a low-lying ditch or ravine and cover your head.'
      ]
    },
    evacuation: {
      title: 'Post-Storm Safety Protocols',
      summary: 'Caution regarding fallen electrical lines and sharp debris.',
      points: [
        'Wait until the vortex has completely passed and dissipated before exiting your shelter.',
        'Beware of downed high-voltage power lines touching wet ground—do not touch them!',
        'Wear thick-soled boots to protect against scattered nails, broken glass, and sharp metal sheets.'
      ]
    },
    funFact: 'Indonesian puting beliung whirlwinds typically last only 5 to 10 minutes, but can produce wind speeds exceeding 100 to 150 km/h across damage swaths hundreds of meters wide!',
    famousEventIndonesia: {
      title: 'Rancaekek & Sumedang Tornado',
      year: '2024',
      location: 'West Java',
      description: 'A powerful meso-scale vortex causing severe structural roof damage to industrial facilities and residential neighborhoods in Rancaekek.'
    },
    hotspots: [
      { title: 'Vortex Funnel Cloud', description: 'Low-pressure rotating vertical column of wind.', position: [0, 2.5, 0] },
      { title: 'Exposed Residential Roof', description: 'Zone most vulnerable to aerodynamic uplift suction.', position: [-2, 0.2, 1] },
      { title: 'Windowless Safe Room', description: 'Innermost interior bathroom or hallway for optimal shelter.', position: [2.5, -0.4, -1] }
    ]
  }
};

export const SIMULATION_SCENARIOS_ID: Record<DisasterId, SimulationScenario> = {
  EARTHQUAKE: {
    disasterId: 'EARTHQUAKE',
    title: 'Simulasi Gempa Bumi di Ruang Kelas',
    environmentName: 'Gedung Sekolah Bertingkat',
    briefing: 'Anda sedang belajar di dalam ruang kelas lantai 2 ketika gempa tektonik berkekuatan M 6.8 mengguncang hebat.',
    objective: 'Lakukan prosedur Drop, Cover, Hold On dan pimpin evakuasi kelas menuju titik kumpul aman.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'eq_step_1',
        instruction: 'Guncangan gempa bumi pertama kali terasa sangat kuat, lampu bergoyang, dan buku-buku berjatuhan. Apa tindakan pertama Anda?',
        options: [
          { id: 'opt_1', label: 'Berlari kencang keluar kelas menuju tangga', isCorrect: false, feedback: 'Salah! Berlari saat gempa guncang berisiko jatuh dan tertimpa puing plafon.', xp: 0 },
          { id: 'opt_2', label: 'DROP & COVER: Merunduk di bawah meja dan pegang erat kaki meja (Hold On)', isCorrect: true, feedback: 'Tepat sekali! Meja kokoh melindungi kepala dan leher Anda dari reruntuhan plafon.', xp: 25 },
          { id: 'opt_3', label: 'Berdiri di dekat jendela kaca besar untuk melihat situasi luar', isCorrect: false, feedback: 'Sangat berbahaya! Kaca jendela bisa pecah seketika dan melukai Anda.', xp: 0 }
        ]
      },
      {
        id: 'eq_step_2',
        instruction: 'Guncangan utama telah berhenti. Tercium bau gas menyengat dan ada retakan di dinding. Apa langkah Anda selanjutnya?',
        options: [
          { id: 'opt_1', label: 'Nyalakan sakelar lampu untuk melihat jalan di lorong', isCorrect: false, feedback: 'Bahaya! Percikan api dari sakelar listrik bisa memicu ledakan gas.', xp: 0 },
          { id: 'opt_2', label: 'Evakuasi tertib lewat tangga darurat sambil melindungi kepala dengan tas', isCorrect: true, feedback: 'Benar! Tangga darurat adalah jalur teraman untuk keluar gedung bertingkat.', xp: 25 },
          { id: 'opt_3', label: 'Gunakan lift agar cepat sampai ke lantai dasar', isCorrect: false, feedback: 'Jangan pernah gunakan lift saat gempa! Anda bisa terjebak jika listrik padam.', xp: 0 }
        ]
      },
      {
        id: 'eq_step_3',
        instruction: 'Anda telah berhasil keluar dari gedung sekolah. Di mana lokasi titik kumpul aman yang harus Anda tuju?',
        options: [
          { id: 'opt_1', label: 'Lapangan terbuka yang jauh dari bangunan, tiang listrik, dan pohon tinggi', isCorrect: true, feedback: 'Hebat! Lapangan terbuka bebas dari risiko tertimpa reruntuhan gempa susulan.', xp: 30 },
          { id: 'opt_2', label: 'Di bawah kanopi parkiran mobil dekat dinding sekolah', isCorrect: false, feedback: 'Bahaya! Dinding dan kanopi bisa roboh jika terjadi gempa susulan.', xp: 0 },
          { id: 'opt_3', label: 'Masuk kembali ke kelas mengambil barang yang tertinggal', isCorrect: false, feedback: 'Jangan kembali ke dalam gedung sebelum petugas BPBD menyatakan aman!', xp: 0 }
        ]
      }
    ]
  },

  TSUNAMI: {
    disasterId: 'TSUNAMI',
    title: 'Evakuasi Mandiri Pesisir Pantai Tsunami',
    environmentName: 'Pemukiman Pantai & Dermaga',
    briefing: 'Setelah gempa M 7.8 di laut dangkal, air laut di pantai tiba-tiba surut drastis hingga ratusan meter.',
    objective: 'Kenali tanda peringatan dini dan lakukan evakuasi vertikal ke bukit sebelum gelombang pertama tiba.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'ts_step_1',
        instruction: 'Air laut mendadak surut drastis dan ikan-ikan terdampar di pasir. Apa yang harus Anda lakukan?',
        options: [
          { id: 'opt_1', label: 'Segera lari secepatnya menjauhi pantai menuju perbukitan tinggi', isCorrect: true, feedback: 'Tepat! Air surut mendadak adalah tanda pasti tsunami raksasa akan tiba dalam beberapa menit.', xp: 25 },
          { id: 'opt_2', label: 'Turun ke dasar laut untuk memungut ikan segar yang terdampar', isCorrect: false, feedback: 'Sangat mematikan! Gelombang tsunami dapat datang tiba-tiba dengan kecepatan jet.', xp: 0 },
          { id: 'opt_3', label: 'Mengambil video selfie di pantai untuk media sosial', isCorrect: false, feedback: 'Jangan buang waktu berharga! Setiap detik menentukan keselamatan nyawa Anda.', xp: 0 }
        ]
      },
      {
        id: 'ts_step_2',
        instruction: 'Anda sedang berlari dan jalan raya mengalami macet total oleh kendaraan mobil. Apa keputusan terbaik Anda?',
        options: [
          { id: 'opt_1', label: 'Tetap duduk di dalam mobil menunggu kemacetan terurai', isCorrect: false, feedback: 'Salah! Mobil yang terjebak macet akan tersapu bersih oleh air tsunami.', xp: 0 },
          { id: 'opt_2', label: 'Tinggalkan kendaraan dan lanjutkan evakuasi lari dengan jalan kaki ke bukit', isCorrect: true, feedback: 'Pilihan brilian! Jalan kaki lebih gesit melewati gang sempit menuju dataran tinggi.', xp: 25 },
          { id: 'opt_3', label: 'Berbalik arah menuju pantai mencari perahu', isCorrect: false, feedback: 'Sangat berbahaya mendekati pantai saat peringatan tsunami aktif.', xp: 0 }
        ]
      },
      {
        id: 'ts_step_3',
        instruction: 'Gelombang pertama telah menerjang pantai dan air mulai surut kembali ke laut. Apakah Anda sudah boleh turun kembali ke rumah?',
        options: [
          { id: 'opt_1', label: 'Boleh, untuk segera menyelamatkan perabotan rumah', isCorrect: false, feedback: 'Bahaya besar! Gelombang tsunami biasanya terdiri dari serangkaian gelombang (bisa 3-5 kali).', xp: 0 },
          { id: 'opt_2', label: 'Tetap bertahan di tempat tinggi hingga ada pengumuman resmi BMKG bahwa ancaman tsunami berakhir', isCorrect: true, feedback: 'Sempurna! Gelombang kedua dan ketiga sering kali jauh lebih dahsyat dari gelombang pertama.', xp: 30 }
        ]
      }
    ]
  },

  VOLCANO: {
    disasterId: 'VOLCANO',
    title: 'Tanggap Darurat Erupsi Gunung Berapi',
    environmentName: 'Lereng Gunung Api Aktif',
    briefing: 'Status Gunung Api dinaikkan ke Level IV (Awas). Suara dentuman terdengar dan abu vulkanik mulai turun.',
    objective: 'Evakuasi warga keluar dari radius bahaya KRB dan lindungi pernapasan dari abu silika tajam.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'vol_step_1',
        instruction: 'Hujan abu vulkanik lebat mulai mengguyur desa di kaki gunung. Perlengkapan apa yang wajib segera dipakai?',
        options: [
          { id: 'opt_1', label: 'Masker N95 / kain basah dan kacamata pelindung (goggles)', isCorrect: true, feedback: 'Benar! Abu vulkanik adalah serpihan kaca silika tajam yang dapat merusak paru-paru dan mata.', xp: 25 },
          { id: 'opt_2', label: 'Cukup memakai kacamata hitam gaya', isCorrect: false, feedback: 'Kacamata hitam biasa tidak melindungi saluran pernapasan dari abu vulkanik tajam.', xp: 0 },
          { id: 'opt_3', label: 'Menggunakan lensa kontak (softlens)', isCorrect: false, feedback: 'Jangan pakai lensa kontak! Debu abu vulkanik yang masuk bisa menyebabkan abrasi kornea parah.', xp: 0 }
        ]
      },
      {
        id: 'vol_step_2',
        instruction: 'Terdengar suara gemuruh lahar hujan dari arah sungai lereng gunung. Jalur evakuasi mana yang harus dihindari?',
        options: [
          { id: 'opt_1', label: 'Jauhi daerah lembah dan bantaran sungai yang berhulu di puncak gunung', isCorrect: true, feedback: 'Tepat! Lembah sungai adalah jalur utama luncuran lahar dingin dan awan panas.', xp: 25 },
          { id: 'opt_2', label: 'Menyeberangi jembatan sungai untuk melihat lahar', isCorrect: false, feedback: 'Jembatan bisa hancur tersapu material batu besar yang dibawa lahar dingin.', xp: 0 }
        ]
      },
      {
        id: 'vol_step_3',
        instruction: 'Anda telah tiba di posko pengungsian di luar radius Kawasan Rawan Bencana (KRB). Tindakan apa yang paling tepat?',
        options: [
          { id: 'opt_1', label: 'Mendaftar di posko BPBD, membantu lansia/anak-anak, dan menunggu arahan resmi', isCorrect: true, feedback: 'Luar biasa! Koordinasi dengan petugas BPBD memastikan bantuan logistik dan medis terdistribusi baik.', xp: 30 },
          { id: 'opt_2', label: 'Menyebarkan kabar burung yang belum diverifikasi ke media sosial', isCorrect: false, feedback: 'Jangan menyebarkan hoaks yang dapat memicu kepanikan warga pengungsi.', xp: 0 }
        ]
      }
    ]
  },

  FLOOD: {
    disasterId: 'FLOOD',
    title: 'Simulasi Tanggap Darurat Banjir Pemukiman',
    environmentName: 'Kompleks Perumahan Dataran Rendah',
    briefing: 'Hujan lebat selama 12 jam menyebabkan tanggul sungai jebol dan air mulai memasuki rumah Anda setinggi 30 cm.',
    objective: 'Amankan instalasi listrik, selamatkan dokumen penting dalam Tas Siaga, dan evakuasi ke tempat tinggi.',
    hazardLevel: 'Siaga',
    steps: [
      {
        id: 'fl_step_1',
        instruction: 'Air banjir mulai merembes masuk ke dalam ruang tamu. Apa tindakan keselamatan paling utama?',
        options: [
          { id: 'opt_1', label: 'Matikan sakelar meteran listrik utama (MCB) rumah segera', isCorrect: true, feedback: 'Pilihan tepat! Ini mencegah risiko sengatan listrik yang mematikan di dalam air.', xp: 25 },
          { id: 'opt_2', label: 'Menyalakan pompa air listrik untuk menguras air keluar', isCorrect: false, feedback: 'Sangat berbahaya! Kabel pompa yang terendam air dapat menyebabkan korsleting dan tersetrum.', xp: 0 }
        ]
      },
      {
        id: 'fl_step_2',
        instruction: 'Ketinggian air naik cepat hingga setinggi dada (1 meter). Apa yang harus Anda lakukan?',
        options: [
          { id: 'opt_1', label: 'Bawa Tas Siaga Bencana dan evakuasi ke lantai atas atau posko dataran tinggi', isCorrect: true, feedback: 'Benar! Prioritaskan keselamatan jiwa dan dokumen penting di dalam Tas Siaga.', xp: 25 },
          { id: 'opt_2', label: 'Berenang di saluran air deras untuk bermain air', isCorrect: false, feedback: 'Bahaya! Arus air deras bisa menyeret Anda ke gorong-gorong dan banyak kuman berbahaya.', xp: 0 }
        ]
      },
      {
        id: 'fl_step_3',
        instruction: 'Saat berada di tempat pengungsian banjir, bagaimana menjaga kesehatan dari wabah penyakit?',
        options: [
          { id: 'opt_1', label: 'Hanya meminum air bersih matang/kemasan dan rutin mencuci tangan dengan sabun', isCorrect: true, feedback: 'Bagus sekali! Ini mencegah penyakit diare, kolera, dan leptospirosis.', xp: 30 },
          { id: 'opt_2', label: 'Menggunakan air genangan banjir untuk memasak mi instan', isCorrect: false, feedback: 'Air banjir mengandung banyak bakteri penyakit dan limbah beracun.', xp: 0 }
        ]
      }
    ]
  },

  LANDSLIDE: {
    disasterId: 'LANDSLIDE',
    title: 'Simulasi Evakuasi Tanah Longsor Lereng Bukit',
    environmentName: 'Perbukitan & Jalan Raya Lereng',
    briefing: 'Hujan ekstrem memicu retakan tanah di puncak bukit dan tebing mulai runtuh ke arah pemukiman.',
    objective: 'Lakukan evakuasi lateral tegak lurus menjauhi arah luncuran massa tanah longsor.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'ls_step_1',
        instruction: 'Anda melihat retakan tanah memanjang di lereng atas bukit dan pohon-pohon mulai miring. Apa artinya?',
        options: [
          { id: 'opt_1', label: 'Tanda awal bidang gelincir tanah longsor akan runtuh, segera evakuasi!', isCorrect: true, feedback: 'Tepat! Retakan mahkota bukit adalah indikator kuat massa tanah akan meluncur.', xp: 25 },
          { id: 'opt_2', label: 'Kondisi biasa, tidak perlu khawatir', isCorrect: false, feedback: 'Salah! Mengabaikan retakan lereng bisa berakibat fatal tertimbun longsor.', xp: 0 }
        ]
      },
      {
        id: 'ls_step_2',
        instruction: 'Massa tanah dan bebatuan besar meluncur deras dari atas bukit ke arah Anda. Ke mana arah Anda harus berlari?',
        options: [
          { id: 'opt_1', label: 'Lari menyamping (tegak lurus) keluar dari jalur luncuran longsor', isCorrect: true, feedback: 'Benar! Evakuasi lateral menjauhkan Anda dari koridor luncuran puing yang berkecepatan tinggi.', xp: 25 },
          { id: 'opt_2', label: 'Lari lurus ke bawah searah jatuhnya tanah', isCorrect: false, feedback: 'Salah! Kecepatan longsor lebih cepat dari lari manusia, Anda bisa tertabrak dari belakang.', xp: 0 }
        ]
      },
      {
        id: 'ls_step_3',
        instruction: 'Setelah tiba di tempat aman di posko darurat, langkah mitigasi apa untuk mencegah longsor susulan di masa depan?',
        options: [
          { id: 'opt_1', label: 'Menanam rumput Vetiver (akar wangi) dan membangun terasering serta bronjong kawat', isCorrect: true, feedback: 'Sangat cerdas! Akar rumput Vetiver mengikat tanah lereng hingga kedalaman 3-5 meter.', xp: 30 },
          { id: 'opt_2', label: 'Menebangi semua pohon di lereng bukit', isCorrect: false, feedback: 'Menebang pohon justru merusak daya ikat tanah dan memperparah longsor.', xp: 0 }
        ]
      }
    ]
  },

  TORNADO: {
    disasterId: 'TORNADO',
    title: 'Simulasi Bertahan dari Angin Puting Beliung',
    environmentName: 'Pemukiman Terbuka & Rumah Tinggal',
    briefing: 'Awan badai Cumulonimbus hitam menggulung di langit dan corong pusaran angin puting beliung mendekat.',
    objective: 'Cari ruangan aman tanpa jendela di lantai dasar dan lindungi kepala dari serpihan atap seng.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'to_step_1',
        instruction: 'Awan gelap hitam berputar di langit dan suara gemuruh keras terdengar. Ke mana tempat berlindung terbaik di dalam rumah?',
        options: [
          { id: 'opt_1', label: 'Masuk ke ruangan paling dalam di lantai dasar tanpa jendela (kamar mandi/lorong tengah)', isCorrect: true, feedback: 'Tepat sekali! Ruangan tengah terlindung oleh dinding terluar dari serpihan seng dan kayu yang terbang.', xp: 25 },
          { id: 'opt_2', label: 'Berdiri di dekat jendela kaca besar untuk mengambil foto', isCorrect: false, feedback: 'Sangat berbahaya! Kaca jendela bisa pecah melesat terkena hantaman angin kencang.', xp: 0 }
        ]
      },
      {
        id: 'to_step_2',
        instruction: 'Angin kencang berputar menerjang atap rumah Anda hingga berderak hebat. Bagaimana posisi tubuh yang benar?',
        options: [
          { id: 'opt_1', label: 'Merunduk di lantai bawah meja kokoh, lindungi kepala dan leher dengan tangan/bantal', isCorrect: true, feedback: 'Benar! Posisi merunduk melindungi organ vital dari reruntuhan genteng dan seng.', xp: 25 },
          { id: 'opt_2', label: 'Berlari keluar rumah ke halaman terbuka saat angin berputar kencang', isCorrect: false, feedback: 'Bahaya! Di luar ruangan Anda bisa tertabrak seng terbang atau tertimpa pohon tumbang.', xp: 0 }
        ]
      },
      {
        id: 'to_step_3',
        instruction: 'Pusaran angin puting beliung telah berlalu. Apa bahaya sekunder yang harus diwaspadai di luar rumah?',
        options: [
          { id: 'opt_1', label: 'Waspadai kabel listrik yang terputus menjuntai dan gunakan alas kaki tebal dari paku berserakan', isCorrect: true, feedback: 'Hebat! Kabel listrik putus yang menyentuh tanah berair sangat mematikan.', xp: 30 },
          { id: 'opt_2', label: 'Langsung memegang kabel listrik yang putus untuk menyingkirkannya', isCorrect: false, feedback: 'Jangan pernah sentuh kabel listrik yang putus! Bisa berakibat fatal tersetrum.', xp: 0 }
        ]
      }
    ]
  }
};

export const SIMULATION_SCENARIOS_EN: Record<DisasterId, SimulationScenario> = {
  EARTHQUAKE: {
    disasterId: 'EARTHQUAKE',
    title: 'Classroom Earthquake Simulation',
    environmentName: 'Multi-Story School Building',
    briefing: 'You are studying on the 2nd floor when an M 6.8 tectonic earthquake violently strikes the building.',
    objective: 'Execute the Drop, Cover, Hold On protocol and guide classroom evacuation toward the safe assembly point.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'eq_step_1',
        instruction: 'Violent ground shaking begins, light fixtures swing wildly, and books fall. What is your immediate protective action?',
        options: [
          { id: 'opt_1', label: 'Run in panic out of the classroom toward stairwells', isCorrect: false, feedback: 'Incorrect! Running during active tremors leads to falling and head trauma from ceiling debris.', xp: 0 },
          { id: 'opt_2', label: 'DROP & COVER: Drop under a sturdy desk and hold on firmly (Hold On)', isCorrect: true, feedback: 'Excellent! Sturdy desks shield your head and neck from falling ceiling fixtures and debris.', xp: 25 },
          { id: 'opt_3', label: 'Stand near large glass windows to inspect the outside', isCorrect: false, feedback: 'Extremely hazardous! Shattering window glass causes severe lacerations.', xp: 0 }
        ]
      },
      {
        id: 'eq_step_2',
        instruction: 'Main ground shaking has stopped. You smell gas and notice wall cracks. What is your next protocol?',
        options: [
          { id: 'opt_1', label: 'Flip on light switches to illuminate the dark hallway', isCorrect: false, feedback: 'Hazardous! Electrical sparks from switches can ignite accumulated gas leaks.', xp: 0 },
          { id: 'opt_2', label: 'Evacuate orderly down emergency stairwells while shielding your head with a bag', isCorrect: true, feedback: 'Correct! Emergency stairwells offer structural reinforcement for building egress.', xp: 25 },
          { id: 'opt_3', label: 'Use the elevator for rapid descent to the ground floor', isCorrect: false, feedback: 'Never use elevators during earthquakes! You will become trapped if power fails.', xp: 0 }
        ]
      },
      {
        id: 'eq_step_3',
        instruction: 'You have safely evacuated the building. Where is the designated assembly location?',
        options: [
          { id: 'opt_1', label: 'Open field far away from buildings, power lines, and tall trees', isCorrect: true, feedback: 'Great job! Open fields are safe from falling facade tiles during aftershocks.', xp: 30 },
          { id: 'opt_2', label: 'Under the parking garage canopy next to the building wall', isCorrect: false, feedback: 'Hazardous! Overhanging canopies can collapse during aftershocks.', xp: 0 },
          { id: 'opt_3', label: 'Re-enter the building to fetch forgotten belongings', isCorrect: false, feedback: 'Never re-enter until civil defense or BPBD authorities declare the building safe!', xp: 0 }
        ]
      }
    ]
  },

  TSUNAMI: {
    disasterId: 'TSUNAMI',
    title: 'Coastal Tsunami Self-Evacuation',
    environmentName: 'Coastal Beach & Harbor Settlement',
    briefing: 'Following an M 7.8 offshore earthquake, coastal sea levels recede hundreds of meters suddenly.',
    objective: 'Recognize natural early warning signs and execute vertical evacuation to highland shelters before the wave arrives.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'ts_step_1',
        instruction: 'Seawater recedes abruptly exposing stranded fish on the seafloor. What must you do immediately?',
        options: [
          { id: 'opt_1', label: 'Run immediately away from the coast toward nearby hills and high ground', isCorrect: true, feedback: 'Correct! Sudden ocean recession is a hydraulic sign of an approaching catastrophic tsunami crest.', xp: 25 },
          { id: 'opt_2', label: 'Walk onto the exposed seabed to collect stranded fish', isCorrect: false, feedback: 'Lethal mistake! The tsunami wave surges in with high velocity and momentum.', xp: 0 },
          { id: 'opt_3', label: 'Record video selfies on the beach for social media', isCorrect: false, feedback: 'Do not waste precious seconds! Every second determines survival.', xp: 0 }
        ]
      },
      {
        id: 'ts_step_2',
        instruction: 'While evacuating, traffic gridlock completely blocks the road with stalled cars. What is your best decision?',
        options: [
          { id: 'opt_1', label: 'Remain seated in the car waiting for traffic to clear', isCorrect: false, feedback: 'Fatal! Trapped vehicles are swept away and crushed by tsunami surges.', xp: 0 },
          { id: 'opt_2', label: 'Abandon the vehicle and continue evacuating on foot up the hill', isCorrect: true, feedback: 'Brilliant decision! Foot evacuation bypasses traffic jams to reach safe elevation.', xp: 25 },
          { id: 'opt_3', label: 'Turn around back toward the coast to find a boat', isCorrect: false, feedback: 'Extremely dangerous to approach the shoreline during active tsunami alerts.', xp: 0 }
        ]
      },
      {
        id: 'ts_step_3',
        instruction: 'The initial wave surge has receded back into the sea. Is it safe to return to coastal homes?',
        options: [
          { id: 'opt_1', label: 'Yes, to salvage household items quickly', isCorrect: false, feedback: 'High hazard! Tsunamis consist of multiple wave crests arriving over several hours.', xp: 0 },
          { id: 'opt_2', label: 'Remain on high ground until BMKG officially terminates the tsunami warning', isCorrect: true, feedback: 'Perfect! Subsequent waves (2nd and 3rd) are frequently more destructive than the first.', xp: 30 }
        ]
      }
    ]
  },

  VOLCANO: {
    disasterId: 'VOLCANO',
    title: 'Volcanic Eruption Emergency Response',
    environmentName: 'Active Volcanic Foothills',
    briefing: 'Volcanic alert level is raised to Level IV (Awas). Explosive rumblings echo and ashfall begins.',
    objective: 'Evacuate beyond the Hazard Zone (KRB) radius and protect respiratory systems from abrasive silica ash.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'vol_step_1',
        instruction: 'Heavy volcanic ashfall begins blanketing the village. What personal protective equipment is essential?',
        options: [
          { id: 'opt_1', label: 'N95 particulate respirator (or damp cloth) and airtight protective goggles', isCorrect: true, feedback: 'Correct! Volcanic ash consists of abrasive silica shards damaging lung alveoli and eyes.', xp: 25 },
          { id: 'opt_2', label: 'Standard fashion sunglasses only', isCorrect: false, feedback: 'Regular sunglasses do not seal respiratory passages against fine particulate matter.', xp: 0 },
          { id: 'opt_3', label: 'Wearing contact lenses', isCorrect: false, feedback: 'Never wear contact lenses! Trapped silica dust causes severe corneal abrasions.', xp: 0 }
        ]
      },
      {
        id: 'vol_step_2',
        instruction: 'Lahar flood rumblings are heard from river channels upstream. Which evacuation path must be avoided?',
        options: [
          { id: 'opt_1', label: 'Stay far away from river valleys originating from the volcanic summit', isCorrect: true, feedback: 'Correct! Riverbeds are natural flow channels for pyroclastic surges and cold lahars.', xp: 25 },
          { id: 'opt_2', label: 'Cross the river bridge to inspect the mudflow', isCorrect: false, feedback: 'Bridges can collapse under the immense weight of boulder-laden lahar flows.', xp: 0 }
        ]
      },
      {
        id: 'vol_step_3',
        instruction: 'You have arrived at the official evacuation shelter outside the KRB danger zone. What is the best action?',
        options: [
          { id: 'opt_1', label: 'Register with BPBD officials, assist vulnerable evacuees, and await official updates', isCorrect: true, feedback: 'Outstanding! Official coordination ensures efficient medical and relief distribution.', xp: 30 },
          { id: 'opt_2', label: 'Broadcast unverified rumors on social media', isCorrect: false, feedback: 'Do not propagate panic-inducing hoaxes among displaced families.', xp: 0 }
        ]
      }
    ]
  },

  FLOOD: {
    disasterId: 'FLOOD',
    title: 'Residential Flood Emergency Response',
    environmentName: 'Lowland Residential Basin',
    briefing: '12 hours of extreme rainfall causes a river embankment breach, and water enters your home 30 cm deep.',
    objective: 'Safeguard electrical systems, protect vital documents, and navigate to high-ground relief centers.',
    hazardLevel: 'Siaga',
    steps: [
      {
        id: 'fl_step_1',
        instruction: 'Floodwaters begin seeping into your living room. What is the most critical initial safety measure?',
        options: [
          { id: 'opt_1', label: 'Shut off the main electrical breaker (MCB) immediately', isCorrect: true, feedback: 'Correct decision! Eliminates lethal electrocution risks through submerged wiring.', xp: 25 },
          { id: 'opt_2', label: 'Turn on electric sump pumps while standing in water', isCorrect: false, feedback: 'Hazardous! Submerged power cords risk lethal electrocution.', xp: 0 }
        ]
      },
      {
        id: 'fl_step_2',
        instruction: 'Water rises rapidly to chest height (1 meter). What is your evacuation action?',
        options: [
          { id: 'opt_1', label: 'Grab your 72-Hour Emergency Kit and evacuate to upper floors or upland shelters', isCorrect: true, feedback: 'Correct! Prioritize human life and waterproofed vital documents.', xp: 25 },
          { id: 'opt_2', label: 'Swim in swift drainage currents for recreation', isCorrect: false, feedback: 'Dangerous! Fast currents drag people into submerged culverts and harbor pathogens.', xp: 0 }
        ]
      },
      {
        id: 'fl_step_3',
        instruction: 'While staying at an emergency flood shelter, how do you prevent waterborne disease outbreaks?',
        options: [
          { id: 'opt_1', label: 'Drink only boiled or bottled water and wash hands regularly with soap', isCorrect: true, feedback: 'Excellent! Prevents diarrhea, cholera, and leptospirosis infections.', xp: 30 },
          { id: 'opt_2', label: 'Use stagnant floodwater to cook instant noodles', isCorrect: false, feedback: 'Floodwaters are heavily contaminated with rodent urine and toxic runoff.', xp: 0 }
        ]
      }
    ]
  },

  LANDSLIDE: {
    disasterId: 'LANDSLIDE',
    title: 'Hillside Landslide Evacuation Simulation',
    environmentName: 'Steep Hillside & Mountain Highway',
    briefing: 'Extreme monsoon rains trigger crown tension cracks atop the hill, and soil mass begins collapsing.',
    objective: 'Execute lateral perpendicular evacuation out of the debris flow trajectory.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'ls_step_1',
        instruction: 'You notice wide tension cracks across the upper hillside and trees tilting downslope. What does this signify?',
        options: [
          { id: 'opt_1', label: 'Active failure of the slope shear surface; evacuate immediately!', isCorrect: true, feedback: 'Correct! Tension cracks are strong precursors of imminent catastrophic collapse.', xp: 25 },
          { id: 'opt_2', label: 'Normal terrain settling; ignore it', isCorrect: false, feedback: 'Fatal error! Ignoring tension cracks leads to being trapped under landslides.', xp: 0 }
        ]
      },
      {
        id: 'ls_step_2',
        instruction: 'Soil mass and boulders avalanche rapidly down the slope toward you. In which trajectory should you run?',
        options: [
          { id: 'opt_1', label: 'Sprint laterally (perpendicular) out of the debris flow corridor', isCorrect: true, feedback: 'Correct! Lateral evacuation moves you out of the high-velocity impact path.', xp: 25 },
          { id: 'opt_2', label: 'Run straight downhill along the debris fall path', isCorrect: false, feedback: 'Incorrect! Debris flow velocity exceeds human sprinting speed.', xp: 0 }
        ]
      },
      {
        id: 'ls_step_3',
        instruction: 'After reaching safety at the emergency post, what long-term mitigation stabilizes such slopes?',
        options: [
          { id: 'opt_1', label: 'Planting deep-rooted Vetiver grass and constructing terraced gabion retaining walls', isCorrect: true, feedback: 'Brilliant! Vetiver root networks bind hillside soils 3-5 meters deep.', xp: 30 },
          { id: 'opt_2', label: 'Clearing all hillside vegetation completely', isCorrect: false, feedback: 'Clearing vegetation removes root cohesion and worsens slope failure.', xp: 0 }
        ]
      }
    ]
  },

  TORNADO: {
    disasterId: 'TORNADO',
    title: 'Tornado & Severe Whirlwind Survival',
    environmentName: 'Open Residential Neighborhood',
    briefing: 'A dark rotating Cumulonimbus storm cloud descends and a destructive wind vortex approaches.',
    objective: 'Seek shelter in the innermost ground-floor room without windows and protect against airborne debris.',
    hazardLevel: 'Awas',
    steps: [
      {
        id: 'to_step_1',
        instruction: 'Dark funnel clouds rotate overhead with a deafening roar. Where is the safest indoor shelter?',
        options: [
          { id: 'opt_1', label: 'Innermost ground-floor room without windows (bathroom, interior hallway, under stairs)', isCorrect: true, feedback: 'Correct! Interior walls protect against flying sheet metal and projectile debris.', xp: 25 },
          { id: 'opt_2', label: 'Stand near large exterior glass windows to film photos', isCorrect: false, feedback: 'Extremely dangerous! High-pressure winds shatter glass inward like shrapnel.', xp: 0 }
        ]
      },
      {
        id: 'to_step_2',
        instruction: 'Violent winds batter your roof trusses. What is the correct protective body posture?',
        options: [
          { id: 'opt_1', label: 'Crouch low under a sturdy table, protecting head and neck with a mattress or arms', isCorrect: true, feedback: 'Correct! Crouching low protects vital organs from roof collapse and flying tiles.', xp: 25 },
          { id: 'opt_2', label: 'Run outside into the open yard during peak vortex winds', isCorrect: false, feedback: 'Hazardous! Outdoors you face high risks of projectile impact and falling trees.', xp: 0 }
        ]
      },
      {
        id: 'to_step_3',
        instruction: 'The whirlwind vortex has dissipated. What secondary hazards must you watch for outdoors?',
        options: [
          { id: 'opt_1', label: 'Downed electrical power lines and scattered roofing nails/glass shards', isCorrect: true, feedback: 'Great job! Severed power lines touching wet ground pose lethal shock hazards.', xp: 30 },
          { id: 'opt_2', label: 'Directly handling severed power lines to clear walkways', isCorrect: false, feedback: 'Never touch severed utility wires! Lethal electrical currents may persist.', xp: 0 }
        ]
      }
    ]
  }
};

// Helper getter functions
export const getDisastersData = (lang: Language = 'id'): Record<DisasterId, DisasterInfo> => {
  return lang === 'en' ? DISASTERS_DATA_EN : DISASTERS_DATA_ID;
};

export const getDisaster = (id: DisasterId, lang: Language = 'id'): DisasterInfo => {
  const data = getDisastersData(lang);
  return data[id] || DISASTERS_DATA_ID[id];
};

export const getSimulationScenarios = (lang: Language = 'id'): Record<DisasterId, SimulationScenario> => {
  return lang === 'en' ? SIMULATION_SCENARIOS_EN : SIMULATION_SCENARIOS_ID;
};

export const getSimulationScenario = (id: DisasterId, lang: Language = 'id'): SimulationScenario => {
  const data = getSimulationScenarios(lang);
  return data[id] || SIMULATION_SCENARIOS_ID[id];
};

// Default exports for backward compatibility
export const DISASTERS_DATA = DISASTERS_DATA_ID;
export const SIMULATION_SCENARIOS = SIMULATION_SCENARIOS_ID;
