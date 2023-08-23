"use client";
import React from "react";
import useMovieView from "./_hooks/useMovieView";
import Image from "next/image";
import { USDcurrency } from "@/helpers/utils";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import ToCatalog from "@/components/templates/tocatalog/ToCatalog";

const MovieView = () => {
  const { movieDetail, handleToggleCart, isInCart } = useMovieView();

  return (
    <>
      <header className='h-[500px] relative flex justify-center items-end'>
        <div className='absolute top-0 left-0 w-full h-4/5 clip-path -z-10'>
          <div className='relative w-full h-full'>
            <Image
              src={movieDetail?.image.thumbnail as string}
              alt={movieDetail?.title as string}
              layout='fill'
              objectFit='cover'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
          </div>
        </div>
        <section className='grid grid-cols-3 w-full  max-w-5xl p-5 '>
          <div className='col-span-2 flex flex-col gap-5 justify-center items-start'>
            <ToCatalog />
            <div className='flex flex-col gap-1'>
              <h3 className='font-bold text-white'> Star Wars </h3>
              <h1 className='font-bold md:text-5xl text-3xl text-white'>
                {movieDetail?.title}
              </h1>
            </div>
            <div className='flex gap-5'>
              <div className='px-2 py-1 rounded-full bg-white text-center w-40 select-none'>
                {USDcurrency.format(movieDetail?.price as number)}
              </div>
              <button
                onClick={handleToggleCart}
                className={twMerge(
                  " px-2 py-1 rounded-full text-white w-40 flex gap-2 justify-center items-center",
                  isInCart ? "bg-red-500" : "bg-primary-green"
                )}
              >
                {isInCart ? (
                  <>
                    <MinusCircleIcon className='h-5 w-5' /> <span>Rented</span>
                  </>
                ) : (
                  <>
                    <PlusCircleIcon className='h-5 w-5' /> <span>Rent Now</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <Image
            src={movieDetail?.image.cover as string}
            alt={movieDetail?.title as string}
            width={250}
            height={375}
          />
        </section>
      </header>
      <main className='max-w-6xl m-auto p-5'>
        <div className='bg-brown-200 rounded-lg sm:p-20 p-5 text-white max-w-5xl m-auto grid md:grid-cols-3  gap-5'>
          <div className='col-span-2'>
            <h1 className='font-bold text-2xl'>Storyline</h1>
            <p>{movieDetail?.opening_crawl}</p>
          </div>{" "}
          <div className='flex flex-col gap-8 justify-between'>
            <div>
              <h3 className='font-bold'>Director</h3>
              <p>{movieDetail?.director}</p>
            </div>

            <div>
              <h3 className='font-bold'>Release</h3>
              <p>{movieDetail?.release_date}</p>
            </div>

            <div>
              <h3 className='font-bold'>Producer</h3>
              <p>{movieDetail?.producer}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieView;
