import React from "react";
import Poster from "./Poster";

const Posters = () => {
  return (
    <div className="flex flex-col justify-start flex-wrap m-3">
      <h1 className="text-white text-lg font-normal  line-clamp-1">Comedy</h1>
      <div className="w-full flex flex-row overflow-x-auto overflow-y-hidden scrollbar-hide ml-2 mt-2 bg-transparent">
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
        <Poster />
      </div>
    </div>
  );
};

export default Posters;
