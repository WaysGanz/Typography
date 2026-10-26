# Template Jurnal Pendakian

Website statis, tanpa build step.

## Cara edit
- Semua teks, nama gunung, rute, warna tema, dan path foto ada di **content.js**.
- Ganti foto: taruh file di folder **assets/**, lalu samakan nama file di content.js.
- Tambah gunung/foto: salin satu blok `{ ... }` di daftar, ubah isinya.
- Ganti tampilan (ukuran, font): **style.css**.

## Cek di komputer
Buka index.html langsung di browser, atau jalankan `npx serve`.

## Deploy
Push ke GitHub, lalu import repo di Vercel (Framework: Other, tanpa build command).
Setiap commit baru otomatis ter-deploy.
