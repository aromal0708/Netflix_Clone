"use client";
import React, { useEffect, useState } from "react";
import Poster from "./Poster";
import axios from "@/utils/axios";
import { movieUrlsType } from "@/types";

const Posters = ({ genre, url }: movieUrlsType) => {
  const [movie, setMovie] = useState<any[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url);
        if (!response.data || !response.data.results) {
          throw new Error("Error Fetching Data");
        }
        setMovie(response.data.results);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [url]);

  return (
    <div className="flex flex-col justify-start flex-wrap m-3">
      <h1 className="text-white text-lg font-normal  line-clamp-1">{genre}</h1>
      <div className="w-full flex flex-row overflow-x-auto overflow-y-hidden scrollbar-hide ml-2 mt-2 bg-transparent">
        {movie?.map((item: any) => (
          <Poster key={item.id} path={item.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Posters;
