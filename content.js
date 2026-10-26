/* ============================================================
   SEMUA ISI WEBSITE ADA DI FILE INI. Edit teks & nama foto di sini.
   Boleh pakai <br> (baris baru) dan <em>kata</em> (huruf miring kuning).
   Foto: taruh di folder assets/, lalu tulis path-nya, mis. "assets/foto-saya.jpg"
   Foto kosong ("") atau belum ada = tampil gradient gunung.
   ============================================================ */
const SITE = {
  title: "Merbabu Teaches Silence — jurnal pendakian",
  description: "Jurnal pendakian dan perjalanan.",
  owner: "Nama Kamu",          // tampil di footer
  year: "2026",
  defaultTab: "adventure",      // journey | adventure | healing

  // Warna tema (hex). Ganti untuk mengubah suasana seluruh website.
  theme: { sky: "#5da9f0", forest: "#17332a", moss: "#5f9444", sun: "#ffd84d" },

  nav: {
    logo: "▲ Arsip Gunung",
    chip: "3145 mdpl",
    tabs: { journey: "Journey", adventure: "Adventure", healing: "Healing" }
  },

  hero: {
    title: ["MER", "BABU"],     // judul raksasa, tiap item = 1 baris
    kicker: "Makan, tidur, puncak.",
    headline: "Mengejar ketinggian,<br><em>menemukan diri</em> di sepanjang jalur.",
    button: "Merbabu mengajarkan hening",
    floaters: ["Heal your soul.", "Recharge energy", "Untold story"]
  },

  adventure: {
    heading: "Empat puncak, satu jurnal",
    // Tambah gunung baru = salin satu blok { ... } lalu ubah isinya.
    mountains: [
      { name: "Merbabu",    meta: "3145 mdpl · via Suwanting · Magelang", text: "Sabana hijau yang panjang. Tempat paling pas untuk berbaring dan tidak berpikir apa-apa.", photo: "assets/merbabu-1.jpg", tall: true },
      { name: "Cikuray",    meta: "2821 mdpl · via Tapak Gerot",          text: "Tanjakan tanpa ampun, lalu kabut yang menelan semua suara.", photo: "assets/cikuray-1.jpg" },
      { name: "Ciremai",    meta: "3078 mdpl · Jawa Barat",               text: "Berenam rebahan di tepi kawah. Tidak ada yang mau bangun.", photo: "assets/ciremai-1.jpg" },
      { name: "Papandayan", meta: "2665 mdpl · Garut",                    text: "Hutan mati dan uap belerang. Kita mulai dari nol, ya.", photo: "assets/papandayan-1.jpg" }
    ]
  },

  journey: {
    heading: "Majalengka → Yogyakarta",
    km: "330",
    kmText: "kilometer, satu motor,<br>satu malam panjang",
    stops: [
      { name: "Majalengka",     text: "titik berangkat" },
      { name: "Kota Banjar",    text: "gapura malam hari" },
      { name: "Kulon Progo",    text: "terowongan bandara" },
      { name: "Tugu Yogyakarta", text: "foto bersama, 900 m dari Malioboro" }
    ],
    // wide: true = foto melebar 2 kolom
    photos: [
      { src: "assets/touring-1.jpg", alt: "Tugu Yogyakarta saat senja", wide: true },
      { src: "assets/touring-2.jpg", alt: "Rombongan touring" },
      { src: "assets/touring-3.jpg", alt: "Motor di terowongan" }
    ]
  },

  healing: {
    quote: "Adakalanya hidup juga butuh <em>healing.</em>",
    lead: "Tiga menit di sini, sebelum lanjut.",
    hint: "Tekan mulai, lalu ikuti lingkarannya.",
    startBtn: "Mulai napas",
    stopBtn: "Berhenti",
    doneText: "Bagus. Lanjutkan perjalananmu.",
    note: "Healing bukan tentang melarikan diri, tapi memberi ruang bagi jiwa untuk bernapas lagi. Dan kadang, hanya gunung yang bisa mengajarkannya."
  },

  dump: {
    heading: "Photo dump belakangan ini",
    photos: [
      { src: "assets/dump-1.jpg", wide: true },
      { src: "assets/dump-2.jpg" },
      { src: "assets/dump-3.jpg" },
      { src: "assets/dump-4.jpg" },
      { src: "assets/dump-5.jpg", wide: true }
    ]
  },

  footer: { big: "SLOW LIVING,<br>SLOW HIKING." }
};
