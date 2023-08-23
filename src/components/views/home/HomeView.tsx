"use client";
import React from "react";
import useHomeView from "./_hooks/useHomeView";
import MovieCard from "@/components/templates/movie-card/MovieCard";
import Search from "@/components/templates/search/Search";
const HomeView = () => {
  const { movieList, handleSearch, handleOnClickMovie } = useHomeView();
  return (
    <>
      <section className='before:header-before h-[500px] relative'>
        <div className='bg-black bg-opacity-70 w-full h-full clip-path flex justify-center items-center flex-col gap-5'>
          <div className='flex flex-col gap-1 text-white'>
            <h1 className='font-bold text-4xl text-pink-600'>Movie Rental</h1>
            <p>choose best quality movie here</p>
          </div>
          <Search onChange={handleSearch} />
        </div>
      </section>
      <main className='max-w-7xl m-auto p-5 flex flex-col gap-5 relative -mt-40'>
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
              epidose_id={movie.episode_id}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomeView;
