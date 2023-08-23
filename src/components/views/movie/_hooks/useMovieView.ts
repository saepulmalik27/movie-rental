import movie from "@/data/movie.json";
import { TMovie } from "@/lib/types/movie.type";
import { addToCart, removeFromCart } from "@/redux/feature/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const useMovieView = () => {
  const { id } = useParams();
  const { push } = useRouter();
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const movieDetail = React.useMemo(() => {
    if (id) {
      return movie.results.find((movie) => movie.episode_id === Number(id));
    } else {
      return null;
    }
  }, [id]);

  const isInCart = React.useMemo(() => {
    return items.some((item) => item.episode_id === Number(id));
  }, [items, id]);

  const handleBackToCatalog = () => {
    push("/");
  };

  const handleToggleCart = React.useCallback(() => {
    if (isInCart) {
      dispatch(removeFromCart(movieDetail as TMovie));
    } else {
      dispatch(addToCart(movieDetail as TMovie));
    }
    //eslint-disable-next-line
  }, [isInCart, movieDetail]);

  return {
    isInCart,
    movieDetail,
    handleBackToCatalog,
    handleToggleCart,
  };
};

export default useMovieView;
