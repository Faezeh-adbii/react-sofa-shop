// src/components/ProductsSliderCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getFinalPrice } from "../utils/priceUtils";

function ProductsSliderCard({ product }) {
  const finalPrice = getFinalPrice(product.price, product.discountPercent);

  return (
    <div
      className="flex flex-col justify-between group
                 w-full h-[310px] sm:h-[320px] md:h-[332px] lg:h-[380px]
                 bg-white rounded-[13px] overflow-hidden 
                 border border-gray-100 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 select-none 
                 text-center"
      draggable={false}
    >
      {/* تصویر */}
      <div className="relative w-full aspect-square p-1.5 sm:p-2 
                      overflow-hidden bg-gray-50">
        <img
          src={product.mainImage.url}
          alt={product.name}
          className="w-full h-full object-cover 
                     group-hover:scale-110 
                     rounded-[5px] transition-all duration-500 
                     pointer-events-none"
          draggable={false}
        />
      </div>

      {/* اطلاعات */}
      <div className="flex-1 flex flex-col justify-center 
                      py-2 sm:py-3 px-1.5 sm:px-2">
        
        <h3 className="text-[17px] font-bold text-gray-800 truncate mb-1 group-hover:text-pink-900 transition-colors">
          {product.name}
        </h3>

        <div className="flex flex-col items-center gap-0.5">
          
          <div className="flex items-center justify-center gap-x-1.5 sm:gap-x-2">
            {product.discountPercent > 0 && (
              <span className="text-[0.9rem] text-gray-500 line-through">
                {product.price.toLocaleString("fa-IR")} تومان
              </span>
            )}

            {product.discountPercent > 0 && (
              <div className="bg-red-500/85  text-white text-[0.9rem] font-bold  px-1.5 py-0.5 rounded-[9px]  shadow-lg">
                {product.discountPercent.toLocaleString("fa-IR")}٪
              </div>
            )}
          </div>

          <span className="text-[18px] text-end font-bold text-pink-900">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>

      <Link
        className="mx-auto mb-2 sm:mb-3 
                   py-2 sm:py-2 
                   px-10 sm:px-5 md:px-10
                   bg-gray-900/95 text-white 
                   text-[0.84rem] sm:text-sm md:text-[0.98rem]
                   rounded-lg md:rounded-xl 
                   transition-all hover:bg-pink-950/95 font-bold"
        to={`/product/${product.slug}`}
      >
        مشاهده محصول
      </Link>
    </div>
  );
}

export default ProductsSliderCard;