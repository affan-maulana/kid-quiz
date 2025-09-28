import React from "react";

interface LevelPageProps {
  onSelectLevel?: (level: number) => void;
}

const levels = [1, 2, 3, 4, 5];

const handleSelectLevel = (level: number, onSelectLevel?: (level: number) => void) => {
  //remove from localStorage
  localStorage.removeItem("selectedLevel");
  localStorage.setItem("selectedLevel", level.toString());
  onSelectLevel?.(level);
};

const LevelPage: React.FC<LevelPageProps> = ({ onSelectLevel }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4 text-center drop-shadow-lg">Pilih Level</h2>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {levels.map((level) => (
          <button
            key={level}
            className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white shadow-lg text-blue-700 text-2xl md:text-4xl font-bold flex items-center justify-center border-2 border-transparent hover:border-blue-400 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={() => handleSelectLevel(level, onSelectLevel)}
            aria-label={`Pilih level ${level}`}
          >
            {level}
          </button>
        ))}
      </div>
    </main>
  );
};

export default LevelPage;