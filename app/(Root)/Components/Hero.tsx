"use client";
import { trending } from "@/utils/urls";
import { MovieProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoading } from "@/contexts/LoadingContext";

//component
const Hero = () => {
  const [movie, setMovie] = useState<MovieProps[]>([]);
  const { stopLoading } = useLoading();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!url) {
        return;
      }
      try {
        const response = await axios.get(`${url}${trending}`);
        setMovie(response.data.results);
        stopLoading();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unexpected error occurrer in Hero.tsx");
        }
      }
    };
    fetchData();
  }, [stopLoading]);
  return (
    <Slider {...settings} className="w-full overflow-hidden scrollbar-none">
      {movie.map((item: MovieProps) => (
        <div
          key={item.id}
          className="relative h-[300px] w-full flex flex-col justify-center items-start text-white p-1 lg:h-[430px]"
        >
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt="image"
            className="absolute top-0 left-0 w-full h-full object-fit object-center z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-5"></div>

          <div className="relative z-10 flex flex-col justify-between mt-28 ml-4 gap-4">
            <h1 className="text-xl lg:font-bold sm:font-extrabold text-white">
              {item.title}
            </h1>
            <p className="text-white sm:text-[12px] sm:max-w-[250px] sm:font-extralight lg:font-normal lg:text-[16px] lg:mt-3 lg:max-w-[550px] ">
              {item.overview}
            </p>
          </div>

          <div className="relative z-10 flex flex-row mt-4 ml-4 gap-1">
            <button className="btn">Play</button>
            <button className="btn">Add to Watchlist</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
