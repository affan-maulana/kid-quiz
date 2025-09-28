import React from "react";

export type Category = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  {
    key: "math",
    title: "Math",
    description: "Tantangan logika, hitung cepat, dan soal cerita.",
    icon: (
      <span className="inline-block text-3xl">➗</span>
    ),
  },
  {
    key: "english",
    title: "English",
    description: "Vocabulary, grammar, dan reading comprehension.",
    icon: (
      <span className="inline-block text-3xl">🔤</span>
    ),
  },
  {
    key: "science",
    title: "Science",
    description: "Pengetahuan alam, eksperimen, dan fakta unik.",
    icon: (
      <span className="inline-block text-3xl">🔬</span>
    ),
  },
];

interface MenuPageProps {
  onSelectCategory?: (key: string) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onSelectCategory }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4 text-center drop-shadow-lg">Pilih Kategori</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className="flex flex-col items-center p-6 rounded-3xl bg-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-transparent hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => onSelectCategory?.(cat.key)}
            aria-label={`Pilih kategori ${cat.title}`}
          >
            <div className="mb-4">{cat.icon}</div>
            <div className="text-xl font-semibold text-blue-700 mb-2">{cat.title}</div>
            <div className="text-base text-blue-500">{cat.description}</div>
          </button>
        ))}
      </div>
    </main>
  );
};

export default MenuPage;
