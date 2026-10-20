import React from "react";
import { Link } from "react-router-dom";

import Loader from "./loader/Loader";

function Breadcrumb({ categoryName }) {
  return (
    <ul className="flex items-center gap-2 text-base text-gray-500 mb-6">
      <li>
        <Link to="/" className="hover:text-pink-700 transition-colors">
          مبل آرا
        </Link>
      </li>
      <li className="text-gray-300">/</li>
      <li>
        <Link to="/products" className="hover:text-pink-700 transition-colors">
          محصولات
        </Link>
      </li>
      <li className="text-gray-300">/</li>
      <li className="text-pink-800 font-bold">
        {categoryName || <Loader size={25} color="#9D174D" />}
      </li>
    </ul>
  );
}

export default Breadcrumb;
