import React, { useState } from "react";
import { BsListUl, BsCheck2 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import { sortOptions } from "../constants/sortOption";
import Loader from "./loader/Loader";

function SortBar({ productCount, isLoading, sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const activeOptionLabel = sortOptions.find((opt) => opt.id === sortBy)?.label || "مرتب‌سازی";

  const handleSelect = (id) => {
    setSortBy(id);
    setIsOpen(false);
  };

  return (
    <>
      {/*  نسخه دسکتاپ  */}
      <div className="hidden lg:flex flex-wrap justify-between items-center bg-white p-3 rounded-xl border border-pink-50 mb-6 gap-3 shadow-sm">
        <div className="flex items-center gap-2 text-sm overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <span className="text-[#0a1b4d] text-base font-bold whitespace-nowrap gap-x-1 flex">
            <BsListUl className="mt-1 text-[1.05rem]" />
            به ترتیب:
          </span>
          <div className="flex gap-1 whitespace-nowrap">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSortBy(option.id)}
                className={`
                  px-4 py-1.5 rounded-lg font-medium transition-colors
                  ${option.hideOnMobile ? "hidden md:block" : ""}
                  ${sortBy === option.id
                    ? "bg-box text-white shadow-md font-bold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-pink-700"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500 font-medium">
          {isLoading ? (
            <Loader size={25} color="#BE185D" />
          ) : (
            `${productCount || 0} محصول  `
          )}
        </span>
      </div>

      {/*  نسخه موبایل  */}
      <div className="flex lg:hidden w-full h-full">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#0a1b4d] font-bold active:scale-95 transition-transform"
        >
          <BsListUl size={20} />
          <span className="truncate">{activeOptionLabel}</span>
        </button>
      </div>
      {/*  منوی کشویی    */}
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* لایه تاریک برای بستن منو */}
        <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>

        {/* باکس منو با انیمیشن از پایین به بالا */}
        <div
          className={`relative w-full bg-white rounded-t-3xl shadow-2xl px-5 pt-3 pb-8 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          {/* دسته کشیدن (Drag Handle) */}
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-5"></div>

          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2 text-[#0a1b4d]">
              <div className="bg-pink-50 p-2 rounded-full">
                <BsListUl size={20} className="text-pink-700" />
              </div>
              <h3 className="font-bold text-lg">مرتب‌سازی بر اساس</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 bg-gray-100 p-1.5 rounded-full transition-colors"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* لیست گزینه‌ها */}
          <div className="flex flex-col gap-2.5">
            {sortOptions.map((option) => {
              const isActive = sortBy === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`
                    flex justify-between items-center w-full px-4 py-3.5 rounded-2xl transition-all duration-200
                    ${isActive
                      ? "bg-pink-50 border border-pink-200 text-pink-700 font-bold shadow-sm"
                      : "bg-gray-50 border border-transparent text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <span className="text-base">{option.label}</span>

                  {/* دایره انتخاب */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isActive ? "border-pink-700 bg-pink-700" : "border-gray-300"
                    }`}>
                    {isActive && <BsCheck2 size={14} className="text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SortBar;