// src/components/InstallmentOffers.jsx
import React from "react";
import { GiArrowDunk } from "react-icons/gi";
import { Link } from "react-router-dom";

import MoblImg from "../assets/mobl.png";
import SofaImg from "../assets/sofa.png";

function InstallmentOffers() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full mt-20 md:mt-30 gap-17 md:gap-8 px-4">
      <div className="relative w-full  lg:w-1/2 h-[224px]">
        {/* لایه پس‌زمینه با mask */}
        <div className="absolute inset-0 bg-pink-950/95  inverted-radius-right" />
        {/* ✅ تصویر - سمت چپ */}
        <div
          className="absolute -left-12 md:-left-10 -bottom-8 md:-bottom-12
               w-60 md:w-80 h-64
               flex items-end justify-center
               pointer-events-none z-10"
        >
          <img
            src={MoblImg}
            alt="مبل"
            className="w-full h-full object-contain object-bottom 
                 drop-shadow-2xl"
          />
        </div>

        {/* ✅ متن - سمت راست */}
        <div
          className="absolute right-6 top-2/6 -translate-y-1/2
               text-right z-20 max-w-[40%] md:max-w-[55%]"
        >
          <span
            className="text-white text-lg md:text-xl font-bold 
                 leading-relaxed block"
          >
            فروش اقساطی ویژه برای کارمندان
          </span>
        </div>
        <GiArrowDunk className="mt-44 ms-8 text-5xl text-gray-900/95" />
        <div className="mt-8">
          <Link
            className=" bg-pink-950/95 text-white rounded-xl  hover:bg-pink-950/90   text-sm 
                       font-bold px-5 py-3  
                      transition-all 
                       cursor-pointer"
          >
            سفارش دهید
          </Link>
        </div>
      </div>

      <div className="relative  w-full lg:w-1/2 h-[224px]">
        {/* لایه پس‌زمینه با mask */}
        <div className="absolute inset-0 bg-gray-900/95  inverted-radius" />

        {/* تصویر - بدون mask */}
        <div
          className="absolute -left-12 md:-left-16 -bottom-8 md:-bottom-12
                     w-64 md:w-80 h-72
                     flex items-end justify-center
                     pointer-events-none z-10"
        >
          <img
            src={SofaImg}
            alt="مبل"
            className="w-full h-full object-contain object-bottom 
                       drop-shadow-2xl"
          />
        </div>

        {/* متن */}
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2
                     text-right z-20 max-w-[55%]"
        >
          <span
            className="text-white text-lg md:text-xl font-bold 
                           leading-relaxed block"
          >
            فروش اقساطی ویژه برای بازنشستگان
          </span>
          <div className="mt-6">
            <Link
              className=" bg-white text-gray-900 text-sm 
                       font-bold px-5 py-3 rounded-xl 
                       hover:bg-gray-100 transition-all 
                       cursor-pointer"
            >
              سفارش دهید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentOffers;
