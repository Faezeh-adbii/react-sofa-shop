// src/components/search/MobileSearchResults.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IoSearch } from "react-icons/io5";
import Loader from "../loader/Loader";
import { useCategory } from "../../hooks/useCategory";

function MobileSearchResults({
  products,
  debouncedTerm,
  error,
  isSearching,
  setIsSearchOpen,
}) {
  // ✅ استفاده از کوئری موجود برای دسته‌بندی‌ها
  const { data: categoriesData, isLoading: categoriesLoading } = useCategory();

  const categories = categoriesData?.productCategories || [];

  return (
    <>
      {/* ===== وقتی کاربر تایپ کرده (۲ کاراکتر یا بیشتر) ===== */}
      {debouncedTerm.length >= 2 && (
        <div className="mt-4">
          {isSearching && (
            <div className="text-center py-8">
              <Loader size={40} color="#db2777" />
              <p className="text-gray-500 mt-2">در حال جستجو...</p>
            </div>
          )}

          {error && !isSearching && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              <p className="font-bold">خطا:</p>
              <p>{error.message}</p>
            </div>
          )}

          {!isSearching && !error && products.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">😕 هیچ نتیجه‌ای یافت نشد</p>
            </div>
          )}

          {!isSearching && !error && products.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-pink-800">
                    {products.length}
                  </span>{" "}
                  نتیجه برای "{debouncedTerm}"
                </p>
              </div>
              <div className="space-y-3">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug || product.id}`}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors duration-200"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    {product.mainImage?.url ? (
                      <img
                        src={product.mainImage.url}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <IoSearch className="text-gray-400 text-xl" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 truncate">
                        {product.name || "بدون نام"}
                      </p>
                      {product.productCategory?.name && (
                        <p className="text-xs text-pink-600 mt-1">
                          🏷️ {product.productCategory.name}
                        </p>
                      )}
                      {product.manufacturerCity && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          📍 {product.manufacturerCity}
                        </p>
                      )}
                    </div>
                    <IoSearch className="text-pink-600 text-xl" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/*وقتی کاربر چیزی تایپ نکرده - پیشنهادات*/}
      {debouncedTerm.length < 2 && (
        <div className="mt-8">
          {/* پیام راهنما */}
          <div className="text-center mb-6">
            <p className="text-gray-500 font-medium">
              حداقل ۲ کاراکتر وارد کنید
            </p>
            <p className="text-gray-400 text-sm mt-1">
              یا از دسته‌بندی‌های زیر انتخاب کنید
            </p>
          </div>

          {/* لودینگ دسته‌بندی‌ها */}
          {categoriesLoading && (
            <div className="text-center py-8">
              <Loader size={32} color="#db2777" />
              <p className="text-gray-500 mt-2 text-sm">در حال بارگذاری...</p>
            </div>
          )}

          {/* ✅ پیشنهادات بدون عکس */}
          {!categoriesLoading && categories.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
                <span>✨</span>
                <span>پیشنهادات جستجو</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category.slug}`}
                    className="flex items-center justify-center p-3.5 bg-gray-50 rounded-xl hover:bg-pink-50 hover:shadow-md border border-transparent hover:border-pink-200 transition-all duration-200"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <span className="text-sm font-bold text-gray-700 text-center">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* اگر دسته‌ای نبود */}
          {!categoriesLoading && categories.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">
              <p>دسته‌بندی‌ای برای نمایش وجود ندارد</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MobileSearchResults;
