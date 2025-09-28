import React, { useState } from "react";
import { QuizQuestion } from "@/service/generateQuestions";

interface QuizPageProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (idx: number) => void;
  onNext: () => void;
  timer: string;
  onResetSelected?: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  timer,
  onResetSelected,
}) => {
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [allowRetry, setAllowRetry] = useState(false);
  const [showCorrectModal, setShowCorrectModal] = useState(false);

  // Tampilkan modal jika jawaban salah dan sudah memilih
  // React.useEffect(() => {
  //   if (selectedAnswer !== null && isCorrect === false) {
  //     setShowWrongModal(true);
  //   } else if (selectedAnswer !== null && isCorrect === true) {
  //     setShowCorrectModal(true);
  //   }
  // }, [selectedAnswer, isCorrect]);

  // Handler untuk tombol "Pilih Jawaban Lain"
  const handleRetry = () => {
    setShowWrongModal(false);
    setAllowRetry(true);
    // Reset selected answer di parent agar tidak ada highlight merah
    if (typeof onResetSelected === 'function') {
      onResetSelected();
    }
  };

  // Handler untuk tombol "Lanjut" (modal salah)
  const handleNext = () => {
    setShowWrongModal(false);
    setAllowRetry(false);
    onNext();
  };

  // Handler untuk tombol Next (modal benar)
  const handleNextCorrect = () => {
    setShowCorrectModal(false);
    onNext();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-8">
      <div className="flex w-full max-w-2xl justify-between items-center mb-6">
        <span className="text-blue-700 font-semibold text-lg">Soal {questionIndex + 1} / {totalQuestions}</span>
        <span className="text-blue-600 font-mono text-lg">{timer}</span>
      </div>
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 w-full text-center text-blue-800 text-xl md:text-2xl font-semibold min-h-[120px] flex items-center justify-center"> */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 w-full text-center text-blue-800 font-semibold min-h-[120px] flex items-center justify-center text-4xl sm:text-xl md:text-4xl lg:text-5xl">
          {question.question}
        </div>
        <div className="flex flex-col gap-4 w-full">
          {question.options.map((ans, idx) => {
            let btnClass = "";
            // if (selectedAnswer !== null) {
            //   if (idx === question.correct && idx === selectedAnswer) btnClass = "bg-green-400 text-white";
            //   else if (idx === selectedAnswer) btnClass = "bg-red-400 text-white";
            //   else btnClass = "bg-gray-200 text-gray-400";
            // } else {
              btnClass = "bg-blue-100 hover:bg-blue-200 text-blue-700";
            // }
            return (
              <button
                key={idx}
                className={`w-full py-3 rounded-[25px] font-medium text-4xl shadow transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 ${btnClass}`}
                disabled={selectedAnswer !== null && !allowRetry}
                onClick={() => {
                  if (allowRetry) {
                    setAllowRetry(false);
                  }
                  onSelectAnswer(idx);
                }}
                aria-label={`Jawaban ${ans}`}
              >
                {ans}
              </button>
            );
          })}
        </div>
        {/* Tombol Next hanya jika tidak sedang showCorrectModal (modal benar) */}
        {selectedAnswer !== null !== false && !showCorrectModal && (
          <button
            className="mt-8 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={onNext}
          >
            Next
          </button>
        )}
      {/* Modal jika jawaban benar */}
      {showCorrectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center animate-fadeIn">
            <div className="text-4xl mb-4 text-green-500">✔️</div>
            <div className="text-lg font-semibold text-green-600 mb-6 text-center">Jawaban Anda benar!</div>
            <button
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={handleNextCorrect}
            >
              Next
            </button>
          </div>
        </div>
      )}
      </div>

      {/* Modal jika jawaban salah */}
      {showWrongModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center animate-fadeIn">
            <div className="text-4xl mb-4">❌</div>
            <div className="text-lg font-semibold text-red-600 mb-6 text-center">Jawaban salah! Coba lagi atau lanjut ke soal berikutnya.</div>
            <div className="flex gap-4 w-full justify-center">
              <button
                className="px-6 py-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
                onClick={handleRetry}
              >
                Pilih Jawaban Lain
              </button>
              <button
                className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={handleNext}
              >
                Lanjut
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default QuizPage;
