import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* لوگوی SVG - رسپانسیو */}
      <svg
        className=" sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* کوسن مبل (پشت) */}
        <rect
          x="25"
          y="30"
          width="50"
          height="40"
          rx="8"
          fill="#DB2777"
          className="fill-pink-600"
        />
        {/* کوسن مبل (جلو) */}
        <rect
          x="20"
          y="45"
          width="60"
          height="35"
          rx="6"
          fill="#BE185D"
          className="fill-pink-700"
        />
        {/* دسته مبل (چپ) */}
        <rect x="10" y="50" width="12" height="30" rx="4" fill="#9D174D" />
        {/* دسته مبل (راست) */}
        <rect x="78" y="50" width="12" height="30" rx="4" fill="#9D174D" />
        {/* پایه مبل (چپ) */}
        <rect x="25" y="80" width="6" height="12" rx="2" fill="#7E22CE" />
        {/* پایه مبل (راست) */}
        <rect x="69" y="80" width="6" height="12" rx="2" fill="#7E22CE" />
      </svg>

      {/* نام برند - رسپانسیو */}
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-pink-700">
          مبل آرا
        </h1>
        <p className="text-[8px] sm:text-xs md:text-sm text-gray-500">
          خانه‌ای آراسته با مبل
        </p>
      </div>
    </div>
  );
}

export default Logo;