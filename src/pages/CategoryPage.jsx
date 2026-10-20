import React from "react";
import { Link, useParams } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";

import { useProducts } from "../hooks/useProducts";
import Loader from "../components/loader/Loader";
import ProductsSliderCard from "../components/ProductsSliderCard";
import CategoryHeader from "../components/CategoryHeader";

function CategoryPage() {
  const { slug } = useParams();
  const { data: products, isLoading, error } = useProducts(slug);

  return (
    <div className="container py-8 mt-4 lg:mt-7">
      {/* 👇 کانتینر اصلی با چیدمان ستونی و راست‌چین */}
      <div className="w-full flex flex-col items-start  mb-10">
        {/* 👇 مسیر راهنما (Breadcrumb) */}
        <div className="w-full flex justify-start">
          <ul className="flex items-center gap-2 text-base text-gray-500 mb-6">
            <li>
              <Link to="/" className="hover:text-pink-700 transition-colors">
                مبل آرا
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link
                to="/products"
                className="hover:text-pink-700 transition-colors"
              >
                محصولات
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-pink-800 font-bold">
              {slug
                ? products?.[0]?.productCategory?.name || (
                    <Loader size={25} color="#9D174D" />
                  )
                : "همه محصولات"}
            </li>
          </ul>
        </div>

        {/* 👇 عنوان اصلی دسته‌بندی */}
        <h2 className="text-2xl md:text-3xl mt-3 flex items-center font-bold text-gray-800">
          {slug
            ? products?.[0]?.productCategory?.name || (
                <Loader size={42} color="#9D174D" />
              )
            : "همه محصولات"}
          <LuSparkles className="text-pink-700 text-3xl ms-2 animate-pulse" />
        </h2>

        {/* 👇 آیکون‌های دسته‌بندی */}
        <CategoryHeader activeSlug={slug} />
      </div>
    </div>
  );
}

export default CategoryPage;
