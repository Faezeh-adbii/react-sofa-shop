import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchHeader() {
  return (
    <div className=" relative justify-center items-center ">
      <input
        type="text"
        placeholder="مدل مبل موردنظر را جستجو کنید"
        className=" w-72 bg-white/85 py-1 px-4 border-2 border-pink-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-600/20 hover:bg-white transition-all duration-300 lg:inline hidden "
      />
      <button
        className="p-1 rounded-full bg-pink-800 mx-2 mt-1  absolute  hover:scale-105  transition-all duration-300  "
        style={{
          boxShadow:
            "rgba(3, 2, 3, 0.084) 0px 54px 55px, rgba(37, 8, 26, 0.023) 0px -12px 30px, rgba(177, 18, 129, 0.122) 0px 4px 6px, rgba(185, 21, 136, 0.138) 0px 12px 13px, rgba(112, 17, 69, 0.204) 0px -3px 5px",
        }}
      >
        <IoSearch className="text-white text-xl font-medium" />
      </button>
    </div>
  );
}

export default SearchHeader;
