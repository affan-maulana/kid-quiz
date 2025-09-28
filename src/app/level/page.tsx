"use client";
import React from "react";
import LevelPage from "@/components/Level/LevelPage";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";

const Level = () => {
  const router = useRouter();
  const setLevel = useQuizStore((s) => s.setLevel);

  return (
    <LevelPage
      onSelectLevel={(level) => {
        setLevel(level);
        router.push("/quiz");
      }}
    />
  );
};

export default Level;
