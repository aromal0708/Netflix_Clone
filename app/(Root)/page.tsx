import { useAxios } from "@/hooks/useAxios";
import { Hero, Poster } from "./Components";
import { trending } from "@/utils/urls";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [movie, setMovie] = useState<any>();
  return (
    <div className="bg-black h-auto w-full flex flex-col justify-start text-white">
      <Hero />
      <div className="flex flex-col justify-start flex-wrap">
        {movie.map((item: any) => (
          <Poster
            id={item.id}
            genre={item.genre}
            movies={item.movies}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
