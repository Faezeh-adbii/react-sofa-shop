import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({category}) {
  return (
      <Link to={`/category/${category.slug}`} className="group">
        <div
          className="w-28 h-w-28 md:w-h-36 md:h-36 lg:w-40 lg:h-40
                              flex items-center justify-center 
                              overflow-hidden"
        >
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
  );
}

export default CategoryItem;
