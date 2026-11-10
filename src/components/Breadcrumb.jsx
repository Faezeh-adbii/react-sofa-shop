import React from "react";
import { Link } from "react-router-dom";

import Loader from "./loader/Loader";

function Breadcrumb({ categoryName, productName }) {

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
      {/* بودن در صفحه products*/}
      {isProductsPage ? (
        <li className="text-pink-800 font-bold">محصولات</li>
      ) : (
        <li>
          <Link to="/products" className="hover:text-pink-700 transition-colors">
            محصولات
          </Link>
        </li>
      )}

      {/* بودن در صفحه CategoryPage*/}
      {isCategoryPage && (
        <>
          <li className="text-gray-300">/</li>
          <li className="text-pink-800 font-bold">{categoryName}</li>
        </>
      )}
      {/* بودن در صفحه productDetail*/}
      {productName && (
        <>
          <li className="text-gray-300">/</li>
          <li className="text-pink-800 font-bold">{productName}</li>
        </>
      )}
    </ul>
  );
}

export default Breadcrumb;
