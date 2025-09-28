"use client";
import { useState, useRef, useEffect } from "react";
import QuizPage from "@/components/Quiz/QuizPage";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import dayjs from "dayjs";
import { generateQuestions, QuizQuestion } from "@/service/generateQuestions";

export default function Quiz() {
  const router = useRouter();
  const setQuizResults = useQuizStore((s) => s.setQuizResults);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [startTime] = useState(Date.now());
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  // Gunakan useRef untuk menghindari race condition
  const correctCountRef = useRef(0);

  // Generate questions saat komponen mount
  useEffect(() => {
    const selectedLevel = localStorage.getItem("selectedLevel");
    const level = selectedLevel ? parseInt(selectedLevel) : 1;
    console.log("Generating questions for level:", level);
    const newQuestions = generateQuestions(level, 10);
    setQuestions(newQuestions);
    
    // Reset state saat generate questions baru
    setCurrent(0);
    setSelected(null);
    correctCountRef.current = 0;
  }, []);

  // Re-generate questions saat komponen muncul kembali (focus)
  useEffect(() => {
    const handleFocus = () => {
      const selectedLevel = localStorage.getItem("selectedLevel");
      const level = selectedLevel ? parseInt(selectedLevel) : 1;
      console.log("Window focused, checking level:", level);
      const newQuestions = generateQuestions(level, 10);
      setQuestions(newQuestions);
      setCurrent(0);
      setSelected(null);
      correctCountRef.current = 0;
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleSelect = (idx: number) => {
    // setSelected(idx);
    const isAnswerCorrect = idx === questions[current].correct;
    
    if (isAnswerCorrect) {
      correctCountRef.current += 1;
    }
    handleNext();
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      // Gunakan nilai dari ref yang selalu up-to-date
      const endTime = Date.now();
      const totalTimeSpent = dayjs(endTime - startTime).format("mm:ss");
      setQuizResults(correctCountRef.current, questions.length, totalTimeSpent);
      router.push("/result");
    }
  };

  // Reset selected jika user ingin memilih ulang setelah salah
  const handleResetSelected = () => {
    setSelected(null);
  };

  const timer = dayjs(Date.now() - startTime).format("mm:ss");

  // Tampilkan loading jika questions belum ready
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
        <div className="text-blue-700 text-xl font-semibold">Loading soal...</div>
      </div>
    );
  }

  return (
    <QuizPage
      question={questions[current]}
      questionIndex={current}
      totalQuestions={questions.length}
      selectedAnswer={selected}
      onSelectAnswer={handleSelect}
      onNext={handleNext}
      timer={timer}
      onResetSelected={handleResetSelected}
    />
  );
}