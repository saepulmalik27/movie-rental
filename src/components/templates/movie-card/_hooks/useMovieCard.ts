import { useAppSelector } from "@/redux/hooks";
import React from "react";

const useMovieCard = (episode_id: number) => {
  const { items } = useAppSelector((state) => state.cart);

  const isInCart = React.useMemo(() => {
    return items.some((item) => item.episode_id === episode_id);
  }, [items, episode_id]);

  return {
    isInCart,
  };
};

export default useMovieCard;
