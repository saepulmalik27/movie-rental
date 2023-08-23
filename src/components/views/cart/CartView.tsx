"use client";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import useCartView from "./_hooks/useCartView";
import ToCatalog from "@/components/templates/tocatalog/ToCatalog";
import { USDcurrency } from "@/helpers/utils";

const CartView = () => {
  const { cartItems, handleRemoveFromCart, totalPrice } = useCartView();

  return (
    <>
      <div className='h-[500px] bg-pink-950 clip-path flex justify-center items-center relative'>
        <h1 className='font-bold text-white text-4xl'>Movie Rental</h1>
      </div>
      <main className='max-w-xl m-auto -mt-40 p-4 relative z-10'>
        <ToCatalog />
        <section className='rounded-xl shadow-md p-4 bg-white flex flex-col gap-5'>
          <h1 className='font-bold '>Your Order</h1>
          <div className='flex flex-col gap-2'>
            {cartItems.map((item, index) => (
              <div
                className='flex items-center p-2 border gap-4 border-gray-400 rounded-md '
                key={index}
              >
                <div
                  className='w-fit p-1 cursor-pointer'
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                >
                  <MinusCircleIcon className='h-10 w-10 text-red-600' />
                </div>
                <div className='flex-grow'>
                  <h3 className='font-bold text-sm'>{item.title}</h3>
                </div>
                <Image
                  src={item.image.cover}
                  alt={item.title}
                  width={100}
                  height={150}
                  className='rounded-md flex-shrink-0'
                />
              </div>
            ))}
          </div>
          <hr className='h-1 bg-black' />
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-sm'>Total Price :</h3>
            <h3 className='font-bold text-sm'>
              {USDcurrency.format(totalPrice)}
            </h3>
          </div>

          <button className='bg-primary-green text-white font-bold py-2 rounded-md'>
            Purchase
          </button>
        </section>
      </main>
    </>
  );
};

export default CartView;
