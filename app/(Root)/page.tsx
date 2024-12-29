import { Hero, Poster } from "./Components";
import { movie } from "./Constants";

export default function Home() {
  return (
    <div className="bg-black h-auto w-full flex flex-col justify-start text-white">
      <Hero />
      <div className="flex flex-col justify-start flex-wrap">

      {
        movie.map((item)=>(
          <Poster id={item.id} genre={item.genre} movies={item.movies} key={item.id} />
        ))
      } 
      </div>

    </div>
  );
}
