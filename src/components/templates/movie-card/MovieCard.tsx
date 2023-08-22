import { USDcurrency } from "@/helpers/utils";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
type MovieCardProps = {
  title: string;
  cover: string;
  description: string;
  onClick: () => void;
  price: number;
  onCart: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  cover,
  description,
  onClick,
  price,
  onCart,
}) => {
  return (
    <div onClick={onClick} className='flex flex-col gap-3 w-[250px]'>
      <div className='relative w-fit'>
        <div className='absolute z-20 w-full left-0 bottom-0 p-2 flex justify-between '>
          <div className='rounded-full py-1 px-4 bg-white select-none font-bold'>
            {USDcurrency.format(price)}
          </div>
          <button
            className={twMerge(
              " rounded-full py-1 px-5  w-fit flex flex-row gap-1 justify-center items-center",
              onCart ? "bg-red-500" : "bg-primary-green"
            )}
          >
            {onCart ? (
              <MinusCircleIcon className='text-white h-5 w-5' />
            ) : (
              <PlusCircleIcon className='text-white h-5 w-5' />
            )}
            <span className='text-white font-bold capitalize'>
              {!onCart ? "Order" : "cancel"}
            </span>
          </button>
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
