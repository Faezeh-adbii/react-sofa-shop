import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { getFinalPrice } from "../utils/priceUtils";

function SpecialOfferCard({ product }) {
  const finalPrice = getFinalPrice(product.price, product.discountPercent);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="block group  bg-white rounded-[13px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 select-none "
      draggable={false}
    >
      {/* تصویر */}
      <div className="relative w-full aspect-square p-2 overflow-hidden bg-gray-50">
        <img
          src={product.mainImage.url}
          alt={product.name}
          className=" w-full object-cover group-hover:scale-110 rounded-[5px] transition-all duration-500 pointer-events-none"
          draggable={false}
        />
      </div>

      {/* اطلاعات */}
      <div className="px-2 py-3">
        <h3 className="text-[17px] font-bold text-gray-800 truncate mb-1 group-hover:text-pink-900 transition-colors">
          {product.name}
        </h3>

        <div className="flex  items-center text-gray-800 mb-1">
          <span className="flex">
            <HiOutlineLocationMarker className="text-black" />
            <span className="text-[0.9rem]"> {product.manufacturerCity}</span>
          </span>
        </div>

        <div className="flex flex-col gap-0.5 ">
          <div className="flex justify-end  gap-x-2">
            <div>
              {product.discountPercent > 0 && (
                <span className="text-[0.9rem] text-gray-500 line-through">
                  {product.price.toLocaleString("fa-IR")} تومان
                </span>
              )}
            </div>
            <div>
              {/* برچسب تخفیف */}
              {product.discountPercent > 0 && (
                <div className=" bg-red-500/85  text-white text-[0.9rem] font-bold  px-1.5 py-0.5 rounded-[9px]  shadow-lg">
                  {product.discountPercent.toLocaleString("fa-IR")}٪
                </div>
              )}
            </div>
          </div>
          <span className="text-[18px] text-end font-bold text-pink-900">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SpecialOfferCard;
