import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HiChevronDown } from "react-icons/hi";

import Loader from "../loader/Loader";
import { fetchCategoryNav } from "../../services/productsService";
import { useCategory } from "../../hooks/useCategoryNav";

function CategoryNav({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const { data, isPending, error } = useCategory()

  const categories = data?.productCategories || [];

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* دکمه دسته‌بندی */}
      <div className="flex items-center gap-2 bg-black text-white px-1 py-2 rounded-xl hover:bg-pink-800 transition-colors cursor-pointer">
        <item.icon className="text-[1.09rem]" />
        <span className="pt-1 text-[0.97rem] font-bold">{item.name}</span>
        <HiChevronDown
          className={`text-sm transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/*  منوی کشویی با پس‌زمینه نیمه‌شفاف و سایه سنگین */}
      <div
        className={`absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl z-50 transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isOpen ? "opacity-100 scale-y-100 border-t-4 border-pink-600" : "opacity-0 scale-y-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-2 py-2">
          {isPending ? (
            <div className="px-4 py-2 text-center">
              <Loader size={50} color="#BE185D"/>
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
            categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-pink-50 transition-all duration-200 group"
                onClick={handleMouseLeave}
              >
                {category.imageCategory?.url && (
                  <img
                    src={category.imageCategory.url}
                    alt={category.name}
                    className="w-8 h-8 object-cover rounded-full border border-gray-200"
                  />
                )}
                <span className="text-gray-700 group-hover:text-pink-600 group-hover:scale-105 transition-all duration-300 text-sm font-medium">
                  {category.name}
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryNav;