import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ onChange, placeholder }) => {
  return (
    <div className='flex flex-row justify-center items-center border border-gray-400 w-fit px-4 py-2 rounded-full'>
      {" "}
      <input
        className='outline-none bg-transparent h-5 text-white placeholder:capitalize'
        type='text'
        onChange={onChange}
        placeholder={placeholder || "search movie"}
      />{" "}
      <MagnifyingGlassIcon className='h-5 w-5 text-white' />
    </div>
  );
};

export default Search;
