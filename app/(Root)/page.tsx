"use client";
import { Hero, Poster } from "./Components";
import { useState } from "react";
import Posters from "./Components/Posters";

export default function Home() {
  const [movie, setMovie] = useState<any>();
  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-start text-white scrollbar-hide">
      <Hero />
      <Posters />
      <Posters />
    </div>
  );
}
