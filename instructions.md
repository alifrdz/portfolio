PROJECT RULES: ALIF PORTFOLIO (100% DESIGN ACCURACY)
1. CORE PRINCIPLE
Segala implementasi kode WAJIB mengikuti desain referensi tanpa modifikasi improvisasi.
Metode pembangunan: Slide-per-slide (Section-based).
Jangan lanjut ke slide berikutnya sebelum user memberikan konfirmasi "OK/Lanjut".
2. DESIGN TOKENS (CSS Standard)
Font Family: 'Poppins', sans-serif (Weights: 400, 500, 600, 700).
Primary Color (Blue): #3B82F6 (Vibrant Blue sesuai gambar).
Background Color: #FFFFFF (White) untuk section terang, #000000 (Black) untuk section gelap.
Text Color: #000000 (Black) untuk bg putih, #FFFFFF (White) untuk bg gelap/biru.
Badges & UI Elements: Menggunakan warna Biru (#3B82F6) atau Gelap (#1E293B) dengan teks kontras.
3. TECHNICAL STACK
Framework: Next.js (App Router).
Styling: Tailwind CSS.
Language: TypeScript (Strict Mode).
Icons: Lucide React.
4. UI/UX BEHAVIOR
Setiap slide/section harus memiliki tinggi minimal min-h-screen (100vh).
Gunakan Flexbox atau Grid untuk centering konten secara presisi di tengah layar.
Responsivitas: Mobile-first. Elemen harus tetap di tengah (centered) di semua ukuran layar.
Karakter & Ilustrasi: Tidak dibangun dengan kode, melainkan menggunakan asset image (.png/.jpg) yang dimasukkan via tag Image Next.js.
5. FOLDER STRUCTURE
Komponen Slide: src/components/slides/
Komponen Global: src/components/global/
Aset Gambar: public/assets/
