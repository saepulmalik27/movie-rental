"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/20/solid";
import useHeader from "./_hooks/useHeader";

const Header = () => {
  const { handleCLickBack, cartCount } = useHeader();
  return (
    <header className='fixed top-0 left-0 p-4 z-40 w-full flex justify-between bg-black bg-opacity-50'>
      <div
        className='w-fit flex flex-row items-center gap-5 cursor-pointer text-pink-500 hover:text-pink-600 active:text-pink-600'
        onClick={handleCLickBack}
      >
        <HomeIcon className=' h-10 w-10' />
        <h1 className='font-bold  text-3xl select-none'>MovieRent</h1>
      </div>
      <div className='relative'>
        <div className='absolute top-0 right-0 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center'>
          <span>{cartCount}</span>
        </div>
        <ShoppingCartIcon className='text-white h-10 w-10' />
      </div>
    </header>
  );
};

export default Header;
