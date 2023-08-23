"use client";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import useCartView from "./_hooks/useCartView";
import ToCatalog from "@/components/templates/tocatalog/ToCatalog";
import { USDcurrency } from "@/helpers/utils";
import { XMarkIcon } from "@heroicons/react/20/solid";

const CartView = () => {
  const { cartItems, handleRemoveFromCart, totalPrice, handleClearCart } =
    useCartView();

  return (
    <>
      <div className='h-[500px] before:header-before clip-path  relative'>
        <div className='bg-black bg-opacity-50 w-full h-full flex justify-center items-center'>
          <h1 className='font-bold text-pink-700 text-4xl'>Movie Rental</h1>
        </div>
      </div>
      <main className='max-w-xl m-auto -mt-40 p-4 flex flex-col gap-5  relative z-10'>
        <ToCatalog className='text-white' />
        <section className='rounded-xl shadow-md p-4 bg-brown-200 text-white flex flex-col gap-5'>
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
                  <h3 className='font-bold text-sm text-pink-500'>
                    {USDcurrency.format(item.price)}
                  </h3>
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
            <h3 className='font-bold text-3xl'>
              {USDcurrency.format(totalPrice)}
            </h3>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 w-full'>
            <button className='bg-primary-green text-white font-bold py-2 rounded-md'>
              Purchase
            </button>
            <button
              className='bg-red-500 text-white font-bold py-2 rounded-md flex gap-1 justify-center items-center'
              onClick={handleClearCart}
            >
              <XMarkIcon className='h-5 w-5' />
              Cancel All
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartView;
