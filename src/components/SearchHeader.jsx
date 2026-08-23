import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

function SearchHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className=" relative justify-center items-center lg:inline hidden ">
        <input
          type="text"
          placeholder="مدل مبل موردنظر را جستجو کنید"
          className=" w-72 bg-white/85 py-1 px-4 border-2 border-pink-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-600/35 hover:bg-white transition-all duration-300 "
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

      <div className=" lg:hidden">
        <button
          className="p-1 rounded-full bg-pink-800 mx-2 mt-1  absolute  hover:scale-105  transition-all duration-300  "
          style={{
            boxShadow:
              "rgba(3, 2, 3, 0.084) 0px 54px 55px, rgba(37, 8, 26, 0.023) 0px -12px 30px, rgba(177, 18, 129, 0.122) 0px 4px 6px, rgba(185, 21, 136, 0.138) 0px 12px 13px, rgba(112, 17, 69, 0.204) 0px -3px 5px",
          }}
          onClick={() => setIsSearchOpen(true)}
        >
          <IoSearch className="text-white text-xl font-medium" />
        </button>
      </div>
      {/* پس‌زمینه تیره */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSearchOpen(false)}
      />

      {/* صفحه جستجو - نصف صفحه */}
      <div
        className={`fixed inset-x-0 bottom-0 h-[60%] bg-white z-50 lg:hidden rounded-t-3xl transition-all duration-300 ease-out ${
          isSearchOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          {/* هدر */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">جستجو</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <IoClose className="text-2xl text-gray-600" />
            </button>
          </div>

          {/* باکس جستجو */}
          <div className="relative">
            <input
              type="text"
              placeholder="مدل مبل موردنظر را جستجو کنید..."
              className="w-full bg-gray-100 py-3 px-5 pr-14 border-2 border-pink-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-600/35 text-lg"
              autoFocus
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-800 hover:bg-pink-700 transition-all duration-300">
              <IoSearch className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
