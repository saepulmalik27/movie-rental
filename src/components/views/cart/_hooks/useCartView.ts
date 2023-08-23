import { TMovie } from "@/lib/types/movie.type";
import { addToCart, removeFromCart } from "@/redux/feature/cart.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const useCartView = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const totalPrice = React.useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }, [items]);

  const handleAddToCart = (item: TMovie) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: TMovie) => {
    dispatch(removeFromCart(item));
  };

  return {
    cartItems: items,
    totalPrice,
    handleRemoveFromCart,
  };
};

export default useCartView;
