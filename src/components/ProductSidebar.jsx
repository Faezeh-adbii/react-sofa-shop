import React from "react";
import { IoMdCall, IoMdCart, IoMdInformationCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import { benefitsList } from "../constants/benefitsList";

function ProductSidebar({ product, finalPrice }) {
  return (
    <>
      {/* نسخه دسکتاپ  */}
      <div className="hidden md:block lg:col-span-3">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-md mb-4 sticky top-24">
          <div className="mb-4">
            {product.discountPercent > 0 && (
              <div className="flex justify-end gap-x-1.5 items-center text-gray-400 text-sm mb-1">
                <span className="line-through">{product.price.toLocaleString("fa-IR")} تومان</span>
                <span className="bg-red-500 flex justify-center items-center text-white text-sm font-bold px-2 py-0.5 rounded-md no-underline">
                  {product.discountPercent.toLocaleString("fa-IR")}٪
                </span>
              </div>
            )}
            <div className="text-2xl font-bold text-pink-700 text-left">
              {finalPrice.toLocaleString("fa-IR")} تومان
            </div>
          </div>

          <div className="border-t border-gray-100 py-4 mb-4">
            <div className="flex items-center justify-start gap-x-1.5 mb-3">
              <span className="text-sm font-bold text-gray-700">فروشنده:</span>
              <span className="text-sm text-gray-600">{product.manufacturer || "SAFARI"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaShieldAlt className="text-gray-400 text-base" />
              <span>ضمانت اصالت و سلامت فیزیکی کالا</span>
            </div>
          </div>
          <div className=" md:flex md:gap-x-8 lg:block md:mb-1 lg:mb-0">
            <button className="w-full bg-box hover:bg-pink-800 text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 lg:mb-4 ">
              <IoMdCart size={20} />
              افزودن به سبد خرید
            </button>
            <button className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-xl transition hover:bg-gray-50 flex items-center justify-center gap-2 lg:mb-4">
              تماس برای مشاوره
            </button>
          </div>


          {/* مزایا */}
          <ul className="space-y-3 text-xs text-gray-600 border-t border-gray-100 pt-4">
            {benefitsList.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <benefit.Icon className="text-lg text-gray-400" />
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* اطلاعیه امنیت */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-start gap-2 text-red-600 text-xs leading-6">
            <IoMdInformationCircleOutline size={18} className="shrink-0 mt-0.5" />
            <p>
              سفارش‌های خود را تنها در قبال معاملاتی که از طریق پرداخت امن انجام شده پاسخگو خواهیم بود.
            </p>
          </div>
        </div>
      </div>

      {/*  نسخه موبایل  */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.08)] z-50 rounded-t-3xl">
        <div className="px-4 py-4 flex items-center justify-between gap-3">
          <div className="flex flex-col items-start min-w-0">
            {product.discountPercent > 0 && (
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[11px] text-gray-400 line-through truncate">
                  {product.price.toLocaleString("fa-IR")}
                </span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-[1px] rounded shrink-0">
                  {product.discountPercent.toLocaleString("fa-IR")}٪
                </span>
              </div>
            )}
            <span className="text-lg sm:text-xl font-extrabold text-pink-700 whitespace-nowrap">
              {finalPrice.toLocaleString("fa-IR")}{" "}
              <span className="text-xs sm:text-sm font-normal">تومان</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 text-gray-700 rounded-xl transition hover:bg-gray-200">
              <FaPhoneAlt size={16} />
            </button>

            <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-box hover:bg-pink-800 text-white font-bold py-3 sm:py-3.5 px-3 sm:px-5 rounded-xl transition shadow-lg shadow-pink-700/30 text-sm sm:text-sm">
              <IoMdCart size={18} />
              <span>افزودن به سد خرید</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSidebar;