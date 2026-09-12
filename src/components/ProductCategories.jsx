import React from "react";
import { Link } from "react-router-dom";

import { useCategory } from "../hooks/useCategory";
import Loader from "./loader/Loader";
import { LuSparkles } from "react-icons/lu";
import CategoryItem from "./CategoryItem";

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
           <CategoryItem category={category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCategories;
