"use client";
import { Hero, Poster } from "./Components";
import { useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState<any>();
  return (
    <div className="bg-black h-auto w-full flex flex-col justify-start text-white">
      <Hero />
      <div className="flex flex-col justify-start flex-wrap">
        <div className="flex flex-col justify-start ml-2 mt-2 bg-transparent shadow-md">
          <h1 className="text-white text-lg font-normal  line-clamp-1">
            Comedy
          </h1>
          {movie?.map((item: any) => (
            <Poster
              id={item.id}
              genre={item.genre}
              movies={item.movies}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
