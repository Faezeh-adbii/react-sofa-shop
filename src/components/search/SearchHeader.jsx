import React, { useEffect, useState, useRef } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import { searchSchema } from "../../utils/validations/searchSchema";
import Loader from "../loader/Loader";
import MobileSearchResults from "./MobileSearchResults";
import DesktopSearchResults from "./DesktopSearchResults";
import { useSearch } from "../../hooks/useSearch";
import SearchForm from "./SearchForm";

function SearchHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
    },
    mode: "onChange",
  });

  const searchTerm = watch("searchTerm");

  // کوئری
  const {
    debouncedTerm,
    products,
    isSearching,
    error,
    isResultsVisible,
    setIsResultsVisible,
  } = useSearch(searchTerm);

  // مدیریت خطا
  useEffect(() => {
    if (error) {
      console.error("❌ خطا در جستجو:", error);
      setIsResultsVisible(false);
    }
  }, [error]);

  //بستن نتایج با کلیک خارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ارسال فرم
  const onSubmit = (data) => {
    if (data.searchTerm && data.searchTerm.length >= 2) {
      setDebouncedTerm(data.searchTerm);
      setIsResultsVisible(true);
    }
  };

  return (
    <>
      {/*جستجوی دسکتاپ */}
      <div
        className="relative justify-center items-center md:inline hidden"
        ref={searchRef}
      >
        <SearchForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isSearching={isSearching}
          errors={errors}
          searchTerm={searchTerm}
          isValid={isValid}
          isSubmitting={isSubmitting}
          control={control}
          variant="desktop"
        />

        {/*نتایج جستجوی دسکتاپ */}
        <DesktopSearchResults
          debouncedTerm={debouncedTerm}
          isSearching={isSearching}
          isResultsVisible={isResultsVisible}
          products={products}
          setIsResultsVisible={setIsResultsVisible}
          setIsSearchOpen={setIsSearchOpen}
          error={error}
        />
      </div>

      {/*دکمه جستجوی موبایل*/}
      <div className="md:hidden">
        <button
          className="p-1 rounded-full bg-pink-800 mx-2 mt-1 absolute hover:scale-105 transition-all duration-300"
          style={{
            boxShadow:
              "rgba(3, 2, 3, 0.084) 0px 54px 55px, rgba(37, 8, 26, 0.023) 0px -12px 30px, rgba(177, 18, 129, 0.122) 0px 4px 6px, rgba(185, 21, 136, 0.138) 0px 12px 13px, rgba(112, 17, 69, 0.204) 0px -3px 5px",
          }}
          onClick={() => setIsSearchOpen(true)}
        >
          <IoSearch className="text-white text-xl font-medium" />
        </button>
      </div>

      {/*پس‌زمینه تیره */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSearchOpen(false)}
      />

      {/*صفحه جستجوی موبایل */}
      <div
        className={`fixed inset-x-0 bottom-0 h-[80%] bg-white z-50 lg:hidden rounded-t-3xl transition-all duration-300 ease-out ${
          isSearchOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-800">جستجو</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <IoClose className="text-2xl text-gray-600" />
            </button>
          </div>

          <SearchForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isSearching={isSearching}
            errors={errors}
            searchTerm={searchTerm}
            isValid={isValid}
            isSubmitting={isSubmitting}
            control={control}
            variant="mobile"
          />
          {/*نتایج جستجوی موبایل */}
          <MobileSearchResults
            products={products}
            debouncedTerm={debouncedTerm}
            error={error}
            isSearching={isSearching}
            setIsSearchOpen={setIsSearchOpen}
          />
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
