import { useAxios } from "@/hooks/useAxios";
import { Hero, Poster } from "./Components";
import { trending } from "@/utils/urls";
import { useEffect, useState } from "react";

export default function Home() {
  const url = trending;
  const { response, error } = useAxios(url);
  const [movie, setMovie] = useState<any>();

  const getRandomObject = (DATA: number[]) => {
    const randomObject = DATA[Math.floor(Math.random() * DATA.length)];
    return randomObject;
  };
  useEffect(() => {
    const DATA = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    setMovie(response?.results[getRandomObject(DATA)]);
    //this is where i stop for now and the functionalities are yet to be added
  }, []);
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
