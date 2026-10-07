import React from "react";
import { IoCall } from "react-icons/io5";
import Loader from "./loader/Loader";

function ConsultationForm({
  handleSubmit,
  register,
  isSubmitting,
  isPending,
  onSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        flex flex-col
        sm:flex-row
        gap-3 sm:gap-4 lg:gap-8
        justify-center items-center
      "
    >
      <input
        type="tel"
        inputMode="numeric"
        disabled={isSubmitting || isPending}
        {...register("phone")}
        placeholder="شماره تماس خود را وارد کنید"
        className="
          w-full
          bg-transparent border border-white/40
          rounded-xl
          px-3 sm:px-4
          py-2.5 sm:py-3.5
          text-white text-xs sm:text-sm
          placeholder-white/70
          transition-all duration-300
          focus:outline-none focus:border-white
          disabled:opacity-50
          text-right
        "
      />

      <button
        type="submit"
        disabled={isSubmitting || isPending}
        className="
          bg-white/85 text-pink-900 font-bold
          text-xs sm:text-sm
          rounded-xl
          px-6 sm:px-8
          hover:bg-white transition-all
          disabled:opacity-60 disabled:cursor-not-allowed
          flex items-center justify-center gap-1.5 sm:gap-2
          whitespace-nowrap
          w-full sm:w-auto
          h-10 sm:h-12
          min-w-[110px] sm:min-w-[130px]
        "
      >
        {isSubmitting || isPending ? (
          <Loader size={24} color="#831843" />
        ) : (
          <div className="flex justify-center items-center gap-1">
            <span className="text-[1rem] sm:text-[1.14rem] font-bold mt-0.5 sm:mt-1">
              ثبت
            </span>
            <IoCall className="text-sm sm:text-[1.1rem]" />
          </div>
        )}
      </button>
    </form>
  );
}

export default ConsultationForm;