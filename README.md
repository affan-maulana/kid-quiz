# 🎯 Kuis Interaktif - Interactive Quiz for Kids

Aplikasi kuis pilihan ganda yang menyenangkan untuk anak usia 5-10 tahun dengan soal matematika dan science. Dengan 10 soal per sesi dan 3 pilihan jawaban, aplikasi ini dirancang khusus untuk membantu anak-anak belajar sambil bermain.

## ✨ Fitur

- 🧮 **Soal Matematika**: Penjumlahan, pengurangan dengan berbagai tingkat kesulitan
- 🔬 **Soal Science**: Pengetahuan umum sains untuk anak-anak
- 📱 **Responsif**: Dapat digunakan di desktop, tablet, dan smartphone
- ⏱️ **Timer**: Pelacakan waktu penyelesaian kuis
- 🏆 **Scoring System**: Sistem penilaian dengan persentase dan feedback
- 🎨 **UI Menarik**: Desain colorful dan child-friendly

## 🎮 Level Permainan

- **Level 1**: Penjumlahan dasar (1-10)
- **Level 2**: Penjumlahan & pengurangan (1-10) 
- **Level 3**: Penjumlahan & pengurangan (1-30)
- **Level 4**: Operasi 3 angka (1-10)
- **Level 5**: Penjumlahan 3 angka (1-30)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone https://github.com/affan-maulana/kid-quiz.git
cd kid-quiz
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

### 🌐 Network Access (untuk device lain)

Untuk mengakses dari device lain dalam jaringan yang sama:

```bash
npm run dev -- -H 0.0.0.0 -p 3000
```

Cek IP address lokal:
```bash
ifconfig | grep inet
```

Akses dari device lain: `http://192.168.x.x:3000`

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Language**: TypeScript
- **Time Handling**: Day.js

## 📁 Struktur Project

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Halaman utama
│   ├── menu/           # Pilihan kategori
│   ├── level/          # Pilihan level
│   ├── quiz/           # Halaman kuis
│   └── result/         # Hasil kuis
├── components/         # React components
│   ├── Intro/         
│   ├── Menu/          
│   ├── Level/         
│   ├── Quiz/          
│   └── Result/        
├── service/           # Business logic
│   └── generateQuestions.ts
└── store/             # Zustand store
    └── quizStore.ts
```

## 🎯 Cara Bermain

1. **Intro**: Tekan tombol "Play" untuk mulai
2. **Menu**: Pilih kategori (Math/Science) 
3. **Level**: Pilih tingkat kesulitan (1-5)
4. **Quiz**: Jawab 10 soal dengan 3 pilihan
5. **Result**: Lihat skor dan waktu penyelesaian

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Affan Maulana - [@affan-maulana](https://github.com/affan-maulana)

Project Link: [https://github.com/affan-maulana/kid-quiz](https://github.com/affan-maulana/kid-quiz)
