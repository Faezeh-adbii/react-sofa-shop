import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiSofaLine } from "react-icons/ri";

import Loader from "./loader/Loader";
import { useProductsSlider } from "../hooks/useProductsSlider";
import ProductsSliderCard from "./ProductsSliderCard";

function ProductSlider() {
  const { data, isLoading, error } = useProductsSlider();
  const products = data?.products || [];

  console.log({ data });

  return (
    <>
      <div className=" flex justify-between items-center mt-45 mb-9 ">
        <div>
          <span className="flex text-[1.5rem] md:text-[1.8rem] gap-2 text-black font-bold">
            مبلمان زیبا
            <RiSofaLine className="text-3xl mt-0 md:mt-1" />
          </span>
        </div>
        <Link to="/products" className="bg-gray-900/95 hover:bg-pink-950/95  transition-all duration-300 flex gap-2 font-bold  text-white px-1  sm:px-5  md:px-7 rounded-xl py-3">
          مشاهده محصولات بیشتر
          <IoIosArrowBack className="text-white mt-1 " />
        </Link>
      </div>
      <div
        className="flex flex-row  py-4 md:py-1 ps-20 sm:ps-17 gap-1.5 sm:gap-3 md:gap-4 
      overflow-hidden bg-gray-900/95   rounded-2xl sm:rounded-4xl inverted-radius-top"
      >
        {/*  اسلایدر (سمت چپ) */}
        <div className="relative flex-1 min-w-0 overflow-hidden">
          <div className="relative p-1.5 sm:p-2 md:p-4 lg:p-6">
            {isLoading ? (
              <div className="text-center py-12">
                <Loader size={70} color="#BE185D" />
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                خطا: {error.message}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                پیشنهاد ویژه‌ای موجود نیست
              </div>
            ) : (
              <Swiper
                modules={[FreeMode, Mousewheel]}
                spaceBetween={16}
                slidesPerView="auto"
                FreeMode={true}
                grabCursor={true}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1,
                  releaseOnEdges: true,
                }}
                className="pb-4 w-full"
                breakpoints={{
                  0: { spaceBetween: 8 },
                  640: { spaceBetween: 12 },
                  768: { spaceBetween: 16 },
                  1024: { spaceBetween: 20 },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="w-[180px]! sm:w-[180px]! md:w-[180px]! lg:w-[220px]!"
                  >
                    <ProductsSliderCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
