import { create } from "zustand";

interface QuizState {
  category: string | null;
  setCategory: (category: string) => void;
  level: number | null;
  setLevel: (level: number) => void;
  // Quiz result states
  totalCorrect: number;
  totalQuestions: number;
  totalTime: string;
  setQuizResults: (correct: number, total: number, time: string) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  category: null,
  setCategory: (category) => set({ category }),
  level: null,
  setLevel: (level) => set({ level }),
  // Quiz result states
  totalCorrect: 0,
  totalQuestions: 0,
  totalTime: "00:00",
  setQuizResults: (correct, total, time) => set({ 
    totalCorrect: correct, 
    totalQuestions: total, 
    totalTime: time 
  }),
  resetQuiz: () => set({ 
    totalCorrect: 0, 
    totalQuestions: 0, 
    totalTime: "00:00" 
  }),
}));
