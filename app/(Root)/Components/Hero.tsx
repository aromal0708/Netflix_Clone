"use client";
import { trending } from "@/utils/urls";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const Hero = () => {
  const url = trending;
  const [movie, setMovie] = useState<any[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!url) {
        return;
      }
      const response = await axios.get(url + trending);
      setMovie(response.data?.results);
    };
    fetchData();
  }, []);
  //this is today's stop :(   i haven't given up i will figt for what i want i will complete this project by the end of this week
  return (
    <div
      className=" h-[300px] w-full flex flex-col justify-center bg-cover bg bg-center items-start text-white p-1 lg:h-[430px]"
      style={{
        backgroundImage: `url("https://images.goodreturns.in/img/2025/01/yeh-jawaani-hy-deewani6-1736071788.jpg")`,
      }}
    >
      <h1 className="text-xl ml-4 lg:font-bold sm:font-extrabold text-black">
        Ye Jawani Hai Diwani
      </h1>
      <p className="text-black sm:text-[12px] sm:max-w-[250px] sm:font-extralight lg:font-normal lg:text-[16px] lg:mt-3 lg:max-w-[550px] ml-4 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus tempora
        facilis impedit consequuntur provident adipisci a? Fuga optio ad est.
        Reiciendis quasi in
      </p>
      <div className="flex flex-row mt-4 ml-4 gap-1">
        <button className="btn">Play</button>
        <button className="btn">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default Hero;
