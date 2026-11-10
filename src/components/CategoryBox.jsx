import React from "react";
import { Link } from "react-router-dom";
import { getImageForCategory } from "../constants/imageCategory";

function CategoryBox({ isActive, category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className={`
        flex flex-col items-center justify-center
        w-full aspect-square
        rounded-xl md:rounded-2xl border-2 transition-all duration-300
        p-1 lg:px-2 md:py-1
        ${
          isActive
            ? "bg-box  border-gray-400 text-white shadow-lg scale-105"
            : "bg-page border-transparent text-[#0a1b4d] hover:border-pink-200 hover:shadow-md hover:-translate-y-1"
        }
      `}
    >
      <div className="mb-1 md:mb-2 w-14  h-14  sm:w-20 sm:h-20 lg:h-16 lg:w-16 flex items-center justify-center">
        <div className={isActive ? "brightness-0 invert" : ""}>
          {getImageForCategory(category.slug)}
        </div>
      </div>

      <span className="text-[12px] sm:text-[14px] md:text-sm   mb-0  lg:mb-2  font-bold text-center whitespace-nowrap overflow-hidden leading-tight">
        {category.name}
      </span>
    </Link>
  );
}

export default CategoryBox;
