// src/components/Slider.jsx
import React from "react";

function Slider() {
  return (
    <div className=" md:flex md:justify-center md:items-center place-items-center">
      <div className="flex md:mt-0 pt-8">
        <div>
          <span className=" text-2xl md:text-2xl lg:text-4xl font-bold text-pink-900">
            قیمت استثنایی
          </span>
        </div>
        <div className=" text-2xl font-bold text-pink-900 md:hidden block">
          <span>، کیفیت بی نظیر</span>
        </div>
      </div>
      <div className=" mt-5 w-[80%] md:w-[60%] lg:w-[54%] md:pt-17 ">
        <img
          src="/src/assets/slider/slider1.png"
          alt=""
          style={{
            filter: "drop-shadow(0 25px 10px rgba(0,0,0,0.15))",
          }}
        />
      </div>
      <div className="md:block hidden  md:mt-0 pt-7  md:text-2xl lg:text-4xl md:font-bold md:text-pink-900">
        <span>کیفیت بی نظیر</span>
      </div>
    </div>
  );
}

export default Slider;
