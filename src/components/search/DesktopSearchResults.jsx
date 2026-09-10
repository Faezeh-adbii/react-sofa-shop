import React from "react";
import { Link } from "react-router-dom";

import Loader from "../loader/Loader";

function DesktopSearchResults({
  debouncedTerm,
  isSearching,
  isResultsVisible,
  products,
  setIsResultsVisible,
  setIsSearchOpen,
  error
}) {
  return (
    <>
      {isResultsVisible && debouncedTerm.length >= 2 && (
        <div className="absolute  left-0 mt-2 w-86 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center">
              <Loader size={30} color="#db2777" />
              <p className="text-gray-500 mt-2">در حال جستجو...</p>
            </div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">
              <p>خطا در جستجو</p>
              <p className="text-sm">{error.message}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <p>هیچ نتیجه‌ای برای "{debouncedTerm}" یافت نشد</p>
            </div>
          ) : (
            <div className="py-2">
              <div className="px-4 py-2 text-xs text-gray-600 border-b">
                {products.length} نتیجه یافت شد
              </div>
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="block px-4 py-3 hover:bg-pink-50 transition-colors duration-200 border-b border-gray-100 last:border-0"
                  onClick={() => {
                    setIsResultsVisible(false);
                    setIsSearchOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3 group">
                    {product.mainImage && (
                      <img
                        src={product.mainImage.url}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1 min-w-0 ">
                      <p className="text-sm font-bold text-gray-600  truncate group-hover:text-pink-600 group-hover:scale-[1.02] transition-all duration-300 ">
                        {product.name || "بدون نام"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DesktopSearchResults;
