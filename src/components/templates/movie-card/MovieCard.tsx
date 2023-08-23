"use client";
import { USDcurrency } from "@/helpers/utils";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import useMovieCard from "./_hooks/useMovieCard";
type MovieCardProps = {
  title: string;
  cover: string;
  description: string;
  onClick: () => void;
  price: number;
  epidose_id: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  cover,
  description,
  onClick,
  price,
  epidose_id,
}) => {
  const { isInCart } = useMovieCard(epidose_id);

  return (
    <div onClick={onClick} className='flex flex-col gap-3 w-[250px]'>
      <div className='relative w-fit'>
        <div className='absolute z-20 w-full left-0 bottom-0 p-2 flex justify-between '>
          <div className='rounded-full py-1 px-4 bg-white select-none font-bold'>
            {USDcurrency.format(price)}
          </div>
          {isInCart && (
            <button
              className={twMerge(
                " rounded-full py-1 px-5  w-fit flex flex-row gap-1 justify-center items-center",
                "bg-red-500"
              )}
            >
              <span className='text-white font-bold capitalize'>rented</span>
            </button>
          )}
        </div>

        <Image
          src={cover}
          alt={title}
          width={250}
          height={375}
          className='aspect-[2/3] rounded-xl relative z-10 cursor-pointer'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='font-bold text-xl text-white'>{title}</h2>
        <p className='text-gray-400 line-clamp-2 text-ellipsis'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
