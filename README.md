# YT Downloader Hub — Vercel

Antarmuka web responsif untuk memilih SnapYT atau SSYouTube. Aplikasi ini **tidak melakukan scraping, tidak menyediakan endpoint pengunduhan sendiri, dan tidak menyimpan video**. Setelah tautan divalidasi, situs layanan eksternal dibuka di tab baru; tautan juga dicoba disalin ke clipboard agar mudah ditempel di sana.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Upload seluruh isi folder ke repository GitHub.
3. Di Vercel pilih **Add New → Project**, impor repository tersebut.
4. Framework Preset: **Other**. Build Command dan Output Directory bisa dikosongkan.
5. Klik Deploy.

## File
- `index.html` — antarmuka.
- `style.css` — tampilan responsif + tema terang.
- `app.js` — validasi URL dan pemilihan layanan.
- `vercel.json` — konfigurasi routing Vercel.

## Catatan
Gunakan hanya untuk video yang kamu miliki, domain publik, atau yang penggunaannya telah diizinkan pemegang hak. Hormati hak cipta serta ketentuan YouTube dan layanan pihak ketiga. SnapYT dan SSYouTube adalah layanan eksternal yang tidak berafiliasi dengan aplikasi ini.
