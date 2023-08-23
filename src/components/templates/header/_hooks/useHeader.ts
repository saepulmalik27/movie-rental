import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React from "react";

const useHeader = () => {
  const { push } = useRouter();
  const { items } = useAppSelector((state) => state.cart);
  const handleCLickBack = () => {
    push("/");
  };

  const handleClickCart = () => {
    push("/cart");
  };

  const cartCount = React.useMemo(() => {
    return items.length;
  }, [items]);

  return {
    handleCLickBack,
    cartCount,
    handleClickCart,
  };
};

export default useHeader;
