"use client";
import { movieUrls } from "@/utils/urls";
import { Hero } from "./Components";
import Posters from "./Components/Posters";
import { movieUrlsType } from "@/types";
import { useEffect } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-start text-white scrollbar-hide">
      <Hero />
      {movieUrls.map((item: movieUrlsType) => (
        <Posters key={item.id} genre={item.genre} url={item.url} />
      ))}
    </div>
  );
}
