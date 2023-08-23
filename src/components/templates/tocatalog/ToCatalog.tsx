"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";
import useToCatalog from "./_hooks/useToCatalog";

type ToCatalogProps = {
  className?: string;
};

const ToCatalog: React.FC<ToCatalogProps> = ({ className }) => {
  const { handleClickToCatalog } = useToCatalog();
  return (
    <div
      className={twMerge(
        "flex gap-2 select-none cursor-pointer text-pink-300",
        className
      )}
      onClick={handleClickToCatalog}
    >
      <ArrowLeftIcon className=' h-5 w-5' />
      <h3 className='font-bold'>Bact To Catalog</h3>
    </div>
  );
};

export default ToCatalog;
