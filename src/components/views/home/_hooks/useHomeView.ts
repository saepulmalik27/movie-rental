import React from "react";
import movies from "@/data/movie.json";
import { TMovie } from "@/lib/types/movie.type";
import { useRouter } from "next/navigation";

const useHomeView = () => {
  const [movieList, setMovieList] = React.useState<TMovie[]>(movies.results);
  const { push } = useRouter();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") setMovieList(movies.results);
    const value = e.target.value;
    const filteredMovies = movies.results.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setMovieList(filteredMovies);
  };

  const handleOnClickMovie = (target: string | number) => {
    push(`/${target}`);
  };

  return {
    movieList,
    handleSearch,
    handleOnClickMovie,
  };
};

export default useHomeView;
