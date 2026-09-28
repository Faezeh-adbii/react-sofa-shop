// src/components/SpecialOffers.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import { useSpecialOffers } from "../hooks/useSpecialOffers";
import SpecialOfferCard from "./SpecialOfferCard";
import Loader from "./loader/Loader";

function SpecialOffers() {
  const { data, isLoading, error } = useSpecialOffers();
  const products = data?.products || [];

  return (
    <div
      className="flex  flex-row mt-33 px-2 sm:px-3 gap-1.5 sm:gap-3 md:gap-4 
                    overflow-hidden bg-box rounded-2xl sm:rounded-4xl"
    >
      {/*  باکس تخفیف (سمت راست) -  */}
      <div
        className="relative shrink-0 
                      w-40 sm:w-40 md:w-44 lg:w-64 
                      mt-6 sm:mt-8 md:mt-12 lg:mt-15"
      >
        <div
          className="relative z-10 w-full h-full 
                        flex flex-col items-center justify-center 
                        text-white 
                        min-h-40 sm:min-h-56 md:min-h-72 lg:min-h-80
"
        >
          <div className="relative mb-1 sm:mb-2 md:mb-3">
            <img
              src="/src/assets/offer.webp"
              alt=""
              className="w-40 sm:w-40 md:w-44 lg:w-52"
            />
          </div>

          <h3
            className="text-[10px] sm:text-xs md:text-lg lg:text-2xl 
                         font-extrabold text-center leading-snug px-0.5"
          >
            با تخفیف بخر
          </h3>
          <p
            className="text-[8px] sm:text-[10px] md:text-sm lg:text-base 
                        font-bold mt-0.5 text-center text-pink-100 px-0.5"
          >
            پولتو پس انداز کن
          </p>
        </div>
      </div>

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
              freeMode={true}
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
                  <SpecialOfferCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
