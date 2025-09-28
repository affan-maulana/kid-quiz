"use client";
import React, { useState } from "react";
import ResultPage from "@/components/Result/ResultPage";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import dayjs from "dayjs";

// Untuk demo, gunakan mock data dari localStorage/sessionStorage atau state lokal
// (Nantinya bisa dihubungkan ke store)

export default function Result() {
  const router = useRouter();
  const { totalCorrect, totalQuestions, totalTime, resetQuiz } = useQuizStore();

  const handleRetry = () => {
    resetQuiz(); // Reset state quiz
    router.push("/quiz");
  };
  const handleBack = () => {
    resetQuiz(); // Reset state quiz
    router.push("/menu");
  };

  return (
    <ResultPage
      totalCorrect={totalCorrect}
      totalQuestions={totalQuestions}
      totalTime={totalTime}
      onRetry={handleRetry}
      onBack={handleBack}
    />
  );
}
