import React from "react";
import { useRouter } from "next/navigation";

const useToCatalog = () => {
  const { push } = useRouter();

  const handleClickToCatalog = () => {
    push("/");
  };

  return {
    handleClickToCatalog,
  };
};

export default useToCatalog;
