import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";

import { useProducts } from "../hooks/useProducts";
import Loader from "../components/loader/Loader";
import ProductsSliderCard from "../components/ProductsSliderCard";
import CategoryHeader from "../components/CategoryHeader";
import Breadcrumb from "../components/Breadcrumb";
import SortBar from "../components/SortBar";
import FilterSidebar from "../components/FilterSidebar";
import { getFinalPrice } from "../utils/priceUtils";

function Products() {
  const [filters, setFilters] = useState(null)
  const [sortBy, setSortBy] = useState("createdAt_DESC");
  const { slug } = useParams();
  const { data: products, isLoading, error } = useProducts(slug, sortBy);

  const categoryName = slug ? products?.[0]?.productCategory?.name : " محصولات";

  //منطق فیلتر کردن 
  const filteredProducts = useMemo(() => {
    if (!products) return []
    if (!filters) return products
    return products.filter(product => {
      const finalPrice = getFinalPrice(product.price, product.discountPercent);
      if (filters.minPrice != null && finalPrice < filters.minPrice) return false;
      if (filters.maxPrice != null && finalPrice > filters.maxPrice) return false;
      return true
    })
  }, [products, filters])

  //توابع مدیریت فیلتر
  const handleApplyFilters = (newFilters) => {
    if (newFilters.minPrice == null && newFilters.maxPrice == null) {
      setFilters(null)
    } else {
      setFilters(newFilters)
    }
  }
  //پاک کردن filter
  const handleClearFilters = () => {
    setFilters(null)
  }

  return (
    <div className="container py-8 mt-4 lg:mt-7">
      <div className="w-full flex flex-col items-start  mb-10">
        {/*مسیر راهنما (Breadcrumb) */}
        <div className="w-full flex justify-start">
          <Breadcrumb categoryName={categoryName} />
        </div>

        {/*  عنوان اصلی دسته‌بندی */}
        <h2 className="text-2xl md:text-3xl flex items-center font-bold text-gray-800">
          {slug
            ? products?.[0]?.productCategory?.name || (
              <Loader size={42} color="#9D174D" />
            )
            : " محصولات"}
          <LuSparkles className="text-pink-700 text-3xl ms-2 animate-pulse" />
        </h2>

        {/* 👇 آیکون‌های دسته‌بندی */}
        <CategoryHeader activeSlug={slug} />
      </div>
      {/*  محصولات + سایدبار فیلتر */}
      <div className="flex flex-col mt-4 md:mt-10 lg:mt-10 md:flex-row gap-8">
        {/* فیلتر */}
        <aside className=" md:w-[54%] lg:w-[30%] hidden md:block xl:w-1/4  ">
          <FilterSidebar
            filters={filters}
            onApply={handleApplyFilters}
            onClear={handleClearFilters}
          />
        </aside>
        <main className="w-full lg:w-3/4">
          {/*  باکس مشترک برای موبایل */}
          <div className="lg:hidden  flex items-center gap-3">
            {/* دکمه فیلتر */}
            <div className="flex-1 md:hidden w-full">
              <FilterSidebar
                filters={filters}
                onApply={handleApplyFilters}
                onClear={handleClearFilters}
                onlyMobileButton={true}
              />
            </div>
            {/* نوار مرتب‌سازی */}
            <div className="flex-4 w-full">
              <SortBar
                productCount={products?.length}
                isLoading={isLoading}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </div>
          {/*نوار مرتب‌سازی برای دسکتاپ  */}
          <div className="hidden lg:block">
            <SortBar
              productCount={products?.length}
              isLoading={isLoading}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          {/* لیست محصولات */}
          <div className="mt-6">
            {isLoading ? (
              <div className="text-center py-20">
                <Loader size={60} color="#BE185D" />
              </div>
            ) : error ? (
              <div className="text-center py-20 text-red-500 font-bold bg-red-50 rounded-xl">
                خطا: {error.message}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-xl">
                محصولی در این دسته‌بندی یافت نشد.
              </div>
            ) : (
              <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductsSliderCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}

export default Products;
