import React from "react";

import { useCategory } from "../hooks/useCategory";
import CategoryBox from "./CategoryBox";

function CategoryHeader({ activeSlug }) {
  const { data, isLoading, error } = useCategory();

  const categories = data?.productCategories || [];

  console.log({ data });

  return (
    <div className="w-full flex justify-center my-6">
      {/* 👇 4 ستون برای موبایل و 8 ستون برای دسکتاپ (lg) */}
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4 lg:gap-5 place-items-center w-full max-w-7xl">
        {categories.map((category) => (
          <CategoryBox
            category={category}
            key={category.id}
            isActive={activeSlug === category.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryHeader;
