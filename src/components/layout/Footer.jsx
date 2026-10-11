import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

import FooterLink from "./FooterLink";
import FooterFeature from "./FooterFeature";
import { khadamats } from "../../constants/navbar";
import { features } from "../../constants/FooterFeature";
function Footer() {
  return (
    <footer
      className="
        relative w-full overflow-hidden
        bg-linear-to-br from-gray-950 via-gray-900/95 to-gray-950
        rounded-t-[50px]
        px-6 sm:px-10
        pt-12 sm:pt-10 pb-8
      "
    >
      {/* افکت تزئینی پس‌زمینه */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* ستون ۱: درباره ما */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <div className="sm:w-full sm:place-items-center md:place-items-start md:w-full  ">
              <Logo />
            </div>
            <p className="text-white/70 text-sm sm:text-base leading-7 text-center md:text-right max-w-md">
              خانه، جایی برای{" "}
              <span className="text-pink-400 font-bold">آرامش</span> و{" "}
              <span className="text-pink-400 font-bold">کنار هم بودن</span> است.
              در مبل آرا، تلاش می‌کنیم با ارائه مبلمان{" "}
              <span className="text-pink-400 font-bold">زیبا و باکیفیت</span>،
              لحظه‌های دلنشین خانه‌تان را زیباتر کنیم.
            </p>

            <div className="w-24 h-px bg-linear-to-r from-transparent via-pink-400 to-transparent" />

            {/* ویژگی‌ها */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 w-full max-w-xs">
              {features.map((feature, index) => (
                <FooterFeature key={index} feature={feature} />
              ))}
            </ul>
          </div>
          {/*ستون ۲: خدمات و دسترسی‌ها */}
          <div className="flex flex-col items-center pt-2 md:pt-4 md:items-start gap-5">
            <div className="relative">
              <h3 className="text-pink-400 text-lg sm:text-xl font-bold pb-3">
                خدمات و دسترسی‌ها
              </h3>
              <span className="absolute bottom-0 right-0 w-10 h-0.5 bg-linear-to-l from-pink-400 to-pink-400/0 rounded-full" />
            </div>

            <ul className="space-y-1.5 w-full max-w-xs">
              {khadamats.map((khadamat, index) => (
                <FooterLink key={index} khadamat={khadamat} />
              ))}
            </ul>
          </div>
          {/*ستون ۳: با ما در ارتباط باشید  */}
          <div className="flex flex-col items-center pt-2 md:pt-4 md:items-start gap-5">
            <div className="relative">
              <h3 className="text-pink-400 text-lg sm:text-xl font-bold pb-3">
                با ما در ارتباط باشید
              </h3>
              <span className="absolute bottom-0 right-0 w-10 h-0.5 bg-linear-to-l from-pink-400 to-pink-400/0 rounded-full" />
            </div>

            <p className="text-white/70 text-sm sm:text-base leading-7 text-center md:text-right max-w-md">
              مبل آرا از سال{" "}
              <span className="text-pink-400 font-bold">۱۳۸۵</span> با عشق به
              هنر و طراحی آغاز شد. ما با تکیه بر{" "}
              <span className="text-pink-400 font-bold">دانش و تجربه</span> و
              همکاری با بهترین کارگاه‌های تولیدی، مبلمانی می‌سازیم که سال‌ها در
              کنار شما می‌ماند.
            </p>

            <div className="flex items-center gap-2 text-pink-400/70 text-sm italic">
              <span className="w-8 h-px bg-pink-400/40" />
              <span>مبل آرا، خانه‌ای به وسعت آرامش </span>
            </div>
          </div>
        </div>
        {/*  خط جداکننده + کپی‌رایت */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs">
              © ۱۴۰۳ فروشگاه مبل آرا — تمامی حقوق محفوظ است.
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1">
              طراحی با
              <span className="text-pink-400 animate-pulse">❤</span>
              در ایران
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
