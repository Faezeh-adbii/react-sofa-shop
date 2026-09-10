import React from "react";
import Loader from "../loader/Loader";
import { IoSearch } from "react-icons/io5";
import { Controller } from "react-hook-form";

function SearchForm({
  handleSubmit,
  onSubmit,
  isSearching,
  errors,
  searchTerm,
  isValid,
  control,
  isSubmitting,
  variant,
}) {
  const isDesktop = variant === "desktop";

  const inputClasses = isDesktop
    ? "w-86 bg-white/85 py-2.5 px-6 border-2 border-pink-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-600/35 hover:bg-white transition-all duration-300"
    : "w-full bg-gray-50 py-3.5 px-5 pr-14 border-2 border-pink-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-600/35 text-base placeholder:text-gray-400 transition-all duration-300";

  const buttonClasses = isDesktop
    ? "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-pink-800 hover:bg-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
    : "absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-pink-800 hover:bg-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <Controller
            name="searchTerm"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="مدل مبل موردنظر را جستجو کنید..."
                className={inputClasses}
                autoFocus={!isDesktop}
              />
            )}
          />
          <button
            type="submit"
            disabled={isSubmitting || isSearching || !isValid}
            className={buttonClasses}
          >
            <IoSearch
              className={
                isDesktop ? "text-white text-xl" : "text-white text-2xl"
              }
            />
          </button>
        </div>
        {errors.searchTerm && (
          <p className="text-red-500 text-sm mt-2">
            {errors.searchTerm.message}
          </p>
        )}
      </form>
    </>
  );
}

export default SearchForm;
