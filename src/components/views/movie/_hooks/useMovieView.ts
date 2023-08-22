import movie from "@/data/movie.json";
import { useParams } from "next/navigation";
import React from "react";

const useMovieView = () => {
  const { id } = useParams();
  const movieDetail = React.useMemo(() => {
    if (id) {
      return movie.results.find((movie) => movie.episode_id === Number(id));
    } else {
      return null;
    }
  }, [id]);

  return {
    movieDetail,
  };
};

export default useMovieView;
