import React from "react";
import { Link } from "react-router-dom";

import { useCategory } from "../hooks/useCategory";
import Loader from "./loader/Loader";
import { LuSparkles } from "react-icons/lu";

function ProductCategories() {
  const { data, isLoading, error } = useCategory();
  const categories = data?.productCategories || [];
  console.log({ data });

  return (
    <div className="pt-15">
      <div className="place-items-center">
        <p className=" flex text-[1.5rem] md:text-[1.77rem] text-gray-900 font-bold">
          دسته بندی محصولات
          <LuSparkles className="text-pink-700 text-3xl ms-2 animate-pulse" />
        </p>
      </div>
      {isLoading ? (
        <div className="px-4 py-10 text-center">
          <Loader size={70} color="#BE185D" />
        </div>
      ) : error ? (
        <div className="px-4 py-2 text-red-500 text-sm text-center">
          خطا: {error.message}
        </div>
      ) : categories.length === 0 ? (
        <div className="px-4 py-2 text-gray-500 text-sm text-center">
          دسته‌بندی وجود ندارد
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 place-items-center pt-5">
          {categories.map((category) => (
            <Link to={`/category/${category.slug}`} className="group">
              <div  className="w-28 h-w-28 md:w-h-36 md:h-36 lg:w-40 lg:h-40
                              flex items-center justify-center 
                              overflow-hidden">
                {category.imageCategory?.url && (
                  <img
                    className="drop-shadow-[0_25px_7px_rgba(142,8,86,0.15)]"
                    src={category.imageCategory.url}
                    alt={category.name}
                  />
                )}
              </div>
              <div className="flex justify-center items-center mt-2">
                <span
                  className=" text-[0.94rem] md:text-[1.07rem] font-bold text-gray-900 
                                 group-hover:text-pink-700 
                                 transition-all duration-300 
                                 text-center"
                >
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCategories;
