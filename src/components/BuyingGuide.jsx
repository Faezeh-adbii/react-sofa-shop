import React from "react";

import MoblImage from "../assets/mobl-cropped.webp";
import { tips } from "../constants/tips";
import GuideCard from "./GuideCard";

function BuyingGuide() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* کانتینر اصلی */}
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
        <div
          className="order-1
              flex w-full
              justify-center
              lg:order-2
              lg:w-[60%]
              mt-24
              lg:mt-60
            "
        >
          <img
            src={MoblImage}
            alt="مبل"
            className="
                h-auto
                w-[88%]
                max-w-[520px]
                object-contain
                drop-shadow-xl
                sm:w-[75%]
                md:w-[100%]
                lg:w-full
                lg:max-w-[700px]
              "
          />
        </div>
        <div
          className="
              order-2
              w-full
              lg:order-1
              lg:w-[40%]
              
            "
        >
          <div className="mb-8 mt-5 lg:mt-24 text-center lg:text-right">
            <h2
              className="
                  mb-3 text-2xl
                  font-extrabold
                  leading-tight
                  text-pink-900
                  sm:text-3xl
                  md:text-3xl
                "
            >
              راهنمای انتخاب مبل مناسب
            </h2>

            <p
              className="
                  text-sm
                  leading-7
                  text-gray-500
                  sm:text-base
                "
            >
              در ۴ مرحله ساده، مبل مناسب منزل خود را پیدا کنید
            </p>
          </div>
          {/* کارد راهنمایی*/}
          <div
            className="
           grid
           grid-cols-2
            gap-5
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-1
            "
          >
            {tips.map((tip, index) => 
            <GuideCard key={index} tip={tip} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyingGuide;
