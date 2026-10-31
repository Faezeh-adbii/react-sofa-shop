// فایل: src/components/FilterSidebar.jsx
import React, { useState } from "react";
import { FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IoClose } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

import { PRICE_RANGES } from "../constants/priceRanges";
import PriceSection from "./PriceSection";

const MAX_PRICE = 200000000; // سقف اسلایدر (۲۰۰ میلیون تومان)

function FilterSidebar({ onApply, onClear, onlyMobileButton = false }) {
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [sliderValues, setSliderValues] = useState([0, MAX_PRICE]);
  const [customMin, setCustomMin] = useState("");
  const [customMax, setCustomMax] = useState("");

  const handleSliderChange = (values) => {
    setSliderValues(values);
    setCustomMin(values[0]);
    setCustomMax(values[1]);
  };

  const handleMinChange = (e) => {
    const val = Number(e.target.value);
    setCustomMin(e.target.value);
    if (val >= 0 && val <= sliderValues[1]) {
      setSliderValues([val, sliderValues[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const val = Number(e.target.value);
    setCustomMax(e.target.value);
    if (val <= MAX_PRICE && val >= sliderValues[0]) {
      setSliderValues([sliderValues[0], val]);
    }
  };

  const toggleRange = (range) => {
    setSelectedRanges((prev) =>
      prev.some((r) => r.id === range.id)
        ? prev.filter((r) => r.id !== range.id)
        : [...prev, range]
    );
  };

  const handleClear = () => {
    setSelectedRanges([]);
    setCustomMax("");
    setCustomMin("");
    setSliderValues([0, MAX_PRICE]);
    if (onClear) onClear();
  };

  const handleApply = () => {
    let minPrice = customMin ? Number(customMin) : null;
    let maxPrice = customMax ? Number(customMax) : null;

    if (selectedRanges.length > 0) {
      const mins = selectedRanges.map((r) => r.min).filter((v) => v !== null);
      const maxes = selectedRanges.map((r) => r.max).filter((v) => v !== null);
      if (mins.length > 0 && minPrice === null) minPrice = Math.min(...mins);
      if (maxes.length > 0 && maxPrice === null) maxPrice = Math.max(...maxes);
    }

    if (sliderValues[0] === 0 && sliderValues[1] === MAX_PRICE) {
      minPrice = null;
      maxPrice = null;
    }

    if (onApply) {
      onApply({ minPrice, maxPrice });
    }
    setIsOpen(false);
  };

  const hasFilter =
    selectedRanges.length > 0 ||
    customMin !== "" ||
    customMax !== "" ||
    sliderValues[0] !== 0 ||
    sliderValues[1] !== MAX_PRICE;
  return (
    <>
      {/* نسخه دسکتاپ */}

      {!onlyMobileButton && <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm sticky top-4 font-sans">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <h3 className="font-bold text-gray-800 text-lg">فیلترها</h3>
          {hasFilter && (
            <button
              onClick={handleClear}
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium transition"
            >
              <FiTrash2 size={16} />
              حذف همه
            </button>
          )}
        </div>
        <PriceSection isPriceOpen={isPriceOpen}
          setIsPriceOpen={setIsPriceOpen}
          customMin={customMin}
          customMax={customMax}
          handleMinChange={handleMinChange}
          handleMaxChange={handleMaxChange}
          sliderValues={sliderValues}
          handleSliderChange={handleSliderChange}
          selectedRanges={selectedRanges}
          toggleRange={toggleRange}
          MAX_PRICE={MAX_PRICE} />

        <button
          onClick={handleApply}
          className="w-full flex justify-center items-center  bg-box hover:bg-pink-900 text-white font-bold py-3 rounded-xl transition shadow-md shadow-pink-700/20 active:scale-[0.98] mt-2"
        >
          اعمال فیلتر
        </button>
      </div>}

      {/*  دکمه موبایل (بدون باکس سفید، فقط دکمه) */}
      {onlyMobileButton && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#0a1b4d] font-bold active:scale-95 transition-transform "
        >
          <CiFilter size={20} />
          <span>فیلترها</span>
          {hasFilter && <span className="w-2 h-2 rounded-full bg-pink-600 ml-1 animate-pulse"></span>}
        </button>
      )}

      {/* منوی کشویی موبایل */}
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100  visible" : "opacity-0 invisible"
          }`}
      >
        <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
        <div
          className={`relative w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <div className="px-5 pt-3 pb-3 border-b border-gray-100 shrink-0">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#0a1b4d]">
                <div className="bg-pink-50 p-2 rounded-full">
                  <CiFilter size={20} className="text-pink-700" />
                </div>
                <h3 className="font-bold text-lg">فیلترها</h3>
              </div>
              <div className="flex items-center gap-3">
                {hasFilter && (
                  <button
                    onClick={handleClear}
                    className="text-sm text-red-500 hover:text-red-600 font-medium"
                  >
                    حذف همه
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-700 bg-gray-100 p-1.5 rounded-full transition-colors"
                >
                  <IoClose size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 md:px-24 overflow-y-auto grow">
            <PriceSection isPriceOpen={isPriceOpen}
              setIsPriceOpen={setIsPriceOpen}
              customMin={customMin}
              customMax={customMax}
              handleMinChange={handleMinChange}
              handleMaxChange={handleMaxChange}
              sliderValues={sliderValues}
              handleSliderChange={handleSliderChange}
              selectedRanges={selectedRanges}
              toggleRange={toggleRange}
              MAX_PRICE={MAX_PRICE} />
          </div>

          <div className="p-4 md:px-24 border-t border-gray-100 bg-white shrink-0 rounded-b-3xl">
            <button
              onClick={handleApply}
              className="w-full bg-box flex justify-center items-center hover:bg-pink-900 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-pink-700/20 active:scale-[0.98]"
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;