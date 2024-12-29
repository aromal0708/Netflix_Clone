import React from "react";
import { movieProps } from "../types/types";

const Poster: React.FC<movieProps> = ({ id, genre, movies }) => {
  return (
    <div className="flex flex-col justify-start ml-2 mt-2 bg-transparent shadow-md">
      <h1 className="text-white text-lg font-normal  line-clamp-1">
        {genre}
      </h1>

      <div className="p-2 w-full overflow-x-scroll overflow-y-hidden scrollbar scrollbar-none flex">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${movie.image}`}
            alt={`${movie.name}`}
            className="max-h-72 mx-2 contain-content"
          />
        ))}
      </div>
    </div>
  );
};

export default Poster;
