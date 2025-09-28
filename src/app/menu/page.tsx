"use client";
import React from "react";
import MenuPage from "@/components/Menu/MenuPage";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";

const Menu = () => {
  const router = useRouter();
  const setCategory = useQuizStore((s) => s.setCategory);

  return (
    <MenuPage
      onSelectCategory={(key) => {
        setCategory(key);
        router.push("/level");
      }}
    />
  );
};

export default Menu;
