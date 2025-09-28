import React from "react";

interface ResultPageProps {
  totalCorrect: number;
  totalQuestions: number;
  totalTime: string;
  onRetry: () => void;
  onBack: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({
  totalCorrect,
  totalQuestions,
  totalTime,
  onRetry,
  onBack,
}) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 text-center drop-shadow">
          Hasil Kuis
        </h2>
        <div className="text-5xl md:text-7xl font-extrabold text-blue-600 mb-2 mt-2">
          {totalQuestions > 0
            ? Math.round((totalCorrect / totalQuestions) * 100)
            : 0}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="text-xl md:text-2xl font-semibold text-blue-800">
            Benar: {totalCorrect} / {totalQuestions}
          </div>
          <div className="text-xl md:text-2xl font-semibold text-blue-600">
            Waktu: {totalTime}
          </div>
        </div>
        <div className="flex gap-4 w-full justify-center">
          <button
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={onRetry}
          >
            Ulangi
          </button>
          <button
            className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-blue-700 text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
            onClick={onBack}
          >
            Kembali ke Menu
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
