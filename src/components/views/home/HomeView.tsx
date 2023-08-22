"use client";
import React from "react";
import useHomeView from "./_hooks/useHomeView";
import MovieCard from "@/components/templates/movie-card/MovieCard";
import Search from "@/components/templates/search/Search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
const HomeView = () => {
  const { movieList, handleSearch, handleOnClickMovie } = useHomeView();

  return (
    <>
      <header className='fixed top-0 left-0 p-4 z-40 w-full flex justify-between bg-black bg-opacity-50'>
        <Search onChange={handleSearch} />
        <ShoppingCartIcon className='text-white h-10 w-10' />
      </header>
      <section className='before:header-before h-[500px] relative'>
        <div className='bg-black bg-opacity-70 w-full h-full clip-path'></div>
      </section>
      <main className='max-w-7xl m-auto p-5 flex flex-col gap-5 relative'>
        <div className=' flex flex-wrap gap-5 justify-center items-center '>
          {movieList.map((movie, index) => (
            <MovieCard
              onClick={() => {
                handleOnClickMovie(movie.episode_id);
              }}
              key={index}
              title={movie.title}
              price={movie.price}
              cover={movie.image.cover}
              description={movie.opening_crawl}
              onCart={index === 2 ? true : false}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomeView;
