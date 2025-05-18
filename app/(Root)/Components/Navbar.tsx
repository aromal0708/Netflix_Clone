"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="mt-4 z-50 h-10 w-full fixed top-0 flex justify-between items-center bg-transparent">
      <div className="absolute top-0 ml-2">
        <Image
          src="/Assets/logo.png"
          alt="logo"
          width={128}
          height={40}
          className="lg:h-10 lg:w-32 md:h-10 md:w-32 sm:h-8 sm:w-24"
        />
      </div>
      <div className="absolute  top-0 right-0 mr-4">
        <button
          className="text-center justify-center flex items-center bg-red-600 
        md:h-10 lg:h-10 md:w-32 
        sm:h-7 sm:w-24 sm:text-sm 
        rounded-lg text-white lg:font-semibold p-1"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
