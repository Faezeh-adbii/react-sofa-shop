import React from "react";
import { Link } from "react-router-dom";

import Loader from "./loader/Loader";

function Breadcrumb({ categoryName }) {

  const isProductsPage = categoryName === "محصولات";
  const isCategoryPage = categoryName && categoryName !== "محصولات";

  return (
    <ul className="flex items-center gap-2 text-base text-gray-500 mb-6">
      <li>
        <Link to="/" className="hover:text-pink-700 transition-colors">
          مبل آرا
        </Link>
      </li>
      <li className="text-gray-300">/</li>
      {/* 👇 اگر در صفحه /products هستیم، "محصولات" را بدون لینک (فعال) نشان بده */}
      {isProductsPage ? (
        <li className="text-pink-800 font-bold">محصولات</li>
      ) : (
        <li>
          <Link to="/products" className="hover:text-pink-700 transition-colors">
            محصولات
          </Link>
        </li>
      )}

      {/* 👇 اگر در صفحه دسته‌بندی هستیم، نام دسته را بعد از محصولات نشان بده */}
      {isCategoryPage && (
        <>
          <li className="text-gray-300">/</li>
          <li className="text-pink-800 font-bold">{categoryName}</li>
        </>
      )}
    </ul>
  );
}

export default Breadcrumb;
