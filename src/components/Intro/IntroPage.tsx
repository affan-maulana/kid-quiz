import React from "react";

interface IntroPageProps {
  onPlay?: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onPlay }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="max-w-lg w-full flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6 drop-shadow-lg">
          Kuis Interaktif
        </h1>
        <p className="text-lg md:text-2xl text-blue-600 mb-10 font-medium">
          Uji pengetahuanmu dengan kuis seru dan interaktif! Pilih kategori, level, dan buktikan kemampuanmu.
        </p>
        <button
          className="mt-4 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={onPlay}
          aria-label="Mulai Kuis"
        >
          Play
        </button>
      </div>
    </main>
  );
};

export default IntroPage;
