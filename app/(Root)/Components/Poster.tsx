import React from "react";
import { movieProps } from "../types/types";

const Poster: React.FC<movieProps> = ({ id, genre, movies }) => {
  return (
    
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
  );
};

export default Poster;
