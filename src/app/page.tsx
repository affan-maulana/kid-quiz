"use client";
import React from "react";
import IntroPage from "@/components/Intro/IntroPage";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return <IntroPage onPlay={() => router.push("/menu")} />;
};

export default Home;
