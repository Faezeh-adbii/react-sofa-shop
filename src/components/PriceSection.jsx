import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PRICE_RANGES } from "../constants/priceRanges";

function PriceSection({
    isPriceOpen,
    setIsPriceOpen,
    customMin,
    customMax,
    handleMinChange,
    handleMaxChange,
    sliderValues,
    handleSliderChange,
    selectedRanges,
    toggleRange,
    MAX_PRICE,
})

{
    return (
        <div className="mb-4">
            <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="w-full flex items-center justify-between py-3 focus:outline-none"
            >
                <span className="font-bold text-gray-800 text-sm">محدوده قیمت (تومان)</span>
                {isPriceOpen ? (
                    <FiChevronUp className="text-gray-500" />
                ) : (
                    <FiChevronDown className="text-gray-500" />
                )}
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isPriceOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    {/* اینپوت‌های قیمت */}
                    <div className="flex items-center gap-3 mb-6 px-1 pt-2">
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1.5 block">کمترین</label>
                            <input
                                type="number"
                                value={customMin}
                                onChange={handleMinChange}
                                placeholder="۰"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-pink-700  transition"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-xs text-gray-500 mb-1.5 block">بیشترین</label>
                            <input
                                type="number"
                                value={customMax}
                                onChange={handleMaxChange}
                                placeholder="۲۰۰,۰۰۰,۰۰۰"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-pink-700 transition"
                            />
                        </div>
                    </div>

                    {/* اسلایدر */}
                    <div className="px-3 mb-6">
                        <Slider
                            range
                            min={0}
                            max={MAX_PRICE}
                            step={1000000}
                            value={sliderValues}
                            onChange={handleSliderChange}
                            styles={{
                                track: { backgroundColor: "#BE185D", height: 6 },
                                handle: {
                                    borderColor: "#BE185D",
                                    backgroundColor: "#ffffff",
                                    width: 20,
                                    height: 20,
                                    marginTop: -7,
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                                },
                                rail: { backgroundColor: "#e5e7eb", height: 6 },
                            }}
                        />
                    </div>

                    {/* چک‌باکس‌ها */}
                    <div className="space-y-4 pb-2">
                        {PRICE_RANGES.map((range) => {
                            const checked = selectedRanges.some((r) => r.id === range.id);
                            return (
                                <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => toggleRange(range)}
                                            className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-pink-700 checked:border-pink-700 transition cursor-pointer"
                                        />
                                        <svg
                                            className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span
                                        className={`text-sm transition ${checked ? "text-gray-900 font-medium" : "text-gray-600 group-hover:text-gray-900"
                                            }`}
                                    >
                                        {range.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceSection